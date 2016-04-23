'use strict';

const co = require('co');

exports.index = function*() {
  this.body = 'Hello koa';
}
