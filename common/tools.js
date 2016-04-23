'use strict';

const crypto = require('crypto');
const request = require('superagent');

let md5Encrypt;
let getVerifyCode;
let isArray;

exports.md5Encrypt = md5Encrypt = string => {
  if (string === null) return null;
  if (typeof(string) != 'string') return null;
  var md5sum = crypto.createHash('md5');
  md5sum.update(string, 'utf8');
  string = md5sum.digest('hex');
  return string;
};

exports.getVerifyCode = getVerifyCode = strArray => {
  if (strArray === null) return null;
  if (!isArray(strArray)) return null;
  return md5Encrypt(strArray.join('').toUpperCase());
};

exports.isArray = isArray = object => {
  return Object.prototype.toString.call(object) === '[object Array]';
}

exports.getJSONData = function (reqData) {
  return typeof reqData == 'string' ? JSON.parse(reqData) : reqData;
};
