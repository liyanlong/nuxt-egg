'use strict';
const Nuxt = require('nuxt');
const { loadNuxtConfig } = require('./lib/utils');
module.exports = agent => {
  const options = loadNuxtConfig(agent.config);
  const nuxt = new Nuxt(options);
  agent.beforeStart(function* () {
    try {
      yield nuxt.build();
      if (!options.dev) {
        console.log('[nuxt] Building done'); // eslint-disable-line no-console
      }
    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};
