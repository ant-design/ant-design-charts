"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_array_1 = require("./is-array");
var is_plain_object_1 = require("./is-plain-object");
var reduce = function (arr, fn, init) {
    if (!is_array_1.default(arr) && !is_plain_object_1.default(arr)) {
        return arr;
    }
    var result = init;
    each_1.default(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
exports.default = reduce;
//# sourceMappingURL=reduce.js.map