# uri-parse

> Mini data-uri parser for nodejs and browser. No dependencies! 一个简单的无依赖 uri 解析库。

[![Ver](https://img.shields.io/npm/v/uri-parse.svg)](https://www.npmjs.com/package/uri-parse) [![Build Status](https://travis-ci.org/hustcc/uri-parse.svg?branch=master)](https://travis-ci.org/hustcc/uri-parse) [![Coverage Status](https://coveralls.io/repos/github/hustcc/uri-parse/badge.svg?branch=master)](https://coveralls.io/github/hustcc/uri-parse) [![npm download](https://img.shields.io/npm/dm/uri-parse.svg)](https://www.npmjs.com/package/uri-parse)


```
/*
 * parse url like this
 *
 * schema://username:password@host:port/path?key=value#fragment;key=value
 * \____/   \______/ \______/ \__/ \__/ \__/ \_______/ \______/ \______/
 *   |         |        |       |    |    |      |         |       |
 * schema      |     password   |   port  |    query    fragment   |
 *          username          host      path                     extension
 *
 * note:
 *   - username, password, port, path, query, fragment, extension is optional.
 *   - scheme, host must be setting.
 *   - username and password must be paired.
 */
```


## 1. Install

> **npm i --save uri-parse**

Then import it.

```js
import URI from 'uri-parse'; // ES6
var URI = require('uri-parse'); // ES5 with npm
```


## 2. Usage

 - `uri.all()`: parse uri information.

```js
import URI from 'uri-parse';

const u = 'scheme://username:password@host:port/path?name=hustcc#fragment;ext=hello';

const uri = new URI(u);

const { schema, username, password, host, port, path, query, fragment, extension } = uri.all();

/*
{
  schema: 'scheme',
  username: 'username',
  password: 'password',
  host: 'host',
  port: 'port',
  path: 'path',
  query: {
    name: 'hustcc'
  },
  fragment: 'fragment',
  extension: {
    ext: 'hello'
  }
}
*/

// or get the properties of the instance.
const schema = url.schema;
```

 - `uri.toURI()`: modify and generate uri string.


```js
import URI from 'uri-parse';

const u = 'https://atool.vip/path?name=hustcc#fragment;ext=hello';

const uri = new URI(u);

// also you can update the uri.
uri.query = {
  ...uri.query,
  p: 'testQuery', // add a query parameter.
};

// get the new url
const uriString = uri.toURI();
// got 'https://atool.vip/path?name=hustcc&p=testQuery#fragment;ext=hello';
```


## 3. Test & Perf

```
npm i

npm run test
```


## License

MIT@[hustcc](https://github.com/hustcc).