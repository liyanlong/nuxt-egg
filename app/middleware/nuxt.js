'use strict';

const Nuxt = require('nuxt');
const { checkIfIgnore } = require('../../lib/utils.js');

module.exports = (options, app) => {
  let config = app.config.nuxt;
  try {
    if (typeof config === 'string') {
      config = require(config);
    }
  } catch (e) {
    app.coreLogger.error('[egg-nuxt] ' + config + '  is not valid nuxt config file.');
    process.exit(1);
  }
  config = config || {};

  // https://eggjs.org/zh-cn/basics/env.html
  config.dev = app.config.env === 'local';
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    nuxt.build().catch(error => {
      app.coreLogger.error('[egg-nuxt] build error', error);
      process.exit(1);
    });
  }

  return function* (next) {
    yield next;
    // ignore match path
    if (checkIfIgnore(config, this.path)) {
      return;
    }
    // ignore status is not 404
    if (this.status !== 404 || this.method !== 'GET') {
      return;
    }
    this.status = 200;
    yield nuxt.render(this.req, this.res);
  };
};
