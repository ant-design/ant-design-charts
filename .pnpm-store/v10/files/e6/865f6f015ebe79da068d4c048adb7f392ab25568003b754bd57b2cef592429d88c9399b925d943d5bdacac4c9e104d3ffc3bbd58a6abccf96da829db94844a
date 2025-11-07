import isArrayLike from './is-array-like';
var filter = function (arr, func) {
    if (!isArrayLike(arr)) {
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        if (func(value, index)) {
            result.push(value);
        }
    }
    return result;
};
export default filter;
//# sourceMappingURL=filter.js.map