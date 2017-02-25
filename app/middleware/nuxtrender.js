'use strict';

const { loadNuxtConfig } = require('../../lib/utils.js');
const Nuxt = require('nuxt');

module.exports = (options, app) => {

  const nuxt = new Nuxt(loadNuxtConfig(app.config));
  return function* (next) {

    yield next;

    // ignore status if not 404
    if (this.status !== 404 || this.method !== 'GET') {
      return;
    }

    this.status = 200;
    yield nuxt.render(this.req, this.res);
  };
};
