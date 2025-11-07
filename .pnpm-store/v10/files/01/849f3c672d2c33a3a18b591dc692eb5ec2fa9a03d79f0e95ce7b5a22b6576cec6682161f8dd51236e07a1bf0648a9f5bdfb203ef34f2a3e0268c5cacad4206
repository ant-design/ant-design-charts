"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pow = void 0;
const util_1 = require("@antv/util");
const continuous_1 = require("./continuous");
const utils_1 = require("../utils");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
const transformPow = (exponent) => {
    return (x) => {
        return x < 0 ? -((-x) ** exponent) : x ** exponent;
    };
};
const transformPowInvert = (exponent) => {
    return (x) => {
        return x < 0 ? -((-x) ** (1 / exponent)) : x ** (1 / exponent);
    };
};
const transformSqrt = (x) => {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
};
/**
 * Pow 比例尺
 *
 * 类似于 linear scale, 不同之处在于在计算输出范围值之前对输入域值应用了指数变换,.
 * 即 y = x ^ k 其中 k（指数）可以是任何实数。
 */
class Pow extends continuous_1.Continuous {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            nice: false,
            clamp: false,
            round: false,
            exponent: 2,
            interpolate: utils_1.createInterpolateValue,
            tickMethod: d3_ticks_1.d3Ticks,
            tickCount: 5,
        };
    }
    // 显示指定 options 的类型为 PowOptions O 的类型
    constructor(options) {
        super(options);
    }
    chooseTransforms() {
        const { exponent } = this.options;
        if (exponent === 1)
            return [util_1.identity, util_1.identity];
        const transform = exponent === 0.5 ? transformSqrt : transformPow(exponent);
        const untransform = transformPowInvert(exponent);
        return [transform, untransform];
    }
    clone() {
        return new Pow(this.options);
    }
}
exports.Pow = Pow;
//# sourceMappingURL=pow.js.map