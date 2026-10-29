# 当前代码的覆盖明细

> 自动生成，请勿手改。运行 `node tools/coverage-matrix.mjs` 更新；运行 `node tools/coverage-matrix.mjs --check` 检查。

产品定位、香港／新加坡优先级、尚未纳入的文件及人工覆盖判断，见[覆盖矩阵](COVERAGE_MATRIX.md)。

这是“已收录什么”的清单。文件数量、控制数量及原文数量均不代表文件或地域完整率；引用分类沿用既有数据，未再次逐字核验。

当前登记 5 个地域、39 份来源，34 份来源实际关联控制；5 份标为参考。

共 563 条控制、35 类实体、20 项业务特征；原文 368、节录 95、概括说明 100。

## 地域盘点

| 地域 | 控制 | 有控制的来源／登记来源 | 原文／节录／概括 | 已建模实体类型 |
| --- | ---: | ---: | --- | --- |
| 中国香港 | 211 | 19／24 | 78／68／65 | 15 |
| 新加坡 | 59 | 5／5 | 24／0／35 | 3 |
| 澳大利亚 | 24 | 1／1 | 24／0／0 | 5 |
| 马来西亚 | 118 | 1／1 | 118／0／0 | 7 |
| 中国内地 | 151 | 8／8 | 124／27／0 | 5 |

## 适用条件的含义

- 下文实体 ID **任一命中**，业务特征 ID 则须**全部具备**；业务特征“无”表示没有额外的特征门槛，仍须命中实体。
- “该地域全部已建模实体”仅表示当前代码里的实体集合，不表示该地域的所有企业。
- 来源标记 `current`／`ref`、发布日期及 `verifiedOn` 原样取自登记；生成本文件不构成新的法规复核。
- 每条均列出实际 `clause`。章节、通函全文或笼统指引定位会原样保留，方便识别尚待细化的条目。
- 同一条款可按适用条件拆成多个控制 ID，所以控制数量不等于唯一法规条款数。

## 中国香港

数据目录：[hksar](../data/hksar/)。

### 实体与业务特征对照

| 实体 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `sfc-ra1` | 第 1 类：证券交易 | Dealing in securities |
| `sfc-ra2` | 第 2 类：期货合约交易 | Dealing in futures contracts |
| `sfc-ra3` | 第 3 类：杠杆式外汇交易 | Leveraged foreign exchange trading（黑客风险指引只适用于持牌杠杆式外汇交易商） |
| `sfc-ra4` | 第 4 类：就证券提供意见 | Advising on securities |
| `sfc-ra5` | 第 5 类：就期货合约提供意见 | Advising on futures contracts |
| `sfc-ra6` | 第 6 类：就机构融资提供意见 | Advising on corporate finance |
| `sfc-ra7` | 第 7 类：提供自动化交易服务 | Providing automated trading services |
| `sfc-ra8` | 第 8 类：提供证券保证金融资 | Securities margin financing |
| `sfc-ra9` | 第 9 类：提供资产管理 | Asset management |
| `sfc-ra13` | 第 13 类：为集体投资计划提供托管服务 | Depositary of relevant CIS |
| `sfc-vasp` | SFC 持牌虚拟资产服务提供者 / 交易平台 | VASP / VATP |
| `hkma-ai` | 认可机构（银行 / 有限制牌照银行 / 接受存款公司） | Authorized Institution |
| `hkma-svf` | 储值支付工具持牌人 | Stored Value Facility licensee |
| `ia-authorized-insurer` | 获授权保险人 | GL20 主体适用；不包括专属自保保险人及海事相互保险人 |
| `other` | 无上述金融牌照（一般企业） | 仍受《个人资料（私隐）条例》约束 |

| 业务特征 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `internet-trading` | 提供互联网交易设施 | 客户可透过网页或应用程式下达买卖指令；触发 SFC 黑客风险指引全套要求 |
| `ebanking` | 提供电子银行服务 | 网上银行、流动支付、自助终端等；触发 HKMA TM-E-1 |
| `personal-data` | 收集或处理个人资料 | 触发《个人资料（私隐）条例》DPP4 资料保安要求 |
| `ci-designated` | 已被指定为关键基础设施营运者 | 触发《保护关键基础设施（电脑系统）条例》三类法定责任 |
| `outsourcing` | 使用第三方服务商或云端服务 | 触发外判与供应链管理要求 |
| `ai-models` | 在营运中使用 AI 语言模型 | 触发 2026 年 SFC / HKMA 关于 AI 驱动网络攻击的通函 |
| `ia-craf` | 须进行 IA 网络韧性评估（CRAF） | 适用于在香港或从香港经营保险业务且不属于 GL20 第 3.2 段豁免类别的获授权保险人 |

### 文件盘点

| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |
| --- | --- | ---: | --- | --- |
| `sfc-hacking` · [减低及缓减与互联网交易相关的黑客入侵风险指引](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading.pdf) | `current`；已关联控制（完整性待人工复核） | 20 | 13／7／0 | 2026-09-08 |
| `sfc-cir-phishing-2026` · [通函——实施 (i) 稳健的认证方法以减低及缓减钓鱼攻击的黑客风险，及 (ii) 充分的监控措施以识别可疑活动](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC35) | `current`；已关联控制（完整性待人工复核） | 10 | 0／10／0 | 2026-09-08 |
| `sfc-cir-ai-2026` · [通函——加强网络安全措施以应对人工智能驱动网络攻击带来的新兴风险](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC32) | `current`；已关联控制（完整性待人工复核） | 11 | 0／11／0 | 2026-09-08 |
| `sfc-cir-mapping-2026` · [跨界别网络测绘工作联合通函](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC45) | `ref`；参考（不计作覆盖） | 0 | 0／0／0 | 2026-09-08 |
| `sfc-code-of-conduct` · [《证监会持牌人或注册人操守准则》第 18 段及附表 7](https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes) | `current`；已关联控制（完整性待人工复核） | 1 | 1／0／0 | 2026-09-08 |
| `hkma-tm-g-1` · [《监管政策手册》TM-G-1 科技风险管理一般原则](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-G-1) | `current`；已关联控制（完整性待人工复核） | 5 | 0／0／5 | 2026-09-08 |
| `hkma-tm-e-1` · [《监管政策手册》TM-E-1 电子银行风险管理（第 4 版）](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-E-1) | `current`；已关联控制（完整性待人工复核） | 7 | 0／0／7 | 2026-09-08 |
| `hkma-tm-c-1` · [《监管政策手册》TM-C-1 网络风险管理的监管方针](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20241202-2-EN) | `current`；已关联控制（完整性待人工复核） | 4 | 0／4／0 | 2026-09-08 |
| `hkma-or-2` · [《监管政策手册》OR-2 营运韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/OR-2) | `current`；已关联控制（完整性待人工复核） | 4 | 0／0／4 | 2026-09-08 |
| `hkma-sa-2` · [《监管政策手册》SA-2 外判](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/SA-2) | `current`；已关联控制（完整性待人工复核） | 1 | 0／0／1 | 2026-09-08 |
| `hkma-cfi-2` · [通函——网络安全强化计划 2.0（网络防卫评估架构 C-RAF 2.0）](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20201103-1-EN) | `current`；已关联控制（完整性待人工复核） | 1 | 0／0／1 | 2026-09-08 |
| `hkma-cir-ai-2026` · [通函——在人工智能驱动的网络威胁下强化网络韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260529-8-EN) | `current`；已关联控制（完整性待人工复核） | 1 | 0／0／1 | 2026-09-08 |
| `hkma-svf-guideline` · [《储值支付工具持牌人监管指引》（宪报公告第 5043 号）](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/Guidelines-on-supervision-of-SVF-licensees_Eng.pdf) | `current`；已关联控制（完整性待人工复核） | 13 | 13／0／0 | 2026-09-08 |
| `hkma-svf-pn` · [《储值支付工具持牌人监管实务备考》](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/PN_on_supervision_of_SVF_licensees_eng.pdf) | `current`；已关联控制（完整性待人工复核） | 1 | 1／0／0 | 2026-09-08 |
| `occics-cop-svf` · [《保护关键基础设施（电脑系统）条例》实务守则（适用于金管专员指定为关键基础设施营运者的储值支付工具持牌人）](https://www.occics.gov.hk/filemanager/en/content_19/SCoP_SVF_Licensees_en.pdf) | `current`；已关联控制（完整性待人工复核） | 1 | 0／0／1 | 2026-09-08 |
| `hkma-cop-ci` · [《保护关键基础设施（电脑系统）条例》实务守则（适用于金管专员指定为关键基础设施营运者的认可机构）](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260527-25-EN) | `current`；已关联控制（完整性待人工复核） | 1 | 0／1／0 | 2026-09-08 |
| `occics-cop` · [《保护关键基础设施（电脑系统）条例》实务守则（通用版）第 1.0 版](https://www.occics.gov.hk/filemanager/en/content_19/CoP_en_v1.0.pdf) | `current`；已关联控制（完整性待人工复核） | 13 | 0／3／10 | 2026-09-08 |
| `occics-index` · [实务守则索引（通用版及界别版）](https://www.occics.gov.hk/en/industry/code-of-practice/index.html) | `ref`；参考（不计作覆盖） | 0 | 0／0／0 | 2026-09-08 |
| `pdpo` · [《个人资料（私隐）条例》（第 486 章）——六项保障资料原则](https://www.pcpd.org.hk/english/data_privacy_law/6_data_protection_principles/principles.html) | `current`；已关联控制（完整性待人工复核） | 8 | 0／0／8 | 2026-09-08 |
| `sfc-vatp-guidelines` · [《虚拟资产交易平台营运者指引》](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/Guidelines-for-Virtual-Asset-Trading-Platform-Operators/Guidelines-for-Virtual-Asset-Trading-Platform-Operators.pdf) | `current`；已关联控制（完整性待人工复核） | 50 | 39／11／0 | 2026-09-11 |
| `ia-gl20-2024` · [《网络安全指引》（GL20，含网络韧性评估框架）](https://www.ia.org.hk/en/legislative_framework/files/GL20_Eng.pdf) | `current`；已关联控制（完整性待人工复核） | 59 | 11／21／27 | 2026-09-21 |
| `ia-gl20-faq-2024` · [《网络安全指引》（GL20）常见问题](https://www.ia.org.hk/en/legislative_framework/files/FAQ_GL20.pdf) | `ref`；参考（不计作覆盖） | 0 | 0／0／0 | 2026-09-21 |
| `ia-gl20-ira-template` · [GL20 固有风险评级评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Inherent_Risk_Rating_Assessment_template.xlsx) | `ref`；参考（不计作覆盖） | 0 | 0／0／0 | 2026-09-21 |
| `ia-gl20-cma-template` · [GL20 网络安全成熟度评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Cybersecurity_Maturity_Assessment_template.xlsx) | `ref`；参考（不计作覆盖） | 0 | 0／0／0 | 2026-09-21 |

### 逐条对应

#### sfc-hacking

[减低及缓减与互联网交易相关的黑客入侵风险指引](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading/guidelines-for-reducing-and-mitigating-hacking-risks-associated-with-internet-trading.pdf) · 发布：2017-10-27 · 来源核验：2026-09-08

法律地位：根据《证券及期货条例》第 399 条发出的指引；不具法律效力，但违反其精神可能影响持牌人的适当人选资格

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SFC-IT-1.1` | 1.1 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-1.2` | 1.2 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-1.3` | 1.3 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-1.4` | 1.4 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-1.5` | 1.5 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-1.6` | 1.6 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.1` | 2.1 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.2` | 2.2 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-2.3` | 2.3 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.4` | 2.4 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-2.5` | 2.5 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.6` | 2.6 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.7` | 2.7 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-2.8` | 2.8 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-2.9` | 2.9 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-2.10` | 2.10 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-3.1` | 3.1 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-3.2` | 3.2 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-IT-3.3` | 3.3 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |
| `SFC-IT-3.4` | 3.4 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |

#### sfc-cir-phishing-2026

[通函——实施 (i) 稳健的认证方法以减低及缓减钓鱼攻击的黑客风险，及 (ii) 充分的监控措施以识别可疑活动](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC35) · 发布：2026-07-09 · 来源核验：2026-09-08

法律地位：证监会通函，载列预期操守标准

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SFC-PH-A1` | (A) 第 5 段 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-A2` | (A) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-A3` | (A) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-A4` | (A) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-B1` | (B) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-B2` | (B) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-B3` | (B)(a) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-B4` | (B)(b) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-C1` | (C) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |
| `SFC-PH-D1` | (D) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 节录 |

#### sfc-cir-ai-2026

[通函——加强网络安全措施以应对人工智能驱动网络攻击带来的新兴风险](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC32) · 发布：2026-06-02 · 来源核验：2026-09-08

法律地位：证监会通函，载列预期操守标准

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SFC-AI-GOV` | 第 3 段 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-INV` | 第 8 段 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-A1` | (A) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-B1` | (B)(i) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-B2` | (B)(ii) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-B3` | (B)(iii) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-B4` | (B)(iv) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-C1` | (C) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-D1` | (D) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | `outsourcing` | 节录 |
| `SFC-AI-E1` | (E) | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | 无 | 节录 |
| `SFC-AI-LLM` | 第 7 段 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra4`、`sfc-ra5`、`sfc-ra6`、`sfc-ra7`、`sfc-ra8`、`sfc-ra9`、`sfc-ra13`、`sfc-vasp` | `ai-models` | 节录 |

#### sfc-cir-mapping-2026

[跨界别网络测绘工作联合通函](https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/intermediaries/supervision/doc?refNo=26EC45) · 发布：2026-07-29 · 来源核验：2026-09-08

法律地位：跨监管机构联合通函

参考文件，未直接关联控制；不能据此认定条款已覆盖。

#### sfc-code-of-conduct

[《证监会持牌人或注册人操守准则》第 18 段及附表 7](https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes) · 发布：— · 来源核验：2026-09-08

法律地位：操守准则；违反可影响适当人选资格并招致纪律行动

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SFC-COC-18` | 第 18.4–18.7 段；附表 7 第 1.1、1.2.2–1.2.8、1.3 及 2.1 段 | `sfc-ra1`、`sfc-ra2`、`sfc-ra3`、`sfc-ra9`、`sfc-vasp` | `internet-trading` | 原文 |

#### hkma-tm-g-1

[《监管政策手册》TM-G-1 科技风险管理一般原则](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-G-1) · 发布：2003-06-24 · 来源核验：2026-09-08

法律地位：金管专员以指导注释形式发出的非法定指引

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-TMG1-2` | 2. IT governance | `hkma-ai` | 无 | 概括说明 |
| `HKMA-TMG1-3` | 3. Security management | `hkma-ai` | 无 | 概括说明 |
| `HKMA-TMG1-4` | 4. System development and change management | `hkma-ai` | 无 | 概括说明 |
| `HKMA-TMG1-5` | 5. Information processing | `hkma-ai` | 无 | 概括说明 |
| `HKMA-TMG1-7` | 7. Management of technology service providers | `hkma-ai` | `outsourcing` | 概括说明 |

#### hkma-tm-e-1

[《监管政策手册》TM-E-1 电子银行风险管理（第 4 版）](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/TM-E-1) · 发布：2024-10-25 · 来源核验：2026-09-08

法律地位：根据《银行业条例》第 7(3) 条发出的法定指引

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-TME1-3.1` | 3.1 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-3.3` | 3.3 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-4.1` | 4.1 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-4.2` | 4.2 / 4.3 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-5` | 5 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-6` | 6 | `hkma-ai` | `ebanking` | 概括说明 |
| `HKMA-TME1-9` | 9 | `hkma-ai` | `ebanking` | 概括说明 |

#### hkma-tm-c-1

[《监管政策手册》TM-C-1 网络风险管理的监管方针](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20241202-2-EN) · 发布：2024-11-29 · 来源核验：2026-09-08

法律地位：根据《银行业条例》第 7(3) 条发出的法定指引；取代 2015-09-15《网络安全风险管理》通函

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-CRAF-1` | 3.5.1(a) | `hkma-ai` | 无 | 节录 |
| `HKMA-CRAF-2` | 3.5.1(b) | `hkma-ai` | 无 | 节录 |
| `HKMA-CRAF-3` | 3.5.1(c) | `hkma-ai` | 无 | 节录 |
| `HKMA-CRAF-4` | 3.5.2 | `hkma-ai` | 无 | 节录 |

#### hkma-or-2

[《监管政策手册》OR-2 营运韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/OR-2) · 发布：2022-05-31 · 来源核验：2026-09-08

法律地位：金管专员以指导注释形式发出的非法定指引

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-OR2-1` | 2 / 3 | `hkma-ai` | 无 | 概括说明 |
| `HKMA-OR2-2` | 4 | `hkma-ai` | 无 | 概括说明 |
| `HKMA-OR2-3` | 5 / 6 / 8 | `hkma-ai` | 无 | 概括说明 |
| `HKMA-OR2-6` | 7 | `hkma-ai` | 无 | 概括说明 |

#### hkma-sa-2

[《监管政策手册》SA-2 外判](https://brdr.hkma.gov.hk/eng/doc-ldg/spm/current/SA-2) · 发布：2001-12-28 · 来源核验：2026-09-08

法律地位：金管专员以指导注释形式发出的非法定指引

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-SA2-1` | SA-2 | `hkma-ai` | `outsourcing` | 概括说明 |

#### hkma-cfi-2

[通函——网络安全强化计划 2.0（网络防卫评估架构 C-RAF 2.0）](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20201103-1-EN) · 发布：2020-11-03 · 来源核验：2026-09-08

法律地位：金管局通函；C-RAF 评估为认可机构的持续监管要求

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-CFI2` | 通函全文 | `hkma-ai` | 无 | 概括说明 |

#### hkma-cir-ai-2026

[通函——在人工智能驱动的网络威胁下强化网络韧性](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260529-8-EN) · 发布：2026-06-02 · 来源核验：2026-09-08

法律地位：金管局通函

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `HKMA-AI-2026` | 通函全文 | `hkma-ai` | `ai-models` | 概括说明 |

#### hkma-svf-guideline

[《储值支付工具持牌人监管指引》（宪报公告第 5043 号）](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/Guidelines-on-supervision-of-SVF-licensees_Eng.pdf) · 发布：2016-09 · 来源核验：2026-09-08

法律地位：金管专员根据《支付系统及储值支付工具条例》（第 584 章）第 54(1A)(b) 条发出的指引

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SVF-7.2.1` | 7.2.1 | `hkma-svf` | 无 | 原文 |
| `SVF-7.2.2` | 7.2.2 | `hkma-svf` | 无 | 原文 |
| `SVF-7.2.3` | 7.2.3 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.1` | 7.3.1 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.2` | 7.3.2 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.3` | 7.3.3 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.4` | 7.3.4 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.5` | 7.3.5 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.6` | 7.3.6 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.7` | 7.3.7 | `hkma-svf` | 无 | 原文 |
| `SVF-7.3.8` | 7.3.8 | `hkma-svf` | 无 | 原文 |
| `SVF-7.4.1` | 7.4.1 | `hkma-svf` | 无 | 原文 |
| `SVF-7.4.2` | 7.4.2 | `hkma-svf` | 无 | 原文 |

#### hkma-svf-pn

[《储值支付工具持牌人监管实务备考》](https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/PN_on_supervision_of_SVF_licensees_eng.pdf) · 发布：2025-10 · 来源核验：2026-09-08

法律地位：金管局实务备考；说明《指引》原则在典型情况下的达标方式，不凌驾或取代条例与《指引》

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SVF-PN-ANTISCAM` | 7.3.6 补充指引 (b) | `hkma-svf` | 无 | 原文 |

#### occics-cop-svf

[《保护关键基础设施（电脑系统）条例》实务守则（适用于金管专员指定为关键基础设施营运者的储值支付工具持牌人）](https://www.occics.gov.hk/filemanager/en/content_19/SCoP_SVF_Licensees_en.pdf) · 发布：2026-06-12 · 来源核验：2026-09-08

法律地位：金管专员根据条例第 8(1)(b) 条发出的界别实务守则

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SVF-CI-COP` | 1.1 | `hkma-svf` | `ci-designated` | 概括说明 |

#### hkma-cop-ci

[《保护关键基础设施（电脑系统）条例》实务守则（适用于金管专员指定为关键基础设施营运者的认可机构）](https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20260527-25-EN) · 发布：2026-06-02 · 来源核验：2026-09-08

法律地位：金管专员根据条例第 8(1)(b) 条发出的界别实务守则

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CI-BANK-COP` | 1.1.2 / 1.1.3 | `hkma-ai` | `ci-designated` | 节录 |

#### occics-cop

[《保护关键基础设施（电脑系统）条例》实务守则（通用版）第 1.0 版](https://www.occics.gov.hk/filemanager/en/content_19/CoP_en_v1.0.pdf) · 发布：2026-01-01 · 来源核验：2026-09-08

法律地位：专员根据条例第 8 条发出的实务守则；本身非附属法例，但专员可就不遵从发出书面指示，不遵从指示即属犯罪

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CI-CAT1-1` | 5.1 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT1-2` | 5.2 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT1-3` | 5.3 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT2-1` | 6.1 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT2-2` | 6.2 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT2-3` | 6.3 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT2-4` | 6.4 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT2-5` | 6.5 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT3-1` | 7.1 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT3-2` | 7.2 | 该地域全部已建模实体 | `ci-designated` | 概括说明 |
| `CI-CAT3-3` | 7.3.4 / 7.3.6 | 该地域全部已建模实体 | `ci-designated` | 节录 |
| `CI-CAT3-4` | 7.3.7 | 该地域全部已建模实体 | `ci-designated` | 节录 |
| `CI-SEV-CRITERIA` | 7.3.4(a)-(g) | 该地域全部已建模实体 | `ci-designated` | 节录 |

#### occics-index

[实务守则索引（通用版及界别版）](https://www.occics.gov.hk/en/industry/code-of-practice/index.html) · 发布：2026-06-22 · 来源核验：2026-09-08

法律地位：官方索引页

参考文件，未直接关联控制；不能据此认定条款已覆盖。

#### pdpo

[《个人资料（私隐）条例》（第 486 章）——六项保障资料原则](https://www.pcpd.org.hk/english/data_privacy_law/6_data_protection_principles/principles.html) · 发布：— · 来源核验：2026-09-08

法律地位：法例；DPP4 资料保安原则对所有资料使用者具约束力

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `PDPO-DPP4-1` | DPP4 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-DPP4-2` | DPP4(2) | 该地域全部已建模实体 | `personal-data`、`outsourcing` | 概括说明 |
| `PDPO-DPP2` | DPP2 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-DPP1` | DPP1 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-DPP3` | DPP3 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-DPP5` | DPP5 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-DPP6` | DPP6 | 该地域全部已建模实体 | `personal-data` | 概括说明 |
| `PDPO-BREACH` | 私隐专员公署指引 | 该地域全部已建模实体 | `personal-data` | 概括说明 |

#### sfc-vatp-guidelines

[《虚拟资产交易平台营运者指引》](https://www.sfc.hk/-/media/EN/assets/components/codes/files-current/web/guidelines/Guidelines-for-Virtual-Asset-Trading-Platform-Operators/Guidelines-for-Virtual-Asset-Trading-Platform-Operators.pdf) · 发布：2023-06 · 来源核验：2026-09-11

法律地位：根据《证券及期货条例》第 399 条及《打击洗钱及恐怖分子资金筹集条例》第 53ZTK 条发布的指引；适用于所有平台营运者。不遵从本身不会令任何人负上法律责任，但在《证券及期货条例》／《打击洗钱条例》的法律程序中可获接纳为证据，证监会亦会考虑该不遵从是否反映其不再是适当人选

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `SFC-VATP-12.1` | 12.1 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.2` | 12.2 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.3` | 12.3 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.4` | 12.4 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.5` | 12.5 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.6` | 12.6 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.7` | 12.7 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.8` | 12.8 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.9` | 12.9 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.10` | 12.10 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.11` | 12.11 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12a` | 12.12(a) | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.12b` | 12.12(b) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12c` | 12.12(c) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12d` | 12.12(d) | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.12e` | 12.12(e) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-i` | 12.12(f)(i) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-ii` | 12.12(f)(ii) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-iii` | 12.12(f)(iii) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-iv` | 12.12(f)(iv) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-v` | 12.12(f)(v) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-vi` | 12.12(f)(vi) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-vii` | 12.12(f)(vii) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12f-viii` | 12.12(f)(viii) | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.12g` | 12.12(g) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12h` | 12.12(h) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.12i` | 12.12(i) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.13` | 12.13 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.14` | 12.14 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.15` | 12.15 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.16` | 12.16 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-12.17` | 12.17–12.19 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-12.20` | 12.20 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.6c` | 10.6(c) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.6d` | 10.6(d) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.6e` | 10.6(e) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.6f` | 10.6(f) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.6g` | 10.6(g) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.7` | 10.7 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.8a` | 10.8(a) | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-10.8b` | 10.8(b) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.8c` | 10.8(c) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.8d` | 10.8(d) | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-10.8e` | 10.8(e) | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.9` | 10.9 | `sfc-vasp` | 无 | 节录 |
| `SFC-VATP-10.10` | 10.10 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.20` | 10.20 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-10.21` | 10.21 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-SCH3-1` | 附表 3 第 1 节 | `sfc-vasp` | 无 | 原文 |
| `SFC-VATP-SCH3-2` | 附表 3 第 2 节 | `sfc-vasp` | 无 | 原文 |

#### ia-gl20-2024

[《网络安全指引》（GL20，含网络韧性评估框架）](https://www.ia.org.hk/en/legislative_framework/files/GL20_Eng.pdf) · 发布：2024-12 · 来源核验：2026-09-21

法律地位：保险业监管局根据《保险业条例》发布的指引；不具法律效力，但不遵从可影响董事或控权人的持续适当人选评估，并可用于判断行为或遗漏是否可能损害保单持有人利益

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `IA-GL20-5.1` | 5.1 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-5.2` | 5.2 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-5.3` | 5.3 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-5.4` | 5.4 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-6.1` | 6.1 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-6.2` | 6.2 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-7.1` | 7.1 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-7.2` | 7.2 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-8.1` | 8.1 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-8.2` | 8.2 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-8.3` | 8.3 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-8.4` | 8.4 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-9.1` | 9.1 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-9.2` | 9.2 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-9.3` | 9.3 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-9.4` | 9.4 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-9.5` | 9.5 | `ia-authorized-insurer` | 无 | 原文 |
| `IA-GL20-10.1` | 10.1 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-GL20-10.2` | 10.2 | `ia-authorized-insurer` | 无 | 节录 |
| `IA-CRAF-1.2.2` | CRAF 1.2.2 | `ia-authorized-insurer` | `ia-craf` | 原文 |
| `IA-CRAF-1.2.3` | CRAF 1.2.3 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.4a` | CRAF 1.2.4 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.4b` | CRAF 1.2.4 — Inherent risk assessment | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.4c` | CRAF 1.2.4 — Cybersecurity maturity assessment | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.5` | CRAF 1.2.5 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.6a` | CRAF 1.2.6 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.6b` | CRAF 1.2.6 | `ia-authorized-insurer` | `ia-craf` | 原文 |
| `IA-CRAF-1.2.6c` | CRAF 1.2.6(ii) | `ia-authorized-insurer` | `ia-craf` | 原文 |
| `IA-CRAF-1.2.6d` | CRAF 1.2.6(iii) | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-1.2.6e` | CRAF 1.2.6 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-3.2` | CRAF 3.2 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-3.3` | CRAF 3.3 | `ia-authorized-insurer` | `ia-craf` | 节录 |
| `IA-CRAF-B-1.1` | CRAF Annex B, 1.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-1.2` | CRAF Annex B, 1.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-1.3` | CRAF Annex B, 1.3 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-1.4` | CRAF Annex B, 1.4 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-1.5` | CRAF Annex B, 1.5 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-2.1` | CRAF Annex B, 2.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-2.2` | CRAF Annex B, 2.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.1` | CRAF Annex B, 3.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.2` | CRAF Annex B, 3.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.3` | CRAF Annex B, 3.3 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.4` | CRAF Annex B, 3.4 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.5` | CRAF Annex B, 3.5 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-3.6` | CRAF Annex B, 3.6 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-4.1` | CRAF Annex B, 4.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-4.2` | CRAF Annex B, 4.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-4.3` | CRAF Annex B, 4.3 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-4.4` | CRAF Annex B, 4.4 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-5.1` | CRAF Annex B, 5.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-5.2` | CRAF Annex B, 5.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-5.3` | CRAF Annex B, 5.3 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-5.4` | CRAF Annex B, 5.4 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-5.5` | CRAF Annex B, 5.5 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-6.1` | CRAF Annex B, 6.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-6.2` | CRAF Annex B, 6.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-7.1` | CRAF Annex B, 7.1 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-7.2` | CRAF Annex B, 7.2 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |
| `IA-CRAF-B-7.3` | CRAF Annex B, 7.3 | `ia-authorized-insurer` | `ia-craf` | 概括说明 |

#### ia-gl20-faq-2024

[《网络安全指引》（GL20）常见问题](https://www.ia.org.hk/en/legislative_framework/files/FAQ_GL20.pdf) · 发布：2024-11 · 来源核验：2026-09-21

法律地位：保险业监管局就 GL20 与 CRAF 的实施说明

参考文件，未直接关联控制；不能据此认定条款已覆盖。

#### ia-gl20-ira-template

[GL20 固有风险评级评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Inherent_Risk_Rating_Assessment_template.xlsx) · 发布：2024-12 · 来源核验：2026-09-21

法律地位：保险业监管局指定的 CRAF 固有风险评估及呈交模板

参考文件，未直接关联控制；不能据此认定条款已覆盖。

#### ia-gl20-cma-template

[GL20 网络安全成熟度评估模板](https://www.ia.org.hk/en/legislative_framework/files/IA_GL20_Cybersecurity_Maturity_Assessment_template.xlsx) · 发布：2024-12 · 来源核验：2026-09-21

法律地位：保险业监管局指定的 CRAF 网络安全成熟度评估及呈交模板

参考文件，未直接关联控制；不能据此认定条款已覆盖。

## 新加坡

数据目录：[sg](../data/sg/)。

### 实体与业务特征对照

| 实体 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `sg-bank` | 新加坡银行 | Bank in Singapore，《银行业法》第 2(1) 条所定义；触发 FSM-N05 与 FSM-N06 |
| `sg-cms` | 资本市场服务持牌人及相关实体 | 包括核准交易所、认可市场经营者、持牌交易资料库、核准/认可结算所、中央托收存管处、核准控股公司、资本市场服务持牌人、注册基金管理公司、认可/指定基准管理人及提交人、获批的集体投资计划受托人；触发 FSM-N22 |
| `sg-dtsp` | 持牌数字代币服务提供者 | Digital Token Service Provider，根据《金融服务与市场法》第 138 条获发牌照；触发 FSM-N31 |

| 业务特征 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `sg-online-financial-services` | 透过互联网提供网上银行、交易或支付等金融服务 | 包括网上银行、流动银行、网上交易、流动/数字钱包及以账户与交易 API 提供的金融及支付服务；触发《科技风险管理指引》第 14 章网上金融服务的相关控制点 |

### 文件盘点

| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |
| --- | --- | ---: | --- | --- |
| `mas-cyber-hygiene` · [FSM-N06《网络卫生通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n06/mas-notice-fsm-n06.pdf?sc_lang=en) | `current`；已关联控制（完整性待人工复核） | 6 | 6／0／0 | 2026-09-21 |
| `mas-cyber-hygiene-cmi` · [FSM-N22《网络卫生通知》（致资本市场金融机构）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n22/mas-notice-fsm-n22.pdf) | `current`；已关联控制（完整性待人工复核） | 6 | 6／0／0 | 2026-09-21 |
| `mas-cyber-hygiene-dtsp` · [FSM-N31《网络卫生通知》（致持牌数字代币服务提供者）](https://www.mas.gov.sg/-/media/mas-notice-fsm-n31---notice-on-cyber-hygiene.pdf) | `current`；已关联控制（完整性待人工复核） | 6 | 6／0／0 | 2026-09-21 |
| `mas-trm-notice` · [FSM-N05《科技风险管理通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n05/mas-notice-fsm-n05.pdf?sc_lang=en) | `current`；已关联控制（完整性待人工复核） | 6 | 6／0／0 | 2026-09-21 |
| `mas-trm-guidelines` · [《科技风险管理指引》](https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf) | `current`；已关联控制（完整性待人工复核） | 35 | 0／0／35 | 2026-09-21 |

### 逐条对应

#### mas-cyber-hygiene

[FSM-N06《网络卫生通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n06/mas-notice-fsm-n06.pdf?sc_lang=en) · 发布：2024-05-09 · 来源核验：2026-09-21

法律地位：根据《金融服务与市场法 2022》第 29(1) 条向新加坡银行发出的法定通知，2024-05-10 生效

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `MAS-N06-4.1` | 4.1 | `sg-bank` | 无 | 原文 |
| `MAS-N06-4.2` | 4.2 | `sg-bank` | 无 | 原文 |
| `MAS-N06-4.3` | 4.3 | `sg-bank` | 无 | 原文 |
| `MAS-N06-4.4` | 4.4 | `sg-bank` | 无 | 原文 |
| `MAS-N06-4.5` | 4.5 | `sg-bank` | 无 | 原文 |
| `MAS-N06-4.6` | 4.6 | `sg-bank` | 无 | 原文 |

#### mas-cyber-hygiene-cmi

[FSM-N22《网络卫生通知》（致资本市场金融机构）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n22/mas-notice-fsm-n22.pdf) · 发布：2024-05-09 · 来源核验：2026-09-21

法律地位：根据《金融服务与市场法 2022》第 29(1) 条向资本市场服务持牌人及相关实体发出的法定通知，2024-05-10 生效；2024-08-20 经 FSM-N22（修订）2024 修订，将获批准的集体投资计划受托人纳入适用范围

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `MAS-N22-4.1` | 4.1 | `sg-cms` | 无 | 原文 |
| `MAS-N22-4.2` | 4.2 | `sg-cms` | 无 | 原文 |
| `MAS-N22-4.3` | 4.3 | `sg-cms` | 无 | 原文 |
| `MAS-N22-4.4` | 4.4 | `sg-cms` | 无 | 原文 |
| `MAS-N22-4.5` | 4.5 | `sg-cms` | 无 | 原文 |
| `MAS-N22-4.6` | 4.6 | `sg-cms` | 无 | 原文 |

#### mas-cyber-hygiene-dtsp

[FSM-N31《网络卫生通知》（致持牌数字代币服务提供者）](https://www.mas.gov.sg/-/media/mas-notice-fsm-n31---notice-on-cyber-hygiene.pdf) · 发布：2025-05-30 · 来源核验：2026-09-21

法律地位：根据《金融服务与市场法 2022》第 29(1) 条向根据该法第 138 条获发牌照的数字代币服务提供者发出的法定通知，2025-06-30 生效

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `MAS-N31-4.1` | 4.1 | `sg-dtsp` | 无 | 原文 |
| `MAS-N31-4.2` | 4.2 | `sg-dtsp` | 无 | 原文 |
| `MAS-N31-4.3` | 4.3 | `sg-dtsp` | 无 | 原文 |
| `MAS-N31-4.4` | 4.4 | `sg-dtsp` | 无 | 原文 |
| `MAS-N31-4.5` | 4.5 | `sg-dtsp` | 无 | 原文 |
| `MAS-N31-4.6` | 4.6 | `sg-dtsp` | 无 | 原文 |

#### mas-trm-notice

[FSM-N05《科技风险管理通知》（致新加坡银行）](https://www.mas.gov.sg/-/media/mas-media-library/regulation/notices/trpd/notice-fsm-n05/mas-notice-fsm-n05.pdf?sc_lang=en) · 发布：2024-05-09 · 来源核验：2026-09-21

法律地位：根据《金融服务与市场法 2022》第 29(1) 条向新加坡银行发出的法定通知，2024-05-10 生效

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `MAS-N05-4` | 4 | `sg-bank` | 无 | 原文 |
| `MAS-N05-5` | 5 | `sg-bank` | 无 | 原文 |
| `MAS-N05-6` | 6 | `sg-bank` | 无 | 原文 |
| `MAS-N05-7` | 7 | `sg-bank` | 无 | 原文 |
| `MAS-N05-8` | 8 | `sg-bank` | 无 | 原文 |
| `MAS-N05-9` | 9 | `sg-bank` | 无 | 原文 |

#### mas-trm-guidelines

[《科技风险管理指引》](https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf) · 发布：2021-01-18 · 来源核验：2026-09-21

法律地位：指引，不具法律约束力；MAS 在监管评估中会考虑金融机构遵循指引精神的程度

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `MAS-TRMG-3.1` | 3.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-3.2` | 3.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-3.3` | 3.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-3.4` | 3.4 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-3.5` | 3.5 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-3.6` | 3.6 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-8.1` | 8.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-8.2` | 8.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-8.3` | 8.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-8.4` | 8.4 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-8.5` | 8.5 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-9.1` | 9.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-9.2` | 9.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-9.3` | 9.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-10.1` | 10.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-10.2` | 10.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-11.1` | 11.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-11.2` | 11.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-11.3` | 11.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-11.4` | 11.4 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-11.5` | 11.5 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-12.1` | 12.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-12.2` | 12.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-12.3` | 12.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.1` | 13.1 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.2` | 13.2 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.3` | 13.3 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.4` | 13.4 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.5` | 13.5 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-13.6` | 13.6 | 该地域全部已建模实体 | 无 | 概括说明 |
| `MAS-TRMG-14.1` | 14.1 | 该地域全部已建模实体 | `sg-online-financial-services` | 概括说明 |
| `MAS-TRMG-14.2` | 14.2 | 该地域全部已建模实体 | `sg-online-financial-services` | 概括说明 |
| `MAS-TRMG-14.3` | 14.3 | 该地域全部已建模实体 | `sg-online-financial-services` | 概括说明 |
| `MAS-TRMG-14.4` | 14.4 | 该地域全部已建模实体 | `sg-online-financial-services` | 概括说明 |
| `MAS-TRMG-15.1` | 15.1 | 该地域全部已建模实体 | 无 | 概括说明 |

## 澳大利亚

数据目录：[au](../data/au/)。

### 实体与业务特征对照

| 实体 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `au-adi` | 认可接受存款机构（ADI） | Authorised deposit-taking institution，包括外国 ADI（只就其澳大利亚分行营运适用）及根据《银行法》认可的非营运控股公司；触发 CPS 234 |
| `au-general-insurer` | 一般保险人 | General insurer，包括 C 类保险人（只就其澳大利亚分行营运适用）、根据《保险法》认可的非营运控股公司及第 2 级保险集团的母公司；触发 CPS 234 |
| `au-life` | 人寿保险公司 | Life company，包括友好协会（friendly society）、合资格外国人寿保险公司（EFLIC，只就其澳大利亚分行营运适用）及根据《人寿保险法》注册的非营运控股公司；触发 CPS 234 |
| `au-phi` | 私人医疗保险人 | Private health insurer，根据《2015 年私人医疗保险（审慎监管）法》注册；触发 CPS 234 |
| `au-rse` | 退休金受托人（RSE 持牌人） | RSE licensee，根据《1993 年退休金业（监管）法》获发牌照，就其业务营运适用；触发 CPS 234 |

| 业务特征 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `au-third-party-assets` | 资讯资产由关联方或第三方管理 | 包括外判、云服务及集团内共用服务；不限于 CPS 231 所指的重大外判业务活动。触发 CPS 234 第 16、22、28、34 段对关联方/第三方的评估要求 |

### 文件盘点

| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |
| --- | --- | ---: | --- | --- |
| `apra-cps-234` · [审慎标准 CPS 234《资讯保安》](https://www.apra.gov.au/system/files/cps_234_july_2019_for_public_release.pdf) | `current`；已关联控制（完整性待人工复核） | 24 | 24／0／0 | 2026-10-07 |

### 逐条对应

#### apra-cps-234

[审慎标准 CPS 234《资讯保安》](https://www.apra.gov.au/system/files/cps_234_july_2019_for_public_release.pdf) · 发布：2018-11-07 · 来源核验：2026-10-07

法律地位：审慎标准，属具法律约束力的立法文书；依据《1959 年银行法》第 11AF 条、《1973 年保险法》第 32 条、《1995 年人寿保险法》第 230A 条、《2015 年私人医疗保险（审慎监管）法》第 92 条及《1993 年退休金业（监管）法》第 34C 条制定，2019-07-01 生效（由关联方或第三方管理的资讯资产，于与该第三方合约下次续期日或 2020-07-01 两者较早者起适用）

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `APRA-234-13` | 13 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-14` | 14 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-15` | 15 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-16` | 16 | 该地域全部已建模实体 | `au-third-party-assets` | 原文 |
| `APRA-234-17` | 17 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-18` | 18 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-19` | 19 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-20` | 20 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-21` | 21 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-22` | 22 | 该地域全部已建模实体 | `au-third-party-assets` | 原文 |
| `APRA-234-23` | 23 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-24` | 24 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-25` | 25 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-26` | 26 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-27` | 27 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-28` | 28 | 该地域全部已建模实体 | `au-third-party-assets` | 原文 |
| `APRA-234-29` | 29 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-30` | 30 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-31` | 31 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-32` | 32 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-33` | 33 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-34` | 34 | 该地域全部已建模实体 | `au-third-party-assets` | 原文 |
| `APRA-234-35` | 35 | 该地域全部已建模实体 | 无 | 原文 |
| `APRA-234-36` | 36 | 该地域全部已建模实体 | 无 | 原文 |

## 马来西亚

数据目录：[my](../data/my/)。

### 实体与业务特征对照

| 实体 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `my-bank` | 持牌银行、投资银行及伊斯兰银行 | Licensed bank / investment bank / Islamic bank，根据《2013 年金融服务法》或《2013 年伊斯兰金融服务法》获发牌照；触发 RMiT |
| `my-insurer` | 持牌保险人及伊斯兰保险（Takaful）经营者 | 包括专业再保险人及专业再伊斯兰保险经营者（不包括外国专业再保险人及专业再伊斯兰保险经营者的分行）；触发 RMiT |
| `my-dfi` | 订明发展金融机构 | Prescribed development financial institution，根据《2002 年发展金融机构法》订明；触发 RMiT |
| `my-emoney` | 合资格电子货币发行人 | Eligible e-money issuer，即按《电子货币》政策文件附录 1 准则具相当市场占有率的获批准电子货币发行人；豁免 Part C 第 16–17 段及附录 6、7；未被指定为国家关键信息基础设施（NCII）实体者另豁免第 13.3 段 |
| `my-dps` | 指定支付系统营运者 | Operator of a designated payment system；豁免第 16–17 段、附录 6、7 及第 12.3–12.9 段 |
| `my-acquirer` | 非银行注册商户收单机构（市场占有率 5% 或以上） | Non-bank registered merchant acquirer，占马来西亚非银行商户收单交易金额或笔数至少 5%；豁免第 16–17 段及附录 6、7；未被指定为 NCII 实体者另豁免第 13.3 段 |
| `my-iri` | 中介汇款机构（市场占有率 5% 或以上） | Intermediary remittance institution，占马来西亚中介汇款交易金额或笔数至少 5%；豁免第 16–17 段、附录 6、7 及第 12.3–12.9 段；未被指定为 NCII 实体者另豁免第 13.3 段 |

| 业务特征 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `my-digital-services` | 透过电子渠道提供数码服务 | 经互联网、流动装置、自助及销售点终端向客户提供支付、汇款、银行、伊斯兰银行、保险或伊斯兰保险服务；触发 RMiT 第 12 章及第 16 章的数码服务要求 |
| `my-cloud` | 使用云端服务 | 触发 RMiT 第 10.50–10.52 段的云端风险评估及资料保障要求 |
| `my-ncii` | 获 BNM 指定为国家关键信息基础设施（NCII）实体 | 根据《2024 年网络安全法》第 17(1) 条获指定；触发第 11.4 段，并令电子货币发行人、商户收单机构及中介汇款机构须遵守第 10.31 及 13.3 段 |

### 文件盘点

| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |
| --- | --- | ---: | --- | --- |
| `bnm-rmit` · [《科技风险管理》政策文件（RMiT）](https://www.bnm.gov.my/documents/20124/938039/pd-rmit-sep26.pdf) | `current`；已关联控制（完整性待人工复核） | 118 | 118／0／0 | 2026-10-07 |

### 逐条对应

#### bnm-rmit

[《科技风险管理》政策文件（RMiT）](https://www.bnm.gov.my/documents/20124/938039/pd-rmit-sep26.pdf) · 发布：2026-09-25 · 来源核验：2026-10-07

法律地位：政策文件（BNM/RH/PD 028-98）；标为「S」的条文根据《2013 年金融服务法》第 47(1) 条、《2013 年伊斯兰金融服务法》第 57(1) 条、《2002 年发展金融机构法》第 41(1) 条及《2011 年货币服务业法》第 34(2) 条订明，必须遵守，违反可招致执法行动；标为「G」的条文属指引，鼓励采纳。按第 4.1 段于 2025-11-28 生效，取代 2023-06-01 版 RMiT

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `BNM-RMIT-8.1` | S 8.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.2` | S 8.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.3` | S 8.3 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.4` | S 8.4 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.5` | S 8.5 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.6` | S 8.6 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-8.7` | S 8.7 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-9.1` | S 9.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-9.2` | S 9.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-9.3` | S 9.3 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-9.4` | S 9.4 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-9.5` | S 9.5 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.1` | S 10.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.2` | S 10.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.3` | S 10.3 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.4` | S 10.4 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.5` | S 10.5 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.6` | S 10.6 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.7` | S 10.7 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.8` | S 10.8 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.10` | S 10.10 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.11` | S 10.11 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.12` | S 10.12 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.13` | S 10.13 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.14` | G 10.14 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.15` | G 10.15 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.16` | S 10.16 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.17` | S 10.17 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.18` | S 10.18 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.19` | S 10.19 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.20` | S 10.20 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.21` | S 10.21 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.22` | S 10.22 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.23` | S 10.23 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.24` | S 10.24 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.25` | S 10.25 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.26` | S 10.26 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.27` | S 10.27 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.28` | S 10.28 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.29` | S 10.29 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.30` | S 10.30 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.31` | S 10.31 | `my-bank`、`my-insurer`、`my-dfi`、`my-dps` | 无 | 原文 |
| `BNM-RMIT-10.31-NCII` | S 10.31 | `my-emoney`、`my-acquirer`、`my-iri` | `my-ncii` | 原文 |
| `BNM-RMIT-10.32` | S 10.32 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.33` | G 10.33 | `my-emoney`、`my-acquirer`、`my-iri` | 无 | 原文 |
| `BNM-RMIT-10.34` | S 10.34 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.35` | S 10.35 | 该地域全部已建模实体 | `my-digital-services` | 原文 |
| `BNM-RMIT-10.36` | S 10.36 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.37` | S 10.37 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.39` | S 10.39 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.40` | S 10.40 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.41` | S 10.41 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.42` | S 10.42 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.43` | S 10.43 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.44` | S 10.44 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.45` | S 10.45 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.46` | S 10.46 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.47` | S 10.47 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.48` | S 10.48 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.49` | S 10.49 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.50` | S 10.50 | 该地域全部已建模实体 | `my-cloud` | 原文 |
| `BNM-RMIT-10.51` | G 10.51 | 该地域全部已建模实体 | `my-cloud` | 原文 |
| `BNM-RMIT-10.52` | S 10.52 | 该地域全部已建模实体 | `my-cloud` | 原文 |
| `BNM-RMIT-10.53` | S 10.53 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.54` | S 10.54 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.55` | S 10.55 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.56` | S 10.56 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-10.57` | S 10.57 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.1` | S 11.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.2` | S 11.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.3` | S 11.3 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.4` | S 11.4 | 该地域全部已建模实体 | `my-ncii` | 原文 |
| `BNM-RMIT-11.5` | S 11.5 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.6` | S 11.6 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.7` | G 11.7 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.8` | S 11.8 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.9` | S 11.9 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.10` | S 11.10 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.11` | S 11.11 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.12` | S 11.12 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.13` | S 11.13 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.14` | S 11.14 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.15` | S 11.15 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.16` | S 11.16 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.17` | S 11.17 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.18` | S 11.18 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.19` | S 11.19 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-11.20` | S 11.20 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-12.1` | S 12.1 | 该地域全部已建模实体 | `my-digital-services` | 原文 |
| `BNM-RMIT-12.2` | S 12.2 | 该地域全部已建模实体 | `my-digital-services` | 原文 |
| `BNM-RMIT-12.3` | S 12.3 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.4` | S 12.4 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.5` | S 12.5 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.6` | S 12.6 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.7` | S 12.7 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.8` | S 12.8 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-12.9` | S 12.9 | `my-bank`、`my-insurer`、`my-dfi`、`my-emoney`、`my-acquirer` | `my-digital-services` | 原文 |
| `BNM-RMIT-13.1` | S 13.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-13.2` | S 13.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-13.3` | S 13.3 | `my-bank`、`my-insurer`、`my-dfi`、`my-dps` | 无 | 原文 |
| `BNM-RMIT-13.3-NCII` | S 13.3 | `my-emoney`、`my-acquirer`、`my-iri` | `my-ncii` | 原文 |
| `BNM-RMIT-13.4` | G 13.4 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-14.1` | S 14.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-14.2` | S 14.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-15.1` | S 15.1 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-15.2` | S 15.2 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-15.3` | S 15.3 | 该地域全部已建模实体 | 无 | 原文 |
| `BNM-RMIT-16.1` | S 16.1 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-16.2` | S 16.2 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-16.3` | S 16.3 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-16.4` | S 16.4 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-16.5` | S 16.5 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-16.6` | S 16.6 | `my-bank`、`my-insurer`、`my-dfi` | `my-digital-services` | 原文 |
| `BNM-RMIT-17.1` | S 17.1 | `my-bank`、`my-insurer`、`my-dfi` | 无 | 原文 |
| `BNM-RMIT-17.2` | S 17.2 | `my-bank`、`my-insurer`、`my-dfi` | 无 | 原文 |
| `BNM-RMIT-17.4` | S 17.4 | `my-bank`、`my-insurer`、`my-dfi` | 无 | 原文 |
| `BNM-RMIT-17.5` | S 17.5 | `my-bank`、`my-insurer`、`my-dfi` | 无 | 原文 |
| `BNM-RMIT-18.1` | S 18.1 | 该地域全部已建模实体 | 无 | 原文 |

## 中国内地

数据目录：[cn](../data/cn/)。

### 实体与业务特征对照

| 实体 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `cn-bank` | 银行业金融机构 | 政策性银行、商业银行、农村合作银行、农村信用合作社、金融资产管理公司、企业集团财务公司、金融租赁公司、汽车金融公司、消费金融公司、货币经纪公司、信托公司及理财公司；触发《银行保险机构数据安全管理办法》 |
| `cn-insurer` | 保险机构 | 保险公司、保险资产管理公司及保险集团（控股）公司；触发《银行保险机构数据安全管理办法》 |
| `cn-securities` | 证券期货经营机构 | 证券公司、期货公司和基金管理公司等（第七十一条第（二）项）；触发《证券期货业网络和信息安全管理办法》 |
| `cn-sf-core` | 证券期货市场核心机构 | 证券期货交易场所、证券登记结算机构等承担市场公共职能或行业信息技术公共基础设施运营的机构（第七十一条第（一）项）；触发《证券期货业网络和信息安全管理办法》，含只适用于核心机构的条文 |
| `cn-other` | 其他网络运营者／数据处理者 | 例如非银行支付机构、金融科技公司或为金融机构提供服务的企业；只适用跨行业的法律、行政法规及部门规章 |

| 业务特征 ID | 名称 | 范围说明 |
| --- | --- | --- |
| `cn-ciio` | 被认定为关键信息基础设施运营者 | 由保护工作部门按认定规则认定并通知（《关键信息基础设施安全保护条例》第十条）；触发《网络安全法》第三章第二节、该条例第三章，以及证券期货业办法第五章 |
| `cn-personal-info` | 处理个人信息 | 触发《个人信息保护法》及各办法中的个人信息保护条文 |
| `cn-pi-volume` | 处理个人信息达到国家网信部门规定数量 | 触发《个人信息保护法》第四十条（境内存储）及第五十二条（个人信息保护负责人） |
| `cn-pi-10m` | 处理 1000 万人以上个人信息 | 触发《网络数据安全管理条例》第二十八条：须遵守该条例对重要数据处理者的第三十条、第三十二条规定 |
| `cn-important-data` | 处理重要数据（重要数据的处理者） | 按国家有关规定识别、申报并经相关地区、部门告知或公开发布为重要数据；触发《数据安全法》第二十七条第二款、第三十条及《网络数据安全管理条例》第四章 |
| `cn-cross-border` | 向境外提供个人信息或重要数据 | 包括向境外母公司、集团或服务提供者提供；触发数据出境条文 |
| `cn-outsourcing` | 委托第三方处理数据或外包信息科技服务 | 触发委托处理、外包及供应链条文 |
| `cn-ai` | 使用人工智能或模型算法 | 触发《银行保险机构数据安全管理办法》第五十至五十二条 |

### 文件盘点

| 来源 ID／官方文件 | 登记状态 | 已收录控制 | 原文／节录／概括 | 最近来源核验 |
| --- | --- | ---: | --- | --- |
| `cn-csl` · [《中华人民共和国网络安全法》（2025 年修正）](https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm) | `current`；已关联控制（完整性待人工复核） | 16 | 8／8／0 | 2026-10-26 |
| `cn-dsl` · [《中华人民共和国数据安全法》](http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html) | `current`；已关联控制（完整性待人工复核） | 6 | 6／0／0 | 2026-10-26 |
| `cn-pipl` · [《中华人民共和国个人信息保护法》](http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html) | `current`；已关联控制（完整性待人工复核） | 15 | 10／5／0 | 2026-10-26 |
| `cn-ciio` · [《关键信息基础设施安全保护条例》（国务院令第 745 号）](https://www.gov.cn/gongbao/content/2021/content_5636138.htm) | `current`；已关联控制（完整性待人工复核） | 11 | 11／0／0 | 2026-10-26 |
| `cn-ndsr` · [《网络数据安全管理条例》（国务院令第 790 号）](https://www.gov.cn/gongbao/2024/issue_11646/202410/content_6980863.html) | `current`；已关联控制（完整性待人工复核） | 14 | 12／2／0 | 2026-10-26 |
| `cn-incident-reporting` · [《国家网络安全事件报告管理办法》](https://www.cac.gov.cn/2025-09/15/c_1759583017717009.htm) | `current`；已关联控制（完整性待人工复核） | 5 | 3／2／0 | 2026-10-26 |
| `cn-nfra-data` · [《银行保险机构数据安全管理办法》](https://www.gov.cn/zhengce/zhengceku/202412/content_6995081.htm) | `current`；已关联控制（完整性待人工复核） | 46 | 44／2／0 | 2026-10-26 |
| `cn-csrc-netsec` · [《证券期货业网络和信息安全管理办法》（证监会令第 218 号）](https://www.gov.cn/gongbao/2023/issue_10526/202306/content_6887131.html) | `current`；已关联控制（完整性待人工复核） | 38 | 30／8／0 | 2026-10-26 |

### 逐条对应

#### cn-csl

[《中华人民共和国网络安全法》（2025 年修正）](https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm) · 发布：2025-10-28 · 来源核验：2026-10-26

法律地位：法律；2016-11-07 通过，2017-06-01 施行；根据 2025-10-28 全国人大常委会《关于修改〈中华人民共和国网络安全法〉的决定》修正（条文序号相应调整），修正后自 2026-01-01 起施行

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-CSL-23-1` | 第二十三条第（一）项 | 该地域全部已建模实体 | 无 | 节录 |
| `CN-CSL-23-2` | 第二十三条第（二）项 | 该地域全部已建模实体 | 无 | 节录 |
| `CN-CSL-23-3` | 第二十三条第（三）项 | 该地域全部已建模实体 | 无 | 节录 |
| `CN-CSL-23-4` | 第二十三条第（四）项 | 该地域全部已建模实体 | 无 | 节录 |
| `CN-CSL-27` | 第二十七条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-CSL-42` | 第四十二条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-CSL-44-2` | 第四十四条第二款 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-CSL-35` | 第三十五条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CSL-36-1` | 第三十六条第（一）项 | 该地域全部已建模实体 | `cn-ciio` | 节录 |
| `CN-CSL-36-2` | 第三十六条第（二）项 | 该地域全部已建模实体 | `cn-ciio` | 节录 |
| `CN-CSL-36-3` | 第三十六条第（三）项 | 该地域全部已建模实体 | `cn-ciio` | 节录 |
| `CN-CSL-36-4` | 第三十六条第（四）项 | 该地域全部已建模实体 | `cn-ciio` | 节录 |
| `CN-CSL-37` | 第三十七条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CSL-38` | 第三十八条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CSL-39` | 第三十九条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CSL-40` | 第四十条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |

#### cn-dsl

[《中华人民共和国数据安全法》](http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html) · 发布：2021-06-10 · 来源核验：2026-10-26

法律地位：法律；2021-06-10 通过，2021-09-01 起施行

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-DSL-27-1` | 第二十七条第一款 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-DSL-27-2` | 第二十七条第二款 | 该地域全部已建模实体 | `cn-important-data` | 原文 |
| `CN-DSL-29` | 第二十九条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-DSL-30` | 第三十条 | 该地域全部已建模实体 | `cn-important-data` | 原文 |
| `CN-DSL-31` | 第三十一条 | 该地域全部已建模实体 | `cn-important-data`、`cn-cross-border` | 原文 |
| `CN-DSL-36` | 第三十六条 | 该地域全部已建模实体 | 无 | 原文 |

#### cn-pipl

[《中华人民共和国个人信息保护法》](http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html) · 发布：2021-08-20 · 来源核验：2026-10-26

法律地位：法律；2021-08-20 通过，2021-11-01 起施行

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-PIPL-51-1` | 第五十一条第（一）项 | 该地域全部已建模实体 | `cn-personal-info` | 节录 |
| `CN-PIPL-51-2` | 第五十一条第（二）项 | 该地域全部已建模实体 | `cn-personal-info` | 节录 |
| `CN-PIPL-51-3` | 第五十一条第（三）项 | 该地域全部已建模实体 | `cn-personal-info` | 节录 |
| `CN-PIPL-51-4` | 第五十一条第（四）项 | 该地域全部已建模实体 | `cn-personal-info` | 节录 |
| `CN-PIPL-51-5` | 第五十一条第（五）项 | 该地域全部已建模实体 | `cn-personal-info` | 节录 |
| `CN-PIPL-21` | 第二十一条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-outsourcing` | 原文 |
| `CN-PIPL-28` | 第二十八条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-PIPL-47` | 第四十七条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-PIPL-38` | 第三十八条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-cross-border` | 原文 |
| `CN-PIPL-40` | 第四十条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-ciio` | 原文 |
| `CN-PIPL-40-VOL` | 第四十条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-pi-volume` | 原文 |
| `CN-PIPL-52` | 第五十二条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-pi-volume` | 原文 |
| `CN-PIPL-54` | 第五十四条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-PIPL-55` | 第五十五条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-PIPL-57` | 第五十七条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |

#### cn-ciio

[《关键信息基础设施安全保护条例》（国务院令第 745 号）](https://www.gov.cn/gongbao/content/2021/content_5636138.htm) · 发布：2021-07-30 · 来源核验：2026-10-26

法律地位：行政法规；2021-04-27 国务院常务会议通过，2021-07-30 公布，2021-09-01 起施行

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-CIIO-11` | 第十一条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-12` | 第十二条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-13` | 第十三条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-14` | 第十四条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-15` | 第十五条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-16` | 第十六条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-17` | 第十七条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-18` | 第十八条第一款 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-19` | 第十九条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-20` | 第二十条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |
| `CN-CIIO-21` | 第二十一条 | 该地域全部已建模实体 | `cn-ciio` | 原文 |

#### cn-ndsr

[《网络数据安全管理条例》（国务院令第 790 号）](https://www.gov.cn/gongbao/2024/issue_11646/202410/content_6980863.html) · 发布：2024-09-24 · 来源核验：2026-10-26

法律地位：行政法规；2024-08-30 国务院常务会议通过，2024-09-24 公布，2025-01-01 起施行

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-NDSR-9` | 第九条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-NDSR-11-1` | 第十一条第一款 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-NDSR-11-2` | 第十一条第二款 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-NDSR-12` | 第十二条 | 该地域全部已建模实体 | `cn-outsourcing` | 原文 |
| `CN-NDSR-27` | 第二十七条 | 该地域全部已建模实体 | `cn-personal-info` | 原文 |
| `CN-NDSR-28` | 第二十八条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-pi-10m` | 原文 |
| `CN-NDSR-29-2` | 第二十九条第二款 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-NDSR-30` | 第三十条第一款、第二款 | 该地域全部已建模实体 | `cn-important-data` | 节录 |
| `CN-NDSR-31` | 第三十一条 | 该地域全部已建模实体 | `cn-important-data` | 原文 |
| `CN-NDSR-32` | 第三十二条 | 该地域全部已建模实体 | `cn-important-data` | 原文 |
| `CN-NDSR-33` | 第三十三条第一款、第二款 | 该地域全部已建模实体 | `cn-important-data` | 节录 |
| `CN-NDSR-35` | 第三十五条 | 该地域全部已建模实体 | `cn-personal-info`、`cn-cross-border` | 原文 |
| `CN-NDSR-37` | 第三十七条 | 该地域全部已建模实体 | `cn-important-data`、`cn-cross-border` | 原文 |
| `CN-NDSR-38` | 第三十八条 | 该地域全部已建模实体 | `cn-cross-border` | 原文 |

#### cn-incident-reporting

[《国家网络安全事件报告管理办法》](https://www.cac.gov.cn/2025-09/15/c_1759583017717009.htm) · 发布：2025-09-11 · 来源核验：2026-10-26

法律地位：国家互联网信息办公室发布，2025-11-01 起施行；附件为《网络安全事件分级指南》

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-CIR-4-CII` | 第四条第一款、第二款 | 该地域全部已建模实体 | `cn-ciio` | 节录 |
| `CN-CIR-4` | 第四条第一款、第四款至第六款 | 该地域全部已建模实体 | 无 | 节录 |
| `CN-CIR-5` | 第五条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-CIR-7` | 第七条 | 该地域全部已建模实体 | 无 | 原文 |
| `CN-CIR-8` | 第八条 | 该地域全部已建模实体 | 无 | 原文 |

#### cn-nfra-data

[《银行保险机构数据安全管理办法》](https://www.gov.cn/zhengce/zhengceku/202412/content_6995081.htm) · 发布：2024-12-27 · 来源核验：2026-10-26

法律地位：国家金融监督管理总局规范性文件（金规〔2024〕24 号），自 2024-12-27 公布之日起施行，《银行保险机构数据安全办法》（银保监办发〔2022〕118 号）同时废止

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-NFRA-DS-9` | 第九条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-10` | 第十条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-11` | 第十一条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-12` | 第十二条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-13` | 第十三条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-14` | 第十四条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-15` | 第十五条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-16` | 第十六条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-18` | 第十八条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-20` | 第二十条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-22` | 第二十二条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-26` | 第二十六条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-28` | 第二十八条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-29` | 第二十九条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-30` | 第三十条 | `cn-bank`、`cn-insurer` | `cn-outsourcing` | 原文 |
| `CN-NFRA-DS-31` | 第三十一条 | `cn-bank`、`cn-insurer` | `cn-outsourcing` | 原文 |
| `CN-NFRA-DS-36` | 第三十六条 | `cn-bank`、`cn-insurer` | `cn-cross-border` | 原文 |
| `CN-NFRA-DS-37` | 第三十七条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-38` | 第三十八条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-39` | 第三十九条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-40` | 第四十条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-41` | 第四十一条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-42` | 第四十二条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-43-1` | 第四十三条（访问控制） | `cn-bank`、`cn-insurer` | 无 | 节录 |
| `CN-NFRA-DS-43-2` | 第四十三条（操作日志与审计） | `cn-bank`、`cn-insurer` | 无 | 节录 |
| `CN-NFRA-DS-44` | 第四十四条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-45` | 第四十五条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-46` | 第四十六条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-47` | 第四十七条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-48` | 第四十八条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-49` | 第四十九条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-50` | 第五十条 | `cn-bank`、`cn-insurer` | `cn-ai` | 原文 |
| `CN-NFRA-DS-51` | 第五十一条 | `cn-bank`、`cn-insurer` | `cn-ai` | 原文 |
| `CN-NFRA-DS-52` | 第五十二条 | `cn-bank`、`cn-insurer` | `cn-ai` | 原文 |
| `CN-NFRA-DS-53` | 第五十三条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-58` | 第五十八条 | `cn-bank`、`cn-insurer` | `cn-personal-info` | 原文 |
| `CN-NFRA-DS-61` | 第六十一条 | `cn-bank`、`cn-insurer` | `cn-personal-info`、`cn-outsourcing` | 原文 |
| `CN-NFRA-DS-63` | 第六十三条 | `cn-bank`、`cn-insurer` | `cn-personal-info` | 原文 |
| `CN-NFRA-DS-64` | 第六十四条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-65` | 第六十五条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-66` | 第六十六条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-68` | 第六十八条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-69` | 第六十九条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-71` | 第七十一条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-73` | 第七十三条 | `cn-bank`、`cn-insurer` | 无 | 原文 |
| `CN-NFRA-DS-74` | 第七十四条 | `cn-bank`、`cn-insurer` | 无 | 原文 |

#### cn-csrc-netsec

[《证券期货业网络和信息安全管理办法》（证监会令第 218 号）](https://www.gov.cn/gongbao/2023/issue_10526/202306/content_6887131.html) · 发布：2023-02-27 · 来源核验：2026-10-26

法律地位：部门规章（中国证监会令第 218 号）；2023-01-17 委务会议审议通过，2023-02-27 公布，2023-05-01 起施行，《证券期货业信息安全保障管理办法》（证监会令第 82 号）同时废止

| 控制 ID | 条款／定位 | 适用实体（任一） | 业务特征（全部） | 引用分类 |
| --- | --- | --- | --- | --- |
| `CN-CSRC-9` | 第九条第一款 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-10` | 第十条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-11` | 第十一条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-12` | 第十二条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-13` | 第十三条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-14` | 第十四条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-15` | 第十五条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-16` | 第十六条第一款、第二款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-17` | 第十七条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-18-1` | 第十八条第一款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-18-2` | 第十八条第二款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-19` | 第十九条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-20` | 第二十条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-21` | 第二十一条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-22` | 第二十二条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-23` | 第二十三条第二款 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-26-1` | 第二十六条第一款 | `cn-sf-core` | 无 | 节录 |
| `CN-CSRC-30` | 第三十条 | `cn-securities`、`cn-sf-core` | `cn-personal-info` | 原文 |
| `CN-CSRC-32` | 第三十二条 | `cn-securities`、`cn-sf-core` | `cn-personal-info` | 原文 |
| `CN-CSRC-34` | 第三十四条 | `cn-securities`、`cn-sf-core` | `cn-personal-info` | 原文 |
| `CN-CSRC-35` | 第三十五条 | `cn-securities`、`cn-sf-core` | `cn-personal-info` | 原文 |
| `CN-CSRC-36` | 第三十六条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-37` | 第三十七条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-38-1` | 第三十八条第一款 | `cn-sf-core` | 无 | 节录 |
| `CN-CSRC-38-2` | 第三十八条第二款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-39` | 第三十九条第一款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-40` | 第四十条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-41` | 第四十一条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-43` | 第四十三条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-44` | 第四十四条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-45` | 第四十五条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-46` | 第四十六条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-47` | 第四十七条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-48` | 第四十八条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-49` | 第四十九条 | `cn-securities`、`cn-sf-core` | `cn-ciio` | 原文 |
| `CN-CSRC-54` | 第五十四条第一款 | `cn-securities`、`cn-sf-core` | 无 | 节录 |
| `CN-CSRC-55` | 第五十五条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
| `CN-CSRC-59` | 第五十九条 | `cn-securities`、`cn-sf-core` | 无 | 原文 |
