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
    homolosineRaw: function() {
        return homolosineRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _mollweide = require("./mollweide.js");
var _sinusoidal = require("./sinusoidal.js");
var _sinuMollweide = require("./sinuMollweide.js");
function homolosineRaw(lambda, phi) {
    return (0, _math.abs)(phi) > _sinuMollweide.sinuMollweidePhi ? (lambda = (0, _mollweide.mollweideRaw)(lambda, phi), lambda[1] -= phi > 0 ? _sinuMollweide.sinuMollweideY : -_sinuMollweide.sinuMollweideY, lambda) : (0, _sinusoidal.sinusoidalRaw)(lambda, phi);
}
homolosineRaw.invert = function(x, y) {
    return (0, _math.abs)(y) > _sinuMollweide.sinuMollweidePhi ? _mollweide.mollweideRaw.invert(x, y + (y > 0 ? _sinuMollweide.sinuMollweideY : -_sinuMollweide.sinuMollweideY)) : _sinusoidal.sinusoidalRaw.invert(x, y);
};
function _default() {
    return (0, _index.geoProjection)(homolosineRaw).scale(152.63);
}
