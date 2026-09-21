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
    titleEn: 'Notice FSM-N06 on Cyber Hygiene (to banks in Singapore)',
    titleZh: 'FSM-N06《网络卫生通知》（致新加坡银行）',
    issued: '2024-05-09',
    legalStatus: '待核对：据检索摘要为根据《金融服务与市场法 2022》第 29(1) 条发出的法定通知，适用于新加坡银行（原 Notice 655，2024 年因该法改革重新编号）',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n06/mas-notice-fsm-n06.pdf?sc_lang=en',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-cyber-hygiene-cmi': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N22 on Cyber Hygiene (Capital Markets Services Licensees)',
    titleZh: 'FSM-N22《网络卫生通知》（资本市场服务持牌人）',
    issued: '2024-08-20',
    legalStatus: '待核对：据检索摘要为法定通知，适用于交易所／结算所／中央证券托管处／资本市场产品交易／基金管理公司／REIT 管理等资本市场服务持牌人（原 Notice CMG-N03）',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n22/mas-notice-fsm-n22.pdf',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-cyber-hygiene-dtsp': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N31 on Cyber Hygiene (Digital Token Service Providers)',
    titleZh: 'FSM-N31《网络卫生通知》（数字代币服务提供者）',
    issued: '2025-05-30',
    legalStatus: '待核对：据检索摘要为根据《金融服务与市场法 2022》第 29(1) 条发出的法定通知，适用于根据该法第 138 条获发牌照的数字代币服务提供者，2025-06-30 生效',
    url: 'https://www.mas.gov.sg/-/media/mas-notice-fsm-n31---notice-on-cyber-hygiene.pdf',
    verifiedOn: '2026-09-21',
    status: 'draft'
  },
  'mas-trm-notice': {
    regulator: 'MAS',
    titleEn: 'Notice FSM-N05 on Technology Risk Management (to banks in Singapore)',
    titleZh: 'FSM-N05《科技风险管理通知》（致新加坡银行）',
    issued: '',
    legalStatus: '待核对：适用于新加坡银行，标题与生效日期未经原文确认',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n05/mas-notice-fsm-n05.pdf?sc_lang=en',
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
