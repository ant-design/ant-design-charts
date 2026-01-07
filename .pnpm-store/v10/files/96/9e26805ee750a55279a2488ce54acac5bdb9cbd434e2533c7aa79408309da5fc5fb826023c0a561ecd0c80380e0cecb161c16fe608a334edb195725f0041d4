"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var filter_1 = tslib_1.__importDefault(require("./filter"));
var contains_1 = tslib_1.__importDefault(require("./contains"));
/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
var difference = function (arr, values) {
    if (values === void 0) { values = []; }
    return (0, filter_1.default)(arr, function (value) { return !(0, contains_1.default)(values, value); });
};
exports.default = difference;
//# sourceMappingURL=difference.js.map