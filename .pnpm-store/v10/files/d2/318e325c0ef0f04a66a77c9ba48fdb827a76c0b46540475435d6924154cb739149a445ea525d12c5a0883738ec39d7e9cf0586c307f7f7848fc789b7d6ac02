import { isPathArray } from '../util/is-path-array';
import { scanSegment } from './scan-segment';
import { skipSpaces } from './skip-spaces';
import { PathParser } from './path-parser';
/**
 * Parses a path string value and returns an array
 * of segments we like to call `pathArray`.
 */
export function parsePathString(pathInput) {
    if (isPathArray(pathInput)) {
        return [].concat(pathInput);
    }
    var path = new PathParser(pathInput);
    skipSpaces(path);
    while (path.index < path.max && !path.err.length) {
        scanSegment(path);
    }
    return path.err ? path.err : path.segments;
}
//# sourceMappingURL=parse-path-string.js.map