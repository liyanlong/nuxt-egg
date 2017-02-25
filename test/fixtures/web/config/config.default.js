const path = require('path');
exports.nuxt = {
  build: {
    extend (config) {
      let nodeModulesDir = path.resolve(process.cwd(), 'node_modules');
      config.resolve.modules.unshift(nodeModulesDir);
      config.resolveLoader.modules.unshift(nodeModulesDir);
    }
  }
}