"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var each_1 = tslib_1.__importDefault(require("./each"));
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
var reduce = function (arr, fn, init) {
    if (!(0, is_array_1.default)(arr) && !(0, is_plain_object_1.default)(arr)) {
        return arr;
    }
    var result = init;
    (0, each_1.default)(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
exports.default = reduce;
//# sourceMappingURL=reduce.js.map