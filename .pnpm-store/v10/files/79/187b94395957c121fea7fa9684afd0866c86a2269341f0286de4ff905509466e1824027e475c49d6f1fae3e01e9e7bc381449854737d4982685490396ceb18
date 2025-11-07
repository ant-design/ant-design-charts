"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAffineMatrix = isAffineMatrix;
var _utils = require("./utils");
/**
 * Check if the object contain an affine matrix
 * @param object {Object} Generic Plain Object
 * @return {boolean} True if is an object and contains an affine matrix
 */

function isAffineMatrix(object) {
  return (0, _utils.isObject)(object) && 'a' in object && (0, _utils.isNumeric)(object.a) && 'b' in object && (0, _utils.isNumeric)(object.b) && 'c' in object && (0, _utils.isNumeric)(object.c) && 'd' in object && (0, _utils.isNumeric)(object.d) && 'e' in object && (0, _utils.isNumeric)(object.e) && 'f' in object && (0, _utils.isNumeric)(object.f);
}