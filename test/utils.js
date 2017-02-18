'use strict';

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mm = require('egg-mock');
const fixtures = path.join(__dirname, 'fixtures');
const logDir = path.join(__dirname, '../logs');

// 全局 restore，防止用例忘记 restore
afterEach(mm.restore);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

/**
 * 以单进程模式启动 app
 *
 * @param {String} name app name.
 * @param {Object} options
 *  - {String} [antxpath] - antx path
 * @return {App} app Application object.
 */
exports.createApp = function(name, options) {
  options = options || {};
  const egg = require('..');
  const baseDir = path.join(fixtures, name);
  options.baseDir = baseDir;
  if (!options.customEgg) {
    options.customEgg = path.join(__dirname, '..');
  }
  rimraf.sync(path.join(baseDir, 'logs'));
  return mm.app(options, egg);
};
