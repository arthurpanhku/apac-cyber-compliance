/**
 * APRA 审慎标准 CPS 234《资讯保安》。
 * 条款编号取自官方 PDF 的段落编号（第 13–36 段为实质要求；第 1–12 段为授权依据、适用范围、
 * 生效日期及定义，不另立控制点）。
 * quote 中的脚注编号已删去，脚注内容如影响适用范围则写入 note。
 * 适用实体见第 2 段：五类 APRA 监管实体均适用全部条文；第 16、22、28、34 段只在资讯资产
 * 由关联方或第三方管理时适用，故另设业务特征 au-third-party-assets。
 */
(function () {
  const ALL = ['au-adi', 'au-general-insurer', 'au-life', 'au-phi', 'au-rse'];
  const all = () => ({ licenses: ALL });
  const thirdParty = () => ({ licenses: ALL, attributes: ['au-third-party-assets'] });

  HKCC.addControls([
    // ---- 角色与职责 ----
    {
      id: 'APRA-234-13', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '13',
      title: '董事会对资讯保安负最终责任',
      requirement: '董事会对实体的资讯保安负最终责任，须确保实体维持与其资讯资产所受威胁的规模及程度相称、并能使实体持续稳健营运的资讯保安。',
      quote: 'The Board of an APRA-regulated entity (Board) is ultimately responsible for the information security of the entity. The Board must ensure that the entity maintains information security in a manner commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity.',
      quoteStatus: 'verbatim',
      note: '就外国 ADI 而言，「董事会」指其在澳大利亚境外的高级人员；就 RSE 持牌人而言，指其董事会或个人受托人组别（第 13 段脚注 4、5）。',
      applicability: all()
    },
    {
      id: 'APRA-234-14', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '14',
      title: '明确界定资讯保安相关角色与职责',
      requirement: '须清楚界定董事会、高级管理层、管治机构及个人在资讯保安方面的角色与职责，涵盖决策、审批、监督、营运及其他资讯保安职能。',
      quote: 'An APRA-regulated entity must clearly define the information security-related roles and responsibilities of the Board, senior management, governing bodies and individuals with responsibility for decision-making, approval, oversight, operations and other information security functions.',
      quoteStatus: 'verbatim',
      note: '「管治机构及个人」包括委员会、工作小组及论坛（第 14 段脚注 6）。',
      applicability: all()
    },

    // ---- 资讯保安能力 ----
    {
      id: 'APRA-234-15', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '15',
      title: '维持与威胁相称的资讯保安能力',
      requirement: '须维持与其资讯资产所受威胁的规模及程度相称、并能使实体持续稳健营运的资讯保安能力（即维持资讯保安所需的资源、技能及控制措施的总和）。',
      quote: 'An APRA-regulated entity must maintain an information security capability commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-16', domain: 'thirdparty', priority: 'baseline', sourceId: 'apra-cps-234', clause: '16',
      title: '评估管理资讯资产的关联方或第三方的资讯保安能力',
      requirement: '资讯资产由关联方或第三方管理时，须评估该方的资讯保安能力，评估程度与影响该等资产的资讯保安事故可能造成的后果相称。',
      quote: 'Where information assets are managed by a related party or third party, the APRA-regulated entity must assess the information security capability of that party, commensurate with the potential consequences of an information security incident affecting those assets.',
      quoteStatus: 'verbatim',
      note: '本段适用于由关联方及第三方管理的所有资讯资产，不限于 CPS 231 / SPS 231 所指的重大外判业务活动服务提供者（第 16 段脚注 7）。',
      applicability: thirdParty()
    },
    {
      id: 'APRA-234-17', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '17',
      title: '随漏洞与威胁变化持续维持资讯保安能力',
      requirement: '须因应漏洞及威胁的变化（包括资讯资产或业务环境改变所引起的变化），积极维持其资讯保安能力。',
      quote: 'An APRA-regulated entity must actively maintain its information security capability with respect to changes in vulnerabilities and threats, including those resulting from changes to information assets or its business environment.',
      quoteStatus: 'verbatim',
      applicability: all()
    },

    // ---- 政策框架 ----
    {
      id: 'APRA-234-18', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '18',
      title: '维持与风险敞口相称的资讯保安政策框架',
      requirement: '须维持与其所面对的漏洞及威胁相称的资讯保安政策框架（即与资讯保安相关的政策、标准、指引及程序的总和）。',
      quote: 'An APRA-regulated entity must maintain an information security policy framework commensurate with its exposures to vulnerabilities and threats.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-19', domain: 'governance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '19',
      title: '政策框架须明确各方维持资讯保安的责任',
      requirement: '资讯保安政策框架须就所有负有维持资讯保安义务的各方之责任提供指引。',
      quote: 'An APRA-regulated entity’s information security policy framework must provide direction on the responsibilities of all parties who have an obligation to maintain information security.',
      quoteStatus: 'verbatim',
      note: '「各方」包括第 14 段所指的管治机构及个人，以及所有其他员工、承办商、顾问、关联方、第三方及客户（第 19 段脚注 8）。',
      applicability: all()
    },

    // ---- 资讯资产识别与分类 ----
    {
      id: 'APRA-234-20', domain: 'data', priority: 'baseline', sourceId: 'apra-cps-234', clause: '20',
      title: '按关键性及敏感性将资讯资产分类',
      requirement: '须按关键性（可用性丧失的潜在影响）及敏感性（保密性或完整性丧失的潜在影响）将资讯资产分类，包括由关联方及第三方管理的资产；分类须反映资讯保安事故对实体或对存户、保单持有人、受益人或其他客户利益可能造成的财务或非财务影响程度。',
      quote: 'An APRA-regulated entity must classify its information assets, including those managed by related parties and third parties, by criticality and sensitivity. This classification must reflect the degree to which an information security incident affecting an information asset has the potential to affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers.',
      quoteStatus: 'verbatim',
      applicability: all()
    },

    // ---- 控制措施的实施 ----
    {
      id: 'APRA-234-21', domain: 'protect', priority: 'baseline', sourceId: 'apra-cps-234', clause: '21',
      title: '及时实施与风险相称的资讯保安控制措施',
      requirement: '须设有保护资讯资产（包括由关联方及第三方管理者）的资讯保安控制措施，并及时实施；控制措施须与以下各项相称：(a) 资讯资产面对的漏洞及威胁；(b) 资讯资产的关键性及敏感性；(c) 资讯资产所处的生命周期阶段（由规划设计至停用及处置）；及 (d) 资讯保安事故的潜在后果。',
      quote: 'An APRA-regulated entity must have information security controls to protect its information assets, including those managed by related parties and third parties, that are implemented in a timely manner and that are commensurate with: (a) vulnerabilities and threats to the information assets; (b) the criticality and sensitivity of the information assets; (c) the stage at which the information assets are within their life-cycle; and (d) the potential consequences of an information security incident.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-22', domain: 'thirdparty', priority: 'baseline', sourceId: 'apra-cps-234', clause: '22',
      title: '评估关联方或第三方资讯保安控制措施的设计',
      requirement: '资讯资产由关联方或第三方管理时，须评估该方用以保护实体资讯资产的资讯保安控制措施之设计。',
      quote: 'Where an APRA-regulated entity’s information assets are managed by a related party or third party, the APRA-regulated entity must evaluate the design of that party’s information security controls that protects the information assets of the APRA-regulated entity.',
      quoteStatus: 'verbatim',
      note: '本段适用于由关联方及第三方管理的所有资讯资产，不限于 CPS 231 / SPS 231 所指的重大外判业务活动服务提供者（第 22 段脚注 10）。',
      applicability: thirdParty()
    },

    // ---- 事故管理 ----
    {
      id: 'APRA-234-23', domain: 'detect', priority: 'baseline', sourceId: 'apra-cps-234', clause: '23',
      title: '设有及时侦测及应对资讯保安事故的稳健机制',
      requirement: '须设有稳健机制，以及时侦测及应对资讯保安事故。',
      quote: 'An APRA-regulated entity must have robust mechanisms in place to detect and respond to information security incidents in a timely manner.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-24', domain: 'respond', priority: 'baseline', sourceId: 'apra-cps-234', clause: '24',
      title: '为可能发生的事故制定资讯保安应对计划',
      requirement: '须为实体认为有可能发生的资讯保安事故维持应对计划（资讯保安应对计划）。',
      quote: 'An APRA-regulated entity must maintain plans to respond to information security incidents that the entity considers could plausibly occur (information security response plans).',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-25', domain: 'respond', priority: 'baseline', sourceId: 'apra-cps-234', clause: '25',
      title: '应对计划须涵盖事故全程管理及上报机制',
      requirement: '资讯保安应对计划须包括以下机制：(a) 管理事故由侦测至事后检讨的所有相关阶段；及 (b) 视乎情况向董事会、其他管治机构及负责资讯保安事故管理及监督的个人上报及报告事故。',
      quote: 'An APRA-regulated entity’s information security response plans must include the mechanisms in place for: (a) managing all relevant stages of an incident, from detection to post-incident review; and (b) escalation and reporting of information security incidents to the Board, other governing bodies and individuals responsible for information security incident management and oversight, as appropriate.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-26', domain: 'respond', priority: 'baseline', sourceId: 'apra-cps-234', clause: '26',
      title: '每年检讨及测试资讯保安应对计划',
      requirement: '须每年检讨及测试资讯保安应对计划，确保其仍然有效及切合目的。',
      quote: 'An APRA-regulated entity must annually review and test its information security response plans to ensure they remain effective and fit-for-purpose.',
      quoteStatus: 'verbatim',
      applicability: all()
    },

    // ---- 测试控制成效 ----
    {
      id: 'APRA-234-27', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '27',
      title: '以系统化测试计划测试控制措施成效',
      requirement: '须透过系统化测试计划测试资讯保安控制措施的成效；测试的性质及频率须与以下各项相称：(a) 漏洞及威胁变化的速度；(b) 资讯资产的关键性及敏感性；(c) 资讯保安事故的后果；(d) 暴露于实体无法执行其资讯保安政策的环境（即「不受信任」环境）的相关风险；及 (e) 资讯资产变更的重要性及频率。',
      quote: 'An APRA-regulated entity must test the effectiveness of its information security controls through a systematic testing program. The nature and frequency of the systematic testing must be commensurate with: (a) the rate at which the vulnerabilities and threats change; (b) the criticality and sensitivity of the information asset; (c) the consequences of an information security incident; (d) the risks associated with exposure to environments where the APRA-regulated entity is unable to enforce its information security policies; and (e) the materiality and frequency of change to information assets.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-28', domain: 'thirdparty', priority: 'baseline', sourceId: 'apra-cps-234', clause: '28',
      title: '依赖第三方控制测试时须评估其测试是否足够',
      requirement: '资讯资产由关联方或第三方管理，而实体依赖该方的资讯保安控制测试时，须评估就该等资讯资产所进行控制测试的性质及频率，是否符合第 27(a) 至 27(e) 段的相称要求。',
      quote: 'Where an APRA-regulated entity’s information assets are managed by a related party or a third party, and the APRA-regulated entity is reliant on that party’s information security control testing, the APRA-regulated entity must assess whether the nature and frequency of testing of controls in respect of those information assets is commensurate with paragraphs 27(a) to 27(e) of this Prudential Standard.',
      quoteStatus: 'verbatim',
      note: '本段适用于由关联方及第三方管理的所有资讯资产，不限于 CPS 231 / SPS 231 所指的重大外判业务活动服务提供者（第 28 段脚注 12）。',
      applicability: thirdParty()
    },
    {
      id: 'APRA-234-29', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '29',
      title: '无法及时修补的控制缺陷须上报董事会或高级管理层',
      requirement: '测试结果如发现无法及时修补的资讯保安控制缺陷，须上报董事会或高级管理层。',
      quote: 'An APRA-regulated entity must escalate and report to the Board or senior management any testing results that identify information security control deficiencies that cannot be remediated in a timely manner.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-30', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '30',
      title: '测试须由具备适当技能且职能独立的专家进行',
      requirement: '须确保测试由具备适当技能且职能上独立的专家进行。',
      quote: 'An APRA-regulated entity must ensure that testing is conducted by appropriately skilled and functionally independent specialists.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-31', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '31',
      title: '至少每年检讨测试计划是否足够',
      requirement: '须至少每年一次，或在资讯资产或业务环境出现重大变化时，检讨测试计划是否足够。',
      quote: 'An APRA-regulated entity must review the sufficiency of the testing program at least annually or when there is a material change to information assets or the business environment.',
      quoteStatus: 'verbatim',
      applicability: all()
    },

    // ---- 内部审计 ----
    {
      id: 'APRA-234-32', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '32',
      title: '内部审计须检讨资讯保安控制措施的设计及运作成效',
      requirement: '内部审计工作须包括检讨资讯保安控制措施（包括由关联方及第三方维持者）的设计及运作成效（资讯保安控制保证）。',
      quote: 'An APRA-regulated entity’s internal audit activities must include a review of the design and operating effectiveness of information security controls, including those maintained by related parties and third parties (information security control assurance).',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-33', domain: 'assurance', priority: 'baseline', sourceId: 'apra-cps-234', clause: '33',
      title: '控制保证须由具备适当技能的人员提供',
      requirement: '须确保资讯保安控制保证由具备提供此类保证所需适当技能的人员提供。',
      quote: 'An APRA-regulated entity must ensure that the information security control assurance is provided by personnel appropriately skilled in providing such assurance.',
      quoteStatus: 'verbatim',
      applicability: all()
    },
    {
      id: 'APRA-234-34', domain: 'thirdparty', priority: 'baseline', sourceId: 'apra-cps-234', clause: '34',
      title: '内部审计依赖第三方控制保证时须作评估',
      requirement: '在以下两种情况同时存在时，内部审计职能须评估关联方或第三方所提供的资讯保安控制保证：(a) 影响有关资讯资产的资讯保安事故有可能对实体或对存户、保单持有人、受益人或其他客户的利益造成重大财务或非财务影响；及 (b) 内部审计拟依赖该关联方或第三方提供的控制保证。',
      quote: 'An APRA-regulated entity’s internal audit function must assess the information security control assurance provided by a related party or third party where: (a) an information security incident affecting the information assets has the potential to materially affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers; and (b) internal audit intends to rely on the information security control assurance provided by the related party or third party.',
      quoteStatus: 'verbatim',
      note: '本段适用于由关联方及第三方管理的所有资讯资产，不限于 CPS 231 / SPS 231 所指的重大外判业务活动服务提供者（第 34 段脚注 13）。',
      applicability: thirdParty()
    },

    // ---- 通知 APRA ----
    {
      id: 'APRA-234-35', domain: 'respond', priority: 'baseline', sourceId: 'apra-cps-234', clause: '35',
      title: '重大资讯保安事故须于 72 小时内通知 APRA',
      requirement: '知悉以下资讯保安事故后，须尽快通知 APRA，最迟不超过 72 小时：(a) 已经或可能对实体或对存户、保单持有人、受益人或其他客户的利益造成重大财务或非财务影响的事故；或 (b) 已通知澳大利亚或其他司法管辖区其他监管机构的事故。',
      quote: 'An APRA-regulated entity must notify APRA as soon as possible and, in any case, no later than 72 hours, after becoming aware of an information security incident that: (a) materially affected, or had the potential to materially affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers; or (b) has been notified to other regulators, either in Australia or other jurisdictions.',
      quoteStatus: 'verbatim',
      note: '「其他监管机构」包括本地政府机构及国际监管机构。本段适用于尚未根据 CPS 231 / SPS 231（外判）或 CPS 232 / SPS 232（业务连续性管理）作出通知的资讯保安事故（第 35 段脚注 14）。',
      applicability: all()
    },
    {
      id: 'APRA-234-36', domain: 'respond', priority: 'baseline', sourceId: 'apra-cps-234', clause: '36',
      title: '无法及时修补的重大控制弱点须于 10 个营业日内通知 APRA',
      requirement: '知悉预期无法及时修补的重大资讯保安控制弱点后，须尽快通知 APRA，最迟不超过 10 个营业日。',
      quote: 'An APRA-regulated entity must notify APRA as soon as possible and, in any case, no later than 10 business days, after it becomes aware of a material information security control weakness which the entity expects it will not be able to remediate in a timely manner.',
      quoteStatus: 'verbatim',
      // 相关（related）：第 29 段是内部上报，本段是通知 APRA，二者不是同一要求，不可合并。
      related: ['APRA-234-29'],
      applicability: all()
    }
  ]);
})();
