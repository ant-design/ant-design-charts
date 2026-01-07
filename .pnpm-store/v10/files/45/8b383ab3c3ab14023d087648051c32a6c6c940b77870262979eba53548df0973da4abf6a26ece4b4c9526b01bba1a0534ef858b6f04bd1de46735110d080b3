/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateTransformer, Vector2 } from '../type';

function cot(theta: number) {
  return 1 / Math.tan(theta);
}

/**
 * Applies shear transformation for the first dimension of vector2.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const shearX: CreateTransformer = (params, x, y, width, height) => {
  const [theta] = params as number[];
  const sx = cot(theta);
  return {
    transform(vector: Vector2) {
      const [x, y] = vector;
      const xx = x + y * sx;
      return [xx, y];
    },
    untransform(vector: Vector2) {
      const [xx, y] = vector;
      const x = xx - y * sx;
      return [x, y];
    },
  };
};

/**
 * Applies shear transformation for the second dimension of vector2.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const shearY: CreateTransformer = (params, x, y, width, height) => {
  const [theta] = params as number[];
  const sy = cot(theta);
  return {
    transform(vector: Vector2) {
      const [x, y] = vector;
      const yy = y + x * sy;
      return [x, yy];
    },
    untransform(vector: Vector2) {
      const [x, yy] = vector;
      const y = yy - x * sy;
      return [x, y];
    },
  };
};
