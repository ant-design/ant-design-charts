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
var _cartesian = require("../cartesian.js");
var _circle = require("../circle.js");
var _math = require("../math.js");
var _pointEqual = /*#__PURE__*/ _interop_require_default(require("../pointEqual.js"));
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(radius) {
    var cr = (0, _math.cos)(radius), delta = 2 * _math.radians, smallRadius = cr > 0, notHemisphere = (0, _math.abs)(cr) > _math.epsilon; // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        (0, _circle.circleStream)(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi) {
        return (0, _math.cos)(lambda) * (0, _math.cos)(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
        var point0, c0, v0, v00, clean; // no intersections
        return {
            lineStart: function lineStart() {
                v00 = v0 = false;
                clean = 1;
            },
            point: function point(lambda, phi) {
                var point1 = [
                    lambda,
                    phi
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? _math.pi : -_math.pi), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || (0, _pointEqual.default)(point0, point2) || (0, _pointEqual.default)(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                    clean = 0;
                    if (v) {
                        // outside going in
                        stream.lineStart();
                        point2 = intersect(point1, point0);
                        stream.point(point2[0], point2[1]);
                    } else {
                        // inside going out
                        point2 = intersect(point0, point1);
                        stream.point(point2[0], point2[1], 2);
                        stream.lineEnd();
                    }
                    point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                    var t;
                    // If the codes for two points are different, or are both zero,
                    // and there this segment intersects with the small circle.
                    if (!(c & c0) && (t = intersect(point1, point0, true))) {
                        clean = 0;
                        if (smallRadius) {
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1]);
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                        } else {
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1], 3);
                        }
                    }
                }
                if (v && (!point0 || !(0, _pointEqual.default)(point0, point1))) {
                    stream.point(point1[0], point1[1]);
                }
                point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function lineEnd() {
                if (v0) stream.lineEnd();
                point0 = null;
            },
            // Rejoin first and last segments if there were intersections and the first
            // and last points were visible.
            clean: function clean1() {
                return clean | (v00 && v0) << 1;
            }
        };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
        var pa = (0, _cartesian.cartesian)(a), pb = (0, _cartesian.cartesian)(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = (0, _cartesian.cartesianCross)(pa, pb), n2n2 = (0, _cartesian.cartesianDot)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, _cartesian.cartesianCross)(n1, n2), A = (0, _cartesian.cartesianScale)(n1, c1), B = (0, _cartesian.cartesianScale)(n2, c2);
        (0, _cartesian.cartesianAddInPlace)(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = (0, _cartesian.cartesianDot)(A, u), uu = (0, _cartesian.cartesianDot)(u, u), t2 = w * w - uu * ((0, _cartesian.cartesianDot)(A, A) - 1);
        if (t2 < 0) return;
        var t = (0, _math.sqrt)(t2), q = (0, _cartesian.cartesianScale)(u, (-w - t) / uu);
        (0, _cartesian.cartesianAddInPlace)(q, A);
        q = (0, _cartesian.spherical)(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = (0, _math.abs)(delta - _math.pi) < _math.epsilon, meridian = polar || delta < _math.epsilon;
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, _math.abs)(q[0] - lambda0) < _math.epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > _math.pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = (0, _cartesian.cartesianScale)(u, (-w + t) / uu);
            (0, _cartesian.cartesianAddInPlace)(q1, A);
            return [
                q,
                (0, _cartesian.spherical)(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
        var r = smallRadius ? radius : _math.pi - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return (0, _index.default)(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -_math.pi,
        radius - _math.pi
    ]);
}
