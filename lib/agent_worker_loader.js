'use strict';

const egg = require('egg');
class NuxtEggAgentWorkerLoader extends egg.AgentWorkerLoader {

  load() {
    super.load();
  }
  loadConfig() {
    super.loadConfig();
  }
}
module.exports = NuxtEggAgentWorkerLoader;
