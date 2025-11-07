"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_like_1 = tslib_1.__importDefault(require("./is-array-like"));
var indexOf = function (arr, obj) {
    if (!(0, is_array_like_1.default)(arr)) {
        return -1;
    }
    var m = Array.prototype.indexOf;
    if (m) {
        return m.call(arr, obj);
    }
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            index = i;
            break;
        }
    }
    return index;
};
exports.default = indexOf;
//# sourceMappingURL=index-of.js.map