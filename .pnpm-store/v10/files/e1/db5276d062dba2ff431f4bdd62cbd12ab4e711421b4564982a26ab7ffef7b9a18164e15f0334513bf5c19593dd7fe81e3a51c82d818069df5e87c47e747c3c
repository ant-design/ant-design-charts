# Multimap - Map which Allow Multiple Values for the same Key

[![NPM version](https://badge.fury.io/js/multimap.svg)](http://badge.fury.io/js/multimap)
[![Build Status](https://travis-ci.org/villadora/multi-map.png?branch=master)](https://travis-ci.org/villadora/multi-map)

## Install

```bash
npm install multimap --save
```

## Usage


If you'd like to use native version when it exists and fallback to polyfill if it doesn't, but without implementing `Map` on global scope, do:

```javascript
var Multimap = require('multimap');
var m = new Multimap();
```

If the global es6 `Map` exists or `Multimap.Map` is set, `Multimap` will use the `Map` as inner store, that means Object can be used as key.

```javascript
var Multimap = require('multimap');

// if harmony is on
/* nothing need to do */
// or if you are using es6-shim
Multimap.Map = ShimMap;

var m = new Multimap();
var key = {};
m.set(key, 'one');

```

Otherwise, an object will be used, all the keys will be transformed into string.


### In Modern Browser

Just download the `index.js` as `Multimap.js`.

```
<script src=Multimap.js"></script>
<script>
var map = new Multimap([['a', 1], ['b', 2], ['c', 3]]);
map = map.set('b', 20);
map.get('b'); // [2, 20]
</script>
```

Or use as an AMD loader:

```
require(['./Multimap.js'], function (Multimap) {
  var map = new Multimap([['a', 1], ['b', 2], ['c', 3]]);
  map = map.set('b', 20);
  map.get('b'); // [2, 20]
});
```

* Browsers should support `Object.defineProperty` and `Array.prototype.forEach`.


## API

Following shows how to use `Multimap`:

```javascript
var Multimap = require('multimap');

var map = new Multimap([['a', 'one'], ['b', 1], ['a', 'two'], ['b', 2]]);

map.size;                 // 4
map.count;                // 2

map.get('a');             // ['one', 'two']
map.get('b');             // [1, 2]

map.has('a');             // true
map.has('foo');           // false

map.has('a', 'one');      // true
map.has('b', 3);          // false

map.set('a', 'three');
map.size;                 // 5
map.count;                // 2
map.get('a');             // ['one', 'two', 'three']

map.set('b', 3, 4);
map.size;                 // 7
map.count;                // 2

map.delete('a', 'three'); // true
map.delete('x');          // false
map.delete('a', 'four');  // false
map.delete('b');          // true

map.size;                 // 2
map.count;                // 1

map.set('b', 1, 2);
map.size;                 // 4
map.count;                // 2


map.forEach(function (value, key) {
  // iterates { 'one', 'a' }, { 'two', 'a' }, { 1, b }, { 2, 'b' }
});

map.forEachEntry(function (entry, key) {
  // iterates {['one', 'two'], 'a' }, {[1, 2], 'b' }
});


var keys = map.keys();      // iterator with ['a', 'b']
keys.next().value;          // 'a'
var values = map.values();  // iterator ['one', 'two', 1, 2]

map.clear();                // undefined
map.size;                   // 0
map.count;                  // 0
```




## License

(The MIT License)

Copyright (c) 2013, Villa.Gao <jky239@gmail.com>;
All rights reserved.
