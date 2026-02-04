import { add, sub, min as _min, max as _max, scale, distance } from './matrix';
import type { Vector2, Point } from '../types';

type A = ['a' | 'A', number, number, number, number, number, number, number];
type C = ['c' | 'C', number, number, number, number, number, number];
type O = ['o' | 'O', number, number];
type H = ['h' | 'H', number];
type L = ['l' | 'L', number, number];
type M = ['m' | 'M', number, number];
type R = ['r' | 'R', number, number, number, number];
type Q = ['q' | 'Q', number, number, number, number];
type S = ['s' | 'S', number, number, number, number, number, number, number];
type T = ['t' | 'T', number, number];
type V = ['v' | 'V', number];
type U = ['u' | 'U', number, number, number];
type Z = ['z' | 'Z'];

export type PathCommand = A | C | O | H | L | M | R | Q | S | T | V | U | Z;

function smoothBezier(points: Point[], smooth: number, isLoop: boolean, constraint: Point[]) {
  const cps: Vector2[] = [];
  const hasConstraint = !!constraint;

  let prevPoint: Point;
  let nextPoint: Point;
  let min: Vector2 = [Infinity, Infinity];
  let max: Vector2 = [-Infinity, -Infinity];
  let nextCp0: Vector2;
  let cp1: Vector2;
  let cp0: Vector2;

  if (hasConstraint) {
    [min, max] = constraint;
    for (let i = 0, l = points.length; i < l; i += 1) {
      const point = points[i];
      min = _min(min, point);
      max = _max(max, point);
    }
  }

  for (let i = 0, len = points.length; i < len; i += 1) {
    const point = points[i];
    if (i === 0 && !isLoop) {
      cp0 = point;
    } else if (i === len - 1 && !isLoop) {
      cp1 = point;
      cps.push(cp0!);
      cps.push(cp1);
    } else {
      const prevIdx = [i ? i - 1 : len - 1, i - 1][isLoop ? 0 : 1];
      prevPoint = points[prevIdx];
      nextPoint = points[isLoop ? (i + 1) % len : i + 1];

      let v: Vector2 = [0, 0];
      v = sub(nextPoint, prevPoint);
      v = scale(v, smooth);

      let d0 = distance(point, prevPoint);
      let d1 = distance(point, nextPoint);

      const sum = d0 + d1;
      if (sum !== 0) {
        d0 /= sum;
        d1 /= sum;
      }

      let v1 = scale(v, -d0);
      let v2 = scale(v, d1);

      cp1 = add(point, v1);
      nextCp0 = add(point, v2);

      // 下一个控制点必须在这个点和下一个点之间
      nextCp0 = _min(nextCp0, _max(nextPoint, point));
      nextCp0 = _max(nextCp0, _min(nextPoint, point));

      // 重新计算 cp1 的值
      v1 = sub(nextCp0, point);
      v1 = scale(v1, -d0 / d1);
      cp1 = add(point, v1);

      // 上一个控制点必须要在上一个点和这一个点之间
      cp1 = _min(cp1, _max(prevPoint, point));
      cp1 = _max(cp1, _min(prevPoint, point));

      // 重新计算 nextCp0 的值
      v2 = sub(point, cp1);
      v2 = scale(v2, d1 / d0);
      nextCp0 = add(point, v2);

      if (hasConstraint) {
        cp1 = _max(cp1, min);
        cp1 = _min(cp1, max);
        nextCp0 = _max(nextCp0, min);
        nextCp0 = _min(nextCp0, max);
      }

      cps.push(cp0!);
      cps.push(cp1);
      cp0 = nextCp0;
    }
  }

  if (isLoop) {
    cps.push(cps.shift()!);
  }

  return cps;
}

/**
 * create bezier spline from catmull rom spline
 * @param {Array} crp Catmull Rom Points
 * @param {boolean} z Spline is loop
 * @param {Array} constraint Constraint
 */
export function catmullRom2Bezier(
  crp: number[],
  z: boolean = false,
  constraint: Point[] = [
    [0, 0],
    [1, 1],
  ]
): PathCommand[] {
  const isLoop = !!z;
  const pointList: Point[] = [];
  for (let i = 0, l = crp.length; i < l; i += 2) {
    pointList.push([crp[i], crp[i + 1]]);
  }

  const controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  const len = pointList.length;
  const d1: PathCommand[] = [];

  let cp1: Vector2;
  let cp2: Vector2;
  let p: Point;

  for (let i = 0; i < len - 1; i += 1) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];

    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
  }

  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    [p] = pointList;

    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
  }
  return d1;
}
