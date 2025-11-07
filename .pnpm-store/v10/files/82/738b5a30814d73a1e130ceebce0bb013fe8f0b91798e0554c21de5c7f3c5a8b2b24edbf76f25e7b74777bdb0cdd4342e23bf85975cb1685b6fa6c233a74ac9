"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
exports.default = (function (arr, fn) {
    if (!(0, is_array_1.default)(arr)) {
        return undefined;
    }
    var maxItem;
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var v = (0, is_function_1.default)(fn) ? fn(item) : item[fn];
        if (v > max) {
            maxItem = item;
            max = v;
        }
    }
    return maxItem;
});
//# sourceMappingURL=max-by.js.map