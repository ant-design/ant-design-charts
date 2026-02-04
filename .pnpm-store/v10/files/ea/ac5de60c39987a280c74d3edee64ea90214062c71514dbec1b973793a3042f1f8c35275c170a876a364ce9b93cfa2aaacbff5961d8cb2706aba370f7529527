"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../d3-array/src/index.js");
var _area = require("./area.js");
var _cartesian = require("./cartesian.js");
var _math = require("./math.js");
var _stream = /*#__PURE__*/ _interop_require_default(require("./stream.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lambda0, phi0, lambda1, phi1, lambda2, lambda00, phi00, p0, deltaSum, ranges, range;
var boundsStream = {
    point: boundsPoint,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function polygonStart() {
        boundsStream.point = boundsRingPoint;
        boundsStream.lineStart = boundsRingStart;
        boundsStream.lineEnd = boundsRingEnd;
        deltaSum = new _index.Adder();
        _area.areaStream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
        _area.areaStream.polygonEnd();
        boundsStream.point = boundsPoint;
        boundsStream.lineStart = boundsLineStart;
        boundsStream.lineEnd = boundsLineEnd;
        if (_area.areaRingSum < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
        else if (deltaSum > _math.epsilon) phi1 = 90;
        else if (deltaSum < -_math.epsilon) phi0 = -90;
        range[0] = lambda0, range[1] = lambda1;
    },
    sphere: function sphere() {
        lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    }
};
function boundsPoint(lambda, phi) {
    ranges.push(range = [
        lambda0 = lambda,
        lambda1 = lambda
    ]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
}
function linePoint(lambda, phi) {
    var p = (0, _cartesian.cartesian)([
        lambda * _math.radians,
        phi * _math.radians
    ]);
    if (p0) {
        var normal = (0, _cartesian.cartesianCross)(p0, p), equatorial = [
            normal[1],
            -normal[0],
            0
        ], inflection = (0, _cartesian.cartesianCross)(equatorial, normal);
        (0, _cartesian.cartesianNormalizeInPlace)(inflection);
        inflection = (0, _cartesian.spherical)(inflection);
        var delta = lambda - lambda2, sign = delta > 0 ? 1 : -1, lambdai = inflection[0] * _math.degrees * sign, phii, antimeridian = (0, _math.abs)(delta) > 180;
        if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = inflection[1] * _math.degrees;
            if (phii > phi1) phi1 = phii;
        } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = -inflection[1] * _math.degrees;
            if (phii < phi0) phi0 = phii;
        } else {
            if (phi < phi0) phi0 = phi;
            if (phi > phi1) phi1 = phi;
        }
        if (antimeridian) {
            if (lambda < lambda2) {
                if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
            } else {
                if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
            }
        } else {
            if (lambda1 >= lambda0) {
                if (lambda < lambda0) lambda0 = lambda;
                if (lambda > lambda1) lambda1 = lambda;
            } else {
                if (lambda > lambda2) {
                    if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
                } else {
                    if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
                }
            }
        }
    } else {
        ranges.push(range = [
            lambda0 = lambda,
            lambda1 = lambda
        ]);
    }
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
    boundsStream.point = linePoint;
}
function boundsLineEnd() {
    range[0] = lambda0, range[1] = lambda1;
    boundsStream.point = boundsPoint;
    p0 = null;
}
function boundsRingPoint(lambda, phi) {
    if (p0) {
        var delta = lambda - lambda2;
        deltaSum.add((0, _math.abs)(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
        lambda00 = lambda, phi00 = phi;
    }
    _area.areaStream.point(lambda, phi);
    linePoint(lambda, phi);
}
function boundsRingStart() {
    _area.areaStream.lineStart();
}
function boundsRingEnd() {
    boundsRingPoint(lambda00, phi00);
    _area.areaStream.lineEnd();
    if ((0, _math.abs)(deltaSum) > _math.epsilon) lambda0 = -(lambda1 = 180);
    range[0] = lambda0, range[1] = lambda1;
    p0 = null;
}
// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}
function rangeCompare(a, b) {
    return a[0] - b[0];
}
function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}
function _default(feature) {
    var i, n, a, b, merged, deltaMax, delta;
    phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
    ranges = [];
    (0, _stream.default)(feature, boundsStream);
    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
        ranges.sort(rangeCompare);
        // Then, merge any ranges that overlap.
        for(i = 1, a = ranges[0], merged = [
            a
        ]; i < n; ++i){
            b = ranges[i];
            if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
                if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
            } else {
                merged.push(a = b);
            }
        }
        // Finally, find the largest gap between the merged ranges.
        // The final bounding box will be the inverse of this gap.
        for(deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i){
            b = merged[i];
            if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
        }
    }
    ranges = range = null;
    return lambda0 === Infinity || phi0 === Infinity ? [
        [
            NaN,
            NaN
        ],
        [
            NaN,
            NaN
        ]
    ] : [
        [
            lambda0,
            phi0
        ],
        [
            lambda1,
            phi1
        ]
    ];
}
