import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
  webServer: {
    command: 'npx serve -l 8080 ..',
    url: 'http://localhost:8080/index.html',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
