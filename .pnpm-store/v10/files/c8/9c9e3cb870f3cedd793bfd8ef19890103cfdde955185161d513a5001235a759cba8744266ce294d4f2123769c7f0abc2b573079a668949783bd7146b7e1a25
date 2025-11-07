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
var lengthSum, lambda0, sinPhi0, cosPhi0;
var lengthStream = {
    sphere: _noop.default,
    point: _noop.default,
    lineStart: lengthLineStart,
    lineEnd: _noop.default,
    polygonStart: _noop.default,
    polygonEnd: _noop.default
};
function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = _noop.default;
}
function lengthPointFirst(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    lambda0 = lambda, sinPhi0 = (0, _math.sin)(phi), cosPhi0 = (0, _math.cos)(phi);
    lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
    lambda *= _math.radians, phi *= _math.radians;
    var sinPhi = (0, _math.sin)(phi), cosPhi = (0, _math.cos)(phi), delta = (0, _math.abs)(lambda - lambda0), cosDelta = (0, _math.cos)(delta), sinDelta = (0, _math.sin)(delta), x = cosPhi * sinDelta, y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta, z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add((0, _math.atan2)((0, _math.sqrt)(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
function _default(object) {
    lengthSum = new _index.Adder();
    (0, _stream.default)(object, lengthStream);
    return +lengthSum;
}
