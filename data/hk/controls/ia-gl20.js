/**
 * 保险业监管局《网络安全指引》（GL20，2024 年 12 月），包括附录
 * Cyber Resilience Assessment Framework（CRAF）。GL20 主体按条款拆分；
 * CRAF Annex B 的 216 项控制原则按 27 个监管组件汇总，机构仍须在 IA 官方
 * 成熟度评估模板内逐项评估适用于其固有风险评级的每一项原则。
 */
(function () {
  const src = 'ia-gl20-2024';
  const insurer = { licenses: ['ia-authorized-insurer'], attributes: [] };
  const craf = { licenses: ['ia-authorized-insurer'], attributes: ['ia-craf'] };

  const main = [
    {
      id: 'IA-GL20-5.1', domain: 'governance', priority: 'baseline', sourceId: src, clause: '5.1',
      title: '制定并维持获董事会认可的网络安全策略及框架',
      requirement: '获授权保险人须制定并维持与其业务性质、规模及复杂程度相称的网络安全策略和框架，以缓减相关网络风险，并由董事会认可。',
      quote: 'Authorized insurers should establish and maintain a cybersecurity strategy and framework tailored to mitigate relevant cyber risks that are commensurate with the nature, size and complexity of their business.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-5.2', domain: 'governance', priority: 'enhanced', sourceId: src, clause: '5.2',
      title: '参考适用的科技及质量保证标准',
      requirement: '建立网络安全策略及框架时，可按业务性质、规模、复杂程度及风险状况，参考或对标最佳且切实可行的科技与质量保证标准，例如 ISO/IEC 27001、COBIT、OSFI 指引及 NIST 网络安全框架。',
      quote: 'Insurers, when establishing the cybersecurity strategy and framework, may make reference to or benchmark with the technology as well as the best available and practicable quality assurance standards.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-5.3', domain: 'governance', priority: 'baseline', sourceId: src, clause: '5.3',
      title: '界定网络安全目标、人员能力与管理流程',
      requirement: '网络安全框架须清楚界定网络安全目标及相关人员或系统用户的能力要求，纳入管理网络风险所需的明确流程与技术，并及时向所有用户传达策略。',
      quote: 'The cybersecurity framework should clearly define the insurer’s cybersecurity objectives, as well as the requirements for competency of relevant personnel or system users.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-5.4', domain: 'governance', priority: 'baseline', sourceId: src, clause: '5.4',
      title: '至少每年及在重大变化后检讨网络安全策略',
      requirement: '定期检讨和更新网络安全策略；至少每年一次，并在发生本机构网络事故、可能影响本机构的重大外部网络事件、部署新系统或重大系统变更时进行检讨。',
      quote: 'A review should be undertaken at least on an annual basis, upon the occurrence of cyber incidents to the insurer or major external cyber events which potentially could impact the insurer, or upon the deployment of new systems or major systems changes.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-6.1', domain: 'governance', priority: 'baseline', sourceId: src, clause: '6.1',
      title: '董事会对网络安全控制负总体责任',
      requirement: '董事会须对网络安全控制负总体责任，以清晰的职责、汇报及升级路线确保问责，并在机构内培养高度的网络安全意识与承诺。',
      quote: 'The board of directors of an authorized insurer should hold the overall responsibility for cybersecurity controls and ensure accountability within the insurer.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-6.2', domain: 'governance', priority: 'baseline', sourceId: src, clause: '6.2',
      title: '设定网络风险胃纳及容忍限度并持续监督',
      requirement: '董事会须为网络风险设定明确的风险胃纳及容忍限度，并监督相关网络安全计划的设计、实施与成效。董事会如设立具适当技能与知识的指定管理团队，仍须共同监督策略及框架并确保持续更新。',
      quote: 'The Board should establish a defined risk appetite and tolerance limit on cyber risks for the insurer and oversee the design, implementation and effectiveness of related cybersecurity programs.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-7.1', domain: 'governance', priority: 'baseline', sourceId: src, clause: '7.1',
      title: '识别、评估并控制网络风险',
      requirement: '在企业风险管理计划内设置整体网络风险管理自评工具：识别业务职能、活动、产品及服务；维护资讯资产、系统配置、相互连接及依赖关系的最新清单或映射并确定优先次序；评估用户、流程、技术及数据带来的固有网络风险；并进行涵盖威胁、漏洞、可能性及影响的业务影响分析。',
      quote: 'A self-assessment tool for the overall cyber risk management program should be put in place, as part of an enterprise risk management program.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-7.2', domain: 'governance', priority: 'baseline', sourceId: src, clause: '7.2',
      title: '重大组织、营运或系统变化后重评缓减措施',
      requirement: '在组织和营运架构或系统出现重大变化时，定期检讨网络风险缓减流程是否需要调整；检讨应至少每年一次，或在重大系统部署后进行。',
      quote: 'Insurers should regularly review and assess if changes to cyber risk mitigation processes are necessary when significant changes to organizational and operational structure and systems take place.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-8.1', domain: 'detect', priority: 'baseline', sourceId: src, clause: '8.1',
      title: '建立系统化持续监察流程',
      requirement: '建立系统化监察流程以及早侦测网络安全事故，定期评估内部控制程序的成效，并按需要更新风险胃纳及容忍限度。',
      quote: 'Insurers should establish systematic monitoring processes for early detection of cybersecurity incidents; regularly evaluate the effectiveness of internal control procedures; and update the risk appetite and tolerance limit as appropriate.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-8.2', domain: 'detect', priority: 'baseline', sourceId: src, clause: '8.2',
      title: '采用网络监察、测试及审计措施',
      requirement: '实施有效监察措施，至少包括网络监察、测试、内部审计及外部审计。',
      quote: 'There should be effective monitoring measures including, among others, network monitoring, testing, internal audit and external audit.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-8.3', domain: 'identity', priority: 'baseline', sourceId: src, clause: '8.3',
      title: '管理实体及远程访问身份与凭证',
      requirement: '在监察流程中管理资讯资产实体访问及远程访问所用的身份与凭证，并具备识别潜在网络风险迹象及监察系统是否实际遭入侵的能力。',
      quote: 'As part of the monitoring process, insurers should manage the identities and credentials for physical and remote access to information assets.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-8.4', domain: 'assurance', priority: 'baseline', sourceId: src, clause: '8.4',
      title: '至少每年测试网络安全框架全部要素',
      requirement: '至少每年测试网络安全框架的全部要素以确定整体成效；可单独或组合采用最新可用方法与实践，例如漏洞评估、情景测试及渗透测试。',
      quote: 'Insurers should test all elements of their cybersecurity framework to determine their overall effectiveness at least on an annual basis.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-9.1', domain: 'respond', priority: 'baseline', sourceId: src, clause: '9.1',
      title: '制定网络安全事故响应计划',
      requirement: '制定网络安全事故响应计划，涵盖事故情景、维持和恢复关键职能及必要活动的应变策略，以及将响应与恢复活动升级至董事会或指定管理团队的准则。',
      quote: 'Insurers should develop a cybersecurity incident response plan, which covers scenarios of cybersecurity incidents and corresponding contingency strategies to maintain and restore critical functions and essential activities in such scenarios.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-9.2', domain: 'respond', priority: 'baseline', sourceId: src, clause: '9.2',
      title: '立即评估、遏制并缓减事故影响',
      requirement: '发生网络安全事故时，评估事故性质、范围及影响，并立即采取所有切实可行的步骤遏制事故和缓减影响。',
      quote: 'In case of a cybersecurity incident, insurers should assess the nature, scope and impact of the incident and take all immediate practicable steps to contain the incident and mitigate its impact.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-9.3', domain: 'respond', priority: 'baseline', sourceId: src, clause: '9.3',
      title: '通知持份者并至少每年进行事故响应演练',
      requirement: '通知内部持份者，并在适用时通知外部持份者；必要时考虑联合事故响应行动，并至少每年进行一次事故响应演练。',
      quote: 'Insurers should notify internal stakeholders, and where applicable, external stakeholders and consider joint incident response actions, if necessary.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-9.4', domain: 'respond', priority: 'baseline', sourceId: src, clause: '9.4',
      title: '发现相关事故后最迟 72 小时内向 IA 报告',
      requirement: '发现相关事故后，须在切实可行范围内尽快向保险业监管局报告事故及相关资料，并在任何情况下不得迟于发现后 72 小时。',
      quote: 'Upon the detection of a relevant incident, the insurer should report the incident with the related information to the IA as soon as practicable, and in any event no later than 72 hours from detection.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-9.5', domain: 'respond', priority: 'baseline', sourceId: src, clause: '9.5',
      title: '恢复稳定营运后补救所有被利用的漏洞',
      requirement: '恢复稳定营运后，识别并缓减所有遭利用的漏洞，并补救所识别漏洞，以防止类似事故再次发生。',
      quote: 'Once stable operations are resumed, insurers should identify and mitigate all vulnerabilities that were exploited, and remediate the identified vulnerabilities to prevent similar incidents.',
      quoteStatus: 'verbatim', applicability: insurer
    },
    {
      id: 'IA-GL20-10.1', domain: 'detect', priority: 'baseline', sourceId: src, clause: '10.1',
      title: '收集、分析并分享网络风险信息',
      requirement: '建立流程收集及分析相关网络风险信息，并参与情报分享平台等信息分享组织，以便本地及国际间及时分享资料并迅速采取适当预防措施。',
      quote: 'Insurers should establish a process to gather and analyse relevant cyber risk information and participate in information sharing groups.',
      quoteStatus: 'excerpt', applicability: insurer
    },
    {
      id: 'IA-GL20-10.2', domain: 'awareness', priority: 'baseline', sourceId: src, clause: '10.2',
      title: '为所有系统用户提供适切的网络安全培训',
      requirement: '按系统用户面对的网络风险种类及程度，为所有系统用户安排充分培训，涵盖网络安全意识及最新发展；并提升员工，尤其网络安全及系统负责人员的专业能力。',
      quote: 'Insurers should arrange adequate training for all system users on the subject of cybersecurity awareness and the latest developments in cybersecurity.',
      quoteStatus: 'excerpt', applicability: insurer
    }
  ];

  const process = [
    {
      id: 'IA-CRAF-1.2.2', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.2',
      title: 'CRAF 覆盖香港保险业务的所有支撑要素',
      requirement: 'CRAF 评估范围须涵盖支撑获授权保险人在香港经营保险业务的所有系统、基础设施（包括本地及云端）、流程及人员，并按附录 A 与附录 B 分别完成固有风险和网络安全成熟度评估。',
      quote: 'CRAF should cover all systems, infrastructure (both on-premises and cloud infrastructure), processes, and individuals supporting an authorized insurer’s Hong Kong insurance business.',
      quoteStatus: 'verbatim', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.3', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.3',
      title: '至少每三年及在重大变化或 IA 要求时评估',
      requirement: '固有风险评估与网络安全成熟度评估均须至少每三年进行一次；可更频密进行，并应在业务性质或技术出现重大变化时评估；保险业监管局要求时还须进行临时评估。',
      quote: 'Both the inherent risk assessment and cybersecurity maturity assessment should be conducted at least every three years.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.4a', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.4',
      title: '委任胜任且客观的评估人员',
      requirement: '委任具适当资历及经验的胜任人员，客观地按 CRAF 进行评估，并评价控制的稳健程度及其降低网络风险的成效。外部独立验证人员须具附录 C 至少一项指定资历，且不得是本机构或同集团公司的雇员。',
      quote: 'Authorized insurers should engage competent persons who have the appropriate qualifications and experience to objectively conduct the assessments in accordance with CRAF.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.4b', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.4 — Inherent risk assessment',
      title: '中高固有风险评估的资历与独立验证',
      requirement: '如固有风险评级为中或高，而原评估人员不具附录 C 指定资历，须由具至少一项指定资历的另一评估人员重新进行；如评估或重评由内部人员进行，结果还须由合资格外部验证人员独立验证。',
      quote: 'If the inherent risk rating is determined to be medium or high and the assessment is conducted by an Assessor who does not possess any of the prescribed qualifications in Annex C, then the inherent risk assessment should be re-performed.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.4c', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.4 — Cybersecurity maturity assessment',
      title: '中高固有风险成熟度评估的资历与独立验证',
      requirement: '中或高固有风险机构的网络安全成熟度评估须由具附录 C 至少一项指定资历的人员进行；如由内部人员进行，结果须由合资格外部验证人员独立验证。保险业监管局要求时，须委任外部顾问重做或独立验证全部或部分评估。',
      quote: 'For an insurer with a medium or high inherent risk rating, the cybersecurity maturity assessment must be conducted by an Assessor who possess at least one of the prescribed qualifications listed in Annex C.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.5', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.5',
      title: '测试控制设计及运作成效并采用风险为本抽样',
      requirement: '评估人员须审查控制设计成效及测试运作成效。首次评估的抽样须至少覆盖此前 6 个月，后续评估至少覆盖此前 12 个月；抽样范围、数量及方法应以风险为本、具合理代表性，并优先覆盖关键应用。',
      quote: 'Assessors are required to perform both design effectiveness review and operating effectiveness testing of an authorized insurer’s cybersecurity controls.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.6a', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.6',
      title: '按固有风险评级期限完成首次呈交',
      requirement: '高固有风险机构须自 CRAF 生效日起 12 个月内向保险业监管局呈交评估结果；低或中固有风险机构须在 18 个月内呈交。CRAF 随 GL20 于 2025-01-01 生效，对应首次期限分别为 2026-01-01 及 2026-07-01。',
      quote: 'Authorized insurers should submit to the IA the results of the assessments ... within 12 months (for insurers with a high inherent risk rating) and 18 months (for insurers with a low or medium inherent risk rating) from the effective date of this CRAF.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.6b', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.6',
      title: '首次呈交后每三年再次呈交',
      requirement: '首次呈交后，须每三年向保险业监管局再次呈交固有风险评估及网络安全成熟度评估结果。',
      quote: 'Following the first submission, insurers should submit the results of the assessments every three years thereafter.',
      quoteStatus: 'verbatim', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.6c', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.6(ii)',
      title: '呈交指定模板、佐证资料及整改计划',
      requirement: '使用保险业监管局指定模板呈交固有风险和成熟度评估结果及相关佐证文件；逐项列明控制差距，并为每项差距制定含清晰行动和目标完成日期的改善或补救计划。除非另有合理理由，整改须及时完成且不得迟于下一次成熟度评估。',
      quote: 'Insurers should also state all the gaps in control principles identified with an improvement/remedial plan containing clear action points and target completion date for each action point.',
      quoteStatus: 'verbatim', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.6d', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.6(iii)',
      title: '中高固有风险机构呈交 TIBAS 差距',
      requirement: '中或高固有风险机构须呈交威胁情报主导攻击模拟（TIBAS）所识别的控制原则差距（如有），包括发现说明及风险评级。',
      quote: 'For insurers with medium or high inherent risk rating, the identified gaps of control principles, if any, from the Threat Intelligence Based Attack Simulation exercise [should be submitted].',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-1.2.6e', domain: 'governance', priority: 'baseline', sourceId: src, clause: 'CRAF 1.2.6',
      title: '评估结果须经高级人员及评估方审阅签署',
      requirement: '评估结果及已完成的指定模板须由行政总裁或高级行政人员（例如负责内部审计、合规或风险管理的管控要员），以及负责评估的评估人员和／或验证人员审阅并签署确认。',
      quote: 'The results of the assessments including completed assessment templates prescribed by the IA should be reviewed and signed off by the Chief Executive or Senior Executive of the insurer.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-3.2', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 3.2',
      title: '按固有风险评级落实累计成熟度控制原则',
      requirement: '低固有风险机构须达到全部适用基线控制原则；中风险须达到基线及中级原则；高风险须达到基线、中级及高级原则。每项原则须在指定模板记录 Y、AC、RA、N 或 NA；所有适用组件在目标等级须达到 100%，方可取得相应整体成熟度。',
      quote: 'An insurer is expected to achieve 100% of the control principles of all the components of the 7 domains applicable to the insurer.',
      quoteStatus: 'excerpt', applicability: craf
    },
    {
      id: 'IA-CRAF-3.3', domain: 'assurance', priority: 'baseline', sourceId: src, clause: 'CRAF 3.3',
      title: '采用替代评估框架须证明可比性并补足差距',
      requirement: '如采用 CRAF 以外的网络安全评估框架，须令保险业监管局信纳其控制原则与 CRAF 可比，并满足范围、评估范围映射、补足差距、合资格独立评估人员、仍以 IA 指定格式呈交，以及拟采用的评估在呈交前一年内完成等条件。',
      quote: 'Should an insurer decide to adopt any cybersecurity assessment framework other than CRAF, the insurer should demonstrate to the IA’s satisfaction that the control principles ... are comparable.',
      quoteStatus: 'excerpt', applicability: craf
    }
  ];

  const componentRequirement = scope =>
    `按照机构固有风险评级，在 IA 官方网络安全成熟度评估矩阵中逐项落实本组件全部适用的基线、中级及／或高级控制原则，并记录 Y、AC、RA、N 或 NA、佐证资料及差距。本组件涵盖：${scope}。`;

  const components = [
    ['1.1', 'governance', '网络韧性监督', '董事会和高级管理层监督，以及至少每年的书面状态报告', 'Cyber resilience oversight'],
    ['1.2', 'governance', '策略与政策', '网络安全策略、计划及经董事会或指定委员会批准的政策', 'Strategies and policies'],
    ['1.3', 'governance', '网络风险管理', '网络风险管理职能、社交媒体政策及风险管理计划', 'Cyber risk management'],
    ['1.4', 'assurance', '审计', '独立且具足够资源的网络安全审计及发现跟进', 'Audit'],
    ['1.5', 'awareness', '人员配置与培训', '网络安全角色职责、资源、胜任能力及至少每年的培训', 'Staffing and training'],
    ['2.1', 'protect', '资讯科技资产管理', '资产清单、负责人、分类、配置与生命周期管理', 'IT asset management'],
    ['2.2', 'governance', '网络风险识别、评估、处理与监察', '风险负责人、风险评估、缓减策略、风险登记册及定期汇报', 'Cyber risk identification, assessment, treatment, and monitoring'],
    ['3.1', 'identity', '访问控制', '用户及特权账户、实体、远程、无线及流动访问，以及密码密钥管理', 'Access control'],
    ['3.2', 'protect', '基础设施保护控制', '网络边界与分段、系统安全配置，以及数据中心环境控制', 'Infrastructure protection control'],
    ['3.3', 'data', '数据保护', '端点及可移除媒体管制、敏感数据分类、加密、传输、保留与销毁', 'Data protection'],
    ['3.4', 'protect', '安全开发', '安全系统开发生命周期、代码审查、测试、环境分隔及投产控制', 'Secure development'],
    ['3.5', 'protect', '补丁与变更管理', '补丁计划、风险评估与测试，以及受控的系统及配置变更', 'Patch and change management'],
    ['3.6', 'assurance', '整改管理', '按风险评级、负责人和时限追踪安全发现直至完成', 'Remediation management'],
    ['4.1', 'detect', '漏洞侦测', '反病毒与反恶意软件、漏洞扫描、渗透及模拟测试', 'Vulnerability detection'],
    ['4.2', 'detect', '异常活动侦测', '日志监察分析、SIEM、行为异常及客户交易监察', 'Anomalies activity detection'],
    ['4.3', 'detect', '网络事故侦测', '事件监察责任、及时告警及在攻击者立足或横向移动前发现入侵', 'Cyber incident detection'],
    ['4.4', 'detect', '威胁监察与分析', '持续监察外部威胁、漏洞及攻击趋势并调整防御', 'Threat monitoring and analysis'],
    ['5.1', 'respond', '事故响应与恢复的治理及准备', '跨部门问责、响应手册、业务影响分析、连续性、灾难恢复及备份', 'Governance and preparation of incident response and recovery'],
    ['5.2', 'respond', '分析、缓减与恢复', '事故分析、遏制和根除，以及恢复后的质量保证测试', 'Analysis, mitigation, and restoration'],
    ['5.3', 'respond', '网络取证', '数码证据的收集、保存、分析及防止未经授权修改或删除', 'Cyber forensics'],
    ['5.4', 'respond', '沟通与改进', '员工汇报渠道、事故分类追踪、持份者沟通及经验教训闭环', 'Communication and improvement'],
    ['5.5', 'assurance', '威胁情报主导攻击模拟', '为中高固有风险机构设计、执行并整改 TIBAS 演练', 'Threat Intelligence Based Attack Simulation'],
    ['6.1', 'detect', '威胁情报', '订阅、收集、分析并运用相关威胁情报改善控制', 'Threat intelligence'],
    ['6.2', 'detect', '威胁情报分享', '维护执法及监管联络资料，并以正式、安全且合规的流程分享情报', 'Threat intelligence sharing'],
    ['7.1', 'thirdparty', '外部连接', '识别、批准、保护及定期检讨外部连接和联网第三方', 'External connections'],
    ['7.2', 'thirdparty', '第三方管理', '合约安全责任、风险为本尽职审查、访问控制及事件通报', 'Third-party management'],
    ['7.3', 'thirdparty', '持续监察第三方风险', '持续风险评估、服务表现监察、审计权及终止安排', 'Ongoing monitoring of third-party risk']
  ].map(([code, domain, title, scope, quote]) => ({
    id: `IA-CRAF-B-${code}`,
    domain,
    priority: 'baseline',
    sourceId: src,
    clause: `CRAF Annex B, ${code}`,
    title,
    requirement: componentRequirement(scope),
    quote,
    quoteStatus: 'summary',
    applicability: craf
  }));

  HKCC.addControls([...main, ...process, ...components]);
})();
