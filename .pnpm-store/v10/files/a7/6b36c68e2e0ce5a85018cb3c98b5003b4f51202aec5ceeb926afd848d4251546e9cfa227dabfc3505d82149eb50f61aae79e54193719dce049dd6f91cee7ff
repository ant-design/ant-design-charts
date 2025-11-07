"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toIncludeAnyMembers = toIncludeAnyMembers;
var _utils = require("../utils");
function toIncludeAnyMembers(actual, expected) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = Array.isArray(actual) && Array.isArray(expected) && expected.some(member => (0, _utils.contains)(this.equals, actual, member));
  return {
    pass,
    message: () => pass ? matcherHint('.not.toIncludeAnyMembers') + '\n\n' + 'Expected list to not include any of the following members:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}` : matcherHint('.toIncludeAnyMembers') + '\n\n' + 'Expected list to include any of the following members:\n' + `  ${printExpected(expected)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}