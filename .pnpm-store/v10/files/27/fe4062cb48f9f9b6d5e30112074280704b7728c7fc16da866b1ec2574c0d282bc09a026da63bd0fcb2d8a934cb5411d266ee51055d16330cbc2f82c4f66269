"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = fail;
function fail(_, message) {
  return {
    pass: false,
    message: () => message ? message : 'fails by .fail() assertion'
  };
}