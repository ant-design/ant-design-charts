import type { PathArray, PathSegment, SegmentProperties } from '../types';
import { parsePathString } from '../parser/parse-path-string';
import { getTotalLength } from './get-total-length';

/**
 * Returns the segment, its index and length as well as
 * the length to that segment at a given length in a path.
 */
export function getPropertiesAtLength(pathInput: string | PathArray, distance?: number): SegmentProperties {
  const pathArray = parsePathString(pathInput);

  if (typeof pathArray === 'string') {
    throw TypeError(pathArray);
  }

  let pathTemp: PathArray = pathArray.slice() as PathArray;
  let pathLength = getTotalLength(pathTemp);
  let index = pathTemp.length - 1;
  let lengthAtSegment = 0;
  let length = 0;
  let segment: PathSegment = pathArray[0];
  const [x, y] = segment.slice(-2);
  const point = { x, y };

  // If the path is empty, return 0.
  if (index <= 0 || !distance || !Number.isFinite(distance)) {
    return {
      segment,
      index: 0,
      length,
      point,
      lengthAtSegment,
    };
  }

  if (distance >= pathLength) {
    pathTemp = pathArray.slice(0, -1) as PathArray;
    lengthAtSegment = getTotalLength(pathTemp);
    length = pathLength - lengthAtSegment;
    return {
      segment: pathArray[index],
      index,
      length,
      lengthAtSegment,
    };
  }

  const segments = [];
  while (index > 0) {
    segment = pathTemp[index];
    pathTemp = pathTemp.slice(0, -1) as PathArray;
    lengthAtSegment = getTotalLength(pathTemp);
    length = pathLength - lengthAtSegment;
    pathLength = lengthAtSegment;
    segments.push({
      segment,
      index,
      length,
      lengthAtSegment,
    });
    index -= 1;
  }

  return segments.find(({ lengthAtSegment: l }) => l <= distance);
}
