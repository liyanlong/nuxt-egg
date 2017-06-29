'use strict';

module.exports = (options, app) => {

  return function* (next) {

    // webpack hot reload
    if (this.path !== '/__webpack_hmr') {
      yield next;

      // ignore status if not 404
      if (this.status !== 404 || this.method !== 'GET') {
        return;
      }

      this.status = 200;
      const path = this.path;
      if (/\.js$/.test(path)) {
        this.set('Content-Type', 'application/javascript');
      }
      if (/\.css/.test(path)) {
        this.set('Content-Type', 'text/css');
      }
    }

    yield this.app.nuxt.render(this.req, this.res);
  };
};
