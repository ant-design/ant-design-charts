import { __read } from "tslib";
import { isPlainObject, isArray } from '@antv/util';
var MAX_MIX_LEVEL = 5;
var deep = function (dist, src, level, maxLevel) {
    if (level === void 0) { level = 0; }
    if (maxLevel === void 0) { maxLevel = MAX_MIX_LEVEL; }
    Object.entries(src).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var res = dist;
        if (Object.prototype.hasOwnProperty.call(src, key)) {
            if (!value) {
                // null 、 undefined 等情况直接赋值
                res[key] = value;
            }
            else if (isPlainObject(value)) {
                if (!isPlainObject(dist[key])) {
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
            else if (isArray(value)) {
                res[key] = [];
                res[key] = res[key].concat(value);
            }
            else {
                res[key] = value;
            }
        }
    });
};
export var deepAssign = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        deep(rst, args[i]);
    }
    return rst;
};
//# sourceMappingURL=deep-assign.js.map