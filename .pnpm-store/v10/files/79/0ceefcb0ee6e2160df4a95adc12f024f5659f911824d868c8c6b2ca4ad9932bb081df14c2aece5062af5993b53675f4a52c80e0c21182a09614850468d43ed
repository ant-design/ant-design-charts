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
var _math = require("./math.js");
var _noop = /*#__PURE__*/ _interop_require_default(require("./noop.js"));
var _stream = /*#__PURE__*/ _interop_require_default(require("./stream.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00, phi00, x0, y0, z0; // previous point
var centroidStream = {
    sphere: _noop.default,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function polygonStart() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function polygonEnd() {
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
    }
};
// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    var cosPhi = (0, _math.cos)(phi);
    centroidPointCartesian(cosPhi * (0, _math.cos)(lambda), cosPhi * (0, _math.sin)(lambda), (0, _math.sin)(phi));
}
function centroidPointCartesian(x, y, z) {
    ++W0;
    X0 += (x - X0) / W0;
    Y0 += (y - Y0) / W0;
    Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    var cosPhi = (0, _math.cos)(phi);
    x0 = cosPhi * (0, _math.cos)(lambda);
    y0 = cosPhi * (0, _math.sin)(lambda);
    z0 = (0, _math.sin)(phi);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    var cosPhi = (0, _math.cos)(phi), x = cosPhi * (0, _math.cos)(lambda), y = cosPhi * (0, _math.sin)(lambda), z = (0, _math.sin)(phi), w = (0, _math.atan2)((0, _math.sqrt)((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
    centroidStream.point = centroidPoint;
}
// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
    centroidRingPoint(lambda00, phi00);
    centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi) {
    lambda00 = lambda, phi00 = phi;
    lambda *= _math.radians, phi *= _math.radians;
    centroidStream.point = centroidRingPoint;
    var cosPhi = (0, _math.cos)(phi);
    x0 = cosPhi * (0, _math.cos)(lambda);
    y0 = cosPhi * (0, _math.sin)(lambda);
    z0 = (0, _math.sin)(phi);
    centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    var cosPhi = (0, _math.cos)(phi), x = cosPhi * (0, _math.cos)(lambda), y = cosPhi * (0, _math.sin)(lambda), z = (0, _math.sin)(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = (0, _math.hypot)(cx, cy, cz), w = (0, _math.asin)(m), v = m && -w / m; // area weight multiplier
    X2.add(v * cx);
    Y2.add(v * cy);
    Z2.add(v * cz);
    W1 += w;
    X1 += w * (x0 + (x0 = x));
    Y1 += w * (y0 + (y0 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
}
function _default(object) {
    W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
    X2 = new _index.Adder();
    Y2 = new _index.Adder();
    Z2 = new _index.Adder();
    (0, _stream.default)(object, centroidStream);
    var x = +X2, y = +Y2, z = +Z2, m = (0, _math.hypot)(x, y, z);
    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < _math.epsilon2) {
        x = X1, y = Y1, z = Z1;
        // If the feature has zero length, fall back to arithmetic mean of point vectors.
        if (W1 < _math.epsilon) x = X0, y = Y0, z = Z0;
        m = (0, _math.hypot)(x, y, z);
        // If the feature still has an undefined ccentroid, then return.
        if (m < _math.epsilon2) return [
            NaN,
            NaN
        ];
    }
    return [
        (0, _math.atan2)(y, x) * _math.degrees,
        (0, _math.asin)(z / m) * _math.degrees
    ];
}
