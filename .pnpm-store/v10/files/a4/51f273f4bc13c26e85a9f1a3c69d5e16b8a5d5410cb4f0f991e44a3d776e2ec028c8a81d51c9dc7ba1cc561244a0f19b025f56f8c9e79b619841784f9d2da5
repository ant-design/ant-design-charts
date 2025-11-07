import type { PathArray, PathBBox, PathLengthFactoryOptions } from '../types';
import { pathLengthFactory } from './path-length-factory';

/**
 * Returns the bounding box of a shape.
 */
export function getPathBBox(path: string | PathArray, options?: Partial<PathLengthFactoryOptions>): PathBBox {
  if (!path) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      x2: 0,
      y2: 0,
      cx: 0,
      cy: 0,
      cz: 0,
    };
  }

  const {
    min: { x: xMin, y: yMin },
    max: { x: xMax, y: yMax },
  } = pathLengthFactory(path, undefined, { ...options, length: false });

  const width = xMax - xMin;
  const height = yMax - yMin;

  return {
    width,
    height,
    x: xMin,
    y: yMin,
    x2: xMax,
    y2: yMax,
    cx: xMin + width / 2,
    cy: yMin + height / 2,
    // an estimted guess
    cz: Math.max(width, height) + Math.min(width, height) / 2,
  };
}
