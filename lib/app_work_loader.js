'use strict';

const egg = require('egg');
class NuxtEggAppWorkerLoader extends egg.AppWorkerLoader {
  load() {
    super.load();
  }
  loadConfig() {
    super.loadConfig();
  }
}
module.exports = NuxtEggAppWorkerLoader;
