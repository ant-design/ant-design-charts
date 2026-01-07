"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continuous = void 0;
const util_1 = require("@antv/util");
const base_1 = require("./base");
const utils_1 = require("../utils");
/** 当 domain 和 range 只有一段的时候的 map 的 工厂函数 */
const createBiMap = (domain, range, createInterpolate) => {
    const [d0, d1] = domain;
    const [r0, r1] = range;
    let normalize;
    let interpolate;
    if (d0 < d1) {
        normalize = (0, utils_1.createNormalize)(d0, d1);
        interpolate = createInterpolate(r0, r1);
    }
    else {
        normalize = (0, utils_1.createNormalize)(d1, d0);
        interpolate = createInterpolate(r1, r0);
    }
    return (0, utils_1.compose)(interpolate, normalize);
};
/** 当 domain 和 range 有多段时候的 map 的 工厂函数 */
const createPolyMap = (domain, range, createInterpolate) => {
    const len = Math.min(domain.length, range.length) - 1;
    const normalizeList = new Array(len);
    const interpolateList = new Array(len);
    const reverse = domain[0] > domain[len];
    const ascendingDomain = reverse ? [...domain].reverse() : domain;
    const ascendingRange = reverse ? [...range].reverse() : range;
    // 每一段都生成 normalize 和 interpolate
    for (let i = 0; i < len; i += 1) {
        normalizeList[i] = (0, utils_1.createNormalize)(ascendingDomain[i], ascendingDomain[i + 1]);
        interpolateList[i] = createInterpolate(ascendingRange[i], ascendingRange[i + 1]);
    }
    // 二分最右查找到相应的 normalize 和 interpolate
    return (x) => {
        const i = (0, utils_1.bisect)(domain, x, 1, len) - 1;
        const normalize = normalizeList[i];
        const interpolate = interpolateList[i];
        return (0, utils_1.compose)(interpolate, normalize)(x);
    };
};
/** 选择一个分段映射的函数 */
const choosePiecewise = (domain, range, interpolate, shouldRound) => {
    const n = Math.min(domain.length, range.length);
    const createPiecewise = n > 2 ? createPolyMap : createBiMap;
    const createInterpolate = shouldRound ? utils_1.createInterpolateRound : interpolate;
    return createPiecewise(domain, range, createInterpolate);
};
/**
 * Continuous 比例尺 的输入 x 和输出 y 满足：y = a * f(x) + b
 * 通过函数柯里化和复合函数可以在映射过程中去掉分支，提高性能。
 * 参考：https://github.com/d3/d3-scale/blob/master/src/continuous.js
 */
class Continuous extends base_1.Base {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            nice: false,
            clamp: false,
            round: false,
            interpolate: utils_1.createInterpolateNumber,
            tickCount: 5,
        };
    }
    /**
     * y = interpolate(normalize(clamp(transform(x))))
     */
    map(x) {
        if (!(0, utils_1.isValid)(x))
            return this.options.unknown;
        return this.output(x);
    }
    /**
     * x = transform(clamp(interpolate(normalize(y))))
     */
    invert(x) {
        if (!(0, utils_1.isValid)(x))
            return this.options.unknown;
        return this.input(x);
    }
    nice() {
        if (!this.options.nice)
            return;
        const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
        this.options.domain = this.chooseNice()(min, max, tickCount, ...rest);
    }
    getTicks() {
        const { tickMethod } = this.options;
        const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
        return tickMethod(min, max, tickCount, ...rest);
    }
    getTickMethodOptions() {
        const { domain, tickCount } = this.options;
        const min = domain[0];
        const max = domain[domain.length - 1];
        return [min, max, tickCount];
    }
    chooseNice() {
        return utils_1.d3LinearNice;
    }
    rescale() {
        this.nice();
        const [transform, untransform] = this.chooseTransforms();
        this.composeOutput(transform, this.chooseClamp(transform));
        this.composeInput(transform, untransform, this.chooseClamp(untransform));
    }
    chooseClamp(transform) {
        const { clamp: shouldClamp, range } = this.options;
        const domain = this.options.domain.map(transform);
        const n = Math.min(domain.length, range.length);
        return shouldClamp ? (0, utils_1.createClamp)(domain[0], domain[n - 1]) : util_1.identity;
    }
    composeOutput(transform, clamp) {
        const { domain, range, round, interpolate } = this.options;
        const piecewise = choosePiecewise(domain.map(transform), range, interpolate, round);
        this.output = (0, utils_1.compose)(piecewise, clamp, transform);
    }
    composeInput(transform, untransform, clamp) {
        const { domain, range } = this.options;
        const piecewise = choosePiecewise(range, domain.map(transform), utils_1.createInterpolateNumber);
        this.input = (0, utils_1.compose)(untransform, clamp, piecewise);
    }
}
exports.Continuous = Continuous;
//# sourceMappingURL=continuous.js.map