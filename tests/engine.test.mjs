import test from 'node:test';
import assert from 'node:assert/strict';

await import('../js/engine.js');
const E = globalThis.HKCCEngine;

const controls = [
  { id: 'A', priority: 'baseline', applicability: { licenses: ['l1'], attributes: ['a1'] } },
  { id: 'B', priority: 'enhanced', applicability: { licenses: ['l1'], attributes: ['a1'] } },
  { id: 'C', priority: 'baseline', applicability: { licenses: ['l2'], attributes: [] }, overlaps: ['A'] },
  { id: 'D', priority: 'baseline', applicability: { licenses: ['l1'], attributes: [] }, related: ['A', 'C'] }
];
const equivalence = [{ id: 'eq-ab', basis: 'reviewed', members: ['A', 'B'] }];

test('applies uses any licence and all attributes', () => {
  assert.equal(E.applies(controls[0], new Set(['l1']), new Set()), false);
  assert.equal(E.applies(controls[0], new Set(['l1']), new Set(['a1'])), true);
  assert.equal(E.applies(controls[0], new Set(['l2']), new Set(['a1'])), false);
});

test('indexAttributeLicenses derives relevant entity types from controls', () => {
  const index = E.indexAttributeLicenses(controls);
  assert.deepEqual([...index.get('a1')].sort(), ['l1']);
  assert.equal(index.has('missing'), false);
});

test('cluster merges equivalence groups only, never overlaps or related', () => {
  assert.deepEqual(E.cluster(controls, equivalence, true).map(g => g.map(c => c.id)), [['A', 'B'], ['C'], ['D']]);
  assert.deepEqual(E.cluster(controls, equivalence, false).map(g => g.map(c => c.id)), [['A'], ['B'], ['C'], ['D']]);
  assert.deepEqual(E.cluster(controls, [], true).map(g => g.map(c => c.id)), [['A'], ['B'], ['C'], ['D']]);
});

test('cluster merges only the members that apply', () => {
  const three = [{ id: 'eq', members: ['A', 'B', 'X'] }];
  assert.deepEqual(E.cluster(controls.slice(0, 1), three, true).map(g => g.map(c => c.id)), [['A']]);
});

test('indexRelations is symmetric and overlaps wins over related', () => {
  const index = E.indexRelations(controls);
  assert.deepEqual([...index.get('A').overlaps], ['C']);
  assert.deepEqual([...index.get('C').overlaps], ['A']);
  assert.deepEqual([...index.get('A').related], ['D']);
  assert.deepEqual([...index.get('C').related], ['D']);
  const both = E.indexRelations([{ id: 'P', overlaps: ['Q'] }, { id: 'Q', related: ['P'] }]);
  assert.deepEqual([...both.get('P').related], []);
});

test('equivalenceFor finds the group behind a merged card', () => {
  assert.equal(E.equivalenceFor(controls.slice(0, 2), equivalence).id, 'eq-ab');
  assert.equal(E.equivalenceFor(controls.slice(0, 1), equivalence), null);
});

test('pendingCount includes unassessed, partial and gap', () => {
  assert.equal(E.pendingCount(controls.slice(0, 2), { A: { status: 'done' }, B: { status: 'na' } }), 0);
  assert.equal(E.pendingCount(controls.slice(0, 2), { A: { status: 'partial' } }), 2);
});

test('v1 merged state propagates without overwriting explicit member state', () => {
  const migrated = E.migrateV1({
    licenses: ['l1'], attributes: ['a1'], merge: true,
    assessment: { A: 'done', B: 'partial', UNKNOWN: 'gap' }
  }, controls, equivalence);
  assert.equal(migrated.assessments.A.status, 'done');
  assert.equal(migrated.assessments.B.status, 'partial');
  assert.equal(migrated.unresolvedAssessments.UNKNOWN.status, 'gap');
});

