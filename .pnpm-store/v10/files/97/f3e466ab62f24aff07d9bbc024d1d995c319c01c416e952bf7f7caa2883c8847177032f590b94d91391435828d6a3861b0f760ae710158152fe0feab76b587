import type { PathSegment, ParserParams, CSegment, MSegment, CubicSegment } from '../types';
import { arcToCubic } from './arc-2-cubic';
import { quadToCubic } from './quad-2-cubic';
import { lineToCubic } from './line-2-cubic';

export function segmentToCubic(segment: PathSegment, params: ParserParams): CSegment | MSegment {
  const [pathCommand] = segment;
  const values = segment.slice(1).map(Number);
  const [x, y] = values;
  let args: any[];
  const { x1: px1, y1: py1, x: px, y: py } = params;

  if (!'TQ'.includes(pathCommand)) {
    params.qx = null;
    params.qy = null;
  }

  switch (pathCommand) {
    case 'M':
      params.x = x;
      params.y = y;
      return segment;
    case 'A':
      args = [px1, py1].concat(values);
      // @ts-ignore
      return ['C'].concat(
        arcToCubic(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]),
      ) as CubicSegment;
    case 'Q':
      params.qx = x;
      params.qy = y;
      args = [px1, py1].concat(values);
      // @ts-ignore
      return ['C'].concat(quadToCubic(args[0], args[1], args[2], args[3], args[4], args[5])) as CubicSegment;
    case 'L':
      // @ts-ignore
      return ['C'].concat(lineToCubic(px1, py1, x, y)) as CSegment;
    case 'Z':
      // prevent NaN from divide 0
      if (px1 === px && py1 === py) {
        return ['C', px1, py1, px, py, px, py];
      }

      // @ts-ignore
      return ['C'].concat(lineToCubic(px1, py1, px, py)) as CSegment;
    default:
  }
  return segment as CSegment;
}
