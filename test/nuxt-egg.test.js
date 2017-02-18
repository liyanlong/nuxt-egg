'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const utils = require('./utils');

describe('test/nuxt-egg.test.js', () => {
  describe('render', () => {
    let app;
    before(() => {
      app = utils.createApp('web');
      return app.ready();
    });

    it('render', done => {
      return request(app.callback())
        .get('/about')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          assert(!!res.text.indexOf('about'), true);
          done();
        });
    });
    after(() => app.close());
  });
});
