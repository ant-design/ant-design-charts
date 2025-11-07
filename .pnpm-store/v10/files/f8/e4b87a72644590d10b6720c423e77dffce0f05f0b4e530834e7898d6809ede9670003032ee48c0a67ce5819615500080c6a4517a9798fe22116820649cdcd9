"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quantize = void 0;
const threshold_1 = require("./threshold");
const wilkinson_extended_1 = require("../tick-methods/wilkinson-extended");
const utils_1 = require("../utils");
/**
 * 类似 Threshold 比例尺，区别在于 thresholds 是根据连续的 domain 根据离散的 range 的数量计算而得到的。
 */
class Quantize extends threshold_1.Threshold {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0.5],
            nice: false,
            tickCount: 5,
            tickMethod: wilkinson_extended_1.wilkinsonExtended,
        };
    }
    constructor(options) {
        super(options);
    }
    nice() {
        const { nice } = this.options;
        if (nice) {
            const [min, max, tickCount] = this.getTickMethodOptions();
            this.options.domain = (0, utils_1.d3LinearNice)(min, max, tickCount);
        }
    }
    getTicks() {
        const { tickMethod } = this.options;
        const [min, max, tickCount] = this.getTickMethodOptions();
        return tickMethod(min, max, tickCount);
    }
    getTickMethodOptions() {
        const { domain, tickCount } = this.options;
        const min = domain[0];
        const max = domain[domain.length - 1];
        return [min, max, tickCount];
    }
    rescale() {
        this.nice();
        const { range, domain } = this.options;
        const [x0, x1] = domain;
        this.n = range.length - 1;
        this.thresholds = new Array(this.n);
        for (let i = 0; i < this.n; i += 1) {
            this.thresholds[i] = ((i + 1) * x1 - (i - this.n) * x0) / (this.n + 1);
        }
    }
    /**
     * 如果是在第一段后或者最后一段就把两端的值添加上
     */
    invert(y) {
        const [a, b] = super.invert(y);
        const [x0, x1] = this.options.domain;
        return a === undefined && b === undefined ? [a, b] : [a || x0, b || x1];
    }
    getThresholds() {
        return this.thresholds;
    }
    clone() {
        return new Quantize(this.options);
    }
}
exports.Quantize = Quantize;
//# sourceMappingURL=quantize.js.map