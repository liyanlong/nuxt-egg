'use strict';

const egg = require('egg');
const path = require('path');
const EGG_PATH = path.dirname(__dirname);
const startCluster = egg.startCluster;

module.exports = function(options, callback) {
  options = options || {};
  options.customEgg = EGG_PATH;
  options.port = options.port || 7001;
  startCluster(options, callback);
};
