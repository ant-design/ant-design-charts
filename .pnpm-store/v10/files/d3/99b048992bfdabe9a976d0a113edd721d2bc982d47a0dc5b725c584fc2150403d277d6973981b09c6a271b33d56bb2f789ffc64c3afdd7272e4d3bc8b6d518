"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNormalizedArray = isNormalizedArray;
var is_absolute_array_1 = require("./is-absolute-array");
/**
 * Iterates an array to check if it's a `PathArray`
 * with all segments are in non-shorthand notation
 * with absolute values.
 */
function isNormalizedArray(path) {
    return (0, is_absolute_array_1.isAbsoluteArray)(path) && path.every(function (_a) {
        var pc = _a[0];
        return 'ACLMQZ'.includes(pc);
    });
}
//# sourceMappingURL=is-normalized-array.js.map