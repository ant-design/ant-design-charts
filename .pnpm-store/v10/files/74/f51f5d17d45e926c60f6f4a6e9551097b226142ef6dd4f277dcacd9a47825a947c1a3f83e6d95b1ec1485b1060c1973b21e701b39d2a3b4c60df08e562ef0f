/**
 * Calls a defined callback function on each key:value of a object,
 * and returns a object contains the result.
 */
export declare function mapObject<T, U>(object: Record<string, T>, callbackfn: (value: T, key?: string, object?: Record<string, T>) => U): Record<string, U>;
export declare function indexOf<T>(array: T[]): number[];
/**
 * @example [[1, 2, 3], ['a', 'b', 'c']] => [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export declare function transpose<T>(matrix: T[][]): T[][];
export declare function firstOf<T>(array: T[]): T;
export declare function lastOf<T>(array: T[]): T;
export declare function isFlatArray<T>(array: (T | T[])[]): array is T[];
export declare function unique<T>(array: T[]): T[];
export declare function divide<T>(array: T[], callbackfn: (item: T) => boolean): [T[], T[]];
/**
 * get all combinations of two elements in an array
 * @example [1, 2, 3] => [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
 * @param array
 * @returns
 */
export declare function combine<T>(array: T[]): T[][];
