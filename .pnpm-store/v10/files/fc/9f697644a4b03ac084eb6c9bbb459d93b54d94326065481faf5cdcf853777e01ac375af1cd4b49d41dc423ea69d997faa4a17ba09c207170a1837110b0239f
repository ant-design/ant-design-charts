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
var _binomial = /*#__PURE__*/ _interop_require_default(require("./binomial.js"));
var _gamma = /*#__PURE__*/ _interop_require_default(require("./gamma.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomPoisson(source) {
    var G = _gamma.default.source(source), B = _binomial.default.source(source);
    function randomPoisson(lambda) {
        return function() {
            var acc = 0, l = lambda;
            while(l > 16){
                var n = Math.floor(0.875 * l), t = G(n)();
                if (t > l) return acc + B(n - 1, l / t)();
                acc += n;
                l -= t;
            }
            for(var s = -Math.log1p(-source()), k = 0; s <= l; ++k)s -= Math.log1p(-source());
            return acc + k;
        };
    }
    randomPoisson.source = sourceRandomPoisson;
    return randomPoisson;
}(_defaultSource.default);
