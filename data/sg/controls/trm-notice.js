/**
 * MAS Notice FSM-N05：致新加坡银行的《科技风险管理通知》。
 * 条款编号取自官方 PDF 的段落编号（该通知不设分节标题，只有连续编号段落）。
 */
(function () {
  HKCC.addControls([
    {
      id: 'MAS-N05-4', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '4',
      title: '须建立识别关键系统的框架',
      requirement: '银行须建立框架及程序以识别其关键系统。',
      quote: 'A Bank must put in place a framework and process to identify critical systems.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] }
    },
    {
      id: 'MAS-N05-5', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '5',
      title: '关键系统年度非计划停机不得超过 4 小时',
      requirement: '银行须尽一切合理努力维持关键系统的高可用性；每个影响银行营运或客户服务的关键系统，其非计划停机时间在任何 12 个月内合计不得超过 4 小时。',
      quote: 'A Bank must make all reasonable effort to maintain high availability for critical systems. The Bank must ensure that the maximum unscheduled downtime for each critical system that affects the Bank’s operations or service to its customers does not exceed a total of 4 hours within any period of 12 months.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] }
    },
    {
      id: 'MAS-N05-6', domain: 'resilience', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '6',
      title: '关键系统恢复时限目标（RTO）不得超过 4 小时',
      requirement: '银行须为每个关键系统制定不超过 4 小时的恢复时限目标（RTO），并至少每 12 个月一次验证并记录系统恢复测试的执行方式，以及 RTO 在测试中获验证的情况。',
      quote: 'A Bank must establish a recovery time objective (“RTO”) of not more than 4 hours for each critical system. The RTO is the duration of time, from the point of disruption, within which a system must be restored. The Bank must validate and document at least once every 12 months, how it performs its system recovery testing and when the RTO is validated during the system recovery testing.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] }
    },
    {
      id: 'MAS-N05-7', domain: 'respond', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '7',
      title: '发现重大事故须于 1 小时内通知金管局',
      requirement: '银行须在发现「相关事故」（严重或广泛影响银行营运或客户服务的系统故障或资讯科技保安事故）后尽快通知金管局，最迟不超过 1 小时。',
      quote: 'A Bank must notify the Authority as soon as possible, but not later than 1 hour, upon the discovery of a relevant incident.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N05-8']
    },
    {
      id: 'MAS-N05-8', domain: 'respond', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '8',
      title: '须于 14 天内向金管局提交根因及影响分析报告',
      requirement: '银行须在发现相关事故后 14 天内（或金管局批准的更长期限内），向金管局提交根因及影响分析报告，内容须包括事故概要、根因分析、事故对银行合规、营运及客户服务的影响，以及已采取的补救措施。',
      quote: 'A Bank must submit a root cause and impact analysis report to the Authority, within 14 days or such longer period as the Authority may allow, from the discovery of the relevant incident. The report must contain— (a) an executive summary of the relevant incident; (b) an analysis of the root cause which triggered the relevant incident; (c) a description of the impact of the relevant incident on the Bank’s— i. compliance with laws and regulations applicable to the Bank; ii. operations; and iii. service to its customers; and (d) a description of the remedial measures taken to address the root cause and consequences of the relevant incident.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] },
      crossRefs: ['MAS-N05-7']
    },
    {
      id: 'MAS-N05-9', domain: 'data', priority: 'baseline', sourceId: 'mas-trm-notice', clause: '9',
      title: '须以资讯科技控制措施保护客户资料',
      requirement: '银行须实施资讯科技控制措施，保护客户资料免遭未经授权的存取或披露。',
      quote: 'A Bank must implement IT controls to protect customer information from unauthorised access or disclosure.',
      quoteStatus: 'verbatim',
      applicability: { licenses: ['sg-bank'] }
    }
  ]);
})();
