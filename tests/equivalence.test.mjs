import test from 'node:test';
import assert from 'node:assert/strict';
import { checkEquivalence, normaliseQuote } from '../tools/lib/equivalence-rules.mjs';
import { loadData } from '../tools/lib/load-data.mjs';

const TODAY = '2026-10-07';
const base = overrides => ({
  domain: 'identity', priority: 'baseline', quoteStatus: 'verbatim', clause: '1', ...overrides
});
const fixture = (controls, groups, en = {}) => ({
  controls, equivalence: groups, i18n: { en: { equivalence: en } }
});
const codes = data => checkEquivalence(data, TODAY).map(e => e.code);

const A = base({ id: 'A', sourceId: 's1', quote: 'A relevant entity must do X.' });
const B = base({ id: 'B', sourceId: 's2', quote: 'A relevant entity must do X.' });
const ok = fixture([A, B], [{ id: 'g', basis: 'identical-text', members: ['A', 'B'] }]);

test('a well-formed identical-text group passes', () => {
  assert.deepEqual(codes(ok), []);
});

test('the real data passes every equivalence rule', () => {
  assert.deepEqual(checkEquivalence(loadData(), TODAY), []);
});

test('EQ1: unknown, duplicated or single members are rejected', () => {
  assert.ok(codes(fixture([A, B], [{ id: 'g', basis: 'identical-text', members: ['A'] }])).includes('EQ1'));
  assert.ok(codes(fixture([A, B], [{ id: 'g', basis: 'identical-text', members: ['A', 'Z'] }])).includes('EQ1'));
  assert.ok(codes(fixture([A, B], [
    { id: 'g', basis: 'identical-text', members: ['A', 'B'] },
    { id: 'h', basis: 'identical-text', members: ['B', 'A'] }
  ])).includes('EQ1'));
});

test('EQ2: unknown basis', () => {
  assert.ok(codes(fixture([A, B], [{ id: 'g', basis: 'similar', members: ['A', 'B'] }])).includes('EQ2'));
});

test('EQ3–EQ5: domain, obligation strength and deadline must match', () => {
  assert.ok(codes(fixture([A, { ...B, domain: 'protect' }], ok.equivalence)).includes('EQ3'));
  assert.ok(codes(fixture([A, { ...B, priority: 'enhanced' }], ok.equivalence)).includes('EQ4'));
  assert.ok(codes(fixture([A, { ...B, deadline: '2027-07-08' }], ok.equivalence)).includes('EQ5'));
});

test('EQ6: equivalence cannot rest on a summary', () => {
  assert.ok(codes(fixture([A, { ...B, quoteStatus: 'summary' }], ok.equivalence)).includes('EQ6'));
});

test('EQ7: same-provision needs the same source, clause and text', () => {
  const same = { id: 'g', basis: 'same-provision', members: ['A', 'B2'] };
  const B2 = { ...A, id: 'B2' };
  assert.deepEqual(codes(fixture([A, B2], [same])), []);
  assert.ok(codes(fixture([A, { ...B2, clause: '2' }], [same])).includes('EQ7'));
  assert.ok(codes(fixture([A, B], [{ ...same, members: ['A', 'B'] }])).includes('EQ7'));
});

test('EQ7: other bases need members from different sources', () => {
  assert.ok(codes(fixture([A, { ...B, sourceId: 's1' }], ok.equivalence)).includes('EQ7'));
});

test('EQ8: identical-text with only declared addressees allowed to differ', () => {
  const C = { ...B, quote: 'A digital token service provider must do X.' };
  assert.ok(codes(fixture([A, C], ok.equivalence)).includes('EQ8'));
  const declared = [{ ...ok.equivalence[0], addressees: ['relevant entity', 'digital token service provider'] }];
  assert.deepEqual(codes(fixture([A, C], declared)), []);
  const D = { ...B, quote: 'A digital token service provider must do X and Y.' };
  assert.ok(codes(fixture([A, D], declared)).includes('EQ8'));
});

test('normaliseQuote ignores whitespace and curly quotes only', () => {
  assert.equal(normaliseQuote('client’s  “account”'), normaliseQuote("client's \"account\""));
  assert.notEqual(normaliseQuote('must'), normaliseQuote('should'));
});

test('EQ9: reviewed groups need rationale in both languages and a past review date', () => {
  const C = { ...B, quote: 'Different words, same obligation.' };
  const reviewed = { id: 'g', basis: 'reviewed', members: ['A', 'B'], rationale: '理由', reviewedOn: TODAY };
  assert.deepEqual(codes(fixture([A, C], [reviewed], { g: { rationale: 'Reason' } })), []);
  assert.ok(codes(fixture([A, C], [reviewed])).includes('EQ9'));
  assert.ok(codes(fixture([A, C], [{ ...reviewed, rationale: '' }], { g: { rationale: 'Reason' } })).includes('EQ9'));
  assert.ok(codes(fixture([A, C], [{ ...reviewed, reviewedOn: '2099-01-01' }], { g: { rationale: 'Reason' } })).includes('EQ9'));
});

test('EQ10: members of one group cannot also be marked overlapping or related', () => {
  assert.ok(codes(fixture([{ ...A, overlaps: ['B'] }, B], ok.equivalence)).includes('EQ10'));
  assert.ok(codes(fixture([A, { ...B, related: ['A'] }], ok.equivalence)).includes('EQ10'));
});
