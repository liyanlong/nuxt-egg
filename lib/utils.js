'use strict';

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
};