test('v1 merged state propagates to an unassessed member', () => {
  const migrated = E.migrateV1({
    licenses: ['l1'], attributes: ['a1'], merge: true, assessment: { A: 'done' }
  }, controls, equivalence);
  assert.equal(migrated.assessments.B.status, 'done');
});

test('v1 merged state does not propagate to merely overlapping controls', () => {
  const migrated = E.migrateV1({
    licenses: ['l1', 'l2'], attributes: ['a1'], merge: true, assessment: { A: 'done' }
  }, controls, equivalence);
  assert.equal(migrated.assessments.C, undefined);
});

test('v1 unmerged state stays on its original control', () => {
  const migrated = E.migrateV1({
    licenses: ['l1'], attributes: ['a1'], merge: false, assessment: { A: 'done' }
  }, controls, equivalence);
  assert.equal(migrated.assessments.A.status, 'done');
  assert.equal(migrated.assessments.B, undefined);
});

test('csvCell neutralises formulas and escapes quotes', () => {
  assert.equal(E.csvCell('=2+2'), '"\'=2+2"');
  assert.equal(E.csvCell('+SUM(A1)'), '"\'+SUM(A1)"');
  assert.equal(E.csvCell('a,"b"'), '"a,""b"""');
});

test('dueState is reproducible from the assessment date', () => {
  assert.equal(E.dueState('2026-09-08', '2026-09-09'), 'overdue');
  assert.equal(E.dueState('2026-10-09', '2026-09-09'), 'due-soon');
  assert.equal(E.dueState('2026-10-10', '2026-09-09'), '');
  assert.equal(E.dueState('2026-02-30', '2026-02-01'), '');
});

const definitions = {
  controlIds: new Set(['A', 'B']),
  licenseIds: new Set(['l1']),
  attributeIds: new Set(['a1'])
};

test('project validation normalises known data and quarantines unknown controls', () => {
  const result = E.validateProject({
    schemaVersion: 2,
    controlDataVersion: '1.2.0',
    exportedAt: '2026-09-09T00:00:00.000Z',
    project: { name: 'Test', asOfDate: '2026-09-09' },
    scope: { licenses: ['l1', 'old-licence'], attributes: ['a1'] },
    assessments: {
      A: { status: 'partial', owner: 'Risk' },
      OLD: { status: 'gap', evidenceRef: 'ticket-1' }
    }
  }, definitions);
  assert.equal(result.ok, true);
  assert.deepEqual(result.data.scope.licenses, ['l1']);
  assert.equal(result.data.assessments.A.owner, 'Risk');
  assert.equal(result.data.unresolvedAssessments.OLD.status, 'gap');
  assert.ok(result.warnings.length >= 2);
});

test('project validation rejects future schemas and invalid records atomically', () => {
  assert.equal(E.validateProject({ schemaVersion: 3 }, definitions).ok, false);
  const invalid = E.validateProject({
    schemaVersion: 2,
    project: { name: 'Test', asOfDate: '09/09/2026' },
    scope: { licenses: ['l1'], attributes: [] },
    assessments: { A: { status: '=bad' } }
  }, definitions);
  assert.equal(invalid.ok, false);
  assert.ok(invalid.errors.length >= 2);

  const impossibleDate = E.validateProject({
    schemaVersion: 2,
    project: { name: 'Test', asOfDate: '2026-02-30' },
    scope: { licenses: ['l1'], attributes: [] },
    assessments: {}
  }, definitions);
  assert.equal(impossibleDate.ok, false);
});

test('a formerly unknown control is restored when the current data recognises it', () => {
  const result = E.validateProject({
    schemaVersion: 2,
    project: { name: 'Test', asOfDate: '2026-09-09' },
    scope: { licenses: ['l1'], attributes: [] },
    assessments: {},
    unresolvedAssessments: { A: { status: 'done', owner: 'Risk' } }
  }, definitions);
  assert.equal(result.ok, true);
  assert.equal(result.data.assessments.A.status, 'done');
  assert.equal(result.data.unresolvedAssessments.A, undefined);
});

