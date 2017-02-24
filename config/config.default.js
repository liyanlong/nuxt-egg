'use strict';
const path = require('path');

module.exports = appInfo => {
  exports.keys = appInfo.name + '#nuxt-egg';
  exports.core = 'nuxt-egg';
  exports.nuxt = require('../nuxt.config.js');

  // allow website request throw up crsf check
  exports.security = {
    ignoreJson: true,
  };
  return exports;
};
