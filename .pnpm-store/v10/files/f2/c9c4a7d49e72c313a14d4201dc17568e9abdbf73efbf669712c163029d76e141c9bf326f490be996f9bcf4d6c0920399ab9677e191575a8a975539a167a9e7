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
var _default = function sourceRandomBernoulli(source) {
    function randomBernoulli(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        return function() {
            return Math.floor(source() + p);
        };
    }
    randomBernoulli.source = sourceRandomBernoulli;
    return randomBernoulli;
}(_defaultSource.default);
