"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainAnyValues = toContainAnyValues;
var _utils = require("../utils");
function toContainAnyValues(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const objectValues = Object.keys(actual).map(k => actual[k]);
  const pass = expected.some(value => (0, _utils.contains)(this.equals, objectValues, value));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainAnyValues') + '\n\n' + 'Expected object to not contain any of the following values:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toContainAnyValues') + '\n\n' + 'Expected object to contain any of the following values:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}