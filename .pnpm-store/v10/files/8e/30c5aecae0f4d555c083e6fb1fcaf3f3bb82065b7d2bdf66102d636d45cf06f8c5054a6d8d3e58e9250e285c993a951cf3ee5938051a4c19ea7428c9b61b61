import { DivergingOptions } from '../types';
import { Linear } from './linear';
export interface Diverging {
    invert: undefined;
    getOptions(): DivergingOptions;
    update(updateOptions: Partial<DivergingOptions>): void;
}
/**
 * Diverging 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
export declare class Diverging extends Linear {
    protected getDefaultOptions(): DivergingOptions;
    constructor(options?: DivergingOptions);
    clone(): Diverging;
}
