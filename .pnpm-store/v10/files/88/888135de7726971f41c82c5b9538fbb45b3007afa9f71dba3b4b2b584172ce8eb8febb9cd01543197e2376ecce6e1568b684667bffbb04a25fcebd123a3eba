import type { Point, Vector2 } from '../types';

/**
 * @param vec
 * @param s
 */
export function scale(vec: Vector2, s: number): Vector2 {
  return [vec[0] * s, vec[1] * s];
}

export function add(vec1: Vector2, vec2: Vector2): Vector2 {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
}

export function sub(vec1: Vector2, vec2: Vector2): Vector2 {
  return [vec1[0] - vec2[0], vec1[1] - vec2[1]];
}

export function min(vec1: Vector2, vec2: Vector2): Vector2 {
  return [Math.min(vec1[0], vec2[0]), Math.min(vec1[1], vec2[1])];
}

export function max(vec1: Vector2, vec2: Vector2): Vector2 {
  return [Math.max(vec1[0], vec2[0]), Math.max(vec1[1], vec2[1])];
}

export function distance(vec1: Vector2, vec2: Vector2): number {
  return Math.sqrt((vec1[0] - vec2[0]) ** 2 + (vec1[1] - vec2[1]) ** 2);
}

export function normalize(vec: Vector2): Vector2 {
  if (vec[0] === 0 && vec[1] === 0) return [0, 0];
  const len = Math.sqrt(vec[0] ** 2 + vec[1] ** 2);
  return [vec[0] / len, vec[1] / len];
}

/**
 * 将给定向量围绕指定点旋转指定角度
 * @param vec
 * @param origin 旋转中心
 * @param angle 旋转角度，弧度制
 */
export function rotate(vec: Vector2, origin: Point, angle: number) {
  const [x, y] = vec;
  const [ox, oy] = origin;
  const dx = x - ox;
  const dy = y - oy;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  return [dx * cos - dy * sin + ox, dx * sin + dy * cos + oy];
}

export function vertical(vec: Vector2, flag: boolean): Vector2 {
  return flag ? [vec[1], -vec[0]] : [-vec[1], vec[0]];
}
