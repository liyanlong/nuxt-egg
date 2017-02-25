'use strict';

const { checkIfIgnore } = require('../../lib/utils.js');

module.exports = (options, app) => {
  return function* (next) {
    yield next;
    // ignore match path
    if (checkIfIgnore(app.config.nuxt, this.path)) {
      return;
    }
    // ignore status is not 404
    if (this.status !== 404 || this.method !== 'GET') {
      return;
    }
    this.status = 200;
    yield this.app.nuxt.render(this.req, this.res);
  };
};
