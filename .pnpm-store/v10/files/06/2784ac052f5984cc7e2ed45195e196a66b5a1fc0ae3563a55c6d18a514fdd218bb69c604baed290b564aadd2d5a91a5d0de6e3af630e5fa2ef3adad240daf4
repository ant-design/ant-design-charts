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
    loximuthalRaw: function() {
        return loximuthalRaw;
    }
});
var _parallel1 = /*#__PURE__*/ _interop_require_default(require("./parallel1.js"));
var _math = require("./math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function loximuthalRaw(phi0) {
    var cosPhi0 = (0, _math.cos)(phi0), tanPhi0 = (0, _math.tan)(_math.quarterPi + phi0 / 2);
    function forward(lambda, phi) {
        var y = phi - phi0, x = (0, _math.abs)(y) < _math.epsilon ? lambda * cosPhi0 : (0, _math.abs)(x = _math.quarterPi + phi / 2) < _math.epsilon || (0, _math.abs)((0, _math.abs)(x) - _math.halfPi) < _math.epsilon ? 0 : lambda * y / (0, _math.log)((0, _math.tan)(x) / tanPhi0);
        return [
            x,
            y
        ];
    }
    forward.invert = function(x, y) {
        var lambda, phi = y + phi0;
        return [
            (0, _math.abs)(y) < _math.epsilon ? x / cosPhi0 : (0, _math.abs)(lambda = _math.quarterPi + phi / 2) < _math.epsilon || (0, _math.abs)((0, _math.abs)(lambda) - _math.halfPi) < _math.epsilon ? 0 : x * (0, _math.log)((0, _math.tan)(lambda) / tanPhi0) / y,
            phi
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(loximuthalRaw).parallel(40).scale(158.837);
}
