/**
 * 马来西亚国家银行（BNM）科技风险相关条文出处登记。
 * 全文经 .github/workflows/fetch-source.yml 在 GitHub Actions runner 上取回官方 PDF 并核对
 * （本地开发环境的出网策略拦截了监管机构网站，故取文步骤放在 CI 里跑，详见 CONTRIBUTING.md）。
 * status: current = 现行有效；ref = 背景/参考文件
 */
HKCC.addSources({
  'bnm-rmit': {
    regulator: 'BNM',
    titleEn: 'Risk Management in Technology (RMiT)',
    titleZh: '《科技风险管理》政策文件（RMiT）',
    issued: '2026-09-25',
    legalStatus: '政策文件（BNM/RH/PD 028-98）；标为「S」的条文根据《2013 年金融服务法》第 47(1) 条、《2013 年伊斯兰金融服务法》第 57(1) 条、《2002 年发展金融机构法》第 41(1) 条及《2011 年货币服务业法》第 34(2) 条订明，必须遵守，违反可招致执法行动；标为「G」的条文属指引，鼓励采纳。按第 4.1 段于 2025-11-28 生效，取代 2023-06-01 版 RMiT',
    url: 'https://www.bnm.gov.my/documents/20124/938039/pd-rmit-sep26.pdf',
    verifiedOn: '2026-10-07',
    status: 'current'
  }
});
