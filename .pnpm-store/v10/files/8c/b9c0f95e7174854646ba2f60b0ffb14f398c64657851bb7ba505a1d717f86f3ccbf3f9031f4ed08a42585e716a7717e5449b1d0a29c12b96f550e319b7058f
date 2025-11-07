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
    cool: function() {
        return cool;
    },
    default: function() {
        return _default;
    },
    warm: function() {
        return warm;
    }
});
var _index = require("../../../d3-color/src/index.js");
var _index1 = require("../../../d3-interpolate/src/index.js");
var warm = (0, _index1.interpolateCubehelixLong)((0, _index.cubehelix)(-100, 0.75, 0.35), (0, _index.cubehelix)(80, 1.50, 0.8));
var cool = (0, _index1.interpolateCubehelixLong)((0, _index.cubehelix)(260, 0.75, 0.35), (0, _index.cubehelix)(80, 1.50, 0.8));
var c = (0, _index.cubehelix)();
function _default(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    c.h = 360 * t - 100;
    c.s = 1.5 - 1.5 * ts;
    c.l = 0.8 - 0.9 * ts;
    return c + "";
}
