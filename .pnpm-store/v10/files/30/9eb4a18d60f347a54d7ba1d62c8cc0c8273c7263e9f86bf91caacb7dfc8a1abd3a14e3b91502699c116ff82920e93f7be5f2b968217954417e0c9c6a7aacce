"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var dataURItoBlob = function dataURItoBlob(dataURI, type) {
  var _context;

  var byteString; // 传入的 base64，不是 dataURL

  if ((0, _indexOf.default)(dataURI).call(dataURI, 'base64') < 0) {
    byteString = atob(dataURI);
  } else if ((0, _indexOf.default)(_context = dataURI.split(',')[0]).call(_context, 'base64') >= 0) {
    type = type || dataURI.split(',')[0].split(':')[1].split(';')[0];
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {
    type: type
  });
};

module.exports = dataURItoBlob;