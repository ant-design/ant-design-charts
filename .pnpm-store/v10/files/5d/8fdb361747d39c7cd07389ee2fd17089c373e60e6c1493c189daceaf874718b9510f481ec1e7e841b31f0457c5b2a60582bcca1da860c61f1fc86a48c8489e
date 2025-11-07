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
var _default = function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
        if ((n = +n) <= 0) return function() {
            return 0;
        };
        return function() {
            for(var sum = 0, i = n; i > 1; --i)sum += source();
            return sum + i * source();
        };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
}(_defaultSource.default);
