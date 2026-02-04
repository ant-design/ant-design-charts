"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentArcFactory = segmentArcFactory;
var segment_line_factory_1 = require("./segment-line-factory");
var distance_square_root_1 = require("./distance-square-root");
function angleBetween(v0, v1) {
    var v0x = v0.x, v0y = v0.y;
    var v1x = v1.x, v1y = v1.y;
    var p = v0x * v1x + v0y * v1y;
    var n = Math.sqrt((Math.pow(v0x, 2) + Math.pow(v0y, 2)) * (Math.pow(v1x, 2) + Math.pow(v1y, 2)));
    var sign = v0x * v1y - v0y * v1x < 0 ? -1 : 1;
    var angle = sign * Math.acos(p / n);
    return angle;
}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 * @see https://github.com/MadLittleMods/svg-curve-lib/blob/master/src/js/svg-curve-lib.js
 */
function getPointAtArcSegmentLength(x1, y1, RX, RY, angle, LAF, SF, x, y, t) {
    var abs = Math.abs, sin = Math.sin, cos = Math.cos, sqrt = Math.sqrt, PI = Math.PI;
    var rx = abs(RX);
    var ry = abs(RY);
    var xRot = ((angle % 360) + 360) % 360;
    var xRotRad = xRot * (PI / 180);
    if (x1 === x && y1 === y) {
        return { x: x1, y: y1 };
    }
    if (rx === 0 || ry === 0) {
        return (0, segment_line_factory_1.segmentLineFactory)(x1, y1, x, y, t).point;
    }
    var dx = (x1 - x) / 2;
    var dy = (y1 - y) / 2;
    var transformedPoint = {
        x: cos(xRotRad) * dx + sin(xRotRad) * dy,
        y: -sin(xRotRad) * dx + cos(xRotRad) * dy,
    };
    var radiiCheck = Math.pow(transformedPoint.x, 2) / Math.pow(rx, 2) + Math.pow(transformedPoint.y, 2) / Math.pow(ry, 2);
    if (radiiCheck > 1) {
        rx *= sqrt(radiiCheck);
        ry *= sqrt(radiiCheck);
    }
    var cSquareNumerator = Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(transformedPoint.y, 2) - Math.pow(ry, 2) * Math.pow(transformedPoint.x, 2);
    var cSquareRootDenom = Math.pow(rx, 2) * Math.pow(transformedPoint.y, 2) + Math.pow(ry, 2) * Math.pow(transformedPoint.x, 2);
    var cRadicand = cSquareNumerator / cSquareRootDenom;
    cRadicand = cRadicand < 0 ? 0 : cRadicand;
    var cCoef = (LAF !== SF ? 1 : -1) * sqrt(cRadicand);
    var transformedCenter = {
        x: cCoef * ((rx * transformedPoint.y) / ry),
        y: cCoef * (-(ry * transformedPoint.x) / rx),
    };
    var center = {
        x: cos(xRotRad) * transformedCenter.x - sin(xRotRad) * transformedCenter.y + (x1 + x) / 2,
        y: sin(xRotRad) * transformedCenter.x + cos(xRotRad) * transformedCenter.y + (y1 + y) / 2,
    };
    var startVector = {
        x: (transformedPoint.x - transformedCenter.x) / rx,
        y: (transformedPoint.y - transformedCenter.y) / ry,
    };
    var startAngle = angleBetween({ x: 1, y: 0 }, startVector);
    var endVector = {
        x: (-transformedPoint.x - transformedCenter.x) / rx,
        y: (-transformedPoint.y - transformedCenter.y) / ry,
    };
    var sweepAngle = angleBetween(startVector, endVector);
    if (!SF && sweepAngle > 0) {
        sweepAngle -= 2 * PI;
    }
    else if (SF && sweepAngle < 0) {
        sweepAngle += 2 * PI;
    }
    sweepAngle %= 2 * PI;
    var alpha = startAngle + sweepAngle * t;
    var ellipseComponentX = rx * cos(alpha);
    var ellipseComponentY = ry * sin(alpha);
    var point = {
        x: cos(xRotRad) * ellipseComponentX - sin(xRotRad) * ellipseComponentY + center.x,
        y: sin(xRotRad) * ellipseComponentX + cos(xRotRad) * ellipseComponentY + center.y,
    };
    // to be used later
    // point.ellipticalArcStartAngle = startAngle;
    // point.ellipticalArcEndAngle = startAngle + sweepAngle;
    // point.ellipticalArcAngle = alpha;
    // point.ellipticalArcCenter = center;
    // point.resultantRx = rx;
    // point.resultantRy = ry;
    return point;
}
/**
 * Returns a {x,y} point at a given length, the total length and
 * the shape minimum and maximum {x,y} coordinates of an A (arc-to) segment.
 *
 * For better performance, it can skip calculate bbox or length in some scenario.
 */
function segmentArcFactory(X1, Y1, RX, RY, angle, LAF, SF, X2, Y2, distance, options) {
    var _a;
    var _b = options.bbox, bbox = _b === void 0 ? true : _b, _c = options.length, length = _c === void 0 ? true : _c, _d = options.sampleSize, sampleSize = _d === void 0 ? 30 : _d;
    var distanceIsNumber = typeof distance === 'number';
    var x = X1;
    var y = Y1;
    var LENGTH = 0;
    var prev = [x, y, LENGTH];
    var cur = [x, y];
    var t = 0;
    var POINT = { x: 0, y: 0 };
    var POINTS = [{ x: x, y: y }];
    if (distanceIsNumber && distance <= 0) {
        POINT = { x: x, y: y };
    }
    // bad perf when size > 100
    for (var j = 0; j <= sampleSize; j += 1) {
        t = j / sampleSize;
        (_a = getPointAtArcSegmentLength(X1, Y1, RX, RY, angle, LAF, SF, X2, Y2, t), x = _a.x, y = _a.y);
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
    if (distanceIsNumber && distance >= LENGTH) {
        POINT = { x: X2, y: Y2 };
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
//# sourceMappingURL=segment-arc-factory.js.map