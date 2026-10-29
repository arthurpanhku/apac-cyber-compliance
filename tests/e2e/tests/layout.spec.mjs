// Responsive and keyboard regressions for the assessment workspace. Uses the
// same offline entry point as the smoke suite, with isolated assessment data.
import { test, expect } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const pageUrl = language => `${pathToFileURL(path.join(root, 'index.html'))}?lang=${language}`;

async function expectNoHorizontalOverflow(page) {
  const dimensions = await page.evaluate(() => ({
    content: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport + 1);
}

for (const language of ['en', 'zh-Hant', 'zh-Hans']) {
  for (const width of [320, 768, 1024]) {
    test(`${language} at ${width}px: scope, filters and records remain usable offline`, async ({ page }) => {
      const errors = [];
      const externalRequests = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('request', request => {
        if (/^https?:/.test(request.url())) externalRequests.push(request.url());
      });
      await page.setViewportSize({ width, height: 900 });
      await page.goto(pageUrl(language));
      await expect(page.locator('#results .empty button')).toBeVisible();
      await expect(page.locator('.toolbar')).toBeHidden();
      await expectNoHorizontalOverflow(page);

      if (width <= 900) {
        await page.locator('#scope-open').click();
        // Measure once the drawer has reached its visible position, not mid-transition.
        await expect.poll(async () => Math.round((await page.locator('#sidebar').boundingBox()).x)).toBe(0);
      }
      const tabs = page.locator('.scope-jurisdiction-tab');
      await expect(tabs).toHaveCount(5);
      const sidebar = await page.locator('#sidebar').boundingBox();
      for (const tab of await tabs.all()) {
        const bounds = await tab.boundingBox();
        expect(bounds.x).toBeGreaterThanOrEqual(sidebar.x);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(sidebar.x + sidebar.width);
      }

      // Moving between jurisdiction tabs must work without a mouse and keep focus.
      await page.locator('#scope-tab-hksar').focus();
      await page.locator('#scope-tab-hksar').press('ArrowRight');
      await expect(page.locator('#scope-tab-sg')).toHaveAttribute('aria-selected', 'true');
      await expect(page.locator('#scope-tab-sg')).toBeFocused();
      await page.locator('#scope-panel-sg .scope-license-group-toggle').first().click();
      await page.locator('#scope-panel-sg .scope-license-options input').first().check();
      if (width <= 900) await page.locator('#sidebar .scope-close').click();

      await expect(page.locator('#results article.control').first()).toBeVisible();
      await expect(page.locator('.toolbar')).toBeVisible();
      if (width <= 900) {
        await expect(page.locator('#domain-filter')).toBeHidden();
        await page.locator('#filter-toggle').click();
      }
      await expect(page.locator('#domain-filter')).toBeVisible();
      await page.locator('#q').fill('no-such-control-layout-check');
      await expect(page.locator('#results article.control')).toHaveCount(0);
      await page.locator('#q').fill('');

      const firstCard = page.locator('#results article.control').first();
      await firstCard.locator('details.work-record > summary').click();
      const owner = firstCard.locator('.record-field input[type=text]');
      await owner.fill('Layout verification');
      await owner.press('Tab');
      await expectNoHorizontalOverflow(page);
      await page.reload();
      await expect(page.locator('#results article.control').first()
        .locator('.record-field input[type=text]')).toHaveValue('Layout verification');
      await expectNoHorizontalOverflow(page);
      expect(externalRequests).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
}

test('mobile scope drawer contains keyboard focus and returns it on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(pageUrl('en'));
  await page.locator('#scope-open').click();
  await expect(page.locator('#sidebar')).toHaveAttribute('role', 'dialog');
  await expect(page.locator('#sidebar .scope-close')).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  for (let index = 0; index < 12; index++) {
    expect(await page.evaluate(() => document.getElementById('sidebar').contains(document.activeElement))).toBe(true);
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Escape');
  await expect(page.locator('#scope-open')).toBeFocused();
  await expect(page.locator('main')).toHaveJSProperty('inert', false);
  await expect(page.locator('.site-header')).toHaveJSProperty('inert', false);
});

test('dark mode still prints a readable assessment without workspace navigation', async ({ page }) => {
  await page.goto(pageUrl('en'));
  await page.locator('#scope-tab-sg').click();
  await page.locator('#scope-panel-sg .scope-license-group-toggle').first().click();
  await page.locator('#scope-panel-sg .scope-license-options input').first().check();
  await page.locator('#header-more-toggle').click();
  await page.locator('#theme').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(page.locator('body')).toHaveCSS('color', 'rgb(0, 0, 0)');
  await expect(page.locator('.workspace-intro')).toBeHidden();
  await expect(page.locator('.site-header')).toBeHidden();
  await expect(page.locator('.toolbar')).toBeHidden();
  await expect(page.locator('.print-header')).toBeVisible();
  await expect(page.locator('#results article.control').first()).toBeVisible();
});
