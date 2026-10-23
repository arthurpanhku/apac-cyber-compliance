/**
 * 部分重叠（Overlaps）的差额规则。
 *
 * 部分重叠的价值在于写明差额：已满足一个监管机构后，另一个还须补什么（DEVELOPMENT_PLAN 第 1A 节）。
 * 只有一个「部分重叠：ID」标签，使用者仍须自己对照原文，所以新的部分重叠必须登记到
 * data/overlaps.js 并写明双方差额。
 *
 *   OV1 结构：组 ID 唯一；恰好 2 个不同成员；成员存在；同一对条文只登记一次
 *   OV2 delta 为对象，键恰好是两个成员；值为非空字符串，或 null（无额外要求）
 *   OV3 两方差额不可皆为 null——那是实质等价，请登记到 data/equivalence.js
 *   OV4 每个非 null 差额须在 data/i18n/en.js 有英文译文；null 差额不得有译文
 *   OV5 reviewedOn 合法且不晚于今天
 *   OV6 成员不得同属一个等价组，也不得再在控制点上标为 overlaps 或 related（自相矛盾或重复）
 *   OV7 控制点上的 overlaps 字段（只有标签、没有差额）只允许 LEGACY_WITHOUT_DELTA 所列旧组：
 *       清单只减不增——补写差额后把该组移到 data/overlaps.js，并从清单与控制点删除
 */

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const pairKey = (a, b) => [a, b].sort().join(' ~ ');

/** v1.12.0 时控制点上已有、尚未写差额的部分重叠（均在香港）。只可删除，不可新增。 */
export const LEGACY_WITHOUT_DELTA = new Set([
  'HKMA-OR2-3 ~ SFC-IT-2.9',
  'HKMA-SA2-1 ~ HKMA-TMG1-7',
  'HKMA-SA2-1 ~ SFC-IT-2.10',
  'HKMA-TME1-4.1 ~ SFC-IT-1.1',
  'HKMA-TME1-4.2 ~ SFC-IT-1.3',
  'HKMA-TMG1-2 ~ SFC-IT-3.1',
  'HKMA-TMG1-5 ~ SFC-IT-2.8',
  'PDPO-DPP4-1 ~ SFC-IT-1.4',
  'SFC-AI-A1 ~ SFC-IT-2.4',
  'SFC-AI-B1 ~ SFC-IT-2.2',
  'SFC-AI-B2 ~ SFC-IT-2.1',
  'SFC-AI-D1 ~ SFC-IT-2.10',
  'SFC-AI-E1 ~ SFC-IT-2.9',
  'SFC-AI-GOV ~ SFC-IT-3.1',
  'SFC-IT-1.1 ~ SFC-PH-A1',
  'SFC-IT-1.2 ~ SFC-PH-B4',
  'SFC-IT-1.2 ~ SFC-VATP-12.12h',
  'SFC-IT-1.3 ~ SFC-PH-B1',
  'SFC-IT-1.3 ~ SFC-VATP-12.12e',
  'SFC-IT-1.4 ~ SFC-VATP-12.12g',
  'SFC-IT-1.6 ~ SFC-PH-A4',
  'SFC-IT-1.6 ~ SFC-VATP-12.12d',
  'SFC-IT-2.10 ~ SFC-VATP-12.6',
  'SFC-IT-2.2 ~ SFC-VATP-12.12a',
  'SFC-IT-2.3 ~ SFC-VATP-12.12f-ii',
  'SFC-IT-2.5 ~ SFC-VATP-12.12f-iv',
  'SFC-IT-2.6 ~ SFC-VATP-12.12f-vii',
  'SFC-IT-2.7 ~ SFC-VATP-12.12f-viii',
  'SFC-IT-2.8 ~ SFC-VATP-12.16',
  'SFC-IT-2.9 ~ SFC-VATP-12.17',
  'SFC-IT-3.1 ~ SFC-VATP-12.3',
  'SFC-IT-3.2 ~ SFC-PH-C1',
  'SFC-IT-3.4 ~ SFC-PH-D1'
]);

/**
 * @param {object} data    { controls, equivalence, overlaps, i18n }
 * @param {string} today   YYYY-MM-DD，供 OV5 判断日期是否在未来
 * @param {Set<string>} legacy  允许暂无差额的旧组（测试可替换）
 * @returns {{ code: string, group: string, message: string }[]}
 */
