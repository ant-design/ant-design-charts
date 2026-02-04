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
    airyRaw: function() {
        return airyRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function airyRaw(beta) {
    var tanBeta_2 = (0, _math.tan)(beta / 2), b = 2 * (0, _math.log)((0, _math.cos)(beta / 2)) / (tanBeta_2 * tanBeta_2);
    function forward(x, y) {
        var cosx = (0, _math.cos)(x), cosy = (0, _math.cos)(y), siny = (0, _math.sin)(y), cosz = cosy * cosx, k = -((1 - cosz ? (0, _math.log)((1 + cosz) / 2) / (1 - cosz) : -0.5) + b / (1 + cosz));
        return [
            k * cosy * (0, _math.sin)(x),
            k * siny
        ];
    }
    forward.invert = function(x, y) {
        var r = (0, _math.sqrt)(x * x + y * y), z = -beta / 2, i = 50, delta;
        if (!r) return [
            0,
            0
        ];
        do {
            var z_2 = z / 2, cosz_2 = (0, _math.cos)(z_2), sinz_2 = (0, _math.sin)(z_2), tanz_2 = sinz_2 / cosz_2, lnsecz_2 = -(0, _math.log)((0, _math.abs)(cosz_2));
            z -= delta = (2 / tanz_2 * lnsecz_2 - b * tanz_2 - r) / (-lnsecz_2 / (sinz_2 * sinz_2) + 1 - b / (2 * cosz_2 * cosz_2)) * (cosz_2 < 0 ? 0.7 : 1);
        }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
        var sinz = (0, _math.sin)(z);
        return [
            (0, _math.atan2)(x * sinz, r * (0, _math.cos)(z)),
            (0, _math.asin)(y * sinz / r)
        ];
    };
    return forward;
}
function _default() {
    var beta = _math.halfPi, m = (0, _index.geoProjectionMutator)(airyRaw), p = m(beta);
    p.radius = function(_) {
        return arguments.length ? m(beta = _ * _math.radians) : beta * _math.degrees;
    };
    return p.scale(179.976).clipAngle(147);
}
