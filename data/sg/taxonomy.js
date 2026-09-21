/** 牌照/实体类型（新加坡）。用户可多选。 */
HKCC.addLicenses([
  {
    id: 'sg-bank', jurisdiction: 'sg', group: 'MAS 监管实体',
    label: '新加坡银行', note: 'Bank in Singapore，《银行业法》第 2(1) 条所定义；触发 FSM-N05 与 FSM-N06'
  },
  {
    id: 'sg-cms', jurisdiction: 'sg', group: 'MAS 监管实体',
    label: '资本市场服务持牌人及相关实体',
    note: '包括核准交易所、认可市场经营者、持牌交易资料库、核准/认可结算所、中央托收存管处、' +
      '核准控股公司、资本市场服务持牌人、注册基金管理公司、认可/指定基准管理人及提交人、' +
      '获批的集体投资计划受托人；触发 FSM-N22'
  },
  {
    id: 'sg-dtsp', jurisdiction: 'sg', group: 'MAS 监管实体',
    label: '持牌数字代币服务提供者',
    note: 'Digital Token Service Provider，根据《金融服务与市场法》第 138 条获发牌照；触发 FSM-N31'
  }
]);

/** 业务特征（新加坡）。决定同一牌照下条文是否适用。 */
HKCC.addAttributes([
  {
    id: 'sg-online-financial-services', jurisdiction: 'sg',
    label: '透过互联网提供网上银行、交易或支付等金融服务',
    note: '包括网上银行、流动银行、网上交易、流动/数字钱包及以账户与交易 API 提供的金融及' +
      '支付服务；触发《科技风险管理指引》第 14 章网上金融服务的相关控制点'
  }
]);
