"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
var is_array_like_1 = tslib_1.__importDefault(require("./is-array-like"));
var get_type_1 = tslib_1.__importDefault(require("./get-type"));
var is_prototype_1 = tslib_1.__importDefault(require("./is-prototype"));
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(value) {
    /**
     * isEmpty(null) => true
     * isEmpty() => true
     * isEmpty(true) => true
     * isEmpty(1) => true
     * isEmpty([1, 2, 3]) => false
     * isEmpty('abc') => false
     * isEmpty({ a: 1 }) => false
     */
    if ((0, is_nil_1.default)(value)) {
        return true;
    }
    if ((0, is_array_like_1.default)(value)) {
        return !value.length;
    }
    var type = (0, get_type_1.default)(value);
    if (type === 'Map' || type === 'Set') {
        return !value.size;
    }
    if ((0, is_prototype_1.default)(value)) {
        return !Object.keys(value).length;
    }
    for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
exports.default = isEmpty;
//# sourceMappingURL=is-empty.js.map