import { Continuous } from './continuous';
import { PowOptions, Transform } from '../types';
import { Base } from './base';
/**
 * Pow 比例尺
 *
 * 类似于 linear scale, 不同之处在于在计算输出范围值之前对输入域值应用了指数变换,.
 * 即 y = x ^ k 其中 k（指数）可以是任何实数。
 */
export declare class Pow<O extends PowOptions = PowOptions> extends Continuous<O> {
    protected getDefaultOptions(): O;
    constructor(options?: PowOptions);
    protected chooseTransforms(): Transform[];
    clone(): Base<O>;
}
