type Adapter<T> = (options: T, ...rest: any[]) => T;
/**
 * Adaptor return default options for raw options.
 */
export declare function useDefaultAdaptor<T>(adaptor: Adapter<T>): Adapter<T>;
/**
 * Adaptor return options override raw options.
 */
export declare function useOverrideAdaptor<T>(adaptor: Adapter<T>): Adapter<T>;
export declare function isObject(d: any): boolean;
export declare function mergeData(dataDescriptor: any[] | {
    value: any;
    [key: string]: any;
}, dataValue: any[]): any[] | {
    [key: string]: any;
    value: any;
};
export {};
