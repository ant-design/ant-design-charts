"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Compute the origin as the midpoint of the two reference points.
// Rotate one of the reference points by the origin.
// Apply the spherical law of sines to compute gamma rotation.
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function _default(raw, p0, p1) {
    var i = (0, _index.geoInterpolate)(p0, p1), o = i(0.5), a = (0, _index.geoRotation)([
        -o[0],
        -o[1]
    ])(p0), b = i.distance / 2, y = -(0, _math.asin)((0, _math.sin)(a[1] * _math.radians) / (0, _math.sin)(b)), R = [
        -o[0],
        -o[1],
        -(a[0] > 0 ? _math.pi - y : y) * _math.degrees
    ], p = (0, _index.geoProjection)(raw(b)).rotate(R), r = (0, _index.geoRotation)(R), center = p.center;
    delete p.rotate;
    p.center = function(_) {
        return arguments.length ? center(r(_)) : r.invert(center());
    };
    return p.clipAngle(90);
}
