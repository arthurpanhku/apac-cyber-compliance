/**
 * CI 检查：登记为「实质等价」的控制点组必须满足 tools/lib/equivalence-rules.mjs 的全部规则。
 *
 *   node tools/check-equivalence.mjs
 */
import { loadData } from './lib/load-data.mjs';
import { checkEquivalence, BASES } from './lib/equivalence-rules.mjs';

const data = loadData();
const errors = checkEquivalence(data);

const byBasis = Object.fromEntries(BASES.map(b => [b, 0]));
for (const g of data.equivalence) if (g.basis in byBasis) byBasis[g.basis]++;
const members = data.equivalence.reduce((n, g) => n + (g.members?.length || 0), 0);
const overlaps = data.controls.reduce((n, c) => n + (c.overlaps?.length || 0), 0);
const related = data.controls.reduce((n, c) => n + (c.related?.length || 0), 0);

console.log(`等价组 ${data.equivalence.length}（${members} 条控制点）·`,
  Object.entries(byBasis).map(([k, v]) => `${k} ${v}`).join(' · '));
console.log(`部分重叠 ${overlaps} · 相关 ${related}`);

if (errors.length) {
  console.error(`\n等价性规则未通过 (${errors.length}):`);
  for (const e of errors) console.error(`  [${e.code}] ${e.group}: ${e.message}`);
  console.error('\n规则说明见 tools/lib/equivalence-rules.mjs；不满足的组请改为 overlaps 或 related。');
  process.exit(1);
}
console.log('\n等价性规则全部通过。');
