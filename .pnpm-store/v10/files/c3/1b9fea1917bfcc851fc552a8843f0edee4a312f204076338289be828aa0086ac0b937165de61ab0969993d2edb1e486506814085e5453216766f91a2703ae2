"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_like_1 = tslib_1.__importDefault(require("./is-array-like"));
var pull_at_1 = tslib_1.__importDefault(require("./pull-at"));
var remove = function (arr, predicate) {
    /**
     * const arr = [1, 2, 3, 4]
     * const evens = remove(arr, n => n % 2 == 0)
     * console.log(arr) // => [1, 3]
     * console.log(evens) // => [2, 4]
     */
    var result = [];
    if (!(0, is_array_like_1.default)(arr)) {
        return result;
    }
    var i = -1;
    var indexes = [];
    var length = arr.length;
    while (++i < length) {
        var value = arr[i];
        if (predicate(value, i, arr)) {
            result.push(value);
            indexes.push(i);
        }
    }
    (0, pull_at_1.default)(arr, indexes);
    return result;
};
exports.default = remove;
//# sourceMappingURL=remove.js.map