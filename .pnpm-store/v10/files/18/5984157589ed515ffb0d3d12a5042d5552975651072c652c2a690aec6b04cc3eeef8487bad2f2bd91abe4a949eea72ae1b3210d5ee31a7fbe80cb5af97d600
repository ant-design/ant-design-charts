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
    default: function() {
        return twoPointEquidistant;
    },
    twoPointEquidistantRaw: function() {
        return twoPointEquidistantRaw;
    },
    twoPointEquidistantUsa: function() {
        return twoPointEquidistantUsa;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _twoPoint = /*#__PURE__*/ _interop_require_default(require("./twoPoint.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function twoPointEquidistantRaw(z0) {
    if (!(z0 *= 2)) return _index.geoAzimuthalEquidistantRaw;
    var lambdaa = -z0 / 2, lambdab = -lambdaa, z02 = z0 * z0, tanLambda0 = (0, _math.tan)(lambdab), S = 0.5 / (0, _math.sin)(lambdab);
    function forward(lambda, phi) {
        var za = (0, _math.acos)((0, _math.cos)(phi) * (0, _math.cos)(lambda - lambdaa)), zb = (0, _math.acos)((0, _math.cos)(phi) * (0, _math.cos)(lambda - lambdab)), ys = phi < 0 ? -1 : 1;
        za *= za, zb *= zb;
        return [
            (za - zb) / (2 * z0),
            ys * (0, _math.sqrt)(4 * z02 * zb - (z02 - za + zb) * (z02 - za + zb)) / (2 * z0)
        ];
    }
    forward.invert = function(x, y) {
        var y2 = y * y, cosza = (0, _math.cos)((0, _math.sqrt)(y2 + (t = x + lambdaa) * t)), coszb = (0, _math.cos)((0, _math.sqrt)(y2 + (t = x + lambdab) * t)), t, d;
        return [
            (0, _math.atan2)(d = cosza - coszb, t = (cosza + coszb) * tanLambda0),
            (y < 0 ? -1 : 1) * (0, _math.acos)((0, _math.sqrt)(t * t + d * d) * S)
        ];
    };
    return forward;
}
function twoPointEquidistantUsa() {
    return twoPointEquidistant([
        -158,
        21.5
    ], [
        -77,
        39
    ]).clipAngle(130).scale(122.571);
}
function twoPointEquidistant(p0, p1) {
    return (0, _twoPoint.default)(twoPointEquidistantRaw, p0, p1);
}
