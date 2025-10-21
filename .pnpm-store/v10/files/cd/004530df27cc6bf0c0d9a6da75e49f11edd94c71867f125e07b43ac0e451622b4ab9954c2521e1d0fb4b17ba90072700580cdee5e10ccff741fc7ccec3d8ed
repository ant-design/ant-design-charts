import isArrayLike from './is-array-like';
var map = function (arr, func) {
    if (!isArrayLike(arr)) {
        // @ts-ignore
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        result.push(func(value, index));
    }
    return result;
};
export default map;
//# sourceMappingURL=map.js.map