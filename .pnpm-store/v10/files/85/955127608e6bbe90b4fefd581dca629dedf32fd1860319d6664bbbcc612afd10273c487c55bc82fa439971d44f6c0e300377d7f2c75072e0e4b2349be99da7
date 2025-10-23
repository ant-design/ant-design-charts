import { Continuous } from './continuous';
import { TickMethodOptions, TimeOptions } from '../types';
export declare class Time extends Continuous<TimeOptions> {
    protected getDefaultOptions(): TimeOptions;
    protected chooseTransforms(): (((x: Date) => number) | ((x: number) => Date))[];
    protected chooseNice(): import("../types").NiceMethod<Date>;
    protected getTickMethodOptions(): TickMethodOptions<Date>;
    getFormatter(): (d: Date) => string;
    clone(): Time;
}
