import { Linear } from '@antv/scale';
import { CreateTransformer, Vector2 } from '../type';

/**
 * Maps normalized value to the bounding box of coordinate.
 * @param params []
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const cartesian: CreateTransformer = (params, x, y, width, height) => {
  const sx = new Linear({
    range: [x, x + width],
  });
  const sy = new Linear({
    range: [y, y + height],
  });
  return {
    transform(vector: Vector2) {
      const [v1, v2] = vector;
      return [sx.map(v1), sy.map(v2)];
    },
    untransform(vector: Vector2) {
      const [v1, v2] = vector;
      return [sx.invert(v1), sy.invert(v2)];
    },
  };
};
