"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;
exports.rotateDEG = rotateDEG;
var _utils = require("./utils");
var _translate = require("./translate");
var _transform = require("./transform");
const {
  cos,
  sin,
  PI
} = Math;
/**
 * Calculate a rotation matrix
 * @param angle {number} Angle in radians
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotate(angle, cx, cy) {
  const cosAngle = cos(angle);
  const sinAngle = sin(angle);
  const rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  };
  if ((0, _utils.isUndefined)(cx) || (0, _utils.isUndefined)(cy)) {
    return rotationMatrix;
  }
  return (0, _transform.transform)([(0, _translate.translate)(cx, cy), rotationMatrix, (0, _translate.translate)(-cx, -cy)]);
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle {number} Angle in degree
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotateDEG(angle, cx = undefined, cy = undefined) {
  return rotate(angle * PI / 180, cx, cy);
}