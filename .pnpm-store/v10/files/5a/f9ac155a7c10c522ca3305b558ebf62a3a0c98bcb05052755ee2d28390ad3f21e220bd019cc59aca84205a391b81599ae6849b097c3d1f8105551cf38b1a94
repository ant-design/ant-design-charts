type Config = Parameters<(Window extends {
    __REDUX_DEVTOOLS_EXTENSION__?: infer T;
} ? T : {
    connect: (param: any) => any;
})['connect']>[0];
type Options = {
    enabled?: boolean;
    name?: string;
} & Config;
export declare function devtools<T extends object>(proxyObject: T, options?: Options): (() => void) | undefined;
/**
 * @deprecated Please use { name } option
 */
export declare function devtools<T extends object>(proxyObject: T, name?: string): (() => void) | undefined;
export {};
declare type Awaited<T> = T extends Promise<infer V> ? V : T;