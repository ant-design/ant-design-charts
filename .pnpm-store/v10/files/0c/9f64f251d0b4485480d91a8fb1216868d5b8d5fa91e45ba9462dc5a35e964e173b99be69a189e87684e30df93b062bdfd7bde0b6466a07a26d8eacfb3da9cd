# flru [![Build Status](https://travis-ci.org/lukeed/flru.svg?branch=master)](https://travis-ci.org/lukeed/flru)

> A tiny (215B) and fast Least Recently Used (LRU) cache

Internally, two caches are kept. This is because it's far more performant to swap (and maintain) dictionaries than it is to `delete`/purge keys on every read/write interaction. Because of this, `flru` will store `2n` items in memory, where `n` is the [`max`](#max) limit. In practice, this means that with `max=3` and items `(a, b, c)` already written, writing a `d` value ***will not*** automatically purge the `a` key. Instead, `a` _can_ be retrieved, which would move it to the "active" cache. It's only when this "active" half exceeds the `max` that the "stale" half is purged.

> See [Usage](#Usage) for a visual explanation~!

This implementation is optimized for all-around performance – reads, writes, updates, and evictions.


This module is available in three formats:

* **ES Module**: `dist/flru.mjs`
* **CommonJS**: `dist/flru.js`
* **UMD**: `dist/flru.min.js`


## Install

```
$ npm install --save flru
```


## Usage

```js
// Legend:
//    S => the stale cache
//    A => the active cache

const flru = require('flru');

let cache = flru(3); // A=[]        S=[]

cache.set('a', 1);   // A=[a]       S=[]
cache.set('b', 2);   // A=[a,b]     S=[]
cache.set('b', 9);   // A=[a,b]     S=[]
cache.set('c', 3);   // A=[a,b,c]   S=[]

cache.has('a'); //=> true

cache.set('d', 4);   // A=[d]       S=[a,b,c]
cache.get('a');      // A=[d,a]     S=[a,b,c]
cache.set('e', 5);   // A=[d,a,e]   S=[a,b,c]
cache.get('a');      // A=[d,a,e]   S=[a,b,c]
cache.get('c');      // A=[c]       S=[d,a,e]

cache.has('c'); //=> true
cache.has('b'); //=> false
cache.has('a'); //=> true

cache.clear();       // A=[]      S=[]
```


## API

### flru(max)
return `Object`

Initialize a new `flru` cache instance.

#### max
Required: `true`<br>
Type: `Number`<br>
Default: `1`

The maximum number of items to maintain – must be a positive, non-zero integer!

> **Important:** The default value is pointless and will result in excessive computation. It's there only to avoid memory leak!


### flru.has(key)
Return: `Boolean`

Check if the cache has the given key.

#### key
Type: `String`

The key name to check.


### flru.get(key)
Return: `Mixed`

Get the assigned value for a given key. Will return `undefined` if the cache has evicted `key` or never contained it.

#### key
Type: `String`

The item's unique name / identifier.


### flru.set(key, value)
Return: `undefined`

Persist an item to the cache by a given `key` name.

#### key
Type: `String`

The item's unique name / identifier.

#### value
Type: `Mixed`

The item's value to be cached.


### flru.clear(keepOld)
Return: `undefined`

Reset the cache(s) and counter.

#### keepOld
Type: `Boolean`<br>
Default: `false`

When `true`, preserves the stale/outgoing cache.

> **Important:** This is used internally & generally should be ignored!


## Benchmarks

You can find benchmarks in the [`bench`]() directory. They are setup to run one library at a time so that there's no cross-contamination of memory management or Node's runtime caching.

* `set` – writing values into _new_ keys
* `update` – updating values into _existing_ keys
* `evict` – writing `2 * limit` keys to the cache, forcing eviction

> Results below are with Node v10.13.0

```
# set()
flru       x 45,261 ops/sec ±1.63% (94 runs sampled)
lru-cache  x 14,240 ops/sec ±5.70% (85 runs sampled)
tmp-cache  x  8,229 ops/sec ±3.06% (83 runs sampled)
tiny-lru   x 24,415 ops/sec ±2.48% (91 runs sampled)

# get()
flru       x 78,585 ops/sec ±1.70% (98 runs sampled)
lru-cache  x 27,409 ops/sec ±2.64% (93 runs sampled)
tmp-cache  x  6,229 ops/sec ±1.06% (87 runs sampled)
tiny-lru   x 20,313 ops/sec ±2.01% (96 runs sampled)

# has()
flru       x  79,843 ops/sec ±1.35% (97 runs sampled)
lru-cache  x  31,354 ops/sec ±2.87% (90 runs sampled)
tmp-cache  x 813,828 ops/sec ±64.67% (95 runs sampled)
tiny-lru   x 128,250 ops/sec ±3.73% (93 runs sampled)

# update()
flru       x 44,885 ops/sec ±1.86% (95 runs sampled)
lru-cache  x 15,616 ops/sec ±2.46% (94 runs sampled)
tmp-cache  x  8,529 ops/sec ±0.85% (87 runs sampled)
tiny-lru   x 23,060 ops/sec ±2.72% (93 runs sampled)

# evict()
flru       x 8,258 ops/sec ±1.48% (88 runs sampled)
lru-cache  x 1,492 ops/sec ±2.60% (77 runs sampled)
tmp-cache  x   836 ops/sec ±0.59% (95 runs sampled)
tiny-lru   x 2,626 ops/sec ±2.61% (81 runs sampled)
```


## Related

- [tmp-cache](https://github.com/lukeed/tmp-cache) - Full-featured (but slower) alternative, supporting time-sensitive expirations.
- [`tiny-lru`](https://github.com/avoidwork/tiny-lru) - Same as `tmp-cache` but significantly faster.


## License

MIT © [Luke Edwards](https://lukeed.com)
