'use strict';

class JsonError extends Error {
  constructor(msg, status) {
    super(msg);
    this.message = msg || 'server error';
    this.status = status || 500;
  }
}
exports.JsonError = JsonError;

class PageError extends Error {
  constructor(msg, status) {
    super(msg);
    this.message = msg || 'server error';
    this.status = status || 500;
  }
}
exports.PageError = PageError;
