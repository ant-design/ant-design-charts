import isNil from './is-nil';
import isArray from './is-array';
var firstValue = function (data, name) {
    var rst = null;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!isNil(value)) {
            if (isArray(value)) {
                rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
            }
            else {
                rst = value;
            }
            break;
        }
    }
    return rst;
};
export default firstValue;
//# sourceMappingURL=first-value.js.map