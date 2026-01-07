declare namespace mlArrayRescale {
  export interface ArrayRescaleOptions<T extends ArrayLike<number>> {
    /**
     * @default 0
     */
    min?: number;
    /**
     * @default 1
     */
    max?: number;
    /**
     * If `true` and min or max is undefined take the min or max from input array.
     * @default false
     */
    autoMinMax?: boolean;
    /**
     * Specify the output array. Can be the input array for in place modification.
     */
    output?: T;
  }
}

/**
 * Rescale an array into a range.
 */
declare function mlArrayRescale<T extends ArrayLike<number>>(
  array: T,
  options?: mlArrayRescale.ArrayRescaleOptions<T>,
): number[];

export = mlArrayRescale;
