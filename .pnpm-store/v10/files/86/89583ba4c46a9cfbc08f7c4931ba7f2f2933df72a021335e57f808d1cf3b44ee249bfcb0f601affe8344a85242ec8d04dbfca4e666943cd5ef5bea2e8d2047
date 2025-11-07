# Stubborn Utils

A small collection of utilities for making functions somewhat resilient against errors.

## Install

```sh
npm install stubborn-utils
```

## Usage

#### `attemptifyAsync`

This function wraps an async function, and in case this wrapped function rejects then the error is automatically caught by the `onError` callback.

```ts
import {attemptifyAsync} from 'stubborn-utils';

// Let's create a wrapped function

const asyncFunction = async () => {
  await someAsyncThing ();
  if ( Math.random () > 0.5 ) {
    throw new Error ( 'Unlucky' );
  } else {
    return 123;
  }
};

const attemptifiedAsyncFunction = attemptifyAsync ( asyncFunction, {
  onError: error => {
    return -1;
  }
});

const result = attemptifiedAsyncFunction (); // => Promise<123 | -1>
```

#### `attemptifySync`

This function wraps a sync function, and in case this wrapped function throws then the error is automatically caught by the `onError` callback.

```ts
import {attemptifySync} from 'stubborn-utils';

// Let's create a wrapped function

const syncFunction = () => {
  if ( Math.random () > 0.5 ) {
    throw new Error ( 'Unlucky' );
  } else {
    return 123;
  }
};

const attemptifiedSyncFunction = attemptifySync ( syncFunction, {
  onError: error => {
    return -1;
  }
});

const result = attemptifiedSyncFunction (); // => 123 | -1
```

#### `retryifyAsync`

This function wraps an async function, and in case this wrapped function rejects then the `isRetriable` callback is called to decide if we should retry calling the function again.

There's also another layer of options before you can actually call the retryified function, that allows you to provide a maximum `timeout` for the retry loop, and an optional `interval` that should approximately pass between retries.

Before the function is retried again a random amount of milliseconds between `0` and `interval` will be waited for.

By default `interval` would be set to `250`.

```ts
import {retryifyAsync} from 'stubborn-utils';

// Let's create a wrapped function

const asyncFunction = async () => {
  await someAsyncThing ();
  if ( Math.random () > 0.5 ) {
    throw new Error ( 'Unlucky' );
  } else {
    return 123;
  }
};

const retryifiedAsyncFunction = retryifyAsync ( asyncFunction, {
  isRetriable: error => {
    return true; // Always retriablein this scenario
  }
});

const result = retryifiedAsyncFunction ({
  timeout: 1_000,
  interval: 100
}); // => Promise<123 | -1>, but Promise<123> with much higher probability
```

#### `retryifySync`

This function wraps a sync function, and in case this wrapped function throws then the `isRetriable` callback is called to decide if we should retry calling the function again.

There's also another layer of options before you can actually call the retryified function, that allows you to provide a maximum `timeout` for the retry loop, and an optional `interval` that should approximately pass between retries.

Before the function is retried again a random amount of milliseconds between `0` and `interval` will be waited for.

By default `interval` would be set to `250`.

```ts
import {retryifySync} from 'stubborn-utils';

// Let's create a wrapped function

const syncFunction = () => {
  if ( Math.random () > 0.5 ) {
    throw new Error ( 'Unlucky' );
  } else {
    return 123;
  }
};

const retryifiedSyncFunction = retryifySync ( syncFunction, {
  isRetriable: error => {
    return true; // Always retriablein this scenario
  }
});

const result = retryifiedSyncFunction ({
  timeout: 1_000,
  interval: 100
}); // => 123 | -1, but 123 with much higher probability
```

## License

MIT © Fabio Spampinato
