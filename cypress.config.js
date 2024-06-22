const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: '5v6wn7',
 reporter: 'mocha-allure-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // require('cypress-mochawesome-reporter/plugin')(on);
     allureWriter(on, config);
    },

    env:{
      url : 'https://rahulshettyacademy.com',
      allureResultsPath: "allure-results",
      allure: true
    },
    specPattern:'cypress/integration/examples/*.js'
  },
  
});
