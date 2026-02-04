"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var max_1 = tslib_1.__importDefault(require("./max"));
var min_1 = tslib_1.__importDefault(require("./min"));
var getRange = function (values) {
    // 存在 NaN 时，min,max 判定会出问题
    var filterValues = values.filter(function (v) { return !isNaN(v); });
    if (!filterValues.length) {
        // 如果没有数值则直接返回0
        return {
            min: 0,
            max: 0,
        };
    }
    if ((0, is_array_1.default)(values[0])) {
        var tmp = [];
        for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
        }
        filterValues = tmp;
    }
    var max = (0, max_1.default)(filterValues);
    var min = (0, min_1.default)(filterValues);
    return {
        min: min,
        max: max,
    };
};
exports.default = getRange;
//# sourceMappingURL=get-range.js.map