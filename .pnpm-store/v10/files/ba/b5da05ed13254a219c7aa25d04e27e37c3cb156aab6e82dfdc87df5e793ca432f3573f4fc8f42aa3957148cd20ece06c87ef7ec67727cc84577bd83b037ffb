/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateTransformer3D, Vector3 } from '../type';

/**
 * Exchange dimensions of the vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const transpose3D: CreateTransformer3D = (params, x, y, z, width, height, depth) => {
  return {
    transform: ([x, y, z]: Vector3) => [y, x, z],
    untransform: ([x, y, z]: Vector3) => [y, x, z],
  };
};
