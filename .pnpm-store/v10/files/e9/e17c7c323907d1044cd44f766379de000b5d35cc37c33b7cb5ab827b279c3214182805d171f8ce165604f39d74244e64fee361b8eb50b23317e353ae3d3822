import { Continuous } from './continuous';
import { LogOptions, TickMethodOptions } from '../types';
/**
 * Linear 比例尺
 *
 * 构造一个线性的对数比例尺
 */
export declare class Log extends Continuous<LogOptions> {
    protected getDefaultOptions(): LogOptions;
    protected chooseNice(): import("../types").TickMethod<number>;
    protected getTickMethodOptions(): TickMethodOptions<number>;
    protected chooseTransforms(): ((x: number) => number)[];
    clone(): Log;
}
