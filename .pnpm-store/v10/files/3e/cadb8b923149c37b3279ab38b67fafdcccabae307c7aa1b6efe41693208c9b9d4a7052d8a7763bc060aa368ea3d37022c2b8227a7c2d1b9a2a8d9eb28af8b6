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
var _default = function sourceRandomInt(source) {
    function randomInt(min, max) {
        if (arguments.length < 2) max = min, min = 0;
        min = Math.floor(min);
        max = Math.floor(max) - min;
        return function() {
            return Math.floor(source() * max + min);
        };
    }
    randomInt.source = sourceRandomInt;
    return randomInt;
}(_defaultSource.default);
