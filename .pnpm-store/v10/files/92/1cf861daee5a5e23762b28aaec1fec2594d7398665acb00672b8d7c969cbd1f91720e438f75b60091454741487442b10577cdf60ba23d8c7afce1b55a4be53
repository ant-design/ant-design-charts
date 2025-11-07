"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeOneOf = toBeOneOf;
var _utils = require("../utils");
function toBeOneOf(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = (0, _utils.contains)(this.equals, expected, actual);
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeOneOf') + '\n\n' + 'Expected value to not be in list:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toBeOneOf') + '\n\n' + 'Expected value to be in list:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}