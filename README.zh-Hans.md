<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo.zh-Hans-dark.svg">
    <img src="assets/logo.zh-Hans.svg" alt="亚太网络安全合规助手" width="374">
  </picture>
  <p><strong>按司法管辖区、牌照与业务特征，生成 APAC 监管机构的网络安全控制点要求</strong></p>
  <p>
    <!-- lang-nav -->
    <a href="README.zh-Hant.md">繁體</a> · <strong>简体</strong> · <a href="README.md">English</a>
  </p>
  <p>
    <a href="https://github.com/arthurpanhku/apac-cyber-compliance/actions/workflows/ci.yml"><img src="https://github.com/arthurpanhku/apac-cyber-compliance/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-1d4ed8" alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/version-1.12.0-0ea5e9" alt="Version 1.12.0">
    <img src="https://img.shields.io/badge/控制点-412-16a34a" alt="412 controls">
    <img src="https://img.shields.io/badge/条文出处-31-64748B" alt="31 sources">
    <img src="https://img.shields.io/badge/司法管辖区-HK%20%C2%B7%20SG%20%C2%B7%20AU%20%C2%B7%20MY-0ea5e9" alt="Four jurisdictions">
    <img src="https://img.shields.io/badge/语言-EN%20%C2%B7%20%E7%B9%81%20%C2%B7%20%E7%AE%80-7c3aed" alt="Three languages">
    <img src="https://img.shields.io/badge/零依赖-双击即用-7c3aed" alt="Zero dependency">
    <img src="https://img.shields.io/badge/条文核验-2026--09--21-64748B" alt="Verified 2026-09-21">
  </p>
</div>

---

> ⚠️ **本工具不构成法律或合规意见。** 所列控制点是对公开监管条文的结构化整理，不能取代阅读条文原文，
> 亦不能取代具备资格的法律或合规专业人士的判断。监管要求持续更新，请以监管机构官网最新版本为准。

## 简介

亚太地区的金融机构往往同时受多个司法管辖区、多个监管机构的网络安全要求约束。以香港为例，
证监会（SFC）、金管局（HKMA）、私隐专员公署（PCPD），2026 年起还有《保护关键基础设施
（电脑系统）条例》；新加坡有金融管理局（MAS）；澳大利亚有审慎监管局（APRA）；马来西亚则有国家银行（BNM）。条文散落在指引、通函、法定通知、监管政策
手册和实务守则中，同一项控制往往被多个机构以不同措辞重复要求。

本工具把这些条文拆解为**可勾选的控制点**：先选择司法管辖区，再勾选贵公司持有的牌照与业务
特征，即时得到适用的控制点清单，每条都标注**来源法规、条款编号、发布日期与官方原文链接**，
并可自评打分、导出底稿。目前覆盖**香港**（SFC / HKMA / PCPD / 关键基础设施条例）与
**新加坡**（MAS）、**澳大利亚**（APRA）与**马来西亚**（BNM）；架构已支持逐步加入其他 APAC 司法管辖区。

## 快速开始

不需要安装任何东西，也不需要构建步骤：

```bash
git clone https://github.com/arthurpanhku/apac-cyber-compliance.git
```

然后**双击 `index.html`** 即可在浏览器中使用。数据以 `.js` 形式加载而非 `.json`，正是为了让本地
`file://` 打开时不被浏览器 CORS 策略拦截——不需要起服务器。

也可直接部署到 GitHub Pages（仓库设置 → Pages → 从 `main` 分支根目录发布）。

## 功能

