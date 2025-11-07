import { fromObject } from './fromObject'
import { translate } from './translate'
import { scale } from './scale'
import { rotateDEG } from './rotate'
import { skewDEG } from './skew'
import { shear } from './shear'

/**
 * Converts array of matrix descriptor to array of matrix
 * @param definitionOrArrayOfDefinition {Object[]} Array of object describing the matrix
 * @returns {Matrix[]} Array of matrix
 *
 * @example
 * > fromDefinition([
 *  { type: 'matrix', a:1, b:2, c:3, d:4, e:5, f:6 },
 *  { type: 'translate', tx: 10, ty: 20 },
 *  { type: 'scale', sx: 2, sy: 4 },
 *  { type: 'rotate', angle: 90, cx: 50, cy: 25 },
 *  { type: 'skewX', angle: 45 },
 *  { type: 'skewY',  angle: 45 },
 *  { type: 'shear', shx: 10, shy: 20}
 * ])
 *
 * [
 *  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
 *  { a: 1, c: 0, e: 10, b: 0, d: 1, f: 20 },
 *  { a: 2, c: 0, e: 0, b: 0, d: 4, f: 0 },
 *  { a: 6.123, c: -1, e: 0, b: 1, d: 6.123, f: 0 },
 *  { a: 1, c: 0.99.., e: 0, b: 0, d: 1, f: 0 },
 *  { a: 1, c: 0, e: 0, b: 0.99, d: 1, f: 0 },
 *  { a: 1, c: 10, e: 0, b: 20, d: 1, f: 0 }
 * ]
 **/
export function fromDefinition (definitionOrArrayOfDefinition) {
  return Array.isArray(definitionOrArrayOfDefinition)
    ? definitionOrArrayOfDefinition.map(mapper)
    : mapper(definitionOrArrayOfDefinition)

  function mapper (descriptor) {
    switch (descriptor.type) {
      case 'matrix':
        if ('a' in descriptor &&
          'b' in descriptor &&
          'c' in descriptor &&
          'd' in descriptor &&
          'e' in descriptor &&
          'f' in descriptor
        ) {
          return fromObject(descriptor)
        } else {
          throw new Error('MISSING_MANDATORY_PARAM')
        }

      case 'translate':
        if (!('tx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('ty' in descriptor) return translate(descriptor.tx, descriptor.ty)

        return translate(descriptor.tx)

      case 'scale':
        if (!('sx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('sy' in descriptor) return scale(descriptor.sx, descriptor.sy)

        return scale(descriptor.sx)

      case 'rotate':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('cx' in descriptor && 'cy' in descriptor) {
          return rotateDEG(descriptor.angle, descriptor.cx, descriptor.cy)
        }
        return rotateDEG(descriptor.angle)

      case 'skewX':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return skewDEG(descriptor.angle, 0)

      case 'skewY':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return skewDEG(0, descriptor.angle)

      case 'shear':
        if (!('shx' in descriptor && 'shy' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return shear(descriptor.shx, descriptor.shy)

      default:
        throw new Error('UNSUPPORTED_DESCRIPTOR')
    }
  }
}
