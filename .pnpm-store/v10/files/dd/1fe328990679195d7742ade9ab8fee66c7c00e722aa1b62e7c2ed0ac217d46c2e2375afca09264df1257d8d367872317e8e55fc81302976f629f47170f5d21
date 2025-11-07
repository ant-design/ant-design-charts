# localstorage-memory

> localStorage-compatible API, but only stored in memory

[![Build Status](https://travis-ci.org/gr2m/localstorage-memory.png?branch=master)](https://travis-ci.org/gr2m/localstorage-memory/)

`localStorageMemory` provides all methods that `localStorage` in browsers
provides, but no data is persisted, it's only stored in memory. It can
be used as a drop-in replacement, the only exception being the
Associative array syntax `localStorage['myKey'] = 'myValue'`.


## Download or Installation

- Download [localstorage-memory.js](https://raw.githubusercontent.com/gr2m/localstorage-memory/master/lib/localstorage-memory.js)
- or: install via Bower: `bower install --save localstorage-memory`
- or: install via npm: `npm install --save localstorage-memory`


## Usage

```js
localStorageMemory.getItem('unknown') // null
localStorageMemory.setItem('foo', 123)
localStorageMemory.getItem('foo') // "123"
localStorageMemory.length // 1
localStorageMemory.key(0) // "foo"
localStorageMemory.clear()
localStorageMemory.length // 0
```


# Related

- https://github.com/lmaccherone/node-localstorage
  provides a `localStorage` API, with data being persisted at provide path

## License

MIT
