"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipOrigin = flipOrigin;
exports.flipX = flipX;
exports.flipY = flipY;
/**
 * Tranformation matrix that mirrors on x-axis
 * @returns {Matrix} Affine Matrix
 */
function flipX() {
  return {
    a: 1,
    c: 0,
    e: 0,
    b: 0,
    d: -1,
    f: 0
  };
}

/**
 * Tranformation matrix that mirrors on y-axis
 * @returns {Matrix} Affine Matrix
 */
function flipY() {
  return {
    a: -1,
    c: 0,
    e: 0,
    b: 0,
    d: 1,
    f: 0
  };
}

/**
 * Tranformation matrix that mirrors on origin
 * @returns {Matrix} Affine Matrix
 */
function flipOrigin() {
  return {
    a: -1,
    c: 0,
    e: 0,
    b: 0,
    d: -1,
    f: 0
  };
}