"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRange = getRange;
exports.getStackedData = getStackedData;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
/**
 * 获得数据的最值
 */
function getRange(data) {
    if (data.length === 0)
        return [0, 0];
    return [
        (0, util_1.min)((0, util_1.minBy)(data, function (arr) { return (0, util_1.min)(arr) || 0; })),
        (0, util_1.max)((0, util_1.maxBy)(data, function (arr) { return (0, util_1.max)(arr) || 0; })),
    ];
}
/**
 * 数据转换为堆叠数据
 */
function getStackedData(_) {
    var data = (0, util_1.clone)(_);
    // 生成堆叠数据
    var datumLen = data[0].length;
    // 上一个堆叠的数据值，分别记录正负
    var _a = tslib_1.__read([Array(datumLen).fill(0), Array(datumLen).fill(0)], 2), positivePrev = _a[0], negativePrev = _a[1];
    for (var i = 0; i < data.length; i += 1) {
        var datum = data[i];
        for (var j = 0; j < datumLen; j += 1) {
            if (datum[j] >= 0) {
                datum[j] += positivePrev[j];
                positivePrev[j] = datum[j];
            }
            else {
                datum[j] += negativePrev[j];
                negativePrev[j] = datum[j];
            }
        }
    }
    return data;
}
//# sourceMappingURL=utils.js.map