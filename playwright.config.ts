import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const ENV = process.env.TEST_ENV || 'dev';

const baseURLs: Record<string, string> = {
  dev: process.env.BASE_URL || 'https://example.com',
  qa: process.env.BASE_URL || 'https://example.com',
  stage: process.env.BASE_URL || 'https://example.com',
};

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5 * 1000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: baseURLs[ENV],

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },

  projects: [
  {
    name: 'setup',
    testMatch: /.*\.setup\.ts/,
  },
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
  },
  {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
  },
  {
    name: 'webkit',
    use: {
      ...devices['Desktop Safari'],
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup'],
  },
],

  outputDir: 'test-results/',
});