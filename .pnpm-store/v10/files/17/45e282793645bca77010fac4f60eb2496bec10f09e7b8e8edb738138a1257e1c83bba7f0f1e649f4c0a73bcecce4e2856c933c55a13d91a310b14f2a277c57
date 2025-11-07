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
    bertin1953Raw: function() {
        return bertin1953Raw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _hammer = require("./hammer.js");
var _math = require("./math.js");
var _newton = require("./newton.js");
function bertin1953Raw() {
    var hammer = (0, _hammer.hammerRaw)(1.68, 2), fu = 1.4, k = 12;
    function forward(lambda, phi) {
        if (lambda + phi < -fu) {
            var u = (lambda - phi + 1.6) * (lambda + phi + fu) / 8;
            lambda += u;
            phi -= 0.8 * u * (0, _math.sin)(phi + _math.pi / 2);
        }
        var r = hammer(lambda, phi);
        var d = (1 - (0, _math.cos)(lambda * phi)) / k;
        if (r[1] < 0) {
            r[0] *= 1 + d;
        }
        if (r[1] > 0) {
            r[1] *= 1 + d / 1.5 * r[0] * r[0];
        }
        return r;
    }
    forward.invert = (0, _newton.solve2d)(forward);
    return forward;
}
function _default() {
    // this projection should not be rotated
    return (0, _index.geoProjection)(bertin1953Raw()).rotate([
        -16.5,
        -42
    ]).scale(176.57).center([
        7.93,
        0.09
    ]);
}
