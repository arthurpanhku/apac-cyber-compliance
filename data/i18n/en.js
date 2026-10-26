/**
 * English layer.
 *
 * Control titles and requirements are written against the regulators' own
 * English source documents (SFC circulars, HKMA SPM modules and the OCCICS
 * Codes of Practice are English-language originals), not translated from the
 * Simplified Chinese. Where a phrase is a defined regulatory term it is kept
 * verbatim, so it matches what a reader will find in the cited document.
 *
 * The `quote` field is never translated — it is the official text itself.
 */
HKCC.addI18n('en', {
  ui: {
    appTitle: 'APAC Cyber Compliance Assistant',
    metaDescription: 'Generate the cybersecurity control requirements that apply to your firm across APAC financial regulators — SFC, HKMA, IA, PCPD and the HK Critical Infrastructure Ordinance, MAS, APRA, BNM and mainland China (CAC, NFRA, CSRC and the national cybersecurity, data security and personal information laws) — every control cited to its official source.',
    printTitle: 'APAC Cybersecurity Compliance Control Checklist',
    versionLine: 'v{version} · sources verified {date}',

    langLabel: 'Language',
    btnExportProject: 'Export project',
    btnImportProject: 'Import project',
    btnExport: 'Export CSV',
    btnPrint: 'Print / Save as PDF',
    btnReset: 'Reset',
    btnTheme: 'Theme',
    btnThemeTitle: 'Switch light / dark / follow system',
    btnMore: 'More',
    btnEditScope: 'Edit applicable scope',
    btnClose: 'Close',

    searchPlaceholder: 'Search controls, provisions, evidence or owners…',
    searchAria: 'Search controls',
    optMerge: 'Merge duplicates across regulators',
    optGaps: 'Remediation list',

    secProject: 'Assessment project',
    projectName: 'Project / organisation name',
    projectNamePlaceholder: 'e.g. 2026 cybersecurity assessment',
    asOfDate: 'Assessment as-of date',
    secLicenses: '① Licence / entity type',
    secAttributes: '② Business characteristics',
    scopeTitle: 'Applicable scope',
    scopeProjectDetails: 'Assessment project',
    scopeJurisdictions: 'Jurisdictions',
    scopeConfigured: '{licenses} entities · {attributes} characteristics',
    scopeNotConfigured: 'Not configured',
    scopeEntities: 'Licence / entity type',
    scopeCharacteristics: 'Relevant business characteristics',
    scopeSelectEntityFirst: 'Select an entity type to see its relevant characteristics.',
    scopeCurrent: 'Current scope',
    scopeCurrentEmpty: 'No entity types selected.',
    scopeControlCount: '{n} applicable controls',
    scopeClearJurisdiction: 'Clear this jurisdiction',
    scopeClearAll: 'Clear scope',
    scopeGroupToggle: 'Configure {name}',
    scopeJurisdictionTab: 'Configure {name}',
    allDomains: 'All control domains',
    domainFilterAria: 'Filter by control domain',
    allJurisdictions: 'All jurisdictions',
    jurisdictionFilterAria: 'Filter by jurisdiction',
    allRegulators: 'All regulators',
    regulatorFilterAria: 'Filter by regulator',

    emptyNoLicenseTitle: 'Select a licence to begin',
    emptyNoLicenseNote: 'Tick the licences your firm holds and its business characteristics, and the applicable control requirements will be listed here.',
    emptyNoMatchTitle: 'No matching controls',
    emptyNoMatchGaps: 'There are no unrated, partially implemented or unimplemented controls in this selection.',
    emptyNoMatchQuery: 'Try adjusting your search terms or selections.',

    countItems: '{n}',
    alsoStates: '{regulator} also states:',
    pendingCount: '{n} outstanding',
    allComplete: 'All complete',
    quoteSummary: 'English source text',
    quoteVerbatim: 'Verbatim English provision',
    quoteExcerpt: 'English source excerpt',
    quoteSummaryType: 'English source summary',
    quoteSummaryZh: 'Chinese source text',
    quoteSummaryMixed: 'Source text',
    quoteVerbatimZh: 'Verbatim Chinese provision (official text)',
    quoteExcerptZh: 'Chinese source excerpt (official text)',
    quoteSummaryTypeZh: 'Chinese source summary',
    notePrefix: 'Note: ',
    tagMerged: 'Merged across {n} regulators',
    tagDeadline: 'Deadline {date}',
    tagOverlaps: 'Overlaps: {id}',
    tagRelated: 'Related: {id}',
    equivalenceBasis: 'Merged as equivalent ({basis}): {rationale}',
    deltaHeading: 'Differences from other regulators',
    deltaTitle: '{self} overlaps {other} ({regulator})',
    deltaAdds: '{id} also requires:',
    deltaNone: 'nothing further',
    deltaOutOfScope: 'Not in current scope',
    deltaReviewed: 'Compares these two provisions only; reviewed against the official text on {date}.',
    coverageTitle: 'Regulator comparison',
    coverageNote: 'Relative to the other regulators in scope: “equivalent” provisions can share one record; “overlapping” ones can reuse evidence, but the difference must be confirmed separately; “unique” ones are required by that regulator alone. Select a regulator to show only its provisions — the CSV export then contains only that regulator’s provisions too.',
    coverageRegulator: 'Regulator',
    coverageTotal: 'Applicable',
    coverageEquivalent: 'Equivalent',
    coverageOverlaps: 'Overlapping',
    coverageUnique: 'Unique',
    coveragePending: 'Pending',
    coverageFilterTip: 'Show only {regulator} provisions; select again to clear',
    basisSameProvision: 'same provision',
    basisIdenticalText: 'identical text',
    basisReviewed: 'reviewed as substantively equivalent, {date}',
    sharedRecordTitle: 'Shared implementation record — recorded once, applies to the {n} equivalent provisions below',
    sharedStatus: 'Shared status',
    recordSeparately: 'Record separately',
    recordingSeparately: 'Recording these provisions separately.',
    recordsDiverged: 'The records for these provisions differ, so they are shown separately.',
    useSharedRecord: 'Use a shared record',
    confirmUseShared: 'Overwrite the status and work record of the other {n} provision(s) in this group with those of {id}? Overwritten content cannot be recovered; you may want to export a project backup first.',
    tagApplies: 'Applies: {value}',
    tagTriggered: 'Triggered by: {value}',

    summaryLabel: 'applicable control requirements',
    summaryFrom: 'Drawn from {total} regulatory provisions.',
    summaryFromMerged: 'Drawn from {total} regulatory provisions, of which {merged} were de-duplicated across regulators.',
    progressLabel: 'Control implementation progress {pct}%',
    progressTally: 'Implemented {done} · Partial {partial} · Not implemented {gap} · Unrated {none}',

    statusDone: 'Implemented',
    statusPartial: 'Partial',
    statusGap: 'Not implemented',
    statusNa: 'N/A',
    statusUnrated: 'Unrated',
    progressDisclaimer: 'Partial implementation counts as 50% for progress only; this is not a regulatory compliance determination.',

    recordFilled: 'Assessment record (completed)',
    recordEmpty: 'Add assessment record',
    naReason: 'N/A rationale',
    implementationNote: 'Implementation note',
    implementationPlaceholder: 'Describe implementation or the basis for the assessment',
    evidenceRef: 'Evidence reference',
    evidencePlaceholder: 'e.g. IAM Standard v3; SEC-241',
    owner: 'Owner',
    ownerPlaceholder: 'Department or role',
    targetDate: 'Target completion date',
    overdue: 'Overdue',
    dueSoon: 'Due within 30 days',
    storageWarning: 'The browser cannot save automatically. Export the project regularly as a backup.',
    unresolvedWarning: 'The project retains {n} unrecognised legacy control records.',

    sourceMetaTip: 'Issued {issued}　·　source verified {verified}',
    verifiedRangeTip: 'Sources were verified between {from} and {to}; the earliest is shown.',

    phScope: 'Licence scope: ',
    phAttrs: 'Business characteristics: ',
    phRegulator: 'Provisions of {regulator} only (issued by regulator)',
    phNone: '(none selected)',
    phDate: 'Generated: {today}　·　Sources verified: {verified}',
    phProject: 'Project: {name}',
    phAssessmentDate: 'Assessment as of: {date}　·　Control data v{version}　·　Sources verified: {verified}',

    confirmReset: 'Clear every selection and assessment record in this project? Export a backup first if needed. This cannot be undone.',
    importTooLarge: 'The project file is larger than 5 MB and was not imported.',
    importInvalidJson: 'The project file is not valid JSON. Existing data was not changed.',
    importValidationFailed: 'The project file failed validation. Existing data was not changed:\n\n{errors}',
    importVersionDifferent: '\nControl data version: {imported} (current {current})',
    importVersion: '\nControl data version: {version}',
    notRecorded: 'not recorded',
    importWarnings: '\n\nWarnings:\n{warnings}',
    confirmImport: 'Import project “{name}”?\nExported: {exportedAt}{versionNote}\nValid records: {known}\nUnrecognised records: {unresolved}{warningText}\n\nThis will replace the current project.',
    unnamedProject: 'Unnamed project',
    quarantineWarning: 'The locally saved assessment could not be read. It has been set aside under {key} in this browser and was not overwritten. Import your project file again, or ask IT to recover that copy.',

    // Project-file diagnostics. The engine returns codes and parameters only; the wording lives here.
    diagNotObject: 'The project file must be a JSON object.',
    diagSchemaInvalid: 'schemaVersion is invalid.',
    diagSchemaTooNew: 'This project uses a newer schemaVersion ({version}). Update this tool first.',
    diagAssessmentsNotObject: 'assessments must be an object.',
    diagLicensesNotArray: 'scope.licenses must be an array.',
    diagAttributesNotArray: 'scope.attributes must be an array.',
    diagProjectNameType: 'project.name must be text.',
    diagProjectNameTooLong: 'project.name exceeds {max} characters.',
    diagAsOfDateInvalid: 'project.asOfDate is not a valid date.',
    diagLicenseIdType: 'Licence IDs must be text.',
    diagAttributeIdType: 'Business characteristic IDs must be text.',
    diagRecordNotObject: 'The assessment record for control {id} must be an object.',
    diagStatusInvalid: 'The status of control {id} is invalid.',
    diagFieldType: 'The {field} of control {id} must be text.',
    diagFieldTooLong: 'The {field} of control {id} exceeds {max} characters.',
    diagDateInvalid: 'The {field} of control {id} is not a valid date.',
    diagUnknownLicense: 'Unknown licence skipped: {id}',
    diagUnknownAttribute: 'Unknown business characteristic skipped: {id}',
    diagUnresolvedKept: 'Unrecognised control kept aside: {id}',
    diagUnresolvedRestored: 'Previously unrecognised control restored: {id}',
    diagLegacyNotObject: 'The legacy local state is not a valid object.',

    csvProjectName: 'Project name',
    csvAsOfDate: 'Assessment as-of date',
    csvJurisdiction: 'Jurisdiction',
    csvId: 'Control ID',
    csvDomain: 'Domain',
    csvTitle: 'Control',
    csvRequirement: 'Requirement',
    csvApplicability: 'Why applicable',
    csvRegulator: 'Regulator',
    csvSource: 'Source',
    csvClause: 'Clause',
    csvIssued: 'Issued',
    csvVerified: 'Source verified',
    csvDeadline: 'Deadline',
    csvUrl: 'Official link',
    csvQuote: 'Official text',
    csvStatus: 'Self-assessment',
    csvQuoteType: 'Source text type',
    csvImplementation: 'Implementation note / N/A rationale',
    csvEvidence: 'Evidence reference',
    csvOwner: 'Owner',
    csvTargetDate: 'Target completion date',
    csvDueState: 'Due status',
    csvCrossRelation: 'Cross-regulator relation',
    csvCrossRefs: 'Corresponding provisions of other regulators',
    csvDeltas: 'Differences',
    relEquivalent: 'Equivalent',
    relOverlaps: 'Overlapping',
    relUnique: 'Unique',

    disclaimerLabel: 'Disclaimer: ',
    disclaimerBody: 'This is an open-source reference tool and does not constitute legal or compliance advice. The controls listed are a structured reading of publicly available regulatory provisions; they are not a substitute for reading the source documents, nor for the judgement of a qualified legal or compliance professional. Regulatory requirements change — always check the latest version published on the regulator’s own website.',
    langNoteLabel: 'On language: ',
    langNoteBody: 'Control descriptions are offered in English, Traditional Chinese and Simplified Chinese for ease of reading only. English source text is labelled as verbatim, excerpt or summary and is never translated; each item links to the official source. Where any description differs from the official text, the official text governs.'
  },

  jurisdictions: {
    hk: { label: 'Hong Kong' },
    sg: { label: 'Singapore' },
    au: { label: 'Australia' },
    my: { label: 'Malaysia' }
  },

  licenses: {
    'sfc-ra1': { group: 'SFC licensed corporations', label: 'Type 1: Dealing in securities', note: 'Dealing in securities' },
    'sfc-ra2': { group: 'SFC licensed corporations', label: 'Type 2: Dealing in futures contracts', note: 'Dealing in futures contracts' },
    'sfc-ra3': { group: 'SFC licensed corporations', label: 'Type 3: Leveraged foreign exchange trading', note: 'The Hacking Risks Guidelines apply only to licensed leveraged foreign exchange traders' },
    'sfc-ra4': { group: 'SFC licensed corporations', label: 'Type 4: Advising on securities', note: 'Advising on securities' },
    'sfc-ra5': { group: 'SFC licensed corporations', label: 'Type 5: Advising on futures contracts', note: 'Advising on futures contracts' },
    'sfc-ra6': { group: 'SFC licensed corporations', label: 'Type 6: Advising on corporate finance', note: 'Advising on corporate finance' },
    'sfc-ra7': { group: 'SFC licensed corporations', label: 'Type 7: Providing automated trading services', note: 'Providing automated trading services' },
    'sfc-ra8': { group: 'SFC licensed corporations', label: 'Type 8: Securities margin financing', note: 'Securities margin financing' },
    'sfc-ra9': { group: 'SFC licensed corporations', label: 'Type 9: Asset management', note: 'Asset management' },
    'sfc-ra13': { group: 'SFC licensed corporations', label: 'Type 13: Depositary of a relevant CIS', note: 'Depositary of relevant collective investment schemes' },
    'sfc-vasp': { group: 'SFC licensed corporations', label: 'SFC-licensed virtual asset service provider / trading platform', note: 'VASP / VATP' },
    'hkma-ai': { group: 'HKMA authorized institutions', label: 'Authorized institution (bank / restricted licence bank / deposit-taking company)', note: 'Authorized Institution' },
    'hkma-svf': { group: 'HKMA authorized institutions', label: 'Stored value facility licensee', note: 'Stored Value Facility licensee' },
    'other': { group: 'Other', label: 'No financial licence above (general company)', note: 'Still bound by the Personal Data (Privacy) Ordinance' },

    'sg-bank': { group: 'MAS-regulated entities', label: 'Bank in Singapore', note: 'As defined in section 2(1) of the Banking Act 1970; triggers FSM-N05 and FSM-N06' },
    'sg-cms': {
      group: 'MAS-regulated entities', label: 'Capital markets services licensees and related entities',
      note: 'Includes approved exchanges, recognised market operators, licensed trade repositories, approved/recognised clearing houses, the Depository, approved holding companies, capital markets services licensees, registered fund management companies, and authorised/designated benchmark administrators and submitters, and approved CIS trustees; triggers FSM-N22'
    },
    'sg-dtsp': { group: 'MAS-regulated entities', label: 'Licensed digital token service provider', note: 'Licensed under section 138 of the Financial Services and Markets Act 2022; triggers FSM-N31' }
  },

  attributes: {
    'internet-trading': { label: 'Offers internet trading facilities', note: 'Clients can place orders through a website or app; triggers the full set of SFC Hacking Risks Guidelines requirements' },
    'ebanking': { label: 'Offers e-banking services', note: 'Internet banking, mobile payment, self-service terminals; triggers HKMA TM-E-1' },
    'personal-data': { label: 'Collects or processes personal data', note: 'Triggers DPP4 data security requirements under the Personal Data (Privacy) Ordinance' },
    'ci-designated': { label: 'Designated as a critical infrastructure operator', note: 'Triggers the three categories of statutory obligation under the Protection of Critical Infrastructures (Computer Systems) Ordinance' },
    'outsourcing': { label: 'Uses third-party or cloud service providers', note: 'Triggers outsourcing and supply chain management requirements' },
    'ai-models': { label: 'Uses AI language models in operations', note: 'Triggers the 2026 SFC / HKMA circulars on AI-enabled cyberattacks' },

    'sg-online-financial-services': {
      label: 'Offers online banking, trading or payment services over the internet',
      note: 'Includes online/mobile banking, online trading, mobile/digital wallets and payment services offered via account and transaction APIs; triggers the Online Financial Services controls in chapter 14 of the Technology Risk Management Guidelines'
    }
  },

  domains: {
    governance: { label: 'Governance & accountability', desc: 'Board and senior management responsibilities, policy approval, risk management structure' },
    identity: { label: 'Authentication & access control', desc: 'Client authentication, password policy, entitlement management, privileged accounts' },
    protect: { label: 'System & network hardening', desc: 'Network segmentation, patching, endpoint protection, physical security' },
    data: { label: 'Data protection & encryption', desc: 'Encryption in transit and at rest, protection of sensitive information' },
    custody: { label: 'Virtual asset custody & key management', desc: 'Cold/hot wallet segregation, generation, storage and backup of seeds and private keys, and access to them' },
    detect: { label: 'Monitoring, detection & alerting', desc: 'Abnormal transaction monitoring, logging, threat intelligence, client notification' },
    respond: { label: 'Incident response & regulatory reporting', desc: 'Incident handling procedures, reporting deadlines, root cause analysis' },
    resilience: { label: 'Backup, resilience & business continuity', desc: 'Backup, disaster recovery, operational resilience, tolerance setting' },
    thirdparty: { label: 'Third-party & outsourcing management', desc: 'Service level agreements, supply chain risk, ongoing assessment' },
    assurance: { label: 'Assessment, audit & testing', desc: 'Self-assessment, penetration testing, independent audit, C-RAF' },
    awareness: { label: 'Awareness & training', desc: 'Staff training, client risk alerts' }
  },

  sources: {
    'occics-cop': { regulator: 'OCCICS' },
    'occics-index': { regulator: 'OCCICS' }
  },

  controls: {
    /* ---- SFC Guidelines for Reducing and Mitigating Hacking Risks ---- */
    'SFC-IT-1.1': {
      title: 'Two-factor authentication for client account login',
      requirement: 'Implement two-factor authentication for login to clients’ internet trading accounts, and assess and adopt a 2FA solution proportionate to the firm’s business model. Two-factor authentication means using any two of: something the client knows, something the client has, and something the client is.'
    },
    'SFC-IT-1.2': {
      title: 'Monitoring and surveillance to detect unauthorised access',
      requirement: 'Implement an effective monitoring and surveillance mechanism to detect unauthorised access to clients’ internet trading accounts.'
    },
    'SFC-IT-1.3': {
      title: 'Prompt notification of client activities',
      requirement: 'Notify clients promptly after any of the following occur in their accounts: (a) system login; (b) password reset; (c) trade execution; (d) fund transfer to a non-registered third-party account; and (e) changes to client and account related information. The notification channel must differ from the channel used for login. Clients may opt out of trade execution notifications only, and only after adequate risk disclosure and a signed acknowledgement.'
    },
    'SFC-IT-1.4': {
      title: 'Data encryption',
      requirement: 'Use a strong encryption algorithm to: (a) encrypt sensitive information such as client login credentials and trade data during transmission between internal networks and client devices; and (b) protect client login passwords stored in the internet trading system.'
    },
    'SFC-IT-1.5': {
      title: 'Protection of client login passwords',
      requirement: 'Establish and implement effective policies and procedures to ensure client login passwords are generated and delivered securely during account activation and password reset. Passwords should be randomly generated by the system and delivered through a channel free from human intervention and from tampering by staff. Where a password is not system-generated, compensating controls are required — for example forcing a password change on first login.'
    },
    'SFC-IT-1.6': {
      title: 'Stringent password policy and session timeout controls',
      requirement: 'Configure the internet trading system with: (a) a minimum password length; (b) periodic reminders to clients who have not changed their password for a long time; (c) minimum password complexity (alphanumeric) and password history; (d) appropriate controls over invalid login attempts; and (e) session timeout after a period of inactivity.'
    },
    'SFC-IT-2.1': {
      title: 'Deploy a secure network infrastructure',
      requirement: 'Deploy a secure network infrastructure through proper network segmentation — a Demilitarised Zone (DMZ) with multi-tiered firewalls — to protect critical systems (such as the internet trading system and settlement system) and client data against cyber-attacks.'
    },
    'SFC-IT-2.2': {
      title: 'User access management and annual review',
      requirement: 'Establish policies and procedures so that system access is granted on a need-to-have basis, and review at least annually the user access list for critical systems (such as the internet trading and settlement systems) and databases (such as client data), to confirm that access remains restricted to approved persons.'
    },
    'SFC-IT-2.3': {
      title: 'Security controls over remote access',
      requirement: 'Grant remote access to the internal network on a need-to-have basis and implement security controls over such access.'
    },
    'SFC-IT-2.4': {
      title: 'Patch management — deploy within one month of testing',
      requirement: 'Monitor and evaluate security patches and hotfixes released by software vendors on a timely basis, conduct testing as soon as practicable after assessing the impact, and implement them within one month following completion of testing.'
    },
    'SFC-IT-2.5': {
      title: 'Endpoint protection',
      requirement: 'Implement and update anti-virus and anti-malware solutions — including the corresponding definition and signature files — on a timely basis on critical system servers and workstations, to detect malicious applications and malware.'
    },
    'SFC-IT-2.6': {
      title: 'Prevent unauthorised installation of hardware and software',
      requirement: 'Implement security controls to prevent unauthorised installation of hardware and software.'
    },
    'SFC-IT-2.7': {
      title: 'Physical security',
      requirement: 'Establish physical security policies and procedures to protect critical system components (such as system servers and network devices) in a secure environment, and to prevent unauthorised physical access to the facilities housing the internet trading system and critical system components.'
    },
    'SFC-IT-2.8': {
      title: 'System and data backup — at least daily, offline',
      requirement: 'Back up business records, client and transaction databases, servers and supporting documentation to an offline medium at least daily, and adopt appropriate recovery methods so that major system changes can be rolled back successfully.'
    },
    'SFC-IT-2.9': {
      title: 'Contingency planning for cyber-attack scenarios',
      requirement: 'Make all reasonable efforts to cover possible cyber-attack scenarios in the contingency plan and crisis management procedures — for example distributed denial-of-service (DDoS) attacks, and total loss of business records and client data resulting from a cyber-attack such as ransomware.'
    },
    'SFC-IT-2.10': {
      title: 'Third-party service providers and service level agreements',
      requirement: 'Where internet trading related activities are outsourced to a third-party service provider, enter into a formal service level agreement specifying the terms of service and the provider’s responsibilities, and ensure the service enables the firm to comply with paragraph 18 of and Schedule 7 to the Code of Conduct and with these Guidelines. Service level agreements should be reviewed periodically and revised where appropriate.'
    },
    'SFC-IT-3.1': {
      title: 'Cybersecurity roles and responsibilities (RO/EO accountability)',
      requirement: 'The Responsible Officer(s) or Executive Officer(s) with overall management and supervision of the internet trading system must define the cybersecurity risk management framework and set out key roles and responsibilities, including: (a) approving cybersecurity policies and procedures; (b) approving the cybersecurity budget and resources; (c) arranging periodic self-assessment of the overall framework; (d) reviewing material matters escalated through incident reporting; (e) reviewing key findings from internal and external audits and cybersecurity reviews, endorsing and overseeing completion of remediation; (f) monitoring and assessing the latest cyber threats; (g) approving contingency plans covering cybersecurity scenarios; and (h) approving service level agreements and contracts with third-party service providers. These responsibilities may be delegated in writing to a designated committee or operational unit, but overall accountability remains with the RO/EO.'
    },
    'SFC-IT-3.2': {
      title: 'Internal escalation and external reporting of cybersecurity incidents',
      requirement: 'Establish written policies and procedures specifying how a suspected or actual cybersecurity incident should be escalated and reported internally (for example to the RO/EO responsible for internet trading) and externally (for example to clients, the SFC and other enforcement bodies, where appropriate).'
    },
    'SFC-IT-3.3': {
      title: 'Annual cybersecurity awareness training for internal system users',
      requirement: 'Provide adequate cybersecurity awareness training at least annually to all internal system users — including permanent and contract staff with access to internal networks and systems — with content reflecting the types and degree of cybersecurity risk the firm faces.'
    },
    'SFC-IT-3.4': {
      title: 'Cybersecurity reminders and alerts to clients',
      requirement: 'Take all reasonable steps to remind and alert clients to the cybersecurity risks of using the internet trading system and to recommended preventive and protective measures — for example that login credentials must be kept secure and never shared.'
    },
    'SFC-COC-18': {
      clause: 'paras. 18.4–18.7; Schedule 7 paras. 1.1, 1.2.2–1.2.8, 1.3 and 2.1',
      title: 'Overarching rules for internet trading: Code of Conduct paragraph 18 and Schedule 7',
      requirement: 'The Hacking Risks Guidelines must be read together with the Code of Conduct. Paragraphs 18.4 to 18.7, and paragraphs 1.1, 1.2.2 to 1.2.8, 1.3 and 2.1 of Schedule 7, set out the overall requirements for electronic trading, including system reliability, capacity, security and contingency arrangements. “Internet trading” is defined in paragraph 18.2(f) of the Code of Conduct as an arrangement under which orders are placed through the licensed or registered person’s internet trading facility.'
    },

    /* ---- SFC circular 26EC35: phishing-resistant authentication ---- */
    'SFC-PH-A1': {
      clause: '(A) para. 5',
      title: 'Phishing-resistant authentication for client login and device binding',
      requirement: 'Implement a phishing-resistant robust authentication solution for client login to internet trading accounts and for client registration/binding of devices. The SFC has stated expressly that it does not regard a one-time password (OTP) as phishing-resistant, and OTP must not be used for these two processes. Acceptable examples include passkeys (passwordless credentials based on public key cryptography) and bound devices. Large internet brokers must implement immediately; all other firms must complete implementation by 8 July 2027.'
    },
    'SFC-PH-A2': {
      title: 'Select authentication methods against the platform’s risk profile',
      requirement: 'Carefully assess the firm’s own circumstances, including the types of internet trading platform offered to clients and the platforms’ risk profile, and adopt the appropriate authentication method. Keep abreast of technological developments and periodically assess whether existing security controls remain appropriate, effective and commensurate with the nature, scale and complexity of the business.'
    },
    'SFC-PH-A3': {
      title: 'Cap on passkeys and bound devices (generally no more than three)',
      requirement: 'Generally, do not allow clients to bind or register more than three passkeys and/or three devices for their internet trading accounts. Requests to exceed the cap should be approved only after adequate assessment.'
    },
    'SFC-PH-A4': {
      title: 'Session timeout must not be client-disableable (30 minutes suggested)',
      requirement: 'Do not allow clients to disable session timeout, and limit the idle timeout period — for example to within 30 minutes — subject to prior assessment and ongoing monitoring. Where a client’s trading activity reasonably requires a longer idle period, this may be permitted only with close monitoring of that client’s login/logout records and trading activity.'
    },
    'SFC-PH-B1': {
      title: 'Multi-channel prompt notification of high-risk account activity',
      requirement: 'Notify clients promptly of successful login and other high-risk account activities — including logins from new devices, binding of a new device, and creation or revocation of passkeys — through multiple communication channels (email, SMS or other push notifications) where applicable.'
    },
    'SFC-PH-B2': {
      title: 'Client confirmation after material changes, before further trading',
      requirement: 'Firms are strongly encouraged to require clients to confirm that they authorised certain material changes, or that they have been notified of unusual account activity, before further transactions are permitted in the account. For example, where a newly registered device is used to access a client account, verify with the client that the device is genuinely theirs before allowing orders from it.'
    },
    'SFC-PH-B3': {
      title: 'Transaction monitoring: predefined thresholds and suspicious red flags',
      requirement: 'Identify abnormal trading activity using predefined thresholds and analyse red flags associated with suspicious transactions. Thresholds should reflect client background, historical trading behaviour, account activity, device usage and login patterns. Potential red flags include: trades inconsistent with the client’s past trading pattern; orders placed at hours unusual for that client; trades causing significant loss within a short period; sudden heavy trading in illiquid or small-cap stocks; and unusual trades shortly after a password reset, a change of contact details or the binding of a new device.'
    },
    'SFC-PH-B4': {
      title: 'Login and device-binding monitoring with log retention',
      requirement: 'Maintain sufficient logs — including device IDs captured during system login and device binding — and review them on a timely basis to detect irregular events, such as binding requests from unusual geographic locations, multiple client accounts bound to the same device, logins from multiple locations within a short period, and unusually long login sessions. Follow up on anomalies immediately, including verifying transactions directly with the client and suspending the account where appropriate.'
    },
    'SFC-PH-C1': {
      title: 'Report hacking incidents to the SFC immediately and perform root cause analysis',
      requirement: 'Establish procedures to respond to hacking incidents immediately, including stopping unauthorised activity, safeguarding client assets, notifying affected clients and preventing further intrusion. Report hacking incidents to the SFC immediately, conduct root cause analysis to identify the internal control failures or system vulnerabilities that led to the incident, maintain a detailed incident report, and implement appropriate remedial measures to prevent recurrence.'
    },
    'SFC-PH-D1': {
      title: 'Raise client awareness of phishing and cybersecurity risks',
      requirement: 'Alert clients to common attack scenarios, including fraudulent emails, text messages or phone calls impersonating the firm, fake websites or mobile applications designed to harvest login credentials, and social engineering tactics used to induce clients to disclose passwords, OTPs or other security information. Remind clients that compromised credentials can lead to unauthorised account access and must never be disclosed to third parties, and periodically remind them of sound security practices — strong and unique passwords, appropriate trading controls and limits, alerts enabled for key activities, and timely review and reporting of suspicious transactions.'
    },

    /* ---- SFC circular 26EC32: AI-enabled cyberattacks ---- */
    'SFC-AI-GOV': {
      clause: 'para. 3',
      title: 'MIC-IT bears ultimate responsibility for cybersecurity risk',
      requirement: 'Senior management, including the Manager-in-Charge of Information Technology (MIC-IT), is ultimately responsible for managing the cybersecurity risks the firm faces. The MIC-IT must ensure that changes to the firm’s cybersecurity framework are adequately reviewed and approved, and that enhancements to cybersecurity measures are implemented properly and promptly. Advice and assistance from IT security specialists should be sought where necessary.'
    },
    'SFC-AI-INV': {
      clause: 'para. 8',
      title: 'Maintain a technology asset inventory that supports same-day decisions',
      requirement: 'Maintain an accurate and up-to-date inventory of technology assets and components — covering hardware, software, network infrastructure, databases and cloud services — and identify which assets and services are externally exposed, business critical, or dependent on third-party components, so that remediation and protective measures can be directed quickly and effectively to the highest-risk areas. Given how rapidly frontier AI models can identify exploitable weaknesses, inventories must be kept sufficiently up to date to support same-day prioritisation and containment decisions when new vulnerabilities or threat intelligence emerge.'
    },
    'SFC-AI-A1': {
      title: 'Accelerate patch and vulnerability management, with an emergency fix path',
      requirement: 'Review and strengthen patch and vulnerability management processes, take prompt action on known vulnerabilities, and implement adequate policies and procedures for urgent and critical fixes that fall outside routine patching cycles — particularly for vulnerabilities and fixes affecting business critical components. Allocate sufficient resources to absorb potential surges in patching demand.'
    },
    'SFC-AI-B1': {
      title: 'Assume compromise: enforce least privilege on business critical components',
      requirement: 'Design system controls on the assumption that any user, device, privileged account or network component may be compromised. Enforce least-privilege access across all business critical components, including restricting connector and tool permissions to what the intended use requires, and implement adequate measures to protect privileged accounts.'
    },
    'SFC-AI-B2': {
      title: 'Strengthen firewalls and micro-segmentation to limit lateral movement',
      requirement: 'Strengthen firewalls and network segmentation, and implement micro network segmentation where feasible, to limit lateral movement capabilities across networks and systems.'
    },
    'SFC-AI-B3': {
      title: 'Treat external and untrusted input as potentially adversarial (prompt injection defence)',
      requirement: 'Treat external and untrusted inputs — including content retrieved from apps, emails, documents and webpages — as potentially adversarial, and prevent such inputs from directly altering system instructions or triggering privileged actions.'
    },
    'SFC-AI-B4': {
      title: 'Apply maker-checker controls to high-impact actions',
      requirement: 'Apply maker-checker controls for high-impact actions.'
    },
    'SFC-AI-C1': {
      title: 'Strengthen threat detection, anomaly monitoring and threat intelligence',
      requirement: 'Strengthen threat detection capability and the monitoring of anomalies in client trading activity and system activity, commensurate with the evolving threat landscape, and improve threat intelligence gathering capability.'
    },
    'SFC-AI-D1': {
      title: 'Third-party supply chain risk governance must account for AI threats',
      requirement: 'Establish sound procedures to address AI-enabled threats targeting third-party service providers. Strengthen the third-party supply chain risk governance framework and enhance initial and ongoing assessments of third-party service providers to factor in the latest threat landscape, so that cybersecurity risks associated with them — particularly those arising from AI-enabled attackers — are properly managed.'
    },
    'SFC-AI-E1': {
      title: 'Incident handling procedures and contingency plans must cover AI-enabled attacks',
      requirement: 'Review and enhance cybersecurity incident handling procedures and contingency plans so they can effectively handle AI-enabled cyberattacks that may lead to unauthorised access to networks and systems, data leakage and similar consequences.'
    },
    'SFC-AI-LLM': {
      clause: 'para. 7',
      title: 'Use of AI language models: bring within the cyber framework and notify the SFC',
      requirement: 'Whether an AI language model is developed in-house, provided by a group company or third-party service provider, or obtained from open source, its use may amplify existing cyber risks and introduce additional ones — including adversarial attacks against AI language models, data leakage and system prompt override. These risks must be addressed within the cybersecurity framework and incident handling arrangements. Firms intending to deploy AI language models in high-risk use cases must comply with the notification obligations under the Securities and Futures (Licensing and Registration) (Information) Rules.'
    },

    /* ---- HKMA SPM TM-G-1 ---- */
    'HKMA-TMG1-2': {
      title: 'IT governance: control policies, oversight of IT functions, technology risk management function',
      requirement: 'Establish IT control policies, define the oversight and organisation of IT functions, set up a technology risk management function, arrange technology audits, and ensure staff competence and training are adequate. Where IT support is provided by overseas offices, bring it within the same governance arrangements.'
    },
    'HKMA-TMG1-3': {
      title: 'Security management: information classification, authentication and access control, system security',
      requirement: 'Covers six areas: information classification and protection; authentication and access control; security administration and monitoring; system security; end-user and mobile computing; and physical and personnel security.'
    },
    'HKMA-TMG1-4': {
      title: 'System development and change management',
      requirement: 'Establish controls over project management, the project life cycle and change management, so that system development and changes are properly authorised, tested and approved.'
    },
    'HKMA-TMG1-5': {
      title: 'Information processing: operations management, capacity planning, disaster recovery',
      requirement: 'Establish IT operations management and support, performance monitoring and capacity planning, IT facilities and equipment maintenance, and disaster recovery planning.'
    },
    'HKMA-TMG1-7': {
      title: 'Management of technology service providers',
      requirement: 'Manage technology outsourcing arrangements and the management of other technology service providers.'
    },

    /* ---- HKMA SPM TM-E-1 ---- */
    'HKMA-TME1-3.1': {
      title: 'Board and senior management oversight of e-banking',
      requirement: 'The board and senior management must oversee e-banking business, with clear accountability and staff competence requirements across the three lines of defence.'
    },
    'HKMA-TME1-3.3': {
      title: 'Independent assessment and penetration testing',
      requirement: 'Arrange independent assessment and penetration testing of e-banking systems. The items to be reported are set out in Annex A to TM-E-1.'
    },
    'HKMA-TME1-4.1': {
      title: 'Customer authentication',
      requirement: 'Implement customer authentication for e-banking services commensurate with the risk involved.'
    },
    'HKMA-TME1-4.2': {
      title: 'Notifications to customers and customer education',
      requirement: 'Send customers notifications of account activity, and maintain ongoing customer security awareness and education.'
    },
    'HKMA-TME1-5': {
      title: 'System and network security for internet banking',
      requirement: 'Covers confidentiality and integrity of information, internet infrastructure, application system security, and threat monitoring and vulnerability assessment.'
    },
    'HKMA-TME1-6': {
      title: 'Controls over internet banking services',
      requirement: 'Implement controls over funds transfers, online submission of information, account aggregation services and other online financial services.'
    },
    'HKMA-TME1-9': {
      title: 'System availability and business continuity management',
      requirement: 'Make arrangements for the e-banking service level offered to customers, capacity planning, performance monitoring, system resilience, and controls for coping with system disruptions.'
    },

    /* ---- HKMA TM-C-1 / C-RAF ---- */
    'HKMA-CRAF-1': {
      title: 'C-RAF: inherent risk assessment',
      requirement: 'Carry out an inherent risk assessment based on risk factors such as business size, operational characteristics, technology profile and usage, producing an inherent risk rating.'
    },
    'HKMA-CRAF-2': {
      title: 'C-RAF: maturity assessment',
      requirement: 'Carry out a maturity assessment to determine whether cybersecurity controls are commensurate with the institution’s inherent risk level.'
    },
    'HKMA-CRAF-3': {
      title: 'C-RAF: iCAST intelligence-led cyber attack simulation testing',
      requirement: 'Authorized institutions with a “medium” or “high” inherent risk rating must conduct Intelligence-led Cyber Attack Simulation Testing (iCAST) to test their cyber resilience by simulating real-life cyber attacks.'
    },
    'HKMA-CRAF-4': {
      title: 'Conduct C-RAF assessments regularly and raise cyber defence maturity',
      requirement: 'Conduct regular assessments under the C-RAF with a view to raising cyber defence maturity to a level commensurate with the assessed risk exposures. The HKMA reviews institutions’ C-RAF assessment results and updates the framework from time to time.'
    },

    /* ---- HKMA SPM OR-2 ---- */
    'HKMA-OR2-1': {
      title: 'Establish an operational resilience framework owned by the board and senior management',
      requirement: 'Establish an operational resilience framework, with defined roles and responsibilities for the board and senior management.'
    },
    'HKMA-OR2-2': {
      title: 'Set resilience parameters: critical operations, tolerance for disruption, severe but plausible scenarios',
      requirement: 'Identify critical operations, set the tolerance for disruption, and identify severe but plausible scenarios.'
    },
    'HKMA-OR2-3': {
      title: 'Map interdependencies, manage risk, and be able to respond to and recover from incidents',
      requirement: 'Map the interconnections and interdependencies underlying critical operations; prepare for and manage risks to critical operations delivery; and maintain the ability to respond to and recover from incidents.'
    },
    'HKMA-OR2-6': {
      title: 'Test the ability to deliver critical operations under severe but plausible scenarios',
      requirement: 'Test the ability to deliver critical operations under severe but plausible scenarios.'
    },

    /* ---- HKMA SPM SA-2 ---- */
    'HKMA-SA2-1': {
      title: 'Assessment, contractual protection and ongoing monitoring of outsourcing arrangements',
      requirement: 'Conduct risk assessment of outsourcing arrangements, put contractual protections in place (including HKMA access rights), safeguard the confidentiality of customer data, and maintain ongoing monitoring of service providers.'
    },

    /* ---- HKMA 2026 AI circular / CFI 2.0 ---- */
    'HKMA-AI-2026': {
      clause: 'Full circular',
      title: 'Strengthening cyber resilience amid AI-empowered cyber threats',
      requirement: 'Review and strengthen cyber resilience arrangements in line with the HKMA circular of 2 June 2026, to address artificial intelligence-empowered cyber threats. It is advisable to implement these alongside the controls in SFC circular 26EC32 — asset inventory, accelerated patching, least privilege, micro-segmentation, handling of untrusted input, supply chain, and incident response.'
    },
    'HKMA-CFI2': {
      clause: 'Full circular',
      title: 'Adopt the enhanced framework under the Cybersecurity Fortification Initiative 2.0',
      requirement: 'Adopt CFI 2.0 in line with the circular of 3 November 2020. CFI 2.0 streamlines and strengthens the original C-RAF and rests on three pillars: the Cyber Resilience Assessment Framework, professional development (the Professional Development Programme), and the Cyber Intelligence Sharing Platform. The specific inherent risk assessment, maturity assessment and iCAST requirements appear as HKMA-CRAF-1 to HKMA-CRAF-4 in this tool.'
    },

    /* ---- SVF licensees ---- */
    'SVF-7.2.1': {
      title: 'Establish a technology risk management framework proportionate to the business',
      requirement: 'Establish an effective technology risk management framework to ensure (i) the adequacy of IT controls; (ii) the quality and security of computer systems, including reliability, robustness, stability and availability; and (iii) the safety and efficiency of SVF operations. The framework must be fit for purpose — commensurate with the nature, scale, complexity and type of business, the technology adopted and the overall risk management system — and must allocate technology resources appropriately between business development and risk management. The Practice Note provides that the framework should normally comprise three functions — the IT function, the TRM function and the IT audit function — supported by formally approved IT control policies that set out the exemption approval process and the consequences of non-compliance.'
    },
    'SVF-7.2.2': {
      title: 'Incident management framework and timely reporting to the HKMA',
      requirement: 'Establish an incident management framework with adequate management oversight to ensure effective incident response and management capability. This includes timely reporting to the HKMA of any confirmed IT-related fraud cases or major security breaches (including cyber attacks), cases of prolonged service disruption, and systemic incidents where users suffer monetary loss or a seriously degraded user experience.'
    },
    'SVF-7.2.3': {
      title: 'Segregate databases by purpose and enforce strict access control',
      requirement: 'Take adequate measures to maintain proper segregation between databases serving different purposes, prevent unauthorised or unintended access or retrieval, and enforce robust access controls to preserve the confidentiality and integrity of the databases. In respect of personal data of users, including merchants, comply at all times with the Personal Data (Privacy) Ordinance and with any relevant codes of practice, guidelines or best practice issued by the PCPD from time to time.'
    },
    'SVF-7.3.1': {
      title: 'Establish a robust payment security management framework',
      requirement: 'Put in place a robust payment security management framework commensurate with the scale and nature of the payment security risks associated with the SVF schemes, to effectively monitor, identify, evaluate, respond to and mitigate the payment security risks arising from operating those schemes.'
    },
    'SVF-7.3.2': {
      title: 'Policies and procedures across the user information lifecycle',
      requirement: 'Maintain adequate policies and procedures on the ownership, classification, storage, transmission, processing and retention of information collected from users through SVF service registration and the execution of payment transactions, to ensure the confidentiality and integrity of that information.'
    },
    'SVF-7.3.3': {
      title: 'Protect every payment channel, including cards and user devices',
      requirement: 'Implement adequate security measures to protect each payment channel provided to users for using the SVF — including cards and user devices — against all material vulnerabilities and attacks. The Practice Note provides that licensees offering payment card services should implement adequate safeguards to protect sensitive payment card data, typically by deploying chip cards to store it.'
    },
    'SVF-7.3.4': {
      title: 'Authenticity and traceability of payment transactions, and fraud detection',
      requirement: 'Implement adequate payment security controls to ensure the authenticity and traceability of payment transactions and to detect fraudulent transactions. The Practice Note gives further guidance on contactless payment modes such as QR codes and near-field communication (NFC).'
    },
    'SVF-7.3.5': {
      title: 'Authenticate users before high-risk actions and notify them afterwards',
      requirement: 'Authenticate the identity of SVF users before they can administer their SVF accounts and initiate high-risk transactions, and send timely notification to users after such activities. The Practice Note provides that where account opening is permitted through online channels, reliable identity authentication methods must be used, and that adequate identity checks must be performed when users request changes to account information.'
    },
    'SVF-7.3.6': {
      title: 'Provide secure-use advice to users through an effective channel',
      requirement: 'Provide advice and assistance to users on the secure use of the SVF through an effective communication channel. The Practice Note provides that users must be alerted to their responsibility to take reasonable security precautions to protect their payment devices and keep passwords confidential, and that the advice must be in plain language, prominent and reviewed periodically.'
    },
    'SVF-PN-ANTISCAM': {
      clause: '7.3.6 supplementary guidance (b)',
      title: 'Anti-scam: a secure communication channel, and no hyperlinks embedded in messages',
      requirement: 'Provide at least one secure channel for ongoing communication with users about the correct and secure use of payment services, and inform users that messages purporting to come from the licensee through other routes are not reliable. To manage fraud risk, a licensee must NOT send, generate or trigger any message to users — email, SMS or similar instant messages — with embedded hyperlinks that would (a) request users to provide sensitive information such as personal data and credentials, or (b) direct users to its website or apps for transactions; and must remind users where necessary that it will not do so. If a phishing website incident occurs, issue a press release alerting users and the public, report to the Police, the HKMA and other relevant regulators, and provide the HKMA promptly with relevant information such as the phishing website hyperlink.'
    },
    'SVF-7.3.7': {
      title: 'Cyber threat monitoring, periodic security testing and penetration testing',
      requirement: 'Guard against current and emerging cybersecurity risks by monitoring cyber threat trends, implementing adequate protective measures and performing periodic security testing. The Practice Note sets out four areas: (a) licensees highly dependent on internet and mobile technology must manage cybersecurity risk adequately through the TRM process and devote sufficient resources to identify, protect, contain and recover; (b) subscribing to quality cyber threat intelligence services and collaborating with other institutions to share intelligence should be considered; (c) the need for penetration testing should be assessed periodically, with scope based on the cybersecurity risk profile and covering internal and external networks, application systems, social engineering and emerging threats, and findings mitigated promptly according to impact and risk exposure; and (d) attention should be paid to endpoint risks from always-on connected devices.'
    },
    'SVF-7.3.8': {
      title: 'Payment service efficiency and reliability must be measurable',
      requirement: 'Provide an efficient and reliable payment service commensurate with the SVF’s operating model. The Practice Note provides that efficiency and reliability should be assessed by measurable performance indicators such as response time, transaction throughput, system capacity, system availability and stability, with performance tested and monitored against predefined indicators. For merchants with demanding performance requirements — such as public transport operators — expected performance indicators should be agreed with the merchant and sufficient resources committed to meeting them.'
    },
    'SVF-7.4.1': {
      title: 'Business continuity management programmes',
      requirement: 'Maintain adequate business continuity management programmes to ensure continuation, timely recovery, or in extreme situations orderly scale-down, of critical operations in the event of major disruptions caused by different contingent scenarios. The Practice Note provides that an adequate BCM programme normally includes business impact analysis, recovery strategies, business continuity plans, and alternate sites for business and IT recovery.'
    },
    'SVF-7.4.2': {
      title: 'Board and senior management bear ultimate responsibility for BCM',
      requirement: 'The board and senior management of a licensee have ultimate responsibility for business continuity management and for the effectiveness of the business continuity plans. They must ensure the BCM programme is properly implemented, taken seriously by staff at all levels, and supported by sufficient resources.'
    },
    'SVF-CI-COP': {
      title: 'SVF sector: dedicated Code of Practice under the Critical Infrastructure Ordinance',
      requirement: 'A stored value facility licensee designated by the Monetary Authority as a critical infrastructure operator must refer, for category 1 and category 2 obligations, to the sectoral Code of Practice issued by the Monetary Authority (effective 12 June 2026), and, for category 3 obligations, to section 7 of the generic Code of Practice issued by the Commissioner.'
    },

    /* ---- Protection of Critical Infrastructures (Computer Systems) Ordinance ---- */
    'CI-CAT1-1': {
      title: 'Category 1: maintain an office in Hong Kong',
      requirement: 'A critical infrastructure operator must maintain an office in Hong Kong and notify the Commissioner of the office address using the specified form (Annex A).'
    },
    'CI-CAT1-2': {
      title: 'Category 1: notify changes of operator',
      requirement: 'Notify the Commissioner of any change of critical infrastructure operator using the specified form (Annex B).'
    },
    'CI-CAT1-3': {
      title: 'Category 1: set up and maintain a computer-system security management unit',
      requirement: 'Set up and maintain a computer-system security management unit, and notify the Commissioner of the appointment of the employee supervising that unit using the specified form (Annex C).'
    },
    'CI-CAT2-1': {
      title: 'Category 2: notify material changes to critical computer systems',
      requirement: 'Notify the Commissioner of material changes to critical computer systems (CCS) using the specified form (Annex D).'
    },
    'CI-CAT2-2': {
      title: 'Category 2: submit and implement a computer-system security management plan',
      requirement: 'Submit and implement a computer-system security management plan. This is the longest part of the generic Code of Practice (pages 12–24) and covers the baseline requirements for security management.'
    },
    'CI-CAT2-3': {
      title: 'Category 2: conduct computer-system security risk assessments',
      requirement: 'Conduct computer-system security risk assessments in respect of critical computer systems.'
    },
    'CI-CAT2-4': {
      title: 'Category 2: arrange computer-system security audits',
      requirement: 'Arrange for computer-system security audits to be carried out. An outline of the audit methodology is at Annex G to the generic Code of Practice.'
    },
    'CI-CAT2-5': {
      title: 'Category 2: security measures for operational technology',
      requirement: 'Implement corresponding security measures for operational technology (OT).'
    },
    'CI-CAT3-1': {
      title: 'Category 3: participate in computer-system security drills',
      requirement: 'Participate in computer-system security drills.'
    },
    'CI-CAT3-2': {
      title: 'Category 3: submit and implement an emergency response plan',
      requirement: 'Submit and implement an emergency response plan.'
    },
    'CI-CAT3-3': {
      title: 'Category 3: incident notification — 12 hours for serious incidents, 48 hours otherwise',
      requirement: 'Notify the Commissioner after becoming aware of a computer-system security incident. A serious incident — one that has disrupted, is disrupting, or is likely to disrupt the core function of the critical infrastructure — must be notified within 12 hours of becoming aware of it; other incidents within 48 hours (section 28(3) of the Ordinance). An operator may first call the designated telephone number to give the nature of the incident, the critical computer systems involved and a summary, then submit the specified form (Annex E) through the designated secure channel within 48 hours of that notification.'
    },
    'CI-CAT3-4': {
      title: 'Category 3: submit a written incident report within 14 days',
      requirement: 'Submit a written report using the specified form (Annex F) through the designated secure channel within 14 days of becoming aware of the computer-system security incident.'
    },
    'CI-SEV-CRITERIA': {
      title: 'Pre-define the thresholds for a “serious incident” in the business continuity plan',
      requirement: 'Several of the criteria for a serious incident must be defined in advance by the operator in its business continuity management plan, including the maximum tolerable downtime, the minimum service level, and what counts as a “material” volume of leaked customer data and a “material” number of customer enquiries or complaints. Without these definitions set in advance, there is no way to judge at the time of an incident whether the 12-hour notification deadline has been triggered.'
    },
    'CI-BANK-COP': {
      title: 'Banking sector: the Monetary Authority’s sectoral Code of Practice also applies',
      requirement: 'An authorized institution designated by the Monetary Authority as a critical infrastructure operator must refer, for category 1 and category 2 obligations, to the sectoral Code of Practice issued by the Monetary Authority (2 June 2026), and, for category 3 obligations, to section 7 of the generic Code of Practice issued by the Commissioner.'
    },

    /* ---- PDPO ---- */
    'PDPO-DPP4-1': {
      title: 'DPP4 data security: take practicable steps to protect personal data',
      requirement: 'Take all practicable steps to protect personal data held against unauthorised or accidental access, processing, erasure, loss or use. Relevant considerations include the kind of data and the harm that would result from such an event, the physical location where the data is stored, the security measures of the storage equipment, measures to ensure the integrity, prudence and competence of persons with access to the data, and measures to secure data in transmission.'
    },
    'PDPO-DPP4-2': {
      title: 'DPP4 data processors: ensure equivalent protection by contract or other means',
      requirement: 'Where personal data is passed to an agent or contractor for processing, adopt contractual or other means to prevent unauthorised or accidental access, processing, erasure, loss or use of that data. The data user remains responsible for the acts of the party engaged.'
    },
    'PDPO-DPP2': {
      title: 'DPP2 accuracy and retention: do not keep data longer than necessary',
      requirement: 'Take practicable steps to ensure personal data is accurate, and ensure it is not kept longer than is necessary for the fulfilment of the purpose for which it is used. Data past its retention period must be erased, which narrows the blast radius of any future data breach.'
    },
    'PDPO-DPP1': {
      title: 'DPP1 collection: collect only what is necessary and not excessive',
      requirement: 'Collect personal data only for a lawful purpose directly related to a function or activity of the data user, and only where the data collected is necessary and not excessive for that purpose. Collection must be by means that are lawful and fair, and the prescribed information must be given to the data subject.'
    },
    'PDPO-DPP3': {
      title: 'DPP3 use: a new purpose requires prescribed consent',
      requirement: 'Personal data may only be used for the purpose stated at collection or a directly related purpose, unless the data subject gives express and voluntary informed consent (prescribed consent).'
    },
    'PDPO-DPP5': {
      title: 'DPP5 openness: publish the privacy policy and the kinds of data held',
      requirement: 'Take practicable steps to make publicly known the policies and practices for handling personal data, the kinds of personal data held, and the main purposes for which that data is used.'
    },
    'PDPO-DPP6': {
      title: 'DPP6 access and correction: handle data subject access and correction requests',
      requirement: 'Establish procedures to handle data access requests and data correction requests from data subjects, and respond within the statutory time limits.'
    },
    'PDPO-BREACH': {
      clause: 'PCPD guidance',
      title: 'Data breach handling and notification',
      requirement: 'Establish procedures for handling data breach incidents. Note that the Personal Data (Privacy) Ordinance currently imposes no mandatory data breach notification obligation — notifying the PCPD and affected data subjects is voluntary, though it is good practice. Where the organisation is also subject to another regime — for example as a designated critical infrastructure operator, an SFC licensed corporation or an HKMA authorized institution — the mandatory notification deadlines under that regime still apply and must be observed.',
      note: 'The “voluntary notification” statement reflects the legal position as verified on 2026-09-08. If the Ordinance is later amended to introduce mandatory notification, this must be updated.'
    },
    'SFC-VATP-12.1': {
      title: 'Platform (including trading system and custody infrastructure) properly designed and operated',
      requirement: 'Ensure that the platform — including the trading system and custody infrastructure — is properly designed and operated in compliance with all applicable laws and regulations, and that all systems and processes underpinning its operation are robust and properly maintained, so that the risk of theft, fraud and other dishonest acts, professional misconduct, errors and omissions, interruptions and other operational or control failures is minimised and appropriately managed.'
    },
    'SFC-VATP-12.2': {
      title: 'Robust governance arrangements and adequate human, technology and financial resources',
      requirement: 'Put robust governance arrangements in place for overseeing the operation of the platform, and make available adequate human, technology and financial resources to ensure the platform is operated properly.'
    },
    'SFC-VATP-12.3': {
      title: 'Written internal policies, key man risk, and responsible officer accountability for cybersecurity',
      requirement: 'Establish and implement written internal policies and procedures for the design, development, deployment, operation and modification of the platform, ensuring that: (a) key personnel hold the necessary professional qualifications, management and technical experience, and that key personnel (such as the founder or chief developer) are identified with plans to mitigate the associated key man risks; (b) at least one responsible officer is accountable for the overall management and supervision of the platform and for defining a cybersecurity management framework and key roles and responsibilities — including approving policies and procedures, approving budget and spending, arranging a periodic technology audit (paragraph 12.7) and independent cybersecurity assessment (paragraph 12.13), reviewing significant issues from emergencies, disruptions and cybersecurity incidents, reviewing major audit and cybersecurity review findings and endorsing and monitoring remedial actions, monitoring and assessing cyber threats (including maintaining up-to-date knowledge of the threat landscape, gathering threat intelligence and performing regular automated vulnerability scans), approving the contingency plan, and approving third-party due diligence, service level agreements and contracts. These responsibilities may be delegated in writing to a designated committee or operational unit, but overall accountability remains with the responsible officer(s); (c) there is a formalised governance process with input from the dealing, risk and compliance functions; (d) reporting lines are clearly identified; and (e) managerial and supervisory controls are in place.',
      note: 'The Guidelines state expressly that the requirement to perform vulnerability scans regularly with automated tools does not include performing penetration tests based on attack simulations.'
    },
    'SFC-VATP-12.4': {
      title: 'Regularly review internal policies and promptly remedy deficiencies',
      requirement: 'Conduct regular reviews to ensure these internal policies and procedures are in line with changing market conditions, the cyber threat landscape and regulatory developments, and promptly remedy any deficiencies identified.'
    },
    'SFC-VATP-12.5': {
      title: 'Assign qualified staff and resources across the platform lifecycle',
      requirement: 'Assign adequately qualified staff, expertise, technology and financial resources to the design, development, deployment, operation and modification of the platform.'
    },
    'SFC-VATP-12.6': {
      title: 'Third-party service provider due diligence, ongoing monitoring and service level agreement',
      requirement: 'Where the platform or any associated activity is provided by or outsourced to a third party service provider, perform appropriate due diligence, conduct ongoing monitoring and make arrangements ensuring the Platform Operator still meets the requirements of these Guidelines (including Part XII and Part XIV on record keeping). In particular, the Platform Operator or its Associated Entity should enter into a formal service-level agreement specifying the terms of services and the provider’s responsibilities, reviewed regularly and revised to reflect changes to the services, outsourcing arrangements or regulatory developments. Whenever possible such agreements should provide sufficient levels of maintenance and technical assistance with quantitative details.'
    },
    'SFC-VATP-12.7': {
      title: 'Periodic (at least annual) technology audit by an independent professional',
      requirement: 'Arrange a periodic (at least annual) technology audit by a suitably qualified independent professional so as to be satisfied that the Platform Operator and its Associated Entity have fully complied with Part XII of the Guidelines. Exercise due skill, care and diligence in selecting and appointing the independent professional, having regard to their experience and track record in reviewing virtual asset related technology, and take prompt rectification measures — and ensure the Associated Entity does so — upon identifying any non-compliance.'
    },
    'SFC-VATP-12.8': {
      title: 'Ensure platform integrity, reliability, security and capacity, with contingency measures',
      requirement: 'Ensure the integrity of the platform, maintain a high degree of reliability, security and capacity in respect of its systems, and have appropriate contingency measures in place.'
    },
    'SFC-VATP-12.9': {
      title: 'Written standard operating procedures for system upgrades and maintenance',
      requirement: 'Have written standard operating procedures (SOP) for performing system upgrades and maintenance, containing: (a) the methods of communication and how pending orders still in the order book are dealt with; (b) how long orders can be entered, amended or cancelled after a system downtime and before continuous trading resumes; and (c) the process applicable to unexpected and unplanned system failures which affect an orderly market.'
    },
    'SFC-VATP-12.10': {
      title: 'Pre-deployment testing, senior management sign-off, full backup and rollback plan',
      requirement: 'Ensure the platform and all modifications to it — such as implementing a new system or upgrading an existing one — are tested before deployment and regularly reviewed. Before deployment, at least: (a) review and sign off on the test results at senior management level; (b) fully back up the system and data; and (c) devise a contingency plan to switch back to the previous version in the event of critical and unrecoverable errors in the new version. Maintain a clear audit trail for all modifications made to the platform.'
    },
    'SFC-VATP-12.11': {
      title: 'Inform clients of planned outages as far in advance as practicable',
      requirement: 'Where outages are planned to perform updates and testing of platforms or systems, inform clients as far in advance as practicable if such outages may affect them.'
    },
    'SFC-VATP-12.12a': {
      title: 'Need-to-have staff access, unique user authentication, annual access review and access logs',
      requirement: 'Employ robust authentication and authorisation methods and technology so that access to the platform is restricted to authorised persons on a need-to-have basis. Specifically: (i) permit staff access to trading information only to the extent necessary for the platform to operate properly and efficiently, keeping senior management informed at all times of each such staff member (by title and department), the information accessible, the basis for that access and any change and its basis; (ii) adopt an appropriate user authentication method enabling each user to be uniquely identified; (iii) review the user access list of the platform and databases at least yearly and revoke unnecessary access and privileges (for example for departed staff) on a timely basis; (iv) maintain an adequate access log recording identity and role, information accessed, time of access, any approval given and the basis for it, with adequate protection against tampering or erasure; and (v) have adequate and effective policies, systems and controls to guard against and detect errors, omissions, unauthorised insertion, alteration or deletion of data (including client and trading information), information leakage or abuse by staff.'
    },
    'SFC-VATP-12.12b': {
      title: 'Two-factor authentication for login to clients’ accounts',
      requirement: 'Implement two-factor authentication for login to clients’ accounts. The Guidelines define two-factor authentication as an authentication mechanism which utilises any two of the following factors: what a client knows, what a client has, and who a client is.'
    },
    'SFC-VATP-12.12c': {
      title: 'Secure generation and delivery of client login passwords',
      requirement: 'Have effective policies and procedures ensuring a client login password is generated and delivered securely during account activation and password reset. The password should be randomly generated by the system and sent through a channel of communication free from human intervention and from tampering by the Platform Operator’s staff. Where the password is not randomly generated by the system, implement adequate compensating security controls such as a compulsory password change upon first login after account activation.'
    },
    'SFC-VATP-12.12d': {
      title: 'Stringent password policies and session timeout controls',
      requirement: 'Apply stringent password policies and session timeout controls on the platform, including: (i) minimum password length; (ii) periodic reminders for clients who have not changed their passwords for a long period; (iii) minimum password complexity (ie, alphanumeric) and history; (iv) avoidance of passwords containing values known to be commonly-used, expected or compromised; (v) appropriate controls on invalid login attempts; and (vi) session timeout after a period of inactivity.'
    },
    'SFC-VATP-12.12e': {
      title: 'Prompt client notification of account activities, on a different channel from login',
      requirement: 'Notify clients promptly after certain activities have taken place in their accounts, at least: (i) system login; (ii) password reset; (iii) trade execution; and (iv) changes to client and account-related information. The notification channel should be different from the one used for system login. Clients may opt out of “trade execution” notifications only; where they do, except when dealing with institutional and qualified corporate professional investors, adequate risk disclosures should be provided and an acknowledgement executed by the client confirming they understand the risks involved.'
    },
    'SFC-VATP-12.12f-i': {
      title: 'Secure network infrastructure through network segmentation (DMZ with multi-tiered firewalls)',
      requirement: 'Deploy a secure network infrastructure through proper network segmentation — a Demilitarised Zone (DMZ) with multi-tiered firewalls — to protect critical systems and client data against cyber-attacks.'
    },
    'SFC-VATP-12.12f-ii': {
      title: 'Need-to-have access to the internal network and its segments, including remote access',
      requirement: 'Grant access, including remote access, to the internal network and its different segments on a need-to-have basis, and implement security controls over such access.'
    },
    'SFC-VATP-12.12f-iii': {
      title: 'Patch management: deploy within one month following completion of testing',
      requirement: 'Monitor and evaluate security patches or hotfixes released by software providers on a timely basis and, subject to an evaluation of the impact, conduct testing as soon as practicable and implement the security patches or hotfixes within one month following the completion of testing.'
    },
    'SFC-VATP-12.12f-iv': {
      title: 'Anti-virus, anti-malware and endpoint detection and response (EDR)',
      requirement: 'Implement and update anti-virus and anti-malware solutions as well as endpoint detection and response technology on a timely basis to detect malicious applications and malware on critical system servers and workstations.'
    },
    'SFC-VATP-12.12f-v': {
      title: 'IPS, IDS and SIEM for real-time intrusion detection and alerting',
      requirement: 'Implement Intrusion Prevention System (IPS), Intrusion Detection System (IDS) and Security Information and Event Management (SIEM) solutions to detect and generate alerts on any intrusion or unauthorised access to critical system servers and workstations on a real time basis.',
      note: 'The Guidelines state that the detection rules of the endpoint detection and response technology and SIEM solutions should be updated as and when necessary, such as when new attack or threat scenarios require additional detection rules.'
    },
    'SFC-VATP-12.12f-vi': {
      title: 'Establish a Security Operations Center (SOC) or equivalent function',
      requirement: 'Establish a Security Operations Center (SOC) or equivalent function with sufficient resources to take charge of all security monitoring processes and technologies and to act as coordinator for efficient incident detection and handling.'
    },
    'SFC-VATP-12.12f-vii': {
      title: 'Prevent unauthorised installation of hardware and software; control storage media',
      requirement: 'Implement security controls to prevent unauthorised installation of hardware and software, and ensure that only authorised storage media and devices are used to store and transfer critical data.'
    },
    'SFC-VATP-12.12f-viii': {
      title: 'Physical security of critical platform components including the HSM',
      requirement: 'Establish physical security policies and procedures to protect critical platform components — for example the HSM, the authorised storage media and devices used to store and transfer critical data, system servers and network devices — in a secure environment, and to prevent unauthorised physical access to the facilities hosting the platform and those components. Where applicable, apply segregation of duty or privilege separation to access to critical platform components.'
    },
    'SFC-VATP-12.12g': {
      title: 'Up-to-date encryption and secure transfer, including of backup copies',
      requirement: 'Use up-to-date data encryption and secure transfer technology, in accordance with industry best practices and international standards, to protect the confidentiality and integrity and assure source authenticity of information stored on the platform and during transmission between internal and external networks. In particular, use a strong encryption algorithm to: (i) encrypt sensitive information such as client login credentials (ie, user ID and password) and trade data during transmission between internal networks and client devices; (ii) protect client login passwords stored on the platform; (iii) protect critical data transferred between components of the system infrastructure; and (iv) protect the backup copies of the platform’s critical data.'
    },
    'SFC-VATP-12.12h': {
      title: 'Security tools to block intrusion attempts and monitoring for unauthorised account access',
      requirement: 'Use up-to-date security tools to detect, prevent and block any potential unauthorised intrusion, security breach and cyberattack attempts. In particular, implement an effective monitoring and surveillance mechanism to detect unauthorised access to clients accounts or the Platform Operator’s accounts (if any).'
    },
    'SFC-VATP-12.12i': {
      title: 'Yearly staff training and regular client alerts and educational materials',
      requirement: 'Provide adequate internal procedures and training for staff at least on a yearly basis, and regular alerts and educational materials for clients, to raise awareness of the importance of cybersecurity and the need to strictly observe security measures when using the platform.'
    },
    'SFC-VATP-12.13': {
      title: 'Independent cybersecurity assessment covering wallet security and custody system source code review',
      requirement: 'Perform a stringent independent cybersecurity assessment before the launch of the platform or the deployment of modifications to it, and periodically thereafter. The scope should at least cover: (a) user application security (ie, desktop/web-based/mobile app); (b) wallet security; (c) physical security; and (d) network and system security, including penetration testing, source code review of the custody system and other systems which interface or connect with it, and vulnerability scanning. Maintain sufficient documentation on the assessment, including the testing scope and methodology and the assessment results.',
      note: 'For the source code review: the assessment prior to launch and the ongoing periodic assessments must be performed by an independent third party, whereas the review for modifications prior to deployment may be performed either by an independent third party or by the Platform Operator itself. If no changes have been made to the custody system or connected systems since launch, no source code review needs to be performed.'
    },
    'SFC-VATP-12.14': {
      title: 'Written escalation procedures for cybersecurity incidents, internally and externally',
      requirement: 'Establish written policies and procedures specifying the manner in which a suspected or actual cybersecurity incident should be escalated internally and externally — for example to clients, the SFC and other regulatory authorities, where appropriate.'
    },
    'SFC-VATP-12.15': {
      title: 'Capacity monitoring, stress testing and contingency arrangements when capacity is exceeded',
      requirement: 'Ensure that: (a) usage capacity is regularly monitored and appropriate capacity planning is developed, determining and recording the required level of spare capacity; (b) capacity is regularly stress tested to establish system behaviour under different simulated market conditions, with results and remedial actions documented; (c) the platform has sufficient capacity to handle any foreseeable increase in business volume and market turnover; and (d) contingency arrangements exist to handle clients’ orders when capacity is exceeded and to inform clients of those arrangements, ensuring alternative means of executing orders are available and offered.'
    },
    'SFC-VATP-12.16': {
      title: 'Daily offline backup, with availability and integrity of backup copies assured',
      requirement: 'Back up business records, client and transaction databases, servers and supporting documentation in an offline medium at least on a daily basis. Off-site storage is generally expected to be subject to proper security measures. Implement proper measures to ensure the availability and integrity of the backup copies.'
    },
    'SFC-VATP-12.17': {
      title: 'Written contingency plan covering cyber-attack scenarios, backup facility and yearly testing',
      requirement: 'Identify and manage the associated risks — including any unintended consequences — prudently, with appropriate contingency arrangements including a written contingency plan to cope with emergencies and disruptions (including cybersecurity situations) related to the platform, checking and ensuring data integrity after system recovery and ensuring trading can be conducted fairly and in an orderly manner after resumption. The plan should at least include: (a) the potential disruptive scenarios, including cyber-attack scenarios such as distributed denial-of-service attacks and total loss of business records and client data resulting from cyber-attacks, and the corresponding activation procedures; (b) a suitable backup facility enabling continued trading services or alternative order execution arrangements in an emergency; and (c) the availability of trained staff to deal with clients’ and regulators’ enquiries. The backup facility and the contingency plan should be reviewed, updated and tested for viability and adequacy at least yearly.'
    },
    'SFC-VATP-12.20': {
      title: 'Material system delay or failure: rectify promptly and inform clients',
      requirement: 'In the event of material system delay or failure, in a timely manner: (a) rectify the situation; and (b) inform clients about the situation as soon as practicable and how their pending orders, deposits and withdrawals will be handled.'
    },
    'SFC-VATP-10.6c': {
      title: '98% of client virtual assets to be held in cold storage',
      requirement: 'Store 98% of client virtual assets in cold storage — such as Hardware Security Module (HSM)-based cold storage — to minimise exposure to losses arising from a compromise or hacking of the platform, except under limited circumstances permitted by the SFC on a case-by-case basis. The Associated Entity is subject to the same requirement.'
    },
    'SFC-VATP-10.6d': {
      title: 'Minimise transactions out of cold storage',
      requirement: 'The Platform Operator and its Associated Entity should minimise transactions out of the cold storage in which a majority of client virtual assets are held.'
    },
    'SFC-VATP-10.6e': {
      title: 'Detailed specifications for authorising access to cryptographic devices',
      requirement: 'Have detailed specifications for how access to cryptographic devices or applications is to be authorised and validated, covering key generation, distribution, storage, use and destruction. The Associated Entity is subject to the same requirement.'
    },
    'SFC-VATP-10.6f': {
      title: 'Document the hot/cold storage transfer mechanism and each function’s authority',
      requirement: 'Document in detail the mechanism for transferring virtual assets between hot, cold and other storages, and clearly specify the scope of authority of each function designated to perform any non-automated process in such transfers.'
    },
    'SFC-VATP-10.6g': {
      title: 'Procedures for voting, hard forks and airdrops',
      requirement: 'Have detailed procedures for how to deal with events such as voting, hard forks or airdrops from an operational and technical point of view.'
    },
    'SFC-VATP-10.7': {
      title: 'Deposits and withdrawals only through whitelisted client wallet addresses',
      requirement: 'Do not conduct deposits or withdrawals of client virtual assets through any wallet address other than an address which belongs to the client and is whitelisted by the Platform Operator, except under permitted circumstances specified by the SFC. Ensure the Associated Entity complies with the same requirement.'
    },
    'SFC-VATP-10.8a': {
      title: 'Seeds and private keys generated non-deterministically, offline and in an HSM where practicable',
      requirement: 'Generated seeds and private keys must be sufficiently resistant to speculation or collusion, and should be generated in accordance with applicable international security standards and industry best practices so that seeds (where Hierarchical Deterministic Wallets or similar processes are used) or private keys (if seeds are not used) are generated in a non-deterministic manner ensuring randomness and are thus not reproducible. Where practicable, seeds and private keys should be generated offline and kept in a secure environment such as an HSM with appropriate certification, for the lifetime of the seeds or private keys.'
    },
    'SFC-VATP-10.8b': {
      title: 'Authorisation, validation, multi-factor authentication and immediate revocation for key access',
      requirement: 'Maintain detailed specifications for how access to cryptographic devices or applications is authorised and validated — covering key generation, distribution, use, storage and destruction — as well as the immediate revocation of a signatory’s access as required. Where practicable, use multi-factor authentication to authenticate authorised personnel for access to applications governing the use of private keys.'
    },
    'SFC-VATP-10.8c': {
      title: 'Key access restricted to screened personnel, with no single person holding the entirety',
      requirement: 'Tightly restrict access to seeds and private keys relating to client virtual assets to authorised personnel who have undergone appropriate screening and training. No single person may have possession of information on, or access to, the entirety of the seeds, private keys or backup passphrases, and controls must be implemented to mitigate the risk of collusion amongst authorised personnel.'
    },
    'SFC-VATP-10.8d': {
      title: 'Distributed backups of seeds and private keys, not reconstructable from one location',
      requirement: 'Keep distributed backups of seeds or private keys to mitigate any single point of failure, distributed such that an event affecting the primary location does not affect the backups. Backups should be stored in a protected form on external media (preferably an HSM with appropriate certification), and stored so that seeds or private keys cannot be re-generated based solely on the backups held in the same physical location. Access control to the backups must be as stringent as access control to the original seeds or private keys.'
    },
    'SFC-VATP-10.8e': {
      title: 'Seeds and private keys securely stored in Hong Kong',
      requirement: 'Seeds and private keys are securely stored in Hong Kong.'
    },
    'SFC-VATP-10.9': {
      title: 'Storage risk assessment, up-to-date wallet technology, and response to key compromise',
      requirement: 'Assess the risks posed to each storage method in view of new developments in security threats, technology and market conditions, and implement appropriate storage solutions for the secure storage of client virtual assets. Keep wallet storage technology up to date and in line with international best practices or standards, and fully test the technology and any upgrades before deployment to ensure reliability and security. Implement measures to deal with any compromise or suspected compromise of all or part of any seed or private key without undue delay, including the transfer of all client virtual assets to a new storage location as appropriate. The Associated Entity is subject to the same requirements.'
    },
    'SFC-VATP-10.10': {
      title: 'Deposit and withdrawal controls: 51% attacks, client IP monitoring, immutable destination addresses',
      requirement: 'Have adequate processes for handling deposit and withdrawal requests for client virtual assets to guard against losses arising from theft, fraud and other dishonest acts, professional misconduct or omissions: (a) continuously monitor developments — such as technological changes or the evolution of security threats — relevant to all virtual assets included for trading, with clear processes, proactively executed, to evaluate their potential impact and risks and to handle fraud attempts specific to distributed ledger technology (such as 51% attacks); (b) monitor client IP addresses to identify and follow up on potential deposit or withdrawal instructions not originated from the client; and (c) ensure wallet addresses used for deposit and withdrawal are whitelisted, using appropriate controls to prevent transfers to addresses other than the client’s designated wallet address, and ensure destination addresses of client withdrawal instructions cannot be modified before transactions are signed and broadcast to the respective blockchain.'
    },
    'SFC-VATP-10.20': {
      title: 'Designated staff to conduct regular internal audits of custody compliance',
      requirement: 'Assign designated staff member(s) to conduct regular internal audits monitoring compliance with the requirements for custody of client assets and with the established policies and procedures for handling those assets. The designated staff should report to senior management as soon as practicable upon becoming aware of any non-compliance.'
    },
    'SFC-VATP-10.21': {
      title: 'Monitor account activity for inactive or dormant accounts',
      requirement: 'Closely monitor account activities to check for inactive or dormant accounts, and establish internal procedures for how deposits and withdrawals of client assets in these accounts should be handled.'
    },
    'SFC-VATP-SCH3-1': {
      clause: 'Schedule 3, section 1',
      title: 'Minimum content of audit logs (order lifecycle, login attempts, access grants, parameter changes)',
      requirement: 'Keep audit logs for the activities of the platform’s systems — including but not limited to the audit trails and access logs referred to in Part XII (Cybersecurity) — for not less than two years under paragraph 14.8(e), and make them available to the SFC on request. Audit logs should document the order process and transaction flow through the trading platform, at a minimum including: (a) order placement, cancellation, modification and execution, with time stamping and the assignment of a unique reference number; (b) system login attempts, including user identity and the date and time of the attempt; (c) trading, position and cash limit validation exceptions; (d) compliance validation exceptions; (e) the assigning of hierarchical user access; (f) details of changes to critical system parameters and master files; and (g) erroneous order inputs. The logs should be reviewed regularly to detect potential problems and plan preventive measures.'
    },
    'SFC-VATP-SCH3-2': {
      clause: 'Schedule 3, section 2',
      title: 'Minimum content of incident reports, including root cause analysis and recurrence prevention',
      requirement: 'Keep incident reports for all material system delays or failures for not less than two years under paragraph 14.8(f), and make them available to the SFC on request. Incident reports should document instances where the platform or system experiences a material delay or failure rendering it unusable by clients, at a minimum including: (a) a clear explanation of the problem, including the root cause analysis; (b) the time of the outage or delay; (c) its duration; (d) the platforms or systems affected during the outage or delay and subsequently; (e) whether this problem or a related problem has occurred before; (f) the number of clients affected at the time and the impact on them; (g) the steps taken to rectify the problem; and (h) the steps taken to ensure that the problem does not occur again. The reports should be reviewed regularly to detect potential problems and plan preventive measures.'
    },

    /* ---- MAS Notice FSM-N06 — Notice on Cyber Hygiene (banks) ---- */
    'MAS-N06-4.1': { title: 'Administrative accounts must be secured', requirement: 'Every administrative account in respect of any operating system, database, application, security appliance or network device must be secured to prevent unauthorised access to or use of it.' },
    'MAS-N06-4.2': { title: 'Security patches applied on a risk-commensurate timeframe', requirement: 'Security patches addressing vulnerabilities must be applied to every system, within a timeframe commensurate with the risk posed by each vulnerability; where no patch is available, controls must be instituted to reduce the risk.' },
    'MAS-N06-4.3': { title: 'Written security standards must be established and met', requirement: 'A written set of security standards must be established for every system, and every system must conform to it; where a system cannot conform, controls must be instituted to reduce the resulting risk.' },
    'MAS-N06-4.4': { title: 'Network perimeter defence', requirement: 'Controls must be implemented at the network perimeter to restrict all unauthorised network traffic.' },
    'MAS-N06-4.5': { title: 'Malware protection', requirement: 'One or more malware protection measures must be implemented on every system, where available and implementable, to mitigate the risk of malware infection.' },
    'MAS-N06-4.6': { title: 'Multi-factor authentication for critical-system admin accounts and internet-facing customer-information systems', requirement: 'Multi-factor authentication must be implemented for: (a) all administrative accounts on any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used to access customer information through the internet.' },

    /* ---- MAS Notice FSM-N22 — Notice on Cyber Hygiene (capital markets financial institutions) ---- */
    'MAS-N22-4.1': { title: 'Administrative accounts must be secured', requirement: 'Every administrative account in respect of any operating system, database, application, security appliance or network device must be secured to prevent unauthorised access to or use of it.' },
    'MAS-N22-4.2': { title: 'Security patches applied on a risk-commensurate timeframe', requirement: 'Security patches addressing vulnerabilities must be applied to every system, within a timeframe commensurate with the risk posed by each vulnerability; where no patch is available, controls must be instituted to reduce the risk.' },
    'MAS-N22-4.3': { title: 'Written security standards must be established and met', requirement: 'A written set of security standards must be established for every system, and every system must conform to it; where a system cannot conform, controls must be instituted to reduce the resulting risk.' },
    'MAS-N22-4.4': { title: 'Network perimeter defence', requirement: 'Controls must be implemented at the network perimeter to restrict all unauthorised network traffic.' },
    'MAS-N22-4.5': { title: 'Malware protection', requirement: 'One or more malware protection measures must be implemented on every system, where available and implementable, to mitigate the risk of malware infection.' },
    'MAS-N22-4.6': { title: 'Multi-factor authentication for critical-system admin accounts and internet-facing customer-information systems', requirement: 'Multi-factor authentication must be implemented for: (a) all administrative accounts on any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used to access customer information through the internet.' },

    /* ---- MAS Notice FSM-N31 — Notice on Cyber Hygiene (digital token service providers) ---- */
    'MAS-N31-4.1': { title: 'Administrative accounts must be secured', requirement: 'Every administrative account in respect of any operating system, database, application, security appliance or network device must be secured to prevent unauthorised access to or use of it.' },
    'MAS-N31-4.2': { title: 'Security patches applied on a risk-commensurate timeframe', requirement: 'Security patches addressing vulnerabilities must be applied to every system, within a timeframe commensurate with the risk posed by each vulnerability; where no patch is available, controls must be instituted to reduce the risk.' },
    'MAS-N31-4.3': { title: 'Written security standards must be established and met', requirement: 'A written set of security standards must be established for every system, and every system must conform to it; where a system cannot conform, controls must be instituted to reduce the resulting risk.' },
    'MAS-N31-4.4': { title: 'Network perimeter defence', requirement: 'Controls must be implemented at the network perimeter to restrict all unauthorised network traffic.' },
    'MAS-N31-4.5': { title: 'Malware protection', requirement: 'One or more malware protection measures must be implemented on every system, where available and implementable, to mitigate the risk of malware infection.' },
    'MAS-N31-4.6': { title: 'Multi-factor authentication for critical-system admin accounts and internet-facing customer-information systems', requirement: 'Multi-factor authentication must be implemented for: (a) all administrative accounts on any operating system, database, application, security appliance or network device that is a critical system; and (b) all accounts on any system used to access customer information through the internet.' },

    /* ---- MAS Notice FSM-N05 — Notice on Technology Risk Management (banks) ---- */
    'MAS-N05-4': { title: 'Framework to identify critical systems', requirement: 'A framework and process must be put in place to identify critical systems.' },
    'MAS-N05-5': { title: 'Unscheduled downtime for critical systems capped at 4 hours a year', requirement: 'All reasonable effort must be made to maintain high availability for critical systems; the maximum unscheduled downtime for each critical system affecting operations or customer service must not exceed a total of 4 hours within any 12-month period.' },
    'MAS-N05-6': { title: 'Recovery time objective of 4 hours for critical systems', requirement: 'A recovery time objective (RTO) of not more than 4 hours must be established for each critical system, and how the RTO is validated during system recovery testing must be validated and documented at least once every 12 months.' },
    'MAS-N05-7': { title: 'Relevant incidents notified to MAS within 1 hour', requirement: 'MAS must be notified as soon as possible, but not later than 1 hour, upon discovery of a relevant incident (a system malfunction or IT security incident with a severe and widespread impact on operations or customer service).' },
    'MAS-N05-8': { title: 'Root cause and impact analysis report within 14 days', requirement: 'A root cause and impact analysis report must be submitted to MAS within 14 days (or such longer period as MAS may allow) of discovering the relevant incident, covering: (a) an executive summary; (b) the root cause analysis; (c) the impact on compliance, operations and customer service; and (d) the remedial measures taken.' },
    'MAS-N05-9': { title: 'IT controls to protect customer information', requirement: 'IT controls must be implemented to protect customer information from unauthorised access or disclosure.' },

    /* ---- MAS Technology Risk Management Guidelines (2021) ---- */
    'MAS-TRMG-3.1': { title: 'Role of the board and senior management', requirement: 'The board and senior management should have members able to understand and manage technology risk, appoint a suitably qualified CIO/CTO/Head of IT and CISO/Head of Information Security, establish and implement a technology risk management strategy, ensure key IT decisions align with the FI’s risk appetite, and cultivate a strong risk culture; the board is responsible for approving risk appetite, reviewing the strategy and ensuring an independent audit function is in place.' },
    'MAS-TRMG-3.2': { title: 'Policies, standards and procedures', requirement: 'Policies, standards and procedures for managing technology risk should be established, regularly reviewed and updated; deviations should be risk-assessed and approved by senior management, with compliance processes to verify adherence.' },
    'MAS-TRMG-3.3': { title: 'Management of information assets', requirement: 'Information assets should be identified, classified by criticality, assigned an owner, and managed under policies, standards and procedures appropriate to their classification; an inventory should be maintained and reviewed periodically.' },
    'MAS-TRMG-3.4': { title: 'Management of third party services', requirement: 'Technology risk exposure from a third party should be assessed and managed before entering into a contract or partnership, and the third party should be held to a high standard of care in protecting data confidentiality, integrity and system resilience on an ongoing basis.' },
    'MAS-TRMG-3.5': { title: 'Competency and background review', requirement: 'Personnel, including contractors and service providers, should have the competence and skills to perform IT functions and manage technology risk, and background checks should be performed on personnel with access to data and IT systems to mitigate insider threat.' },
    'MAS-TRMG-3.6': { title: 'Security awareness and training', requirement: 'A comprehensive IT security awareness training programme should be established, covering the prevailing threat landscape, the FI’s IT security policies and individual responsibilities; it should run at least annually for staff, contractors and service providers, extend to board training, and be reviewed periodically.' },
    'MAS-TRMG-8.1': { title: 'System availability', requirement: 'IT systems should be designed for a level of availability commensurate with business needs, with redundancy or fault-tolerant solutions for high-availability systems, periodic architecture review to identify single points of failure, and continuous monitoring of resource utilisation against pre-defined thresholds.' },
    'MAS-TRMG-8.2': { title: 'System recoverability', requirement: 'RTOs and RPOs should be established for systems; the disaster recovery plan should set out procedures to recover systems to support business needs, be followed without deviation during recovery, and the FI should periodically operate from its recovery or alternate site.' },
    'MAS-TRMG-8.3': { title: 'Testing of the disaster recovery plan', requirement: 'The disaster recovery plan should be regularly tested to validate its effectiveness and the FI’s ability to meet recovery objectives, covering plausible disruption scenarios (including full or partial site incapacitation and major system failures) and recovery dependencies with third parties, with participation from both business and IT stakeholders.' },
    'MAS-TRMG-8.4': { title: 'System backup and recovery', requirement: 'A backup strategy and regular backup plan should be established; a policy should govern the backup data life cycle (frequency, retention, storage and secure destruction); backup restoration should be periodically tested; and confidential data in backups should be secured (e.g. encrypted) and stored offline or offsite.' },
    'MAS-TRMG-8.5': { title: 'Data centre resilience', requirement: 'Data centres should undergo a Threat and Vulnerability Risk Assessment; have adequate redundancy for power, connectivity and cooling to eliminate single points of failure; fire detection and suppression; a secondary/DR data centre geographically separated from the primary; round-the-clock physical and environmental monitoring; and appropriate physical access controls.' },
    'MAS-TRMG-9.1': { title: 'User access management', requirement: 'Access should be granted on the principles of never-alone, segregation of duties and least privilege, based on role and authorised by the information asset owner; access and management activities should be logged; strong password controls and multi-factor authentication should apply to sensitive system functions; access should be periodically reviewed to find dormant or redundant accounts and revoked promptly on a need-to-use basis or change of employment status.' },
    'MAS-TRMG-9.2': { title: 'Privileged access management', requirement: 'Privileged system access should be granted only on a need-to-use basis, with activities logged and reviewed as part of ongoing monitoring; the use of system and service accounts should also be managed and monitored for suspicious or unauthorised activity.' },
    'MAS-TRMG-9.3': { title: 'Remote access management', requirement: 'Remote connections should be encrypted to prevent data leakage through sniffing or eavesdropping; strong authentication such as multi-factor authentication should be implemented for remote access; and remote access should only be allowed from devices secured according to the FI’s security standards.' },
    'MAS-TRMG-10.1': { title: 'Cryptographic algorithm and protocol', requirement: 'Cryptographic algorithms should be adopted from well-established international standards, with an algorithm and key length meeting the FI’s security objectives; seeds or random numbers should have sufficient length and randomness; algorithms should be rigorously tested or vetted; and developments in cryptanalysis should be monitored to update algorithms or key lengths as needed.' },
    'MAS-TRMG-10.2': { title: 'Cryptographic key management', requirement: 'A key management policy, standards and procedures should cover generation, distribution, installation, renewal, revocation, recovery and expiry; keys should be securely generated and protected, given an appropriate lifespan and replaced before expiry, managed in hardened tamper-resistant systems (e.g. an HSM) for sensitive keys, distributed via an out-of-band channel, used for a single purpose, revoked and replaced if compromised, securely destroyed on expiry or revocation, and backed up with a high level of protection.' },
    'MAS-TRMG-11.1': { title: 'Data security', requirement: 'A comprehensive data loss prevention policy should cover data in motion, at rest and in use to detect and prevent unauthorised access, modification, copying or transmission; confidential data on systems and endpoint devices should be encrypted and access-controlled; only authorised storage media, systems and devices should be used; unauthorised internet services (e.g. social media, cloud storage, file sharing) should be controlled against; production data used in non-production environments should require senior management approval and be masked where possible; and confidential data should be irrevocably deleted before disposal or redeployment.' },
    'MAS-TRMG-11.2': { title: 'Network security', requirement: 'Network security devices such as firewalls should secure connections to the internet and third parties; information assets should be segmented by criticality, function or data sensitivity; network intrusion prevention should be deployed; network access controls should detect and prevent unauthorised devices, with access rules reviewed regularly and obsolete rules or insecure protocols removed; internet web browsing should be considered for isolation from endpoint devices; effective DoS protection should be implemented; and the network architecture should be reviewed periodically for vulnerabilities.' },
    'MAS-TRMG-11.3': { title: 'System security', requirement: 'Security standards should be set for hardware and software configurations and reviewed periodically, with a process to verify uniform application and address deviations; endpoint protection should guard against malware, kept up to date and regularly scanned; detection and response mechanisms should support early identification of indicators of compromise; application whitelisting should be considered; and BYOD should be risk-assessed with appropriate security measures before deployment.' },
    'MAS-TRMG-11.4': { title: 'Virtualisation security', requirement: 'Security standards should be established for all components of a virtualisation solution; strong access controls should restrict administrative access to the hypervisor and host operating system; and policies and standards should govern the security, creation, distribution, storage, use, retirement and destruction of virtual images and snapshots.' },
    'MAS-TRMG-11.5': { title: 'Internet of Things', requirement: 'An inventory of IoT devices (including networks connected to and physical locations) should be maintained; risks from IoT should be assessed and mitigated, including network access controls, hosting IoT devices in a separate network segment, controls to prevent unauthorised access, and monitoring for suspicious or anomalous activity.' },
    'MAS-TRMG-12.1': { title: 'Cyber threat intelligence and information sharing', requirement: 'A process should collect, process and analyse cyber-related information (events, threat intelligence, vulnerabilities); cyber intelligence monitoring services should be procured and the FI should actively participate in threat information-sharing arrangements with trusted parties; and a process should detect and respond to misinformation about the FI online.' },
    'MAS-TRMG-12.2': { title: 'Cyber event monitoring and detection', requirement: 'A security operations centre or managed security service should support continuous monitoring and analysis of cyber events with defined processes, roles and responsibilities; system logs should be collected, processed, reviewed, retained and protected; a baseline profile of routine system activity should support anomaly identification, optionally using user behavioural analytics and log correlation; and suspicious or anomalous activity should be escalated promptly.' },
    'MAS-TRMG-12.3': { title: 'Cyber incident response and management', requirement: 'A cyber incident response and management plan should enable swift isolation and neutralisation of threats and secure resumption of services, describing communication, coordination and response procedures for plausible scenarios; the plan should include investigating and identifying control deficiencies behind a breach and evaluating its full impact; and lessons learnt and cyber intelligence should be used to enhance controls or the plan.' },
    'MAS-TRMG-13.1': { title: 'Vulnerability assessment', requirement: 'A process should conduct regular vulnerability assessments of IT systems at a frequency commensurate with system criticality and risk, minimally covering vulnerability discovery, weak security configurations and open network ports, application vulnerabilities, and, for web-based systems, common web vulnerabilities.' },
    'MAS-TRMG-13.2': { title: 'Penetration testing', requirement: 'Penetration testing should be carried out for an in-depth evaluation of cyber security defences, combining blackbox and greybox testing for online financial services; a bug bounty programme may complement it; testing should be conducted on the production environment with proper safeguards; and frequency should reflect system criticality and exposure, with directly internet-accessible systems tested more often.' },
    'MAS-TRMG-13.3': { title: 'Cyber exercises', requirement: 'Regular scenario-based cyber exercises — including social engineering, table-top, or cyber range exercises — should validate the FI’s response, recovery and communication plans against cyber threats, involving relevant stakeholders (senior management, business functions, corporate communications, the crisis management team, service providers, and technical staff) depending on the exercise objectives.' },
    'MAS-TRMG-13.4': { title: 'Adversarial attack simulation exercise', requirement: 'An adversarial attack simulation exercise should test and validate the effectiveness of the FI’s cyber defence and response plan against prevalent threats, with objectives, scope and rules of engagement defined beforehand and the exercise conducted in a controlled manner under close supervision so red-team activity does not disrupt production.' },
    'MAS-TRMG-13.5': { title: 'Intelligence-based scenario design', requirement: 'Threat scenarios for cyber security assessments should be designed around challenging but plausible cyber threats, optionally using threat intelligence relevant to the FI’s IT environment to identify likely threat actors and their tactics, techniques and procedures.' },
    'MAS-TRMG-13.6': { title: 'Remediation management', requirement: 'A comprehensive remediation process should track and resolve issues found in cyber security assessments or exercises, minimally covering severity assessment and classification, remediation timeframes by severity, and risk assessment and mitigation for deviations from the framework.' },
    'MAS-TRMG-14.1': { title: 'Security of online financial services', requirement: 'Security and control measures commensurate with risk should protect data and online services, including encryption and digital signatures for communications channels, and measures against common attack vectors (code injection, cross-site scripting, MITM, DNS hijacking, DDoS, malware, spoofing); mobile access should address risks specific to mobile applications, distributed only through official app stores or other secure channels; and phishing campaigns targeting the FI or its customers should be monitored, reported and alerted on.' },
    'MAS-TRMG-14.2': { title: 'Customer authentication and transaction signing', requirement: 'Multi-factor authentication should secure login to online financial services; customer passwords should be protected by end-to-end encryption and verified only in a hardened system; transaction-signing should authorise high-risk activities (e.g. changes to sensitive data, new payees, large transfers); risk-based or adaptive authentication may be considered; biometric and password credentials should be encrypted in storage and transmission; and authenticated sessions should be automatically terminated after a period of inactivity.' },
    'MAS-TRMG-14.3': { title: 'Fraud monitoring', requirement: 'Real-time fraud monitoring systems should identify and block suspicious or fraudulent online transactions; a process should investigate suspicious transactions or payments promptly; and customers should be notified of suspicious activity or transfers above a threshold, with meaningful details and instructions for reporting.' },
    'MAS-TRMG-14.4': { title: 'Customer education and communication', requirement: 'Customers should be informed of security best practices for using online financial services and securing their devices, alerted to new cyber threats in a timely manner, and advised on how to detect unauthorised transactions and promptly report security issues, suspicious activity or suspected fraud.' },
    'MAS-TRMG-15.1': { title: 'Audit function', requirement: 'IT audit should give the board and senior management an independent, objective opinion on the adequacy and effectiveness of risk management, governance and internal controls against existing and emerging technology risk, covering a comprehensive set of auditable areas at a frequency commensurate with criticality and risk, performed by auditors with the requisite competency and skills.' }
  }
});

