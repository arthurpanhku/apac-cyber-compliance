/**
 * 监管关系的等价性规则。
 *
 * 控制点之间有三类关系：
 *   Equivalent（实质等价）— 登记在 data/equivalence.js 的等价组，界面可合并为一张卡片；
 *   Overlaps（部分重叠）  — 控制点的 overlaps 字段，只显示标签，不合并；
 *   Related（相关）        — 控制点的 related 字段，只显示标签，不合并。
 *
 * 合并会让使用者以为「满足其中一条即满足全组」，所以等价组必须通过下列全部规则。
 * 规则只能检查必要条件；「实质等价」本身仍须人工判断，basis 为 reviewed 时须写明理由。
 *
 *   EQ1 结构：组 ID 唯一；至少 2 个成员；成员存在；每个控制点至多属于一个等价组
 *   EQ2 basis 须为 same-provision、identical-text 或 reviewed
 *   EQ3 控制域相同
 *   EQ4 义务强度相同（priority 相同：baseline 与 enhanced 不可等价）
 *   EQ5 截止日期相同（或均无）
 *   EQ6 有原文依据：每个成员都有 quote，且 quoteStatus 为 verbatim 或 excerpt
 *   EQ7 same-provision：成员出处、条款编号与原文完全相同（同一条文按适用对象拆分）；
 *       其他 basis：成员须来自不同出处（同一文件内的两条不是「跨监管」等价）
 *   EQ8 identical-text：成员原文规范化后（空白、引号）完全相同；可用 addressees 显式声明
 *       各文件对受规管者的不同称谓（如 relevant entity／digital token service provider），
 *       比对时只把这些称谓视为相同，其余文字必须逐字一致
 *   EQ9 reviewed：须有简体 rationale、英文 rationale 及合法的 reviewedOn（不晚于今天）
 *   EQ10 同组成员之间不得再声明 overlaps 或 related（自相矛盾）
 */

export const BASES = ['same-provision', 'identical-text', 'reviewed'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

export const normaliseQuote = (s, addressees = []) => {
  let out = (s || '').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
  // 长的称谓先换，避免「licensed or registered person」被其中的短称谓截断
  for (const a of [...addressees].sort((x, y) => y.length - x.length)) {
    const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(escaped, 'gi'), '\u0000');
  }
  return out;
};

/**
 * @param {object} data   { controls, equivalence, i18n }
 * @param {string} today  YYYY-MM-DD，供 EQ9 判断日期是否在未来
 * @returns {{ code: string, group: string, message: string }[]}
 */
export function checkEquivalence(data, today = new Date().toISOString().slice(0, 10)) {
  const errors = [];
  const fail = (code, group, message) => errors.push({ code, group, message });
  const byId = new Map(data.controls.map(c => [c.id, c]));
  const enGroups = data.i18n?.en?.equivalence || {};
  const groupIds = new Set();
  const memberOf = new Map();

  for (const g of data.equivalence) {
    const gid = g.id || '(缺少 id)';
    if (!g.id) fail('EQ1', gid, '等价组缺少 id');
    else if (groupIds.has(g.id)) fail('EQ1', gid, '等价组 ID 重复');
    groupIds.add(g.id);

    const members = Array.isArray(g.members) ? g.members : [];
    if (members.length < 2) fail('EQ1', gid, '等价组至少须有 2 个成员');
    if (new Set(members).size !== members.length) fail('EQ1', gid, '成员重复');
    for (const id of members) {
      if (!byId.has(id)) fail('EQ1', gid, `成员 ${id} 不存在`);
      if (memberOf.has(id)) fail('EQ1', gid, `${id} 已属于等价组 ${memberOf.get(id)}`);
      else memberOf.set(id, gid);
    }
    const cs = members.map(id => byId.get(id)).filter(Boolean);
    if (cs.length < 2) continue;

    if (!BASES.includes(g.basis)) fail('EQ2', gid, `basis 须为 ${BASES.join(' / ')}，现为 ${g.basis}`);

    const differs = (field, label, show = c => c[field] ?? '—') => {
      if (new Set(cs.map(c => c[field] ?? '')).size > 1) {
        return `${label}不同：${cs.map(c => `${c.id}=${show(c)}`).join('，')}`;
      }
      return null;
    };
    const d3 = differs('domain', '控制域');
    if (d3) fail('EQ3', gid, d3);
    const d4 = differs('priority', '义务强度（priority）');
    if (d4) fail('EQ4', gid, d4);
    const d5 = differs('deadline', '截止日期');
    if (d5) fail('EQ5', gid, d5);

    for (const c of cs) {
      if (!c.quote || !['verbatim', 'excerpt'].includes(c.quoteStatus)) {
        fail('EQ6', gid, `${c.id} 没有原文或节录（quoteStatus=${c.quoteStatus ?? '—'}），不能据说明断言等价`);
      }
    }

    if (g.basis === 'same-provision') {
      for (const field of ['sourceId', 'clause']) {
        const d = differs(field, field === 'sourceId' ? '出处' : '条款编号');
        if (d) fail('EQ7', gid, `same-provision 要求同一条文，但${d}`);
      }
      if (new Set(cs.map(c => normaliseQuote(c.quote))).size > 1) {
        fail('EQ7', gid, 'same-provision 要求同一条文，但原文不同');
      }
    } else {
      const seen = new Map();
      for (const c of cs) {
        if (seen.has(c.sourceId)) {
          fail('EQ7', gid, `${seen.get(c.sourceId)} 与 ${c.id} 同属出处 ${c.sourceId}；同一文件内的两条不是跨监管等价`);
        }
        seen.set(c.sourceId, c.id);
      }
    }

    if (g.addressees !== undefined && (!Array.isArray(g.addressees) || g.basis !== 'identical-text')) {
      fail('EQ8', gid, 'addressees 只适用于 identical-text，且须为字符串数组');
    }
    const addressees = Array.isArray(g.addressees) ? g.addressees : [];
    if (g.basis === 'identical-text' && new Set(cs.map(c => normaliseQuote(c.quote, addressees))).size > 1) {
      fail('EQ8', gid, 'identical-text 要求原文相同，但成员原文规范化后仍不一致——请改用 reviewed 并写明理由');
    }

    if (g.basis === 'reviewed') {
      if (!g.rationale?.trim()) fail('EQ9', gid, 'reviewed 须写明等价理由（rationale）');
      if (!enGroups[g.id]?.rationale?.trim()) fail('EQ9', gid, 'reviewed 须在 data/i18n/en.js 提供英文 rationale');
      if (!DATE.test(g.reviewedOn || '')) fail('EQ9', gid, 'reviewed 须有 reviewedOn（YYYY-MM-DD）');
      else if (g.reviewedOn > today) fail('EQ9', gid, `reviewedOn ${g.reviewedOn} 在未来`);
    }
  }

  for (const c of data.controls) {
    const gid = memberOf.get(c.id);
    if (!gid) continue;
    for (const field of ['overlaps', 'related']) {
      for (const ref of c[field] || []) {
        if (memberOf.get(ref) === gid) {
          fail('EQ10', gid, `${c.id} 的 ${field} 指向同组成员 ${ref}：已等价就不应再标为部分重叠或相关`);
        }
      }
    }
  }
  return errors;
}
