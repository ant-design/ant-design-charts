"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPartiallyContain = toPartiallyContain;
var _utils = require("../utils");
function toPartiallyContain(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = Array.isArray(actual) && Array.isArray([expected]) && [expected].every(partial => actual.some(value => Object.entries(partial).every(entry => (0, _utils.containsEntry)(this.equals, value, entry))));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toPartiallyContain') + '\n\n' + 'Expected array not to partially contain:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toPartiallyContain') + '\n\n' + 'Expected array to partially contain:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}