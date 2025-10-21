import { isAbsoluteArray } from '../util/is-absolute-array';
import { parsePathString } from '../parser/parse-path-string';
import type { PathArray, AbsoluteArray, AbsoluteSegment } from '../types';

/**
 * Converts a `PathArray` to an `AbsoluteArray`.
 */
export function path2Absolute(pathInput: string | PathArray): AbsoluteArray {
  if (isAbsoluteArray(pathInput)) {
    return [].concat(pathInput) as AbsoluteArray;
  }

  const path = parsePathString(pathInput as PathArray) as PathArray;

  // if (!path || !path.length) {
  //   return [['M', 0, 0]];
  // }
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;

  // @ts-ignore
  return path.map((segment) => {
    const values = segment.slice(1).map(Number);
    const [pathCommand] = segment;
    const absCommand = pathCommand.toUpperCase();

    if (pathCommand === 'M') {
      [x, y] = values;
      mx = x;
      my = y;
      return ['M', x, y];
    }
    let absoluteSegment: AbsoluteSegment;

    if (pathCommand !== absCommand) {
      switch (absCommand) {
        case 'A':
          absoluteSegment = [
            absCommand,
            values[0],
            values[1],
            values[2],
            values[3],
            values[4],
            values[5] + x,
            values[6] + y,
          ];
          break;
        case 'V':
          absoluteSegment = [absCommand, values[0] + y];
          break;
        case 'H':
          absoluteSegment = [absCommand, values[0] + x];
          break;
        default: {
          // use brakets for `eslint: no-case-declaration`
          // https://stackoverflow.com/a/50753272/803358
          const absValues = values.map((n, j) => n + (j % 2 ? y : x));
          // for n, l, c, s, q, t
          // @ts-ignore
          absoluteSegment = [absCommand].concat(absValues) as AbsoluteSegment;
        }
      }
    } else {
      // @ts-ignore
      absoluteSegment = [absCommand].concat(values) as AbsoluteSegment;
    }

    const segLength = absoluteSegment.length;
    switch (absCommand) {
      case 'Z':
        x = mx;
        y = my;
        break;
      case 'H':
        [, x] = absoluteSegment;
        break;
      case 'V':
        [, y] = absoluteSegment;
        break;
      default:
        x = absoluteSegment[segLength - 2] as number;
        y = absoluteSegment[segLength - 1] as number;

        if (absCommand === 'M') {
          mx = x;
          my = y;
        }
    }
    return absoluteSegment;
  });
}
