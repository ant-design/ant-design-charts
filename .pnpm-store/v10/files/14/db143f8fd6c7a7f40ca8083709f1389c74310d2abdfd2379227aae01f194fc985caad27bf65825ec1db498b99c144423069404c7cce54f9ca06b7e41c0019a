import { CreateTransformer, TransformCallback } from '../type';

/**
 * Add custom functional transformation for current vector.
 * @param params [callback]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const custom: CreateTransformer = (params, x, y, width, height) => {
  const [callback] = params as [TransformCallback];
  return callback(x, y, width, height);
};
