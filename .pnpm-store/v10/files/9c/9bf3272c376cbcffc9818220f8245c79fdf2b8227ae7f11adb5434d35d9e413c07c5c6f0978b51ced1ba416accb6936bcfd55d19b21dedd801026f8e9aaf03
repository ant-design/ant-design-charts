"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
var MAX_MIX_LEVEL = 5;
function hasOwn(object, property) {
    if (Object.hasOwn) {
        return Object.hasOwn(object, property);
    }
    if (object == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    return Object.prototype.hasOwnProperty.call(Object(object), property);
}
function _deepMix(dist, src, level, maxLevel) {
    level = level || 0;
    maxLevel = maxLevel || MAX_MIX_LEVEL;
    for (var key in src) {
        if (hasOwn(src, key)) {
            var value = src[key];
            if (value !== null && (0, is_plain_object_1.default)(value)) {
                if (!(0, is_plain_object_1.default)(dist[key])) {
                    dist[key] = {};
                }
                if (level < maxLevel) {
                    _deepMix(dist[key], value, level + 1, maxLevel);
                }
                else {
                    dist[key] = src[key];
                }
            }
            else if ((0, is_array_1.default)(value)) {
                dist[key] = [];
                dist[key] = dist[key].concat(value);
            }
            else if (value !== undefined) {
                dist[key] = value;
            }
        }
    }
}
// todo 重写
var deepMix = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        _deepMix(rst, args[i]);
    }
    return rst;
};
exports.default = deepMix;
//# sourceMappingURL=deep-mix.js.map