# Browser Smoke Tests (Playwright)

Playwright tests for `index.html`. CONTRIBUTING asks for a browser check
whenever UI logic changes, and applicability rules — the Malaysian RMiT
exemptions, for example — are only visible by clicking through the page. These
tests do that clicking, so CI catches a broken main path on every pull request.

They are not a runtime or development dependency of the site: the page has no
build step, and Playwright is installed only under `tests/e2e/` to run these
tests. `index.html` never loads it.

## Running locally

```bash
cd tests/e2e
npm ci
npx playwright install chromium
npm test
```

On Linux, use `npx playwright install --with-deps chromium` to install the
system libraries as well — that is what CI does. Failures leave a screenshot
and a trace under `tests/e2e/test-results/`, which CI uploads as an artifact.

## Why `file://` and not a server

The tests open `file://…/index.html` directly. That is how the site is meant to
be used — double-click the file — and `tools/validate.mjs` rejects `fetch()`
and ES modules for that reason. Serving the page over `http://` would test a
different program than the one users run.

## What is covered

- `en`, `zh-Hant` and `zh-Hans` each load without a `pageerror`, apply their
  language to `<html lang>`, and render the toolbar, the jurisdiction filter and
  the scope tabs.
- Every jurisdiction (Hong Kong, Singapore, Australia, Malaysia): switching to
  its tab and ticking the first entity type shows at least one control card.
- Australia: an ADI alone shows 20 control cards; adding the third-party
  characteristic makes 24.
- Malaysia: an eligible e-money issuer alone does not show `BNM-RMIT-13.3-NCII`
  while clause `BNM-RMIT-10.33` does; ticking the NCII characteristic removes
  the exemption and `BNM-RMIT-13.3-NCII` appears.
- Marking a control and exporting CSV produces a file that contains the
  control's ID and its status.

Everything else in the UI — import/export of projects, printing, themes, search
and filters — is **not** covered yet.
