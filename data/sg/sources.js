/**
 * 新加坡金融管理局（MAS）网络安全/科技风险相关条文出处登记。
 * 全文经 .github/workflows/fetch-source.yml 在 GitHub Actions runner 上取回官方 PDF 并核对
 * （本地开发环境的出网策略拦截了 mas.gov.sg，故取文步骤放在 CI 里跑，详见 CONTRIBUTING.md）。
 * status: current = 现行有效；ref = 背景/参考文件
 */
HKCC.addSources({
  'mas-cyber-hygiene': {
    regulator: 'MAS',
    titleEn: 'MAS Notice FSM-N06 — Notice on Cyber Hygiene (Notice to banks in Singapore)',
    titleZh: 'FSM-N06《网络卫生通知》（致新加坡银行）',
    issued: '2024-05-09',
    legalStatus: '根据《金融服务与市场法 2022》第 29(1) 条向新加坡银行发出的法定通知，2024-05-10 生效',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n06/mas-notice-fsm-n06.pdf?sc_lang=en',
    verifiedOn: '2026-09-21',
    status: 'current'
  },
  'mas-cyber-hygiene-cmi': {
    regulator: 'MAS',
    titleEn: 'MAS Notice FSM-N22 — Notice on Cyber Hygiene (Notice to capital markets financial institutions)',
    titleZh: 'FSM-N22《网络卫生通知》（致资本市场金融机构）',
    issued: '2024-05-09',
    legalStatus: '根据《金融服务与市场法 2022》第 29(1) 条向资本市场服务持牌人及相关实体发出的法定通知，2024-05-10 生效；2024-08-20 经 FSM-N22（修订）2024 修订，将获批准的集体投资计划受托人纳入适用范围',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n22/mas-notice-fsm-n22.pdf',
    verifiedOn: '2026-09-21',
    status: 'current'
  },
  'mas-cyber-hygiene-dtsp': {
    regulator: 'MAS',
    titleEn: 'MAS Notice FSM-N31 — Notice on Cyber Hygiene (Notice to licensed digital token service providers)',
    titleZh: 'FSM-N31《网络卫生通知》（致持牌数字代币服务提供者）',
    issued: '2025-05-30',
    legalStatus: '根据《金融服务与市场法 2022》第 29(1) 条向根据该法第 138 条获发牌照的数字代币服务提供者发出的法定通知，2025-06-30 生效',
    url: 'https://www.mas.gov.sg/-/media/mas-notice-fsm-n31---notice-on-cyber-hygiene.pdf',
    verifiedOn: '2026-09-21',
    status: 'current'
  },
  'mas-trm-notice': {
    regulator: 'MAS',
    titleEn: 'MAS Notice FSM-N05 — Notice on Technology Risk Management (Notice to banks in Singapore)',
    titleZh: 'FSM-N05《科技风险管理通知》（致新加坡银行）',
    issued: '2024-05-09',
    legalStatus: '根据《金融服务与市场法 2022》第 29(1) 条向新加坡银行发出的法定通知，2024-05-10 生效',
    url: 'https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n05/mas-notice-fsm-n05.pdf?sc_lang=en',
    verifiedOn: '2026-09-21',
    status: 'current'
  },
  'mas-trm-guidelines': {
    regulator: 'MAS',
    titleEn: 'Technology Risk Management Guidelines',
    titleZh: '《科技风险管理指引》',
    issued: '2021-01-18',
    legalStatus: '指引，不具法律约束力；MAS 在监管评估中会考虑金融机构遵循指引精神的程度',
    url: 'https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf',
    verifiedOn: '2026-09-21',
    status: 'current'
  }
});
