# os-locale [![Build Status](https://travis-ci.org/sindresorhus/os-locale.svg?branch=master)](https://travis-ci.org/sindresorhus/os-locale)

> Get the system [locale](https://en.wikipedia.org/wiki/Locale_(computer_software))

Useful for localizing your module or app.

POSIX systems: The returned locale refers to the [`LC_MESSAGE`](http://www.gnu.org/software/libc/manual/html_node/Locale-Categories.html#Locale-Categories) category, suitable for selecting the language used in the user interface for message translation.

## Install

```
$ npm install os-locale
```

## Usage

```js
const osLocale = require('os-locale');

(async () => {
	console.log(await osLocale());
	//=> 'en-US'
})();
```
## API

### osLocale(options?)

Returns a `Promise` for the locale.

### osLocale.sync(options?)

Returns the locale.

#### options

Type: `object`

##### spawn

Type: `boolean`\
Default: `true`

Set to `false` to avoid spawning subprocesses and instead only resolve the locale from environment variables.

## os-locale for enterprise

Available as part of the Tidelift Subscription.

The maintainers of os-locale and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-os-locale?utm_source=npm-os-locale&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
