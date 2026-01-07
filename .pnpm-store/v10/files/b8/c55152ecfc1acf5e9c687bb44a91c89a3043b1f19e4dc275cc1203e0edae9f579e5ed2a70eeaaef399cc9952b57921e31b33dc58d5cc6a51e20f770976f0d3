import { Base } from './base';
import { ContinuousOptions, Domain, Range, NiceMethod, TickMethodOptions, Transform } from '../types';
/**
 * Continuous 比例尺 的输入 x 和输出 y 满足：y = a * f(x) + b
 * 通过函数柯里化和复合函数可以在映射过程中去掉分支，提高性能。
 * 参考：https://github.com/d3/d3-scale/blob/master/src/continuous.js
 */
export declare abstract class Continuous<O extends ContinuousOptions> extends Base<O> {
    /** 实际上将 x 映射为 y 的函数 */
    protected output: Transform;
    /** 实际上将 y 映射为 x 的函数 */
    protected input: Transform;
    /**
     * 根据比例尺 和 options 选择对应的 transform 和 untransform 函数
     * y = a * f(x) + b
     * x = a * f'(y) + b
     * @returns [f(x), f'(y)]
     */
    protected abstract chooseTransforms(): Transform[];
    protected getDefaultOptions(): O;
    /**
     * y = interpolate(normalize(clamp(transform(x))))
     */
    map(x: Domain<O>): any;
    /**
     * x = transform(clamp(interpolate(normalize(y))))
     */
    invert(x: Range<O>): any;
    protected nice(): void;
    getTicks(): (number | Date)[];
    protected getTickMethodOptions(): TickMethodOptions;
    protected chooseNice(): NiceMethod<number | Date>;
    protected rescale(): void;
    protected chooseClamp(transform: Transform): (x: number) => number;
    protected composeOutput(transform: Transform, clamp: Transform): void;
    protected composeInput(transform: Transform, untransform: Transform, clamp: Transform): void;
}