export function checkOverlaps(data, today = new Date().toISOString().slice(0, 10), legacy = LEGACY_WITHOUT_DELTA) {
  const errors = [];
  const fail = (code, group, message) => errors.push({ code, group, message });
  const byId = new Map(data.controls.map(c => [c.id, c]));
  const en = data.i18n?.en?.overlaps || {};
  const groupIds = new Set();
  const registered = new Map();
  const equivalenceOf = new Map();
  for (const g of data.equivalence || []) for (const id of g.members || []) equivalenceOf.set(id, g.id);

  for (const g of data.overlaps || []) {
    const gid = g.id || '(缺少 id)';
    if (!g.id) fail('OV1', gid, '部分重叠组缺少 id');
    else if (groupIds.has(g.id)) fail('OV1', gid, '部分重叠组 ID 重复');
    groupIds.add(g.id);

    const members = Array.isArray(g.members) ? g.members : [];
    if (members.length !== 2) { fail('OV1', gid, '部分重叠组须恰好有 2 个成员'); continue; }
    if (members[0] === members[1]) { fail('OV1', gid, '两个成员相同'); continue; }
    for (const id of members) if (!byId.has(id)) fail('OV1', gid, `成员 ${id} 不存在`);
    const key = pairKey(...members);
    if (registered.has(key)) fail('OV1', gid, `${key} 已登记于 ${registered.get(key)}`);
    else registered.set(key, gid);

    const delta = g.delta;
    if (!delta || typeof delta !== 'object' || Array.isArray(delta)) {
      fail('OV2', gid, 'delta 须为对象：{ 控制点 ID: 该条另要求的内容 }');
    } else {
      const keys = Object.keys(delta);
      for (const id of members) if (!keys.includes(id)) fail('OV2', gid, `delta 缺少 ${id}（无额外要求请写 null）`);
      for (const id of keys) if (!members.includes(id)) fail('OV2', gid, `delta 的 ${id} 不是本组成员`);
      for (const id of members) {
        const v = delta[id];
        if (v !== null && v !== undefined && (typeof v !== 'string' || !v.trim())) {
          fail('OV2', gid, `${id} 的差额须为非空字符串或 null`);
        }
      }
      if (members.every(id => delta[id] === null)) {
        fail('OV3', gid, '两方均无额外要求即为实质等价，请登记到 data/equivalence.js');
      }
      const enDelta = en[g.id]?.delta || {};
      for (const id of members) {
        if (typeof delta[id] === 'string' && !enDelta[id]?.trim?.()) {
          fail('OV4', gid, `${id} 的差额须在 data/i18n/en.js 提供英文译文`);
        }
        if (delta[id] === null && enDelta[id]) fail('OV4', gid, `${id} 的差额为 null，英文层却有译文`);
      }
    }

    if (!DATE.test(g.reviewedOn || '')) fail('OV5', gid, 'reviewedOn 须为 YYYY-MM-DD');
    else if (g.reviewedOn > today) fail('OV5', gid, `reviewedOn ${g.reviewedOn} 在未来`);

    const [a, b] = members;
    if (equivalenceOf.has(a) && equivalenceOf.get(a) === equivalenceOf.get(b)) {
      fail('OV6', gid, `${a} 与 ${b} 同属等价组 ${equivalenceOf.get(a)}，不能同时是部分重叠`);
    }
    for (const [x, y] of [[a, b], [b, a]]) {
      const c = byId.get(x);
      if (!c) continue;
      if ((c.overlaps || []).includes(y)) fail('OV6', gid, `${x} 的 overlaps 字段重复登记了 ${y}，请删除该字段中的 ${y}`);
      if ((c.related || []).includes(y)) fail('OV6', gid, `${x} 把 ${y} 标为 related，与部分重叠矛盾`);
    }
  }

  const fieldPairs = new Set();
  for (const c of data.controls) {
    for (const ref of c.overlaps || []) {
      const key = pairKey(c.id, ref);
      if (fieldPairs.has(key) || registered.has(key)) continue;
      fieldPairs.add(key);
      if (!legacy.has(key)) {
        fail('OV7', key, '新的部分重叠须登记到 data/overlaps.js 并写明双方差额，不可只在控制点上加 overlaps 标签');
      }
    }
  }
  for (const key of legacy) {
    if (!fieldPairs.has(key)) {
      fail('OV7', key, '已不在控制点的 overlaps 字段中，请从 LEGACY_WITHOUT_DELTA 删除（清单只减不增）');
    }
  }
  return errors;
}