/* ---- Insurance Authority GL20 and CRAF ---- */
(function () {
  const controls = {
    'IA-GL20-5.1': { title: 'Board-endorsed cybersecurity strategy and framework', requirement: 'Establish and maintain a cybersecurity strategy and framework tailored to mitigate cyber risks commensurate with the nature, size and complexity of the insurer’s business, and have it endorsed by the board.' },
    'IA-GL20-5.2': { title: 'Benchmark against appropriate technology and assurance standards', requirement: 'When establishing the cybersecurity strategy and framework, consider relevant best available and practicable technology and quality assurance standards in light of the insurer’s nature, size, complexity and risk profile, such as ISO/IEC 27001, COBIT, the OSFI guidance and the NIST Cybersecurity Framework.' },
    'IA-GL20-5.3': { title: 'Define objectives, personnel competency and risk-management processes', requirement: 'Clearly define cybersecurity objectives and competency requirements for relevant personnel or system users; include well-defined processes and technology for managing cyber risk; and communicate the strategy to all users in a timely manner.' },
    'IA-GL20-5.4': { title: 'Review the cybersecurity strategy at least annually and after major change', requirement: 'Review and update the cybersecurity strategy regularly, at least annually and after an insurer cyber incident, a major external cyber event that could affect the insurer, deployment of a new system, or a major system change.' },
    'IA-GL20-6.1': { title: 'Board accountability for cybersecurity controls', requirement: 'The board holds overall responsibility for cybersecurity controls, establishes clear responsibilities and reporting and escalation lines, and cultivates a strong level of cybersecurity awareness and commitment.' },
    'IA-GL20-6.2': { title: 'Cyber risk appetite, tolerance and continuing oversight', requirement: 'The board establishes a defined cyber risk appetite and tolerance limit and oversees the design, implementation and effectiveness of cybersecurity programmes. If it establishes a suitably skilled management team, the board and that team continue to oversee and keep the strategy and framework up to date.' },
    'IA-GL20-7.1': { title: 'Identify, assess and control cyber risk', requirement: 'Maintain an enterprise-wide cyber risk self-assessment that identifies functions, activities, products and services; keeps a current inventory or map of information assets, configurations, interconnections and dependencies and prioritises them; evaluates inherent risk from people, process, technology and data; and conducts business impact analysis covering threats, vulnerabilities, likelihood and impact.' },
    'IA-GL20-7.2': { title: 'Reassess mitigation after major organisational, operational or system change', requirement: 'Regularly determine whether cyber risk mitigation processes need to change after significant organisational, operational or system changes, with review at least annually or after a major system deployment.' },
    'IA-GL20-8.1': { title: 'Systematic continuous monitoring', requirement: 'Establish systematic monitoring for early detection of cybersecurity incidents, regularly evaluate the effectiveness of internal controls, and update cyber risk appetite and tolerance as appropriate.' },
    'IA-GL20-8.2': { title: 'Network monitoring, testing and audit', requirement: 'Maintain effective monitoring measures including network monitoring, testing, internal audit and external audit.' },
    'IA-GL20-8.3': { title: 'Manage physical and remote access identities and credentials', requirement: 'As part of monitoring, manage identities and credentials for physical and remote access to information assets, recognise indicators of potential cyber risk, and monitor whether an actual breach has occurred.' },
    'IA-GL20-8.4': { title: 'Test every element of the cybersecurity framework at least annually', requirement: 'Test all elements of the cybersecurity framework at least annually to determine overall effectiveness, using one or more current methods such as vulnerability assessment, scenario-based testing and penetration testing.' },
    'IA-GL20-9.1': { title: 'Cybersecurity incident response plan', requirement: 'Develop a cybersecurity incident response plan covering incident scenarios, contingency strategies to maintain and restore critical functions and essential activities, and criteria for escalation of response and recovery to the board or its designated management team.' },
    'IA-GL20-9.2': { title: 'Immediately assess, contain and mitigate an incident', requirement: 'On a cybersecurity incident, assess its nature, scope and impact and take every immediately practicable step to contain it and mitigate its impact.' },
    'IA-GL20-9.3': { title: 'Stakeholder notification and annual incident response drill', requirement: 'Notify internal stakeholders and, where applicable, external stakeholders; consider joint response actions where necessary; and perform an incident response drill at least annually.' },
    'IA-GL20-9.4': { title: 'Report a relevant incident to the IA within 72 hours of detection', requirement: 'Report a relevant incident and related information to the Insurance Authority as soon as practicable and in any event no later than 72 hours after detection.' },
    'IA-GL20-9.5': { title: 'Remediate every exploited vulnerability after stable operations resume', requirement: 'Once stable operations resume, identify and mitigate every exploited vulnerability and remediate it to prevent similar incidents.' },
    'IA-GL20-10.1': { title: 'Gather, analyse and share cyber risk information', requirement: 'Establish a process to gather and analyse relevant cyber risk information and participate in intelligence-sharing groups so timely information supports spontaneous and appropriate precautions locally and internationally.' },
    'IA-GL20-10.2': { title: 'Appropriate cybersecurity training for every system user', requirement: 'Provide all system users with adequate training on cybersecurity awareness and current developments, proportionate to the cyber risks they face, and promote professional competence, particularly among cybersecurity and systems staff.' },

    'IA-CRAF-1.2.2': { title: 'CRAF scope covers every supporting element of the Hong Kong insurance business', requirement: 'The assessment scope covers all systems, on-premises and cloud infrastructure, processes and individuals supporting the insurer’s Hong Kong insurance business, with inherent risk and cybersecurity maturity assessed under Annexes A and B respectively.' },
    'IA-CRAF-1.2.3': { title: 'Assess at least every three years, after major change and when requested', requirement: 'Conduct both inherent risk and cybersecurity maturity assessments at least every three years; consider more frequent assessment and reassess after a major change to business nature or technology; and perform an ad hoc assessment when requested by the Insurance Authority.' },
    'IA-CRAF-1.2.4a': { title: 'Appoint competent and objective assessors', requirement: 'Engage suitably qualified and experienced people to conduct CRAF assessments objectively and evaluate control robustness and effectiveness. An external validator must hold at least one Annex C qualification and be independent of the insurer and its group.' },
    'IA-CRAF-1.2.4b': { title: 'Qualification and independent validation for medium/high inherent risk assessment', requirement: 'If an inherent risk rating is medium or high and the original assessor lacks an Annex C qualification, have another assessor with at least one such qualification re-perform it. If internal staff perform or re-perform the assessment, have an eligible external validator independently validate the result.' },
    'IA-CRAF-1.2.4c': { title: 'Qualification and independent validation for medium/high maturity assessment', requirement: 'For medium or high inherent risk, use an assessor with at least one Annex C qualification for the maturity assessment and independently validate results produced by internal staff. Engage an external consultant to re-perform or independently validate any part when requested by the Insurance Authority.' },
    'IA-CRAF-1.2.5': { title: 'Test design and operating effectiveness using risk-based sampling', requirement: 'Review control design effectiveness and test operating effectiveness. Samples cover at least the preceding six months for the first assessment and 12 months thereafter; select representative, prudent, risk-based samples and prioritise critical applications.' },
    'IA-CRAF-1.2.6a': { title: 'Meet the first-submission deadline for the inherent risk rating', requirement: 'Submit first results within 12 months of CRAF taking effect for high inherent risk and 18 months for low or medium inherent risk. As CRAF took effect on 1 January 2025, those deadlines were 1 January 2026 and 1 July 2026 respectively.' },
    'IA-CRAF-1.2.6b': { title: 'Submit again every three years after the first submission', requirement: 'After the first submission, submit inherent risk and cybersecurity maturity assessment results to the Insurance Authority every three years.' },
    'IA-CRAF-1.2.6c': { title: 'Submit prescribed templates, evidence and remediation plans', requirement: 'Submit inherent risk and maturity results in the IA-prescribed templates with supporting documents. List every control-principle gap and give each a clear action and target date in an improvement or remediation plan; absent justification, complete actions promptly and no later than the next maturity assessment.' },
    'IA-CRAF-1.2.6d': { title: 'Medium/high-risk insurers submit TIBAS gaps', requirement: 'For medium or high inherent risk, submit any control-principle gaps identified through the Threat Intelligence Based Attack Simulation exercise, including descriptions and finding risk ratings.' },
    'IA-CRAF-1.2.6e': { title: 'Senior and assessment-party sign-off', requirement: 'Have results and completed prescribed templates reviewed and signed by the chief executive or a senior executive such as a key person in an internal audit, compliance or risk-management control function, and by the responsible assessor(s) and/or validator(s).' },
    'IA-CRAF-3.2': { title: 'Implement cumulative maturity controls based on inherent risk', requirement: 'Low inherent risk requires every applicable Baseline principle; medium requires Baseline plus Intermediate; high requires Baseline, Intermediate and Advanced. Record Y, AC, RA, N or NA for each principle; all applicable components must reach 100% at a grade to achieve that overall maturity level.' },
    'IA-CRAF-3.3': { title: 'Alternative frameworks must be comparable and gaps closed', requirement: 'When using a framework other than CRAF, demonstrate comparability to the Insurance Authority and meet the conditions on scope, scope mapping, gap closure, a qualified independent assessor, submission in the IA-prescribed format, and completion within the year before submission.' }
  };

  const componentRequirement = scope =>
    `Implement and assess every Baseline, Intermediate and/or Advanced control principle applicable to the insurer’s inherent risk rating in the IA Cybersecurity Maturity Assessment Matrix, recording Y, AC, RA, N or NA, supporting information and gaps. This component covers ${scope}.`;

  [
    ['1.1', 'Cyber resilience oversight', 'board and senior-management oversight and at least annual written status reporting'],
    ['1.2', 'Strategies and policies', 'the cybersecurity strategy and programme and board- or committee-approved policies'],
    ['1.3', 'Cyber risk management', 'the cyber risk function, social-media policy and risk-management programme'],
    ['1.4', 'Audit', 'independent, adequately resourced cybersecurity audit and follow-up of findings'],
    ['1.5', 'Staffing and training', 'cybersecurity roles, resources, competency and training at least annually'],
    ['2.1', 'IT asset management', 'asset inventory, ownership, classification, configuration and life-cycle management'],
    ['2.2', 'Cyber risk identification, assessment, treatment and monitoring', 'risk ownership, assessment, mitigation strategies, the risk register and regular reporting'],
    ['3.1', 'Access control', 'user and privileged accounts, physical, remote, wireless and mobile access, and cryptographic key management'],
    ['3.2', 'Infrastructure protection control', 'network perimeter and segmentation, secure system configuration and data-centre environmental controls'],
    ['3.3', 'Data protection', 'endpoint and removable-media controls and the classification, encryption, transmission, retention and destruction of sensitive data'],
    ['3.4', 'Secure development', 'the secure development life cycle, code review, testing, environment separation and production release controls'],
    ['3.5', 'Patch and change management', 'the patch programme, risk assessment and testing, and controlled system and configuration changes'],
    ['3.6', 'Remediation management', 'tracking security findings by risk, owner and due date through completion'],
    ['4.1', 'Vulnerability detection', 'anti-virus and anti-malware measures, scanning, penetration testing and simulation testing'],
    ['4.2', 'Anomalies activity detection', 'log review and analysis, SIEM, behavioural anomalies and customer-transaction monitoring'],
    ['4.3', 'Cyber incident detection', 'event-monitoring responsibilities and detection and alerting before an attacker establishes a foothold or moves laterally'],
    ['4.4', 'Threat monitoring and analysis', 'continuous monitoring of external threats, vulnerabilities and attack trends and adjustment of defences'],
    ['5.1', 'Governance and preparation of incident response and recovery', 'cross-functional accountability, playbooks, business impact analysis, continuity, disaster recovery and backup'],
    ['5.2', 'Analysis, mitigation and restoration', 'incident analysis, containment and eradication, and post-restoration quality assurance testing'],
    ['5.3', 'Cyber forensics', 'collection, preservation, analysis and protection of digital evidence against unauthorised change or deletion'],
    ['5.4', 'Communication and improvement', 'employee reporting channels, incident classification and tracking, stakeholder communication and closed-loop lessons learnt'],
    ['5.5', 'Threat Intelligence Based Attack Simulation', 'design, execution and remediation of TIBAS exercises for medium- and high-inherent-risk insurers'],
    ['6.1', 'Threat intelligence', 'subscription, collection and analysis of relevant threat intelligence and its use to improve controls'],
    ['6.2', 'Threat intelligence sharing', 'law-enforcement and regulator contacts and formal, secure and compliant intelligence-sharing processes'],
    ['7.1', 'External connections', 'identification, approval, protection and periodic review of external connections and network-connected third parties'],
    ['7.2', 'Third-party management', 'contractual security responsibility, risk-based due diligence, access control and incident notification'],
    ['7.3', 'Ongoing monitoring of third-party risk', 'continuing risk assessment, service-performance monitoring, audit rights and exit arrangements']
  ].forEach(([code, title, scope]) => {
    controls[`IA-CRAF-B-${code}`] = { title, requirement: componentRequirement(scope) };
  });

  HKCC.addI18n('en', {
    licenses: {
      'ia-authorized-insurer': {
        group: 'IA authorized insurers',
        label: 'Authorized insurer',
        note: 'GL20 main body applies; excludes captive insurers and marine mutual insurers'
      }
    },
    attributes: {
      'ia-craf': {
        label: 'Subject to the IA Cyber Resilience Assessment Framework (CRAF)',
        note: 'For authorized insurers carrying on insurance business in or from Hong Kong that do not fall within a GL20 paragraph 3.2 exemption'
      }
    },
    controls
  });
})();

