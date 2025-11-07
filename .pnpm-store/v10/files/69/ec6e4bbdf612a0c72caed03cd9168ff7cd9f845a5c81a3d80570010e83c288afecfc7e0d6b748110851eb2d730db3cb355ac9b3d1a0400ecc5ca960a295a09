"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skew = skew;
exports.skewDEG = skewDEG;
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
const {
  tan
} = Math;

/**
 * Calculate a skew matrix
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skew(ax, ay) {
  return {
    a: 1,
    c: tan(ax),
    e: 0,
    b: tan(ay),
    d: 1,
    f: 0
  };
}

/**
 * Calculate a skew matrix using DEG angles
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skewDEG(ax, ay) {
  return skew(ax * Math.PI / 180, ay * Math.PI / 180);
}