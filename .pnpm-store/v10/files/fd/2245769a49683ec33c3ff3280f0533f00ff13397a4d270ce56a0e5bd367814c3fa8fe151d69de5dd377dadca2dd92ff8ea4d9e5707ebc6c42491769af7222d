"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = exports.printReceived = exports.printExpected = void 0;
var _jestDiff = require("jest-diff");
const tokenize = str => {
  const isWhitespace = char => /\s/.test(char);
  const tokens = [];
  let idx = 0;
  let token;
  while (idx < str.length) {
    const char = str.charAt(idx);
    const isCurrentCharWhitespace = isWhitespace(char);
    if (token) {
      if (token.isWhitespace === isCurrentCharWhitespace) {
        token.value += char;
      } else {
        tokens.push(token);
        token = undefined;
        continue;
      }
    } else {
      token = {
        value: char,
        isWhitespace: isCurrentCharWhitespace
      };
    }
    idx += 1;
  }

  /* push last token */
  tokens.push(token);
  return tokens;
};
exports.tokenize = tokenize;
const colorTokens = (str, color) => {
  const tokens = tokenize(str);
  return tokens.reduce((acc, {
    value,
    isWhitespace
  }) => acc + (isWhitespace ? value : color(value)), '');
};
const printExpected = (utils, diff) => diff.reduce((acc, diffObject) => {
  const operation = diffObject[0];
  const value = diffObject[1];
  if (operation === _jestDiff.DIFF_EQUAL) return acc + colorTokens(value, utils.EXPECTED_COLOR);
  if (operation === _jestDiff.DIFF_DELETE) return acc + colorTokens(value, str => utils.INVERTED_COLOR(utils.EXPECTED_COLOR(str)));
  return acc;
}, '');
exports.printExpected = printExpected;
const printReceived = (utils, diff) => diff.reduce((acc, diffObject) => {
  const operation = diffObject[0];
  const value = diffObject[1];
  if (operation === _jestDiff.DIFF_EQUAL) return acc + colorTokens(value, utils.RECEIVED_COLOR);
  if (operation === _jestDiff.DIFF_INSERT) return acc + colorTokens(value, str => utils.INVERTED_COLOR(utils.RECEIVED_COLOR(str)));
  return acc;
}, '');
exports.printReceived = printReceived;