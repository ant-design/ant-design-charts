"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentToCubic = segmentToCubic;
var arc_2_cubic_1 = require("./arc-2-cubic");
var quad_2_cubic_1 = require("./quad-2-cubic");
var line_2_cubic_1 = require("./line-2-cubic");
function segmentToCubic(segment, params) {
    var pathCommand = segment[0];
    var values = segment.slice(1).map(Number);
    var x = values[0], y = values[1];
    var args;
    var px1 = params.x1, py1 = params.y1, px = params.x, py = params.y;
    if (!'TQ'.includes(pathCommand)) {
        params.qx = null;
        params.qy = null;
    }
    switch (pathCommand) {
        case 'M':
            params.x = x;
            params.y = y;
            return segment;
        case 'A':
            args = [px1, py1].concat(values);
            // @ts-ignore
            return ['C'].concat((0, arc_2_cubic_1.arcToCubic)(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]));
        case 'Q':
            params.qx = x;
            params.qy = y;
            args = [px1, py1].concat(values);
            // @ts-ignore
            return ['C'].concat((0, quad_2_cubic_1.quadToCubic)(args[0], args[1], args[2], args[3], args[4], args[5]));
        case 'L':
            // @ts-ignore
            return ['C'].concat((0, line_2_cubic_1.lineToCubic)(px1, py1, x, y));
        case 'Z':
            // prevent NaN from divide 0
            if (px1 === px && py1 === py) {
                return ['C', px1, py1, px, py, px, py];
            }
            // @ts-ignore
            return ['C'].concat((0, line_2_cubic_1.lineToCubic)(px1, py1, px, py));
        default:
    }
    return segment;
}
//# sourceMappingURL=segment-2-cubic.js.map