/* ---- APRA CPS 234 Information Security (Australia) ---- */
HKCC.addI18n('en', {
  licenses: {
    'au-adi': { group: 'APRA-regulated entities', label: 'Authorised deposit-taking institution (ADI)', note: 'Including foreign ADIs (Australian branch operations only) and authorised banking NOHCs; triggers CPS 234' },
    'au-general-insurer': { group: 'APRA-regulated entities', label: 'General insurer', note: 'Including Category C insurers (Australian branch operations only), authorised insurance NOHCs and parent entities of Level 2 insurance groups; triggers CPS 234' },
    'au-life': { group: 'APRA-regulated entities', label: 'Life company', note: 'Including friendly societies, eligible foreign life insurance companies (EFLICs, Australian branch operations only) and registered life NOHCs; triggers CPS 234' },
    'au-phi': { group: 'APRA-regulated entities', label: 'Private health insurer', note: 'Registered under the Private Health Insurance (Prudential Supervision) Act 2015; triggers CPS 234' },
    'au-rse': { group: 'APRA-regulated entities', label: 'RSE licensee (superannuation trustee)', note: 'Licensed under the Superannuation Industry (Supervision) Act 1993, in respect of its business operations; triggers CPS 234' }
  },
  attributes: {
    'au-third-party-assets': {
      label: 'Information assets managed by related parties or third parties',
      note: 'Includes outsourcing, cloud services and intra-group shared services — not only outsourced material business activities under CPS 231. Triggers the related-party and third-party requirements in CPS 234 paragraphs 16, 22, 28 and 34'
    }
  },
  controls: {
    'APRA-234-13': { title: 'Board ultimately responsible for information security', requirement: 'The Board is ultimately responsible for the information security of the entity and must ensure the entity maintains information security in a manner commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity.', note: 'For a foreign ADI, the Board means the senior officer outside Australia; for an RSE licensee, the Board of directors or group of individual trustees (footnotes 4 and 5).' },
    'APRA-234-14': { title: 'Clearly defined information security roles and responsibilities', requirement: 'Clearly define the information security-related roles and responsibilities of the Board, senior management, governing bodies and individuals responsible for decision-making, approval, oversight, operations and other information security functions.', note: 'Governing bodies and individuals include committees, working groups and forums (footnote 6).' },
    'APRA-234-15': { title: 'Information security capability commensurate with threats', requirement: 'Maintain an information security capability — the totality of resources, skills and controls — commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity.' },
    'APRA-234-16': { title: 'Assess the information security capability of related and third parties', requirement: 'Where information assets are managed by a related party or third party, assess that party’s information security capability, commensurate with the potential consequences of an information security incident affecting those assets.', note: 'Applies to all information assets managed by related parties and third parties, not only those under agreements for outsourced material business activities under CPS 231 / SPS 231 (footnote 7).' },
    'APRA-234-17': { title: 'Actively maintain capability as vulnerabilities and threats change', requirement: 'Actively maintain the information security capability with respect to changes in vulnerabilities and threats, including those resulting from changes to information assets or the business environment.' },
    'APRA-234-18': { title: 'Information security policy framework commensurate with exposures', requirement: 'Maintain an information security policy framework — the totality of policies, standards, guidelines and procedures pertaining to information security — commensurate with exposures to vulnerabilities and threats.' },
    'APRA-234-19': { title: 'Policy framework directs the responsibilities of all parties', requirement: 'The information security policy framework must provide direction on the responsibilities of all parties who have an obligation to maintain information security.', note: 'Parties include the governing bodies and individuals in paragraph 14, as well as all other staff, contractors, consultants, related parties, third parties and customers (footnote 8).' },
    'APRA-234-20': { title: 'Classify information assets by criticality and sensitivity', requirement: 'Classify information assets, including those managed by related parties and third parties, by criticality (impact of a loss of availability) and sensitivity (impact of a loss of confidentiality or integrity), reflecting the degree to which an incident could affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers.' },
    'APRA-234-21': { title: 'Timely information security controls commensurate with risk', requirement: 'Have information security controls protecting information assets, including those managed by related parties and third parties, implemented in a timely manner and commensurate with: (a) vulnerabilities and threats; (b) criticality and sensitivity; (c) the stage of the asset’s life-cycle, from planning and design through to decommissioning and disposal; and (d) the potential consequences of an incident.' },
    'APRA-234-22': { title: 'Evaluate the design of related- and third-party controls', requirement: 'Where information assets are managed by a related party or third party, evaluate the design of that party’s information security controls that protect the entity’s information assets.', note: 'Applies to all information assets managed by related parties and third parties, not only those under agreements for outsourced material business activities under CPS 231 / SPS 231 (footnote 10).' },
    'APRA-234-23': { title: 'Robust mechanisms to detect and respond to incidents in a timely manner', requirement: 'Have robust mechanisms in place to detect and respond to information security incidents in a timely manner.' },
    'APRA-234-24': { title: 'Information security response plans for plausible incidents', requirement: 'Maintain plans to respond to information security incidents that the entity considers could plausibly occur (information security response plans).' },
    'APRA-234-25': { title: 'Response plans cover the full incident life-cycle and escalation', requirement: 'Information security response plans must include mechanisms for (a) managing all relevant stages of an incident, from detection to post-incident review; and (b) escalating and reporting incidents to the Board, other governing bodies and individuals responsible for incident management and oversight, as appropriate.' },
    'APRA-234-26': { title: 'Annual review and testing of response plans', requirement: 'Review and test information security response plans annually to ensure they remain effective and fit-for-purpose.' },
    'APRA-234-27': { title: 'Systematic testing program for control effectiveness', requirement: 'Test the effectiveness of information security controls through a systematic testing program whose nature and frequency are commensurate with: (a) the rate of change in vulnerabilities and threats; (b) the criticality and sensitivity of the asset; (c) the consequences of an incident; (d) the risks of exposure to untrusted environments where the entity cannot enforce its policies; and (e) the materiality and frequency of change to information assets.' },
    'APRA-234-28': { title: 'Assess adequacy of related- and third-party control testing relied upon', requirement: 'Where information assets are managed by a related party or third party and the entity relies on that party’s control testing, assess whether the nature and frequency of that testing is commensurate with paragraphs 27(a) to 27(e).', note: 'Applies to all information assets managed by related parties and third parties, not only those under agreements for outsourced material business activities under CPS 231 / SPS 231 (footnote 12).' },
    'APRA-234-29': { title: 'Escalate control deficiencies that cannot be remediated in time', requirement: 'Escalate and report to the Board or senior management any testing results that identify information security control deficiencies that cannot be remediated in a timely manner.' },
    'APRA-234-30': { title: 'Testing by skilled and functionally independent specialists', requirement: 'Ensure testing is conducted by appropriately skilled and functionally independent specialists.' },
    'APRA-234-31': { title: 'Review sufficiency of the testing program at least annually', requirement: 'Review the sufficiency of the testing program at least annually, or when there is a material change to information assets or the business environment.' },
    'APRA-234-32': { title: 'Internal audit reviews design and operating effectiveness of controls', requirement: 'Internal audit activities must include a review of the design and operating effectiveness of information security controls, including those maintained by related parties and third parties (information security control assurance).' },
    'APRA-234-33': { title: 'Control assurance provided by appropriately skilled personnel', requirement: 'Ensure information security control assurance is provided by personnel appropriately skilled in providing such assurance.' },
    'APRA-234-34': { title: 'Internal audit assesses related- and third-party assurance it relies on', requirement: 'Internal audit must assess the control assurance provided by a related party or third party where (a) an incident affecting the information assets could materially affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers; and (b) internal audit intends to rely on that assurance.', note: 'Applies to all information assets managed by related parties and third parties, not only those under agreements for outsourced material business activities under CPS 231 / SPS 231 (footnote 13).' },
    'APRA-234-35': { title: 'Notify APRA of material incidents within 72 hours', requirement: 'Notify APRA as soon as possible and no later than 72 hours after becoming aware of an information security incident that (a) materially affected, or had the potential to materially affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers; or (b) has been notified to other regulators in Australia or other jurisdictions.', note: 'Other regulators include domestic government agencies and international regulators. Applies to incident notifications not already captured under CPS 231 / SPS 231 (Outsourcing) or CPS 232 / SPS 232 (Business Continuity Management) (footnote 14).' },
    'APRA-234-36': { title: 'Notify APRA of unremediable material control weaknesses within 10 business days', requirement: 'Notify APRA as soon as possible and no later than 10 business days after becoming aware of a material information security control weakness which the entity expects it will not be able to remediate in a timely manner.' }
  }
});

