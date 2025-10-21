"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reduce_1 = tslib_1.__importDefault(require("./reduce"));
exports.default = (function (obj, keys) {
    return (0, reduce_1.default)(obj, function (r, curr, key) {
        if (!keys.includes(key)) {
            r[key] = curr;
        }
        return r;
    }, {});
});
//# sourceMappingURL=omit.js.map