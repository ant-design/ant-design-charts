import isArray from './is-array';
import isString from './is-string';
import isFunction from './is-function';
function sortBy(arr, key) {
    var comparer;
    if (isFunction(key)) {
        comparer = function (a, b) { return key(a) - key(b); };
    }
    else {
        var keys_1 = [];
        if (isString(key)) {
            keys_1.push(key);
        }
        else if (isArray(key)) {
            keys_1 = key;
        }
        comparer = function (a, b) {
            for (var i = 0; i < keys_1.length; i += 1) {
                var prop = keys_1[i];
                if (a[prop] > b[prop]) {
                    return 1;
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    arr.sort(comparer);
    return arr;
}
export default sortBy;
//# sourceMappingURL=sort-by.js.map