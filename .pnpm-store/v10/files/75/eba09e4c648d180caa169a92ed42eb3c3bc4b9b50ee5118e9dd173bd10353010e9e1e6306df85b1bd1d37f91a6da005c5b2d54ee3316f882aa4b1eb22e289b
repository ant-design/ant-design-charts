"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCSS = toCSS;
exports.toSVG = toSVG;
exports.toString = toString;
/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toCSS(matrix) {
  return toString(matrix);
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toSVG(matrix) {
  return toString(matrix);
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toString(matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`;
}