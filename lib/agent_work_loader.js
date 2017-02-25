'use strict';

const egg = require('egg');
class NuxtEggAgentWorkerLoader extends egg.AgentWorkerLoader {
  load() {
    super.load();
  }
}
module.exports = NuxtEggAgentWorkerLoader;
