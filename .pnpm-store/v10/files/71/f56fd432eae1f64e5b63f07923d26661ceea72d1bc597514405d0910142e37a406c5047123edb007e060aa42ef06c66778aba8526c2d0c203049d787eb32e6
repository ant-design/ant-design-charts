import { Continuous } from './continuous';
import { LinearOptions, Transform } from '../types';
import { Base } from './base';
/**
 * Linear 比例尺
 *
 * 构造可创建一个在输入和输出之间具有线性关系的比例尺
 */
export declare class Linear extends Continuous<LinearOptions> {
    protected getDefaultOptions(): LinearOptions;
    protected removeUnsortedValues(breaksDomain: number[], breaksRange: number[], reverse: boolean): {
        breaksDomain: number[];
        breaksRange: number[];
    };
    protected transformDomain(options: LinearOptions): {
        breaksDomain: number[];
        breaksRange: number[];
    };
    protected transformBreaks(options: LinearOptions): LinearOptions;
    protected chooseTransforms(): Transform[];
    clone(): Base<LinearOptions>;
}
