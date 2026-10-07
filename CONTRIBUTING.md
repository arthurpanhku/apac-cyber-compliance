# Contributing

**English** · [简体中文](CONTRIBUTING.zh-Hans.md)

This project is only as valuable as its provisions are accurate. The rules below all follow from that.

**Scope:** *open-source, offline cybersecurity and technology-risk regulatory mapping and gap assessment for
APAC financial institutions.* Contributions should fit that sentence — see the [Scope](README.md#scope) section
of the README for what is in and out.

## Basic principles

1. **Every control must trace back to the official text.** `sourceId` points to a document with an official link in
   `data/<jurisdiction>/sources.js`, and `clause` holds the actual clause number used in that document (e.g. `1.1`,
   `(B)(iii)`, `7.3.4`). Entries of the "synthesis of industry practice" kind are not accepted.
2. **Label the `quote` field honestly.** Use `quoteStatus: 'verbatim'` for word-for-word text, `excerpt` for text with
   omissions, and `summary` for a section heading or a description of the source. Never label a heading or summary as
   verbatim text; the Chinese explanation goes in `requirement`. Where the Chinese explanation differs from the
   official text, the official text governs — that is what this tool stands on.
3. **Don't fill in dates from memory.** The issue date (`issued`) is whatever the regulator's own website shows.
   Each source also has its own `verifiedOn` — the day you **actually opened the official website and checked the link
   and version**. When you change one source, advance only that source's `verifiedOn`, never anyone else's: the whole
   value of the field is that it honestly reflects when each document was last checked.
   The header shows the **earliest** of them (the weakest link), computed by `HKCC.verifiedOn()`, so there is no global
   date to maintain by hand.
4. **State the legal status clearly.** `legalStatus` must distinguish statutory guidelines, non-statutory guidelines,
   circulars, codes of practice and legislation — the compliance consequences differ, and they must not be lumped
   together.

## Before you submit

```bash
node tools/validate.mjs
node tools/check-equivalence.mjs
node --test tests/*.test.mjs
```

The checks cover: unique IDs, sources exist, valid control domains / licences / business characteristics, resolvable
`overlaps` / `related` references, the equivalence rules for every merged group, required fields present, date formats, a `verifiedOn` on every source, **and completeness of the
English and Traditional Chinese layers**. Sources not re-checked for more than 180 days produce a warning (it doesn't
fail the run, but it is worth dealing with).

These checks run automatically on every PR via `.github/workflows/ci.yml`, which also confirms that the generated
Traditional Chinese files are up to date. PRs that fail validation are not merged.

There is also a link check (runs automatically every Monday, and can be triggered manually):

```bash
node tools/check-links.mjs
```

It fails only on a definite failure (404 / 410 / DNS failure); 403 / 429 are usually bot protection, and 5xx and
timeouts are usually transient, so those are only reported. **When you find a broken link, track down the new address on
the regulator's website and advance that source's `verifiedOn` at the same time.**

## When you can't reach a regulator's website

Writing controls requires checking the official text word for word, but restricted development environments
(containers, proxies, corporate networks) often block regulators' websites entirely — not only `www.sfc.hk`,
`brdr.hkma.gov.hk` and `occics.gov.hk`, but often `www.mas.gov.sg`, `apra.gov.au` and `bnm.gov.my` too. GitHub Actions
runners don't have this restriction, so fetching the text can be done in CI:

**Actions → 取回条文原文 (fetch source text) → Run workflow**, entering a source ID (as in
`data/<jurisdiction>/sources.js`, e.g. `sfc-vatp-guidelines`, `mas-cyber-hygiene`), and optionally a PDF page range
such as `1-20`. It also works locally:

```bash
node tools/fetch-source.mjs sfc-vatp-guidelines 1-20
```

The text is converted to plain text and written both to the job log (readable without any extra network access) and to
the `source-text` build artifact (full text, kept for 14 days). Only source IDs already registered in a
`data/<jurisdiction>/sources.js` are accepted, never arbitrary URLs — it is a tool for fetching official text, not a
general-purpose fetching proxy. The log prints only the first 1,200 lines of the body; for longer documents (guidelines
often run to 50 or 60 pages), fetch in several page ranges or download the `source-text` artifact.

To add a new source you can't reach locally: register it in `sources.js` and push your branch first, then run the
workflow against that branch.

**Do not commit the fetched text to the repository** (`out/` is in `.gitignore`). Copyright belongs to the regulators;
this project only quotes provisions in structured form and links to the official source.

If you changed any Chinese text, regenerate the Traditional Chinese layer:

```bash
pip install opencc-python-reimplemented
python3 tools/gen-hant.py
```

When you change UI logic, test it in a browser (double-click `index.html`; no server needed). At minimum check the main
path "select a licence → controls appear → self-assess → export CSV", and look at `index.html?lang=en`,
`?lang=zh-Hant` and `?lang=zh-Hans` once each.

## Languages

The base data (`data/<jurisdiction>/taxonomy.js`, `data/<jurisdiction>/sources.js`,
`data/<jurisdiction>/controls/*.js`, and the shared `data/domains.js` and `data/jurisdictions.js`) is always written in
**Simplified Chinese**. Other languages are overlays in `data/i18n/`:

| File | How it is maintained |
| --- | --- |
| `data/i18n/zh-Hans.js` | Hand-written. UI strings only — the base data is already Simplified Chinese |
| `data/i18n/en.js` | Hand-written. UI strings + `title` / `requirement` for every control (plus `clause` / `note` where present) |
| `data/i18n/zh-Hant.js` | **Generated — do not edit by hand.** Converted by `tools/gen-hant.py`; manual edits are lost on the next run |
| `README.zh-Hant.md` | **Generated** from `README.zh-Hans.md` |

A few rules:

1. **`quote` is never translated.** It is the regulator's own published text and is shown unchanged in every language.
2. **The English is not translated from the Chinese.** SFC circulars, the HKMA Supervisory Policy Manual and the codes
   of practice are published in English, as are the MAS, APRA and BNM documents. Write `en.js` against the original
   English document, using the words readers will see there; don't translate the Chinese explanation back into English.
3. **New controls must come with `en.js` entries.** Otherwise validation fails (the Traditional Chinese layer is
   generated, so it needs no manual work).
4. If a Traditional Chinese character form or term doesn't match Hong Kong regulatory usage, change the `OVERRIDES`
   table in `tools/gen-hant.py` and regenerate — don't edit the generated output.
5. **`js/engine.js` contains no user-facing text in any language.** The engine serves pages in all three languages as
   well as the Node tests; hard-coding one language would leave users of the other two reading a foreign language in
   dialogs. Results are always returned as codes and parameters via `diag('diagXxx', { … })`. Codes are registered in
   `DIAGNOSTIC_CODES`, the text lives in `data/i18n/zh-Hans.js` and `en.js`, and the page reads it through
   `formatDiagnostic()` → `t()`. The validator confirms every code is registered and has text in all three languages —
   a missing one would show up in the dialog as a bare `diagXxx`.

## Regulatory relationships: Equivalent, Overlaps, Related

| Relationship | Meaning | Merged? | Where to record it |
| --- | --- | --- | --- |
| **Equivalent** | The two requirements are substantively the same | Yes — one card | a group in `data/equivalence.js` |
| **Overlaps** | The requirements partly overlap | No — tag only | the control's `overlaps` field |
| **Related** | Connected, or useful to read together | No — tag only | the control's `related` field |

`overlaps` and `related` only need to be written on one side; the UI shows the tag on both. (The old `crossRefs`
field is no longer accepted by the validator.)

**Only record a group as Equivalent when the provisions genuinely require the same thing.** If either side adds
anything of substance — one more measure, a shorter deadline, a wider scope, a different trigger — use `overlaps`.
A wrong equivalence leads users to believe that satisfying one satisfies the other. When in doubt, don't merge.

Every equivalence group must pass `node tools/check-equivalence.mjs` (rules in `tools/lib/equivalence-rules.mjs`):

| Rule | Requirement |
| --- | --- |
| EQ1 | At least two members, all existing; a control belongs to at most one group |
| EQ2 | `basis` is `same-provision`, `identical-text` or `reviewed` |
| EQ3 | Same control domain |
| EQ4 | Same obligation strength (`priority`): a baseline requirement cannot be equivalent to an enhanced one |
| EQ5 | Same deadline, or none |
| EQ6 | Every member has an official-text `quote` labelled `verbatim` or `excerpt` — equivalence cannot rest on a summary |
| EQ7 | `same-provision`: same source, clause and text. Otherwise members come from different sources |
| EQ8 | `identical-text`: quotes identical after normalising whitespace and quotation marks; only the names for the regulated person listed in `addressees` may differ |
| EQ9 | `reviewed`: a written `rationale` in Chinese and English and a `reviewedOn` date |
| EQ10 | Members of a group are not also marked `overlaps` or `related` with each other |

Choose the `basis`:

- `same-provision` — the same paragraph of the same document, split into several controls because of applicability
  (e.g. RMiT 13.3 and 13.3-NCII)
- `identical-text` — different documents with the same text. If the documents name the regulated person differently
  (e.g. "relevant entity" / "digital token service provider"), list those names in `addressees`; nothing else may
  differ
- `reviewed` — different wording, judged substantively the same after comparing the official texts paragraph by
  paragraph. Write the `rationale` (Simplified Chinese in `data/equivalence.js`, English under `equivalence` in
  `data/i18n/en.js`) and set `reviewedOn` to the date you did the comparison

## Adding a regulation

1. Add the source to the relevant `data/<jurisdiction>/sources.js` (with official link, issue date and legal status)
2. Create or extend a file under `data/<jurisdiction>/controls/`; if a licence or business characteristic doesn't exist
   yet, add it first in `data/<jurisdiction>/taxonomy.js` (its `jurisdiction` field must match the directory)
3. Add the new file to the `<script>` list in `index.html`
4. Add English for the new controls, licences and business characteristics in `data/i18n/en.js`
5. Run `python3 tools/gen-hant.py` to generate the Traditional Chinese layer
6. Update the coverage tables and the control-count badges in `README.md` and `README.zh-Hans.md`
   (`README.zh-Hant.md` is generated by the script)
7. Run the checks and test in a browser

## Adding a jurisdiction

1. Register the new jurisdiction ID and display name in `data/jurisdictions.js`
2. Create `data/<jurisdiction>/{sources.js,taxonomy.js,controls/}`, setting the `jurisdiction` field of licences and
   business characteristics to the new ID; reuse existing control domains in `data/domains.js` where possible, and add
   a new one only for a genuinely different category
3. Add the jurisdiction's English name under `jurisdictions` in `data/i18n/en.js`, and run
   `python3 tools/gen-hant.py` to generate the Traditional Chinese layer (`jurisdictions.label` is converted
   automatically)
4. The remaining steps are the same as "Adding a regulation"

Recent examples: Australia (`data/au/`) and Malaysia (`data/my/`).

## What isn't a good fit

- "Best practice" suggestions with no official source
- Regulatory areas beyond cybersecurity and technology risk (AML, capital, conduct and so on)
- GRC-platform features: accounts, multi-user collaboration, approval workflows, SaaS hosting, cloud sync
- Storing evidence files (the tool records references to evidence only) or technical testing such as
  vulnerability scanning
- Personal interpretations of provisions or compliance opinions (this tool deliberately offers none)
- Changes that need a build step or add runtime dependencies — zero dependencies and double-click-to-run are hard
  constraints of this project
- Anything that makes a network request at runtime (CDN scripts, web fonts, analytics, update checks, remote data).
  Running fully offline inside a firm's own environment is the project's first priority, and `tools/validate.mjs`
  enforces it
