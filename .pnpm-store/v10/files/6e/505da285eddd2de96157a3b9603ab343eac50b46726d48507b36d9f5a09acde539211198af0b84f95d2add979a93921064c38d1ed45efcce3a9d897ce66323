"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPathArray = isPathArray;
var params_count_1 = require("../parser/params-count");
/**
 * Iterates an array to check if it's an actual `PathArray`.
 */
function isPathArray(path) {
    return (Array.isArray(path) &&
        path.every(function (seg) {
            var lk = seg[0].toLowerCase();
            return params_count_1.paramsCount[lk] === seg.length - 1 && 'achlmqstvz'.includes(lk);
        }));
}
//# sourceMappingURL=is-path-array.js.map