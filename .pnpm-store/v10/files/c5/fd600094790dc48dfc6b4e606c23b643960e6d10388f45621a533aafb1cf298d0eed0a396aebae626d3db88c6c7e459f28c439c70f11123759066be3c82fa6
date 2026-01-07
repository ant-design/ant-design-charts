import { isDigit } from './is-digit-start';
import type { PathParser } from './path-parser';

/**
 * Validates every character of the path string,
 * every path command, negative numbers or floating point numbers.
 */
export function scanParam(path: PathParser) {
  const { max, pathValue, index: start } = path;
  let index = start;
  let zeroFirst = false;
  let hasCeiling = false;
  let hasDecimal = false;
  let hasDot = false;
  let ch;

  if (index >= max) {
    // path.err = 'SvgPath: missed param (at pos ' + index + ')';
    path.err = `[path-util]: Invalid path value at index ${index}, "pathValue" is missing param`;
    return;
  }
  ch = pathValue.charCodeAt(index);

  if (ch === 0x2b /* + */ || ch === 0x2d /* - */) {
    index += 1;
    // ch = (index < max) ? pathValue.charCodeAt(index) : 0;
    ch = pathValue.charCodeAt(index);
  }

  // This logic is shamelessly borrowed from Esprima
  // https://github.com/ariya/esprimas
  if (!isDigit(ch) && ch !== 0x2e /* . */) {
    // path.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + index + ')';
    path.err = `[path-util]: Invalid path value at index ${index}, "${pathValue[index]}" is not a number`;
    return;
  }

  if (ch !== 0x2e /* . */) {
    zeroFirst = ch === 0x30 /* 0 */;
    index += 1;

    ch = pathValue.charCodeAt(index);

    if (zeroFirst && index < max) {
      // decimal number starts with '0' such as '09' is illegal.
      if (ch && isDigit(ch)) {
        // path.err = 'SvgPath: numbers started with `0` such as `09`
        // are illegal (at pos ' + start + ')';
        path.err = `[path-util]: Invalid path value at index ${start}, "${pathValue[start]}" illegal number`;
        return;
      }
    }

    while (index < max && isDigit(pathValue.charCodeAt(index))) {
      index += 1;
      hasCeiling = true;
    }

    ch = pathValue.charCodeAt(index);
  }

  if (ch === 0x2e /* . */) {
    hasDot = true;
    index += 1;
    while (isDigit(pathValue.charCodeAt(index))) {
      index += 1;
      hasDecimal = true;
    }

    ch = pathValue.charCodeAt(index);
  }

  if (ch === 0x65 /* e */ || ch === 0x45 /* E */) {
    if (hasDot && !hasCeiling && !hasDecimal) {
      path.err = `[path-util]: Invalid path value at index ${index}, "${pathValue[index]}" invalid float exponent`;
      return;
    }

    index += 1;

    ch = pathValue.charCodeAt(index);

    if (ch === 0x2b /* + */ || ch === 0x2d /* - */) {
      index += 1;
    }
    if (index < max && isDigit(pathValue.charCodeAt(index))) {
      while (index < max && isDigit(pathValue.charCodeAt(index))) {
        index += 1;
      }
    } else {
      path.err = `[path-util]: Invalid path value at index ${index}, "${pathValue[index]}" invalid integer exponent`;
      return;
    }
  }

  path.index = index;
  path.param = +path.pathValue.slice(start, index);
}