| 功能 | 说明 |
| --- | --- |
| **司法管辖区优先的范围菜单** | 先切换香港／新加坡／澳大利亚／马来西亚，再按监管机构展开实体类型；只显示与已选实体有关的业务特征，同时保留多地选择 |
| **结果辖区筛选** | 不改变已保存的评估范围，单独聚焦某一司法管辖区的控制点 |
| **按牌照筛选** | 30 种牌照／实体类型：香港 15 种（SFC 各类受规管活动、VASP、认可机构、储值支付工具、IA 获授权保险人、一般企业）+ 新加坡 3 种（银行、资本市场服务持牌人及相关实体、持牌数字代币服务提供者）+ 澳大利亚 5 种（ADI、一般保险人、人寿保险公司、私人医疗保险人、RSE 持牌人）+ 马来西亚 7 种（银行、保险及伊斯兰保险经营者、发展金融机构、电子货币发行人、指定支付系统营运者、商户收单机构、中介汇款机构） |
| **按业务特征细分** | 12 项特征（互联网交易、电子银行、处理个人资料、关键基础设施指定、外判／云端、使用 AI 模型、IA CRAF 适用范围、透过互联网提供网上金融服务、资讯资产由关联方或第三方管理、马来西亚的数码服务、云端服务及 NCII 指定）决定同一牌照下条文是否适用 |
| **控制点去重与交叉映射** | 同一项要求被多个监管机构同时规定时合并为一张卡片，并逐一列出各自的条文出处与条款编号——不论是香港 SFC 与 HKMA 之间，还是新加坡 MAS 致不同实体类型近乎逐字相同的三份《网络卫生通知》之间 |
| **条文可追溯** | 每条控制附说明、条款、发布及核验日期、官方链接，并标明英文来源文字属于原文、节录或说明 |
| **评估工作记录** | 每个监管控制可记录状态、实施说明、证据引用、负责人及目标完成日期 |
| **整改清单** | 集中查看未评、部分及未实施控制，按控制领域筛选并标示逾期／30 日内到期 |
| **可携项目文件** | 导出或导入带版本号的 `.hkcc.json` 备份，保留范围和完整评估记录 |
| **三种语言** | 英文、繁体中文、简体中文，页首一键切换，导出的 CSV 亦随之切换 |
| **导出** | 导出含公式注入防护的 CSV，或打印为含项目资料及工作记录的 PDF |
| **本地保存** | 项目资料存于浏览器 localStorage，不上传任何数据 |

## 覆盖范围

v1.11.0 共 **412 条控制点**，来自 **31 份**官方文件，涵盖香港、新加坡、澳大利亚与马来西亚四个司法管辖区。
每份出处各有自己的 `verifiedOn`——最近一次实际打开官网核对链接与版本的日期。条文发布跨
2001 至 2026 年、复核节奏各不相同，用一个全局日期会让刚复核过的和多年没碰的看起来一样新。
页首显示的是其中**最早**的一个，即以最弱的一环为准；另有每周自动巡检全部链接的工作流。

## 香港

### 证监会 SFC（92 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [减低及缓减与互联网交易相关的黑客入侵风险指引](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading.pdf) | 2017-10-27 | 全部 20 项基线控制，逐条对应原文条款号 |
| [通函 26EC35：抗钓鱼认证与可疑活动监控](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC35) | 2026-07-09 | OTP 不再获接受；passkey／设备绑定；**限期 2027-07-08** |
| [通函 26EC32：应对 AI 驱动网络攻击](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC32) | 2026-06-02 | 资产清单、加速补丁、最小权限、微分段、不可信输入处理 |
| 《操守准则》第 18 段及附表 7 | — | 互联网交易的上位规定 |
| [虚拟资产交易平台营运者指引](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/Guidelines-for-Virtual-Asset-Trading-Platform-Operators/Guidelines-for-Virtual-Asset-Trading-Platform-Operators.pdf) | 2023-06 | 第 XII 部「网络安全」全部条文 12.1–12.20、第 X 部「客户资产的保管」的技术性保安条文，以及附表 3，共 50 条。根据《证券及期货条例》第 399 条及《打击洗钱条例》第 53ZTK 条发布 |

### 金管局 HKMA — 认可机构（24 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [SPM TM-C-1 网络风险管理的监管方针](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20241202-2-EN) | 2024-11-29 | 法定指引；C-RAF 的现行依据 |
| [SPM TM-E-1 电子银行风险管理（第 4 版）](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-E-1) | 2024-10-25 | 法定指引 |
| [SPM TM-G-1 科技风险管理一般原则](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-G-1) | 2003-06-24 | |
| [SPM OR-2 营运韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/OR-2) | 2022-05-31 | |
| [SPM SA-2 外判](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/SA-2) | 2001-12-28 | |
| [通函：网络安全强化计划 2.0（C-RAF 2.0）](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20201103-1-EN) | 2020-11-03 | 固有风险评估、成熟度评估、iCAST |
| [通函：AI 驱动网络威胁下的网络韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260529-8-EN) | 2026-06-02 | |

