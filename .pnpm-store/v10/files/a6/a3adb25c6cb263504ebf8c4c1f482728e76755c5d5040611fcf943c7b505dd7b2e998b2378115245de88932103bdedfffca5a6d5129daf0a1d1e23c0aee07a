"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = groupToMap;
var tslib_1 = require("tslib");
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var group_by_1 = tslib_1.__importDefault(require("./group-by"));
/**
 * 将数据分组成 map
 * @param data
 * @param condition
 */
function groupToMap(data, condition) {
    if (!condition) {
        return {
            0: data,
        };
    }
    if (!(0, is_function_1.default)(condition)) {
        // 如果是字符串，则按照 a*b 风格成数组
        var paramscondition_1 = (0, is_array_1.default)(condition) ? condition : condition.replace(/\s+/g, '').split('*');
        condition = function (row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            // 根据字段列表的值，拼接成 key
            for (var i = 0, l = paramscondition_1.length; i < l; i++) {
                unique += row[paramscondition_1[i]] && row[paramscondition_1[i]].toString();
            }
            return unique;
        };
    }
    return (0, group_by_1.default)(data, condition);
}
//# sourceMappingURL=group-to-map.js.map