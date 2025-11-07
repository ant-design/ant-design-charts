"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeDate = toBeDate;
var _jestGetType = require("jest-get-type");
function toBeDate(actual) {
  const {
    matcherHint,
    printReceived
  } = this.utils;
  const pass = (0, _jestGetType.getType)(actual) === 'date' && !isNaN(actual);
  return {
    pass,
    message: () => pass ? matcherHint('.not.toBeDate', 'received', '') + '\n\n' + 'Expected value to not be a date received:\n' + `  ${printReceived(actual)}` : matcherHint('.toBeDate', 'received', '') + '\n\n' + 'Expected value to be a date received:\n' + `  ${printReceived(actual)}`
  };
}