### 金管局 HKMA — 储值支付工具持牌人（15 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [储值支付工具持牌人监管指引（G.N. 5043）](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/Guidelines-on-supervision-of-SVF-licensees_Eng.pdf) | 2016-09 | 《支付系统及储值支付工具条例》第 54(1A)(b) 条；第 7.2／7.3／7.4 节的科技风险、支付保安与业务连续性要求 |
| [储值支付工具持牌人监管实务备考](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/PN_on_supervision_of_SVF_licensees_eng.pdf) | 2025-10 | 逐段说明达标方式，含反诈骗要求：**讯息不得嵌入超连结** |
| [SVF 界别关键基础设施实务守则](https://www.occics.gov.hk/filemanager/en/content_19/SCoP_SVF_Licensees_en.pdf) | 2026-06-12 | 适用于被指定为 CI 营运者的 SVF 持牌人 |

### 保险业监管局 IA — 获授权保险人（59 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [《网络安全指引》（GL20，含 CRAF）](https://www.ia.org.hk/en/legislative_framework/files/GL20_Eng.pdf) | 2024-12 | **2025-01-01** 生效；GL20 第 5–10 节 19 条、CRAF 评估／呈交程序 13 条，以及覆盖附录 B 全部 216 项原则的 27 个组件级控制。相关事故须在发现后 **72 小时**内向 IA 报告 |
| [GL20 常见问题](https://www.ia.org.hk/en/legislative_framework/files/FAQ_GL20.pdf) | 2024-11 | 澄清评估频率、临时评估、整改时限、云端服务、第三方及抽样要求 |
| [固有风险评级评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Inherent_Risk_Rating_Assessment_template.xlsx) | 2024-12 | 官方五类固有风险工作簿及签署表 |
| [网络安全成熟度评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Cybersecurity_Maturity_Assessment_template.xlsx) | 2024-12 | 逐项评估七个领域全部 216 项控制原则的官方工作簿；本应用按 27 个监管组件归组，正式呈交仍须使用工作簿逐项填写 |

### 关键基础设施（13 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [《保护关键基础设施（电脑系统）条例》实务守则（通用版）](https://www.occics.gov.hk/filemanager/en/content_19/CoP_en_v1.0.pdf) | 2026-01-01 | 三类法定责任；严重事故 **12 小时**、其他 **48 小时**通报，书面报告 **14 日** |
| [金管专员发出的银行界别实务守则](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260527-25-EN) | 2026-06-02 | 适用于被指定为 CI 营运者的认可机构 |

### 私隐专员公署 PCPD（8 条）

| 文件 | 说明 |
| --- | --- |
| [《个人资料（私隐）条例》（第 486 章）六项保障资料原则](https://www.pcpd.org.hk/english/data_privacy_law/6_data_protection_principles/principles.html) | 以 DPP4 资料保安原则为核心 |

## 新加坡

### 金融管理局 MAS（59 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [FSM-N06《网络卫生通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n06/mas-notice-fsm-n06.pdf?sc_lang=en) | 2024-05-09 | 根据《金融服务与市场法 2022》第 29(1) 条发出的法定通知；管理员账户、安全补丁、保安标准、网络边界防御、防恶意软件、多重认证 |
| [FSM-N22《网络卫生通知》（致资本市场金融机构）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n22/mas-notice-fsm-n22.pdf) | 2024-05-09 | 条文与 FSM-N06 几乎逐字相同；适用于核准交易所、结算所、资本市场服务持牌人、注册基金管理公司等 |
| [FSM-N31《网络卫生通知》（致持牌数字代币服务提供者）](https://www.mas.gov.sg/-/media/mas-notice-fsm-n31---notice-on-cyber-hygiene.pdf) | 2025-05-30 | 条文与 FSM-N06 几乎逐字相同；适用于《金融服务与市场法》第 138 条下的持牌数字代币服务提供者 |
| [FSM-N05《科技风险管理通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n05/mas-notice-fsm-n05.pdf?sc_lang=en) | 2024-05-09 | 关键系统识别框架、年度非计划停机上限 **4 小时**、恢复时限目标 **4 小时**、**1 小时**内通报金管局、**14 日**内提交根因及影响分析报告、保护客户资料 |
| [《科技风险管理指引》](https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf) | 2021-01-18 | 不具法律约束力的指引；治理监督、第三方管理、资讯科技韧性、存取控制、密码技术、数据与基础设施保安、网络保安运作与评估、网上金融服务、资讯科技审计 |

## 澳大利亚

### 审慎监管局 APRA（24 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [审慎标准 CPS 234《资讯保安》](https://www.apra.gov.au/system/files/cps_234_july_2019_for_public_release.pdf) | 2018-11-07 | 具法律约束力的审慎标准，**2019-07-01** 生效；适用于认可接受存款机构（ADI）、一般保险人、人寿保险公司、私人医疗保险人及退休金受托人（RSE 持牌人）。完整收录第 13–36 段：董事会问责、资讯保安能力、政策框架、资产分类、控制措施、事故管理、控制测试、内部审计，以及重大事故 **72 小时**内、无法及时修补的重大控制弱点 **10 个营业日**内通知 APRA。第 16、22、28、34 段（关联方及第三方）只在资讯资产由他方管理时适用 |

## 马来西亚

### 国家银行 BNM（118 条）

| 文件 | 日期 | 说明 |
| --- | --- | --- |
| [《科技风险管理》政策文件（RMiT），BNM/RH/PD 028-98](https://www.bnm.gov.my/documents/20124/938039/pd-rmit-sep26.pdf) | 2026-09-25 | 完整收录 Part B 及 Part C（第 8–18 章）各段，逐段标注官方 **S**（标准，必须遵守）或 **G**（指引）标记；取代 2023 年 6 月版 RMiT。涵盖董事会及 CISO 治理、项目及 SDLC 控制、补丁及终止支援管理、密码技术、数据中心及网络韧性、关键系统年度非计划停机不超过 **4 小时**及每宗不超过 **120 分钟**、**2027-09-30** 前建立预警及备援处理、第三方及云端风险、抗钓鱼多重认证、SOC 及威胁情报、每 **3 年**红队演练、数码欺诈控制、科技审计、外部 DCRA 及 NRA，以及发出后 **90 日**内提交差距分析。第 2.2 段对支付类机构的豁免已按实体类型建模。附录 1–12 暂未收录 |

## 适用性判定规则

每条控制点的 `applicability` 由两部分组成：

- **`licenses`（任一命中）** —— 勾选的牌照中只要有一个在列表内即适用
- **`attributes`（全部具备）** —— 列出的业务特征必须**全部**勾选才适用

例如 SFC 黑客风险指引的控制点适用于 `第 1、2、3、9 类` 及 `VASP`，但**必须**同时勾选「提供互联网交易设施」——
这与指引第 3 段的适用范围一致（第 3 类仅限持牌杠杆式外汇交易商；第 9 类仅限透过自身互联网交易设施分销基金）。

## 关于「合并跨监管重复项」

不同监管机构的控制点之间有三类关系：

| 关系 | 含义 | 是否合并 | 登记位置 |
| --- | --- | --- | --- |
| **Equivalent（实质等价）** | 两个监管要求实质相同 | 合并为一张卡片 | `data/equivalence.js` |
| **Overlaps（部分重叠）** | 要求部分重叠（如一方多一项措施、时限更短或范围更广） | 不合并，只显示标签 | 控制点的 `overlaps` 字段 |
| **Related（相关）** | 存在关联或参考价值 | 不合并，只显示标签 | 控制点的 `related` 字段 |

合并等于告诉使用者「满足其中一条即满足全组」，所以只有等价组会合并，而且每组都必须通过 CI 中的
明确规则（`node tools/check-equivalence.mjs`，规则见 `tools/lib/equivalence-rules.mjs`）：

| 规则 | 要求 |
| --- | --- |
| EQ1 | 至少 2 个成员且全部存在；一个控制点至多属于一个等价组 |
| EQ2 | `basis` 为 `same-provision`、`identical-text` 或 `reviewed` |
| EQ3 | 控制域相同 |
| EQ4 | 义务强度（`priority`）相同：baseline 与 enhanced 不可等价 |
| EQ5 | 截止日期相同（或均无） |
| EQ6 | 每个成员都有标为 `verbatim` 或 `excerpt` 的原文 `quote`——不能凭「说明」断言等价 |
| EQ7 | `same-provision`：出处、条款编号与原文相同；其余 basis：成员来自不同出处 |
| EQ8 | `identical-text`：规范化空白与引号后原文相同；只有 `addressees` 列明的受规管者称谓可以不同 |
| EQ9 | `reviewed`：须有中英文 `rationale` 及 `reviewedOn` 日期 |
| EQ10 | 同组成员之间不得再标为 `overlaps` 或 `related` |

这些规则是必要条件而非证明：措辞不同的两条条文是否「实质」等价，终究要靠人判断，所以 `reviewed`
等价组必须把理由写下来。

实际执行相当严格。证监会撰写《虚拟资产交易平台营运者指引》第 XII 部时以《黑客入侵风险指引》为蓝本，
但多数对应段落中 VATP 版本另有增补——端点侦测与响应、储存媒介管控、应急计划每年测试——这些只标为
部分重叠，不合并；逐段对照后确认实质相同的只有五组。勾选「虚拟资产服务提供者」与「互联网交易」时，
90 条适用条文显示为 **85** 张卡片。MAS 三份《网络卫生通知》第 4 段除受规管者称谓外逐字相同，故合并：
勾选全部三种新加坡牌照时，59 条 MAS 控制点显示为 **47** 张卡片。勾选全部牌照与业务特征时，
412 条条文显示为 **393** 张卡片。

> **部署注意**：仓库根目录的 `.nojekyll` 不可删除。GitHub Pages 默认以 Jekyll 处理站点，
> 而 Jekyll 会忽略以下划线开头的路径，导致 `data/_registry.js` 返回 404、整个应用无法启动。

## 多语言

界面、控制点说明与导出的 CSV 均提供英文、繁体中文、简体中文三个版本。语言按
`?lang=` 参数 → 已保存的偏好 → 浏览器 `Accept-Language` 的顺序判定，最后回落到英文；
页首可随时切换，选择会被记住。

条文引述**一律不翻译**，永远保留监管机构发布的英文原文并附官方链接。
如任何语言的说明与英文原文有出入，概以监管机构发布的原文为准。

```
data/i18n/
├── zh-Hans.js     简体界面字符串（基础数据本身即简体）
├── zh-Hant.js     繁体层 —— 自动生成，请勿手改
└── en.js          英文层 —— 界面字符串与全部控制点文字
```

基础数据以简体中文撰写。繁体层由 OpenCC 的 `s2hk` 模式生成，因此用词是香港的
（網絡／軟件／私隱，而非台湾的網路／軟體），并以一张覆盖表把字形改回香港法例与
金管局、证监会文件的写法（戶／說／啟／群／溫／閱，而非教育局字形表的 户／説／啓／羣／温／閲）。

改动任何中文文字后，重新生成繁体层：

```bash
pip install opencc-python-reimplemented
python3 tools/gen-hant.py
```

英文层不是从中文翻译，而是对照监管机构的英文原始文件撰写——SFC 通函、HKMA 监管政策手册
及各实务守则本身即以英文发布，因此英文措辞与读者在原文中看到的一致。

## 数据结构

```
.nojekyll                 关闭 GitHub Pages 的 Jekyll 处理（必需，勿删）
data/
├── _registry.js          全局注册表与语言查找
├── jurisdictions.js      司法管辖区登记（目前：香港 hk、新加坡 sg）
├── domains.js            11 个控制域——跨司法管辖区共用，用于结果分组
├── i18n/
│   ├── zh-Hans.js        简体界面字符串
│   ├── zh-Hant.js        繁体层（生成）
│   └── en.js             英文层
├── hk/                   香港：14 种牌照 · 6 项业务特征
│   ├── sources.js        20 份条文出处（标题、日期、法律地位、官方链接）
│   ├── taxonomy.js       牌照与业务特征
│   └── controls/
│       ├── sfc-internet-trading.js    SFC 黑客风险指引 20 项 + 操守准则
│       ├── sfc-circulars-2026.js      SFC 2026 年两份通函
│       ├── sfc-vatp.js                虚拟资产交易平台指引第 X、XII 部及附表 3
│       ├── hkma.js                    TM-G-1 / TM-E-1 / TM-C-1 / OR-2 / SA-2 / C-RAF
│       ├── svf.js                     储值支付工具指引与实务备考
│       ├── pdpo.js                    六项保障资料原则
│       └── critical-infrastructure.js 关键基础设施条例三类责任
├── sg/                   新加坡：3 种牌照 · 1 项业务特征
│   ├── sources.js        5 份条文出处
│   ├── taxonomy.js       牌照与业务特征
│   └── controls/
│       ├── cyber-hygiene.js    FSM-N06 / N22 / N31《网络卫生通知》
│       ├── trm-notice.js       FSM-N05《科技风险管理通知》
│       └── trm-guidelines.js   《科技风险管理指引》
├── au/                   澳大利亚：5 种实体类型 · 1 项业务特征
│   ├── sources.js        1 份条文出处
│   ├── taxonomy.js       实体类型与业务特征
│   └── controls/
│       └── cps-234.js          APRA CPS 234《资讯保安》第 13–36 段
└── my/                   马来西亚：7 种实体类型 · 3 项业务特征
    ├── sources.js        1 份条文出处
    ├── taxonomy.js       实体类型与业务特征
    └── controls/
        └── rmit.js             BNM RMiT Part B 及 Part C（第 8–18 章）
```

单条控制点的形态（以简体撰写，其余语言由 `data/i18n/` 的覆盖层提供）：

```js
{
  id: 'SFC-IT-1.1',
  domain: 'identity',                  // 控制域，见 taxonomy.js
  priority: 'baseline',                // baseline | enhanced
  sourceId: 'sfc-hacking',             // 指向 sources.js
  clause: '1.1',                       // 条文中的条款编号
  title: '客户账户登录须实施双重认证',
  requirement: '……',                   // 中文说明
  quote: 'A licensed or registered person should implement …',  // 英文原文，任何语言下都不翻译
  quoteStatus: 'excerpt',               // verbatim | excerpt | summary
  applicability: { licenses: [...], attributes: [...] },
  deadline: '2027-07-08',              // 可选：合规限期
  overlaps: ['SFC-PH-A1', 'HKMA-TME1-4.1'],  // 部分重叠，只显示标签
  related: ['SFC-COC-18']              // 相关，只显示标签
}
```

实质等价是唯一会合并卡片的关系，以等价组形式登记在 `data/equivalence.js`：

```js
{
  id: 'eq-sfc-2fa-login', basis: 'reviewed', reviewedOn: '2026-10-07',
  members: ['SFC-IT-1.1', 'SFC-VATP-12.12b'],
  rationale: '……'                      // 实质等价的理由（英文写在 data/i18n/en.js）
}
```

## 已知缺口

**新加坡第一期只覆盖核心科技风险与网络卫生。** MAS 就科技风险管理向不同界别（银行、商人银行、
财务公司、保险公司、资本市场服务持牌人等）发出多份近乎相同的通知（FSM-N03/05/07/09/11/13/
17/19/21/23/25 等），本项目目前只录入面向银行的 FSM-N05 作为该系列的代表；《网络卫生通知》
则录入了银行（N06）、资本市场金融机构（N22）及数字代币服务提供者（N31）三份，未包括其余
界别版本。《科技风险管理指引》第 1、2、4–7 章（前言、适用范围、风险管理框架、IT 项目管理、
软件开发、IT 服务管理）尚未拆解为控制点；outsourcing 相关的《外判指引》等其他 MAS 文件亦不
在本期范围内。欢迎以 PR 形式补充（请附官方 PDF 出处与条款编号）。

**条文是否仍现行有效，最终由使用者自行核对。** 每份出处的 `verifiedOn` 记录的是某一天
有人实际打开官网核对过，不是持续监控；监管机构随时可能修订或撤回条文。
把本工具的输出用于任何正式用途前，请循每张控制卡的官方链接回到监管机构网站核对当前版本——
这也是每条控制点都强制标注出处与条款编号的原因。

## 贡献

欢迎补充条文、修正措辞、更新监管变化。提交前请运行校验：

```bash
node tools/validate.mjs
node --test tests/*.test.mjs
```

校验项包括：ID 唯一、出处存在、控制域／牌照／业务特征有效、overlaps／related 引用可解析、必填字段及来源文字分类齐全、
每份出处都有 `verifiedOn`，**以及英文层与繁体层是否完整**——新增控制点若未补译，校验会失败。
单元测试覆盖适用性、合并、v1 迁移、项目校验、到期计算及 CSV 注入防护。
超过 180 天未复核的出处会出现提示。

`.github/workflows/ci.yml` 会在每个 PR 上自动运行以上校验，并确认繁体生成物是最新的。
另有每周一次的链接巡检：

```bash
node tools/check-links.mjs
```

只有确定失效（404／410／域名解析不了）才会失败；403／429 多为机器人防护，5xx 与超时多为暂时性
故障，只报告不失败——长期红着的检查很快就没人看了。详见 [CONTRIBUTING.zh-Hans.md](CONTRIBUTING.zh-Hans.md)。

## 授权

[MIT](LICENSE)。条文原文的版权归各监管机构所有，本项目仅作结构化引用并链接至官方来源。
