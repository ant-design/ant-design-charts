import { distanceSquareRoot } from './distance-square-root';
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 */
function getPointAtCubicSegmentLength(x1, y1, c1x, c1y, c2x, c2y, x2, y2, t) {
    var t1 = 1 - t;
    return {
        x: Math.pow(t1, 3) * x1 + 3 * Math.pow(t1, 2) * t * c1x + 3 * t1 * Math.pow(t, 2) * c2x + Math.pow(t, 3) * x2,
        y: Math.pow(t1, 3) * y1 + 3 * Math.pow(t1, 2) * t * c1y + 3 * t1 * Math.pow(t, 2) * c2y + Math.pow(t, 3) * y2,
    };
}
/**
 * Returns the length of a C (cubic-bezier) segment
 * or an {x,y} point at a given length.
 */
export function segmentCubicFactory(x1, y1, c1x, c1y, c2x, c2y, x2, y2, distance, options) {
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
    // bad perf when size = 300
    for (var j = 0; j <= sampleSize; j += 1) {
        t = j / sampleSize;
        (_a = getPointAtCubicSegmentLength(x1, y1, c1x, c1y, c2x, c2y, x2, y2, t), x = _a.x, y = _a.y);
        if (bbox) {
            POINTS.push({ x: x, y: y });
        }
        if (length) {
            LENGTH += distanceSquareRoot(cur, [x, y]);
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
//# sourceMappingURL=segment-cubic-factory.js.map