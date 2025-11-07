import { __read } from "tslib";
import { clone, min, minBy, max, maxBy } from '@antv/util';
/**
 * 获得数据的最值
 */
export function getRange(data) {
    if (data.length === 0)
        return [0, 0];
    return [
        min(minBy(data, function (arr) { return min(arr) || 0; })),
        max(maxBy(data, function (arr) { return max(arr) || 0; })),
    ];
}
/**
 * 数据转换为堆叠数据
 */
export function getStackedData(_) {
    var data = clone(_);
    // 生成堆叠数据
    var datumLen = data[0].length;
    // 上一个堆叠的数据值，分别记录正负
    var _a = __read([Array(datumLen).fill(0), Array(datumLen).fill(0)], 2), positivePrev = _a[0], negativePrev = _a[1];
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