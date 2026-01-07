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
var _normal = /*#__PURE__*/ _interop_require_default(require("./normal.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomGamma(source) {
    var randomNormal = _normal.default.source(source)();
    function randomGamma(k, theta) {
        if ((k = +k) < 0) throw new RangeError("invalid k");
        // degenerate distribution if k === 0
        if (k === 0) return function() {
            return 0;
        };
        theta = theta == null ? 1 : +theta;
        // exponential distribution if k === 1
        if (k === 1) return function() {
            return -Math.log1p(-source()) * theta;
        };
        var d = (k < 1 ? k + 1 : k) - 1 / 3, c = 1 / (3 * Math.sqrt(d)), multiplier = k < 1 ? function() {
            return Math.pow(source(), 1 / k);
        } : function() {
            return 1;
        };
        return function() {
            do {
                do {
                    var x = randomNormal(), v = 1 + c * x;
                }while (v <= 0);
                v *= v * v;
                var u = 1 - source();
            }while (u >= 1 - 0.0331 * x * x * x * x && Math.log(u) >= 0.5 * x * x + d * (1 - v + Math.log(v)));
            return d * v * multiplier() * theta;
        };
    }
    randomGamma.source = sourceRandomGamma;
    return randomGamma;
}(_defaultSource.default);
