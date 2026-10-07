/**
 * 澳大利亚审慎监管局（APRA）信息安全相关条文出处登记。
 * 全文经 .github/workflows/fetch-source.yml 在 GitHub Actions runner 上取回官方 PDF 并核对
 * （本地开发环境的出网策略拦截了 apra.gov.au 与 legislation.gov.au，故取文步骤放在 CI 里跑，
 * 详见 CONTRIBUTING.md）。
 * status: current = 现行有效；ref = 背景/参考文件
 */
HKCC.addSources({
  'apra-cps-234': {
    regulator: 'APRA',
    titleEn: 'Prudential Standard CPS 234 Information Security',
    titleZh: '审慎标准 CPS 234《信息安全》',
    issued: '2018-11-07',
    legalStatus: 'TBD',
    url: 'https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf',
    verifiedOn: '2026-10-07',
    status: 'current'
  }
});
