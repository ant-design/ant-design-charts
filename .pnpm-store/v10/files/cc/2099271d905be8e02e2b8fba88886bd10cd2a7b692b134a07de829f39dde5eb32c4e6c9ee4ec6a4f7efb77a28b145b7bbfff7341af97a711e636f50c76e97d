import { __assign } from "tslib";
import { isNormalizedArray } from '../util/is-normalized-array';
import { paramsParser } from '../parser/params-parser';
import { path2Absolute } from '../convert/path-2-absolute';
import { normalizeSegment } from './normalize-segment';
/**
 * @example
 * const path = 'M0 0 H50';
 * const normalizedPath = SVGPathCommander.normalizePath(path);
 * // result => [['M', 0, 0], ['L', 50, 0]]
 */
export function normalizePath(pathInput) {
    if (isNormalizedArray(pathInput)) {
        return [].concat(pathInput);
    }
    var path = path2Absolute(pathInput);
    var params = __assign({}, paramsParser);
    for (var i = 0; i < path.length; i += 1) {
        // Save current path command
        path[i] = normalizeSegment(path[i], params);
        var segment = path[i];
        var seglen = segment.length;
        params.x1 = +segment[seglen - 2];
        params.y1 = +segment[seglen - 1];
        params.x2 = +segment[seglen - 4] || params.x1;
        params.y2 = +segment[seglen - 3] || params.y1;
    }
    return path;
}
//# sourceMappingURL=normalize-path.js.map