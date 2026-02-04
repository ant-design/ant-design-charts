import { parsePathString } from '../parser/parse-path-string';
import { getTotalLength } from './get-total-length';
/**
 * Returns the segment, its index and length as well as
 * the length to that segment at a given length in a path.
 */
export function getPropertiesAtLength(pathInput, distance) {
    var pathArray = parsePathString(pathInput);
    if (typeof pathArray === 'string') {
        throw TypeError(pathArray);
    }
    var pathTemp = pathArray.slice();
    var pathLength = getTotalLength(pathTemp);
    var index = pathTemp.length - 1;
    var lengthAtSegment = 0;
    var length = 0;
    var segment = pathArray[0];
    var _a = segment.slice(-2), x = _a[0], y = _a[1];
    var point = { x: x, y: y };
    // If the path is empty, return 0.
    if (index <= 0 || !distance || !Number.isFinite(distance)) {
        return {
            segment: segment,
            index: 0,
            length: length,
            point: point,
            lengthAtSegment: lengthAtSegment,
        };
    }
    if (distance >= pathLength) {
        pathTemp = pathArray.slice(0, -1);
        lengthAtSegment = getTotalLength(pathTemp);
        length = pathLength - lengthAtSegment;
        return {
            segment: pathArray[index],
            index: index,
            length: length,
            lengthAtSegment: lengthAtSegment,
        };
    }
    var segments = [];
    while (index > 0) {
        segment = pathTemp[index];
        pathTemp = pathTemp.slice(0, -1);
        lengthAtSegment = getTotalLength(pathTemp);
        length = pathLength - lengthAtSegment;
        pathLength = lengthAtSegment;
        segments.push({
            segment: segment,
            index: index,
            length: length,
            lengthAtSegment: lengthAtSegment,
        });
        index -= 1;
    }
    return segments.find(function (_a) {
        var l = _a.lengthAtSegment;
        return l <= distance;
    });
}
//# sourceMappingURL=get-properties-at-length.js.map