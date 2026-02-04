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
    cylindricalEqualAreaRaw: function() {
        return cylindricalEqualAreaRaw;
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
function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = (0, _math.cos)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (0, _math.sin)(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, _math.asin)(y * cosPhi0)
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(cylindricalEqualAreaRaw).parallel(38.58) // acos(sqrt(width / height / pi)) * radians
    .scale(195.044); // width / (sqrt(width / height / pi) * 2 * pi)
}
