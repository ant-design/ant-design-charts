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
var _default = function sourceRandomLogistic(source) {
    function randomLogistic(a, b) {
        a = a == null ? 0 : +a;
        b = b == null ? 1 : +b;
        return function() {
            var u = source();
            return a + b * Math.log(u / (1 - u));
        };
    }
    randomLogistic.source = sourceRandomLogistic;
    return randomLogistic;
}(_defaultSource.default);
