const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.amazon.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/',
    AutomationExercise: 'https://automationexercise.com/'
  },

});
