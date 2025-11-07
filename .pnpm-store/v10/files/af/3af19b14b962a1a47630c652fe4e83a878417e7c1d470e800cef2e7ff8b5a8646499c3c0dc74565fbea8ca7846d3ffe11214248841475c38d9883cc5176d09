import { isNumber, isArray } from '@antv/util';
/**
 * 规范化padding
 */
export function parseSeriesAttr(series) {
    if (isNumber(series)) {
        return [series, series, series, series];
    }
    if (isArray(series)) {
        var len = series.length;
        if (len === 1) {
            return [series[0], series[0], series[0], series[0]];
        }
        if (len === 2) {
            return [series[0], series[1], series[0], series[1]];
        }
        if (len === 3) {
            return [series[0], series[1], series[2], series[1]];
        }
        if (len === 4) {
            return series;
        }
    }
    return [0, 0, 0, 0];
}
//# sourceMappingURL=series.js.map