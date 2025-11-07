"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_object_like_1 = tslib_1.__importDefault(require("./is-object-like"));
var is_array_like_1 = tslib_1.__importDefault(require("./is-array-like"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
var isEqual = function (value, other) {
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    if ((0, is_string_1.default)(value) || (0, is_string_1.default)(other)) {
        return false;
    }
    if ((0, is_array_like_1.default)(value) || (0, is_array_like_1.default)(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if ((0, is_object_like_1.default)(value) || (0, is_object_like_1.default)(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    return false;
};
exports.default = isEqual;
//# sourceMappingURL=is-equal.js.map