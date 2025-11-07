import { isSpace } from './is-space';
import type { PathParser } from './path-parser';

/**
 * Points the parser to the next character in the
 * path string every time it encounters any kind of
 * space character.
 */
export function skipSpaces(path: PathParser) {
  const { pathValue, max } = path;
  while (path.index < max && isSpace(pathValue.charCodeAt(path.index))) {
    path.index += 1;
  }
}
