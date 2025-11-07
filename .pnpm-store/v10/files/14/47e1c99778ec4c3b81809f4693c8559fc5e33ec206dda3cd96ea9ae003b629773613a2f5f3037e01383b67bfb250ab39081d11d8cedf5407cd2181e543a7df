import { finalizeSegment } from './finalize-segment';
import { paramsCount } from './params-count';
import { scanFlag } from './scan-flag';
import { scanParam } from './scan-param';
import { skipSpaces } from './skip-spaces';
import { isPathCommand } from './is-path-command';
import { isDigitStart } from './is-digit-start';
import { isArcCommand } from './is-arc-command';
import type { PathParser } from './path-parser';

/**
 * Scans every character in the path string to determine
 * where a segment starts and where it ends.
 */
export function scanSegment(path: PathParser) {
  const { max, pathValue, index } = path;
  const cmdCode = pathValue.charCodeAt(index);
  const reqParams = paramsCount[pathValue[index].toLowerCase()];

  path.segmentStart = index;

  if (!isPathCommand(cmdCode)) {
    path.err = `[path-util]: Invalid path value "${pathValue[index]}" is not a path command`;
    return;
  }

  path.index += 1;
  skipSpaces(path);

  path.data = [];

  if (!reqParams) {
    // Z
    finalizeSegment(path);
    return;
  }

  for (;;) {
    for (let i = reqParams; i > 0; i -= 1) {
      if (isArcCommand(cmdCode) && (i === 3 || i === 4)) scanFlag(path);
      else scanParam(path);

      if (path.err.length) {
        return;
      }
      path.data.push(path.param);

      skipSpaces(path);

      // after ',' param is mandatory
      if (path.index < max && pathValue.charCodeAt(path.index) === 0x2c /* , */) {
        path.index += 1;
        skipSpaces(path);
      }
    }

    if (path.index >= path.max) {
      break;
    }

    // Stop on next segment
    if (!isDigitStart(pathValue.charCodeAt(path.index))) {
      break;
    }
  }

  finalizeSegment(path);
}
