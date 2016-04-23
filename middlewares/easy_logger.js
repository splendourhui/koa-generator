'use strict';

exports.middleware = function*(next) {
  let ctx = this;
  ctx.koaLogger = {};
  ctx.koaLogger.log = (content) =>
    ctx.logger.log(JSON.stringify(content));
  ctx.koaLogger.info = (content) =>
    ctx.logger.info(JSON.stringify(content));
  ctx.koaLogger.warn = (content) =>
    ctx.logger.warn(JSON.stringify(content));
  ctx.koaLogger.error = (content) =>
    ctx.logger.error(JSON.stringify(content));
  yield next;
};

exports.easyLogger = () => {
  global.koaLogger = {};
  global.koaLogger.log = (content) =>
    global.logger.log(JSON.stringify(content));
  global.koaLogger.info = (content) =>
    global.logger.info(JSON.stringify(content));
  global.koaLogger.warn = (content) =>
    global.logger.warn(JSON.stringify(content));
  global.koaLogger.error = (content) =>
    ctx.logger.error(JSON.stringify(content));
}
