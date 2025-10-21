import each from './each';
import isFunction from './is-function';
// @ts-ignore
var values = Object.values
    ? function (obj) { return Object.values(obj); }
    : function (obj) {
        var result = [];
        each(obj, function (value, key) {
            if (!(isFunction(obj) && key === 'prototype')) {
                result.push(value);
            }
        });
        return result;
    };
export default values;
//# sourceMappingURL=values.js.map