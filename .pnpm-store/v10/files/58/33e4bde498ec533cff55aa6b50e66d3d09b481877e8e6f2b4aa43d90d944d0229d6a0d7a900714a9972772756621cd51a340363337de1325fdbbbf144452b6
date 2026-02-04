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
var _default = function sourceRandomLogNormal(source) {
    var N = _normal.default.source(source);
    function randomLogNormal() {
        var randomNormal = N.apply(this, arguments);
        return function() {
            return Math.exp(randomNormal());
        };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
}(_defaultSource.default);
