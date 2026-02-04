# tsconfig-paths-webpack-plugin

[![npm version][version-image]][version-url]
[![build][build-image]][build-url]
[![Coverage Status][codecov-image]][codecov-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Use this to load modules whose location is specified in the `paths` section of
`tsconfig.json` when using webpack. This package provides the functionality of
the [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths) package but
as a webpack plug-in.

Using this plugin means that you should no longer need to add `alias` entries in
your `webpack.config.js` which correspond to the `paths` entries in your
`tsconfig.json`. This plugin creates those `alias` entries for you, so you don't
have to!

## How to install

> NOTE: If you are using webpack 4 you need to use version >= 3.0.0 (which is aso backwards compatible with webpack 3).

```
yarn add --dev tsconfig-paths-webpack-plugin
```

or

```
npm install --save-dev tsconfig-paths-webpack-plugin
```

## How to use

In your webpack config add this:

```js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  ...
  resolve: {
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  }
  ...
}
```

**Notice that the plugin is placed in the `resolve.plugins` section of the configuration.** `tsconfig-paths-webpack-plugin` is a resolve plugin and should only be placed in this part of the configuration. Don't confuse this with the plugins array at the root of the webpack configuration object.

If you're using `allowJs` in `tsconfig.json`, or allow other non-TS extensions in webpack, **make sure you set `extensions` option in sync with your webpack config.**

## Options

#### configFile _(string) (default='tsconfig.json')_

Allows you to specify where to find the TypeScript configuration file.

You may provide

- just a file name. The plugin will search for the filename using the built-in
  logic in the `tsconfig-paths` package. The search will start at `cwd`.
- a relative path to the configuration file. It will be resolved relative to
  `cwd`.
- an absolute path to the configuration file.

> The use of `cwd` as default above is not optimal but we've found no better
> solution yet. If you have a suggestion please file an issue.

#### extensions _(string[]) (default=[".ts", ".tsx"])_

An array of the extensions that will be tried during resolve. Ideally this would be the same as the extensions from the webpack config but it seems resolver plug-ins does not have access to this information so you need to specify it again for the plugin.

#### baseUrl _(string) (default=undefined)_

This allows you to override the `baseUrl` found in tsconfig.json. The baseUrl specifies from which directory `paths` should be resolved. So this option enabled you to resolve from another directory than the one where tsconfig.json is located. This can be useful if you want to use webpack with `tsc --watch` instead of a typescript loader. If this option is `undefined` then the `baseUrl` from tsconfig.json will be used.

#### mainFields _((string | string[])[]) (default=["main"])_

An array of the field names that should be considered when resolving packages. Ideally this would be the same as the mainFields from the webpack config but it seems resolver plug-ins does not have access to this infomration so you need to specify it again for the plugin.

#### silent _(boolean) (default=false)_

If true, no console.log messages will be emitted. Note that most error messages
are emitted via webpack which is not affected by this flag.

#### logLevel _(string) (default=warn)_

Can be `info`, `warn` or `error` which limits the log output to the specified
log level. Beware of the fact that errors are written to stderr and everything
else is written to stderr (or stdout if logInfoToStdOut is true).

#### colors _(boolean) (default=true)_

If `false`, disables built-in colors in logger messages.

#### logInfoToStdOut _(boolean) (default=false)_

This is important if you read from stdout or stderr and for proper error
handling. The default value ensures that you can read from stdout e.g. via pipes
or you use webpack -j to generate json output.

#### references _(string[]) (default=undefined)

Support for [Typescript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html).

## Typescript support

This package has typescript typings included. If your webpack config is using typescript, you can use this syntax to import the default export:

```ts
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
```

Or you can use this syntax to import the named export:

```ts
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
```

## How to test

To run the provided example:

```
yarn example
```

## How to publish

```
yarn version --patch
yarn version --minor
yarn version --major
```

## Prior work

This project uses work done in the
[awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader).

[version-image]: https://img.shields.io/npm/v/tsconfig-paths-webpack-plugin.svg?style=flat
[version-url]: https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
[build-image]: https://github.com/dividab/tsconfig-paths-webpack-plugin/workflows/CI/badge.svg
[build-url]: https://github.com/dividab/tsconfig-paths-webpack-plugin/actions/workflows/ci.yml?query=branch%3Amaster
[codecov-image]: https://codecov.io/gh/dividab/tsconfig-paths-webpack-plugin/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/dividab/tsconfig-paths-webpack-plugin
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
[license-image]: https://img.shields.io/github/license/jonaskello/tsconfig-paths-webpack-plugin.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
