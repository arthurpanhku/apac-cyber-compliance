import test from 'node:test';
import assert from 'node:assert/strict';
import { checkOverlaps, LEGACY_WITHOUT_DELTA } from '../tools/lib/overlap-rules.mjs';
import { loadData } from '../tools/lib/load-data.mjs';

await import('../js/engine.js');
const E = globalThis.HKCCEngine;

const TODAY = '2026-10-26';
const A = { id: 'A', sourceId: 's1' };
const B = { id: 'B', sourceId: 's2' };
const C = { id: 'C', sourceId: 's3' };
const group = overrides => ({
  id: 'ov', reviewedOn: TODAY, members: ['A', 'B'], delta: { A: 'A 另要求 1 小时', B: 'B 另要求通知董事会' }, ...overrides
});
const en = { ov: { delta: { A: 'A adds 1 hour', B: 'B adds board' } } };
const fixture = ({ controls = [A, B, C], overlaps = [group()], equivalence = [], enLayer = en } = {}) => ({
  controls, overlaps, equivalence, i18n: { en: { overlaps: enLayer } }
});
const codes = (data, legacy = new Set()) => checkOverlaps(data, TODAY, legacy).map(e => e.code);

test('a well-formed overlap with deltas on both sides passes', () => {
  assert.deepEqual(codes(fixture()), []);
});

test('the real data passes every overlap rule', () => {
  assert.deepEqual(checkOverlaps(loadData(), TODAY), []);
});

test('OV1: exactly two existing, distinct members; each pair registered once', () => {
  assert.ok(codes(fixture({ overlaps: [group({ members: ['A'] })] })).includes('OV1'));
  assert.ok(codes(fixture({ overlaps: [group({ members: ['A', 'B', 'C'] })] })).includes('OV1'));
  assert.ok(codes(fixture({ overlaps: [group({ members: ['A', 'Z'], delta: { A: 'x', Z: 'y' } })] })).includes('OV1'));
  assert.ok(codes(fixture({ overlaps: [group(), group({ id: 'ov2', members: ['B', 'A'] })] })).includes('OV1'));
});

test('OV2: delta must name both members, with text or an explicit null', () => {
  assert.ok(codes(fixture({ overlaps: [group({ delta: { A: 'x' } })] })).includes('OV2'));
  assert.ok(codes(fixture({ overlaps: [group({ delta: { A: 'x', B: '  ' } })] })).includes('OV2'));
  assert.ok(codes(fixture({ overlaps: [group({ delta: { A: 'x', B: 'y', C: 'z' } })] })).includes('OV2'));
  assert.ok(codes(fixture({ overlaps: [group({ delta: undefined })] })).includes('OV2'));
  // one side fully covered by the other is allowed
  assert.deepEqual(codes(fixture({ overlaps: [group({ delta: { A: 'x', B: null } })],
    enLayer: { ov: { delta: { A: 'x' } } } })), []);
});

test('OV3: nothing extra on either side is equivalence, not an overlap', () => {
  assert.ok(codes(fixture({ overlaps: [group({ delta: { A: null, B: null } })], enLayer: {} })).includes('OV3'));
});

test('OV4: every delta needs English text, and a null delta must have none', () => {
  assert.ok(codes(fixture({ enLayer: {} })).includes('OV4'));
  assert.ok(codes(fixture({ enLayer: { ov: { delta: { A: 'x' } } } })).includes('OV4'));
  assert.ok(codes(fixture({ overlaps: [group({ delta: { A: 'x', B: null } })] })).includes('OV4'));
});

test('OV5: reviewedOn is a valid past date', () => {
  assert.ok(codes(fixture({ overlaps: [group({ reviewedOn: undefined })] })).includes('OV5'));
  assert.ok(codes(fixture({ overlaps: [group({ reviewedOn: '2099-01-01' })] })).includes('OV5'));
});

test('OV6: an overlap cannot also be equivalent, related, or repeated on the control', () => {
  assert.ok(codes(fixture({ equivalence: [{ id: 'eq', members: ['A', 'B'] }] })).includes('OV6'));
  assert.ok(codes(fixture({ controls: [{ ...A, related: ['B'] }, B, C] })).includes('OV6'));
  assert.ok(codes(fixture({ controls: [{ ...A, overlaps: ['B'] }, B, C] })).includes('OV6'));
});

test('OV7: control-level overlaps without a delta are frozen to the legacy list', () => {
  const legacyData = fixture({ controls: [A, B, { ...C, overlaps: ['A'] }] });
  assert.ok(codes(legacyData).includes('OV7'), 'a new tag-only overlap is rejected');
  assert.deepEqual(codes(legacyData, new Set(['A ~ C'])), [], 'a listed legacy pair passes');
  assert.ok(codes(fixture(), new Set(['A ~ C'])).includes('OV7'), 'a stale legacy entry must be removed');
});

test('the legacy list only holds pairs that still lack a delta', () => {
  const data = loadData();
  const registered = new Set(data.overlaps.map(g => [...g.members].sort().join(' ~ ')));
  for (const key of LEGACY_WITHOUT_DELTA) assert.ok(!registered.has(key), key);
});

test('indexRelations includes registered overlaps in both directions', () => {
  const index = E.indexRelations([A, B, C], [group()]);
  assert.deepEqual([...index.get('A').overlaps], ['B']);
  assert.deepEqual([...index.get('B').overlaps], ['A']);
});

test('indexOverlapDeltas lists each overlap from both sides', () => {
  const index = E.indexOverlapDeltas([group()]);
  assert.deepEqual(index.get('A').map(e => e.other), ['B']);
  assert.deepEqual(index.get('B').map(e => e.other), ['A']);
  assert.equal(index.get('A')[0].group.delta.A, 'A 另要求 1 小时');
  assert.equal(index.has('C'), false);
});

test('regulatorCoverage classifies against other regulators in scope only', () => {
  const reg = { s1: 'MAS', s2: 'APRA', s3: 'APRA', s4: 'MAS' };
  const controls = [
    { id: 'M1', sourceId: 's1' }, { id: 'M2', sourceId: 's4' }, { id: 'M3', sourceId: 's1' },
    { id: 'P1', sourceId: 's2' }, { id: 'P2', sourceId: 's3' }, { id: 'P3', sourceId: 's2' }
  ];
  const overlaps = [
    { id: 'o1', members: ['M1', 'P1'] },
    { id: 'o2', members: ['M2', 'M3'] },          // same regulator: not cross-regulator
    { id: 'o3', members: ['P3', 'OUT'] }          // other side not in scope
  ];
  const equivalence = [{ id: 'e1', members: ['M2', 'P2'] }];
  const relations = E.indexRelations(controls, overlaps);
  const { byControl, rows } = E.regulatorCoverage(controls, {
    equivalence, relations, regulatorOf: c => reg[c.sourceId],
    assessments: { M1: { status: 'done' }, P2: { status: 'na' }, P3: { status: 'gap' } }
  });
  assert.deepEqual(byControl.get('M1'), { kind: 'overlaps', refs: ['P1'] });
  assert.deepEqual(byControl.get('M2'), { kind: 'equivalent', refs: ['P2'] });
  assert.deepEqual(byControl.get('M3'), { kind: 'unique', refs: [] });
  assert.deepEqual(byControl.get('P3'), { kind: 'unique', refs: [] });
  assert.deepEqual(rows, [
    { regulator: 'APRA', total: 3, equivalent: 1, overlaps: 1, unique: 1, pending: 2 },
    { regulator: 'MAS', total: 3, equivalent: 1, overlaps: 1, unique: 1, pending: 2 }
  ]);
});
