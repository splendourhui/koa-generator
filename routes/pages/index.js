/**
* @Author: SplendourHui
* @Date:   2016-05-04 20:52
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-04 20:56
*/



'use strict';

const ctrl = require('./controller');

module.exports = (router) => {
  router.get('/', ctrl.index);
};
