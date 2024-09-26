import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';
import { allureCypress } from 'allure-cypress/reporter';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    screenshotOnRunFailure: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
        videoOnFailOnly: false,
      });
      getCompareSnapshotsPlugin(on, config);
      return config;
    },
  },
});
