"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentLineFactory = segmentLineFactory;
var mid_point_1 = require("./mid-point");
var distance_square_root_1 = require("./distance-square-root");
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a line (L,V,H,Z) segment.
 */
function segmentLineFactory(x1, y1, x2, y2, distance) {
    var length = (0, distance_square_root_1.distanceSquareRoot)([x1, y1], [x2, y2]);
    var point = { x: 0, y: 0 };
    if (typeof distance === 'number') {
        if (distance <= 0) {
            point = { x: x1, y: y1 };
        }
        else if (distance >= length) {
            point = { x: x2, y: y2 };
        }
        else {
            var _a = (0, mid_point_1.midPoint)([x1, y1], [x2, y2], distance / length), x = _a[0], y = _a[1];
            point = { x: x, y: y };
        }
    }
    return {
        length: length,
        point: point,
        min: {
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
        },
        max: {
            x: Math.max(x1, x2),
            y: Math.max(y1, y2),
        },
    };
}
//# sourceMappingURL=segment-line-factory.js.map