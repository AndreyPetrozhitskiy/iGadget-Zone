const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1700,
  viewportHeight: 1000,
  e2e: {
    baseUrl: 'http://localhost:3000/', // Set your base URL here
  },

 
  chromeWebSecurity: false,
  chromeArgs: ["--no-sandbox", "--disable-web-security", "--headless", "--disable-gpu"],

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      viewportHeight:1000,
      viewportWidth:1700
    },
  },
});