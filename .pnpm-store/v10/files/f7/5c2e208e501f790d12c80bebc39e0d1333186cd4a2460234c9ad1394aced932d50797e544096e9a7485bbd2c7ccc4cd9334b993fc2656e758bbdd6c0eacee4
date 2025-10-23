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
var _beta = /*#__PURE__*/ _interop_require_default(require("./beta.js"));
var _geometric = /*#__PURE__*/ _interop_require_default(require("./geometric.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomBinomial(source) {
    var G = _geometric.default.source(source), B = _beta.default.source(source);
    function randomBinomial(n, p) {
        n = +n;
        if ((p = +p) >= 1) return function() {
            return n;
        };
        if (p <= 0) return function() {
            return 0;
        };
        return function() {
            var acc = 0, nn = n, pp = p;
            while(nn * pp > 16 && nn * (1 - pp) > 16){
                var i = Math.floor((nn + 1) * pp), y = B(i, nn - i + 1)();
                if (y <= pp) {
                    acc += i;
                    nn -= i;
                    pp = (pp - y) / (1 - y);
                } else {
                    nn = i - 1;
                    pp /= y;
                }
            }
            var sign = pp < 0.5, pFinal = sign ? pp : 1 - pp, g = G(pFinal);
            for(var s = g(), k = 0; s <= nn; ++k)s += g();
            return acc + (sign ? k : nn - k);
        };
    }
    randomBinomial.source = sourceRandomBinomial;
    return randomBinomial;
}(_defaultSource.default);
