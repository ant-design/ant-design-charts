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
var _default = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
        var x, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function() {
            var y;
            // If available, use the second previously-generated uniform random.
            if (x != null) y = x, x = null;
            else do {
                x = source() * 2 - 1;
                y = source() * 2 - 1;
                r = x * x + y * y;
            }while (!r || r > 1);
            return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
        };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
}(_defaultSource.default);
