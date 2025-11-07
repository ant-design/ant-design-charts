# listr-input [![Build Status](https://travis-ci.org/SamVerschueren/listr-input.svg?branch=master)](https://travis-ci.org/SamVerschueren/listr-input)

> Input module for [Listr](https://github.com/SamVerschueren/listr)


## Install

```
$ npm install --save listr-input
```


## Usage

```js
const Listr = require('listr');
const input = require('listr-input');
const got = require('got');

const list = new Listr([
	{
		title: 'Retrieving data',
		task: () => input('Credentials', {
			secret: true,
			validate: value => value.length > 0,
			done: credentials => got('https://myapi.com', {
				headers: {
					'Authorization': `Bearer ${credentials}`
				}
			})
		})
	}
]);

list.run();
```


## API

### input(question, [options])

Returns an Observable which asks for user input.

#### question

Type: `string`

Question to ask.

#### options

##### default

Type: `string`

Default value to use if nothing is entered.

##### validate

Type: `function`

Function which accepts the provided value. Should return `true` if the value is valid, `false` otherwise.

##### secret

Type: `boolean`<br>
Default: `false`

Mark the input as secret.

##### done

Type: `function`

Function that will be invoked when the user has answered the question.

##### autoSubmit

Type: `function`

Function which accepts the provided value. If returns `true` then the value will be submitted automatically.



## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
