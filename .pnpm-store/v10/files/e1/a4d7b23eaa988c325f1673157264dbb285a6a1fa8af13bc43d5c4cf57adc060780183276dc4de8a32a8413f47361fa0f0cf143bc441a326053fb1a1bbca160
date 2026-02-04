import mimicFn from 'mimic-fn';
const cacheStore = new WeakMap();
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
export default function pMemoize(fn, { cacheKey = ([firstArgument]) => firstArgument, cache = new Map(), } = {}) {
    // Promise objects can't be serialized so we keep track of them internally and only provide their resolved values to `cache`
    // `Promise<AsyncReturnType<FunctionToMemoize>>` is used instead of `ReturnType<FunctionToMemoize>` because promise properties are not kept
    const promiseCache = new Map();
    const memoized = function (...arguments_) {
        const key = cacheKey(arguments_);
        if (promiseCache.has(key)) {
            return promiseCache.get(key);
        }
        const promise = (async () => {
            try {
                if (cache && await cache.has(key)) {
                    return (await cache.get(key));
                }
                const promise = fn.apply(this, arguments_);
                const result = await promise;
                try {
                    return result;
                }
                finally {
                    if (cache) {
                        await cache.set(key, result);
                    }
                }
            }
            finally {
                promiseCache.delete(key);
            }
        })();
        promiseCache.set(key, promise);
        return promise;
    };
    mimicFn(memoized, fn, {
        ignoreNonConfigurable: true,
    });
    cacheStore.set(memoized, cache);
    return memoized;
}
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
export function pMemoizeDecorator(options = {}) {
    const instanceMap = new WeakMap();
    return (target, propertyKey, descriptor) => {
        const input = target[propertyKey]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        if (typeof input !== 'function') {
            throw new TypeError('The decorated value must be a function');
        }
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function () {
            if (!instanceMap.has(this)) {
                const value = pMemoize(input, options);
                instanceMap.set(this, value);
                return value;
            }
            return instanceMap.get(this);
        };
    };
}
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/
export function pMemoizeClear(fn) {
    if (!cacheStore.has(fn)) {
        throw new TypeError('Can\'t clear a function that was not memoized!');
    }
    const cache = cacheStore.get(fn);
    if (!cache) {
        throw new TypeError('Can\'t clear a function that doesn\'t use a cache!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\'t be cleared!');
    }
    cache.clear();
}
