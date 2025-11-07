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
    craigRaw: function() {
        return craigRaw;
    },
    default: function() {
        return _default;
    }
});
var _math = require("./math.js");
var _parallel1 = /*#__PURE__*/ _interop_require_default(require("./parallel1.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function craigRaw(phi0) {
    var tanPhi0 = (0, _math.tan)(phi0);
    function forward(lambda, phi) {
        return [
            lambda,
            (lambda ? lambda / (0, _math.sin)(lambda) : 1) * ((0, _math.sin)(phi) * (0, _math.cos)(lambda) - tanPhi0 * (0, _math.cos)(phi))
        ];
    }
    forward.invert = tanPhi0 ? function(x, y) {
        if (x) y *= (0, _math.sin)(x) / x;
        var cosLambda = (0, _math.cos)(x);
        return [
            x,
            2 * (0, _math.atan2)((0, _math.sqrt)(cosLambda * cosLambda + tanPhi0 * tanPhi0 - y * y) - cosLambda, tanPhi0 - y)
        ];
    } : function(x, y) {
        return [
            x,
            (0, _math.asin)(x ? y * (0, _math.tan)(x) / x : y)
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(craigRaw).scale(249.828).clipAngle(90);
}
