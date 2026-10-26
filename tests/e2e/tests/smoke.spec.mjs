// Browser tests for index.html.
//
// The page is opened over file://, not through an HTTP server. That is the way
// the project is meant to be used — double-click index.html — and
// tools/validate.mjs rejects fetch() and ES modules for exactly that reason,
// so serving the page over http:// would test a different program than the one
// users run. Playwright itself is never loaded by the page: it lives only under
// tests/e2e/ and is installed only to run these tests.
//
// Local run: cd tests/e2e && npm ci && npx playwright install chromium && npm test

import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const pageUrl = language => `${pathToFileURL(path.join(root, 'index.html'))}?lang=${language}`;

// Each test gets its own context, so scope selections and localStorage never
// leak from one test into the next. Initialised here so the afterEach check
// still runs sensibly if the browser itself fails to launch.
let pageErrors = [];

test.beforeEach(({ page }) => {
  // Registered before any goto(): a listener added afterwards would miss
  // precisely the errors thrown while the page loads.
  pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
});

test.afterEach(() => {
  expect(pageErrors, 'the page must not throw while it loads or reacts').toEqual([]);
});

// Expands the first licence group of a jurisdiction and ticks its first entity
// type. Groups start collapsed, so the checkboxes do not exist until the
// toggle is clicked. Everything is located by id or position: the labels are
// translated, the ids are not.
async function selectFirstEntityType(page, jurisdiction) {
  await page.click(`#scope-tab-${jurisdiction}`);
  const panel = page.locator(`#scope-panel-${jurisdiction}`);
  await panel.locator('.scope-license-group-toggle').first().click();
  await panel.locator('.scope-license-options input[type=checkbox]').first().check();
}

// 1. All three languages load cleanly and render the shell.
for (const language of ['en', 'zh-Hant', 'zh-Hans']) {
  test(`${language}: loads without errors and renders the shell`, async ({ page }) => {
    await page.goto(pageUrl(language));

    // The chosen language is applied to <html lang>, which is what the browser
    // and assistive technology use to pick pronunciation.
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page).toHaveTitle(/.+/);

    await expect(page.locator('#jurisdiction-filter')).toBeVisible();
    await expect(page.locator('#jurisdiction-filter option')).not.toHaveCount(0);
    // The scope tabs are built from data/jurisdictions.js on load.
    await expect(page.locator('#scope-tab-au')).toBeAttached();
    await expect(page.locator('#scope-tab-my')).toBeAttached();
    await expect(page.locator('#scope-tab-cn')).toBeAttached();
    await expect(page.locator('#export-csv')).toHaveText(/.+/);
  });
}

// 2. Every jurisdiction has a working main path: pick the first entity type and
// at least one control card appears.
for (const jurisdiction of ['hksar', 'sg', 'au', 'my', 'cn']) {
  test(`${jurisdiction}: selecting the first entity type shows control cards`, async ({ page }) => {
    await page.goto(pageUrl('en'));

    await selectFirstEntityType(page, jurisdiction);

    await expect(page.locator('#results article.control').first()).toBeVisible();
  });
}

// 3. Fixed applicability assertion for Australia (CPS 234).
test('au: an ADI alone yields 20 control cards, 24 with the third-party characteristic', async ({ page }) => {
  await page.goto(pageUrl('en'));

  await selectFirstEntityType(page, 'au');
  await expect(page.locator('#results article.control')).toHaveCount(20);

  // Australia has a single characteristic, so position is unambiguous here.
  await page.locator('#scope-panel-au .scope-attribute-options input[type=checkbox]').first().check();
  await expect(page.locator('#results article.control')).toHaveCount(24);
});

// 4. Fixed applicability assertion for the Malaysian RMiT exemptions: an
// eligible e-money issuer is exempt from clause 13.3 until it is an NCII entity.
test('my: the NCII clause appears only once the NCII characteristic is ticked', async ({ page }) => {
  await page.goto(pageUrl('en'));

  await page.click('#scope-tab-my');
  const panel = page.locator('#scope-panel-my');
  await panel.locator('.scope-license-group-toggle').first().click();
  // Position 3 is "Eligible e-money issuer" (data/my/taxonomy.js order); the
  // label itself is translated, so it is not used as a locator.
  await panel.locator('.scope-license-options input[type=checkbox]').nth(3).check();

  // Clause 10.33 still applies to an e-money issuer...
  const controlIds = page.locator('#results .control-ids');
  await expect(controlIds.filter({ hasText: 'BNM-RMIT-10.33' })).not.toHaveCount(0);
  // ...but 13.3 is exempt while the firm is not designated NCII.
  await expect(controlIds.filter({ hasText: 'BNM-RMIT-13.3-NCII' })).toHaveCount(0);

  // "NCII" stays latin in all three locales, so this locator survives
  // translation. Ticking it removes the exemption.
  await panel.locator('.scope-attribute-options .opt').filter({ hasText: 'NCII' }).locator('input').check();
  await expect(page.locator('#results .control-ids').filter({ hasText: 'BNM-RMIT-13.3-NCII' })).not.toHaveCount(0);
});

