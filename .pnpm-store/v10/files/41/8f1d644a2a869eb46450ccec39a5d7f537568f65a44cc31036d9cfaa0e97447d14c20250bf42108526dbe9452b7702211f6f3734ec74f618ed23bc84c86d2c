/* eslint-disable @typescript-eslint/no-unused-vars */
// https://github.com/d3/d3-plugins/blob/master/fisheye/fisheye.js
import { Linear } from '@antv/scale';
import { CreateTransformer, Vector2 } from '../type';

function fisheyeTransform(x: number, focus: number, distortion: number, min: number, max: number) {
  const left = x < focus;
  const m = (left ? focus - min : max - focus) || max - min;
  const f = left ? -1 : 1;
  return (f * m * (distortion + 1)) / (distortion + m / ((x - focus) * f)) + focus;
}

function fisheyeUntransform(tx: number, focus: number, distortion: number, min: number, max: number) {
  const left = tx < focus;
  const m = (left ? focus - min : max - focus) || max - min;
  const f = left ? -1 : 1;
  return m / ((m * (distortion + 1)) / (tx - focus) - distortion * f) + focus;
}

/**
 * Map actual visual point to abstract focus point(0, 1)
 */
function normalize(focus: number, length: number, isVisual: boolean): number {
  if (!isVisual) return focus;

  const s = new Linear({
    range: [0, 1],
    domain: [0, length],
  });
  return s.map(focus);
}

/**
 * Applies cartesian fisheye transforms for the first dimension of vector2.
 * @param params [focus, distortion]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const fisheyeX: CreateTransformer = (params, x, y, width, height) => {
  const [focus, distortion, isVisual = false] = params as [number, number, boolean];
  const normalizedFocusX = normalize(focus, width, isVisual);
  return {
    transform(vector: Vector2) {
      const [vx, vy] = vector;
      const fx = fisheyeTransform(vx, normalizedFocusX, distortion, 0, 1);
      return [fx, vy];
    },
    untransform(vector: Vector2) {
      const [fx, vy] = vector;
      const vx = fisheyeUntransform(fx, normalizedFocusX, distortion, 0, 1);
      return [vx, vy];
    },
  };
};

/**
 * Applies cartesian fisheye transforms for the second dimension of vector2.
 * @param params [focus, distortion]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const fisheyeY: CreateTransformer = (params, x, y, width, height) => {
  const [focus, distortion, isVisual = false] = params as [number, number, boolean];
  const normalizedFocusY = normalize(focus, height, isVisual);

  return {
    transform(vector: Vector2) {
      const [vx, vy] = vector;
      const fy = fisheyeTransform(vy, normalizedFocusY, distortion, 0, 1);
      return [vx, fy];
    },
    untransform(vector: Vector2) {
      const [vx, fy] = vector;
      const vy = fisheyeUntransform(fy, normalizedFocusY, distortion, 0, 1);
      return [vx, vy];
    },
  };
};

/**
 * Applies cartesian fisheye transforms for both dimensions of vector2.
 * @param params [focusX, focusY, distortionX, distortionY]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const fisheye: CreateTransformer = (params, x, y, width, height) => {
  const [focusX, focusY, distortionX, distortionY, isVisual = false] = params as [
    number,
    number,
    number,
    number,
    boolean,
  ];
  const normalizedFocusX = normalize(focusX, width, isVisual);
  const normalizedFocusY = normalize(focusY, height, isVisual);

  return {
    transform(vector: Vector2) {
      const [vx, vy] = vector;
      const fx = fisheyeTransform(vx, normalizedFocusX, distortionX, 0, 1);
      const fy = fisheyeTransform(vy, normalizedFocusY, distortionY, 0, 1);
      return [fx, fy];
    },
    untransform(vector: Vector2) {
      const [fx, fy] = vector;
      const vx = fisheyeUntransform(fx, normalizedFocusX, distortionX, 0, 1);
      const vy = fisheyeUntransform(fy, normalizedFocusY, distortionY, 0, 1);
      return [vx, vy];
    },
  };
};

/**
 * Applies circular fisheye transforms.
 * @param params [focusX, focusY, radius, distortion, isVisual?]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export const fisheyeCircular: CreateTransformer = (params, x, y, width, height) => {
  const [focusX, focusY, radius, distortion, isVisual = false] = params as [number, number, number, number, boolean];

  const scaleX = new Linear({
    range: [0, width],
  });
  const scaleY = new Linear({
    range: [0, height],
  });
  // focus point => visual point
  const nx = isVisual ? focusX : scaleX.map(focusX);
  const ny = isVisual ? focusY : scaleY.map(focusY);

  return {
    transform(vector: Vector2) {
      const [x, y] = vector;
      // focus point => visual point
      const dx = scaleX.map(x) - nx;
      const dy = scaleY.map(y) - ny;
      const dd = Math.sqrt(dx * dx + dy * dy);

      if (dd > radius) return [x, y];
      const r = fisheyeTransform(dd, 0, distortion, 0, radius);
      const theta = Math.atan2(dy, dx);

      const fx = nx + r * Math.cos(theta);
      const fy = ny + r * Math.sin(theta);
      // visual point => focus point
      return [scaleX.invert(fx), scaleY.invert(fy)];
    },
    untransform(vector: Vector2) {
      const [tx, ty] = vector;
      const dx = scaleX.map(tx) - nx;
      const dy = scaleY.map(ty) - ny;
      const dd = Math.sqrt(dx * dx + dy * dy);
      if (dd > radius) return [tx, ty];

      const x = fisheyeUntransform(dd, 0, distortion, 0, radius);
      const theta = Math.atan2(dy, dx);

      const fx = nx + x * Math.cos(theta);
      const fy = ny + x * Math.sin(theta);
      return [scaleX.invert(fx), scaleY.invert(fy)];
    },
  };
};
