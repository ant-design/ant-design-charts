"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEqualIgnoringWhitespace = toEqualIgnoringWhitespace;
var _jestDiff = require("jest-diff");
var _print = require("../utils/print");
const removeWhitespace = str => str.trim().replace(/\s+/g, '');
const getDiff = (received, expected) => {
  /* calculate diff of received w.r.t expected string */
  const diff = (0, _jestDiff.diffStringsRaw)(expected, received);

  /* mark every diff result object with value of white-space as DIFF_EQUAL */
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = _jestDiff.DIFF_EQUAL;
  });
  return diff;
};
function toEqualIgnoringWhitespace(actual, expected) {
  const {
    matcherHint,
    EXPECTED_COLOR
  } = this.utils;

  /* determine whether strings are equal after removing white-space */
  const pass = removeWhitespace(actual) === removeWhitespace(expected);

  /* eslint-disable indent */ // prettier conflicts with indent rule
  return {
    pass,
    message: pass ? () => matcherHint('.not.toEqualIgnoringWhitespace') + '\n\n' + 'Expected values to not be equal while ignoring white-space (using ===):\n' + `Expected: not  ${EXPECTED_COLOR(expected)}\n\n` : () => {
      const diff = getDiff(actual, expected);
      return matcherHint('.toEqualIgnoringWhitespace') + '\n\n' + 'Expected values to be equal while ignoring white-space (using ===):\n' + `Expected:\n  ${(0, _print.printExpected)(this.utils, diff)}\n\n` + `Received:\n  ${(0, _print.printReceived)(this.utils, diff)}`;
    }
  };
  /* eslint-enable indent */
}