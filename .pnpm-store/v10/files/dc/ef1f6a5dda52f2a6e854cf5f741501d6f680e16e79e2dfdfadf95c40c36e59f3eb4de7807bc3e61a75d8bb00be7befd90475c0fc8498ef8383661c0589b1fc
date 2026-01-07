"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
exports.matchesShape = matchesShape;
function isUndefined(val) {
  return typeof val === 'undefined';
}
function isNumeric(n) {
  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}
function isObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}
function matchesShape(obj, keys) {
  return keys.every(key => key in obj);
}