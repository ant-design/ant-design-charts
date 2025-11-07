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
    conicEquidistantRaw: function() {
        return conicEquidistantRaw;
    },
    default: function() {
        return _default;
    }
});
var _math = require("../math.js");
var _conic = require("./conic.js");
var _equirectangular = require("./equirectangular.js");
function conicEquidistantRaw(y0, y1) {
    var cy0 = (0, _math.cos)(y0), n = y0 === y1 ? (0, _math.sin)(y0) : (cy0 - (0, _math.cos)(y1)) / (y1 - y0), g = cy0 / n + y0;
    if ((0, _math.abs)(n) < _math.epsilon) return _equirectangular.equirectangularRaw;
    function project(x, y) {
        var gy = g - y, nx = n * x;
        return [
            gy * (0, _math.sin)(nx),
            g - gy * (0, _math.cos)(nx)
        ];
    }
    project.invert = function(x, y) {
        var gy = g - y, l = (0, _math.atan2)(x, (0, _math.abs)(gy)) * (0, _math.sign)(gy);
        if (gy * n < 0) l -= _math.pi * (0, _math.sign)(x) * (0, _math.sign)(gy);
        return [
            l / n,
            g - (0, _math.sign)(n) * (0, _math.sqrt)(x * x + gy * gy)
        ];
    };
    return project;
}
function _default() {
    return (0, _conic.conicProjection)(conicEquidistantRaw).scale(131.154).center([
        0,
        13.9389
    ]);
}
