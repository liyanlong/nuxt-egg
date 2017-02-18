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
  config.dev = !(app.config.env === 'prod' || process.env.NODE_ENV === 'production');
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

    // this.body alias koa response.body
    // if (this.body !== '<h1>404 Not Found</h1>') {
    //   return;
    // }
    this.status = 200;
    yield nuxt.render(this.req, this.res);
  };

};
