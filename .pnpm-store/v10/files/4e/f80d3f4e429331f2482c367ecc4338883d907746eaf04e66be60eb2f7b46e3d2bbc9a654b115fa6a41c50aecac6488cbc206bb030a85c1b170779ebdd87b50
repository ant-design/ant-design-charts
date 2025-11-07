"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scale = scale;
var _utils = require("./utils");
var _translate = require("./translate");
var _transform = require("./transform");
/**
 * Calculate a scaling matrix
 * @param sx {number} Scaling on axis x
 * @param [sy = sx] {number} Scaling on axis y (default sx)
 * @param [cx] {number} If (cx,cy) are supplied the scaling is about this point
 * @param [cy] {number} If (cx,cy) are supplied the scaling is about this point
 * @returns {Matrix} Affine Matrix
 */
function scale(sx, sy = undefined, cx = undefined, cy = undefined) {
  if ((0, _utils.isUndefined)(sy)) sy = sx;
  const scaleMatrix = {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  };
  if ((0, _utils.isUndefined)(cx) || (0, _utils.isUndefined)(cy)) {
    return scaleMatrix;
  }
  return (0, _transform.transform)([(0, _translate.translate)(cx, cy), scaleMatrix, (0, _translate.translate)(-cx, -cy)]);
}