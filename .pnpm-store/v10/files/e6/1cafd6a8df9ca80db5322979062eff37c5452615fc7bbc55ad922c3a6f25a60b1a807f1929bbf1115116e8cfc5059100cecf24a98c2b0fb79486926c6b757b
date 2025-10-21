"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = require("./is-function");
var is_equal_1 = require("./is-equal");
/**
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);  // => true
 */
exports.default = (function (value, other, fn) {
    if (!is_function_1.default(fn)) {
        return is_equal_1.default(value, other);
    }
    return !!fn(value, other);
});
//# sourceMappingURL=is-equal-with.js.map