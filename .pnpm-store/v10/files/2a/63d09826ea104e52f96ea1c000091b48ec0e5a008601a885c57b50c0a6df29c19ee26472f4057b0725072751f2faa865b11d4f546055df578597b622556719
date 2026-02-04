# eslint-plugin-promise

Enforce best practices for JavaScript promises.

[![CI](https://github.com/eslint-community/eslint-plugin-promise/actions/workflows/CI.yml/badge.svg)](https://github.com/eslint-community/eslint-plugin-promise/actions/workflows/CI.yml)
[![npm version](https://badge.fury.io/js/eslint-plugin-promise.svg)](https://www.npmjs.com/package/eslint-plugin-promise)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Rules](#rules)
- [Maintainers](#maintainers)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm install eslint --save-dev
```

Next, install `eslint-plugin-promise`:

```sh
npm install eslint-plugin-promise --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-promise` globally.

## Usage

Add `promise` to the plugins section of your `.eslintrc.json` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["promise"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    "promise/no-multiple-resolved": "error"
  }
}
```

or start with the recommended rule set:

- `eslint.config.js`:

  ```js
  import pluginPromise from 'eslint-plugin-promise'
  export default [
    // ...
    pluginPromise.configs['flat/recommended'],
  ]
  ```

- `.eslintrc.*`:

  ```json
  {
    "extends": ["plugin:promise/recommended"]
  }
  ```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
⚠️ Configurations set to warn in.\
🚫 Configurations disabled in.\
✅ Set in the `flat/recommended` configuration.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                 | Description                                                                            | 💼  | ⚠️  | 🚫  | 🔧  |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :-- | :-- | :-- | :-- |
| [always-return](docs/rules/always-return.md)                         | Require returning inside each `then()` to create readable and reusable Promise chains. | ✅  |     |     |     |
| [avoid-new](docs/rules/avoid-new.md)                                 | Disallow creating `new` promises outside of utility libs (use [pify][] instead).       |     |     | ✅  |     |
| [catch-or-return](docs/rules/catch-or-return.md)                     | Enforce the use of `catch()` on un-returned promises.                                  | ✅  |     |     |     |
| [no-callback-in-promise](docs/rules/no-callback-in-promise.md)       | Disallow calling `cb()` inside of a `then()` (use [nodeify][] instead).                |     | ✅  |     |     |
| [no-multiple-resolved](docs/rules/no-multiple-resolved.md)           | Disallow creating new promises with paths that resolve multiple times.                 |     |     |     |     |
| [no-native](docs/rules/no-native.md)                                 | Require creating a `Promise` constructor before using it in an ES5 environment.        |     |     | ✅  |     |
| [no-nesting](docs/rules/no-nesting.md)                               | Disallow nested `then()` or `catch()` statements.                                      |     | ✅  |     |     |
| [no-new-statics](docs/rules/no-new-statics.md)                       | Disallow calling `new` on a Promise static method.                                     | ✅  |     |     | 🔧  |
| [no-promise-in-callback](docs/rules/no-promise-in-callback.md)       | Disallow using promises inside of callbacks.                                           |     | ✅  |     |     |
| [no-return-in-finally](docs/rules/no-return-in-finally.md)           | Disallow return statements in `finally()`.                                             |     | ✅  |     |     |
| [no-return-wrap](docs/rules/no-return-wrap.md)                       | Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.     | ✅  |     |     |     |
| [param-names](docs/rules/param-names.md)                             | Enforce consistent param names and ordering when creating new promises.                | ✅  |     |     |     |
| [prefer-await-to-callbacks](docs/rules/prefer-await-to-callbacks.md) | Prefer `async`/`await` to the callback pattern.                                        |     |     |     |     |
| [prefer-await-to-then](docs/rules/prefer-await-to-then.md)           | Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.           |     |     |     |     |
| [valid-params](docs/rules/valid-params.md)                           | Enforces the proper number of arguments are passed to Promise functions.               |     | ✅  |     |     |

<!-- end auto-generated rules list -->

## Maintainers

- Jamund Ferguson - [@xjamundx][]
- Macklin Underdown - [@macklinu][]
- Aadit M Shah - [@aaditmshah][]

## License

- (c) MMXV jden <mailto:jason@denizac.org> - ISC license.
- (c) 2016 Jamund Ferguson <mailto:jamund@gmail.com> - ISC license.

[nodeify]: https://www.npmjs.com/package/nodeify
[pify]: https://www.npmjs.com/package/pify
[@aaditmshah]: https://github.com/aaditmshah
[@macklinu]: https://github.com/macklinu
[@xjamundx]: https://github.com/xjamundx
