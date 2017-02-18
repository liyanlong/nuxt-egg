'use strict';

module.exports = function* () {
  yield this.render('index.html', {
  	hello: 'world',
  });
};
