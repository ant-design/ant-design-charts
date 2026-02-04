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
var _gamma = /*#__PURE__*/ _interop_require_default(require("./gamma.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomBeta(source) {
    var G = _gamma.default.source(source);
    function randomBeta(alpha, beta) {
        var X = G(alpha), Y = G(beta);
        return function() {
            var x = X();
            return x === 0 ? 0 : x / (x + Y());
        };
    }
    randomBeta.source = sourceRandomBeta;
    return randomBeta;
}(_defaultSource.default);
