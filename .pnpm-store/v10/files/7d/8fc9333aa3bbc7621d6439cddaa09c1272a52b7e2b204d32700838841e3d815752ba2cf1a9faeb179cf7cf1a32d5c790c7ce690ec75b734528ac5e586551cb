type Func = (...args: any[]) => any;
export interface Cache<K, V> {
    create: CacheCreateFunc<K, V>;
}
interface CacheCreateFunc<K, V> {
    (): DefaultCache<K, V>;
}
interface DefaultCache<K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V | undefined): void;
}
export type Serializer = (args: any[]) => string;
export interface Options<F extends Func> {
    cache?: Cache<string, ReturnType<F>>;
    serializer?: Serializer;
    strategy?: MemoizeFunc<F>;
}
export interface ResolvedOptions<F extends Func> {
    cache: Cache<string, ReturnType<F>>;
    serializer: Serializer;
}
export interface MemoizeFunc<F extends Func> {
    (fn: F, options?: Options<F>): F;
}
export declare function memoize<F extends Func>(fn: F, options?: Options<F>): F | ((arg: any) => any);
export type StrategyFn = <F extends Func>(this: unknown, fn: F, cache: DefaultCache<string, ReturnType<F>>, serializer: Serializer, arg: any) => any;
export interface Strategies<F extends Func> {
    variadic: MemoizeFunc<F>;
    monadic: MemoizeFunc<F>;
}
export declare const strategies: Strategies<Func>;
export {};
