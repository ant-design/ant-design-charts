"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCurveArray = isCurveArray;
var is_normalized_array_1 = require("./is-normalized-array");
/**
 * Iterates an array to check if it's a `PathArray`
 * with all C (cubic bezier) segments.
 *
 * @param {string | PathArray} path the `Array` to be checked
 * @returns {boolean} iteration result
 */
function isCurveArray(path) {
    return (0, is_normalized_array_1.isNormalizedArray)(path) && path.every(function (_a) {
        var pc = _a[0];
        return 'MC'.includes(pc);
    });
}
//# sourceMappingURL=is-curve-array.js.map