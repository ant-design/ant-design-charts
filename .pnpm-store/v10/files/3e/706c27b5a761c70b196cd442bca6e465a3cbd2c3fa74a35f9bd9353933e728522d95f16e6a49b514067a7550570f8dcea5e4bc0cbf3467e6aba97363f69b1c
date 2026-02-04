"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepAssign = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var MAX_MIX_LEVEL = 5;
var deep = function (dist, src, level, maxLevel) {
    if (level === void 0) { level = 0; }
    if (maxLevel === void 0) { maxLevel = MAX_MIX_LEVEL; }
    Object.entries(src).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        var res = dist;
        if (Object.prototype.hasOwnProperty.call(src, key)) {
            if (!value) {
                // null 、 undefined 等情况直接赋值
                res[key] = value;
            }
            else if ((0, util_1.isPlainObject)(value)) {
                if (!(0, util_1.isPlainObject)(dist[key])) {
                    res[key] = {};
                }
                if (level < maxLevel) {
                    deep(dist[key], value, level + 1, maxLevel);
                }
                else {
                    // 层级过深直接赋值，性能问题
                    res[key] = src[key];
                }
            }
            else if ((0, util_1.isArray)(value)) {
                res[key] = [];
                res[key] = res[key].concat(value);
            }
            else {
                res[key] = value;
            }
        }
    });
};
var deepAssign = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        deep(rst, args[i]);
    }
    return rst;
};
exports.deepAssign = deepAssign;
//# sourceMappingURL=deep-assign.js.map