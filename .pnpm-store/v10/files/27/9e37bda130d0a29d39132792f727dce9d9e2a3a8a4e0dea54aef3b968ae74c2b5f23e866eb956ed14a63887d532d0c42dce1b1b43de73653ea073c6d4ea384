"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inverse = inverse;
/**
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix {Matrix} Affine Matrix
 * @returns {Matrix} Inverted Affine Matrix
 */
function inverse(matrix) {
  // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = matrix;
  const denom = a * d - b * c;
  return {
    a: d / denom,
    b: b / -denom,
    c: c / -denom,
    d: a / denom,
    e: (d * e - c * f) / -denom,
    f: (b * e - a * f) / denom
  };
}