'use strict';

const egg = require('egg');
class NuxtEggAppWorkerLoader extends egg.AppWorkerLoader {
  constructor(opt) {
    super(opt);
  }
  load() {
    super.load();
  }
  loadConfig() {
    super.loadConfig();
  }
}
module.exports = NuxtEggAppWorkerLoader;
