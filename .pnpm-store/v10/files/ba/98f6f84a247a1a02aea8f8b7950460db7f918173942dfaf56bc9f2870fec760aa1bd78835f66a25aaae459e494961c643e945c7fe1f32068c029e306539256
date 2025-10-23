import type { PathArray, PathSegment } from '../types';

export function clonePath(path: PathArray | PathSegment): PathArray {
  return path.map((x) => (Array.isArray(x) ? [].concat(x) : x)) as PathArray;
}
