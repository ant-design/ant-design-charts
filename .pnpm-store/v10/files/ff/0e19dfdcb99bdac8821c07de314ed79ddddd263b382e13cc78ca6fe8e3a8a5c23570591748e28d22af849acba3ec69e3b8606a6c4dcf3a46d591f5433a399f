[tests]: 	https://img.shields.io/circleci/project/github/shellscape/webpack-log.svg
[tests-url]: https://circleci.com/gh/shellscape/webpack-log

[cover]: https://codecov.io/gh/shellscape/webpack-log/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/shellscape/webpack-log

[size]: https://packagephobia.now.sh/badge?p=webpack-log
[size-url]: https://packagephobia.now.sh/result?p=webpack-log

<div align="center">
	<img width="180" src="https://raw.githubusercontent.com/shellscape/webpack-log/master/assets/log.svg?sanitize=true" alt="webpack-log"><br/><br/>
</div>

[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![size][size]][size-url]
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# webpack-log

A logger for the Webpack ecosystem.

<a href="https://www.patreon.com/shellscape">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

_Please consider donating if you find this project useful._

## Requirements

This module requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+).

## Install

Using npm:

```console
npm install webpack-log --save-dev
```

## Usage

Create a new logger and use it to log something wild:

```js
const getLogger = require('webpack-log');
const log = getLogger({ name: 'webpack-batman' });

log.info('Jingle Bells, Batman Smells');
log.warn('Robin laid an egg');
log.error('The Batmobile lost a wheel');
log.debug('And the Joker got away');
```

And there will appear magic in your console:

<div align="center">
	<img width="369" src="assets/demo.png" alt="console magic"><br/><br/>
</div>

## Options

### `level`
Type: `String`<br>
Default: `info`

Specifies the level the logger should use. A logger will not produce output for
any log level _beneath_ the specified level. Valid level names, and their order are:

```js
[
  'trace',
  'debug',
  'info',
  'warn',
  'error',
  'silent'
]
```

For example, If a level was passed as `{ level: 'warn'}` then only calls to `warn` and `error` will be displayed in the terminal.

### `name`
Type: `String`<br>
Default: `<webpack-log>`

Specifies the name of the logger to create. This value will be part of the log output prefix.

### `timestamp`
Type: `Boolean`<br>
Default: `false`

If `true`, the logger will display a timestamp for log output, preceding all other data

### `unique`
Type: `Boolean`<br>
Default: `true`

If `false`, the logger will use cached versions of a log with the same name. Due to the nature of the `webpack` ecosystem and multiple plugin/loader use in the same process, loggers are created as unique instances by default.

## Meta

[CONTRIBUTING](./.github/CONTRIBUTING.md)

[LICENSE (Mozilla Public License)](./LICENSE)
