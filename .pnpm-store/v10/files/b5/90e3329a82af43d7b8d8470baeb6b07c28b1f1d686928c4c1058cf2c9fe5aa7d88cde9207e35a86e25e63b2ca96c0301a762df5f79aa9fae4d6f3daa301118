# workerize-transferable

[![Build Status](https://travis-ci.com/naoak/workerize-transferable.svg?branch=master)](https://travis-ci.com/naoak/workerize-transferable)

> Helper functions for workerlize-loader to support transferables.

## Install

```sh
npm i -D workerize-loader
npm i -S @naoak/workerize-transferable
```

### Usage

**worker.js**:

```js
import { setupTransferableMethodsOnWorker } from "@naoak/workerize-transferable";

export function increment(buffer) {
  buffer[0] += 1;
  return buffer;
}

setupTransferableMethodsOnWorker({
  // the name of function which use some transferables
  increment: {
    // specify an instance of the function
    fn: increment,
    // pick a transferable object from the result which is an instance of Int32Array
    pickTransferablesFromResult: (result) => [result.buffer],
  },
});
```

**index.js**:

```js
import worker from "workerize-loader!./worker";
import { setupTransferableMethodsOnMain } from "@naoak/workerize-transferable";

let instance = worker(); // `new` is optional

setupTransferableMethodsOnMain({
  // worker instance
  instance,
  // the name of method which use some transferables
  increment: {
    // pick a transferable object from the method parameters
    pickTransferablesFromParams: (params) => [params[0].buffer],
  },
});

(async () => {
  const buffer = new Int32Array([0]);
  const res = await instance.increment(await instance.increment(buffer));
  console.log(buffer.length); // 0
  console.log(res.length); // 1
  console.log(res[0]); // 2
})();
```

See [workerize-loader](https://github.com/developit/workerize-loader) for details how to setup workerize-loader.
