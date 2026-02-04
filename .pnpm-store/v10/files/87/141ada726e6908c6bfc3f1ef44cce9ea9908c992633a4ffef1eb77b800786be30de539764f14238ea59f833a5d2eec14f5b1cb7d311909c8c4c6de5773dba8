import isArray from './is-array';
import isFunction from './is-function';
var hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(data, condition) {
    if (!condition || !isArray(data)) {
        return {};
    }
    var result = {};
    // 兼容方法和 字符串的写法
    var predicate = isFunction(condition) ? condition : function (item) { return item[condition]; };
    var key;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        key = predicate(item);
        if (hasOwnProperty.call(result, key)) {
            result[key].push(item);
        }
        else {
            result[key] = [item];
        }
    }
    return result;
}
export default groupBy;
//# sourceMappingURL=group-by.js.map