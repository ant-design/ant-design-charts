"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */
var flattenDeep = function (arr, result) {
    if (result === void 0) { result = []; }
    if (!is_array_1.default(arr)) {
        result.push(arr);
    }
    else {
        for (var i = 0; i < arr.length; i += 1) {
            flattenDeep(arr[i], result);
        }
    }
    return result;
};
exports.default = flattenDeep;
//# sourceMappingURL=flatten-deep.js.map