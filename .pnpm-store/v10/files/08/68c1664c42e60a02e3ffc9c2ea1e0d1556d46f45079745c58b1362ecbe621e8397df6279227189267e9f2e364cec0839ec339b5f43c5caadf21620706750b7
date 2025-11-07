import each from './each';
import isArray from './is-array';
import isPlainObject from './is-plain-object';
var reduce = function (arr, fn, init) {
    if (!isArray(arr) && !isPlainObject(arr)) {
        return arr;
    }
    var result = init;
    each(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
export default reduce;
//# sourceMappingURL=reduce.js.map