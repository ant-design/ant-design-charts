import { isNumeric, isObject } from './utils'

/**
 * Check if the object contain an affine matrix
 * @param object {Object} Generic Plain Object
 * @return {boolean} True if is an object and contains an affine matrix
 */

export function isAffineMatrix (object) {
  return isObject(object) &&
    'a' in object &&
    isNumeric(object.a) &&
    'b' in object &&
    isNumeric(object.b) &&
    'c' in object &&
    isNumeric(object.c) &&
    'd' in object &&
    isNumeric(object.d) &&
    'e' in object &&
    isNumeric(object.e) &&
    'f' in object &&
    isNumeric(object.f)
}
