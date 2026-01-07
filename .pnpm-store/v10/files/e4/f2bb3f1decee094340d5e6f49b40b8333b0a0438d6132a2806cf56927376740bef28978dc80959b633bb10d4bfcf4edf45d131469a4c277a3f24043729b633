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
    bonneRaw: function() {
        return bonneRaw;
    },
    default: function() {
        return _default;
    }
});
var _parallel1 = /*#__PURE__*/ _interop_require_default(require("./parallel1.js"));
var _math = require("./math.js");
var _sinusoidal = require("./sinusoidal.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function bonneRaw(phi0) {
    if (!phi0) return _sinusoidal.sinusoidalRaw;
    var cotPhi0 = 1 / (0, _math.tan)(phi0);
    function forward(lambda, phi) {
        var rho = cotPhi0 + phi0 - phi, e = rho ? lambda * (0, _math.cos)(phi) / rho : rho;
        return [
            rho * (0, _math.sin)(e),
            cotPhi0 - rho * (0, _math.cos)(e)
        ];
    }
    forward.invert = function(x, y) {
        var rho = (0, _math.sqrt)(x * x + (y = cotPhi0 - y) * y), phi = cotPhi0 + phi0 - rho;
        return [
            rho / (0, _math.cos)(phi) * (0, _math.atan2)(x, y),
            phi
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(bonneRaw).scale(123.082).center([
        0,
        26.1441
    ]).parallel(45);
}
