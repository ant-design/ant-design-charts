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
    conicEqualAreaRaw: function() {
        return conicEqualAreaRaw;
    },
    default: function() {
        return _default;
    }
});
var _math = require("../math.js");
var _conic = require("./conic.js");
var _cylindricalEqualArea = require("./cylindricalEqualArea.js");
function conicEqualAreaRaw(y0, y1) {
    var sy0 = (0, _math.sin)(y0), n = (sy0 + (0, _math.sin)(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if ((0, _math.abs)(n) < _math.epsilon) return (0, _cylindricalEqualArea.cylindricalEqualAreaRaw)(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = (0, _math.sqrt)(c) / n;
    function project(x, y) {
        var r = (0, _math.sqrt)(c - 2 * n * (0, _math.sin)(y)) / n;
        return [
            r * (0, _math.sin)(x *= n),
            r0 - r * (0, _math.cos)(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = (0, _math.atan2)(x, (0, _math.abs)(r0y)) * (0, _math.sign)(r0y);
        if (r0y * n < 0) l -= _math.pi * (0, _math.sign)(x) * (0, _math.sign)(r0y);
        return [
            l / n,
            (0, _math.asin)((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}
function _default() {
    return (0, _conic.conicProjection)(conicEqualAreaRaw).scale(155.424).center([
        0,
        33.6442
    ]);
}