/* ---- BNM Risk Management in Technology (Malaysia) ---- */
HKCC.addI18n('en', {
  licenses: {
    'my-bank': { group: 'BNM-regulated entities', label: 'Licensed bank, investment bank or Islamic bank', note: 'Licensed under the Financial Services Act 2013 or the Islamic Financial Services Act 2013; triggers RMiT' },
    'my-insurer': { group: 'BNM-regulated entities', label: 'Licensed insurer or takaful operator', note: 'Including professional reinsurers and professional retakaful operators (excluding branches of a foreign professional reinsurer or professional retakaful operator); triggers RMiT' },
    'my-dfi': { group: 'BNM-regulated entities', label: 'Prescribed development financial institution', note: 'Prescribed under the Development Financial Institutions Act 2002; triggers RMiT' },
    'my-emoney': { group: 'BNM-regulated entities', label: 'Eligible e-money issuer', note: 'An approved e-money issuer with substantial market presence under Appendix 1 of the Electronic Money policy document; exempt from Part C paragraphs 16–17 and Appendices 6 and 7, and from paragraph 13.3 unless designated as an NCII entity' },
    'my-dps': { group: 'BNM-regulated entities', label: 'Operator of a designated payment system', note: 'Exempt from paragraphs 16–17, Appendices 6 and 7, and paragraphs 12.3–12.9' },
    'my-acquirer': { group: 'BNM-regulated entities', label: 'Non-bank registered merchant acquirer (market share of 5% or more)', note: 'At least 5% of total non-bank merchant acquiring transaction value or volume in Malaysia; exempt from paragraphs 16–17 and Appendices 6 and 7, and from paragraph 13.3 unless designated as an NCII entity' },
    'my-iri': { group: 'BNM-regulated entities', label: 'Intermediary remittance institution (market share of 5% or more)', note: 'At least 5% of total IRI transaction value or volume in Malaysia; exempt from paragraphs 16–17, Appendices 6 and 7 and paragraphs 12.3–12.9, and from paragraph 13.3 unless designated as an NCII entity' }
  },
  attributes: {
    'my-digital-services': { label: 'Provides digital services through electronic channels', note: 'Payment, remittance, banking, Islamic banking, insurance or takaful services delivered via the internet, mobile devices, self-service and point-of-sale terminals; triggers the digital services requirements in RMiT chapters 12 and 16' },
    'my-cloud': { label: 'Uses cloud services', note: 'Triggers the cloud risk assessment and data safeguard requirements in RMiT paragraphs 10.50–10.52' },
    'my-ncii': { label: 'Designated by BNM as a National Critical Information Infrastructure (NCII) entity', note: 'Designated under section 17(1) of the Cyber Security Act 2024; triggers paragraph 11.4, and brings e-money issuers, merchant acquirers and intermediary remittance institutions within paragraphs 10.31 and 13.3' }
  },
  controls: {
    'BNM-RMIT-8.1': { title: 'Board establishes and approves the technology risk appetite', requirement: 'The board must establish and approve a technology risk appetite aligned with the risk appetite statement, and must (a) approve risk tolerances for technology-related events; (b) identify risk owners and set criteria and approving authority for accepting residual risk; (c) ensure key risk indicators are identified; (d) ensure sufficient and appropriately deployed resources; and (e) review the technology risk appetite at regular intervals.' },
    'BNM-RMIT-8.2': { title: 'Board approves strategic plans and oversees the TRMF and CRF', requirement: 'The board must (a) approve and review IT and cybersecurity strategic plans covering at least three years; (b) endorse and oversee implementation of the technology risk management framework (TRMF) and cyber resilience framework (CRF); (c) require senior management to demonstrate robust risk assessments for critical IT systems and emerging technology; (d) ensure IT-related frameworks, policies and guidelines are reviewed at least once every three years; and (e) ensure the risk management framework supports risk assessments for technology-related applications to BNM.' },
    'BNM-RMIT-8.3': { title: 'Designated board-level committee for technology oversight', requirement: 'The board must designate a board-level committee to support its oversight of technology-related matters, including at least one member with technology experience and competencies.', note: 'The board may designate an existing committee or establish a separate one; a separate committee must interface appropriately with the Board Risk Committee on technology risk (footnote 9).' },
    'BNM-RMIT-8.4': { title: 'Board stays informed on technology and cyber risk and is trained', requirement: 'The board must (a) obtain regular updates on technology risk and cyber threats; (b) allocate sufficient time to discuss cyber risks, including the strategic, reputational and liquidity risks of an extreme cyber incident, with external expert input where appropriate; and (c) participate in cybersecurity awareness and training programmes.' },
    'BNM-RMIT-8.5': { title: 'Board audit committee ensures an effective technology audit function', requirement: 'The board audit committee is responsible for the effectiveness of the internal technology audit function, including audit staff competence, appropriate audit scope, procedures and frequency, and oversight of the prompt closure of corrective actions on technology control gaps.' },
    'BNM-RMIT-8.6': { title: 'Senior management responsible for day-to-day technology risk', requirement: 'Senior management bears primary responsibility for day-to-day management of technology and cyber risks and must (a) implement the board-approved TRMF and CRF in specific policies and procedures; (b) ensure the crisis management plan escalates recovery action in a timely manner having regard to customer impact (duration, number of customers, number and value of transactions affected); and (c) regularly update the board on key performance indicators.' },
    'BNM-RMIT-8.7': { title: 'Cross-functional technology committee', requirement: 'Senior management must establish a cross-functional committee, including senior management from cyber and technology functions and major business units, to (a) oversee the strategic technology plan and related policies; (b) provide timely updates to the board on key technology matters; and (c) approve deviations from technology policies after a robust risk assessment, reporting material deviations to the board.', note: 'Key technology matters include critical system performance, significant IT and cyber incidents, technology obsolescence, patch deployment status for critical infrastructure, strategic technology projects, critical technology outsourcing, technology budget utilisation and technology risk competencies (footnote 10).' },
    'BNM-RMIT-9.1': { title: 'TRMF integrated into enterprise risk management', requirement: 'The technology risk management framework must be an integral part of the enterprise risk management framework.' },
    'BNM-RMIT-9.2': { title: 'Required contents of the TRMF', requirement: 'The TRMF must include a definition of technology risk; responsibilities, governance and reporting at each level; identification of technology risks including emerging technology; criticality-based classification of all information assets and systems; risk measurement and assessment methods; controls and mitigations; continuous monitoring; an information system keeping the risk profile current; identification of key resources and interdependencies, including critical third parties and their connected parties; scenario analysis; and effective incident management policies and procedures.', note: 'Connected parties refers to Nth parties as defined in the Basel Committee principles for the sound management of third-party risk (footnote 11).' },
    'BNM-RMIT-9.3': { title: 'Independent enterprise-wide technology risk management function', requirement: 'Establish an independent technology risk management function responsible for (a) implementing the TRMF and CRF; (b) advising on critical technology projects and escalating critical issues affecting risk tolerance; and (c) providing independent views on third-party assessments where necessary.', note: 'Relevant third-party assessments may include the Data Centre Resilience and Risk Assessment, Network Resilience and Risk Assessment and independent assurance for new or enhanced digital services (footnote 12).' },
    'BNM-RMIT-9.4': { title: 'Designate a Chief Information Security Officer', requirement: 'Designate a CISO, by whatever name called, responsible for the technology risk management function, with sufficient authority, independence and resources. The CISO must (a) be independent from day-to-day technology operations; (b) apprise the board and senior management of current and emerging technology risks; (c) have the requisite technical, audit, governance, risk, strategic planning, cybersecurity programme and third-party risk expertise; and (d) be appropriately certified.', note: 'The CISO may take guidance from a group-level CISO in or outside Malaysia and may hold other roles that do not impair independence or competence; the designated CISO is accountable for, and the point of contact with BNM on, technology-related matters (footnotes 13 and 14).' },
    'BNM-RMIT-9.5': { title: 'CISO ensures information assets and technologies are protected', requirement: 'The CISO is responsible for ensuring information assets and technologies are adequately protected, including (a) formulating policies to implement the TRMF and CRF; (b) enforcing compliance with those policies and technology-related regulatory requirements; and (c) advising senior management on technology risk and security matters.' },
    'BNM-RMIT-10.1': { title: 'Risk-commensurate governance of technology projects', requirement: 'Establish governance requirements commensurate with the risk and complexity of technology projects, including oversight roles, authority and reporting structures, and risk assessments throughout the project life cycle.', note: 'Large-scale integration projects or projects involving critical systems must be subject to more stringent governance, such as more frequent reporting to the board and senior management, more experienced project managers and sponsors, more frequent milestone reviews and independent quality assurance at major approval stages (footnote 15).' },
    'BNM-RMIT-10.2': { title: 'Scope of technology project risk assessments', requirement: 'Project risk assessments must identify and address implementation risks and the wider impact of project failure, considering at minimum (a) resource adequacy and competency, including vendors; (b) system complexity; (c) security controls throughout the life cycle; (d) completeness of user requirement specifications; (e) robustness of system and user testing; (f) deployment and fallback strategies; and (g) disaster recovery readiness after implementation.' },
    'BNM-RMIT-10.3': { title: 'Board and senior management review project risk reports', requirement: 'The board and senior management must receive and review timely reports on the management of these risks throughout the implementation of significant projects.' },
    'BNM-RMIT-10.4': { title: 'Enterprise technology architecture framework', requirement: 'Establish a framework for the enterprise technology architecture that (a) gives a comprehensive view of technology and baseline architecture components; (b) describes infrastructure, inter-connectivity, dependencies and security controls to support identification of single points of failure; (c) maps to business functions, organisation units, applications and data for business impact analysis; (d) sets principles for network infrastructure, related controls and IT security policies; and (e) outlines longer-term priorities.' },
    'BNM-RMIT-10.5': { title: 'Secure system development life cycle (SDLC) methodology', requirement: 'Adopt a methodology for effective and secure implementation of IT systems whose SDLC phases — requirement, design, development, testing, deployment, change management, maintenance and decommissioning — integrate with enterprise architecture, risk management policies, and security principles ensuring the confidentiality, integrity and availability of customer and counterparty information.', note: 'Security considerations must include appropriate segregation of duties throughout the SDLC (footnote 16).' },
    'BNM-RMIT-10.6': { title: 'Automated security compliance in rapid development', requirement: 'When using rapid development methodologies such as DevOps, meet enterprise security, governance and compliance requirements and automate IT security compliance review and the discovery and testing of security vulnerabilities to ensure secure release.' },
    'BNM-RMIT-10.7': { title: 'Physically segregate production from development and testing', requirement: 'Physically segregate the production environment from development and testing environments; in a cloud environment, ensure these environments do not run on the same virtual host.' },
    'BNM-RMIT-10.8': { title: 'Rigorous system testing before deployment', requirement: 'Establish a methodology for rigorous system testing before deployment so that systems meet user requirements and perform robustly; where sensitive test data is used, ensure proper authorisation and measures preventing unauthorised disclosure.', note: 'Paragraph 10.9 (G): testing may include unit, integration, user acceptance, application security, stress and load, regression, exception and negative testing.' },
    'BNM-RMIT-10.10': { title: 'Source code review for changes to critical systems', requirement: 'Ensure any changes to the source code of critical systems undergo adequate source code review for security and conformance with recognised coding practices before the changes are introduced.' },
    'BNM-RMIT-10.11': { title: 'Independent change approval and contingency plans', requirement: 'Establish procedures to independently review and approve system changes, and establish and test contingency plans for unsuccessful implementation of material changes.' },
    'BNM-RMIT-10.12': { title: 'Contractual requirements for third parties developing critical systems', requirement: 'For critical systems developed or maintained by a third party, contractually require the provider to (a) give sufficient notice before changes that may impact the system; (b) demonstrate secure-by-design development to prevent cyber risk propagating across the supply chain; and (c) keep the source code readily accessible for business continuity.' },
    'BNM-RMIT-10.13': { title: 'Minimise impact when decommissioning critical systems', requirement: 'When decommissioning critical systems, minimise adverse impact on customers and operations, including establishing and testing contingency plans for unsuccessful decommissioning.' },
    'BNM-RMIT-10.14': { title: 'Automated tools to support security assessment of critical systems', requirement: 'Automated tools may be deployed for software development, testing, deployment, change management, code scanning and version control to facilitate timely security assessment of critical systems.' },
    'BNM-RMIT-10.15': { title: 'Third-party software supply chain risk (SBOM and open-source security)', requirement: 'Where third-party software is used, consider the potential impact of a cyber supply chain incident, and consider (a) adopting a Software Bill of Materials to automate identification and monitoring of component vulnerabilities; and (b) establishing an open-source software security policy and procedures.' },
    'BNM-RMIT-10.16': { title: 'Identify and reduce shadow IT risk', requirement: 'Develop and implement robust policies to identify and reduce shadow IT risks — the use of hardware, software or services without the IT department’s approval, knowledge or oversight.' },
    'BNM-RMIT-10.17': { title: 'No known vulnerabilities, outdated platforms or end-of-life technology', requirement: 'Ensure no system, including digital services, runs with known security vulnerabilities or on outdated or end-of-life (EOL) technology, by (a) maintaining an accurate security hardening baseline; (b) monitoring and applying patches in a timely manner; (c) planning remediation for systems approaching EOL; and (d) obtaining management approval for any exception, backed by a risk assessment, a phase-out timeline and at least annual review.', note: 'A known security vulnerability is a flaw publicly disclosed or catalogued in databases such as the NVD or CVE list (footnote 20).' },
    'BNM-RMIT-10.18': { title: 'Patch and end-of-life management framework', requirement: 'Establish a patch and EOL management framework covering (a) identification and risk assessment of all technology assets for unpatched or EOL vulnerabilities; (b) criteria, priority and turnaround time for patch deployment by severity; (c) compatibility testing before deployment; (d) an end-to-end patch deployment workflow; and (e) end-user awareness.' },
    'BNM-RMIT-10.19': { title: 'Monitor technology developments that may disrupt security controls', requirement: 'Continually monitor the effectiveness and security of technology in use, including developments that may disrupt existing controls, and (a) ensure the board is advised on the business impact of the evolving technology landscape; (b) formulate a long-term strategy with competent resources; and (c) establish a roadmap for orderly system migration.', note: 'Such as quantum computing (footnote 21).' },
    'BNM-RMIT-10.20': { title: 'Robust cryptography policy', requirement: 'Establish a cryptography policy addressing at minimum (a) industry-standard algorithms for encryption, message authentication, hashing, digital signatures and random number generation; (b) secure management of the full key lifecycle; (c) at least annual review of cryptographic standards and algorithms used for critical systems and customer-facing applications; (d) inclusion of all cryptographic tools and algorithms in the IT asset inventory; and (e) development and testing of key-compromise recovery plans.' },
    'BNM-RMIT-10.21': { title: 'Evaluate cryptographic controls and retain control of encryption keys', requirement: 'Conduct due diligence on cryptographic controls in the technology used, and ensure (a) ownership and control of encryption keys is retained (directly or via an independent key custodian), except for non-critical systems holding no customer information; (b) robust key management where keys are not self-generated; (c) reliance on third-party assessments is consistent with risk appetite; and (d) due regard to system resources and reduced traffic visibility from encryption.' },
    'BNM-RMIT-10.22': { title: 'Standards-based cryptographic protocols and protected key environments', requirement: 'Base cryptographic controls on suitable protocols selected from recognised international standards and tested accordingly; commensurate with risk, store secret and private keys and perform encryption and decryption in a protected environment such as an HSM, TEE or similarly secured device.' },
    'BNM-RMIT-10.23': { title: 'Public keys in certificates from recognised Certificate Authorities', requirement: 'Store public keys in certificates issued by a Certificate Authority as appropriate to risk; customer certificates must be issued by recognised Certificate Authorities, with authentication and signature protocols strongly protected so that signatures are legally binding and irrefutable.' },
    'BNM-RMIT-10.24': { title: 'Data centre resilience and availability objectives', requirement: 'Specify the resilience and availability objectives of data centres to support business recovery objectives.' },
    'BNM-RMIT-10.25': { title: 'Redundant capacity and multiple distribution paths in data centres', requirement: 'Ensure data centres have redundant capacity components and multiple distribution paths to eliminate any single point of failure.' },
    'BNM-RMIT-10.26': { title: 'Host critical systems in a dedicated, secure production data centre', requirement: 'Host critical systems in a dedicated production data centre space that is physically secured and not in a disaster-prone area, with no single point of failure in hardware, electrical, thermal or infrastructure components, and with adequate maintenance and continuous monitoring with timely alerts.' },
    'BNM-RMIT-10.27': { title: 'Control procedures for data centre operations', requirement: 'Establish adequate control procedures for data centre operations, including automated tools for batch processing management, and procedures for production changes, error handling and exceptional conditions.' },
    'BNM-RMIT-10.28': { title: 'Segregate incompatible activities in data centre operations', requirement: 'Segregate incompatible activities in data centre operations (for example, system development from data centre operations); vendor or programmer access to production must be properly authorised and monitored.' },
    'BNM-RMIT-10.29': { title: 'Plan and manage system capacity', requirement: 'Plan and manage system capacity with due regard to peak processing periods, business growth plans and technology architecture changes.' },
    'BNM-RMIT-10.30': { title: 'Real-time monitoring of capacity and key process performance', requirement: 'Establish real-time monitoring of capacity utilisation and performance of key processes and services, with actionable alerts for timely detection and resolution of interruptions, and periodically update the monitoring scope, metrics and thresholds.' },
    'BNM-RMIT-10.31': { title: 'Strengthen resilience of key digital services and delivery channels', requirement: 'Enhance resilience of key digital services and delivery channels by (a) implementing, by 30 September 2027, early warning of degradation or intermittent failure — detecting failed transactions, monitoring affected customers and volumes, and escalating immediately to senior management when 5% or more of expected daily customers or transactions are affected; (b) regularly reviewing vulnerable system interdependencies; and (c) establishing, by 30 September 2027, stand-in processing for use during disruptions, prioritising the least substitutable services and informing customers of terms, risks and responsibilities.', note: 'Key digital services include deposit balance enquiry, domestic interbank transfers, DuitNow, FPX, RENTAS, bill payments and overseas transfers; key delivery channels include internet banking, mobile banking, debit card or ATM (footnotes 25 and 26).' },
    'BNM-RMIT-10.31-NCII': { title: 'Strengthen resilience of key digital services and delivery channels', requirement: 'Enhance resilience of key digital services and delivery channels by (a) implementing, by 30 September 2027, early warning of degradation or intermittent failure — detecting failed transactions, monitoring affected customers and volumes, and escalating immediately to senior management when 5% or more of expected daily customers or transactions are affected; (b) regularly reviewing vulnerable system interdependencies; and (c) establishing, by 30 September 2027, stand-in processing for use during disruptions, prioritising the least substitutable services and informing customers of terms, risks and responsibilities.', note: 'Paragraph 10.33 (G) only encourages e-money issuers, merchant acquirers and intermediary remittance institutions that are not NCII entities to implement these measures; this tool therefore treats paragraph 10.31 as mandatory for those three types only when they are designated as NCII.' },
    'BNM-RMIT-10.32': { title: 'Critical system downtime: no more than 4 hours a year and 120 minutes per incident', requirement: 'Critical systems where customers or counterparties reasonably expect immediate service must be designed for high availability, with cumulative unplanned downtime affecting the customer or counterparty interface of no more than 4 hours on a rolling 12-month basis and a maximum tolerable downtime of 120 minutes per incident.' },
    'BNM-RMIT-10.33': { title: 'Payment-type institutions not designated as NCII encouraged to adopt paragraph 10.31', requirement: 'Eligible e-money issuers, non-bank registered merchant acquirers and intermediary remittance institutions not designated as NCII entities are encouraged to implement the measures in paragraph 10.31.' },
    'BNM-RMIT-10.34': { title: 'Prioritise technology diversity for resilience', requirement: 'Prioritise diversity in technology — architecture designs, applications, platforms and network infrastructure — so that critical systems infrastructure is not excessively exposed to similar technology risks.' },
    'BNM-RMIT-10.35': { title: 'Respond promptly to digital service interruptions and disclose availability', requirement: 'During interruptions of digital services or delivery channels, including degradation or intermittent failure, (a) escalate and decide promptly to resume services within the paragraph 10.32 timeframe; (b) define accountabilities and formalise arrangements with third parties; (c) establish a communication plan to inform affected customers immediately and offer alternatives; (d) give customers a convenient way to check service availability; and (e) from 15 October 2027, disclose the service availability track record quarterly within 15 calendar days of quarter-end.' },
    'BNM-RMIT-10.36': { title: 'Reliable, scalable and secure enterprise network', requirement: 'Design and implement a reliable, scalable and secure enterprise network that supports business activities and future growth.' },
    'BNM-RMIT-10.37': { title: 'No single point of failure in network services for critical systems', requirement: 'Ensure network services for critical systems are reliable and have no single point of failure, protecting against network faults and cyber threats.', note: 'Paragraph 10.38 (G): controls are expected to include component redundancy, service diversity and alternate network paths.' },
    'BNM-RMIT-10.39': { title: 'Real-time network bandwidth and resilience monitoring', requirement: 'Establish real-time bandwidth monitoring and network service resilience metrics to flag over-utilisation and disruptions from congestion or faults, including traffic analysis to detect trends and anomalies.' },
    'BNM-RMIT-10.40': { title: 'Network services for critical systems protect data confidentiality, integrity and availability', requirement: 'Ensure network services supporting critical systems are designed and implemented to ensure the confidentiality, integrity and availability of data.' },
    'BNM-RMIT-10.41': { title: 'Maintain a network design blueprint', requirement: 'Establish and maintain a network design blueprint identifying all internal and external interfaces and connectivity, showing physical and logical connectivity and network segmentation.' },
    'BNM-RMIT-10.42': { title: 'Retain network device logs for at least three years', requirement: 'Retain sufficient and relevant network device logs for investigation and forensic purposes for at least three years.' },
    'BNM-RMIT-10.43': { title: 'Prevent a compromise spreading across group entities', requirement: 'Implement safeguards to minimise the risk that a compromise in one group entity affects others, which may include logical network segmentation from other group entities.' },
    'BNM-RMIT-10.44': { title: 'Robust backup strategy and procedures', requirement: 'Establish a backup strategy that at minimum (a) manages the backup data life cycle; (b) keeps adequate backup copies of critical data, system software, production programs, master and transaction files and event logs; (c) stores backup media in a secure, access-controlled site; (d) secures sensitive data on removable media per Appendix 1; (e) periodically tests backup and restoration and fixes root causes of failures; and (f) independently risk-assesses end-to-end backup storage and delivery.' },
    'BNM-RMIT-10.45': { title: 'Tamper-proof backups and an isolated recovery environment', requirement: 'Establish a tamper-proof backup arrangement and an isolated recovery environment to resume critical banking and payment services within tolerable levels after destructive cyber-attacks such as ransomware.' },
    'BNM-RMIT-10.46': { title: 'Board and senior management oversight of critical technology third parties', requirement: 'The board and senior management must exercise effective oversight of third parties engaged for critical technology functions and systems; the institution remains accountable for all risks arising from those engagements.', note: 'Engagements meeting the definition of an outsourcing arrangement must also comply with the Outsourcing policy document (footnote 30).' },
    'BNM-RMIT-10.47': { title: 'Third-party due diligence before and during engagement', requirement: 'Conduct due diligence on third-party service providers before on-boarding and throughout the engagement so that performance and recovery objectives remain unimpaired, considering at minimum the risks in Appendix 8.' },
    'BNM-RMIT-10.48': { title: 'Minimum contents of third-party service level agreements', requirement: 'Establish an SLA containing at minimum (a) access rights for the regulator and appointed parties; (b) prior notice of substantial sub-contracting; (c) a written undertaking on secrecy that survives termination; (d) disaster recovery and backup arrangements; (e) uptime or availability objectives; (f) exit and termination arrangements including timely data recovery; (g) prompt notification of service disruptions or cyber incidents affecting the institution or its customer data; (h) compliance with internationally recognised standards and key staff certification; and (i) participation in security awareness programmes where appropriate.' },
    'BNM-RMIT-10.49': { title: 'Continuous monitoring of third-party cybersecurity posture', requirement: 'Formulate a roadmap for continuous monitoring of third parties’ cybersecurity posture, including (a) measuring infrastructure footprint and customer information accessible to third parties; (b) adopting controls for product-specific risks; (c) third-party protocols in incident response plans for faulty software updates; (d) a priority set of controls requiring more frequent assurance; (e) higher-frequency monitoring of disclosed incidents; (f) automated metric testing; and (g) processes for breached thresholds.' },
    'BNM-RMIT-10.50': { title: 'Comprehensive risk assessment before adopting cloud services', requirement: 'Conduct a comprehensive risk assessment before cloud adoption, addressing the deployment model, migration, infrastructure location including geopolitical and legal risk, multi-tenancy, vendor lock-in and portability, configurable security, exposure to attacks via the provider, termination and data recovery, demarcation of responsibilities, and ongoing ability to meet regulatory requirements and international standards.' },
    'BNM-RMIT-10.51': { title: 'Consider Appendix 10 risks and controls for critical systems on public cloud', requirement: 'For critical systems hosted on public cloud, consider the key risks and controls in Appendix 10; any alternative practices departing from Appendix 10 should be demonstrably at least as effective.' },
    'BNM-RMIT-10.52': { title: 'Retain ownership and control of customer data in the cloud', requirement: 'Safeguard customer and counterparty information and proprietary data in the cloud against unauthorised disclosure and access, retaining ownership, control and management of all such data and services, including cryptographic key management.' },
    'BNM-RMIT-10.53': { title: 'Access control policy', requirement: 'Implement an access control policy for identification, authentication and authorisation of all users to IT assets and data, with granularity commensurate with the risk of unauthorised access.' },
    'BNM-RMIT-10.54': { title: 'Access principles: deny by default, least privilege, time-bound access, segregation', requirement: 'Adhere to (a) deny-all by default; (b) least privilege; (c) time-bound access; (d) segregation of incompatible functions such as development and operations, security and system administration, and network operation and network security; (e) criteria for dual-authorisation activities; and (f) robust authentication by asset criticality — stronger authentication for remote access and other higher-risk activities, robust identity verification when provisioning credentials, and one online credential per user.' },
    'BNM-RMIT-10.55': { title: 'Phishing-resistant multi-factor authentication for critical systems', requirement: 'Use multi-factor authentication that can defend against social engineering attacks for user access to critical systems, combining two or more knowledge, inherent (e.g. biometric) or possession (e.g. security key, token) factors.' },
    'BNM-RMIT-10.56': { title: 'User access matrix, periodically reviewed', requirement: 'Establish a user access matrix setting out access rights, user roles or profiles, and authorising and approving authorities, and periodically review and update it.' },
    'BNM-RMIT-10.57': { title: 'Monitor access and retain critical system activity logs for three years', requirement: 'Ensure (a) access to enterprise-wide systems is effectively managed and monitored; (b) anomalies are flagged for prompt investigation; and (c) user activities in critical systems are logged, with logs kept for at least three years and reviewed in a timely manner.' },
    'BNM-RMIT-11.1': { title: 'Enterprise-wide responsibility for cyber risk', requirement: 'Ensure an enterprise-wide focus on cyber risk management reflecting the collective responsibility of business and technology lines.' },
    'BNM-RMIT-11.2': { title: 'Cyber resilience framework (CRF)', requirement: 'Develop a CRF articulating governance for cyber risk, cyber resilience objectives and risk tolerance; its objectives must include operational resilience against extreme but plausible cyber-attacks, and it must support identification, protection, detection, response and recovery for systems and data hosted on-premises or by third parties.' },
    'BNM-RMIT-11.3': { title: 'Required elements of the CRF', requirement: 'The CRF must include at minimum (a) an understanding of the cyber risk context and current posture; (b) identification, classification and prioritisation of critical systems, assets and interconnections; (c) identification of threats, vulnerabilities and countermeasures; (d) layered defences such as zero trust, micro-segmentation and security by design; (e) continuous monitoring for timely detection; (f) incident handling procedures and a crisis response playbook; (g) secure information sharing with other institutions and FMI participants; (h) a centralised automated asset inventory; and (i) a cyber risk management function escalating high-risk threats to senior management and the board.' },
    'BNM-RMIT-11.4': { title: 'NCII entities comply with NACSA requirements', requirement: 'An institution designated as a National Critical Information Infrastructure entity under the Cyber Security Act 2024 must comply with requirements and guidelines applicable to NCII, including directives and standards issued by NACSA.', note: 'Appendix 12 contains the Code of Practice for NCII entities in the banking and finance sector designated by BNM; it will be added in a later release.' },
    'BNM-RMIT-11.5': { title: 'Adopt the cybersecurity control measures in Appendix 5', requirement: 'Adopt the robust control measures outlined in Appendix 5 to enhance resilience to cyber-attacks.', note: 'The individual provisions of Appendix 5 will be added in a later release; until then, refer directly to Appendix 5 of the official PDF.' },
    'BNM-RMIT-11.6': { title: 'Red team simulation at least once every three years', requirement: 'Conduct a realistic red team simulation attack on the institution’s infrastructure at least once every three years.', note: 'A red team exercise simulates the tactics, techniques and procedures of potential adversaries to assess security defences, resilience and response, with minimal knowledge and impact on operations (footnote 34).' },
    'BNM-RMIT-11.7': { title: 'Crowdsourced security testing as a complement', requirement: 'Crowdsourced security testing programmes may complement existing security assessments; where used, engage reputable and credible service providers.' },
    'BNM-RMIT-11.8': { title: 'Mitigations across the cyber-attack lifecycle', requirement: 'Establish clear responsibilities for cybersecurity operations, including mitigating measures for each phase of the cyber-attack lifecycle: reconnaissance, weaponisation, delivery, exploitation, installation, command and control, and exfiltration.' },
    'BNM-RMIT-11.9': { title: 'Security Operations Centre and continuous monitoring', requirement: 'Ensure continuous, proactive monitoring and timely detection of anomalous activity, including (a) a Security Operations Centre with competent resources and tools; (b) monitoring scope covering all critical systems and supporting infrastructure; and (c) regular vulnerability assessment and penetration testing in line with Appendix 5.' },
    'BNM-RMIT-11.10': { title: 'Cyber threat intelligence process', requirement: 'Establish a process to collect, analyse and evaluate cyber threat intelligence to promptly detect threats, including data breaches and misleading information about the institution on the internet.', note: 'Includes the capability to collect and correlate information from sources such as social media and the dark web (footnote 35).' },
    'BNM-RMIT-11.11': { title: 'Investigate and respond to flagged anomalies', requirement: 'Establish an appropriate response to investigate and respond to flagged anomalous activities according to their complexity.' },
    'BNM-RMIT-11.12': { title: 'Cyber crisis management within overall crisis and continuity planning', requirement: 'Establish cyber crisis management policies and procedures that incorporate cyber-attack scenarios into the overall crisis management plan, escalation, business continuity and disaster recovery planning, including a communication plan for shareholders, regulators, customers and employees.' },
    'BNM-RMIT-11.13': { title: 'Cyber Incident Response Plan (CIRP)', requirement: 'Establish and implement a CIRP covering (a) preparedness — CERT governance, reporting, roles, invocation and escalation; (b) detection and analysis — points of compromise, damage assessment and forensic evidence; (c) containment and eradication; (d) recovery through multiple strategies and contingency plans; and (e) post-incident review and long-term mitigations.', note: 'Assessment includes handling threat actor claims by confirming the legitimacy and extent of the incident and uncovering more about the threat actor (footnote 36).' },
    'BNM-RMIT-11.14': { title: 'CERT members conversant with the plan and always contactable', requirement: 'Ensure relevant CERT members are conversant with the incident response plan and procedures and remain contactable at all times.' },
    'BNM-RMIT-11.15': { title: 'Out-of-band communication infrastructure', requirement: 'Establish secure and reliable out-of-band communication for internal and external stakeholders in case primary communications are compromised or unavailable during a crisis.' },
    'BNM-RMIT-11.16': { title: 'Annual cyber drill reported to the board', requirement: 'Conduct an annual cyber drill testing the CIRP, including out-of-band communication, across current and emerging threat scenarios with the board, senior management and relevant third parties, and report the results to the board in a timely manner; scenarios must test escalation, communication and decision-making at different impact levels, and the readiness of CERT and third parties to support recovery.' },
    'BNM-RMIT-11.17': { title: 'Review loss provisions and cyber insurance arrangements', requirement: 'Review whether loss provisions cover cyber incidents based on extreme scenario analysis; where cyber insurance is used, ensure the cover matches exposures, understand warranties and conditions and avoid unintended exclusions, and ensure policy obligations do not impair acting in the best interest of the institution and its customers, managing any conflict of interest with the insurer.' },
    'BNM-RMIT-11.18': { title: 'Notify BNM of cyber incidents under the relevant policy documents', requirement: 'Notify BNM of cyber incidents in accordance with the Operational Risk Reporting policy document (Part C), the Business Continuity Management policy document (Part C), paragraphs 19.25–19.26 of the Merchant Acquiring Services policy document and other policy documents specified by BNM.', note: 'The notification timeframes are set in those policy documents, not in RMiT itself.' },
    'BNM-RMIT-11.19': { title: 'Share cyber threat intelligence with the industry', requirement: 'Subject to data protection laws, share cyber threat intelligence with the industry on a timely basis via platforms developed by BNM, the industry or law enforcement, and allocate resources to industry-wide threat intelligence initiatives.' },
    'BNM-RMIT-11.20': { title: 'Collaborate with stakeholders and authorities against cyber threats', requirement: 'Collaborate and cooperate closely with relevant stakeholders and authorities in combating cyber threats.' },
    'BNM-RMIT-12.1': { title: 'Extend the CRF to security controls for digital services', requirement: 'Expand the CRF to implement robust security controls for digital services, ensuring (a) minimum security controls for each delivery channel are adopted and regularly assessed (Appendices 2, 3, 4 and 11); (b) proper authentication of users or devices and authorisation of transactions (Appendix 3); and (c) strong physical and logical controls.' },
    'BNM-RMIT-12.2': { title: 'Fraud liability where specified digital controls are not yet implemented', requirement: 'Where the controls in paragraphs 12.1 to 12.9 are not yet implemented, the institution must (a) be ready to explain in writing how alternative measures achieve equivalent or superior effectiveness; and (b) assume liability for any fraud arising from the absence of the specified controls.' },
    'BNM-RMIT-12.3': { title: 'Strengthen the CRF against digital fraud', requirement: 'Enhance the CRF to (a) include customers’ mobile devices and access points in threat identification; (b) apply defence-in-depth to the mobile application and its data; (c) continuously monitor for exploitation of the application and upgrade controls swiftly; (d) establish incident procedures that help customers contain damage; (e) formalise coordinated cross-functional response; (f) have senior management regularly review fraud management effectiveness and set escalation thresholds; and (g) apprise the board of the outcome.' },
    'BNM-RMIT-12.4': { title: 'Update fraud detection capabilities and rules promptly', requirement: 'Update fraud detection capabilities and rules promptly when new fraud modus operandi are detected, to prevent fraudulent transactions and account takeover, supported by risk analytics and continuous upgrades per Appendix 11 (Fraud Detection Standards).' },
    'BNM-RMIT-12.5': { title: 'Secure communication channels and call verification for customers', requirement: 'Mitigate risks from delivering digital services, including (a) secure communication channels against phishing, with compensating controls for phishing-prone channels; (b) informing customers in advance of new controls; and (c) practical ways for customers to verify calls from the institution or its outsourced providers.', note: 'Clickable hyperlinks must be removed from SMS messages to customers, with awareness created on the change (footnote 37).' },
    'BNM-RMIT-12.6': { title: 'Let customers control card-not-present and overseas transactions', requirement: 'Empower customers to mitigate digital fraud where reasonably practical, including mechanisms to activate and deactivate payment cards for card-not-present and overseas transactions; this does not absolve the institution of its duty of care.', note: 'Opt-in requirements for card-not-present and overseas transactions are governed by BNM’s Debit Card and Credit Card policy documents (footnote 38).' },
    'BNM-RMIT-12.7': { title: 'Continuously strengthen customer awareness of digital fraud', requirement: 'Continuously review and enhance customer awareness programmes, including (a) timely practical information on new and common fraud modus operandi; (b) clear explanation of security measures such as verifying genuine websites and apps; (c) real-time risk alerts where security measures are absent; and (d) measures such as interactive simulations.' },
    'BNM-RMIT-12.8': { title: 'Self-service kill switch and prompt customer assistance', requirement: 'Provide convenient means for customers to report, suspend and reactivate accounts swiftly on suspected fraud, including (a) a secure self-service kill switch; (b) an adequately resourced contact centre; and (c) restoration of access within a reasonable time after validation.' },
    'BNM-RMIT-12.9': { title: 'Additional measures after fraud or customer data compromise', requirement: 'For incidents involving potential fraud or customer data compromise, (a) heighten monitoring of affected accounts; (b) notify affected customers with mitigation information; and (c) revoke and re-issue affected credentials or payment instruments where there is a risk of exploitation.' },
    'BNM-RMIT-13.1': { title: 'Risk-commensurate technology audit scope, frequency and intensity', requirement: 'Ensure the scope, frequency and intensity of technology audits are commensurate with the complexity, sophistication and criticality of technology systems and applications.' },
    'BNM-RMIT-13.2': { title: 'Annual review of the technology audit plan', requirement: 'Review the technology audit plan annually to cover critical technology services, third parties, material external interfaces, delayed or terminated critical projects, and post-implementation reviews of new or materially enhanced services.' },
    'BNM-RMIT-13.3': { title: 'Dedicated, certified technology audit resources', requirement: 'The internal audit function must have dedicated technology audit resources with specialised competencies and professional certification, conversant with the institution’s technology systems and delivery channels.' },
    'BNM-RMIT-13.3-NCII': { title: 'Dedicated, certified technology audit resources', requirement: 'The internal audit function must have dedicated technology audit resources with specialised competencies and professional certification, conversant with the institution’s technology systems and delivery channels.', note: 'Under paragraph 2.2(c), eligible e-money issuers, non-bank registered merchant acquirers and intermediary remittance institutions must comply with this paragraph only when designated as NCII entities.' },
    'BNM-RMIT-13.4': { title: 'Independence when technology auditors act as advisers', requirement: 'Technology auditors may advise on compliance and control adequacy during planning and development of major products, systems, third-party adoption or operations, but should consider whether that role could impair their independence or objectivity in later post-implementation reviews.' },
    'BNM-RMIT-14.1': { title: 'External data centre resilience and risk assessment at least every three years', requirement: 'Appoint a competent external provider to perform a production data centre resilience and risk assessment (DCRA) at least once every three years or on material change, whichever is earlier, covering at minimum paragraphs 10.24–10.28; rely on third-party assurance for outsourced data centres only where consistent with risk appetite and equivalent in scope; the board-level committee under paragraph 8.3 must deliberate the outcome.' },
    'BNM-RMIT-14.2': { title: 'External network resilience and risk assessment at least every three years', requirement: 'Appoint a competent external provider to perform a network resilience and risk assessment (NRA) at least once every three years or on material change in network design, whichever is earlier, including adherence to paragraphs 10.36–10.43; the board-level committee under paragraph 8.3 must deliberate the outcome.' },
    'BNM-RMIT-15.1': { title: 'Annual cybersecurity awareness education for all staff', requirement: 'Provide adequate and regular technology and cybersecurity awareness education for all staff, measure its effectiveness, conduct it at least annually reflecting the evolving threat landscape, and include third-party service providers where appropriate.' },
    'BNM-RMIT-15.2': { title: 'Continuous training and certification for technology, cyber and risk staff', requirement: 'Provide adequate and continuous training for staff in technology operations, cybersecurity and risk management so that they are competent and suitably certified.' },
    'BNM-RMIT-15.3': { title: 'Regular technology training for board members', requirement: 'Provide board members with regular training and information on technology developments to enable effective oversight.' },
    'BNM-RMIT-16.1': { title: 'Notify BNM before introducing or enhancing digital services', requirement: 'Notify BNM in accordance with paragraphs 16.2–16.7 before introducing new digital services or enhancing existing ones.', note: 'Paragraph 16.7 (G): digital services or enhancements may be launched immediately after the notification is submitted and paragraphs 16.2–16.6 are complied with.' },
    'BNM-RMIT-16.2': { title: 'Contents of a first-time digital services notification', requirement: 'An institution offering digital services for the first time must complete the paragraph 16.4 measures and submit (a) a risk assessment and management strategies; (b) security arrangements and controls; (c) significant terms and conditions; (d) a client charter; (e) a privacy policy statement; and (f) any finalised outsourcing, website link or third-party alliance arrangements.' },
    'BNM-RMIT-16.3': { title: 'Simplified notification for enhancements meeting Appendix 6 criteria', requirement: 'Enhancements meeting the Appendix 6 criteria are subject to simplified notification, submitting (a) a description of the enhancements; and (b) a risk assessment including impact and mitigations.' },
    'BNM-RMIT-16.4': { title: 'Independent external assurance and readiness confirmation before notifying', requirement: 'For enhancements not eligible for simplified notification, before notifying BNM (a) engage an independent external party to provide assurance on technology risks and security controls (Appendix 7 Part A); and (b) provide a readiness confirmation by the CISO, a senior management officer or the board chair or designated committee (Appendix 7 Part B).' },
    'BNM-RMIT-16.5': { title: 'Competent assurance provider with a good track record', requirement: 'Ensure the independent external party providing assurance is competent with a good track record, and that the assurance addresses and complies with Appendix 7 Parts C and D.' },
    'BNM-RMIT-16.6': { title: 'Provide documents to BNM on request', requirement: 'Provide relevant documents for BNM’s review when required.' },
    'BNM-RMIT-17.1': { title: 'Consult BNM before first adopting public cloud or emerging technology for critical systems', requirement: 'Consult BNM before the first-time adoption of public cloud or emerging technology for critical systems, demonstrating that specific risks are addressed; beforehand, (a) perform a comprehensive risk assessment (paragraph 10.50 and Appendix 10 for public cloud, Appendix 9 for emerging technology, in the Appendix 7 Part A format); (b) obtain a readiness confirmation (Appendix 7 Part B); and (c) perform a third-party pre-implementation review, covering Appendix 7 Part C for higher-risk services such as those processing customer information or transmitting data cross-border.' },
    'BNM-RMIT-17.2': { title: 'Notify BNM of subsequent public cloud or emerging technology adoption', requirement: 'Notify BNM of subsequent adoption of public cloud or emerging technology for critical systems, updating the paragraph 17.1 information and demonstrating that (a) the first-time consultation raised no BNM concerns; (b) the TRMF has been enhanced for these risks; (c) independent assurance on the relevant risk management framework is in place; and (d) incident response plans are sufficient.', note: 'Paragraph 17.3 (G): no notification is needed for enhancements to existing adoption that do not materially alter prior assessments and representations to BNM.' },
    'BNM-RMIT-17.4': { title: 'Comply promptly with BNM directions on consultation, notification or Appendices 9 and 10', requirement: 'BNM may direct an institution to consult under paragraph 17.1, notify under paragraph 17.2, or observe Appendix 9 or 10 and explain deviations, including for non-critical systems; the institution must comply promptly and to BNM’s satisfaction.' },
    'BNM-RMIT-17.5': { title: 'Include cloud and emerging technology roadmap in the annual outsourcing plan', requirement: 'Include the roadmap for adopting cloud services or emerging technology (critical and non-critical systems) in the annual outsourcing plan submitted under the Outsourcing policy document or IT Profile reporting, and document the paragraph 10.50 or Appendix 9 risk assessment for BNM’s review on request.' },
    'BNM-RMIT-18.1': { title: 'Submit gap analysis and action plan within 90 days of issuance', requirement: 'Perform a gap analysis against this policy document with an action plan, timeline and milestones, and submit it to BNM no later than 90 days after the issuance date; institutions that submitted under the previous version must identify and address new gaps against the revised requirements and make an updated annual compliance assessment available on request.', note: 'The deadline is the issuance date of 25 September 2026 plus 90 days. Paragraph 18.2 specifies the recipient: the Financial Conglomerates Supervision, Banking Supervision, Insurance and Takaful Supervision or Payment Services Oversight department, as applicable.' }
  }
});

