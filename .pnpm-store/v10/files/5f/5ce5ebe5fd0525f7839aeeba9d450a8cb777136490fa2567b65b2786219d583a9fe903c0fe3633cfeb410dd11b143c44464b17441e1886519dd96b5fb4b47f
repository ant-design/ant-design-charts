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
var _default = function sourceRandomExponential(source) {
    function randomExponential(lambda) {
        return function() {
            return -Math.log1p(-source()) / lambda;
        };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
}(_defaultSource.default);
