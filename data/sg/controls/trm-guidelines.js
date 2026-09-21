/**
 * MAS《科技风险管理指引》（Technology Risk Management Guidelines，2021-01-18）。
 * 不具法律约束力的指引，适用于 MAS 监管的金融机构（FI）；MAS 在监管评估中会考虑
 * 机构遵循指引精神的程度。条款编号取自官方 PDF 的章节编号。
 * quote 为章节主题的概括说明（非逐字节录），quoteStatus 一律为 summary。
 */
(function () {
  const ALL_SG = ['sg-bank', 'sg-cms', 'sg-dtsp'];

  HKCC.addControls([
    // ---- 3 科技风险治理与监督 ----
    {
      id: 'MAS-TRMG-3.1', domain: 'governance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.1',
      title: '董事会及高级管理层职责',
      requirement: '董事会及高级管理层须确保成员具备理解及管理科技风险（包括网络威胁风险）的知识，任命具备相应专长的首席资讯（科技）总监与首席资讯保安总监（或同等职位），建立并落实科技风险管理策略，并按机构风险胃纳做出重大科技决策；董事会并负责批准风险胃纳、定期检讨策略及确保独立审计职能的设立。',
      quote: 'Role of the Board of Directors and Senior Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-3.2', domain: 'governance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.2',
      title: '政策、标准及程序',
      requirement: '机构须制定并定期检讨科技风险管理的政策、标准及程序；对政策的偏离须经风险评估并由高级管理层批准，并设有合规检查与跟进机制。',
      quote: 'Policies, Standards and Procedures',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-3.3', domain: 'governance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.3',
      title: '资讯资产管理',
      requirement: '机构须识别、分类及界定资讯资产的负责人，并维持资讯资产清单，定期检讨更新。',
      quote: 'Management of Information Assets',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-3.4', domain: 'thirdparty', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.4',
      title: '第三方服务管理',
      requirement: '在订立合约或合作关系前，机构须评估并管理可能影响第三方资讯科技系统及数据机密性、完整性与可用性的科技风险；并持续确保第三方保持高标准的数据保护及系统韧性。',
      quote: 'Management of Third Party Services',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-3.5', domain: 'awareness', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.5',
      title: '人员胜任能力及background审查',
      requirement: '机构须确保负责资讯科技职能的人员（包括承办商及服务提供者）具备所需的胜任能力，并对可存取机构数据及系统的人员进行background审查，以降低内部威胁风险。',
      quote: 'Competency and Background Review',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-3.6', domain: 'awareness', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '3.6',
      title: '保安意识与培训',
      requirement: '机构须建立全面的资讯科技保安意识培训计划，内容至少涵盖当前网络威胁形势、机构的资讯科技保安政策与标准，以及员工个人保障资讯资产的责任；培训须每年至少一次，董事会成员亦须接受相关培训，计划并须定期检讨更新。',
      quote: 'Security Awareness and Training',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 8 资讯科技韧性 ----
    {
      id: 'MAS-TRMG-8.1', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '8.1',
      title: '系统可用性',
      requirement: '资讯科技系统须按业务需要设计并落实相称的可用性水平；对需要高可用性的系统须实施冗余或容错方案，并定期检讨架构设计以识别单点故障，持续监察系统资源使用情况并设定预警阈值。',
      quote: 'System Availability',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-8.2', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '8.2',
      title: '系统可恢复性',
      requirement: '机构须为系统制定恢复时限目标（RTO）及恢复点目标（RPO）；灾难恢复计划须涵盖恢复系统以支持业务需要的程序，恢复过程中须遵循既定且经测试批准的计划，并宜定期从备援或异地设施运作以确保其能长期支持业务。',
      quote: 'System Recoverability',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-8.3', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '8.3',
      title: '灾难恢复计划测试',
      requirement: '机构须定期测试灾难恢复计划以验证其有效性及能否达成既定恢复目标；测试计划须涵盖多种合理的中断情景（包括主要或生产场地的全面或部分瘫痪、重大系统故障），并涵盖资讯资产间（包括由第三方管理者）的恢复依赖关系，业务及资讯科技相关持份者均应参与。',
      quote: 'Testing of Disaster Recovery Plan',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-8.4', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '8.4',
      title: '系统备份与恢复',
      requirement: '机构须制定系统及数据备份策略并定期执行备份，制定管理备份数据生命周期的政策（涵盖备份频率、保留期、存储机制及安全销毁），定期测试备份还原以验证有效性，并对备份中的机密数据加以保护（如加密）及离线或异地存放。',
      quote: 'System Backup and Recovery',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-8.5', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '8.5',
      title: '数据中心韧性',
      requirement: '机构须对数据中心进行威胁与脆弱性风险评估（TVRA），确保电力、网络连接、冷却及机电系统具备足够冗余以消除单点故障，设有火灾侦测及扑救设施，异地/灾备数据中心须与主中心地理上分隔，物理保安及环境监控须全天候进行，并设有适当的实体门禁管制（如按需授权、访客登记陪同、设备机柜受限存取）。',
      quote: 'Data Centre Resilience',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 9 存取控制 ----
    {
      id: 'MAS-TRMG-9.1', domain: 'identity', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '9.1',
      title: '用户存取管理',
      requirement: '授予员工存取资讯资产的权限须按「决不单独一人」、「职责分离」及「最小权限」原则并依角色职责核准；须建立用户存取的申请、变更及撤销流程，记录留存以供审计；须实施密码政策及多重认证以保护存取敏感系统功能的用户，并定期审阅用户权限以识别沉睡或多余账户，离职或调岗须及时撤销权限。',
      quote: 'User Access Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-9.2', domain: 'identity', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '9.2',
      title: '特权存取管理',
      requirement: '特权账户的授予须按最小需要原则，其活动须被记录并纳入持续监察；系统及服务账户的使用亦须设立管理及监察机制以侦测可疑或未经授权的活动。',
      quote: 'Privileged Access Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-9.3', domain: 'identity', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '9.3',
      title: '远程存取管理',
      requirement: '远程连接须加密以防止数据经网络截听或窃听而外泄，执行远程存取的用户须实施如多重认证的强认证措施，且只允许从已按机构保安标准妥为保护的设备进行远程存取。',
      quote: 'Remote Access Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 10 密码技术 ----
    {
      id: 'MAS-TRMG-10.1', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '10.1',
      title: '密码演算法与协定',
      requirement: '机构须采用国际公认标准的密码演算法，选择符合保安目标的演算法及密钥长度，确保随机种子或数字具足够长度及随机性，所用演算法须经严谨测试或审查，并须持续关注密码分析领域的发展，按需更新演算法或增加密钥长度。',
      quote: 'Cryptographic Algorithm and Protocol',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-10.2', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '10.2',
      title: '密码密钥管理',
      requirement: '机构须制定涵盖密钥生成、分发、安装、更新、撤销、恢复及届满的密钥管理政策、标准及程序；密钥须安全生成并妥为保护，按数据敏感度及系统关键性厘定使用期限并于届满前更换，敏感密钥须以硬件保安模块等强化系统管理，传输时须经带外渠道等安全方式分发，密钥须按单一用途区分，一旦发现外泄须撤销并替换受影响密钥，届满或撤销的密钥须以安全方式彻底销毁，并对密钥备份加以妥善保护。',
      quote: 'Cryptographic Key Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 11 数据与基础设施保安 ----
    {
      id: 'MAS-TRMG-11.1', domain: 'data', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '11.1',
      title: '数据保安',
      requirement: '机构须制定全面的数据外泄防护政策，涵盖传输中、静态及使用中的数据，防止未经授权的存取、修改、复制或传输；终端设备及系统中的机密数据须加密并以强存取控制保护，只可使用经授权的存储媒介及设备，须防范经未经授权的互联网服务（如社交媒体、云存储、电邮）传输机密数据，非生产环境使用生产数据须经高级管理层批核并尽可能加以脱敏，媒介及设备停用或重新部署前须不可逆地删除机密数据。',
      quote: 'Data Security',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-11.2', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '11.2',
      title: '网络保安',
      requirement: '机构须在与互联网及第三方的连接处部署防火墙等网络保安设备；按系统关键性、功能角色或数据敏感度进行网络分段以降低横向移动及内部威胁风险；部署网络入侵防御系统；实施网络存取控制以侦测及阻止未经授权设备连接，并定期检讨网络设备的存取规则以移除过时规则及不安全协定；宜考虑隔离网页浏览活动；实施有效的阻断服务（DoS）防护；并定期检讨网络架构以识别潜在网络保安弱点。',
      quote: 'Network Security',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-11.3', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '11.3',
      title: '系统保安',
      requirement: '机构须为硬件与软件制定并定期检讨保安标准配置，建立流程核实标准的统一执行及识别偏差并及时处理；须部署终端防护以应对恶意软件感染，并保持病毒码更新及定期扫描；应实施侦测与回应机制以及早发现并补救可疑活动；宜实施应用程式白名单机制；实施自携设备（BYOD）前须进行风险评估并采取相应保安措施。',
      quote: 'System Security',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-11.4', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '11.4',
      title: '虚拟化保安',
      requirement: '机构须为虚拟化方案的各组件建立保安标准，以强存取控制限制对虚拟机管理程式（hypervisor）及主机操作系统的管理存取，并制定政策与标准管理虚拟映像与快照的建立、分发、存储、使用、退役及销毁，以防未经授权的存取或修改。',
      quote: 'Virtualisation Security',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-11.5', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '11.5',
      title: '物联网（IoT）保安',
      requirement: '机构须维持所有物联网设备的清单（包括连接网络及实体位置）；就物联网设备可能引致的风险进行评估并实施相应控制，包括以网络存取控制限制物联网设备的网络流量、将物联网设备安置于独立网络分段，并持续监察设备的可疑或异常活动。',
      quote: 'Internet of Things',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 12 网络保安运作 ----
    {
      id: 'MAS-TRMG-12.1', domain: 'detect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '12.1',
      title: '网络威胁情报与信息分享',
      requirement: '机构须建立流程收集、处理及分析与网络相关的信息（包括网络事件、威胁情报及系统漏洞信息），采购网络情报监测服务，并积极参与可信方之间的网络威胁信息分享安排；同时建立流程侦测及回应网上流传的与机构相关的失实信息。',
      quote: 'Cyber Threat Intelligence and Information Sharing',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-12.2', domain: 'detect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '12.2',
      title: '网络事件监测与侦测',
      requirement: '机构须设立保安运作中心或采用受管理保安服务，以持续监察及分析网络事件并及时侦测和回应网络事故；建立流程收集、处理、审阅及保留系统日志并妥为保护；建立系统日常活动的基线档案以识别异常，考虑运用用户行为分析及日志关联分析识别可疑活动模式，并建立流程及时上报可疑或异常活动。',
      quote: 'Cyber Event Monitoring and Detection',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-12.3', domain: 'respond', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '12.3',
      title: '网络事故回应及管理',
      requirement: '机构须制定网络事故回应及管理计划，以迅速隔离、消除网络威胁并安全恢复受影响服务，计划须涵盖应对合理网络威胁情景的沟通、协调及回应程序；须建立流程调查并识别导致保安事故的控制缺失，评估事故的全面影响，并利用网络情报及事故经验教训改进现有控制或事故管理计划。',
      quote: 'Cyber Incident Response and Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 13 网络保安评估 ----
    {
      id: 'MAS-TRMG-13.1', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.1',
      title: '漏洞评估',
      requirement: '机构须建立流程对资讯科技系统定期进行漏洞评估，以识别保安漏洞并及时处理由此产生的风险，评估频率须与系统关键性及所面临的保安风险相称；评估范围至少须涵盖漏洞发现、薄弱保安配置及开放网络端口的识别，以及应用程式漏洞，网页系统并须检查常见网页漏洞。',
      quote: 'Vulnerability Assessment',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-13.2', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.2',
      title: '渗透测试',
      requirement: '机构须进行渗透测试以深入评估其网络保安防御，网上金融服务须结合黑箱及灰箱测试；可考虑以漏洞赏金计划补充渗透测试；为获得更准确评估，渗透测试须在生产环境进行并实施适当保障措施；测试频率须按系统关键性及网络风险暴露程度厘定，可直接从外部存取的系统测试频率应相应提高。',
      quote: 'Penetration Testing',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-13.3', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.3',
      title: '网络演习',
      requirement: '机构须定期进行以情景为本的网络演习，以验证其应对网络威胁的回应、恢复及沟通计划，演习可包括社交工程、桌面推演或网络靶场演习；须按演习目标邀请相关持份者参与，包括高级管理层、业务部门、企业传讯、危机管理小组、服务提供者，以及负责网络威胁侦测、回应及恢复的技术人员。',
      quote: 'Cyber Exercises',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-13.4', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.4',
      title: '对抗性攻击模拟演习',
      requirement: '机构须进行对抗性攻击模拟演习，以测试并验证其网络防御及回应计划应对常见网络威胁的有效性；演习的目标、范围及交战规则须于演习开始前订明，并在严密监督下受控进行，以确保红队活动不会干扰生产系统。',
      quote: 'Adversarial Attack Simulation Exercise',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-13.5', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.5',
      title: '基于情报的情景设计',
      requirement: '为模拟真实的对抗性攻击，网络保安评估的威胁情景须基于具挑战性但合理可信的网络威胁设计；机构亦可运用与其资讯科技环境相关的威胁情报，识别最可能构成威胁的威胁行为者，以及其最可能采用的战术、技术与程序。',
      quote: 'Intelligence-Based Scenario Design',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },
    {
      id: 'MAS-TRMG-13.6', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '13.6',
      title: '整改管理',
      requirement: '机构须建立全面的整改流程，以追踪及解决网络保安评估或演习中识别的问题，流程至少须涵盖问题的严重程度评估与分类、不同严重程度问题的整改时限，以及管理偏离框架的风险评估与缓解策略。',
      quote: 'Remediation Management',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    },

    // ---- 14 网上金融服务 ----
    {
      id: 'MAS-TRMG-14.1', domain: 'protect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '14.1',
      title: '网上金融服务的保安',
      requirement: '机构须实施与风险相称的保安及控制措施以确保数据及网上服务的保安，包括以数据加密及数码签署保护通讯渠道，采取措施降低代码注入、跨网站脚本、中间人攻击、DNS 劫持、DDoS、恶意软件及诈骗攻击等常见攻击向量的风险；透过流动设备提供服务时须针对流动应用程式的特有风险实施相应措施，且只应透过官方应用程式商店或其他安全渠道提供流动应用程式；并须监测针对机构及其客户的钓鱼活动，及时呈报并提醒客户。',
      quote: 'Security of Online Financial Services',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG, attributes: ['sg-online-financial-services'] }
    },
    {
      id: 'MAS-TRMG-14.2', domain: 'identity', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '14.2',
      title: '客户认证与交易签署',
      requirement: '网上金融服务的登入须部署多重认证；客户密码的传输须端对端加密并只在强化系统内核实；高风险活动（如更改敏感客户资料、登记第三方收款人、大额转账）须实施交易签署（如数码签署）；可考虑实施与交易风险相称的风险为本认证；使用生物识别或密码时须确保相关数据在存储及传输中均加密，并妥善保护认证凭证；已认证的会话须设有闲置自动终止机制以降低会话被劫持的风险。',
      quote: 'Customer Authentication and Transaction Signing',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG, attributes: ['sg-online-financial-services'] }
    },
    {
      id: 'MAS-TRMG-14.3', domain: 'detect', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '14.3',
      title: '诈骗监控',
      requirement: '机构须实施实时诈骗监控系统以识别并阻截可疑或诈骗性的网上交易；建立流程调查可疑交易或付款并确保问题得到妥善及时处理；并须就超过阈值的可疑活动或资金转账通知客户，通知内容须包含有意义的信息（如交易类型、金额）及举报可疑活动或未经授权交易的指引。',
      quote: 'Fraud Monitoring',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG, attributes: ['sg-online-financial-services'] }
    },
    {
      id: 'MAS-TRMG-14.4', domain: 'awareness', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '14.4',
      title: '客户教育与沟通',
      requirement: '机构须告知客户使用网上金融服务时应采纳的保安最佳实务（包括保护接入设备的措施），就新型网络威胁及时提醒客户以便其采取预防措施，并向客户说明侦测未经授权交易及向机构及时举报保安问题、可疑活动或涉嫌诈骗的方法。',
      quote: 'Customer Education and Communication',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG, attributes: ['sg-online-financial-services'] }
    },

    // ---- 15 资讯科技审计 ----
    {
      id: 'MAS-TRMG-15.1', domain: 'assurance', priority: 'baseline', sourceId: 'mas-trm-guidelines', clause: '15.1',
      title: '审计职能',
      requirement: '机构须确保资讯科技审计的执行，为董事会及高级管理层就机构现有及新兴科技风险相关的风险管理、管治及内部控制的充分性与有效性提供独立客观的意见；须识别全面的科技风险可审计范畴（涵盖所有资讯科技营运、职能及流程），审计频率须与相关资讯资产、职能或流程的关键性及风险相称，并确保资讯科技审计人员具备所需的胜任能力与技能。',
      quote: 'Audit Function',
      quoteStatus: 'summary',
      applicability: { licenses: ALL_SG }
    }
  ]);
})();
