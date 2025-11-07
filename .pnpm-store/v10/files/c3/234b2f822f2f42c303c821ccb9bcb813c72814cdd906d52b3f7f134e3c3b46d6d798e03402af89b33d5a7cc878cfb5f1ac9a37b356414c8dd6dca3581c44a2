import { isUndefined } from './utils'
import { translate } from './translate'
import { transform } from './transform'

/**
 * Calculate a scaling matrix
 * @param sx {number} Scaling on axis x
 * @param [sy = sx] {number} Scaling on axis y (default sx)
 * @param [cx] {number} If (cx,cy) are supplied the scaling is about this point
 * @param [cy] {number} If (cx,cy) are supplied the scaling is about this point
 * @returns {Matrix} Affine Matrix
 */
export function scale (sx, sy = undefined, cx = undefined, cy = undefined) {
  if (isUndefined(sy)) sy = sx

  const scaleMatrix = {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  }

  if (isUndefined(cx) || isUndefined(cy)) {
    return scaleMatrix
  }

  return transform([
    translate(cx, cy),
    scaleMatrix,
    translate(-cx, -cy)
  ])
}
