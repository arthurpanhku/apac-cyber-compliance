/**
 * 澳大利亚审慎监管局（APRA）资讯保安相关条文出处登记。
 * 全文经 .github/workflows/fetch-source.yml 在 GitHub Actions runner 上取回官方 PDF 并核对
 * （本地开发环境的出网策略拦截了 apra.gov.au 与 legislation.gov.au，故取文步骤放在 CI 里跑，
 * 详见 CONTRIBUTING.md）。
 * status: current = 现行有效；ref = 背景/参考文件
 */
HKCC.addSources({
  'apra-cps-234': {
    regulator: 'APRA',
    titleEn: 'Prudential Standard CPS 234 Information Security',
    titleZh: '审慎标准 CPS 234《资讯保安》',
    issued: '2018-11-07',
    legalStatus: '审慎标准，属具法律约束力的立法文书；依据《1959 年银行法》第 11AF 条、《1973 年保险法》第 32 条、《1995 年人寿保险法》第 230A 条、《2015 年私人医疗保险（审慎监管）法》第 92 条及《1993 年退休金业（监管）法》第 34C 条制定，2019-07-01 生效（由关联方或第三方管理的资讯资产，于与该第三方合约下次续期日或 2020-07-01 两者较早者起适用）',
    url: 'https://www.apra.gov.au/system/files/cps_234_july_2019_for_public_release.pdf',
    verifiedOn: '2026-10-07',
    status: 'current'
  }
});
