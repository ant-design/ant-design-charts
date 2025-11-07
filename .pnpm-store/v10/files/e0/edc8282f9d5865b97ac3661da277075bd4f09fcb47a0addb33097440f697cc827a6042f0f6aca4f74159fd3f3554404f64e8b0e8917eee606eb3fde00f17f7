/* eslint-disable @typescript-eslint/no-unused-vars */
import { Linear } from '@antv/scale';
import { Vector2, CreateTransformer } from '../type';
import { adjustAngle } from '../utils';

/**
 * Maps normalized value to normalized polar coordinate at the center of the bounding box.
 * It is used for Nightingale Rose Diagram.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const polar: CreateTransformer = (params, x, y, width, height) => {
  const [startAngle, endAngle, innerRadius, outerRadius] = params as number[];
  const radius = new Linear({
    range: [innerRadius, outerRadius],
  });
  const angle = new Linear({
    range: [startAngle, endAngle],
  });
  const aspect = height / width;
  const sx = aspect > 1 ? 1 : aspect;
  const sy = aspect > 1 ? 1 / aspect : 1;
  return {
    transform(vector: Vector2) {
      const [v1, v2] = vector;
      const theta = angle.map(v1);
      const r = radius.map(v2);

      // 根据长宽比调整，使得极坐标系内切外接矩形
      const x = r * Math.cos(theta) * sx;
      const y = r * Math.sin(theta) * sy;

      // 将坐标的原点移动到外接矩形的中心，并且将长度设置为一半
      const dx = x * 0.5 + 0.5;
      const dy = y * 0.5 + 0.5;
      return [dx, dy];
    },
    untransform(vector: Vector2) {
      const [dx, dy] = vector;
      const x = ((dx - 0.5) * 2) / sx;
      const y = ((dy - 0.5) * 2) / sy;
      const r = Math.sqrt(x ** 2 + y ** 2);
      const t = Math.atan2(y, x);
      const theta = adjustAngle(t, startAngle, endAngle);
      const v1 = angle.invert(theta);
      const v2 = radius.invert(r);
      return [v1, v2];
    },
  };
};
