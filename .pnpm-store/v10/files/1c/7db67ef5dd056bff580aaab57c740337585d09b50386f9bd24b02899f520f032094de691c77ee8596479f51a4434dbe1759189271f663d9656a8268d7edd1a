import isArray from './is-array';
import isPlainObject from './is-plain-object';
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
            if (value !== null && isPlainObject(value)) {
                if (!isPlainObject(dist[key])) {
                    dist[key] = {};
                }
                if (level < maxLevel) {
                    _deepMix(dist[key], value, level + 1, maxLevel);
                }
                else {
                    dist[key] = src[key];
                }
            }
            else if (isArray(value)) {
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
export default deepMix;
//# sourceMappingURL=deep-mix.js.map