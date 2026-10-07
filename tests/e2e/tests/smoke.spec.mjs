import { test, expect } from '@playwright/test';
import fs from 'fs';

test('basic smoke - en', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html?lang=en');
  await page.waitForLoadState('domcontentloaded');
  
  const jurisdictionSelect = page.locator('#jurisdiction');
  await expect(jurisdictionSelect).toBeVisible();
  
  // Check for no page errors
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.waitForTimeout(1000);
  expect(errors.length).toBe(0);
});

test('basic smoke - zh-Hant', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html?lang=zh-Hant');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(500);
});

test('basic smoke - zh-Hans', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html?lang=zh-Hans');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(500);
});
