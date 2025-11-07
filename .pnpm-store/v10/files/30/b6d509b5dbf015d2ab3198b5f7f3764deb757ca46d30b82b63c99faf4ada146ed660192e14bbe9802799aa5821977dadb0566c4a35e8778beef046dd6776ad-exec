# org-regex [![Build Status](https://travis-ci.org/sidoshi/org-regex.svg?branch=master)](https://travis-ci.org/sidoshi/org-regex)

> Regular expression for matching [npm organizations](https://docs.npmjs.com/orgs/)


## Install

```
$ npm install org-regex
```


## Usage

```js
const orgRegex = require('org-regex');

orgRegex({exact: true}).test('@ava');
//=> true

'foo @ava bar @ava/init'.match(orgRegex());
//=> ['@ava']
```


## API

### orgRegex([options])

Returns a `RegExp` for matching npm organization names.

#### options

Type: `Object`

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any organization package names in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is a scoped package name.


## Related

- [scoped-regex](https://github.com/sindresorhus/scoped-regex) - Check if a string is a scoped npm package name


## License

MIT © [Siddharth Doshi](https://sid.sh)
