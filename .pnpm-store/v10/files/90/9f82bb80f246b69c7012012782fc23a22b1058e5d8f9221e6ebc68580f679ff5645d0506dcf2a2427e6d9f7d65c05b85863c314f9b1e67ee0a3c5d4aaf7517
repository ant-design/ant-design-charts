"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = size;
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
var is_array_like_1 = tslib_1.__importDefault(require("./is-array-like"));
function size(o) {
    if ((0, is_nil_1.default)(o)) {
        return 0;
    }
    if ((0, is_array_like_1.default)(o)) {
        return o.length;
    }
    return Object.keys(o).length;
}
//# sourceMappingURL=size.js.map