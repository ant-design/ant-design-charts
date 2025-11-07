import isArray from './is-array';
import isFunction from './is-function';
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */
export default (function (arr, fn) {
    if (!isArray(arr)) {
        return undefined;
    }
    var minItem;
    var min = Infinity;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var v = isFunction(fn) ? fn(item) : item[fn];
        if (v < min) {
            minItem = item;
            min = v;
        }
    }
    return minItem;
});
//# sourceMappingURL=min-by.js.map