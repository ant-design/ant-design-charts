/* eslint-disable @typescript-eslint/no-unused-vars */
import { Linear } from '@antv/scale';
import { Vector2, CreateTransformer } from '../type';
import { adjustAngle } from '../utils';

/**
 * Maps normalized value to normalized helix coordinate at the center of the bounding box.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const helix: CreateTransformer = (params, x, y, width, height) => {
  const [startAngle, endAngle, innerRadius, outerRadius] = params as number[];

  // 计算螺旋系数：r = a + b * theta
  // d = 2 * PI * b
  // 这里不管 startAngle 从多少开始，都从 0 开始计算
  // 这样才能保证坐标系在 bounding box 里面
  const count = (endAngle - 0) / (2 * Math.PI) + 1;
  const d = (outerRadius - innerRadius) / count;
  const b = d / (Math.PI * 2);

  // 当 theta 为 0 的时候的极径
  const step = new Linear({
    range: [innerRadius, innerRadius + d * 0.99], // 防止和下一个螺线重合
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
      const a = step.map(v2);

      // 根据长宽比调整，使得极坐标系内切外接矩形
      const x = Math.cos(theta) * (b * theta + a) * sx;
      const y = Math.sin(theta) * (b * theta + a) * sy;

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
      const t = Math.atan2(y, x) + Math.floor(r / d) * Math.PI * 2;
      const theta = adjustAngle(t, startAngle, endAngle);
      const a = r - b * theta;

      const v1 = angle.invert(theta);
      const v2 = step.invert(a);
      return [v1, v2];
    },
  };
};
