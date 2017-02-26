'use strict';

const egg = require('egg');
class NuxtEggAgentWorkerLoader extends egg.AgentWorkerLoader {
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
module.exports = NuxtEggAgentWorkerLoader;
