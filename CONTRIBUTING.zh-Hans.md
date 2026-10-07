# 贡献指南

**简体** · [English](CONTRIBUTING.md)

本项目的价值取决于条文的准确性。以下规则围绕这一点。

**范围：** *面向亚太金融机构的开源、离线网络安全与科技风险监管要求映射及差距评估工具。*
贡献须符合这句话——在范围内与不在范围内的事项见 README 的[范围](README.zh-Hans.md#范围)一节。

## 基本原则

1. **每条控制点必须可追溯到官方原文。** `sourceId` 指向 `data/<jurisdiction>/sources.js` 中一份有官方链接的文件，
   `clause` 填写条文中的实际条款编号（如 `1.1`、`(B)(iii)`、`7.3.4`）。不接受「综合业界实践」类条目。
2. **`quote` 字段须诚实分类。** 逐字原文用 `quoteStatus: 'verbatim'`，删节内容用 `excerpt`，
   章节标题或来源说明用 `summary`。不要把标题或摘要标成逐字原文；中文说明写在 `requirement`。
   如中文说明与英文原文有出入，以原文为准——这是工具的立身之本。
3. **不要凭记忆填日期。** 发布日期（`issued`）以监管机构官网显示为准。
   每份出处另有自己的 `verifiedOn`——你**实际打开官网核对过链接与版本**的那一天。
   只改动某一份出处时，只推进那一份的 `verifiedOn`，不要顺手改别人的：
   这个字段的全部价值就在于诚实反映每份条文各自的复核时间。
   页首显示的是其中**最早**的一个（以最弱的一环为准），由 `HKCC.verifiedOn()` 算出，
   无需手动维护全局日期。
4. **法律地位要写清楚。** `legalStatus` 需区分法定指引、非法定指引、通函、实务守则、法例——
   合规后果不同，不能混为一谈。

## 提交前必做

```bash
node tools/validate.mjs
node tools/check-equivalence.mjs
node --test tests/*.test.mjs
```

校验项：ID 唯一、出处存在、控制域／牌照／业务特征有效、overlaps／related 引用可解析、每个合并组的等价性规则、必填字段齐全、
日期格式正确、每份出处都有 `verifiedOn`，**以及英文层与繁体层是否完整**。
超过 180 天未复核的出处会出现提示（不影响通过，但值得处理）。

这些检查由 `.github/workflows/ci.yml` 在每个 PR 上自动运行，同时会确认繁体生成物是最新的；
校验不通过的 PR 不会合并。

另有链接巡检（每周一自动运行，也可手动触发）：

```bash
node tools/check-links.mjs
```

只有确定失效（404／410／域名解析不了）才会失败；403／429 多为机器人防护，
5xx 与超时多为暂时性故障，只报告。**发现链接失效时，请到监管机构官网找回新地址，
并同步推进该出处的 `verifiedOn`。**

## 连不上监管机构网站时

撰写控制点必须逐字对照官方原文，但受限的开发环境（容器、代理、公司网络）
常把监管机构的官网整域拦掉——不止 `www.sfc.hk`、`brdr.hkma.gov.hk`、`occics.gov.hk`，
`www.mas.gov.sg`、`apra.gov.au`、`bnm.gov.my` 同样常被拦。GitHub Actions 的 runner 没有这个限制，
所以取文这一步可以放到 CI 里跑：

**Actions → 取回条文原文 → Run workflow**，填入出处 ID（与 `data/<jurisdiction>/sources.js`
一致，如 `sfc-vatp-guidelines`、`mas-cyber-hygiene`），PDF 可另填页码范围如 `1-20`。
本地同样可用：

```bash
node tools/fetch-source.mjs sfc-vatp-guidelines 1-20
```

原文会转成纯文本，同时写进作业日志（不需额外出网即可阅读）与构建产物
`source-text`（完整全文，保留 14 天）。只接受各 `data/<jurisdiction>/sources.js` 里
已登记的出处 ID，不接受任意 URL——它是取官方原文的工具，不是通用抓取代理。
日志只印正文的前 1200 行；文件较长时（如指引类文件动辄五六十页）请用页码范围分几次取，
或直接下载 `source-text` 构建产物看全文。

新增一份本地连不上的出处时：先在 `sources.js` 登记并推送分支，再对该分支运行工作流。

**取回的原文不要提交进仓库**（`out/` 已在 `.gitignore` 中）。版权属于各监管机构，
本项目只以结构化形式引述条文并链接官方出处。

若改动过任何中文文字，还须重新生成繁体层：

```bash
pip install opencc-python-reimplemented
python3 tools/gen-hant.py
```

改动界面逻辑时请在浏览器中实测（双击 `index.html` 即可，不需要服务器）：
至少验证「选择牌照 → 出现控制点 → 自评 → 导出 CSV」这条主路径，
并用 `index.html?lang=en`、`?lang=zh-Hant`、`?lang=zh-Hans` 各看一遍。

## 多语言

基础数据（`data/<jurisdiction>/taxonomy.js`、`data/<jurisdiction>/sources.js`、
`data/<jurisdiction>/controls/*.js`、共用的 `data/domains.js`、`data/jurisdictions.js`）
一律以**简体中文**撰写，
其余语言以覆盖层形式放在 `data/i18n/`：

| 文件 | 维护方式 |
| --- | --- |
| `data/i18n/zh-Hans.js` | 手写。只有界面字符串——基础数据本身即简体 |
| `data/i18n/en.js` | 手写。界面字符串 + 全部控制点的 `title` / `requirement`（及有值时的 `clause` / `note`） |
| `data/i18n/zh-Hant.js` | **自动生成，请勿手改。** 由 `tools/gen-hant.py` 转换而来，手改会在下次生成时丢失 |
| `README.zh-Hant.md` | **自动生成**，由 `README.zh-Hans.md` 转换而来 |

几条规则：

1. **`quote` 永不翻译。** 它是监管机构发布的英文原文，任何语言下都原样显示。
2. **英文不是从中文翻译过来的。** SFC 通函、HKMA 监管政策手册与各实务守则本身即以英文发布，
   `en.js` 应对照英文原始文件撰写，用词与读者在原文中看到的一致；不要把中文说明直译回英文。
3. **新增控制点必须同时补 `en.js`。** 否则校验失败（繁体层由脚本生成，不需要手动补）。
4. 繁体的个别字形若不合香港监管文件的写法，请改 `tools/gen-hant.py` 的 `OVERRIDES` 表并重新生成，
   不要直接改生成结果。
5. **`js/engine.js` 里不写任何一种语言的面向用户文字。** 引擎同时服务三种语言的页面与
   Node 测试，写死一种语言就会让另外两种语言的使用者在对话框里读到外语。
   检查结果一律以 `diag('diagXxx', { … })` 回传代码与参数，代码登记在
   `DIAGNOSTIC_CODES`，文字写在 `data/i18n/zh-Hans.js` 与 `en.js`，
   由页面的 `formatDiagnostic()` 经 `t()` 取用。校验器会确认每个代码都已登记、
   且三种语言都有文案——漏了文案对话框会直接显示 `diagXxx`。

## 监管关系：Equivalent、Overlaps、Related

| 关系 | 含义 | 是否合并 | 登记位置 |
| --- | --- | --- | --- |
| **Equivalent（实质等价）** | 两个监管要求实质相同 | 合并为一张卡片 | `data/equivalence.js` 的等价组 |
| **Overlaps（部分重叠）** | 要求部分重叠 | 不合并，只显示标签 | 控制点的 `overlaps` 字段 |
| **Related（相关）** | 存在关联或参考价值 | 不合并，只显示标签 | 控制点的 `related` 字段 |

`overlaps` 与 `related` 只需写在一方，界面会在两边都显示标签。（旧的 `crossRefs` 字段已不被校验器接受。）

**只有两条条文确实要求同一件事时才登记为等价。** 任何一方多出实质内容——多一项措施、时限更短、范围更广、
触发条件不同——都请用 `overlaps`。错误的等价会让使用者误以为满足一方即满足另一方。拿不准时宁可不合并。

每个等价组都必须通过 `node tools/check-equivalence.mjs`（规则见 `tools/lib/equivalence-rules.mjs`）：

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

`basis` 的选择：

- `same-provision`——同一份文件的同一段，因适用范围不同拆成多条控制点（如 RMiT 13.3 与 13.3-NCII）
- `identical-text`——不同文件、原文相同。如各文件对受规管者的称谓不同（如 relevant entity／digital token
  service provider），把这些称谓列在 `addressees`；除此之外不得有任何差异
- `reviewed`——措辞不同，但逐段对照官方原文后判断实质相同。须写明 `rationale`（简体写在
  `data/equivalence.js`，英文写在 `data/i18n/en.js` 的 `equivalence`），`reviewedOn` 填实际对照的日期

## 新增一份法规

1. 在对应司法管辖区的 `data/<jurisdiction>/sources.js` 加入出处条目（含官方链接、发布日期、法律地位）
2. 在 `data/<jurisdiction>/controls/` 新建或扩充对应文件；牌照/业务特征不存在时先在
   `data/<jurisdiction>/taxonomy.js` 补上（`jurisdiction` 字段须与目录一致）
3. 在 `index.html` 的 `<script>` 列表中加入新文件
4. 在 `data/i18n/en.js` 补上新控制点、新牌照/业务特征的英文
5. 运行 `python3 tools/gen-hant.py` 生成繁体层
6. 更新 `README.md` 与 `README.zh-Hans.md` 的覆盖范围表格与徽章中的控制点数量
   （`README.zh-Hant.md` 由脚本生成，不必手改）
7. 运行校验并在浏览器实测

## 新增一个司法管辖区

1. 在 `data/jurisdictions.js` 登记新的司法管辖区 ID 与显示名称
2. 新建 `data/<jurisdiction>/{sources.js,taxonomy.js,controls/}`，牌照与业务特征的
   `jurisdiction` 字段须填新 ID；能复用的控制域优先复用 `data/domains.js` 里已有的，
   只有确实不同类别的概念才新增
3. 在 `data/i18n/en.js` 的 `jurisdictions` 里补上新管辖区的英文名，运行
   `python3 tools/gen-hant.py` 生成繁体层（`jurisdictions.label` 会自动转换）
4. 其余步骤同「新增一份法规」

最近的例子：澳大利亚（`data/au/`）与马来西亚（`data/my/`）。

## 什么不适合提交

- 没有官方出处的「最佳实践」建议
- 网络安全与科技风险以外的监管领域（反洗钱、资本、操守等）
- GRC 平台功能：账号、多人协作、审批流、SaaS 托管、云端同步
- 保存证据文件（工具只记录证据引用）或技术检测（如漏洞扫描）
- 对条文的个人解读或合规意见（本工具刻意不提供意见）
- 需要构建步骤或引入运行时依赖的改动——零依赖、双击可用是本项目的硬约束
- 任何在运行时发出网络请求的改动（CDN 脚本、网络字体、统计、更新检查、远程数据）。
  能在机构自己的环境中完全离线运行是本项目的首要目标，`tools/validate.mjs` 会强制检查
