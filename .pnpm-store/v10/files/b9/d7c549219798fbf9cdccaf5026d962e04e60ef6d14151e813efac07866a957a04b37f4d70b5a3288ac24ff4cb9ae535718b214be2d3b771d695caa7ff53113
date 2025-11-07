import { mat3 } from 'gl-matrix';
import { CreateTransformer } from '../type';

/**
 * Apply scale transformation for current vector.
 * @param params [sx, sy]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const scale: CreateTransformer = (params, x, y, width, height) => {
  const [sx, sy] = params as number[];
  const matrix = mat3.create();
  return mat3.fromScaling(matrix, [sx, sy]);
};
