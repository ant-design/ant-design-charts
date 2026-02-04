import react, { FC, PropsWithChildren } from 'react';

declare const FOCUS_EVENT = 0;
declare const RECONNECT_EVENT = 1;
declare const MUTATE_EVENT = 2;
declare const ERROR_REVALIDATE_EVENT = 3;

declare const events_ERROR_REVALIDATE_EVENT: typeof ERROR_REVALIDATE_EVENT;
declare const events_FOCUS_EVENT: typeof FOCUS_EVENT;
declare const events_MUTATE_EVENT: typeof MUTATE_EVENT;
declare const events_RECONNECT_EVENT: typeof RECONNECT_EVENT;
declare namespace events {
  export { events_ERROR_REVALIDATE_EVENT as ERROR_REVALIDATE_EVENT, events_FOCUS_EVENT as FOCUS_EVENT, events_MUTATE_EVENT as MUTATE_EVENT, events_RECONNECT_EVENT as RECONNECT_EVENT };
}

type GlobalState = [
    Record<string, RevalidateCallback[]>,
    Record<string, [number, number]>,
    Record<string, [any, number]>,
    Record<string, FetcherResponse<any>>,
    ScopedMutator,
    (key: string, value: any, prev: any) => void,
    (key: string, callback: (current: any, prev: any) => void) => () => void
];
type FetcherResponse<Data = unknown> = Data | Promise<Data>;
type BareFetcher<Data = unknown> = (...args: any[]) => FetcherResponse<Data>;
type Fetcher<Data = unknown, SWRKey extends Key = Key> = SWRKey extends () => infer Arg | null | undefined | false ? (arg: Arg) => FetcherResponse<Data> : SWRKey extends null | undefined | false ? never : SWRKey extends infer Arg ? (arg: Arg) => FetcherResponse<Data> : never;
type ReactUsePromise<T = unknown, Error = unknown> = Promise<any> & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: T;
    reason?: Error;
};
type BlockingData<Data = any, Options = SWROptions<Data>> = Options extends undefined ? false : Options extends {
    suspense: true;
} ? true : Options extends {
    fallbackData: Data;
} ? true : false;
interface InternalConfiguration {
    cache: Cache;
    mutate: ScopedMutator;
}
/**
 * @link https://swr.vercel.app/docs/options
 */
