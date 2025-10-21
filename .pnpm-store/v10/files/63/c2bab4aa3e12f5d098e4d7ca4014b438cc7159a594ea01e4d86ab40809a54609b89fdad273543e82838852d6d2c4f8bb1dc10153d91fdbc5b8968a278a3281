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
var _default = function sourceRandomGeometric(source) {
    function randomGeometric(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        if (p === 0) return function() {
            return Infinity;
        };
        if (p === 1) return function() {
            return 1;
        };
        p = Math.log1p(-p);
        return function() {
            return 1 + Math.floor(Math.log1p(-source()) / p);
        };
    }
    randomGeometric.source = sourceRandomGeometric;
    return randomGeometric;
}(_defaultSource.default);
