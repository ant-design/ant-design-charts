"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var filter = function (arr, func) {
    if (!is_array_like_1.default(arr)) {
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        if (func(value, index)) {
            result.push(value);
        }
    }
    return result;
};
exports.default = filter;
//# sourceMappingURL=filter.js.map