'use strict';

const egg = require('egg');
const path = require('path');

const EGG_PATH = path.dirname(__dirname);
const startCluster = egg.startCluster;

class NuxtEggApplication extends egg.Application {
  get [Symbol.for('egg#eggPath')]() {
    return EGG_PATH;
  }
}

class NuxtAgent extends egg.Agent {
  get [Symbol.for('egg#eggPath')]() {
    return EGG_PATH;
  }
}

exports.Application = NuxtEggApplication;
exports.Agent = NuxtAgent;
exports.startCluster = function(options, callback) {
  options = options || {};
  options.customEgg = EGG_PATH;
  startCluster(options, callback);
};
