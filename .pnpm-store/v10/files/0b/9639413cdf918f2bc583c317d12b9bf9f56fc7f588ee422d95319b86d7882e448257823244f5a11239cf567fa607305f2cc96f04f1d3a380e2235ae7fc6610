import isArray from './is-array';
import isFunction from './is-function';
import groupBy from './group-by';
/**
 * 将数据分组成 map
 * @param data
 * @param condition
 */
export default function groupToMap(data, condition) {
    if (!condition) {
        return {
            0: data,
        };
    }
    if (!isFunction(condition)) {
        // 如果是字符串，则按照 a*b 风格成数组
        var paramscondition_1 = isArray(condition) ? condition : condition.replace(/\s+/g, '').split('*');
        condition = function (row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            // 根据字段列表的值，拼接成 key
            for (var i = 0, l = paramscondition_1.length; i < l; i++) {
                unique += row[paramscondition_1[i]] && row[paramscondition_1[i]].toString();
            }
            return unique;
        };
    }
    return groupBy(data, condition);
}
//# sourceMappingURL=group-to-map.js.map