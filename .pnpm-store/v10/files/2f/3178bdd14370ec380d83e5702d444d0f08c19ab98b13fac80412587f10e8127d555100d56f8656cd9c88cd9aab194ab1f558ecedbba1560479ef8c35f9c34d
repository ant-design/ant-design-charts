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
var _default = function sourceRandomWeibull(source) {
    function randomWeibull(k, a, b) {
        var outerFunc;
        if ((k = +k) === 0) {
            outerFunc = function(x) {
                return -Math.log(x);
            };
        } else {
            k = 1 / k;
            outerFunc = function(x) {
                return Math.pow(x, k);
            };
        }
        a = a == null ? 0 : +a;
        b = b == null ? 1 : +b;
        return function() {
            return a + b * outerFunc(-Math.log1p(-source()));
        };
    }
    randomWeibull.source = sourceRandomWeibull;
    return randomWeibull;
}(_defaultSource.default);
