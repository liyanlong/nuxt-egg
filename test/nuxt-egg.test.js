'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const utils = require('./utils');

describe('test/nuxt-egg.test.js', () => {
  describe('render', () => {
    let app;
    before(() => {
      app = utils.createApp('apps/web');
      return app.ready();
    });

    it('render', () => {
      return request(app.callback())
        .get('/')
        .expect(200)
        .expect('world');
    });
    after(() => app.close());
  });
});
