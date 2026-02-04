type PrimitiveInterpolatable = number;
export type Interpolatable = number | {
    [key: string]: PrimitiveInterpolatable;
} | PrimitiveInterpolatable[];
export type Interpolate<T extends Interpolatable = any> = (t: number) => T;
export type Interpolator<T extends Interpolatable = any> = (from: T, to: T) => Interpolate<T>;
export declare const numberInterpolate: Interpolator<number>;
export declare function arrayInterpolate(from: PrimitiveInterpolatable[], to: PrimitiveInterpolatable[]): Interpolate<PrimitiveInterpolatable[]>;
export declare function objectInterpolate(from?: {
    [keys: string]: PrimitiveInterpolatable;
}, to?: {
    [keys: string]: PrimitiveInterpolatable;
}): (t: PrimitiveInterpolatable) => {
    [keys: string]: number;
};
export declare function interpolate<T extends Interpolatable>(from: T, to: T): Interpolate<T>;
export {};
