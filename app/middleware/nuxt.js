'use strict';

const Nuxt = require('nuxt');
module.exports = (_, app) => {
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
      app.coreLogger.warn('[egg-nuxt] build error', error);
      process.exit(1);
    });
  }

  return function* (next) {
    yield next;

    // this.status alias koa reponse.status
    // default koa resposne.status eq 404
    if (this.status !== 404) {
      return;
    }

    this.status = 200;
    yield nuxt.render(this.req, this.res);
  };

};
