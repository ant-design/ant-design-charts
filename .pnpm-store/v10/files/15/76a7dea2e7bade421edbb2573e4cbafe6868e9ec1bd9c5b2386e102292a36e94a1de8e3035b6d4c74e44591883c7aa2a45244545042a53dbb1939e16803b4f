import isNil from './is-nil';
import isObject from './is-object';
var identity = function (v) { return v; };
export default (function (object, func) {
    if (func === void 0) { func = identity; }
    var r = {};
    if (isObject(object) && !isNil(object)) {
        Object.keys(object).forEach(function (key) {
            // @ts-ignore
            r[key] = func(object[key], key);
        });
    }
    return r;
});
//# sourceMappingURL=map-values.js.map