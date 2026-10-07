/**
 * 牌照/实体类型（澳大利亚）。用户可多选。
 * 范围取自 CPS 234 第 2 段对「APRA 监管实体」的定义；各项均触发 CPS 234 全文。
 */
HKCC.addLicenses([
  {
    id: 'au-adi', jurisdiction: 'au', group: 'APRA 监管实体',
    label: '认可接受存款机构（ADI）',
    note: 'Authorised deposit-taking institution，包括外国 ADI（只就其澳大利亚分行营运适用）及' +
      '根据《银行法》认可的非营运控股公司；触发 CPS 234'
  },
  {
    id: 'au-general-insurer', jurisdiction: 'au', group: 'APRA 监管实体',
    label: '一般保险人',
    note: 'General insurer，包括 C 类保险人（只就其澳大利亚分行营运适用）、根据《保险法》认可的' +
      '非营运控股公司及第 2 级保险集团的母公司；触发 CPS 234'
  },
  {
    id: 'au-life', jurisdiction: 'au', group: 'APRA 监管实体',
    label: '人寿保险公司',
    note: 'Life company，包括友好协会（friendly society）、合资格外国人寿保险公司（EFLIC，只就其' +
      '澳大利亚分行营运适用）及根据《人寿保险法》注册的非营运控股公司；触发 CPS 234'
  },
  {
    id: 'au-phi', jurisdiction: 'au', group: 'APRA 监管实体',
    label: '私人医疗保险人',
    note: 'Private health insurer，根据《2015 年私人医疗保险（审慎监管）法》注册；触发 CPS 234'
  },
  {
    id: 'au-rse', jurisdiction: 'au', group: 'APRA 监管实体',
    label: '退休金受托人（RSE 持牌人）',
    note: 'RSE licensee，根据《1993 年退休金业（监管）法》获发牌照，就其业务营运适用；触发 CPS 234'
  }
]);

/** 业务特征（澳大利亚）。决定同一牌照下条文是否适用。 */
HKCC.addAttributes([
  {
    id: 'au-third-party-assets', jurisdiction: 'au',
    label: '资讯资产由关联方或第三方管理',
    note: '包括外判、云服务及集团内共用服务；不限于 CPS 231 所指的重大外判业务活动。' +
      '触发 CPS 234 第 16、22、28、34 段对关联方/第三方的评估要求'
  }
]);
