import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  // Failures leave a screenshot and a trace here; CI uploads this directory.
  outputDir: './test-results',
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    acceptDownloads: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  // No webServer: the page is opened over file://, see tests/e2e/README.md.
});
