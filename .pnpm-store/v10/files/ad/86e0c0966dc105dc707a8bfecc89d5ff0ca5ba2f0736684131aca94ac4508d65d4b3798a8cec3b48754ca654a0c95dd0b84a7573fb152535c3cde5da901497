import { Threshold } from './threshold';
import { QuantileOptions, Range } from '../types';
/**
 * 类似 Threshold 比例尺，区别在于分位数比例尺 (Quantile) 将一个离散的输入域映射到一个离散的输出域
 * 输入域被指定为一组离散的样本值，输出域中的值的数量决定了分位数的数量。
 */
export declare class Quantile extends Threshold<QuantileOptions> {
    protected getDefaultOptions(): QuantileOptions;
    constructor(options?: QuantileOptions);
    protected rescale(): void;
    /**
     * 如果是在第一段后或者最后一段就把两端的值添加上
     */
    invert(y: Range<QuantileOptions>): number[];
    getThresholds(): number[];
    clone(): Quantile;
    getTicks(): number[];
}
