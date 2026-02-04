# presentable-error

> Make presentable errors

**Work in progress. Request for feedback.**

The idea is to create a convention for errors that are meant to be presented to the user without a stack trace. Same as any object with a `.then` property can be awaited (duck-typing), I would like to create a convention where every error with a `.isPresentable` property should be presented to the user in a nicer way. This is especially useful for command-line tools. For example, if a command-line tool uses packages that follow the presentable error convention, the command-line tool could simply check for `error.isPresentable` and then log it nicely instead of throwing such errors.

This package comes with types for creating presentable errors and checking for them, but if you follow the convention, you don't even need to use this package directly. This can be useful if you want to use your own error subclasses. Then you can simply add the `.isPresentable` property. Ensure it's non-writable and non-configurable.

## Install

```sh
npm install presentable-error
```

## Usage

See [`index.d.ts`](index.d.ts) for now.

#### Example in CLI

```js
import meow from 'meow';

try {
	throwableFunction();
} catch (error) {
	if (error.isPresentable) {
		console.error(error.message);
		process.exit(1);
	}

	throw error;
}
```
