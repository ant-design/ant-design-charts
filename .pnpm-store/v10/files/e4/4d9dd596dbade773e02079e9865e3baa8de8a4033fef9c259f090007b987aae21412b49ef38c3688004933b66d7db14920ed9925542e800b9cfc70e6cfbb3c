"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainAnyEntries = toContainAnyEntries;
var _utils = require("../utils");
function toContainAnyEntries(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const entries = Object.keys(actual).map(k => [k, actual[k]]);
  const pass = expected.some(entry => (0, _utils.contains)(this.equals, entries, entry));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainAnyEntries') + '\n\n' + 'Expected object to not contain any of the provided entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toContainAnyEntries') + '\n\n' + 'Expected object to contain any of the provided entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}