interface PublicConfiguration<Data = any, Error = any, Fn extends Fetcher = BareFetcher> {
    /**
     *  error retry interval in milliseconds
     *  @defaultValue 5000
     */
    errorRetryInterval: number;
    /** max error retry count */
    errorRetryCount?: number;
    /**
     * timeout to trigger the onLoadingSlow event in milliseconds
     * @defaultValue 3000
     */
    loadingTimeout: number;
    /**
     * only revalidate once during a time span in milliseconds
     * @defaultValue 5000
     */
    focusThrottleInterval: number;
    /**
     * dedupe requests with the same key in this time span in milliseconds
     * @defaultValue 2000
     */
    dedupingInterval: number;
    /**
     *  @link https://swr.vercel.app/docs/revalidation
     *  * Disabled by default: `refreshInterval = 0`
     *  * If set to a number, polling interval in milliseconds
     *  * If set to a function, the function will receive the latest data and should return the interval in milliseconds
     */
    refreshInterval?: number | ((latestData: Data | undefined) => number);
    /**
     * polling when the window is invisible (if `refreshInterval` is enabled)
     * @defaultValue false
     *
     */
    refreshWhenHidden?: boolean;
    /**
     * polling when the browser is offline (determined by `navigator.onLine`)
     */
    refreshWhenOffline?: boolean;
    /**
     * automatically revalidate when window gets focused
     * @defaultValue true
     * @link https://swr.vercel.app/docs/revalidation
     */
    revalidateOnFocus: boolean;
    /**
     * automatically revalidate when the browser regains a network connection (via `navigator.onLine`)
     * @defaultValue true
     * @link https://swr.vercel.app/docs/revalidation
     */
    revalidateOnReconnect: boolean;
    /**
     * enable or disable automatic revalidation when component is mounted
     */
    revalidateOnMount?: boolean;
    /**
     * automatically revalidate even if there is stale data
     * @defaultValue true
     * @link https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
     */
    revalidateIfStale: boolean;
    /**
     * retry when fetcher has an error
     * @defaultValue true
     */
    shouldRetryOnError: boolean | ((err: Error) => boolean);
    /**
     * keep the previous result when key is changed but data is not ready
     * @defaultValue false
     */
    keepPreviousData?: boolean;
    /**
     * @experimental  enable React Suspense mode
     * @defaultValue false
     * @link https://swr.vercel.app/docs/suspense
     */
    suspense?: boolean;
    /**
     * initial data to be returned (note: ***This is per-hook***)
     */
    fallbackData?: Data;
    /**
     * the fetcher function
     */
    fetcher?: Fn;
    /**
     * array of middleware functions
     * @link https://swr.vercel.app/docs/middleware
     */
    use?: Middleware[];
    /**
     * a key-value object of multiple fallback data
     * @link https://swr.vercel.app/docs/with-nextjs#pre-rendering-with-default-data
     */
    fallback: {
        [key: string]: any;
    };
    /**
     * function to detect whether pause revalidations, will ignore fetched data and errors when it returns true. Returns false by default.
     */
    isPaused: () => boolean;
    /**
     * callback function when a request takes too long to load (see `loadingTimeout`)
     */
    onLoadingSlow: (key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;
    /**
     * callback function when a request finishes successfully
     */
    onSuccess: (data: Data, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;
    /**
     * callback function when a request returns an error
     */
    onError: (err: Error, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;
    /**
     * handler for error retry
     */
    onErrorRetry: (err: Error, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>, revalidate: Revalidator, revalidateOpts: Required<RevalidatorOptions>) => void;
    /**
     * callback function when a request is ignored
     */
    onDiscarded: (key: string) => void;
    /**
     * comparison function used to detect when returned data has changed, to avoid spurious rerenders. By default, [stable-hash](https://github.com/shuding/stable-hash) is used.
     */
    compare: (a: Data | undefined, b: Data | undefined) => boolean;
    /**
     * isOnline and isVisible are functions that return a boolean, to determine if the application is "active". By default, SWR will bail out a revalidation if these conditions are not met.
     * @link https://swr.vercel.app/docs/advanced/react-native#customize-focus-and-reconnect-events
     */
    isOnline: () => boolean;
    /**
     * isOnline and isVisible are functions that return a boolean, to determine if the application is "active". By default, SWR will bail out a revalidation if these conditions are not met.
     * @link https://swr.vercel.app/docs/advanced/react-native#customize-focus-and-reconnect-events
     */
    isVisible: () => boolean;
}
type FullConfiguration<Data = any, Error = any, Fn extends Fetcher = BareFetcher> = InternalConfiguration & PublicConfiguration<Data, Error, Fn>;
type ProviderConfiguration = {
    initFocus: (callback: () => void) => (() => void) | void;
    initReconnect: (callback: () => void) => (() => void) | void;
};
/**
 * @example
 * ```ts
 * const { data, error } = useSWR(key, fetcher)
 * ```
 */
interface SWRHook {
    <Data = any, Error = any, SWRKey extends Key = StrictKey>(key: SWRKey): SWRResponse<Data, Error>;
    <Data = any, Error = any, SWRKey extends Key = StrictKey>(key: SWRKey, fetcher: Fetcher<Data, SWRKey> | null): SWRResponse<Data, Error>;
    <Data = any, Error = any, SWRKey extends Key = Key>(key: SWRKey, fetcher: Fetcher<Data, SWRKey> | null): SWRResponse<Data, Error>;
    <Data = any, Error = any, SWRKey extends Key = StrictKey, SWROptions extends SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined = SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined>(key: SWRKey, config: SWROptions): SWRResponse<Data, Error, SWROptions>;
    <Data = any, Error = any, SWRKey extends Key = StrictKey, SWROptions extends SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined = SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined>(key: SWRKey, fetcher: Fetcher<Data, SWRKey> | null, config: SWROptions): SWRResponse<Data, Error, SWROptions>;
    <Data = any, Error = any>(key: Key): SWRResponse<Data, Error>;
    <Data = any, Error = any, SWROptions extends SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined = SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined>(key: Key, config: SWROptions): SWRResponse<Data, Error, SWROptions>;
    <Data = any, Error = any, SWROptions extends SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined = SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined>(key: Key, fetcher: BareFetcher<Data> | null, config: SWROptions): SWRResponse<Data, Error, SWROptions>;
}
type Middleware = (useSWRNext: SWRHook) => <Data = any, Error = any>(key: Key, fetcher: BareFetcher<Data> | null, config: SWRConfiguration<Data, Error, BareFetcher<Data>>) => SWRResponse<Data, Error>;
type ArgumentsTuple = readonly [any, ...unknown[]];
type Arguments = string | ArgumentsTuple | Record<any, any> | null | undefined | false;
type Key = Arguments | (() => Arguments);
type StrictTupleKey = ArgumentsTuple | null | undefined | false;
type StrictKey = StrictTupleKey | (() => StrictTupleKey);
type MutatorCallback<Data = any> = (currentData?: Data) => Promise<undefined | Data> | undefined | Data;
/**
 * @typeParam Data - The type of the data related to the key
 * @typeParam MutationData - The type of the data returned by the mutator
 */
type MutatorOptions<Data = any, MutationData = Data> = {
    revalidate?: boolean | ((data: Data, key: Arguments) => boolean);
    populateCache?: boolean | ((result: MutationData, currentData: Data | undefined) => Data);
    optimisticData?: Data | ((currentData: Data | undefined, displayedData: Data | undefined) => Data);
    rollbackOnError?: boolean | ((error: unknown) => boolean);
    throwOnError?: boolean;
};
type MutatorConfig = {
    revalidate?: boolean;
    populateCache?: boolean;
};
type Broadcaster<Data = any, Error = any> = (cache: Cache<Data>, key: string, data: Data, error?: Error, isValidating?: boolean, revalidate?: boolean, populateCache?: boolean) => Promise<Data>;
type State<Data = any, Error = any> = {
    data?: Data;
    error?: Error;
    isValidating?: boolean;
    isLoading?: boolean;
};
type MutatorFn<Data = any> = (cache: Cache, key: Key, data?: Data | Promise<Data> | MutatorCallback<Data>, opts?: boolean | MutatorOptions<Data>) => Promise<Data | undefined>;
type MutatorWrapper<Fn> = Fn extends (...args: [...infer Parameters]) => infer Result ? Parameters[3] extends boolean ? Result : Parameters[3] extends Required<Pick<MutatorOptions, 'populateCache'>> ? Parameters[3]['populateCache'] extends false ? never : Result : Result : never;
type Mutator<Data = any> = MutatorWrapper<MutatorFn<Data>>;
interface ScopedMutator {
    /**
     * @typeParam Data - The type of the data related to the key
     * @typeParam MutationData - The type of the data returned by the mutator
     */
    <Data = any, MutationData = Data>(matcher: (key?: Arguments) => boolean, data?: MutationData | Promise<MutationData> | MutatorCallback<MutationData>, opts?: boolean | MutatorOptions<Data, MutationData>): Promise<Array<MutationData | undefined>>;
    /**
     * @typeParam Data - The type of the data related to the key
     * @typeParam MutationData - The type of the data returned by the mutator
     */
    <Data = any, T = Data>(key: Arguments, data?: T | Promise<T> | MutatorCallback<T>, opts?: boolean | MutatorOptions<Data, T>): Promise<T | undefined>;
}
/**
 * @typeParam Data - The type of the data related to the key
 * @typeParam MutationData - The type of the data returned by the mutator
 */
type KeyedMutator<Data> = <MutationData = Data>(data?: Data | Promise<Data | undefined> | MutatorCallback<Data>, opts?: boolean | MutatorOptions<Data, MutationData>) => Promise<Data | MutationData | undefined>;
type SWRConfiguration<Data = any, Error = any, Fn extends BareFetcher<any> = BareFetcher<any>> = Partial<PublicConfiguration<Data, Error, Fn>> & Partial<ProviderConfiguration> & {
    provider?: (cache: Readonly<Cache>) => Cache;
};
type IsLoadingResponse<Data = any, Options = SWROptions<Data>> = Options extends {
    suspense: true;
} ? false : boolean;
type SWROptions<Data> = SWRConfiguration<Data, Error, Fetcher<Data, Key>>;
interface SWRResponse<Data = any, Error = any, Config = any> {
    /**
     * The returned data of the fetcher function.
     */
    data: BlockingData<Data, Config> extends true ? Data : Data | undefined;
    /**
     * The error object thrown by the fetcher function.
     */
    error: Error | undefined;
    mutate: KeyedMutator<Data>;
    isValidating: boolean;
    isLoading: IsLoadingResponse<Data, Config>;
}
type KeyLoader<Args extends Arguments = Arguments> = ((index: number, previousPageData: any | null) => Args) | null;
interface RevalidatorOptions {
    retryCount?: number;
    dedupe?: boolean;
}
type Revalidator = (revalidateOpts?: RevalidatorOptions) => Promise<boolean> | void;
type RevalidateEvent = typeof FOCUS_EVENT | typeof RECONNECT_EVENT | typeof MUTATE_EVENT | typeof ERROR_REVALIDATE_EVENT;
type RevalidateCallbackReturnType = {
    [FOCUS_EVENT]: void;
    [RECONNECT_EVENT]: void;
    [MUTATE_EVENT]: Promise<boolean>;
    [ERROR_REVALIDATE_EVENT]: void;
};
type RevalidateCallback = <K extends RevalidateEvent>(type: K, opts?: any) => RevalidateCallbackReturnType[K];
interface Cache<Data = any> {
    keys(): IterableIterator<string>;
    get(key: string): State<Data> | undefined;
    set(key: string, value: State<Data>): void;
    delete(key: string): void;
}
interface StateDependencies {
    data?: boolean;
    error?: boolean;
    isValidating?: boolean;
    isLoading?: boolean;
}

declare const SWRConfig: FC<PropsWithChildren<{
    value?: SWRConfiguration | ((parentConfig?: SWRConfiguration) => SWRConfiguration);
}>>;

declare const INFINITE_PREFIX = "$inf$";

declare const initCache: <Data = any>(provider: Cache<Data>, options?: Partial<ProviderConfiguration>) => [Cache<Data>, ScopedMutator, () => void, () => void] | [Cache<Data>, ScopedMutator] | undefined;

declare const compare: (currentData: any, newData: any) => boolean;
declare const cache: Cache<any>;
declare const mutate: ScopedMutator;

declare const defaultConfig: FullConfiguration;

declare const IS_REACT_LEGACY = false;
declare const IS_SERVER: boolean;
declare const rAF: (f: (...args: any[]) => void) => number | ReturnType<typeof setTimeout>;
declare const useIsomorphicLayoutEffect: typeof react.useEffect;
declare const slowConnection: boolean | undefined;

declare const SWRGlobalState: WeakMap<Cache<any>, GlobalState>;

declare const stableHash: (arg: any) => string;

declare const isWindowDefined: boolean;
declare const isDocumentDefined: boolean;
declare const hasRequestAnimationFrame: () => boolean;
declare const createCacheHelper: <Data = any, T = State<Data, any>>(cache: Cache, key: string | undefined) => readonly [() => T, (info: T) => void, (key: string, callback: (current: any, prev: any) => void) => () => void, () => any];

declare const noop: () => void;
declare const UNDEFINED: undefined;
declare const OBJECT: ObjectConstructor;
declare const isUndefined: (v: any) => v is undefined;
declare const isFunction: <T extends (...args: any[]) => any = (...args: any[]) => any>(v: unknown) => v is T;
declare const mergeObjects: (a: any, b?: any) => any;
declare const isPromiseLike: (x: unknown) => x is PromiseLike<unknown>;

declare const mergeConfigs: (a: Partial<FullConfiguration>, b?: Partial<FullConfiguration>) => Partial<FullConfiguration>;

type KeyFilter = (key?: Arguments) => boolean;
declare function internalMutate<Data>(cache: Cache, _key: KeyFilter, _data?: Data | Promise<Data | undefined> | MutatorCallback<Data>, _opts?: boolean | MutatorOptions<Data>): Promise<Array<Data | undefined>>;
declare function internalMutate<Data>(cache: Cache, _key: Arguments, _data?: Data | Promise<Data | undefined> | MutatorCallback<Data>, _opts?: boolean | MutatorOptions<Data>): Promise<Data | undefined>;

declare const normalize: <KeyType_1 = Key, Data = any>(args: [KeyType_1] | [KeyType_1, Fetcher<Data> | null] | [KeyType_1, SWRConfiguration | undefined] | [KeyType_1, Fetcher<Data> | null, SWRConfiguration | undefined]) => [KeyType_1, Fetcher<Data> | null, Partial<SWRConfiguration<Data>>];

declare const withArgs: <SWRType>(hook: any) => SWRType;

declare const serialize: (key: Key) => [string, Arguments];

type Callback = (...args: any[]) => any;
declare const subscribeCallback: (key: string, callbacks: Record<string, Callback[]>, callback: Callback) => () => void;

declare const getTimestamp: () => number;

declare const useSWRConfig: () => FullConfiguration;

declare const preset: {
    readonly isOnline: () => boolean;
    readonly isVisible: () => boolean;
};
declare const defaultConfigOptions: ProviderConfiguration;

declare const withMiddleware: (useSWR: SWRHook, middleware: Middleware) => SWRHook;

type PreloadFetcher<Data = unknown, SWRKey extends Key = Key> = SWRKey extends () => infer Arg ? (arg: Arg) => FetcherResponse<Data> : SWRKey extends infer Arg ? (arg: Arg) => FetcherResponse<Data> : never;
declare const preload: <Data = any, SWRKey extends Key = Key, Fetcher extends BareFetcher = PreloadFetcher<Data, SWRKey>>(key_: SWRKey, fetcher: Fetcher) => ReturnType<Fetcher>;

export { type Arguments, type BareFetcher, type BlockingData, type Broadcaster, type Cache, type Fetcher, type FetcherResponse, type FullConfiguration, type GlobalState, INFINITE_PREFIX, IS_REACT_LEGACY, IS_SERVER, type InternalConfiguration, type IsLoadingResponse, type Key, type KeyLoader, type KeyedMutator, type Middleware, type Mutator, type MutatorCallback, type MutatorConfig, type MutatorFn, type MutatorOptions, type MutatorWrapper, OBJECT, type ProviderConfiguration, type PublicConfiguration, type ReactUsePromise, type RevalidateCallback, type RevalidateEvent, type Revalidator, type RevalidatorOptions, SWRConfig, type SWRConfiguration, SWRGlobalState, type SWRHook, type SWRResponse, type ScopedMutator, type State, type StateDependencies, type StrictTupleKey, UNDEFINED, cache, compare, createCacheHelper, defaultConfig, defaultConfigOptions, getTimestamp, hasRequestAnimationFrame, initCache, internalMutate, isDocumentDefined, isFunction, isPromiseLike, isUndefined, isWindowDefined, mergeConfigs, mergeObjects, mutate, noop, normalize, preload, preset, rAF, events as revalidateEvents, serialize, slowConnection, stableHash, subscribeCallback, useIsomorphicLayoutEffect, useSWRConfig, withArgs, withMiddleware };
