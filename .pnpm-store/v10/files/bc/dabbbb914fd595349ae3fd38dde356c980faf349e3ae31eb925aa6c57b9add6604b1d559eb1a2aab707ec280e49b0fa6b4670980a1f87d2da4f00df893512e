"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainValue = toContainValue;
var _utils = require("../utils");
function toContainValue(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const values = Object.keys(actual).map(k => actual[k]);
  const pass = (0, _utils.contains)(this.equals, values, expected);
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainValue') + '\n\n' + 'Expected object to not contain value:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toContainValue') + '\n\n' + 'Expected object to contain value:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}