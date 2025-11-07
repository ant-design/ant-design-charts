"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeObject = toBeObject;
var _jestGetType = require("jest-get-type");
function toBeObject(actual) {
  const {
    printReceived,
    matcherHint
  } = this.utils;
  const pass = (0, _jestGetType.getType)(actual) === 'object';
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeObject', 'received', '') + '\n\n' + 'Expected value to not be an object, received:\n' + `  ${printReceived(actual)}` : matcherHint('.toBeObject', 'received', '') + '\n\n' + 'Expected value to be an object, received:\n' + `  ${printReceived(actual)}`
  };
}