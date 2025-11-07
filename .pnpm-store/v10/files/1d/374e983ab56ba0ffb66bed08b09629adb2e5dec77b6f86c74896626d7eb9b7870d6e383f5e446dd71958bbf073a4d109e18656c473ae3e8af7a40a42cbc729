import { SequentialOptions } from '../types';
import { Linear } from './linear';
export interface Sequential {
    invert: undefined;
    getOptions(): SequentialOptions;
    update(updateOptions: Partial<SequentialOptions>): void;
}
/**
 * Sequential 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
export declare class Sequential extends Linear {
    protected getDefaultOptions(): SequentialOptions;
    constructor(options?: SequentialOptions);
    clone(): Sequential;
}
