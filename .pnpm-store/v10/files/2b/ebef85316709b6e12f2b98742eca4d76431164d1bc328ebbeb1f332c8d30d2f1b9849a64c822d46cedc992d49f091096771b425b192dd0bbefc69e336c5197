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
    sinuMollweidePhi: function() {
        return sinuMollweidePhi;
    },
    sinuMollweideRaw: function() {
        return sinuMollweideRaw;
    },
    sinuMollweideY: function() {
        return sinuMollweideY;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _mollweide = require("./mollweide.js");
var _sinusoidal = require("./sinusoidal.js");
var sinuMollweidePhi = 0.7109889596207567;
var sinuMollweideY = 0.0528035274542;
function sinuMollweideRaw(lambda, phi) {
    return phi > -sinuMollweidePhi ? (lambda = (0, _mollweide.mollweideRaw)(lambda, phi), lambda[1] += sinuMollweideY, lambda) : (0, _sinusoidal.sinusoidalRaw)(lambda, phi);
}
sinuMollweideRaw.invert = function(x, y) {
    return y > -sinuMollweidePhi ? _mollweide.mollweideRaw.invert(x, y - sinuMollweideY) : _sinusoidal.sinusoidalRaw.invert(x, y);
};
function _default() {
    return (0, _index.geoProjection)(sinuMollweideRaw).rotate([
        -20,
        -55
    ]).scale(164.263).center([
        0,
        -5.4036
    ]);
}
