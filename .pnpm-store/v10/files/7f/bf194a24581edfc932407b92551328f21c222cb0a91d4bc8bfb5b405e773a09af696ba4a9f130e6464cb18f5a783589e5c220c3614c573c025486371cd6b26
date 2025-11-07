"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omitUndefined = void 0;
var omitUndefined = exports.omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return undefined;
  }
  return newObj;
};