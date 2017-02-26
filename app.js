'use strict';

module.exports = app => {
  app.config.coreMiddleware.splice(0, 0, 'nuxtrender');
  app.beforeStart(function* () {
    try {
      yield app.nuxt.build();
      if (!app.config.nuxt.dev) {
        console.log('[nuxt] Building done'); // eslint-disable-line no-console
      }
    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};
