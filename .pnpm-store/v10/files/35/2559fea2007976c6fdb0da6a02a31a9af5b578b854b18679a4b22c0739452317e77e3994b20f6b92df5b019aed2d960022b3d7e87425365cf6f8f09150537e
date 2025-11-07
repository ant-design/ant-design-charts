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
var _irwinHall = /*#__PURE__*/ _interop_require_default(require("./irwinHall.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function sourceRandomBates(source) {
    var I = _irwinHall.default.source(source);
    function randomBates(n) {
        // use limiting distribution at n === 0
        if ((n = +n) === 0) return source;
        var randomIrwinHall = I(n);
        return function() {
            return randomIrwinHall() / n;
        };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
}(_defaultSource.default);
