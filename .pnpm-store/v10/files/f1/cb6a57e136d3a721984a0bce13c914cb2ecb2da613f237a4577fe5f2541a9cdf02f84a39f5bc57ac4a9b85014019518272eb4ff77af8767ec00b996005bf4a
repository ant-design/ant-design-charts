import { mat3 } from 'gl-matrix';
import { CreateTransformer } from '../type';

/**
 * Apply translate transformation for current vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const rotate: CreateTransformer = (params, x, y, width, height) => {
  const [theta] = params as number[];
  const matrix = mat3.create();
  return mat3.fromRotation(matrix, theta);
};
