'use strict';
const path = require('path');

module.exports = appInfo => {

  exports.keys = appInfo.name + '#nuxt-egg';

  exports.core = 'nuxt-egg';

  exports.nuxt = {
    srcDir: path.join(appInfo.baseDir, './resources'),
    rootDir: path.join(appInfo.baseDir),
  };

  // allow website request throw up crsf check
  exports.security = {
    ignoreJson: true,
    nosniff: {
      enable: false,
    },
  };

  return exports;
};
