"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeEmptyObject = toBeEmptyObject;
var _jestGetType = require("jest-get-type");
function toBeEmptyObject(actual) {
  const {
    printReceived,
    matcherHint
  } = this.utils;
  const pass = (0, _jestGetType.getType)(actual) === 'object' && Object.keys(actual).length === 0;
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeEmptyObject', 'received', '') + '\n\n' + 'Expected value to not be an empty object, received:\n' + `  ${printReceived(actual)}` : matcherHint('.toBeEmptyObject', 'received', '') + '\n\n' + 'Expected value to be an empty object, received:\n' + `  ${printReceived(actual)}`
  };
}