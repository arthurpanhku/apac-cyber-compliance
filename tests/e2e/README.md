# Browser Smoke Tests (Playwright)

These are end-to-end smoke tests that verify the main user paths in `index.html`. They run only in CI and are not runtime dependencies.

## Running locally

1. Install dependencies: `cd tests/e2e && npm install`
2. Run tests: `npm test`
3. View report: `npx playwright show-report`

The tests open `index.html` in three languages (`en`, `zh-Hant`, `zh-Hans`) and validate basic flows (jurisdiction selection, controls appear, marking control status, CSV export).
