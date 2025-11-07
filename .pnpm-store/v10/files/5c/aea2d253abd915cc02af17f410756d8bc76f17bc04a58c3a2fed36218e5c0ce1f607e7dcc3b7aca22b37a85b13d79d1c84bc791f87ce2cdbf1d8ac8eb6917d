"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _defaultSource = /*#__PURE__*/ _interop_require_default(require("./defaultSource.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomPareto(source) {
    function randomPareto(alpha) {
        if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
        alpha = 1 / -alpha;
        return function() {
            return Math.pow(1 - source(), alpha);
        };
    }
    randomPareto.source = sourceRandomPareto;
    return randomPareto;
}(_defaultSource.default);
