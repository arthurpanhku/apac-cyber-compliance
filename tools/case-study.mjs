/**
 * 重算 README「案例」一节的数字：一家同时受 HKMA、MAS、APRA 监管的银行。
 *
 *   node tools/case-study.mjs
 *
 * README 中的数字须能以本脚本重现；数据或等价／重叠关系更新后，请重跑并同步 README。
 */
import { loadData } from './lib/load-data.mjs';
await import('../js/engine.js');
const E = globalThis.HKCCEngine;
const H = loadData();

// 案例设定：香港认可机构、新加坡银行、澳大利亚 ADI；提供电子银行与网上金融服务、
// 处理个人资料、使用外判／云端，信息资产部分由第三方管理。
const LICENSES = ['hkma-ai', 'sg-bank', 'au-adi'];
const ATTRIBUTES = ['ebanking', 'personal-data', 'outsourcing', 'sg-online-financial-services', 'au-third-party-assets'];

const jurisdictionOf = c => H.licenses.find(l => c.applicability.licenses.includes(l.id))?.jurisdiction;
const regulatorOf = c => H.sources[c.sourceId].regulator;
const jur = ['hk', 'sg', 'au'];

const inScope = H.controls.filter(c => jur.includes(jurisdictionOf(c)));
const active = H.controls.filter(c => E.applies(c, new Set(LICENSES), new Set(ATTRIBUTES)));
const activeIds = new Set(active.map(c => c.id));
const cards = E.cluster(active, H.equivalence, true);
const merged = cards.filter(g => g.length > 1);

const relations = E.indexRelations(H.controls);
const crossPairs = { overlaps: new Set(), related: new Set() };
for (const c of active) {
  for (const type of ['overlaps', 'related']) {
    for (const ref of relations.get(c.id)?.[type] || []) {
      const other = H.controls.find(x => x.id === ref);
      if (activeIds.has(ref) && jurisdictionOf(other) !== jurisdictionOf(c)) {
        crossPairs[type].add([c.id, ref].sort().join(' ~ '));
      }
    }
  }
}

const count = (list, key) => list.reduce((m, c) => ((m[key(c)] = (m[key(c)] || 0) + 1), m), {});
const sources = new Set(active.map(c => c.sourceId));
const candidateSources = new Set(inScope.map(c => c.sourceId));

console.log('适用条文', active.length, count(active, regulatorOf));
console.log('三地全部条文', inScope.length, '→ 工具筛除', inScope.length - active.length);
console.log('须研读的官方文件', candidateSources.size, '→ 适用的', sources.size);
console.log('引文分类', count(active, c => c.quoteStatus));
console.log('卡片', cards.length, '· 合并的等价组', merged.length);
console.log('跨辖区 部分重叠', crossPairs.overlaps.size, '· 相关', crossPairs.related.size);
console.log('有截止日期的条文', active.filter(c => c.deadline).length);
console.log('\n按控制域 × 监管机构（多个监管机构同时有要求的领域，就是日后写「差额」的地方）:');
const domains = {};
for (const c of active) (domains[c.domain] ||= {})[regulatorOf(c)] = (domains[c.domain][regulatorOf(c)] || 0) + 1;
for (const d of H.domains) {
  const row = domains[d.id];
  if (!row) continue;
  const regs = Object.keys(row);
  console.log(`  ${d.id.padEnd(11)} ${JSON.stringify(row)}${regs.length > 1 ? `  ← ${regs.length} 个监管机构` : ''}`);
}
