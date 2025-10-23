import type { AsyncReturnType } from 'type-fest';
export declare type AnyAsyncFunction = (...arguments_: readonly any[]) => Promise<unknown | void>;
export declare type CacheStorage<KeyType, ValueType> = {
    has: (key: KeyType) => Promise<boolean> | boolean;
    get: (key: KeyType) => Promise<ValueType | undefined> | ValueType | undefined;
    set: (key: KeyType, value: ValueType) => Promise<unknown> | unknown;
    delete: (key: KeyType) => unknown;
    clear?: () => unknown;
};
export declare type Options<FunctionToMemoize extends AnyAsyncFunction, CacheKeyType> = {
    /**
    Determines the cache key for storing the result based on the function arguments. By default, __only the first argument is considered__ and it only works with [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

    A `cacheKey` function can return any type supported by `Map` (or whatever structure you use in the `cache` option).

    You can have it cache **all** the arguments by value with `JSON.stringify`, if they are compatible:

    ```
    import pMemoize from 'p-memoize';

    pMemoize(function_, {cacheKey: JSON.stringify});
    ```

    Or you can use a more full-featured serializer like [serialize-javascript](https://github.com/yahoo/serialize-javascript) to add support for `RegExp`, `Date` and so on.

    ```
    import pMemoize from 'p-memoize';
    import serializeJavascript from 'serialize-javascript';

    pMemoize(function_, {cacheKey: serializeJavascript});
    ```

    @default arguments_ => arguments_[0]
    @example arguments_ => JSON.stringify(arguments_)
    */
    readonly cacheKey?: (arguments_: Parameters<FunctionToMemoize>) => CacheKeyType;
    /**
    Use a different cache storage. Must implement the following methods: `.has(key)`, `.get(key)`, `.set(key, value)`, `.delete(key)`, and optionally `.clear()`. You could for example use a `WeakMap` instead or [`quick-lru`](https://github.com/sindresorhus/quick-lru) for a LRU cache. To disable caching so that only concurrent executions resolve with the same value, pass `false`.

    @default new Map()
    @example new WeakMap()
    */
    readonly cache?: CacheStorage<CacheKeyType, AsyncReturnType<FunctionToMemoize>> | false;
};
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import {setTimeout as delay} from 'node:timer/promises';
import pMemoize from 'p-memoize';
import got from 'got';

const memoizedGot = pMemoize(got);

await memoizedGot('https://sindresorhus.com');

// This call is cached
await memoizedGot('https://sindresorhus.com');

await delay(2000);

// This call is not cached as the cache has expired
await memoizedGot('https://sindresorhus.com');
```
*/
export default function pMemoize<FunctionToMemoize extends AnyAsyncFunction, CacheKeyType>(fn: FunctionToMemoize, { cacheKey, cache, }?: Options<FunctionToMemoize, CacheKeyType>): FunctionToMemoize;
/**
- Only class methods and getters/setters can be memoized, not regular functions (they aren't part of the proposal);
- Only [TypeScript’s decorators](https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators) are supported, not [Babel’s](https://babeljs.io/docs/en/babel-plugin-proposal-decorators), which use a different version of the proposal;
- Being an experimental feature, they need to be enabled with `--experimentalDecorators`; follow TypeScript’s docs.

@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.

@example
```
import {pMemoizeDecorator} from 'p-memoize';

class Example {
    index = 0

    @pMemoizeDecorator()
    async counter() {
        return ++this.index;
    }
}

class ExampleWithOptions {
    index = 0

    @pMemoizeDecorator()
    async counter() {
        return ++this.index;
    }
}
```
*/
export declare function pMemoizeDecorator<FunctionToMemoize extends AnyAsyncFunction, CacheKeyType>(options?: Options<FunctionToMemoize, CacheKeyType>): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/
export declare function pMemoizeClear(fn: AnyAsyncFunction): void;
