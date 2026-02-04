"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toReject = toReject;
async function toReject(actual) {
  const {
    matcherHint
  } = this.utils;
  const pass = await actual.then(() => false, () => true);
  return {
    pass,
    message: () => pass ? matcherHint('.not.toReject', 'received', '') + '\n\nExpected promise to resolve, however it rejected.\n' : matcherHint('.toReject', 'received', '') + '\n\nExpected promise to reject, however it resolved.\n'
  };
}