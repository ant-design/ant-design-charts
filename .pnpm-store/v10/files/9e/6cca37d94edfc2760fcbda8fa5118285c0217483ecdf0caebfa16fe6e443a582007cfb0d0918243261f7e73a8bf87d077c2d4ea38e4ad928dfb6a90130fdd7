import each from './each';
import isFunction from './is-function';
var keys = Object.keys ? function (obj) { return Object.keys(obj); } : function (obj) {
    var result = [];
    each(obj, function (value, key) {
        if (!(isFunction(obj) && key === 'prototype')) {
            result.push(key);
        }
    });
    return result;
};
export default keys;
//# sourceMappingURL=keys.js.map