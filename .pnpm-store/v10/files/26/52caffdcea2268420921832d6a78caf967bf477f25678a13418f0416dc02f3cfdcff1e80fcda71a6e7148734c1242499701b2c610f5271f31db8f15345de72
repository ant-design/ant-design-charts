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
    conicConformalRaw: function() {
        return conicConformalRaw;
    },
    default: function() {
        return _default;
    }
});
var _math = require("../math.js");
var _conic = require("./conic.js");
var _mercator = require("./mercator.js");
function tany(y) {
    return (0, _math.tan)((_math.halfPi + y) / 2);
}
function conicConformalRaw(y0, y1) {
    var cy0 = (0, _math.cos)(y0), n = y0 === y1 ? (0, _math.sin)(y0) : (0, _math.log)(cy0 / (0, _math.cos)(y1)) / (0, _math.log)(tany(y1) / tany(y0)), f = cy0 * (0, _math.pow)(tany(y0), n) / n;
    if (!n) return _mercator.mercatorRaw;
    function project(x, y) {
        if (f > 0) {
            if (y < -_math.halfPi + _math.epsilon) y = -_math.halfPi + _math.epsilon;
        } else {
            if (y > _math.halfPi - _math.epsilon) y = _math.halfPi - _math.epsilon;
        }
        var r = f / (0, _math.pow)(tany(y), n);
        return [
            r * (0, _math.sin)(n * x),
            f - r * (0, _math.cos)(n * x)
        ];
    }
    project.invert = function(x, y) {
        var fy = f - y, r = (0, _math.sign)(n) * (0, _math.sqrt)(x * x + fy * fy), l = (0, _math.atan2)(x, (0, _math.abs)(fy)) * (0, _math.sign)(fy);
        if (fy * n < 0) l -= _math.pi * (0, _math.sign)(x) * (0, _math.sign)(fy);
        return [
            l / n,
            2 * (0, _math.atan)((0, _math.pow)(f / r, 1 / n)) - _math.halfPi
        ];
    };
    return project;
}
function _default() {
    return (0, _conic.conicProjection)(conicConformalRaw).scale(109.5).parallels([
        30,
        30
    ]);
}
