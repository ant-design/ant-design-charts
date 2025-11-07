import { Base } from './base';
import { bisect, isValid } from '../utils';
/**
 * 将连续的定义域分段，每一段所有的值对应离散的值域中一个值
 */
export class Threshold extends Base {
    getDefaultOptions() {
        return {
            domain: [0.5],
            range: [0, 1],
        };
    }
    constructor(options) {
        super(options);
    }
    /**
     * 二分查找到输入值在哪一段，返回对应的值域中的值
     */
    map(x) {
        if (!isValid(x))
            return this.options.unknown;
        const index = bisect(this.thresholds, x, 0, this.n);
        return this.options.range[index];
    }
    /**
     * 在值域中找到对应的值，并返回在定义域中属于哪一段
     */
    invert(y) {
        const { range } = this.options;
        const index = range.indexOf(y);
        const domain = this.thresholds;
        return [domain[index - 1], domain[index]];
    }
    clone() {
        return new Threshold(this.options);
    }
    rescale() {
        const { domain, range } = this.options;
        this.n = Math.min(domain.length, range.length - 1);
        this.thresholds = domain;
    }
}
//# sourceMappingURL=threshold.js.map