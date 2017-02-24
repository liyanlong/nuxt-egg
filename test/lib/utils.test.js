'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const utils = require('../utils');

describe('test/lib/utils.test.js', () => {
  describe('checkIfIgnore(opt, path)', () => {
    let app;
    const { checkIfIgnore } = require('../../lib/utils');
    before(() => {
      app = utils.createApp('web');
      return app.ready();
    });

    it('opt.enable is false', () => {
      return assert(checkIfIgnore({
        enable: false,
      }, '/'), true);
    });
    it('opt.match is Regexp', () => {
      assert(checkIfIgnore({
        match: [ /style\.css/, /bundle/ ],
      }, '/_nuxt/style.css'), true);
    });
    it('opt.match is Regexp Array', () => {
      assert(checkIfIgnore({
        match: [ /style\.css/, /bundle/ ],
      }, '/_nuxt/0.nuxt.bundle.js'), true);
    });
    after(() => app.close());
  });
});
