# import-modules

> Import all modules in a directory

*This package is intentionally simple. Not interested in more features.*

## Install

```
$ npm install import-modules
```

## Usage

```
.
└── directory
    ├── foo-bar.js
    └── baz-faz.js
```

```js
const importModules = require('import-modules');

const modules = importModules('directory');

console.log(modules);
//=> {fooBar: [Function], bazFaz: [Function]}
```

## API

### importModules(directory?, options?)

#### directory

Type: `string`\
Default: `__dirname`

Directory to import modules from. Unless you've set the `fileExtensions` option, that means any `.js`, `.json`, `.node` files, in that order. Does not recurse. Ignores the caller file and files starting with `.` or `_`.

#### options

Type: `object`

##### camelize

Type: `boolean`\
Default: `true`

Convert dash-style names (`foo-bar`) and snake-style names (`foo_bar`) to camel-case (`fooBar`).

##### fileExtensions

Type: `string[]`\
Default: `['.js', '.json', '.node']`

File extensions to look for. Order matters.

## Related

- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [import-cwd](https://github.com/sindresorhus/import-cwd) - Import a module from the current working directory
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import a module lazily
