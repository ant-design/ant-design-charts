import { parsePathString } from '../parser/parse-path-string';
import { normalizePath } from '../process/normalize-path';
import { getPointAtLength } from './get-point-at-length';
import { getPropertiesAtLength } from './get-properties-at-length';
import { getTotalLength } from './get-total-length';
/**
 * Returns the point and segment in path closest to a given point as well as
 * the distance to the path stroke.
 * @see https://bl.ocks.org/mbostock/8027637
 */
export function getPropertiesAtPoint(pathInput, point) {
    var path = parsePathString(pathInput);
    var normalPath = normalizePath(path);
    var pathLength = getTotalLength(path);
    var distanceTo = function (p) {
        var dx = p.x - point.x;
        var dy = p.y - point.y;
        return dx * dx + dy * dy;
    };
    var precision = 8;
    var scan;
    var scanDistance = 0;
    var closest;
    var bestLength = 0;
    var bestDistance = Infinity;
    // linear scan for coarse approximation
    for (var scanLength = 0; scanLength <= pathLength; scanLength += precision) {
        scan = getPointAtLength(normalPath, scanLength);
        scanDistance = distanceTo(scan);
        if (scanDistance < bestDistance) {
            closest = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }
    // binary search for precise estimate
    precision /= 2;
    var before;
    var after;
    var beforeLength = 0;
    var afterLength = 0;
    var beforeDistance = 0;
    var afterDistance = 0;
    while (precision > 0.5) {
        beforeLength = bestLength - precision;
        before = getPointAtLength(normalPath, beforeLength);
        beforeDistance = distanceTo(before);
        afterLength = bestLength + precision;
        after = getPointAtLength(normalPath, afterLength);
        afterDistance = distanceTo(after);
        if (beforeLength >= 0 && beforeDistance < bestDistance) {
            closest = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        }
        else if (afterLength <= pathLength && afterDistance < bestDistance) {
            closest = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        }
        else {
            precision /= 2;
        }
    }
    var segment = getPropertiesAtLength(path, bestLength);
    var distance = Math.sqrt(bestDistance);
    return { closest: closest, distance: distance, segment: segment };
}
//# sourceMappingURL=get-properties-at-point.js.map