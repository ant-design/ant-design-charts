"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentQuadFactory = segmentQuadFactory;
var distance_square_root_1 = require("./distance-square-root");
/**
 * Returns the {x,y} coordinates of a point at a
 * given length of a quadratic-bezier segment.
 *
 * @see https://github.com/substack/point-at-length
 */
function getPointAtQuadSegmentLength(x1, y1, cx, cy, x2, y2, t) {
    var t1 = 1 - t;
    return {
        x: Math.pow(t1, 2) * x1 + 2 * t1 * t * cx + Math.pow(t, 2) * x2,
        y: Math.pow(t1, 2) * y1 + 2 * t1 * t * cy + Math.pow(t, 2) * y2,
    };
}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a Q (quadratic-bezier) segment.
 */
function segmentQuadFactory(x1, y1, qx, qy, x2, y2, distance, options) {
    var _a;
    var _b = options.bbox, bbox = _b === void 0 ? true : _b, _c = options.length, length = _c === void 0 ? true : _c, _d = options.sampleSize, sampleSize = _d === void 0 ? 10 : _d;
    var distanceIsNumber = typeof distance === 'number';
    var x = x1;
    var y = y1;
    var LENGTH = 0;
    var prev = [x, y, LENGTH];
    var cur = [x, y];
    var t = 0;
    var POINT = { x: 0, y: 0 };
    var POINTS = [{ x: x, y: y }];
    if (distanceIsNumber && distance <= 0) {
        POINT = { x: x, y: y };
    }
    for (var j = 0; j <= sampleSize; j += 1) {
        t = j / sampleSize;
        (_a = getPointAtQuadSegmentLength(x1, y1, qx, qy, x2, y2, t), x = _a.x, y = _a.y);
        if (bbox) {
            POINTS.push({ x: x, y: y });
        }
        if (length) {
            LENGTH += (0, distance_square_root_1.distanceSquareRoot)(cur, [x, y]);
        }
        cur = [x, y];
        if (distanceIsNumber && LENGTH >= distance && distance > prev[2]) {
            var dv = (LENGTH - distance) / (LENGTH - prev[2]);
            POINT = {
                x: cur[0] * (1 - dv) + prev[0] * dv,
                y: cur[1] * (1 - dv) + prev[1] * dv,
            };
        }
        prev = [x, y, LENGTH];
    }
    /* istanbul ignore else */
    if (distanceIsNumber && distance >= LENGTH) {
        POINT = { x: x2, y: y2 };
    }
    return {
        length: LENGTH,
        point: POINT,
        min: {
            x: Math.min.apply(null, POINTS.map(function (n) { return n.x; })),
            y: Math.min.apply(null, POINTS.map(function (n) { return n.y; })),
        },
        max: {
            x: Math.max.apply(null, POINTS.map(function (n) { return n.x; })),
            y: Math.max.apply(null, POINTS.map(function (n) { return n.y; })),
        },
    };
}
//# sourceMappingURL=segment-quad-factory.js.map