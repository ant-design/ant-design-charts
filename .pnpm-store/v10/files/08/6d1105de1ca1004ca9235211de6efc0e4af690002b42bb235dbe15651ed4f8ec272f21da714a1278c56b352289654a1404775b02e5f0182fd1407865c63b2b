"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
var util_1 = require("@antv/util");
function compose(fn) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return fn ? rest.reduce(function (total, current) { return function (x) { return current(total(x)); }; }, fn) : util_1.identity;
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map