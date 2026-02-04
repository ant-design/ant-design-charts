import type { PathCommand } from '../types';
import { paramsCount } from './params-count';
import type { PathParser } from './path-parser';

/**
 * Breaks the parsing of a pathString once a segment is finalized.
 */
export function finalizeSegment(path: PathParser) {
  let pathCommand = path.pathValue[path.segmentStart] as PathCommand;
  let LK = pathCommand.toLowerCase();
  const { data } = path;

  while (data.length >= paramsCount[LK]) {
    // overloaded `moveTo`
    // https://github.com/rveciana/svg-path-properties/blob/master/src/parse.ts
    if (LK === 'm' && data.length > 2) {
      // @ts-ignore
      path.segments.push([pathCommand].concat(data.splice(0, 2)));
      LK = 'l';
      pathCommand = pathCommand === 'm' ? 'l' : 'L';
    } else {
      // @ts-ignore
      path.segments.push([pathCommand].concat(data.splice(0, paramsCount[LK])));
    }

    if (!paramsCount[LK]) {
      break;
    }
  }
}
