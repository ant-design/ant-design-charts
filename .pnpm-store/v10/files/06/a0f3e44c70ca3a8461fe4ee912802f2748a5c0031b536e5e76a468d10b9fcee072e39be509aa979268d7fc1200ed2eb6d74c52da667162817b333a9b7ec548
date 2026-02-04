import { mat4 } from 'gl-matrix';
import { CreateTransformer3D } from '../type';

/**
 * Apply translate transformation for current vector.
 * @param params [tx, ty, tz]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param z z of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @param depth depth of the the bounding box of coordinate
 * @returns transformer
 */
export const translate3D: CreateTransformer3D = (params, x, y, z, width, height, depth) => {
  const [tx, ty, tz] = params as number[];
  return mat4.fromTranslation(mat4.create(), [tx, ty, tz]);
};
