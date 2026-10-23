/**
 * CI 检查：登记为「实质等价」的控制点组必须满足 tools/lib/equivalence-rules.mjs 的全部规则；
 * 登记为「部分重叠」的条文必须写明差额，满足 tools/lib/overlap-rules.mjs 的全部规则。
 *
 *   node tools/check-equivalence.mjs
 */
import { loadData } from './lib/load-data.mjs';
import { checkEquivalence, BASES } from './lib/equivalence-rules.mjs';
import { checkOverlaps, LEGACY_WITHOUT_DELTA } from './lib/overlap-rules.mjs';

const data = loadData();
const errors = [...checkEquivalence(data), ...checkOverlaps(data)];

const byBasis = Object.fromEntries(BASES.map(b => [b, 0]));
for (const g of data.equivalence) if (g.basis in byBasis) byBasis[g.basis]++;
const members = data.equivalence.reduce((n, g) => n + (g.members?.length || 0), 0);
// 控制点上的 overlaps 常在两方各写一次，按「对」计算
const legacyOverlaps = new Set(data.controls.flatMap(c => (c.overlaps || []).map(r => [c.id, r].sort().join(' ~ ')))).size;
const related = data.controls.reduce((n, c) => n + (c.related?.length || 0), 0);

console.log(`等价组 ${data.equivalence.length}（${members} 条控制点）·`,
  Object.entries(byBasis).map(([k, v]) => `${k} ${v}`).join(' · '));
console.log(`部分重叠 ${data.overlaps.length + legacyOverlaps}（已写差额 ${data.overlaps.length} · ` +
  `尚待补写 ${legacyOverlaps}，上限 ${LEGACY_WITHOUT_DELTA.size}）· 相关 ${related}`);

if (errors.length) {
  console.error(`\n等价性／差额规则未通过 (${errors.length}):`);
  for (const e of errors) console.error(`  [${e.code}] ${e.group}: ${e.message}`);
  console.error('\n规则说明见 tools/lib/equivalence-rules.mjs（EQ）与 tools/lib/overlap-rules.mjs（OV）；' +
    '不满足等价规则的组请改为部分重叠或相关。');
  process.exit(1);
}
console.log('\n等价性与差额规则全部通过。');
