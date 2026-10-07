/**
 * 等价组登记（跨司法管辖区共用）。
 *
 * 控制点之间的监管关系分三类：
 *
 *   关系            含义                 是否合并        在哪里登记
 *   Equivalent      两个监管要求实质等价   可合并为一张卡片  本文件
 *   Overlaps        部分要求重叠           不合并（标签）    控制点的 overlaps 字段
 *   Related         存在关联或参考价值     不合并（标签）    控制点的 related 字段
 *
 * 只有本文件登记的组会合并。每组必须通过 tools/lib/equivalence-rules.mjs 的规则
 *（CI 运行 node tools/check-equivalence.mjs）。basis：
 *   same-provision  同一份文件的同一条文，因适用范围不同而拆成多条控制点
 *   identical-text  不同文件、原文相同（规范化空白与引号后逐字一致）；各文件对受规管者的
 *                   称谓不同时，以 addressees 显式列出，比对时只把这些称谓视为相同
 *   reviewed        原文不同但经人工评审认定实质等价——须写明 rationale 与 reviewedOn
 *
 * 一方比另一方多出任何实质义务（多一项措施、更短时限、更广范围），就不是等价，
 * 请改用 overlaps。拿不准时宁可不合并：错误合并会让使用者以为满足一条即满足全组。
 */
HKCC.addEquivalence([
  // ---- 新加坡：三份《网络卫生通知》第 4 段原文相同 ----
  ...[1, 2, 3, 4, 5, 6].map(n => ({
    id: `eq-mas-cyber-hygiene-4.${n}`, basis: 'identical-text',
    addressees: ['relevant entity', 'digital token service provider'],
    members: [`MAS-N06-4.${n}`, `MAS-N22-4.${n}`, `MAS-N31-4.${n}`],
    rationale: `三份《网络卫生通知》第 4.${n} 段原文相同，只是分别适用于银行、资本市场金融机构及持牌数字代币服务提供者。`
  })),

  // ---- 香港：SFC 黑客风险指引与虚拟资产交易平台指引第 XII 部 ----
  // 两份指引的多数对应条文中，VATP 版本另有增补（如 EDR、储存媒介、每年测试），属 overlaps；
  // 以下五组经逐段对照原文，未见任何一方多出实质义务。
  {
    id: 'eq-sfc-2fa-login', basis: 'reviewed', reviewedOn: '2026-10-07',
    members: ['SFC-IT-1.1', 'SFC-VATP-12.12b'],
    rationale: '两段同样要求客户账户登录实施双重认证，双重认证的定义相同；平台客户账户本身即经互联网登录，适用范围一致。'
  },
  {
    id: 'eq-sfc-login-password-delivery', basis: 'identical-text',
    addressees: ['licensed or registered person', 'Platform Operator'],
    members: ['SFC-IT-1.5', 'SFC-VATP-12.12c'],
    rationale: '两段原文除受规管者称谓外逐字相同。'
  },
  {
    id: 'eq-sfc-network-segmentation', basis: 'reviewed', reviewedOn: '2026-10-07',
    members: ['SFC-IT-2.1', 'SFC-VATP-12.12f-i'],
    rationale: '两段原文除关键系统的举例外逐字相同，均要求以配备多层防火墙的 DMZ 进行网络分段。'
  },
  {
    id: 'eq-sfc-patch-one-month', basis: 'reviewed', reviewedOn: '2026-10-07',
    members: ['SFC-IT-2.4', 'SFC-VATP-12.12f-iii'],
    rationale: '两段均要求及时监察及评估补丁、尽快测试，并于测试完成后一个月内部署，时限相同。'
  },
  {
    id: 'eq-sfc-incident-escalation', basis: 'reviewed', reviewedOn: '2026-10-07',
    members: ['SFC-IT-3.2', 'SFC-VATP-12.14'],
    rationale: '两段均要求以书面政策及程序订明怀疑或实际网络安全事故的内部及外部呈报，对外对象均包括客户及证监会。'
  },

  // ---- 马来西亚：RMiT 同一段落按 NCII 指定拆分 ----
  {
    id: 'eq-bnm-rmit-10.31', basis: 'same-provision',
    members: ['BNM-RMIT-10.31', 'BNM-RMIT-10.31-NCII'],
    rationale: 'RMiT 第 10.31 段同一条文；因电子货币发行人、商户收单机构及中介汇款机构只在获指定为 NCII 时须遵守，拆成两条控制点。'
  },
  {
    id: 'eq-bnm-rmit-13.3', basis: 'same-provision',
    members: ['BNM-RMIT-13.3', 'BNM-RMIT-13.3-NCII'],
    rationale: 'RMiT 第 13.3 段同一条文；按第 2.2(c) 段，三类支付机构只在获指定为 NCII 时须遵守，故拆成两条控制点。'
  }
]);
