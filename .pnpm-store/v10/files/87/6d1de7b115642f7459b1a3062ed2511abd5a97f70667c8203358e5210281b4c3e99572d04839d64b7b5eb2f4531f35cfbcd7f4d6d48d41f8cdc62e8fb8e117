"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

// base64 character set, plus padding character (=)
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

module.exports = function (string) {
  var result = '';

  for (var i = 0; i < string.length;) {
    var a = string.charCodeAt(i++);
    var b = string.charCodeAt(i++);
    var c = string.charCodeAt(i++);

    if (a > 255 || b > 255 || c > 255) {
      throw new TypeError('Failed to encode base64: The string to be encoded contains characters outside of the Latin1 range.');
    }

    var bitmap = a << 16 | b << 8 | c;
    result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
  } // To determine the final padding


  var rest = string.length % 3; // If there's need of padding, replace the last 'A's with equal signs

  return rest ? (0, _slice.default)(result).call(result, 0, rest - 3) + '==='.substring(rest) : result;
};