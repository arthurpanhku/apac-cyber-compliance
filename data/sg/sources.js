/**
 * 新加坡金融管理局（MAS）网络安全/科技风险相关条文出处登记——第一批草稿。
 *
 * 状态：URL 取自网页搜索摘要，尚未逐字核对官方原文（本地开发环境的出网策略
 * 拦截了 mas.gov.sg，需经 .github/workflows/fetch-source.yml 在 GitHub Actions
 * runner 上取回全文后核对）。核对完成前，本文件的 titleEn／issued／legalStatus
 * 均为待确认草稿，verifiedOn 暂记为取回当日，实际条款要以 fetch 产物为准；
 * 任何一项经核对后发现有误，须相应更正或整条移除。
 */
HKCC.addSources({
  'mas-cyber-hygiene': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N06 on Cyber Hygiene',
    titleZh: 'FSM-N06《网络卫生通知》',
    issued: '2024-05-10',
    legalStatus: '待核对：据检索摘要为具法定约束力的通知（原 Notice 655，2024 年因《金融服务与市场法》改革重新编号）',
    url: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n06',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-cyber-hygiene-cmi': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N22 on Cyber Hygiene (Capital Markets Intermediaries)',
    titleZh: 'FSM-N22《网络卫生通知》（资本市场中介机构）',
    issued: '2024-08-20',
    legalStatus: '待核对：据检索摘要为具法定约束力的通知（原 Notice CMG-N03）',
    url: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n22',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-cyber-hygiene-insurers': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N31 on Cyber Hygiene',
    titleZh: 'FSM-N31《网络卫生通知》',
    issued: '',
    legalStatus: '待核对：适用范围（推测为保险业）与生效日期均未经原文确认',
    url: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n31',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-trm-notice': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N05 on Technology Risk Management',
    titleZh: 'FSM-N05《科技风险管理通知》',
    issued: '',
    legalStatus: '待核对：标题与内容均未经原文确认',
    url: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n05',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-trm-guidelines': {
    regulator: 'MAS',
    titleEn: 'Technology Risk Management Guidelines',
    titleZh: '《科技风险管理指引》',
    issued: '2021-01-18',
    legalStatus: '指引，不具法律约束力，但 MAS 于监管评估时会考虑机构是否遵循',
    url: 'https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf',
    verifiedOn: '2026-09-21',
    status: 'draft'
  }
});
