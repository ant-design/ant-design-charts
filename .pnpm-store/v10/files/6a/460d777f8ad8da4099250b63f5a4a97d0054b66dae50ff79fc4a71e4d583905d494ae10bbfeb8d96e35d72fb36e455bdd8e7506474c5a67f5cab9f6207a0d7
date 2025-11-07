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
        return _default;
    },
    wiechelRaw: function() {
        return wiechelRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function wiechelRaw(lambda, phi) {
    var cosPhi = (0, _math.cos)(phi), sinPhi = (0, _math.cos)(lambda) * cosPhi, sin1_Phi = 1 - sinPhi, cosLambda = (0, _math.cos)(lambda = (0, _math.atan2)((0, _math.sin)(lambda) * cosPhi, -(0, _math.sin)(phi))), sinLambda = (0, _math.sin)(lambda);
    cosPhi = (0, _math.sqrt)(1 - sinPhi * sinPhi);
    return [
        sinLambda * cosPhi - cosLambda * sin1_Phi,
        -cosLambda * cosPhi - sinLambda * sin1_Phi
    ];
}
wiechelRaw.invert = function(x, y) {
    var w = (x * x + y * y) / -2, k = (0, _math.sqrt)(-w * (2 + w)), b = y * w + x * k, a = x * w - y * k, D = (0, _math.sqrt)(a * a + b * b);
    return [
        (0, _math.atan2)(k * b, D * (1 + w)),
        D ? -(0, _math.asin)(k * a / D) : 0
    ];
};
function _default() {
    return (0, _index.geoProjection)(wiechelRaw).rotate([
        0,
        -90,
        45
    ]).scale(124.75).clipAngle(180 - 1e-3);
}
