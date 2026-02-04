# promise-timeout

A super-simple way to put a timeout on promise resolution.

It assumes you already have either platform support for promises (Node 0.12 or
greater), or you have a polyfill (see [es6-promise][]).

## Installation

```bash
$ npm install promise-timeout
```

## Usage

### timeout(promise, timeoutMillis)

Rejects a promise with a `TimeoutError` if it does not settle within the
specified timeout. Parameters:

 * `promise: Promise` - Promise to monitor.
 * `timeoutMillis: number` - Number of milliseconds to wait on settling.

## TimeoutError

Exception indicating that the timeout expired.

## Examples

ES2015:

```javascript
import { timeout, TimeoutError } from 'promise-timeout';

let somePromise = goDoSomething();

timeout(somePromise, 1000)
  .then((thing) => console.log('I did a thing!'))
  .catch((err) => {
    if (err instanceof TimeoutError) {
      console.error('Timeout :-(');
    }
  });
```

ES5:

```javascript
'use strict';

var pt = require('promise-timeout');

var somePromise = goDoSomething();

pt.timeout(somePromise, 1000)
  .then(function (thing) {
    console.log('I did a thing!');
  }).catch(function (err) {
    if (err instanceof pt.TimeoutError) {
      console.error('Timeout :-(');
    }
  });
```

 [es6-promise]: https://www.npmjs.com/package/es6-promise
