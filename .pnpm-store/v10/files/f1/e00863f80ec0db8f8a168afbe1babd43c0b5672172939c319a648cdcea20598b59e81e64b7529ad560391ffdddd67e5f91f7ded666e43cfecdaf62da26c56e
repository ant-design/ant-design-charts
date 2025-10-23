"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainAllKeys = toContainAllKeys;
var _utils = require("../utils");
function toContainAllKeys(actual, expected) {
  const {
    printExpected,
    printReceived,
    matcherHint
  } = this.utils;
  const objectKeys = Object.keys(actual);
  const pass = objectKeys.length === expected.length && expected.every(key => (0, _utils.contains)(this.equals, objectKeys, key));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainAllKeys') + '\n\n' + 'Expected object to not contain all keys:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(Object.keys(actual))}` : matcherHint('.toContainAllKeys') + '\n\n' + 'Expected object to contain all keys:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(Object.keys(actual))}`
  };
}