/* ---- Equivalence groups (data/equivalence.js) ---- */
HKCC.addI18n('en', {
  equivalence: {
    ...Object.fromEntries([1, 2, 3, 4, 5, 6].map(n => [`eq-mas-cyber-hygiene-4.${n}`, {
      rationale: `Paragraph 4.${n} is identical in all three Notices on Cyber Hygiene; they differ only in addressee (banks, capital markets financial institutions and licensed digital token service providers).`
    }])),
    'eq-sfc-2fa-login': { rationale: 'Both require two-factor authentication for client account login, with the same definition of two-factor authentication; platform client accounts are accessed over the internet, so the scope is the same.' },
    'eq-sfc-login-password-delivery': { rationale: 'The two paragraphs are word for word the same apart from how each document names the regulated person.' },
    'eq-sfc-network-segmentation': { rationale: 'The two paragraphs are word for word the same apart from the examples of critical systems; both require network segmentation through a DMZ with multi-tiered firewalls.' },
    'eq-sfc-patch-one-month': { rationale: 'Both require timely monitoring and evaluation of patches, testing as soon as practicable, and deployment within one month of completing testing — the same timeframe.' },
    'eq-sfc-incident-escalation': { rationale: 'Both require written policies and procedures for escalating suspected or actual cybersecurity incidents internally and externally, with external parties including clients and the SFC.' },
    'eq-bnm-rmit-10.31': { rationale: 'The same RMiT paragraph 10.31, split into two controls because e-money issuers, merchant acquirers and intermediary remittance institutions must comply only when designated as NCII.' },
    'eq-bnm-rmit-13.3': { rationale: 'The same RMiT paragraph 13.3, split into two controls because under paragraph 2.2(c) the three payment-type institutions must comply only when designated as NCII.' }
  }
});

