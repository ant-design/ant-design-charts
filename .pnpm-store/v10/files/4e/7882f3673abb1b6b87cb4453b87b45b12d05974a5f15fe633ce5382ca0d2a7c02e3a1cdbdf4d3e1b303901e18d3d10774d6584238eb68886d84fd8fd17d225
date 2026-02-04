/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateTransformer, Vector2 } from '../type';

/**
 * Exchange dimensions of the vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const transpose: CreateTransformer = (params, x, y, width, height) => {
  return {
    transform: ([x, y]: Vector2) => [y, x],
    untransform: ([x, y]: Vector2) => [y, x],
  };
};
