"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesAtPoint = getPropertiesAtPoint;
var parse_path_string_1 = require("../parser/parse-path-string");
var normalize_path_1 = require("../process/normalize-path");
var get_point_at_length_1 = require("./get-point-at-length");
var get_properties_at_length_1 = require("./get-properties-at-length");
var get_total_length_1 = require("./get-total-length");
/**
 * Returns the point and segment in path closest to a given point as well as
 * the distance to the path stroke.
 * @see https://bl.ocks.org/mbostock/8027637
 */
function getPropertiesAtPoint(pathInput, point) {
    var path = (0, parse_path_string_1.parsePathString)(pathInput);
    var normalPath = (0, normalize_path_1.normalizePath)(path);
    var pathLength = (0, get_total_length_1.getTotalLength)(path);
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
        scan = (0, get_point_at_length_1.getPointAtLength)(normalPath, scanLength);
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
        before = (0, get_point_at_length_1.getPointAtLength)(normalPath, beforeLength);
        beforeDistance = distanceTo(before);
        afterLength = bestLength + precision;
        after = (0, get_point_at_length_1.getPointAtLength)(normalPath, afterLength);
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
    var segment = (0, get_properties_at_length_1.getPropertiesAtLength)(path, bestLength);
    var distance = Math.sqrt(bestDistance);
    return { closest: closest, distance: distance, segment: segment };
}
//# sourceMappingURL=get-properties-at-point.js.map