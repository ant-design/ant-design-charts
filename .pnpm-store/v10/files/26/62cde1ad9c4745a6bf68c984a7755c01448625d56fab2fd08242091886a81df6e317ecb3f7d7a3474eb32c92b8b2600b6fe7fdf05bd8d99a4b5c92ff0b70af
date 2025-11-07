"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linear = void 0;
const util_1 = require("@antv/util");
const continuous_1 = require("./continuous");
const utils_1 = require("../utils");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
/**
 * Linear 比例尺
 *
 * 构造可创建一个在输入和输出之间具有线性关系的比例尺
 */
class Linear extends continuous_1.Continuous {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            unknown: undefined,
            nice: false,
            clamp: false,
            round: false,
            interpolate: utils_1.createInterpolateValue,
            tickMethod: d3_ticks_1.d3Ticks,
            tickCount: 5,
        };
    }
    chooseTransforms() {
        return [util_1.identity, util_1.identity];
    }
    clone() {
        return new Linear(this.options);
    }
}
exports.Linear = Linear;
//# sourceMappingURL=linear.js.map