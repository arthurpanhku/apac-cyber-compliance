/**
 * 从运行时数据生成文件／条款／实体覆盖明细；产品范围与缺口人工维护在 docs/COVERAGE_MATRIX.md。
 * node tools/coverage-matrix.mjs          更新明细
 * node tools/coverage-matrix.mjs --check  只检查生成物是否同步
 * 不联网、不推进 verifiedOn，也不推断法律覆盖完整率。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadData, root } from './lib/load-data.mjs';

const args = process.argv.slice(2);
if (args.some(arg => arg !== '--check') || args.length > 1) {
  console.error('用法：node tools/coverage-matrix.mjs [--check]');
  process.exit(1);
}
const data = loadData();
const quoteLabels = { verbatim: '原文', excerpt: '节录', summary: '概括说明' };
const cell = value => String(value ?? '').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
const code = value => `\`${cell(value)}\``;
const list = values => values.map(code).join('、') || '无';
const controlIds = new Set();
const jurisdictionByLicense = new Map(data.licenses.map(item => [item.id, item.jurisdiction]));
const licenses = new Map(data.licenses.map(item => [item.id, item]));
const attributes = new Map(data.attributes.map(item => [item.id, item]));
const sourceJurisdictions = new Map();

// 逐文件盘点来源归属，避免按监管机构名称猜测地域，亦保留所有零控制的参考来源。
for (const jurisdiction of data.jurisdictions) {
  const sourceFile = `data/${jurisdiction.id}/sources.js`;
  new Function('HKCC', readFileSync(join(root, sourceFile), 'utf8'))({
    addSources(entries) {
      for (const id of Object.keys(entries)) {
        if (sourceJurisdictions.has(id)) throw new Error(`来源 ID 重复：${id}`);
        sourceJurisdictions.set(id, jurisdiction.id);
      }
    }
  });
}

for (const control of data.controls) {
  if (controlIds.has(control.id)) throw new Error(`控制 ID 重复：${control.id}`);
  controlIds.add(control.id);
  if (!data.sources[control.sourceId] || !sourceJurisdictions.has(control.sourceId)) {
    throw new Error(`控制 ${control.id} 的来源无效：${control.sourceId}`);
  }
  if (!control.clause || !quoteLabels[control.quoteStatus]) throw new Error(`控制 ${control.id} 缺少条款或引用分类`);
  if (!control.applicability?.licenses?.length) throw new Error(`控制 ${control.id} 缺少实体范围`);
  for (const id of control.applicability.licenses) {
    if (!licenses.has(id)) throw new Error(`控制 ${control.id} 的实体无效：${id}`);
    if (jurisdictionByLicense.get(id) !== sourceJurisdictions.get(control.sourceId)) {
      throw new Error(`控制 ${control.id} 的来源与实体地域不同：${id}`);
    }
  }
  for (const id of control.applicability.attributes || []) {
    if (!attributes.has(id)) throw new Error(`控制 ${control.id} 的业务特征无效：${id}`);
  }
}

const controlsForSource = id => data.controls.filter(control => control.sourceId === id);
const quoteCounts = controls => Object.keys(quoteLabels).map(status => controls.filter(c => c.quoteStatus === status).length);
const sourceEntries = Object.entries(data.sources);
const mappedSources = sourceEntries.filter(([id]) => controlsForSource(id).length);
const refs = sourceEntries.filter(([, source]) => source.status === 'ref');
const totals = quoteCounts(data.controls);
const out = [
  '# 当前代码的覆盖明细', '',
  '> 自动生成，请勿手改。运行 `node tools/coverage-matrix.mjs` 更新；运行 `node tools/coverage-matrix.mjs --check` 检查。', '',
  '产品定位、香港／新加坡优先级、尚未纳入的文件及人工覆盖判断，见[覆盖矩阵](COVERAGE_MATRIX.md)。', '',
  '这是“已收录什么”的清单。文件数量、控制数量及原文数量均不代表文件或地域完整率；引用分类沿用既有数据，未再次逐字核验。', '',
  `当前登记 ${data.jurisdictions.length} 个地域、${sourceEntries.length} 份来源，${mappedSources.length} 份来源实际关联控制；${refs.length} 份标为参考。`, '',
  `共 ${data.controls.length} 条控制、${data.licenses.length} 类实体、${data.attributes.length} 项业务特征；原文 ${totals[0]}、节录 ${totals[1]}、概括说明 ${totals[2]}。`, '',
  '## 地域盘点', '',
  '| 地域 | 控制 | 有控制的来源／登记来源 | 原文／节录／概括 | 已建模实体类型 |',
  '| --- | ---: | ---: | --- | --- |'
];

for (const jurisdiction of data.jurisdictions) {
  const sources = sourceEntries.filter(([id]) => sourceJurisdictions.get(id) === jurisdiction.id);
  const controls = data.controls.filter(c => sourceJurisdictions.get(c.sourceId) === jurisdiction.id);
  out.push(`| ${cell(jurisdiction.label)} | ${controls.length} | ${sources.filter(([id]) => controlsForSource(id).length).length}／${sources.length} | ${quoteCounts(controls).join('／')} | ${data.licenses.filter(item => item.jurisdiction === jurisdiction.id).length} |`);
}
out.push('', '## 适用条件的含义', '',
  '- 下文实体 ID **任一命中**，业务特征 ID 则须**全部具备**；业务特征“无”表示没有额外的特征门槛，仍须命中实体。',
  '- “该地域全部已建模实体”仅表示当前代码里的实体集合，不表示该地域的所有企业。',
  '- 来源标记 `current`／`ref`、发布日期及 `verifiedOn` 原样取自登记；生成本文件不构成新的法规复核。',
  '- 每条均列出实际 `clause`。章节、通函全文或笼统指引定位会原样保留，方便识别尚待细化的条目。',
  '- 同一条款可按适用条件拆成多个控制 ID，所以控制数量不等于唯一法规条款数。', '');

for (const jurisdiction of data.jurisdictions) {
  const jurisdictionLicenses = data.licenses.filter(item => item.jurisdiction === jurisdiction.id);
  const jurisdictionAttributes = data.attributes.filter(item => item.jurisdiction === jurisdiction.id);
  const sources = sourceEntries.filter(([id]) => sourceJurisdictions.get(id) === jurisdiction.id);
  out.push(`## ${cell(jurisdiction.label)}`, '',
    `数据目录：[${jurisdiction.id}](../data/${jurisdiction.id}/)。`, '',
    '### 实体与业务特征对照', '',
    '| 实体 ID | 名称 | 范围说明 |', '| --- | --- | --- |');
  for (const item of jurisdictionLicenses) out.push(`| ${code(item.id)} | ${cell(item.label)} | ${cell(item.note)} |`);
  out.push('', '| 业务特征 ID | 名称 | 范围说明 |', '| --- | --- | --- |');
  for (const item of jurisdictionAttributes) out.push(`| ${code(item.id)} | ${cell(item.label)} | ${cell(item.note)} |`);
  out.push('', '### 文件盘点', '',
    '| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |',
    '| --- | --- | ---: | --- | --- |');
  for (const [id, source] of sources) {
    const controls = controlsForSource(id);
    const status = source.status === 'ref' ? '参考（不计作覆盖）' : controls.length ? '已关联控制（完整性待人工复核）' : '仅登记，未关联控制';
    out.push(`| ${code(id)} · [${cell(source.titleZh)}](${source.url}) | ${code(source.status)}；${status} | ${controls.length} | ${quoteCounts(controls).join('／')} | ${cell(source.verifiedOn)} |`);
  }
  out.push('', '### 逐条对应', '');
  for (const [id, source] of sources) {
    const controls = controlsForSource(id);
    out.push(`#### ${id}`, '', `[${cell(source.titleZh)}](${source.url}) · 发布：${cell(source.issued)} · 来源核验：${cell(source.verifiedOn)}`, '',
      `法律地位：${cell(source.legalStatus)}`, '');
    if (!controls.length) {
      out.push(source.status === 'ref' ? '参考文件，未直接关联控制；不能据此认定条款已覆盖。' : '仅登记来源，尚无控制。', '');
      continue;
    }
    out.push('| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |', '| --- | --- | --- | --- | --- |');
    for (const control of controls) {
      const selected = new Set(control.applicability.licenses);
      const all = selected.size === jurisdictionLicenses.length && jurisdictionLicenses.every(item => selected.has(item.id));
      out.push(`| ${code(control.id)} | ${cell(control.clause)} | ${all ? '该地域全部已建模实体' : list(control.applicability.licenses)} | ${list(control.applicability.attributes || [])} | ${quoteLabels[control.quoteStatus]} |`);
    }
    out.push('');
  }
}

const outputPath = join(root, 'docs/coverage-inventory.md');
const generated = out.join('\n');
if (args.includes('--check')) {
  let current;
  try { current = readFileSync(outputPath, 'utf8'); } catch { /* 缺失生成物同样应使 CI 失败。 */ }
  if (current !== generated) {
    console.error('覆盖明细不同步；运行 node tools/coverage-matrix.mjs 并提交 docs/coverage-inventory.md。');
    process.exit(1);
  }
  console.log(`覆盖明细已同步：${data.controls.length} 条控制，${sourceEntries.length} 份来源。`);
} else {
  writeFileSync(outputPath, generated);
  console.log(`已生成 docs/coverage-inventory.md：${data.controls.length} 条控制，${sourceEntries.length} 份来源。`);
}