/* ---- Overlaps and their deltas (data/overlaps.js) ---- */
HKCC.addI18n('en', {
  overlaps: {
    'ov-incident-notify-mas-apra': { delta: {
      'MAS-N05-7': 'A far shorter deadline: notify MAS within 1 hour of discovering a relevant incident, against APRA’s 72 hours after becoming aware. A relevant incident also covers system malfunctions with a severe and widespread impact on operations or customer service, not only information security incidents.',
      'APRA-234-35': 'A wider trigger: any information security incident that materially affected, or had the potential to materially affect, the entity or its customers, financially or non-financially — not only incidents that have already had a severe impact; and any information security incident already notified to another regulator in Australia or elsewhere. An incident reported to MAS must still be notified to APRA within 72 hours.'
    } },
    'ov-incident-plan-mas-apra': { delta: {
      'MAS-TRMG-12.3': 'The plan should enable swift isolation and neutralisation of the threat and secure resumption of affected services; the control deficiencies behind the incident should be investigated and its full impact evaluated; cyber intelligence and lessons learnt should be used to enhance controls or the plan.',
      'APRA-234-25': 'Mechanisms for escalating and reporting incidents to the Board, other governing bodies and the individuals responsible for incident management and oversight. It is a binding prudential standard (“must”), whereas the MAS TRM Guidelines are guidance (“should”).'
    } },
    'ov-cirp-bnm-apra': { delta: {
      'BNM-RMIT-11.13': 'A Cyber Emergency Response Team (CERT) with defined governance, reporting structure, roles and invocation procedures; preservation of sufficient forensic evidence; containment and eradication; recovery through multiple strategies and contingency plans; and long-term mitigations after the incident.',
      'APRA-234-25': 'Explicit mechanisms for escalating and reporting information security incidents to the Board and other governing bodies.'
    } },
    'ov-cirp-bnm-mas': { delta: {
      'BNM-RMIT-11.13': 'A Cyber Emergency Response Team (CERT) with defined governance, reporting structure, roles, invocation and escalation procedures; preservation of sufficient forensic evidence; recovery through multiple strategies and contingency plans. It is mandatory (“must”), whereas the MAS TRM Guidelines are guidance (“should”).',
      'MAS-TRMG-12.3': 'Communication, coordination and response procedures for plausible cyber threat scenarios; cyber intelligence used to enhance existing controls or the plan.'
    } },
    'ov-ir-testing-bnm-apra': { delta: {
      'BNM-RMIT-11.16': 'Testing by cyber drill involving board members, senior management and relevant third-party service providers; out-of-band communication tested; scenarios covering escalation, internal and external communication and decision-making at different impact levels, and the readiness of CERT and third parties to support recovery; results reported to the board in a timely manner.',
      'APRA-234-26': 'An annual review of the response plans, not only a test, to ensure they remain effective and fit-for-purpose.'
    } },
    'ov-incident-report-mas-ci': { delta: {
      'MAS-N05-8': 'Prescribed report content: an executive summary, root cause analysis, the impact on compliance with laws and regulations, operations and customer service, and the remedial measures taken against the root cause and its consequences. It covers relevant incidents, including system malfunctions, and MAS may allow a longer period.',
      'CI-CAT3-4': 'The report must use the specified form (Annex F or a sector-specific form) and be submitted through the designated secure channel.'
    } }
  }
});

