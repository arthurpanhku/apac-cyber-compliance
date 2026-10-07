/**
 * 牌照/实体类型（马来西亚）。用户可多选。
 * 范围取自 RMiT 第 5.2 段对「金融机构」的定义及封面所列适用对象；
 * 第 2.2 段对部分机构豁免若干段落，已在各控制点的 applicability 中体现。
 */
HKCC.addLicenses([
  {
    id: 'my-bank', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '持牌银行、投资银行及伊斯兰银行',
    note: 'Licensed bank / investment bank / Islamic bank，根据《2013 年金融服务法》或《2013 年伊斯兰金融服务法》获发牌照；触发 RMiT'
  },
  {
    id: 'my-insurer', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '持牌保险人及伊斯兰保险（Takaful）经营者',
    note: '包括专业再保险人及专业再伊斯兰保险经营者（不包括外国专业再保险人及专业再伊斯兰保险经营者的分行）；触发 RMiT'
  },
  {
    id: 'my-dfi', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '订明发展金融机构',
    note: 'Prescribed development financial institution，根据《2002 年发展金融机构法》订明；触发 RMiT'
  },
  {
    id: 'my-emoney', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '合资格电子货币发行人',
    note: 'Eligible e-money issuer，即按《电子货币》政策文件附录 1 准则具相当市场占有率的获批准电子货币发行人；' +
      '豁免 Part C 第 16–17 段及附录 6、7；未被指定为国家关键信息基础设施（NCII）实体者另豁免第 13.3 段'
  },
  {
    id: 'my-dps', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '指定支付系统营运者',
    note: 'Operator of a designated payment system；豁免第 16–17 段、附录 6、7 及第 12.3–12.9 段'
  },
  {
    id: 'my-acquirer', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '非银行注册商户收单机构（市场占有率 5% 或以上）',
    note: 'Non-bank registered merchant acquirer，占马来西亚非银行商户收单交易金额或笔数至少 5%；豁免第 16–17 段及附录 6、7；' +
      '未被指定为 NCII 实体者另豁免第 13.3 段'
  },
  {
    id: 'my-iri', jurisdiction: 'my', group: 'BNM 监管实体',
    label: '中介汇款机构（市场占有率 5% 或以上）',
    note: 'Intermediary remittance institution，占马来西亚中介汇款交易金额或笔数至少 5%；豁免第 16–17 段、附录 6、7 及第 12.3–12.9 段；' +
      '未被指定为 NCII 实体者另豁免第 13.3 段'
  }
]);

/** 业务特征（马来西亚）。决定同一牌照下条文是否适用。 */
HKCC.addAttributes([
  {
    id: 'my-digital-services', jurisdiction: 'my',
    label: '透过电子渠道提供数码服务',
    note: '经互联网、流动装置、自助及销售点终端向客户提供支付、汇款、银行、伊斯兰银行、保险或伊斯兰保险服务；' +
      '触发 RMiT 第 12 章及第 16 章的数码服务要求'
  },
  {
    id: 'my-cloud', jurisdiction: 'my',
    label: '使用云端服务',
    note: '触发 RMiT 第 10.50–10.52 段的云端风险评估及资料保障要求'
  },
  {
    id: 'my-ncii', jurisdiction: 'my',
    label: '获 BNM 指定为国家关键信息基础设施（NCII）实体',
    note: '根据《2024 年网络安全法》第 17(1) 条获指定；触发第 11.4 段，并令电子货币发行人、商户收单机构及中介汇款机构' +
      '须遵守第 10.31 及 13.3 段'
  }
]);
