/**
 * 中国内地网络安全、数据安全及金融业网络与信息安全条文出处登记。
 * 全文经 .github/workflows/fetch-source.yml 在 GitHub Actions runner 上取回官方网页／PDF 并核对
 * （本地开发环境的出网策略拦截了 cac.gov.cn、npc.gov.cn、gov.cn 等政府网站，故取文步骤放在 CI 里跑，
 * 详见 CONTRIBUTING.md）。
 * 中国内地法律法规的正式文本为中文，控制点的 quote 直接引述中文原文（quoteLang: 'zh-Hans'）。
 * status: current = 现行有效；ref = 背景/参考文件
 */
HKCC.addSources({
  'cn-csl': {
    regulator: '全国人大常委会',
    titleEn: 'Cybersecurity Law of the People’s Republic of China (as amended 2025)',
    titleZh: '《中华人民共和国网络安全法》（2025 年修正）',
    issued: '2025-10-28',
    legalStatus: '法律',
    url: 'https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-dsl': {
    regulator: '全国人大常委会',
    titleEn: 'Data Security Law of the People’s Republic of China',
    titleZh: '《中华人民共和国数据安全法》',
    issued: '2021-06-10',
    legalStatus: '法律',
    url: 'http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-pipl': {
    regulator: '全国人大常委会',
    titleEn: 'Personal Information Protection Law of the People’s Republic of China',
    titleZh: '《中华人民共和国个人信息保护法》',
    issued: '2021-08-20',
    legalStatus: '法律',
    url: 'http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-ciio': {
    regulator: '国务院',
    titleEn: 'Regulations on the Security Protection of Critical Information Infrastructure (State Council Decree No. 745)',
    titleZh: '《关键信息基础设施安全保护条例》（国务院令第 745 号）',
    issued: '2021-07-30',
    legalStatus: '行政法规',
    url: 'https://www.gov.cn/gongbao/content/2021/content_5636138.htm',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-ndsr': {
    regulator: '国务院',
    titleEn: 'Regulations on Network Data Security Management (State Council Decree No. 790)',
    titleZh: '《网络数据安全管理条例》（国务院令第 790 号）',
    issued: '2024-09-24',
    legalStatus: '行政法规',
    url: 'https://www.gov.cn/gongbao/2024/issue_11646/202410/content_6980863.html',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-incident-reporting': {
    regulator: 'CAC',
    titleEn: 'Administrative Measures for National Cybersecurity Incident Reporting',
    titleZh: '《国家网络安全事件报告管理办法》',
    issued: '2025-09-11',
    legalStatus: '部门规章',
    url: 'https://www.cac.gov.cn/2025-09/15/c_1759583017717009.htm',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-nfra-data': {
    regulator: 'NFRA',
    titleEn: 'Measures for the Data Security Management of Banking and Insurance Institutions',
    titleZh: '《银行保险机构数据安全管理办法》',
    issued: '2024-12-27',
    legalStatus: '规范性文件（金规〔2024〕24 号）',
    url: 'https://www.gov.cn/zhengce/zhengceku/202412/content_6995081.htm',
    verifiedOn: '2026-10-26',
    status: 'current'
  },
  'cn-csrc-netsec': {
    regulator: 'CSRC',
    titleEn: 'Measures for the Administration of Network and Information Security in the Securities and Futures Industry (CSRC Decree No. 218)',
    titleZh: '《证券期货业网络和信息安全管理办法》（证监会令第 218 号）',
    issued: '2023-02-27',
    legalStatus: '部门规章',
    url: 'https://www.gov.cn/gongbao/2023/issue_10526/202306/content_6887131.html',
    verifiedOn: '2026-10-26',
    status: 'current'
  }
});
