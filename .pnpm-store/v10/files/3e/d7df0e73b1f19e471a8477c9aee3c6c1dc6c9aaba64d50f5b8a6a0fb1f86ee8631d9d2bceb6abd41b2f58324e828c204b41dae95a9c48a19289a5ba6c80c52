"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var map = function (arr, func) {
    if (!is_array_like_1.default(arr)) {
        // @ts-ignore
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        result.push(func(value, index));
    }
    return result;
};
exports.default = map;
//# sourceMappingURL=map.js.map