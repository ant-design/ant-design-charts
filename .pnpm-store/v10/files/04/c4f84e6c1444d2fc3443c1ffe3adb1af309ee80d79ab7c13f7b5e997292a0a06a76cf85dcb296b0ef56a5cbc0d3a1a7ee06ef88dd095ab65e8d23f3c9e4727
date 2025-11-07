"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromTriangles = fromTriangles;
var _inverse = require("./inverse");
var _transform = require("./transform");
var _smoothMatrix = require("./smoothMatrix");
/**
 * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
 * @param t1 {Point[]} Array of points containing the three points for the first triangle
 * @param t2 {Point[]} Array of points containing the three points for the second triangle
 * @returns {Matrix} Matrix which transforms t1 to t2
 * @throws Exception if the matrix becomes not invertible
 */
function fromTriangles(t1, t2) {
  // point p = first point of the triangle
  const px1 = t1[0].x != null ? t1[0].x : t1[0][0];
  const py1 = t1[0].y != null ? t1[0].y : t1[0][1];
  const px2 = t2[0].x != null ? t2[0].x : t2[0][0];
  const py2 = t2[0].y != null ? t2[0].y : t2[0][1];

  // point q = second point of the triangle
  const qx1 = t1[1].x != null ? t1[1].x : t1[1][0];
  const qy1 = t1[1].y != null ? t1[1].y : t1[1][1];
  const qx2 = t2[1].x != null ? t2[1].x : t2[1][0];
  const qy2 = t2[1].y != null ? t2[1].y : t2[1][1];

  // point r = third point of the triangle
  const rx1 = t1[2].x != null ? t1[2].x : t1[2][0];
  const ry1 = t1[2].y != null ? t1[2].y : t1[2][1];
  const rx2 = t2[2].x != null ? t2[2].x : t2[2][0];
  const ry2 = t2[2].y != null ? t2[2].y : t2[2][1];
  const r1 = {
    a: px1 - rx1,
    b: py1 - ry1,
    c: qx1 - rx1,
    d: qy1 - ry1,
    e: rx1,
    f: ry1
  };
  const r2 = {
    a: px2 - rx2,
    b: py2 - ry2,
    c: qx2 - rx2,
    d: qy2 - ry2,
    e: rx2,
    f: ry2
  };
  const inverseR1 = (0, _inverse.inverse)(r1);
  const affineMatrix = (0, _transform.transform)([r2, inverseR1]);

  // round the matrix elements to smooth the finite inversion
  return (0, _smoothMatrix.smoothMatrix)(affineMatrix);
}