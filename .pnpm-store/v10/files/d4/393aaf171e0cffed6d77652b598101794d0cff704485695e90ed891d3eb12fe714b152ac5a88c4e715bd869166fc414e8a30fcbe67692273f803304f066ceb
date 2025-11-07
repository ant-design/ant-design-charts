import { SqrtOptions, PowOptions } from '../types';
import { Pow } from './pow';
export declare class Sqrt extends Pow<SqrtOptions & PowOptions> {
    protected getDefaultOptions(): {
        domain: number[];
        range: number[];
        nice: boolean;
        clamp: boolean;
        round: boolean;
        interpolate: import("../types").Interpolate<string | number>;
        tickMethod: import("../types").TickMethod<number>;
        tickCount: number;
        exponent: number;
    };
    constructor(options?: SqrtOptions);
    update(options?: SqrtOptions): void;
    clone(): Sqrt;
}