// 4b. Mainland China: a banking institution sees the cross-sector laws plus the
// NFRA measures; CII obligations appear only once the CII characteristic is
// ticked. The official text is Chinese and is labelled as such, untranslated.
test('cn: a bank yields 54 cards, 75 as a CII operator, with the Chinese official text', async ({ page }) => {
  await page.goto(pageUrl('en'));

  await selectFirstEntityType(page, 'cn');
  await expect(page.locator('#results article.control')).toHaveCount(54);

  // "Identified as a CII operator" is first in data/cn/taxonomy.js.
  await page.locator('#scope-panel-cn .scope-attribute-options input[type=checkbox]').first().check();
  await expect(page.locator('#results article.control')).toHaveCount(75);
  await expect(page.locator('#results .control-ids').filter({ hasText: 'CN-CIIO-14' })).not.toHaveCount(0);

  const card = page.locator('#results article.control')
    .filter({ has: page.locator('.control-ids', { hasText: /^CN-CSL-27$/ }) });
  await card.locator('details.quote > summary').click();
  await expect(card.locator('.quote-kind').first()).toHaveText('Verbatim Chinese provision (official text)');
  await expect(card.locator('blockquote[lang="zh-Hans"]')).toContainText('网络运营者应当制定网络安全事件应急预案');
});

// 5. Mark a control, export CSV, and find that control in the file.
test('en: a marked control is exported in the CSV', async ({ page }) => {
  await page.goto(pageUrl('en'));

  await selectFirstEntityType(page, 'au');
  const firstCard = page.locator('#results article.control').first();
  // A merged card lists every control id it covers, separated by "  ·  ".
  const [controlId] = (await firstCard.locator('.control-ids').textContent()).split('·').map(v => v.trim());
  expect(controlId).toMatch(/^[A-Z0-9-]+$/);

  // The assessment radios are named after the control they assess; STATUSES[1]
  // is "done". Labels are translated, the radio order is not. The radio itself
  // is covered by its styled <label>, which is what a user actually clicks, so
  // click the label.
  const done = page.locator('label.s-done').filter({ has: page.locator(`input[name="as-${controlId}"]`) });
  await done.click();

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#export-csv'),
  ]);
  expect(download.suggestedFilename()).toMatch(/\.csv$/);

  const csv = await readFile(await download.path(), 'utf8');
  expect(csv).toContain(controlId);
  // The status column carries the localised label for "done".
  expect(csv).toContain('Implemented');
});

// 6. Cross-regulator deltas and the per-regulator view, for a bank supervised
// by MAS and APRA. The scope is seeded through localStorage, in the same shape
// the app saves, so the test does not depend on the order of licence labels.
test('en: MAS × APRA deltas, regulator comparison and per-regulator CSV', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('hkcc.state.v2', JSON.stringify({
      schemaVersion: 2,
      project: { name: 'Delta check', asOfDate: '2026-10-23' },
      scope: { licenses: ['sg-bank', 'au-adi'], attributes: [] },
      assessments: {},
      unresolvedAssessments: {},
      preferences: { merge: true }
    }));
  });
  await page.goto(pageUrl('en'));

  // The MAS 1-hour notification card states what each side adds over the other.
  const card = page.locator('#results article.control')
    .filter({ has: page.locator('.control-ids', { hasText: /^MAS-N05-7$/ }) });
  const deltas = card.locator('.deltas');
  await expect(deltas).toContainText('APRA-234-35');
  await expect(deltas).toContainText('1 hour');
  await expect(deltas).toContainText('72 hours');

  // Two regulators in scope: the comparison table has one row for each.
  const rows = page.locator('#coverage tbody tr');
  await expect(rows).toHaveCount(2);

  // Selecting APRA filters both the cards and the CSV to APRA's provisions.
  await page.locator('#coverage tbody th button', { hasText: 'APRA' }).click();
  await expect(page.locator('#regulator-filter')).toHaveValue('APRA');
  await expect(page.locator('#results .control-ids', { hasText: 'MAS-N05-7' })).toHaveCount(0);

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#export-csv'),
  ]);
  const csv = await readFile(await download.path(), 'utf8');
  expect(csv).toContain('APRA-234-35');
  expect(csv).not.toContain('"MAS-N05-7"');
  expect(csv).toContain('Cross-regulator relation');
  expect(csv).toContain('APRA-234-35 overlaps MAS-N05-7 (MAS)');
});
