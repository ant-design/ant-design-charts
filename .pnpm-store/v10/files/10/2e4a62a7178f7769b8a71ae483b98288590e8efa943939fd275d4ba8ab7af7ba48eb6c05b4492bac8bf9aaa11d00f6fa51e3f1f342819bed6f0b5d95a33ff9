import { isSpace } from './is-space';
/**
 * Points the parser to the next character in the
 * path string every time it encounters any kind of
 * space character.
 */
export function skipSpaces(path) {
    var pathValue = path.pathValue, max = path.max;
    while (path.index < max && isSpace(pathValue.charCodeAt(path.index))) {
        path.index += 1;
    }
}
//# sourceMappingURL=skip-spaces.js.map