<p align="center">
  <img alt="svgson" title="svgson" src="logo.svg" width="450">
</p>

<p align="center">
  Simple tool to transform <code>svg</code> files and Strings into <code>Object</code> or <code>JSON</code>.
</p>
<p align="center">
  Useful to manipulate <code>SVG</code> with <code>js</code>, to store in noSQL databses.
</p>

<br/>

<p align="center">
  <a href="https://travis-ci.org/elrumordelaluz/svgson/">
    <img src="https://img.shields.io/travis/elrumordelaluz/svgson.svg" alt="Travis">
  </a>
  <a href="https://codecov.io/gh/elrumordelaluz/svgson">
    <img src="https://img.shields.io/codecov/c/github/elrumordelaluz/svgson.svg" alt="Codecov">
  </a>
  <a href="https://www.npmjs.com/package/svgson">
    <img src="https://img.shields.io/npm/v/svgson.svg" alt="Version">
  </a>
  <a href="https://npm-stat.com/charts.html?package=svgsont">
    <img src="https://img.shields.io/npm/dm/svgson.svg" alt="Download">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/svgson.svg" alt="MIT License">
  </a>
</p>

[`v2` docs](https://github.com/elrumordelaluz/svgson/tree/v2)

## Install

```bash
yarn add svgson
```

## Usage

```js
const { parse, stringify } = require('svgson')

// ----------------------------
// Convert SVG to JSON AST
// ----------------------------
parse(`
  <svg>
    <line
      stroke= "#bada55"
      stroke-width= "2"
      stroke-linecap= "round"
      x1= "70"
      y1= "80"
      x2= "250"
      y2= "150">
    </line>
  </svg>`).then(json => {
  console.log(JSON.stringify(json, null, 2))
  /*
    {
      name: 'svg',
      type: 'element',
      value: '',
      attributes: {},
      children: [
        {
          name: 'line',
          type: 'element',
          value: '',
          attributes: {
            stroke: '#bada55',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            x1: '70',
            y1: '80',
            x2: '250',
            y2: '150'
          },
          children: []
        }
      ]
    }
  */

  // -------------------------------
  // Convert JSON AST back to SVG
  // -------------------------------
  const mysvg = stringify(json)
  /* returns the SVG as string */
})
```

<p>
<details>
  <summary><code>umd</code> usage</summary>
<p>
      <pre lang=js>
const svgson = require('svgson')
svgson
  .parse(
    `&lt;svg&gt;
      &lt;line
        stroke= "#bada55"
        stroke-width= "2"
        stroke-linecap= "round"
        x1= "70"
        y1= "80"
        x2= "250"
        y2= "150"&gt;
      &lt;/line&gt;
    &lt;/svg&gt;`
  )
  .then(function(json) {
    console.log(JSON.stringify(json, null, 2)
  )
&nbsp;
mysvg = svgson.stringify(json)
  </pre>
</p>
</details>
</p>

Test in browser [here](https://codepen.io/elrumordelaluz/full/XBKedz/)

# API

## svgson.parse

```js
svgson.parse(input[, options])
```

Returns: `Promise`

- **`input`**

  Type: `String`

- **`options.transformNode`**

  Function to apply on each node when parsing, useful when need to reshape nodes or set default attributes.

  Type: `Function` that returns the node

  Default:

  ```js
  function(node){
    return node
  }
  ```

- **`options.compat`**

  Use keys from previuos version of `svgson`

  Type: `Boolean`

  Default: `false`

- **`options.camelcase`**

  Apply `camelCase` into attributes

  Type: `Boolean`

  Default: `false`

## svgson.parseSync

> Added in `3.1.0`

```js
svgson.parseSync(input[, options])
```

This function is a synchronous version of [`svgson.parse`](#svgsonparse). The arguments are the same, but unlike `svgson.parse`, the return value is not wrapped in a `Promise`.

Returns: `Object` `[Object]`

## svgson.stringify

```js
svg = svgson.stringify(ast[, options])
```

Returns: `String`

- **`ast`**

  `svgson` parsed result.

  Type: `Object` `[Object]`

- **`options.transformAttr`**

  Function to apply on each attribute when stringifying.

  Type: `Function` that returns the key/attribute string with the ability to use the [escape](https://github.com/elrumordelaluz/svgson/blob/master/src/tools.js#L73-L80) function on it.

  Default:

  ```js
  function(key, value, escape) {
    return `${key}="${escape(value)}"`
  }
  ```

- **`options.selfClose`**

  Type: `Boolean`

  Default: `true`

- **Pretty Printing**

  In order to generate pretty formatted SVG output, use [`pretty` npm module](https://www.npmjs.com/package/pretty):

  ```js
  pretty = require('pretty')
  formatted = pretty(svg)
  ```

# Related

[svgson-cli](https://github.com/elrumordelaluz/svgson-cli) Transform SVG into `Object` from the Command Line

[element-to-path](https://github.com/elrumordelaluz/element-to-path) Convert SVG element into `path`

[path-that-svg](https://github.com/elrumordelaluz/path-that-svg) Convert entire SVG with `path`

[svg-path-tools](https://github.com/elrumordelaluz/svg-path-tools) Tools to manipulate SVG `path` (d)

## License

MIT © [Lionel T](https://lionel.tzatzk.in)
