"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainAllEntries = toContainAllEntries;
var _utils = require("../utils");
function toContainAllEntries(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = actual.hasOwnProperty && expected.length == Object.keys(actual).length && expected.every(entry => (0, _utils.containsEntry)(this.equals, actual, entry));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toContainAllEntries') + '\n\n' + 'Expected object to not only contain all of the given entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toContainAllEntries') + '\n\n' + 'Expected object to only contain all of the given entries:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}