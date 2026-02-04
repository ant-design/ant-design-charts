"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesAtLength = getPropertiesAtLength;
var parse_path_string_1 = require("../parser/parse-path-string");
var get_total_length_1 = require("./get-total-length");
/**
 * Returns the segment, its index and length as well as
 * the length to that segment at a given length in a path.
 */
function getPropertiesAtLength(pathInput, distance) {
    var pathArray = (0, parse_path_string_1.parsePathString)(pathInput);
    if (typeof pathArray === 'string') {
        throw TypeError(pathArray);
    }
    var pathTemp = pathArray.slice();
    var pathLength = (0, get_total_length_1.getTotalLength)(pathTemp);
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
        lengthAtSegment = (0, get_total_length_1.getTotalLength)(pathTemp);
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
        lengthAtSegment = (0, get_total_length_1.getTotalLength)(pathTemp);
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