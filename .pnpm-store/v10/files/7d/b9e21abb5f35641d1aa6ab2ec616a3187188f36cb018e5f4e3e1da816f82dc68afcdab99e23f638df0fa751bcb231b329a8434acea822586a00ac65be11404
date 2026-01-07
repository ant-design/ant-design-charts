import { mat4 } from 'gl-matrix';
import { CreateTransformer3D } from '../type';

/**
 * Apply scale transformation for current vector.
 * @param params [sx, sy, sz]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param z z of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @param depth depth of the the bounding box of coordinate
 * @returns transformer
 */
export const scale3D: CreateTransformer3D = (params, x, y, z, width, height, depth) => {
  const [sx, sy, sz] = params as number[];
  return mat4.fromScaling(mat4.create(), [sx, sy, sz]);
};
