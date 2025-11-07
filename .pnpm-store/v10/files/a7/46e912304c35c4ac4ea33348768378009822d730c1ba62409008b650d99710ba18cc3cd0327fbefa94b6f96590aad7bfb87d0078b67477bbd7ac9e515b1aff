"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areaRingSum: function() {
        return areaRingSum;
    },
    areaStream: function() {
        return areaStream;
    },
    default: function() {
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
var areaRingSum = new _index.Adder();
// hello?
var areaSum = new _index.Adder(), lambda00, phi00, lambda0, cosPhi0, sinPhi0;
var areaStream = {
    point: _noop.default,
    lineStart: _noop.default,
    lineEnd: _noop.default,
    polygonStart: function polygonStart() {
        areaRingSum = new _index.Adder();
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function polygonEnd() {
        var areaRing = +areaRingSum;
        areaSum.add(areaRing < 0 ? _math.tau + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = _noop.default;
    },
    sphere: function sphere() {
        areaSum.add(_math.tau);
    }
};
function areaRingStart() {
    areaStream.point = areaPointFirst;
}
function areaRingEnd() {
    areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi) {
    areaStream.point = areaPoint;
    lambda00 = lambda, phi00 = phi;
    lambda *= _math.radians, phi *= _math.radians;
    lambda0 = lambda, cosPhi0 = (0, _math.cos)(phi = phi / 2 + _math.quarterPi), sinPhi0 = (0, _math.sin)(phi);
}
function areaPoint(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    phi = phi / 2 + _math.quarterPi; // half the angular distance from south pole
    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = (0, _math.cos)(phi), sinPhi = (0, _math.sin)(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * (0, _math.cos)(adLambda), v = k * sdLambda * (0, _math.sin)(adLambda);
    areaRingSum.add((0, _math.atan2)(v, u));
    // Advance the previous points.
    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function _default(object) {
    areaSum = new _index.Adder();
    (0, _stream.default)(object, areaStream);
    return areaSum * 2;
}
