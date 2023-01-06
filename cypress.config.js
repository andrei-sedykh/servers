const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 800,
    baseUrl: 'https://portal.servers.com',
  },
});
