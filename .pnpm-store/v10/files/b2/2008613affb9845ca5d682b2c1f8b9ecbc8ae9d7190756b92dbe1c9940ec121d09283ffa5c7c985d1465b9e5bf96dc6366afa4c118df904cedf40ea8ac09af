"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSeriesAttr = parseSeriesAttr;
var util_1 = require("@antv/util");
/**
 * 规范化padding
 */
function parseSeriesAttr(series) {
    if ((0, util_1.isNumber)(series)) {
        return [series, series, series, series];
    }
    if ((0, util_1.isArray)(series)) {
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