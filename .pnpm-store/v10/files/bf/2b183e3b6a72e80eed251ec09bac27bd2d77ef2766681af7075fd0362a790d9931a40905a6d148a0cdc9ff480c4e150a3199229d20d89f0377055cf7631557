"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
function sortBy(arr, key) {
    var comparer;
    if ((0, is_function_1.default)(key)) {
        comparer = function (a, b) { return key(a) - key(b); };
    }
    else {
        var keys_1 = [];
        if ((0, is_string_1.default)(key)) {
            keys_1.push(key);
        }
        else if ((0, is_array_1.default)(key)) {
            keys_1 = key;
        }
        comparer = function (a, b) {
            for (var i = 0; i < keys_1.length; i += 1) {
                var prop = keys_1[i];
                if (a[prop] > b[prop]) {
                    return 1;
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    arr.sort(comparer);
    return arr;
}
exports.default = sortBy;
//# sourceMappingURL=sort-by.js.map