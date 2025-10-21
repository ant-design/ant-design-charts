import { Threshold } from './threshold';
import { QuantizeOptions, Range } from '../types';
/**
 * 类似 Threshold 比例尺，区别在于 thresholds 是根据连续的 domain 根据离散的 range 的数量计算而得到的。
 */
export declare class Quantize extends Threshold<QuantizeOptions> {
    protected getDefaultOptions(): QuantizeOptions;
    constructor(options?: QuantizeOptions);
    protected nice(): void;
    getTicks(): number[];
    protected getTickMethodOptions(): number[];
    protected rescale(): void;
    /**
     * 如果是在第一段后或者最后一段就把两端的值添加上
     */
    invert(y: Range<QuantizeOptions>): number[];
    getThresholds(): number[];
    clone(): Quantize;
}
