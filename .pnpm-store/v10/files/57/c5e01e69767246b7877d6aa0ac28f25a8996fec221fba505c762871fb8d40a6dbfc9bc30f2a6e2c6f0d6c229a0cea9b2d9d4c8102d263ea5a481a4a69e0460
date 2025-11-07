"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAbsoluteArray = isAbsoluteArray;
var is_path_array_1 = require("./is-path-array");
/**
 * Iterates an array to check if it's a `PathArray`
 * with all absolute values.
 */
function isAbsoluteArray(path) {
    return ((0, is_path_array_1.isPathArray)(path) &&
        // @ts-ignore -- `isPathArray` also checks if it's `Array`
        path.every(function (_a) {
            var x = _a[0];
            return x === x.toUpperCase();
        }));
}
//# sourceMappingURL=is-absolute-array.js.map