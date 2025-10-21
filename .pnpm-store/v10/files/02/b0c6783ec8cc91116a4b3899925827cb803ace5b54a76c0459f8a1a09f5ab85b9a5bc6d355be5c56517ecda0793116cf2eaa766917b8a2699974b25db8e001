import { Base } from './base';
import { Domain, ThresholdOptions, Range } from '../types';
/**
 * 将连续的定义域分段，每一段所有的值对应离散的值域中一个值
 */
export declare class Threshold<O extends ThresholdOptions = ThresholdOptions> extends Base<O> {
    /** threshold 的数量 */
    protected n: number;
    protected thresholds: number[];
    protected getDefaultOptions(): O;
    constructor(options?: ThresholdOptions);
    /**
     * 二分查找到输入值在哪一段，返回对应的值域中的值
     */
    map(x: Domain<ThresholdOptions>): any;
    /**
     * 在值域中找到对应的值，并返回在定义域中属于哪一段
     */
    invert(y: Range<ThresholdOptions>): number[];
    clone(): Threshold<O>;
    protected rescale(): void;
}
