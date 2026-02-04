"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainEntries = toContainEntries;
var _utils = require("../utils");
function toContainEntries(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = expected.every(entry => (0, _utils.containsEntry)(this.equals, actual, entry));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainEntries') + '\n\n' + 'Expected object to not contain all of the given entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toContainEntries') + '\n\n' + 'Expected object to contain all of the given entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}