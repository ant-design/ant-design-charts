"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeArrayOfSize = toBeArrayOfSize;
var _utils = require("../utils");
function toBeArrayOfSize(actual, expected) {
  const {
    printExpected,
    printReceived,
    matcherHint
  } = this.utils;
  const pass = Array.isArray(actual) && actual.length === expected;
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeArrayOfSize') + '\n\n' + 'Expected value to not be an array of size:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  value: ${printReceived(actual)}\n` + `  length: ${printReceived((0, _utils.determinePropertyMessage)(actual, 'length'))}` : matcherHint('.toBeArrayOfSize') + '\n\n' + 'Expected value to be an array of size:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  value: ${printReceived(actual)}\n` + `  length: ${printReceived((0, _utils.determinePropertyMessage)(actual, 'length'))}`
  };
}