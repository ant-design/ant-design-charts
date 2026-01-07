"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const continuous_1 = require("./continuous");
const utils_1 = require("../utils");
const d3_log_1 = require("../tick-methods/d3-log");
const d3_log_nice_1 = require("../utils/d3-log-nice");
/**
 * Linear 比例尺
 *
 * 构造一个线性的对数比例尺
 */
class Log extends continuous_1.Continuous {
    getDefaultOptions() {
        return {
            domain: [1, 10],
            range: [0, 1],
            base: 10,
            interpolate: utils_1.createInterpolateValue,
            tickMethod: d3_log_1.d3Log,
            tickCount: 5,
        };
    }
    chooseNice() {
        return d3_log_nice_1.d3LogNice;
    }
    getTickMethodOptions() {
        const { domain, tickCount, base } = this.options;
        const min = domain[0];
        const max = domain[domain.length - 1];
        return [min, max, tickCount, base];
    }
    chooseTransforms() {
        const { base, domain } = this.options;
        const shouldReflect = domain[0] < 0;
        return [(0, utils_1.logs)(base, shouldReflect), (0, utils_1.pows)(base, shouldReflect)];
    }
    clone() {
        return new Log(this.options);
    }
}
exports.Log = Log;
//# sourceMappingURL=log.js.map