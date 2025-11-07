"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var dataURLToBlob = function dataURLToBlob(base64) {
  var _context;

  // 兼容 dataURL
  if (base64.split(',')[0] && (0, _indexOf.default)(_context = base64.split(',')[0]).call(_context, 'base64') >= 0) {
    base64 = base64.split(',')[1];
  }

  return Buffer.from(base64, 'base64');
};

module.exports = dataURLToBlob;