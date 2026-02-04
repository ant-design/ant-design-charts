import isArray from './is-array';
import { default as getMax } from './max';
import { default as getMin } from './min';
var getRange = function (values) {
    // 存在 NaN 时，min,max 判定会出问题
    var filterValues = values.filter(function (v) { return !isNaN(v); });
    if (!filterValues.length) {
        // 如果没有数值则直接返回0
        return {
            min: 0,
            max: 0,
        };
    }
    if (isArray(values[0])) {
        var tmp = [];
        for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
        }
        filterValues = tmp;
    }
    var max = getMax(filterValues);
    var min = getMin(filterValues);
    return {
        min: min,
        max: max,
    };
};
export default getRange;
//# sourceMappingURL=get-range.js.map