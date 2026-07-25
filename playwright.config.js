// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker, workers } from 'cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config = ({
  testDir: './tests',
  fullyParallel: true, // Runs tests across browsers simultaneously
  timeout : 30*1000,
  workers:2,
  expect : {
  timeout :10*1000,
  },
  reporter : 'html',
    use: {
      // browserName: 'chromium',
      headless : false,
      trace : 'retain-on-failure',
      screenshot : 'only-on-failure',
      storageState : "test_data/Authentication.json"
      
      },
  projects:[
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]

 
});
module.exports = Config

