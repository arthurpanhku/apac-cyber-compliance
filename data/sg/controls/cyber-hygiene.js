/**
 * MAS 网络卫生通知：FSM-N06（致新加坡银行）、FSM-N22（致资本市场金融机构）、
 * FSM-N31（致持牌数字代币服务提供者）。三份通知第 IV 段「网络卫生实务」条文
 * 文字几乎逐字相同（仅主体名词随对象机构而异：relevant entity / Bank /
 * digital token service provider），故以双向 crossRefs 让三份通知的同一要求
 * 合并为一张卡片。
 */
(function () {
  HKCC.addControls([
    // ---- FSM-N06：致新加坡银行 ----
    {
      id: 'MAS-N06-4.1', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.1',
      title: '管理员账户须妥为保护',
      requirement: '银行须确保任何操作系统、数据库、应用程式、保安设备或网络设备的每一个管理员账户，都获妥为保护以防止未经授权的存取或使用。',
      quote: 'Administrative Accounts: A relevant entity must ensure that every administrative account in respect of any operating system, database, application, security appliance or network device, is secured to prevent any unauthorised access to or use of such account.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.1', 'MAS-N31-4.1']
    },
    {
      id: 'MAS-N06-4.2', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.2',
      title: '须按风险轻重及时应用安全补丁',
      requirement: '银行须确保为每个系统应用安全补丁以处理漏洞，并在与该漏洞风险相称的时限内完成；若暂无补丁可用，须设立控制措施以降低该漏洞带来的风险。',
      quote: 'Security Patches: (a) A relevant entity must ensure that security patches are applied to address vulnerabilities to every system, and apply such security patches within a timeframe that is commensurate with the risks posed by each vulnerability. (b) Where no security patch is available to address a vulnerability, the relevant entity must ensure that controls are instituted to reduce any risk posed by such vulnerability to such a system.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.2', 'MAS-N31-4.2']
    },
    {
      id: 'MAS-N06-4.3', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.3',
      title: '须制定并落实书面保安标准',
      requirement: '银行须为每个系统制定一套书面保安标准，并确保系统符合该标准；系统无法符合标准时，须设立控制措施以降低由此产生的风险。',
      quote: 'Security Standards: (a) A relevant entity must ensure that there is a written set of security standards for every system. (b) Subject to sub-paragraph (c), a relevant entity must ensure that every system conforms to the set of security standards. (c) Where the system is unable to conform to the set of security standards, the relevant entity must ensure that controls are instituted to reduce any risk posed by such non-conformity.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.3', 'MAS-N31-4.3']
    },
    {
      id: 'MAS-N06-4.4', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.4',
      title: '网络边界须设有防御措施',
      requirement: '银行须在其网络边界实施控制措施，以阻截所有未经授权的网络流量。',
      quote: 'Network Perimeter Defence: A relevant entity must implement controls at its network perimeter to restrict all unauthorised network traffic.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.4', 'MAS-N31-4.4']
    },
    {
      id: 'MAS-N06-4.5', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.5',
      title: '须实施防恶意软件措施',
      requirement: '银行须在每个系统上实施一项或多项防恶意软件措施（如可行且有相关措施可用），以减低受恶意软件感染的风险。',
      quote: 'Malware protection: A relevant entity must ensure that one or more malware protection measures are implemented on every system, to mitigate the risk of malware infection, where such malware protection measures are available and can be implemented.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.5', 'MAS-N31-4.5']
    },
    {
      id: 'MAS-N06-4.6', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene', clause: '4.6',
      title: '关键系统管理员账户及客户网上账户须实施多重认证',
      requirement: '银行须确保多重认证适用于：(a) 属关键系统的操作系统、数据库、应用程式、保安设备或网络设备的所有管理员账户；及 (b) 银行用以透过互联网存取客户资料的所有系统账户。',
      quote: 'Multi-factor Authentication: A relevant entity must ensure that multi-factor authentication is implemented for the following: (a) all administrative accounts in respect of any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used by the relevant entity to access customer information through the internet.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N22-4.6', 'MAS-N31-4.6']
    },

    // ---- FSM-N22：致资本市场金融机构 ----
    {
      id: 'MAS-N22-4.1', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.1',
      title: '管理员账户须妥为保护',
      requirement: '相关实体须确保任何操作系统、数据库、应用程式、保安设备或网络设备的每一个管理员账户，都获妥为保护以防止未经授权的存取或使用。',
      quote: 'Administrative Accounts: A relevant entity must ensure that every administrative account in respect of any operating system, database, application, security appliance or network device, is secured to prevent any unauthorised access to or use of such account.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.1', 'MAS-N31-4.1']
    },
    {
      id: 'MAS-N22-4.2', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.2',
      title: '须按风险轻重及时应用安全补丁',
      requirement: '相关实体须确保为每个系统应用安全补丁以处理漏洞，并在与该漏洞风险相称的时限内完成；若暂无补丁可用，须设立控制措施以降低该漏洞带来的风险。',
      quote: 'Security Patches: (a) A relevant entity must ensure that security patches are applied to address vulnerabilities to every system, and apply such security patches within a timeframe that is commensurate with the risks posed by each vulnerability. (b) Where no security patch is available to address a vulnerability, the relevant entity must ensure that controls are instituted to reduce any risk posed by such vulnerability to such a system.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.2', 'MAS-N31-4.2']
    },
    {
      id: 'MAS-N22-4.3', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.3',
      title: '须制定并落实书面保安标准',
      requirement: '相关实体须为每个系统制定一套书面保安标准，并确保系统符合该标准；系统无法符合标准时，须设立控制措施以降低由此产生的风险。',
      quote: 'Security Standards: (a) A relevant entity must ensure that there is a written set of security standards for every system. (b) Subject to sub-paragraph (c), a relevant entity must ensure that every system conforms to the set of security standards. (c) Where the system is unable to conform to the set of security standards, the relevant entity must ensure that controls are instituted to reduce any risk posed by such non-conformity.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.3', 'MAS-N31-4.3']
    },
    {
      id: 'MAS-N22-4.4', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.4',
      title: '网络边界须设有防御措施',
      requirement: '相关实体须在其网络边界实施控制措施，以阻截所有未经授权的网络流量。',
      quote: 'Network Perimeter Defence: A relevant entity must implement controls at its network perimeter to restrict all unauthorised network traffic.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.4', 'MAS-N31-4.4']
    },
    {
      id: 'MAS-N22-4.5', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.5',
      title: '须实施防恶意软件措施',
      requirement: '相关实体须在每个系统上实施一项或多项防恶意软件措施（如可行且有相关措施可用），以减低受恶意软件感染的风险。',
      quote: 'Malware protection: A relevant entity must ensure that one or more malware protection measures are implemented on every system, to mitigate the risk of malware infection, where such malware protection measures are available and can be implemented.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.5', 'MAS-N31-4.5']
    },
    {
      id: 'MAS-N22-4.6', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene-cmi', clause: '4.6',
      title: '关键系统管理员账户及客户网上账户须实施多重认证',
      requirement: '相关实体须确保多重认证适用于：(a) 属关键系统的操作系统、数据库、应用程式、保安设备或网络设备的所有管理员账户；及 (b) 相关实体用以透过互联网存取客户资料的所有系统账户。',
      quote: 'Multi-factor Authentication: A relevant entity must ensure that multi-factor authentication is implemented for the following: (a) all administrative accounts in respect of any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used by the relevant entity to access customer information through the internet.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-cms'] },
      crossRefs: ['MAS-N06-4.6', 'MAS-N31-4.6']
    },

    // ---- FSM-N31：致持牌数字代币服务提供者 ----
    {
      id: 'MAS-N31-4.1', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.1',
      title: '管理员账户须妥为保护',
      requirement: '数字代币服务提供者须确保任何操作系统、数据库、应用程式、保安设备或网络设备的每一个管理员账户，都获妥为保护以防止未经授权的存取或使用。',
      quote: 'Administrative Accounts: A digital token service provider must ensure that every administrative account in respect of any operating system, database, application, security appliance or network device, is secured to prevent any unauthorised access to or use of such account.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.1', 'MAS-N22-4.1']
    },
    {
      id: 'MAS-N31-4.2', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.2',
      title: '须按风险轻重及时应用安全补丁',
      requirement: '数字代币服务提供者须确保为每个系统应用安全补丁以处理漏洞，并在与该漏洞风险相称的时限内完成；若暂无补丁可用，须设立控制措施以降低该漏洞带来的风险。',
      quote: 'Security Patches: (a) A digital token service provider must ensure that security patches are applied to address vulnerabilities to every system, and apply such security patches within a timeframe that is commensurate with the risks posed by each vulnerability. (b) Where no security patch is available to address a vulnerability, the digital token service provider must ensure that controls are instituted to reduce any risk posed by such vulnerability to such a system.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.2', 'MAS-N22-4.2']
    },
    {
      id: 'MAS-N31-4.3', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.3',
      title: '须制定并落实书面保安标准',
      requirement: '数字代币服务提供者须为每个系统制定一套书面保安标准，并确保系统符合该标准；系统无法符合标准时，须设立控制措施以降低由此产生的风险。',
      quote: 'Security Standards: (a) A digital token service provider must ensure that there is a written set of security standards for every system. (b) Subject to sub-paragraph (c), a digital token service provider must ensure that every system conforms to the set of security standards. (c) Where the system is unable to conform to the set of security standards, the digital token service provider must ensure that controls are instituted to reduce any risk posed by such non-conformity.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.3', 'MAS-N22-4.3']
    },
    {
      id: 'MAS-N31-4.4', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.4',
      title: '网络边界须设有防御措施',
      requirement: '数字代币服务提供者须在其网络边界实施控制措施，以阻截所有未经授权的网络流量。',
      quote: 'Network Perimeter Defence: A digital token service provider must implement controls at its network perimeter to restrict all unauthorised network traffic.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.4', 'MAS-N22-4.4']
    },
    {
      id: 'MAS-N31-4.5', domain: 'protect', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.5',
      title: '须实施防恶意软件措施',
      requirement: '数字代币服务提供者须在每个系统上实施一项或多项防恶意软件措施（如可行且有相关措施可用），以减低受恶意软件感染的风险。',
      quote: 'Malware protection: A digital token service provider must ensure that one or more malware protection measures are implemented on every system, to mitigate the risk of malware infection, where such malware protection measures are available and can be implemented.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.5', 'MAS-N22-4.5']
    },
    {
      id: 'MAS-N31-4.6', domain: 'identity', priority: 'baseline', sourceId: 'mas-cyber-hygiene-dtsp', clause: '4.6',
      title: '关键系统管理员账户及客户网上账户须实施多重认证',
      requirement: '数字代币服务提供者须确保多重认证适用于：(a) 属关键系统的操作系统、数据库、应用程式、保安设备或网络设备的所有管理员账户；及 (b) 用以透过互联网存取客户资料的所有系统账户。',
      quote: 'Multi-factor Authentication: A digital token service provider must ensure that multi-factor authentication is implemented for the following: (a) all administrative accounts in respect of any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used by the digital token service provider to access customer information through the internet.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-dtsp'] },
      crossRefs: ['MAS-N06-4.6', 'MAS-N22-4.6']
    }
  ]);
})();
