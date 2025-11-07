import { Threshold } from './threshold';
import { wilkinsonExtended } from '../tick-methods/wilkinson-extended';
import { createQuartile } from '../utils/create-quartile';
/**
 * 类似 Threshold 比例尺，区别在于分位数比例尺 (Quantile) 将一个离散的输入域映射到一个离散的输出域
 * 输入域被指定为一组离散的样本值，输出域中的值的数量决定了分位数的数量。
 */
export class Quantile extends Threshold {
    getDefaultOptions() {
        return {
            domain: [],
            range: [],
            tickCount: 5,
            unknown: undefined,
            tickMethod: wilkinsonExtended,
        };
    }
    constructor(options) {
        super(options);
    }
    rescale() {
        const { domain, range } = this.options;
        this.n = range.length - 1;
        this.thresholds = createQuartile(domain, this.n + 1, false);
    }
    /**
     * 如果是在第一段后或者最后一段就把两端的值添加上
     */
    invert(y) {
        const [a, b] = super.invert(y);
        const { domain } = this.options;
        const dMin = domain[0];
        const dMax = domain[domain.length - 1];
        return a === undefined && b === undefined ? [a, b] : [a || dMin, b || dMax];
    }
    getThresholds() {
        return this.thresholds;
    }
    clone() {
        return new Quantile(this.options);
    }
    getTicks() {
        const { tickCount, domain, tickMethod } = this.options;
        const lastIndex = domain.length - 1;
        const min = domain[0];
        const max = domain[lastIndex];
        return tickMethod(min, max, tickCount);
    }
}
//# sourceMappingURL=quantile.js.map