test('legacy project files migrate explicitly', () => {
  const result = E.validateProject({
    schemaVersion: 1,
    licenses: ['l1'], attributes: ['a1'], assessment: { A: 'done' }
  }, definitions);
  assert.equal(result.ok, true);
  assert.equal(result.data.schemaVersion, 2);
  assert.equal(result.data.assessments.A.status, 'done');
});

/* 诊断以代码回传，页面才能按当前语言显示。
   引擎里写死任何一种语言，都会让另外两种语言的使用者在对话框里读到外语。 */
test('diagnostics carry language-neutral codes, never prose', () => {
  const result = E.validateProject({
    schemaVersion: 2,
    project: { name: 'Test', asOfDate: 'not-a-date' },
    scope: { licenses: ['l1', 'gone'], attributes: [] },
    assessments: { A: { status: 'nonsense' }, GHOST: { status: 'done' } }
  }, definitions);

  assert.equal(result.ok, false);
  for (const item of [...result.errors, ...result.warnings]) {
    assert.equal(typeof item, 'object', '诊断必须是 { code, params } 而非字符串');
    assert.ok(E.DIAGNOSTIC_CODES.includes(item.code), `未登记的诊断代码 ${item.code}`);
    assert.ok(!/[一-鿿]/.test(JSON.stringify(item.code)), '诊断代码不得含中文');
  }
  assert.ok(result.errors.some(e => e.code === 'diagAsOfDateInvalid'));
  assert.ok(result.errors.some(e => e.code === 'diagStatusInvalid' && e.params.id === 'A'));
});

test('a too-new schema reports its version as a parameter', () => {
  const result = E.validateProject({ schemaVersion: 99 }, definitions);
  assert.equal(result.ok, false);
  assert.deepEqual(result.errors, [{ code: 'diagSchemaTooNew', params: { version: 99 } }]);
});

test('unknown scope entries warn by code and are dropped', () => {
  const result = E.validateProject({
    schemaVersion: 2,
    project: { name: 'Test', asOfDate: '2026-09-09' },
    scope: { licenses: ['l1', 'gone'], attributes: ['a1', 'vanished'] },
    assessments: {}
  }, definitions);
  assert.equal(result.ok, true);
  assert.deepEqual(result.data.scope, { licenses: ['l1'], attributes: ['a1'] });
  assert.deepEqual(result.warnings.map(w => w.code).sort(),
    ['diagUnknownAttribute', 'diagUnknownLicense']);
});

test('migrateV1 rejects non-objects with a coded diagnostic', () => {
  assert.throws(() => E.migrateV1('not an object', controls),
    error => error.diagnostic?.code === 'diagLegacyNotObject');
});

test('recordsShared compares record fields and ignores assessedAt', () => {
  assert.equal(E.recordsShared(['A', 'B'], {}), true);
  assert.equal(E.recordsShared(['A', 'B'], {
    A: { status: 'done', evidenceRef: 'MFA-001', assessedAt: '2026-10-01' },
    B: { status: 'done', evidenceRef: 'MFA-001', assessedAt: '2026-10-07' }
  }), true);
  assert.equal(E.recordsShared(['A', 'B'], { A: { status: 'done' } }), false);
  assert.equal(E.recordsShared(['A', 'B'], { A: { status: 'done', owner: 'x' }, B: { status: 'done' } }), false);
});

test('shareRecord copies one member to the rest without mutating the input', () => {
  const before = { A: { status: 'done', evidenceRef: 'MFA-001' }, B: { status: 'gap' }, C: { status: 'na' } };
  const after = E.shareRecord(['A', 'B'], 'A', before);
  assert.deepEqual(after.B, { status: 'done', evidenceRef: 'MFA-001' });
  assert.deepEqual(after.C, { status: 'na' });
  assert.deepEqual(before.B, { status: 'gap' });
  assert.notEqual(after.B, after.A);
  assert.equal(E.shareRecord(['A', 'B'], 'X', before).B, undefined);
});
