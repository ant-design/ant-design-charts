"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeAfterOrEqualTo = toBeAfterOrEqualTo;
function toBeAfterOrEqualTo(actual, expected) {
  const {
    printReceived,
    matcherHint
  } = this.utils;
  const pass = actual >= expected;
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeAfterOrEqualTo', 'received', '') + '\n\n' + `Expected date to be after or equal to ${printReceived(expected)} but received:\n` + `  ${printReceived(actual)}` : matcherHint('.toBeAfterOrEqualTo', 'received', '') + '\n\n' + `Expected date to be after or equal to ${printReceived(expected)} but received:\n` + `  ${printReceived(actual)}`
  };
}