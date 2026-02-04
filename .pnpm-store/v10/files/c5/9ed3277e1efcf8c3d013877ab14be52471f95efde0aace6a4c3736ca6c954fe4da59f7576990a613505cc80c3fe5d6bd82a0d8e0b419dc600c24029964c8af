"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toIncludeAllMembers = toIncludeAllMembers;
var _utils = require("../utils");
function toIncludeAllMembers(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = Array.isArray(actual) && Array.isArray(expected) && expected.every(val => (0, _utils.contains)(this.equals, actual, val));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toIncludeAllMembers') + '\n\n' + 'Expected list to not have all of the following members:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toIncludeAllMembers') + '\n\n' + 'Expected list to have all of the following members:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}