/* ---- Mainland China: cybersecurity, data security and personal information laws; NFRA; CSRC ---- */
HKCC.addI18n('en', {
  jurisdictions: {
    cn: { label: 'Mainland China' }
  },
  licenses: {
    'cn-bank': { group: 'NFRA-regulated institutions', label: 'Banking financial institution', note: 'Policy banks, commercial banks, rural cooperative banks, rural credit cooperatives, financial asset management companies, enterprise group finance companies, financial leasing companies, auto finance companies, consumer finance companies, money brokers, trust companies and wealth management companies; triggers the NFRA Data Security Measures' },
    'cn-insurer': { group: 'NFRA-regulated institutions', label: 'Insurance institution', note: 'Insurance companies, insurance asset management companies and insurance group (holding) companies; triggers the NFRA Data Security Measures' },
    'cn-securities': { group: 'CSRC-regulated institutions', label: 'Securities and futures business institution', note: 'Securities companies, futures companies, fund management companies and similar (Article 71(2)); triggers the CSRC Network and Information Security Measures' },
    'cn-sf-core': { group: 'CSRC-regulated institutions', label: 'Securities and futures market core institution', note: 'Securities and futures exchanges, securities depositories and clearing houses and other institutions performing public market functions or operating industry-wide IT infrastructure (Article 71(1)); triggers the CSRC Network and Information Security Measures, including the articles that apply to core institutions only' },
    'cn-other': { group: 'Other', label: 'Other network operator or data processor', note: 'For example a non-bank payment institution, a fintech company or a service provider to financial institutions; only the cross-sector laws, administrative regulations and CAC measures apply' }
  },
  attributes: {
    'cn-ciio': { label: 'Identified as a critical information infrastructure (CII) operator', note: 'Identified and notified by the protection department under its identification rules (CII Regulations, Article 10); triggers Cybersecurity Law Chapter III Section 2, Chapter III of the CII Regulations and Chapter V of the CSRC Measures' },
    'cn-personal-info': { label: 'Processes personal information', note: 'Triggers the Personal Information Protection Law and the personal information provisions of the other measures' },
    'cn-pi-volume': { label: 'Processes personal information in a volume reaching the CAC threshold', note: 'Triggers PIPL Article 40 (domestic storage) and Article 52 (personal information protection officer)' },
    'cn-pi-10m': { label: 'Processes personal information of 10 million or more individuals', note: 'Triggers Article 28 of the Network Data Security Regulations, which applies the Article 30 and 32 obligations of important data processors' },
    'cn-important-data': { label: 'Processes important data (important data processor)', note: 'Important data identified and declared under national rules and notified or published as such by the relevant region or department; triggers Data Security Law Articles 27(2) and 30 and Chapter IV of the Network Data Security Regulations' },
    'cn-cross-border': { label: 'Provides personal information or important data outside mainland China', note: 'Including to an overseas parent, group company or service provider; triggers the cross-border data provisions' },
    'cn-outsourcing': { label: 'Entrusts data processing to third parties or outsources IT services', note: 'Triggers the entrusted processing, outsourcing and supply chain provisions' },
    'cn-ai': { label: 'Uses artificial intelligence or algorithmic models', note: 'Triggers Articles 50–52 of the NFRA Data Security Measures' }
  },
  sources: {
    'cn-csl': { regulator: 'NPCSC' },
    'cn-dsl': { regulator: 'NPCSC' },
    'cn-pipl': { regulator: 'NPCSC' },
    'cn-ciio': { regulator: 'State Council' },
    'cn-ndsr': { regulator: 'State Council' }
  },
  equivalence: {
    'eq-cn-pipl-40': { rationale: 'The same PIPL Article 40, which applies to CII operators or to processors handling personal information above the CAC threshold; the engine cannot express “or”, so it is split into two controls.' }
  },
  overlaps: {
    'ov-cn-incident-report-nfra-cac': { delta: {
      'CN-NFRA-DS-69': 'A shorter deadline and a different recipient: report a data security incident to the NFRA or its local office within 2 hours of occurrence and submit a formal written report within 24 hours; there is no “relatively major or above” threshold; for an especially major incident, report progress every 2 hours until handling ends and also report to the local public security authority.',
      'CN-CIR-4': 'Grade the incident first under the Cybersecurity Incident Grading Guide; a relatively major or more serious cybersecurity incident (not only a data security incident) must be reported to the provincial cyberspace administration within 4 hours; suspected crimes must be reported to the public security authority.'
    } },
    'ov-cn-incident-summary-nfra-cac': { delta: {
      'CN-NFRA-DS-69': 'A shorter deadline: submit the assessment, summary and improvement report to the NFRA or its local office within 5 working days after handling ends (the CAC allows 30 days).',
      'CN-CIR-8': 'Prescribed content: the cause, emergency response measures, harm caused, accountability, rectification and lessons learnt, submitted through the original reporting channel.'
    } },
    'ov-cn-pi-breach-nfra-pipl': { delta: {
      'CN-NFRA-DS-63': 'Must also be reported to the NFRA or its local office (PIPL requires notice only to the departments performing personal information protection duties).',
      'CN-PIPL-57': 'The notice must also include the processor’s contact details.'
    } },
    'ov-cn-risk-report-nfra-ndsr': { delta: {
      'CN-NFRA-DS-74': 'Required whether or not the institution processes important data; a fixed deadline (by 15 January each year) and submitted to the NFRA or its local office; must also cover data security governance, entrusted and joint processing, data security assessments and reviews, and data security complaints.',
      'CN-NDSR-33': 'Submitted to the competent authorities at provincial level or above; must state the processor’s network data security body and officer, the purpose, categories, volume, methods, scope, retention period and storage location of important data, and the effectiveness of encryption, backup, labelling, access control and authentication measures.'
    } },
    'ov-cn-risk-assessment-dsl-ndsr': { delta: {
      'CN-NDSR-33': 'The frequency is set at once every year (the Data Security Law says “regularly”); the report goes to the competent authorities at provincial level or above and expands to seven items, including the data security body and officer, the effectiveness of technical measures, risk assessments of providing or entrusting important data, and cross-border transfers.'
    } },
    'ov-cn-data-officer-dsl-ndsr': { delta: {
      'CN-NDSR-30': 'Sets out three duties of the network data security body (policies and incident plans; risk monitoring, assessment, drills and training; handling complaints and reports); the officer must have relevant expertise and management experience, be a member of management and have the right to report directly to the competent authorities.'
    } },
    'ov-cn-ir-plan-csl-ciio': { delta: {
      'CN-CSL-36-4': 'CII operators must drill the incident response plan regularly.',
      'CN-CSL-27': 'Promptly deal with security risks such as system vulnerabilities, viruses, network attacks and intrusions; when an incident occurs, activate the plan immediately, take remedial measures and report to the competent authorities as required.'
    } },
    'ov-cn-mlps-csrc-csl': { delta: {
      'CN-CSRC-14': 'Expressly requires grading and filing, graded assessment and security construction of networks and information systems, and reporting the progress of graded protection work to the CSRC and its local offices.',
      'CN-CSL-23-1': 'Formulate internal security management policies and operating procedures, and designate the person responsible for cybersecurity.'
    } },
    'ov-cn-logs-csrc-csl': { delta: {
      'CN-CSRC-18-2': 'Business logs of important information systems must be kept for at least five years (system logs, as under the Cybersecurity Law, for at least six months); logs must support fault analysis, internal control and investigation and evidence-gathering.',
      'CN-CSL-23-3': 'Technical measures to monitor and record network operating status and cybersecurity incidents.'
    } },
    'ov-cn-ciio-org-csrc': { delta: {
      'CN-CSRC-44': 'Appoint a person responsible for network and information security for each CII, identify key cybersecurity posts and staff them adequately.',
      'CN-CIIO-14': 'A dedicated security management body must be “established” (the CSRC Measures allow a designated body or department).'
    } },
    'ov-cn-capacity-csrc': { delta: {
      'CN-CSRC-48': 'CII performance capacity must be at least three times the historical peak (twice for other important information systems), and trading-hours network bandwidth at least twice the past year’s peak usage; continuous monitoring with timely upgrades and expansion.',
      'CN-CSRC-21': 'Stress test at least once a year and promptly during significant market volatility; define the test plan, scenarios and indicators under industry standards and keep test reports for at least five years.'
    } },
    'ov-cn-dr-csrc': { delta: {
      'CN-CSRC-49': 'CII operators must build both an intra-city and a remote disaster recovery centre with synchronised data (the general requirement is either one).'
    } }
  },
  controls: {
    /* Cybersecurity Law */
    'CN-CSL-23-1': { clause: 'Article 23, item (1)', title: 'Graded protection: security management policies and a designated cybersecurity lead', requirement: 'Under the Multi-Level Protection Scheme (MLPS), formulate internal security management policies and operating procedures, designate the person responsible for cybersecurity and assign cybersecurity protection responsibilities.', note: 'The detailed MLPS requirements are set by national standards such as GB/T 22239-2019 Information Security Technology — Baseline for Classified Protection of Cybersecurity (grading, filing, construction and rectification, graded assessment); this tool does not yet list that standard item by item.' },
    'CN-CSL-23-2': { clause: 'Article 23, item (2)', title: 'Technical measures against viruses, network attacks and intrusions', requirement: 'Under the MLPS, take technical measures to prevent computer viruses, network attacks, network intrusions and other acts endangering cybersecurity.' },
    'CN-CSL-23-3': { clause: 'Article 23, item (3)', title: 'Monitor and record network status and incidents; keep network logs for at least six months', requirement: 'Under the MLPS, take technical measures to monitor and record network operating status and cybersecurity incidents, and keep the relevant network logs for no less than six months as required.' },
    'CN-CSL-23-4': { clause: 'Article 23, item (4)', title: 'Data classification, and backup and encryption of important data', requirement: 'Under the MLPS, take measures such as data classification and the backup and encryption of important data.' },
    'CN-CSL-27': { clause: 'Article 27', title: 'Cybersecurity incident response plan; respond to and report incidents immediately', requirement: 'Formulate a cybersecurity incident response plan and promptly deal with risks such as system vulnerabilities, viruses, network attacks and intrusions; when an incident endangering cybersecurity occurs, activate the plan immediately, take remedial measures and report to the competent authorities as required.', note: 'The deadlines, recipients and content of reports are set by the Administrative Measures for National Cybersecurity Incident Reporting (CN-CIR-*).' },
    'CN-CSL-42': { clause: 'Article 42', title: 'Keep user information strictly confidential and maintain a user information protection system', requirement: 'Keep collected user information strictly confidential and establish a sound user information protection system; when processing personal information, comply with this Law, the Civil Code and the Personal Information Protection Law.' },
    'CN-CSL-44-2': { clause: 'Article 44(2)', title: 'Secure collected personal information; remedy, inform users and report on leakage', requirement: 'Take technical and other necessary measures to keep collected personal information secure and prevent leakage, damage or loss; where it occurs or may occur, take remedial measures immediately, inform users promptly and report to the competent authorities as required.' },
    'CN-CSL-35': { clause: 'Article 35', title: 'Security measures for CII planned, built and used in step with the CII', requirement: 'When building critical information infrastructure, ensure it can support stable and continuous business operation, and that security technical measures are planned, built and brought into use at the same time.' },
    'CN-CSL-36-1': { clause: 'Article 36, item (1)', title: 'Dedicated security management body and lead; background checks on the lead and key personnel', requirement: 'In addition to the Article 23 obligations, CII operators must set up a dedicated security management body and security lead, and conduct security background checks on the lead and personnel in key positions.' },
    'CN-CSL-36-2': { clause: 'Article 36, item (2)', title: 'Regular cybersecurity education, technical training and skills assessment', requirement: 'CII operators must regularly provide cybersecurity education, technical training and skills assessment for their staff.' },
    'CN-CSL-36-3': { clause: 'Article 36, item (3)', title: 'Disaster recovery backup of important systems and databases', requirement: 'CII operators must maintain disaster recovery backups of important systems and databases.' },
    'CN-CSL-36-4': { clause: 'Article 36, item (4)', title: 'Cybersecurity incident response plan with regular drills', requirement: 'CII operators must formulate a cybersecurity incident response plan and drill it regularly.' },
    'CN-CSL-37': { clause: 'Article 37', title: 'National security review for procurement that may affect national security', requirement: 'Where CII operators procure network products and services that may affect national security, the procurement must pass the national security review organised by the CAC together with the relevant State Council departments.' },
    'CN-CSL-38': { clause: 'Article 38', title: 'Security and confidentiality agreements with providers', requirement: 'CII operators procuring network products and services must sign security and confidentiality agreements with the providers, setting out security and confidentiality obligations and responsibilities.' },
    'CN-CSL-39': { clause: 'Article 39', title: 'Store personal information and important data in mainland China; security assessment before export', requirement: 'Personal information and important data collected and generated by CII operators in their operations in mainland China must be stored in mainland China; where provision overseas is genuinely necessary for business, a security assessment must be conducted under the measures formulated by the CAC and the relevant State Council departments.' },
    'CN-CSL-40': { clause: 'Article 40', title: 'Annual cybersecurity testing and assessment, reporting results and improvements', requirement: 'CII operators must, themselves or through a cybersecurity service provider, test and assess the security of their networks and potential risks at least once a year, and report the results and improvement measures to the department responsible for CII security protection.' },

    /* Data Security Law */
    'CN-DSL-27-1': { clause: 'Article 27(1)', title: 'Whole-process data security management system, training and technical measures', requirement: 'When carrying out data processing, establish a sound whole-process data security management system, organise data security education and training and take technical and other necessary measures to protect data; where processing uses the internet or other information networks, fulfil these obligations on the basis of the MLPS.' },
    'CN-DSL-27-2': { clause: 'Article 27(2)', title: 'Important data processors designate a data security officer and management body', requirement: 'Processors of important data must designate the person responsible for data security and the management body, and implement data security protection responsibilities.' },
    'CN-DSL-29': { clause: 'Article 29', title: 'Monitor data security risks; handle incidents immediately, inform users and report', requirement: 'Strengthen risk monitoring during data processing and take remedial measures immediately when data security defects or vulnerabilities are found; when a data security incident occurs, take handling measures immediately, inform users promptly and report to the competent authorities as required.' },
    'CN-DSL-30': { clause: 'Article 30', title: 'Important data processors conduct regular risk assessments and submit reports', requirement: 'Processors of important data must regularly assess the risks of their data processing as required and submit risk assessment reports to the competent authorities, covering the categories and volume of important data processed, the processing carried out, the data security risks faced and the responses to them.' },
    'CN-DSL-31': { clause: 'Article 31', title: 'Security management of important data exports', requirement: 'Exports of important data collected and generated in mainland China by CII operators are governed by the Cybersecurity Law; for other data processors, by the measures formulated by the CAC together with the relevant State Council departments.' },
    'CN-DSL-36': { clause: 'Article 36', title: 'No provision of domestic data to foreign judicial or law enforcement bodies without approval', requirement: 'Without the approval of the competent authorities of the People’s Republic of China, no organisation or individual in mainland China may provide data stored in mainland China to a foreign judicial or law enforcement body; such requests are handled by the competent authorities.', note: 'Particularly relevant for cross-border financial groups: requests from overseas regulators, courts or law enforcement for data held in mainland China require prior approval from the Chinese authorities. PIPL Article 41 contains the same rule for personal information.' },

    /* Personal Information Protection Law */
    'CN-PIPL-51-1': { clause: 'Article 51, item (1)', title: 'Internal personal information protection policies and operating procedures', requirement: 'Having regard to the purpose and method of processing, the categories of personal information, the impact on individuals’ rights and the security risks, formulate internal management policies and operating procedures to keep processing lawful and prevent unauthorised access and leakage, tampering or loss of personal information.' },
    'CN-PIPL-51-2': { clause: 'Article 51, item (2)', title: 'Classified management of personal information', requirement: 'Manage personal information by category.' },
    'CN-PIPL-51-3': { clause: 'Article 51, item (3)', title: 'Encryption, de-identification and other security technical measures', requirement: 'Take appropriate security technical measures such as encryption and de-identification to protect personal information.' },
    'CN-PIPL-51-4': { clause: 'Article 51, item (4)', title: 'Reasonable access permissions for personal information processing; regular security training', requirement: 'Set reasonable operating permissions for personal information processing and regularly provide security education and training for staff.' },
    'CN-PIPL-51-5': { clause: 'Article 51, item (5)', title: 'Personal information security incident response plan', requirement: 'Formulate and implement a personal information security incident response plan.' },
    'CN-PIPL-21': { clause: 'Article 21', title: 'Entrusted processing: agree the purpose and safeguards, and supervise the entrusted party', requirement: 'When entrusting the processing of personal information, agree with the entrusted party the purpose, period, method, categories of personal information, protective measures and both parties’ rights and obligations, and supervise its processing; the entrusted party must not exceed what was agreed, must return or delete the information when the contract ends and may not sub-entrust without consent.', note: 'Article 59 also requires the entrusted party to take the necessary measures to secure the personal information it processes and to help the processor meet its obligations under this Law.' },
    'CN-PIPL-28': { clause: 'Article 28', title: 'Process sensitive personal information (including financial accounts) only for specific, necessary purposes with strict protection', requirement: 'Sensitive personal information includes biometrics, religious beliefs, specific identities, medical and health information, financial accounts, whereabouts and the personal information of minors under 14; it may be processed only for a specific purpose, with sufficient necessity and under strict protective measures.', note: 'Financial account information held by financial institutions is sensitive personal information; processing it also requires the individual’s separate consent (Article 29) and a prior personal information protection impact assessment (Article 55(1)).' },
    'CN-PIPL-47': { clause: 'Article 47', title: 'Delete personal information when the purpose is achieved or the retention period expires', requirement: 'Proactively delete personal information when the purpose has been achieved, cannot be achieved or no longer requires it, when products or services cease or the retention period expires, when consent is withdrawn, or when processing breaches law or agreement; where a statutory retention period has not expired or deletion is technically difficult, stop all processing other than storage and necessary security measures.', note: 'Article 19: unless laws or administrative regulations provide otherwise, personal information may be kept only for the shortest period necessary to achieve the purpose of processing.' },
    'CN-PIPL-38': { clause: 'Article 38', title: 'Personal information exports must meet a statutory condition, with equivalent protection by the overseas recipient', requirement: 'Where it is genuinely necessary to provide personal information outside mainland China, meet one of these conditions: pass the CAC security assessment; obtain personal information protection certification from a professional body; conclude the CAC standard contract with the overseas recipient; or another condition set by law, administrative regulation or the CAC. Take the necessary measures so that the overseas recipient’s processing meets the protection standards of this Law.', note: 'Article 39 also requires telling individuals the overseas recipient’s name, contact details, purpose and method of processing, categories of personal information and how to exercise their rights, and obtaining separate consent; exports also require a prior personal information protection impact assessment (Article 55(4)).' },
    'CN-PIPL-40': { clause: 'Article 40', title: 'Store personal information in mainland China; exports must pass the CAC security assessment', requirement: 'CII operators and processors handling personal information above the CAC threshold must store personal information collected and generated in mainland China within mainland China; where provision overseas is genuinely necessary, it must pass the CAC security assessment, unless laws, administrative regulations or the CAC exempt it.' },
    'CN-PIPL-40-VOL': { clause: 'Article 40', title: 'Store personal information in mainland China; exports must pass the CAC security assessment', requirement: 'CII operators and processors handling personal information above the CAC threshold must store personal information collected and generated in mainland China within mainland China; where provision overseas is genuinely necessary, it must pass the CAC security assessment, unless laws, administrative regulations or the CAC exempt it.' },
    'CN-PIPL-52': { clause: 'Article 52', title: 'Appoint a personal information protection officer and file their name and contact details', requirement: 'Processors handling personal information above the CAC threshold must appoint a personal information protection officer to supervise processing and the protective measures taken, publish the officer’s contact details and file the officer’s name and contact details with the departments performing personal information protection duties.' },
    'CN-PIPL-54': { clause: 'Article 54', title: 'Regular personal information protection compliance audits', requirement: 'Regularly audit the compliance of personal information processing with laws and administrative regulations.' },
    'CN-PIPL-55': { clause: 'Article 55', title: 'Prior personal information protection impact assessment in specified cases, with records', requirement: 'Conduct a personal information protection impact assessment in advance, and keep a record of the processing, when processing sensitive personal information; using personal information for automated decision-making; entrusting processing, providing personal information to another processor or disclosing it; providing personal information overseas; or carrying out other processing with a significant impact on individuals’ rights.', note: 'Article 56: the assessment must cover whether the purpose and method are lawful, legitimate and necessary, the impact on individuals’ rights and the security risks, and whether the protective measures are lawful, effective and proportionate to the risk; assessment reports and processing records must be kept for at least three years.' },
    'CN-PIPL-57': { clause: 'Article 57', title: 'On leakage, tampering or loss of personal information, remedy immediately and notify the authorities and individuals', requirement: 'Where personal information is or may be leaked, tampered with or lost, take remedial measures immediately and notify the departments performing personal information protection duties and the individuals. The notice must state the categories of information, the cause and possible harm, the remedial measures taken and the steps individuals can take, and the processor’s contact details. Individuals need not be notified if the measures effectively avoid harm, unless the authorities require it.' }
  }
});
HKCC.addI18n('en', {
  controls: {
    /* CII Regulations */
    'CN-CIIO-11': { clause: 'Article 11', title: 'Report material changes to the CII to the protection department promptly', requirement: 'Where the CII changes materially in a way that may affect its identification, promptly report the situation to the protection department, which completes re-identification within 3 months of receiving the report.' },
    'CN-CIIO-12': { clause: 'Article 12', title: 'Security measures planned, built and used in step with the CII', requirement: 'Security protection measures must be planned, built and brought into use at the same time as the critical information infrastructure.' },
    'CN-CIIO-13': { clause: 'Article 13', title: 'Cybersecurity protection policies and accountability; the principal leader bears overall responsibility', requirement: 'Establish sound cybersecurity protection policies and an accountability system and provide the necessary staff, funding and resources; the operator’s principal leader bears overall responsibility for CII security protection, leads protection work and the handling of major cybersecurity incidents, and organises the resolution of major cybersecurity issues.' },
    'CN-CIIO-14': { clause: 'Article 14', title: 'Dedicated security management body; background checks on its head and key personnel', requirement: 'Set up a dedicated security management body and conduct security background checks on its head and on personnel in key positions; the public security and state security authorities assist with the checks.' },
    'CN-CIIO-15': { clause: 'Article 15', title: 'Eight statutory duties of the dedicated security management body', requirement: 'The dedicated security management body is responsible for the entity’s CII security protection, including: cybersecurity management and evaluation policies and the CII protection plan; protective capability building, monitoring, testing and risk assessment; the entity’s incident response plan, regular drills and incident handling; identifying key cybersecurity posts and assessing performance; cybersecurity education and training; personal information and data security protection; security management of design, construction, operation and maintenance services; and reporting cybersecurity incidents and important matters as required.' },
    'CN-CIIO-16': { clause: 'Article 16', title: 'Fund and staff the dedicated body; involve it in cybersecurity and IT decisions', requirement: 'Fund the dedicated security management body and staff it appropriately; decisions relating to cybersecurity and informatisation must involve personnel from the dedicated body.' },
    'CN-CIIO-17': { clause: 'Article 17', title: 'Annual cybersecurity testing and risk assessment, with prompt rectification and reporting', requirement: 'Test and assess the cybersecurity risks of the CII at least once a year, themselves or through a cybersecurity service provider, rectify the issues found promptly and report as the protection department requires.' },
    'CN-CIIO-18': { clause: 'Article 18(1)', title: 'Report major cybersecurity incidents or threats to the protection department and the police', requirement: 'Where a major cybersecurity incident occurs in the CII or a major cybersecurity threat is discovered, report to the protection department and the public security authority as required.', note: 'The deadline is set by Article 4(2) of the Administrative Measures for National Cybersecurity Incident Reporting: a relatively major or more serious incident involving CII must be reported to the protection department and the public security authority within 1 hour (CN-CIR-4-CII).' },
    'CN-CIIO-19': { clause: 'Article 19', title: 'Prefer secure and trustworthy products; national security review where procurement may affect national security', requirement: 'Give priority to procuring secure and trustworthy network products and services; where a procurement may affect national security, it must pass security review under national cybersecurity rules.' },
    'CN-CIIO-20': { clause: 'Article 20', title: 'Security and confidentiality agreements with providers, and supervision of their performance', requirement: 'When procuring network products and services, sign security and confidentiality agreements with the providers setting out their technical support and security and confidentiality obligations and responsibilities, and supervise their performance.' },
    'CN-CIIO-21': { clause: 'Article 21', title: 'Report mergers, divisions or dissolutions and dispose of the CII as required', requirement: 'On a merger, division, dissolution or similar event, report promptly to the protection department and dispose of the CII as it requires, ensuring security.' },

    /* Network Data Security Regulations */
    'CN-NDSR-9': { clause: 'Article 9', title: 'Network data protection on the basis of the MLPS: encryption, backup, access control and authentication', requirement: 'On the basis of the MLPS, strengthen network data protection, establish sound network data security management policies, take technical and other necessary measures such as encryption, backup, access control and security authentication to protect network data from tampering, destruction, leakage or illegal acquisition or use, handle network data security incidents, and bear primary responsibility for the security of the data processed.' },
    'CN-NDSR-11-1': { clause: 'Article 11(1)', title: 'Network data security incident response plan; activate it and report when an incident occurs', requirement: 'Establish a sound network data security incident response plan; when an incident occurs, activate the plan immediately, take measures to prevent the harm from spreading and eliminate hazards, and report to the competent authorities as required.' },
    'CN-NDSR-11-2': { clause: 'Article 11(2)', title: 'Notify affected parties of data security incidents that harm them; report suspected crimes', requirement: 'Where a network data security incident harms the lawful rights of individuals or organisations, promptly notify the interested parties of the incident and risks, the consequences and the remedial measures taken, by telephone, text message, instant messaging, email or public notice (unless laws or administrative regulations allow otherwise); report clues to suspected crimes found during handling to the public security or state security authorities and cooperate with investigation and handling.' },
    'CN-NDSR-12': { clause: 'Article 12', title: 'Contracts, supervision and 3-year records when providing or entrusting personal information and important data', requirement: 'When providing personal information or important data to, or entrusting its processing to, another network data processor, agree by contract the purpose, method, scope and security obligations, supervise the recipient’s performance, and keep records of such provision and entrustment for at least 3 years; joint controllers must agree their respective rights and obligations.' },
    'CN-NDSR-27': { clause: 'Article 27', title: 'Regular personal information compliance audits, internal or by a professional body', requirement: 'Regularly audit, internally or through a professional body, the compliance of personal information processing with laws and administrative regulations.' },
    'CN-NDSR-28': { clause: 'Article 28', title: 'Processors of personal information of 10 million or more people take on important data processor duties', requirement: 'Network data processors handling the personal information of 10 million or more individuals must also comply with Article 30 (network data security officer and management body) and Article 32 (reporting on mergers, divisions, dissolution or bankruptcy) of these Regulations, which apply to important data processors.' },
    'CN-NDSR-29-2': { clause: 'Article 29(2)', title: 'Identify and declare important data under national rules', requirement: 'Identify and declare important data under national rules; once data is confirmed as important data by notification or publication by the relevant region or department, perform the corresponding network data security protection responsibilities.', note: 'For banking and insurance institutions, see also the data classification and grading requirements of the NFRA Data Security Measures.' },
    'CN-NDSR-30': { clause: 'Article 30, paragraphs 1 and 2', title: 'Important data processors designate a network data security officer (a member of management) and body', requirement: 'Important data processors must designate a network data security officer and a network data security management body. The body formulates and implements security policies, operating procedures and incident response plans; regularly organises risk monitoring, risk assessment, drills and training and handles risks and incidents; and handles complaints and reports. The officer must have network data security expertise and management experience, be a member of management and have the right to report directly to the competent authorities.', note: 'Article 30(3): processors holding important data of specified types and scale must also conduct security background checks on the network data security officer and personnel in key positions and strengthen their training.' },
    'CN-NDSR-31': { clause: 'Article 31', title: 'Risk assessment before providing, entrusting or jointly processing important data', requirement: 'Before providing, entrusting or jointly processing important data (other than to perform statutory duties or obligations), important data processors must assess the risks, focusing on: whether the purpose, method and scope are lawful, legitimate and necessary; the risks of tampering, destruction, leakage or illegal acquisition or use; the recipient’s integrity and compliance record; whether the contract’s data security terms effectively bind the recipient; whether the technical and management measures effectively prevent the risks; and other matters specified by the competent authorities.' },
    'CN-NDSR-32': { clause: 'Article 32', title: 'Report the important data disposal plan on merger, division, dissolution or bankruptcy', requirement: 'Where a merger, division, dissolution, bankruptcy or similar event may affect the security of important data, take measures to secure the data and report the important data disposal plan and the recipient’s name and contact details to the competent authorities at provincial level or above (or, where unclear, to the provincial-level data security coordination mechanism).' },
    'CN-NDSR-33': { clause: 'Article 33, paragraphs 1 and 2', title: 'Important data processors conduct an annual risk assessment and submit the report', requirement: 'Important data processors must assess the risks of their network data processing every year and submit the report to the competent authorities at provincial level or above. The report covers: basic information on the processor, its network data security body and officer; the purpose, categories, volume, methods, scope, retention period and storage location of important data; security policies and their implementation and the effectiveness of encryption, backup, labelling, access control, authentication and other measures; risks found and incidents handled; risk assessments of providing, entrusting or jointly processing important data; cross-border transfers; and other matters specified by the competent authorities.', note: 'Article 52(2): where an important data risk assessment overlaps with an MLPS graded assessment, the results may be mutually recognised.' },
    'CN-NDSR-35': { clause: 'Article 35', title: 'Personal information exports must meet one of eight conditions', requirement: 'Personal information may be provided outside mainland China only if one of these conditions is met: passing the CAC data export security assessment; personal information protection certification by a professional body; compliance with the CAC standard contract rules; genuine necessity to conclude or perform a contract to which the individual is a party; genuine necessity for cross-border human resources management; genuine necessity to perform statutory duties or obligations; genuine necessity in an emergency to protect life, health or property; or another condition set by law, administrative regulation or the CAC.' },
    'CN-NDSR-37': { clause: 'Article 37', title: 'Important data exports must pass the data export security assessment', requirement: 'Where important data collected and generated in mainland China genuinely needs to be provided overseas, it must pass the CAC data export security assessment; data identified and declared under national rules but not notified or published as important data need not be declared as such for the assessment.' },
    'CN-NDSR-38': { clause: 'Article 38', title: 'Exports must not exceed the purpose, method, scope, categories and volume assessed', requirement: 'After passing the data export security assessment, provision of personal information and important data overseas must not exceed the purpose, method, scope, categories and volume specified in the assessment.' },

    /* Cybersecurity Incident Reporting Measures */
    'CN-CIR-4-CII': { clause: 'Article 4, paragraphs 1 and 2', title: 'Report relatively major or worse incidents involving CII to the protection department and police within 1 hour', requirement: 'On discovering or learning of a cybersecurity incident affecting the entity, grade it under the Cybersecurity Incident Grading Guide; a relatively major or more serious incident involving CII must be reported to the protection department and the public security authority immediately, and no later than 1 hour.', note: 'The annexed Cybersecurity Incident Grading Guide sets four grades — especially major, major, relatively major and general — with quantitative criteria. For example, an overall CII outage of 10 minutes or more or a main-function outage of 30 minutes or more, leakage of personal information of 1 million or more people, or direct economic loss of RMB 5 million or more is a relatively major incident.' },
    'CN-CIR-4': { clause: 'Article 4, paragraphs 1 and 4–6', title: 'Report relatively major or worse incidents to the provincial cyberspace administration within 4 hours, and as sector rules require', requirement: 'On discovering or learning of a cybersecurity incident affecting the entity, grade it under the Cybersecurity Incident Grading Guide; a relatively major or more serious incident must be reported promptly to the provincial cyberspace administration where the entity is located, and no later than 4 hours. Where the sector has specific rules, also report as the sector regulator requires; report suspected crimes to the public security authority promptly.', note: 'The annexed Cybersecurity Incident Grading Guide sets four grades — especially major, major, relatively major and general — with quantitative criteria. For example, an overall CII outage of 10 minutes or more or a main-function outage of 30 minutes or more, leakage of personal information of 1 million or more people, or direct economic loss of RMB 5 million or more is a relatively major incident. Financial institutions must also report under the financial regulators’ rules, such as data security incident reporting by banking and insurance institutions (CN-NFRA-DS-*) and network and information security incident reporting in the securities and futures industry (CN-CSRC-*).' },
    'CN-CIR-5': { clause: 'Article 5', title: 'Require security and IT operations providers by contract to report incidents and assist reporting', requirement: 'Require, by contract or otherwise, organisations and individuals providing cybersecurity, system operation and maintenance or similar services to report cybersecurity incidents they detect promptly and to assist the entity in reporting under these Measures.' },
    'CN-CIR-7': { clause: 'Article 7', title: 'Eight required elements of an incident report, with follow-up reports', requirement: 'A report must include: the entity and the affected systems or facilities; the time, place, type and grade of the incident, its impact and the measures taken (and, for ransomware, the amount, method and date of the ransom demanded); likely developments; a preliminary analysis of the cause; leads for tracing, such as attacker information, attack paths and vulnerabilities; further planned measures and requests for support; preservation of the scene; and other matters. If these cannot be determined in time, report the first two items first and supplement the rest; report new significant developments or investigation progress promptly.' },
    'CN-CIR-8': { clause: 'Article 8', title: 'Submit an incident handling summary report within 30 days of closure', requirement: 'Within 30 days after handling of a cybersecurity incident ends, analyse and summarise its cause, emergency measures, harm caused, accountability, rectification and lessons learnt, and submit an incident handling summary report through the original reporting channel.' }
  }
});
HKCC.addI18n('en', {
  controls: {
    /* NFRA Data Security Measures for Banking and Insurance Institutions */
    'CN-NFRA-DS-9': { clause: 'Article 9', title: 'Data security organisation covering the board, senior management and relevant departments', requirement: 'Establish a data security management structure covering the board of directors (council), senior management and the data security coordination and technical protection departments, with clear roles, working mechanisms and resources.' },
    'CN-NFRA-DS-10': { clause: 'Article 10', title: 'Data security accountability: the principal leader is first responsible, the senior manager in charge directly responsible', requirement: 'Establish a data security accountability system in which the Party committee and the board bear primary responsibility; the principal leader is the person with first responsibility for data security and the senior manager in charge of data security has direct responsibility; define responsibilities at each level, violations and accountability, and implement them.' },
    'CN-NFRA-DS-11': { clause: 'Article 11', title: 'Designate a lead department for data security with eight duties', requirement: 'Designate a lead department for data security, responsible for: data security principles, plans, policies and standards; the data catalogue and data classification and grading; data security assessments and reviews; the incident management mechanism and risk monitoring, warning and handling; data security awareness and training; coordinating internal sharing, external data sourcing, provision of data to others and cross-border transfers, including security management of external data suppliers; reporting important data security matters to the Party committee, board and senior management; and other coordinating duties.' },
    'CN-NFRA-DS-12': { clause: 'Article 12', title: 'Assign data security responsibility by business line: whoever owns the business owns its data security', requirement: 'Under the principle that whoever manages a business manages its data and that data’s security, assign data security management responsibility for each business area and implement data protection requirements.' },
    'CN-NFRA-DS-13': { clause: 'Article 13', title: 'Risk, compliance and audit functions bring data security into enterprise risk management and internal control', requirement: 'The risk management, internal control and compliance and audit functions bring data security into the enterprise-wide risk management and internal control evaluation systems, regularly audit, inspect and evaluate it, and follow up on rectification and accountability.' },
    'CN-NFRA-DS-14': { clause: 'Article 14', title: 'The IT department is the lead department for technical data protection', requirement: 'The IT department leads technical data protection: it builds the technical protection framework, architecture and control baselines; sets technical standards and assesses technical risks; applies protection across the system life cycle from requirements, development and testing to production and monitoring; runs technical incident management and risk monitoring, warning, notification and handling; and researches and applies data security technology.' },
    'CN-NFRA-DS-15': { clause: 'Article 15', title: 'Data security education and training for all staff', requirement: 'Build a sound data security culture and provide data security education and training to all staff to raise awareness and capability.' },
    'CN-NFRA-DS-16': { clause: 'Article 16', title: 'Data classification and grading policy and a dynamically maintained data catalogue', requirement: 'Formulate a data classification and grading protection policy, establish a data catalogue and classification and grading rules, maintain the catalogue dynamically and apply differentiated security measures.', note: 'Article 17: data types include customer data, business data, operating and management data, and system operation and security management data.' },
    'CN-NFRA-DS-18': { clause: 'Article 18', title: 'Grade data as core, important or general (sensitive or other) by importance and sensitivity', requirement: 'According to importance and sensitivity, grade data as core data, important data or general data, with general data further divided into sensitive data and other general data.', note: 'Article 19: where changes in a dataset’s business attributes, importance or potential harm make its grade inappropriate, adjust the grade promptly through a dynamic review and approval mechanism.' },
    'CN-NFRA-DS-20': { clause: 'Article 20', title: 'Data security protection strategy, management measures and whole-life-cycle controls', requirement: 'Formulate a data security protection strategy in line with national policy and the institution’s strategy, and data security management measures that allocate responsibilities and control data processing across its whole life cycle; also set detailed implementing rules for external data sourcing, cooperative sharing and cross-border transfers.' },
    'CN-NFRA-DS-22': { clause: 'Article 22', title: 'Prior data security assessment for sensitive-grade data and for entrustment, sharing and similar activities', requirement: 'Before processing sensitive-grade or higher data, or entrusting, jointly processing, transferring, disclosing or sharing data in ways that significantly affect data subjects, conduct a data security assessment analysing the risks and the impact on data subjects’ rights and evaluating necessity, compliance and the effectiveness of controls.' },
    'CN-NFRA-DS-26': { clause: 'Article 26', title: 'Centralised approval for external data purchase and sourcing, within outsourcing risk management', requirement: 'Set centralised approval rules for purchasing and sourcing external data and manage them within the outsourcing risk management framework, covering demand, security assessment, sourcing, operation, registration and evaluation; verify that data sources are genuine and lawful, assess the supplier’s security capability and risks, and set out both parties’ data security responsibilities.' },
    'CN-NFRA-DS-28': { clause: 'Article 28', title: 'Strict need-to-know authorisation for sensitive-grade data, with access audits', requirement: 'Apply strict authorisation to sensitive-grade or higher data on a business-necessity basis, with closed-loop access management and audits of access; extracting data from production for business needs requires strict approval and a defined period of use or retention. When processing data over the internet or other networks, implement the MLPS, CII protection and cryptography requirements.' },
    'CN-NFRA-DS-29': { clause: 'Article 29', title: 'Centralised control of data sharing and a data security “firewall” between parent and subsidiaries', requirement: 'Centrally control data sharing and assess its necessity, compliance and security; establish a data security “firewall” between the parent bank, insurance group or parent company and its subsidiaries; sharing sensitive-grade or higher data within the group requires the data subject’s authorisation, and services may not be refused because a data subject declines sharing that is not necessary for the product or service.' },
    'CN-NFRA-DS-30': { clause: 'Article 30', title: 'Entrusted processing: contract terms on purpose, scope, safeguards and return or deletion, with records and audits', requirement: 'When entrusting data processing, define the conditions, scenarios and methods of external use, agree by contract the purpose, period, method, data scope, protective measures, both parties’ responsibilities and how the entrusted party returns or deletes the data, and record and audit the processing; the entrusted party may not, without consent, sub-entrust, share externally, or process, train on or divert the data for benefits beyond the contract.' },
    'CN-NFRA-DS-31': { clause: 'Article 31', title: 'Entrusted processing within IT outsourcing management; core functions and primary responsibility not outsourced', requirement: 'Manage entrusted data processing as IT outsourcing; IT management responsibility and primary data security responsibility may not be outsourced, nor may IT strategy, IT risk management, IT internal audit or other functions core to IT competitiveness; strengthen supplier admission and security management where supply chain services process sensitive-grade or higher data.' },
    'CN-NFRA-DS-36': { clause: 'Article 36', title: 'Primary responsibility and security assessment for exports of important data and personal information', requirement: 'When providing important data or personal information collected and generated in mainland China overseas, bear primary data security responsibility and conduct a security assessment under national policy.', note: 'Article 60: when providing personal information overseas, also tell individuals how to exercise their rights against the overseas recipient.' },
    'CN-NFRA-DS-37': { clause: 'Article 37', title: 'Backup strategy; backups kept apart from production and verified for recoverability', requirement: 'Strengthen protection of sensitive-grade or higher data; set a backup strategy, keep backup data separate from production data and strictly control access to backups; set a backup verification plan so that backups are complete and valid and business can be recovered.' },
    'CN-NFRA-DS-38': { clause: 'Article 38', title: 'Data destruction policy; supervise destruction by service providers when entrustment ends', requirement: 'Set a data destruction policy and delete or anonymise data under national and industry rules and agreements with data subjects; when entrusted processing ends, require the service provider to delete the data promptly and verify, for example by on-site inspection, that it is destroyed and unrecoverable.' },
    'CN-NFRA-DS-39': { clause: 'Article 39', title: 'Data security technical protection for big data, cloud, mobile internet and IoT environments', requirement: 'Build a data security technical protection framework and architecture covering heterogeneous environments such as big data, cloud computing, mobile internet and the Internet of Things, define protection strategies and take technical measures.' },
    'CN-NFRA-DS-40': { clause: 'Article 40', title: 'Data protection embedded in the system development life cycle and built in step with systems', requirement: 'Embed data security protection in the system development life cycle, define protection requirements for sensitive-grade or higher data, and plan, build and bring protection measures into use at the same time as the information system.' },
    'CN-NFRA-DS-41': { clause: 'Article 41', title: 'Network security zones and zone protection baselines by data grade', requirement: 'Bring data within the MLPS; divide networks into logical security zones by data grade with zone-specific protection baselines and controls such as content filtering, access control and security monitoring that meet the policy for the highest grade of data handled; rooms and networks storing or transmitting sensitive-grade or higher data need focused protection, physically secured areas and security monitoring and audit at network boundaries and key nodes.' },
    'CN-NFRA-DS-42': { clause: 'Article 42', title: 'Access control over sensitive-grade data across its life cycle; no weaker protection after aggregation', requirement: 'Bring sensitive-grade or higher data within information system protection with effective access control throughout its life cycle; apply the same level of protection to data moving between or shared across zones; after aggregation of such data from multiple sources, apply protection that is stronger than, or at least equal to, that of the highest grade before aggregation.' },
    'CN-NFRA-DS-43-1': { clause: 'Article 43 (access control)', title: 'Access policy for sensitive-grade data; access limited to business need and matched to the data grade', requirement: 'Strictly manage sensitive-grade or higher data with a user access policy, effective authentication and access control technology and controlled data operations; user access must be necessary for the business and match the data’s security grade.' },
    'CN-NFRA-DS-43-2': { clause: 'Article 43 (operation logs and audit)', title: 'Operation logs for sensitive-grade data kept one to three years; audits at least every six months', requirement: 'Log operations on sensitive-grade or higher data (time, user identity, action type, etc.); keep operation logs and their backups for at least three years for core data, at least one year for important and sensitive data, and at least three years where entrusted or joint processing is involved; audit data operations regularly, at intervals of no more than six months.' },
    'CN-NFRA-DS-44': { clause: 'Article 44', title: 'Secure transmission of sensitive-grade data', requirement: 'Transmit sensitive-grade or higher data securely to protect its integrity, confidentiality and availability; when banking and insurance institutions exchange data, the participants must protect the confidentiality, integrity, accuracy, timeliness and security of its transmission and storage.' },
    'CN-NFRA-DS-45': { clause: 'Article 45', title: 'Secure storage of sensitive-grade data; no plaintext storage, transmission or display of authentication data', requirement: 'Store sensitive-grade or higher data securely against ransomware, trojans and backdoors; personal identity authentication data must not be stored, transmitted or displayed in plaintext; maintain disaster recovery backups of sensitive-grade or higher data and test recoverability regularly.' },
    'CN-NFRA-DS-46': { clause: 'Article 46', title: 'Unrecoverable deletion of expired data; full sanitisation of media on disposal or reuse', requirement: 'Delete or destroy sensitive-grade or higher data unrecoverably once its use or retention period ends; protect such data on endpoints and removable media with controlled access, and fully and unrecoverably erase storage when media are disposed of or reused.' },
    'CN-NFRA-DS-47': { clause: 'Article 47', title: 'Componentised, service-based data security technical infrastructure', requirement: 'Build data security technical infrastructure that provides identity management, anonymisation, behaviour monitoring, log audit, data virtualisation and similar functions as components and services, so that security standards are applied consistently across systems.' },
    'CN-NFRA-DS-48': { clause: 'Article 48', title: 'Security testing before go-live; test environments isolated, no unmasked sensitive data in testing', requirement: 'When developing systems, define the data and its grade, access rules and protection needs and implement system security controls; conduct security testing before go-live; isolate test environments from production, and in principle do not use sensitive-grade or higher data in testing without desensitisation.' },
    'CN-NFRA-DS-49': { clause: 'Article 49', title: 'Focused protection of big data platforms with dynamic monitoring and audit of access', requirement: 'Protect big data platforms with high-availability design, hardening and backup, establish authorisation for big data service access and dynamically monitor and audit access.' },
    'CN-NFRA-DS-50': { clause: 'Article 50', title: 'Unified management of AI models; admission of external algorithms; models verifiable, reviewable and traceable', requirement: 'Keep automated decision analysis, model and algorithm development and data labelling transparent and fair; manage AI model development and use centrally, set an admission mechanism for externally sourced algorithmic products, and actively manage model development so that models are verifiable, reviewable and traceable.' },
    'CN-NFRA-DS-51': { clause: 'Article 51', title: 'Data security review before systems and algorithmic models go into use', requirement: 'Before information systems or algorithmic models go into use, review the reasonableness, legitimacy and explainability of the data and model use, the impact on the rights of the parties concerned, ethical risks and the effectiveness of controls.' },
    'CN-NFRA-DS-52': { clause: 'Article 52', title: 'Explanation and disclosure, real-time monitoring and exit plans and drills for AI use', requirement: 'When using AI in business, explain and disclose how data affects decisions, monitor automated processing and system results in real time, and put risk mitigation in place, including an alternative plan for exiting the AI application and emergency plans and drills for security threats.' },
    'CN-NFRA-DS-53': { clause: 'Article 53', title: 'Open banking and third-party data cooperation through a centrally managed gateway or API with least privilege', requirement: 'In open banking, financial ecosystems or third-party data cooperation, isolate the institution’s own risks from external parties; exchange data with external institutions only through a centrally managed external connection platform or APIs, and centrally protect interface design, development, service and operation on a business-necessity, least-privilege basis.' },
    'CN-NFRA-DS-58': { clause: 'Article 58', title: 'Personal information protection impact assessments for high-impact processing; records kept three years', requirement: 'Assess the impact on personal information protection before processing that significantly affects individuals’ rights, covering lawfulness and necessity, impact on rights and security risks, and whether the protective measures are lawful, effective and proportionate; keep assessment reports and processing records for at least three years.' },
    'CN-NFRA-DS-61': { clause: 'Article 61', title: 'Third-party processing of personal information: contractual protection obligations and strict supervision', requirement: 'When entrusting personal information to a third party, set out its protection obligations, measures and duration in the contract, strictly supervise processing within the agreed purpose and method, transmit sensitive personal data to third parties securely, and prohibit sub-entrustment without consent.' },
    'CN-NFRA-DS-63': { clause: 'Article 63', title: 'On leakage, tampering or loss of personal information, remedy immediately, notify individuals and report to the NFRA', requirement: 'Where personal information is or may be leaked, tampered with or lost, take remedial measures immediately and notify the individuals and report to the NFRA or its local office; the notice states the categories of information, the cause and possible harm, and the remedial measures taken and steps individuals can take. Individuals need not be notified if the measures effectively avoid harm, unless the regulator requires it.' },
    'CN-NFRA-DS-64': { clause: 'Article 64', title: 'Data security risk within enterprise-wide risk management', requirement: 'Bring data security risk into the enterprise-wide risk management framework, with defined structures and processes for risk monitoring, risk assessment, incident response and reporting, and incident handling.' },
    'CN-NFRA-DS-65': { clause: 'Article 65', title: 'Monitor nine kinds of data security threat, including privileged account misuse and abnormal flows', requirement: 'Effectively monitor data security threats and proactively assess risks, covering: excessive authorisation or use of privileged system accounts; abnormal access or use of data by insiders; threats to systems or platforms that centralise shared data; abnormal flows of sensitive-grade or higher data between zones; abnormal use of removable media; abnormal processing, leakage, loss or tampering in outsourcing and third-party cooperation; customer data security complaints; negative public opinion on data leaks or impersonation fraud; and other situations that may lead to incidents.' },
    'CN-NFRA-DS-66': { clause: 'Article 66', title: 'Annual data security risk assessment; a full audit by internal audit at least every three years', requirement: 'Assess data security risks once a year; internal audit must perform a full data security audit at least every three years and a special audit after a major data security incident; a professional firm engaged to audit data security may not also supply products or other services to the institution.' },
    'CN-NFRA-DS-68': { clause: 'Article 68', title: 'Data security incident management: plans and drills, grading and handling, reporting and notice, vulnerabilities', requirement: 'Establish data security incident management, internal coordination and incident reporting by service providers and third-party partners, including: an incident response plan with regular training and drills; immediate response, cause analysis, impact assessment and grading after an incident; a grade-based reporting process plus notice to customers and partners as agreed; and immediate investigation and remediation of incidents and of security defects or vulnerabilities in network products and services, ordering providers who conceal defects to correct them and, if they fail or cause serious consequences, removing them and reporting to the NFRA.', note: 'Article 67: data security incidents are graded as especially major, major, relatively major or general by scope and severity, under the annexed Data Security Incident Grading.' },
    'CN-NFRA-DS-69': { clause: 'Article 69', title: 'Report data security incidents to the NFRA within 2 hours, in writing within 24 hours, and summarise within 5 working days', requirement: 'Report a data security incident to the NFRA or its local office within 2 hours of occurrence and submit a formal written report within 24 hours; for an especially major incident, act immediately, inform users and report to the NFRA and the local public security authority, and report progress every 2 hours until handling ends; within 5 working days after handling ends, submit the assessment, summary and improvement report.' },
    'CN-NFRA-DS-71': { clause: 'Article 71', title: 'Submit the important data catalogue to the NFRA and update it on significant change', requirement: 'Submit the important data catalogue to the NFRA or its local office as required, and file an updated catalogue promptly when it changes significantly.' },
    'CN-NFRA-DS-73': { clause: 'Article 73', title: 'Report bulk sharing, entrustment, transfer or sale of sensitive-grade data 20 working days in advance', requirement: 'Report bulk sharing, entrusted processing, transfer by sale or migration of sensitive-grade or higher data to the NFRA or its local office 20 working days before processing or contract signing, unless laws or administrative regulations provide otherwise.' },
    'CN-NFRA-DS-74': { clause: 'Article 74', title: 'Submit the previous year’s data security risk assessment report by 15 January', requirement: 'By 15 January each year, submit the previous year’s data security risk assessment report to the NFRA or its local office, covering data security governance, technical protection, risk monitoring and handling, incidents, entrusted and joint processing, cross-border transfers, data security assessments and reviews, and related complaints.' },

    /* CSRC Network and Information Security Measures */
    'CN-CSRC-9': { clause: 'Article 9(1)', title: 'IT governance and security management system commensurate with business scale and complexity', requirement: 'Maintain a sound IT governance structure and network and information security policy system with internal decision-making, management, execution and oversight mechanisms, so that security management capability matches the scale and complexity of the business.' },
    'CN-CSRC-10': { clause: 'Article 10', title: 'The principal leader is first responsible for network and information security; the leader in charge directly responsible', requirement: 'Designate the principal leader as the person with first responsibility for network and information security and the member of the leadership or senior manager in charge as directly responsible, and establish coordination and decision-making mechanisms that enable them to perform their duties.' },
    'CN-CSRC-11': { clause: 'Article 11', title: 'Designate or establish a lead department for network and information security', requirement: 'Designate or establish a lead department or body for network and information security, responsible for managing important information systems and related infrastructure, drawing up the cybersecurity response plan and organising drills.' },
    'CN-CSRC-12': { clause: 'Article 12', title: 'Staffing and funding commensurate with the business; competent security staff', requirement: 'Provide staff and funding commensurate with the scale and complexity of the business, and ensure security staff have the knowledge and skills their duties require.' },
    'CN-CSRC-13': { clause: 'Article 13', title: 'Sound architecture and adequate capacity; security measures planned, built and used in step', requirement: 'Ensure information systems and infrastructure have a sound architecture and adequate performance, capacity, reliability, scalability and security, with security technical measures planned, built and brought into use at the same time as informatisation work.' },
    'CN-CSRC-14': { clause: 'Article 14', title: 'Implement the MLPS (grading and filing, graded assessment, security construction) and report to the CSRC', requirement: 'Implement the MLPS, carrying out grading and filing, graded assessment and security construction of networks and information systems under national and securities and futures industry requirements, and report the progress of graded protection work to the CSRC and its local offices.' },
    'CN-CSRC-15': { clause: 'Article 15', title: 'Risk assessment and rollback plans for go-live, change and retirement of important systems; no changes in trading hours', requirement: 'When putting into service, changing or retiring important information systems, assess technical and business risks, set risk controls, contingency and rollback plans and verify the results; report in advance to the CSRC and its local offices where the market may be significantly affected. Do not change important systems during trading hours, except for emergency fixes of assessed faults or defects.' },
    'CN-CSRC-16': { clause: 'Article 16, paragraphs 1 and 2', title: 'Comprehensive testing before go-live or change of important systems; mask sensitive data in testing', requirement: 'Before go-live or change of important information systems, draw up a comprehensive test plan, keep test cases and data up to date and execute testing effectively; except where sensitive data must be used, desensitise sensitive data in test environments and protect unmasked data as in production.', note: 'Article 16(3): when core institutions’ trading, market data, account opening, settlement, communication and other important systems go live or undergo major upgrades, they must organise network-wide testing with market participants.' },
    'CN-CSRC-17': { clause: 'Article 17', title: 'Inform investors before suspending or terminating online services', requirement: 'Before suspending or terminating services provided to investors over networks, inform investors by public notice, targeted notification or other suitable means of the business impact, alternatives and responses.' },
    'CN-CSRC-18-1': { clause: 'Article 18(1)', title: 'Network and information security monitoring and early warning, regularly evaluated', requirement: 'Establish monitoring and early warning with defined indicators, continuously monitor the operation of information systems and infrastructure, deal with anomalies promptly, and regularly evaluate and improve the monitoring.' },
    'CN-CSRC-18-2': { clause: 'Article 18(2)', title: 'Keep business logs of important systems for five years or more and system logs for six months or more', requirement: 'Record business and system logs completely and accurately and keep them properly for fault analysis, internal control and investigation; keep business logs of important information systems for at least five years and system logs for at least six months.' },
    'CN-CSRC-19': { clause: 'Article 19', title: 'Defence-in-depth: isolation, authentication, access control, encryption, intrusion detection and situational awareness', requirement: 'Build a network and information security protection system combining network isolation, user authentication, access control, policy management, data encryption, website tamper protection, virus and trojan prevention, intrusion detection and cybersecurity situational awareness, to identify and block attacks promptly, protect important systems and infrastructure and prevent leakage or loss of information.' },
    'CN-CSRC-20': { clause: 'Article 20', title: 'Local, intra-city and remote backups: daily backup of important systems, quarterly verification; disaster recovery facilities', requirement: 'Establish local, intra-city and remote data backup facilities; back up important information systems at least daily and verify backups at least quarterly; establish failover and disaster recovery facilities for important systems with recovery objectives set by importance and business impact, the disaster recovery facility taking the form of an intra-city or remote recovery centre (in an active-active or multi-active architecture, any data centre may serve as the others’ recovery facility).' },
    'CN-CSRC-21': { clause: 'Article 21', title: 'Annual stress testing; capacity at least twice the historical peak and bandwidth peaks below set ratios', requirement: 'Stress test important information systems at least once a year, and promptly when significant market volatility may strain capacity; design test plans, scenarios and indicators under industry standards and keep test reports for at least five years. Performance capacity must be at least twice the historical peak; the past year’s trading-hours network peak must stay below 50% of current bandwidth for core institutions and below 80% for business institutions.' },
    'CN-CSRC-22': { clause: 'Article 22', title: 'Supplier management and contracts and confidentiality agreements with suppliers', requirement: 'Establish supplier management with admission standards for IT products and services, prudent procurement and ongoing quality assessment, improved risk measures and emergency handling, so that important systems remain secure and controllable; sign contracts and confidentiality agreements setting out each party’s security rights and obligations, including the supplier’s duty to help establish the cause and responsibility for incidents it causes.', note: 'Article 4: core and business institutions remain responsible for their own network and information security; that responsibility is not transferred or reduced because others provide products or services.' },
    'CN-CSRC-23': { clause: 'Article 23(2)', title: 'Ensure suppliers of important systems file with the CSRC as IT system service providers', requirement: 'Suppliers of products or services relating to important information systems must file with the CSRC; core and business institutions must ensure they do so.', note: 'Article 23(1): suppliers providing products or services relating to important information systems to core and business institutions must file with the CSRC as IT system service providers.' },
    'CN-CSRC-26-1': { clause: 'Article 26(1)', title: 'Core institutions can develop important systems themselves and hold executables and source code', requirement: 'Core institutions must be able to develop their trading, market data, account opening, settlement, risk control, communication and other important information systems themselves, and hold the executables and source code in secure, reliable storage.', note: 'Article 26(2) and (3): business institutions must build their own development capability; core and business institutions must carry out IT application innovation and commercial cryptography work as required by the state and the CSRC.' },
    'CN-CSRC-30': { clause: 'Article 30', title: 'Investor personal information protection system with processing, protection, response and audit mechanisms', requirement: 'When processing investor personal information, establish a sound protection system with defined posts and duties and mechanisms for processing, security protection, incident handling and audit oversight.' },
    'CN-CSRC-32': { clause: 'Article 32', title: 'Investor personal information compliant and secure throughout processing', requirement: 'Keep investor personal information compliant and secure throughout collection, storage, use, processing, transmission, provision, disclosure and deletion, preventing leakage, tampering or loss.' },
    'CN-CSRC-34': { clause: 'Article 34', title: 'Mask or encrypt investor data outside the security perimeter; mask sensitive data sent by SMS or email', requirement: 'When processing investor personal information outside the institution’s security perimeter, apply masking, encryption or similar measures; when sending investors’ sensitive personal information through channels not operated by the institution, such as SMS or email, mask account numbers, ID numbers and other sensitive data.' },
    'CN-CSRC-35': { clause: 'Article 35', title: 'Biometrics may not be the sole means of customer authentication', requirement: 'Where biometrics are used to authenticate customers, assess their necessity and security; facial, gait, fingerprint, iris, voiceprint or other biometrics may not be the only authentication method, and customers may not be forced to consent to biometric collection.' },
    'CN-CSRC-36': { clause: 'Article 36', title: 'Verify and remediate security defects and vulnerabilities; report those with significant impact to the CSRC', requirement: 'On finding security defects, vulnerabilities or other hazards in security products or services, verify and remediate them promptly; report to the CSRC and its local offices where they may significantly affect the stable operation of industry network and information security.' },
    'CN-CSRC-37': { clause: 'Article 37', title: 'Cybersecurity response plan based on business impact analysis, covering the prescribed scenarios', requirement: 'Based on business impact analysis, establish a cybersecurity response plan with objectives, organisation and procedures, covering cybersecurity incidents, natural disasters and public health events, major personnel changes relating to security, and the exit of a major IT system service provider.' },
    'CN-CSRC-38-1': { clause: 'Article 38(1)', title: 'Core institutions run an annual drill with connected participants and report within 15 working days', requirement: 'Core institutions must organise a cybersecurity drill with the participants connected to their systems and networks at least once a year and report it to the CSRC within 15 working days afterwards.' },
    'CN-CSRC-38-2': { clause: 'Article 38(2)', title: 'Regular cybersecurity drills with drill reports kept on file', requirement: 'Conduct cybersecurity drills regularly and keep drill reports on file.' },
    'CN-CSRC-39': { clause: 'Article 39(1)', title: 'Handle incidents promptly, preserve evidence and report to the CSRC without concealment or delay', requirement: 'Establish incident handling to deal with cybersecurity incidents promptly, restore systems as soon as possible, preserve the scene and evidence, and make emergency reports to the CSRC and its local offices without concealment, false reporting, delay or omission.', note: 'Article 72: business institutions generally report to the local CSRC office and core institutions to the CSRC.' },
    'CN-CSRC-40': { clause: 'Article 40', title: 'Cooperate with incident investigations; complete internal investigation, rectification and accountability', requirement: 'Cooperate with the CSRC and its local offices in investigating cybersecurity incidents, conduct internal investigations promptly, complete rectification, determine accountability and report as required.' },
    'CN-CSRC-41': { clause: 'Article 41', title: 'Inform investors of alternatives and emergency measures when incidents affect them', requirement: 'When a cybersecurity incident affects investors, promptly inform the parties concerned, through the website, client trading terminals, telephone or email, of alternatives or emergency measures and warn them of risks.' },
    'CN-CSRC-43': { clause: 'Article 43', title: 'CII protection included in the performance assessment of accountable persons', requirement: 'Securities and futures CII operators must include CII security protection in the accountability assessment of the persons with first and direct responsibility for network and information security and other relevant staff.' },
    'CN-CSRC-44': { clause: 'Article 44', title: 'A responsible person for each CII; key posts identified and background-checked', requirement: 'Securities and futures CII operators must designate a body or department for CII protection, appoint a person responsible for network and information security for each CII, identify key cybersecurity posts, staff them adequately and conduct security background checks on the head of the dedicated body and key personnel.' },
    'CN-CSRC-45': { clause: 'Article 45', title: 'Testing and assessment before new critical-business systems go live; expert review of major changes or retirement', requirement: 'Before new network facilities or systems carrying critical business go live, conduct security testing and risk assessment and go live only after passing; for changes or retirement of CII that may significantly affect the market, also organise expert review under Article 15 and in principle do not proceed without approval; report to the CSRC and its local offices when a CII ceases operation or changes in a way that may affect its identification.' },
    'CN-CSRC-46': { clause: 'Article 46', title: 'Annual network and information security testing and risk assessment with prompt rectification', requirement: 'Securities and futures CII operators must test and assess network and information security risks at least once a year and rectify the issues found promptly, covering at least CII operation, main threats, risk management and incident handling.' },
    'CN-CSRC-47': { clause: 'Article 47', title: 'Risk pre-assessment for procurement; file for cybersecurity review where national security may be affected', requirement: 'When procuring network products or services, securities and futures CII operators must carry out a risk pre-assessment under the national cybersecurity review regime, and file for cybersecurity review promptly where the product or service is closely related to the CII and may affect national security once in use.' },
    'CN-CSRC-48': { clause: 'Article 48', title: 'CII capacity at least three times the historical peak and bandwidth at least twice the past year’s peak', requirement: 'Securities and futures CII operators must continuously monitor CII operation, stress test regularly and upgrade or expand promptly when capacity is insufficient, keeping performance capacity at least three times the historical peak and trading-hours network bandwidth at least twice the past year’s peak usage.' },
    'CN-CSRC-49': { clause: 'Article 49', title: 'Intra-city and remote disaster recovery centres with synchronised data', requirement: 'In addition to Article 20, securities and futures CII operators must build intra-city and remote disaster recovery centres with synchronised data.' },
    'CN-CSRC-54': { clause: 'Article 54(1)', title: 'Build network and information security talent', requirement: 'Strengthen the network and information security workforce with a talent development mechanism suited to the work, so that qualifications, experience, professional competence and ethics meet the requirements of each post.' },
    'CN-CSRC-55': { clause: 'Article 55', title: 'Annual security education for all staff; regular investor security education by business institutions', requirement: 'Strengthen security awareness and education, holding a network and information security education activity for all staff at least once a year; business institutions must also regularly educate investors about network and information security risks in online securities and futures business.' },
    'CN-CSRC-59': { clause: 'Article 59', title: 'Complete the annual network and information security review and submit the annual report by 30 April', requirement: 'By 30 April each year, complete a special review of the previous year’s network and information security work and submit an annual network and information security management report to the CSRC and its local offices, covering governance, staffing, investment, risks, incident handling and the next year’s work plan; it may be combined with other annual IT reports except the CII annual protection plan, and CII operators must include their testing and risk assessment results.' }
  }
});
