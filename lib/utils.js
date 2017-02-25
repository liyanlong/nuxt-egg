'use strict';
const path = require('path');
module.exports = {

  /**
   *
   * @param {object} opts nuxt middleware config
   * @param {string} path request path
   * @return {bool} checkIfIgnore
   */
  checkIfIgnore(opts, path) {
    if (opts.enable === false) {
      return true;
    }
    // nuxt-egg ignore request if match the path
    if (opts.match) {
      if (Array.isArray(opts.match)) {
        // if some one matched yes, then ignore the path request
        return opts.match.some(function(match) {
          return match.test(path);
        });
      }
      return opts.match.test(path);
    }
    return false;
  },
  /**
   * generator nuxt conifg
   * @param {object|string} config  uninital nuxt config
   * @return {object} inital nuxt config
   */
  loadNuxtConfig(config) {
    let options = config.nuxt;
    try {
      if (typeof options === 'string') {
        options = require(options);
      }
    } catch (e) {
      console.warn('[egg-nuxt] ' + options + ' nuxt config file is not exists');

      options = {
        srcDir: path.join(config.baseDir, './resources'),
        rootDir: config.baseDir,
      };
      console.warn('[egg-nuxt] default options:', JSON.stringify(options));
    }
    // Create development build when calling `egg-bin dev`
    options.dev = config.env === 'local';
    return options;
  },
};
