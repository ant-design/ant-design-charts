"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;
exports.transform = transform;
/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function transform(...matrices) {
  matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices;
  const multiply = (m1, m2) => {
    return {
      a: m1.a * m2.a + m1.c * m2.b,
      c: m1.a * m2.c + m1.c * m2.d,
      e: m1.a * m2.e + m1.c * m2.f + m1.e,
      b: m1.b * m2.a + m1.d * m2.b,
      d: m1.b * m2.c + m1.d * m2.d,
      f: m1.b * m2.e + m1.d * m2.f + m1.f
    };
  };
  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided');
    case 1:
      return matrices[0];
    case 2:
      return multiply(matrices[0], matrices[1]);
    default:
      {
        const [m1, m2, ...rest] = matrices;
        const m = multiply(m1, m2);
        return transform(m, ...rest);
      }
  }
}

/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function compose(...matrices) {
  return transform(...matrices);
}