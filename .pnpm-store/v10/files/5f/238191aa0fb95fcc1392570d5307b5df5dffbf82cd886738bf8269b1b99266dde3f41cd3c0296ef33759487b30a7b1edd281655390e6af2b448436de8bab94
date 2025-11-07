import isFunction from './is-function';
import isMatch from './is-match';
import isArray from './is-array';
import isPlainObject from './is-plain-object';
function find(arr, predicate) {
    if (!isArray(arr))
        return null;
    var _predicate;
    if (isFunction(predicate)) {
        _predicate = predicate;
    }
    if (isPlainObject(predicate)) {
        _predicate = function (a) { return isMatch(a, predicate); };
    }
    if (_predicate) {
        for (var i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;
}
export default find;
//# sourceMappingURL=find.js.map