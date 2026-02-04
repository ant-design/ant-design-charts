import { paramsParser } from '../parser/params-parser';
import { fixArc } from '../process/fix-arc';
import { normalizePath } from '../process/normalize-path';
import { isCurveArray } from '../util/is-curve-array';
import { segmentToCubic } from '../process/segment-2-cubic';
import type { CurveArray, PathArray } from '../types';
// import { fixPath } from '../process/fix-path';

export function path2Curve(
  pathInput: string | PathArray,
  needZCommandIndexes = false,
): CurveArray | [CurveArray, number[]] {
  if (isCurveArray(pathInput)) {
    const cloned = [].concat(pathInput) as CurveArray;
    if (needZCommandIndexes) {
      return [cloned, []];
    } else {
      return cloned;
    }
  }

  // fixPath will remove 'Z' command
  // const path = fixPath(normalizePath(pathInput));
  const path = normalizePath(pathInput) as CurveArray;

  const params = { ...paramsParser };
  const allPathCommands = [];
  let pathCommand = '';
  let ii = path.length;
  let segment: any;
  let seglen: number;
  const zCommandIndexes: number[] = [];

  for (let i = 0; i < ii; i += 1) {
    if (path[i]) [pathCommand] = path[i];

    allPathCommands[i] = pathCommand;
    const curveSegment = segmentToCubic(path[i], params);

    path[i] = curveSegment;

    fixArc(path, allPathCommands, i);
    ii = path.length; // solves curveArrays ending in Z

    // keep Z command account for lineJoin
    // @see https://github.com/antvis/util/issues/68
    if (pathCommand === 'Z') {
      zCommandIndexes.push(i);
    }

    segment = path[i];
    seglen = segment.length;

    params.x1 = +segment[seglen - 2];
    params.y1 = +segment[seglen - 1];
    params.x2 = +segment[seglen - 4] || params.x1;
    params.y2 = +segment[seglen - 3] || params.y1;
  }

  // validate

  if (needZCommandIndexes) {
    return [path, zCommandIndexes];
  } else {
    return path;
  }
}
