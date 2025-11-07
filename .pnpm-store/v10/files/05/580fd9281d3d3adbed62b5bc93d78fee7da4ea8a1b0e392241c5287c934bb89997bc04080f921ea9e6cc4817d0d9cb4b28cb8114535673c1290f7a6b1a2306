"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return piecewise;
    }
});
var _value = /*#__PURE__*/ _interop_require_default(require("./value.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function piecewise(interpolate, values) {
    if (values === undefined) values = interpolate, interpolate = _value.default;
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while(i < n)I[i] = interpolate(v, v = values[++i]);
    return function(t) {
        var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
        return I[i](t - i);
    };
}
