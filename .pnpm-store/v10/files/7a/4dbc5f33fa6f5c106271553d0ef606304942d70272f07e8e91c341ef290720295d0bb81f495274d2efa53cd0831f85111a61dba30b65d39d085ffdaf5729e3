/* eslint-disable @typescript-eslint/no-unused-vars */
import { Linear, Point } from '@antv/scale';
import { CreateTransformer, Vector } from '../type';

/**
 * Apples parallel coordinate transform.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const parallel: CreateTransformer = (params, x, y, width, height) => {
  const [x0, x1, y0, y1] = params as number[];
  const sy = new Linear({
    range: [y0, y1],
  });
  return {
    transform(vector: Vector) {
      const v = [];
      const len = vector.length;
      const sx = new Point({
        domain: new Array(len).fill(0).map((_, i) => i),
        range: [x0, x1],
      });
      for (let i = 0; i < len; i++) {
        const e = vector[i];
        const x = sx.map(i);
        const y = sy.map(e);
        v.push(x, y);
      }
      return v;
    },
    untransform(vector: Vector) {
      const v = [];
      for (let i = 0; i < vector.length; i += 2) {
        const y = vector[i + 1];
        v.push(sy.invert(y));
      }
      return v;
    },
  };
};
