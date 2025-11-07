"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decomposeTSR = decomposeTSR;
var _scale = require("./scale");
var _transform = require("./transform");
/**
 * Decompose a matrix into translation, scaling and rotation components, optionally
 * take horizontal and vertical flip in to consideration.
 * Note this function decomposes a matrix in rotation -> scaling -> translation order. I.e. for
 * certain translation T {tx, ty}, rotation R and scaling S { sx, sy }, it's only true for:
 *  decomposeTSR(compose(T, S, R)) === { translate: T, rotation: R, scale: S }
 * composing in a different order may yield a different decomposition result.
 * @param matrix {Matrix} Affine Matrix
 * @param  flipX {boolean} Whether the matrix contains vertical flip, i.e. mirrors on x-axis
 * @param  flipY {boolean} Whether the matrix contains horizontal flip, i.e. mirrors on y-axis
 * @returns {Transform} A transform object consisted by its translation, scaling
 * and rotation components.
 */
function decomposeTSR(matrix, flipX = false, flipY = false) {
  // Remove flip from the matrix first - flip could be incorrectly interpreted as
  // rotations (e.g. flipX + flipY = rotate by 180 degrees).
  // Note flipX is a vertical flip, and flipY is a horizontal flip.
  if (flipX) {
    if (flipY) {
      matrix = (0, _transform.compose)(matrix, (0, _scale.scale)(-1, -1));
    } else {
      matrix = (0, _transform.compose)(matrix, (0, _scale.scale)(1, -1));
    }
  } else if (flipY) {
    matrix = (0, _transform.compose)(matrix, (0, _scale.scale)(-1, 1));
  }
  const a = matrix.a;
  const b = matrix.b;
  const c = matrix.c;
  const d = matrix.d;
  let scaleX, scaleY, rotation;
  if (a !== 0 || c !== 0) {
    const hypotAc = Math.hypot(a, c);
    scaleX = hypotAc;
    scaleY = (a * d - b * c) / hypotAc;
    const acos = Math.acos(a / hypotAc);
    rotation = c > 0 ? -acos : acos;
  } else if (b !== 0 || d !== 0) {
    const hypotBd = Math.hypot(b, d);
    scaleX = (a * d - b * c) / hypotBd;
    scaleY = hypotBd;
    const acos = Math.acos(b / hypotBd);
    rotation = Math.PI / 2 + (d > 0 ? -acos : acos);
  } else {
    scaleX = 0;
    scaleY = 0;
    rotation = 0;
  }

  // put the flip factors back
  if (flipY) {
    scaleX = -scaleX;
  }
  if (flipX) {
    scaleY = -scaleY;
  }
  return {
    translate: {
      tx: matrix.e,
      ty: matrix.f
    },
    scale: {
      sx: scaleX,
      sy: scaleY
    },
    rotation: {
      angle: rotation
    }
  };
}