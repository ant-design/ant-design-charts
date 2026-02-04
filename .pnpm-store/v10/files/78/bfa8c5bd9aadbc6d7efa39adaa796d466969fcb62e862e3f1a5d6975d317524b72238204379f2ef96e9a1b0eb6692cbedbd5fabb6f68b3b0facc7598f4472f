"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeTrue = toBeTrue;
function toBeTrue(actual) {
  const {
    printReceived,
    printExpected,
    matcherHint
  } = this.utils;
  const pass = actual === true;
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeTrue', 'received', '') + '\n\n' + 'Expected value to not be true received:\n' + `  ${printReceived(actual)}` : matcherHint('.toBeTrue', 'received', '') + '\n\n' + 'Expected value to be true:\n' + `  ${printExpected(true)}\n` + 'Received:\n' + `  ${printReceived(actual)}`
  };
}