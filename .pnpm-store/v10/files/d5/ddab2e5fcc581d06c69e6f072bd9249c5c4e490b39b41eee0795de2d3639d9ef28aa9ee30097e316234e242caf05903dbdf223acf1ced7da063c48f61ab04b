import isArray from './is-array';
import isFunction from './is-function';
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
export default (function (arr, fn) {
    if (!isArray(arr)) {
        return undefined;
    }
    var maxItem;
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var v = isFunction(fn) ? fn(item) : item[fn];
        if (v > max) {
            maxItem = item;
            max = v;
        }
    }
    return maxItem;
});
//# sourceMappingURL=max-by.js.map