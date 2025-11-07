# to-vfile

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[vfile][] utility to read and write to the file system.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`toVFile(description)`](#tovfiledescription)
    *   [`read(description[, options][, callback])`](#readdescription-options-callback)
    *   [`readSync(description[, options])`](#readsyncdescription-options)
    *   [`write(description[, options][, callback])`](#writedescription-options-callback)
    *   [`writeSync(description[, options])`](#writesyncdescription-options)
    *   [`BufferEncoding`](#bufferencoding)
    *   [`Callback`](#callback)
    *   [`Compatible`](#compatible)
    *   [`ReadOptions`](#readoptions)
    *   [`WriteOptions`](#writeoptions)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This utility places file paths and the file system first.
Where `vfile` itself focusses on file values (the file contents), this instead
focuses on the file system, which is a common case when working with files.

## When should I use this?

Use this if you know there’s a file system and want to use it.
Use `vfile` if there might not be a file system.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install to-vfile
```

In Deno with [`esm.sh`][esmsh]:

```js
import {toVFile, read, readSync, write, writeSync} from 'https://esm.sh/to-vfile@7'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {toVFile, read, readSync, write, writeSync} from 'https://esm.sh/to-vfile@7?bundle'
</script>
```

## Use

```js
import {toVFile, read} from 'to-vfile'

console.log(toVFile('readme.md'))
console.log(toVFile(new URL('readme.md', import.meta.url)))
console.log(await read('.git/HEAD'))
console.log(await read('.git/HEAD', 'utf8'))
```

Yields:

```js
VFile {
  data: {},
  messages: [],
  history: [ 'readme.md' ],
  cwd: '/Users/tilde/Projects/oss/to-vfile'
}
VFile {
  data: {},
  messages: [],
  history: [ '/Users/tilde/Projects/oss/to-vfile/readme.md' ],
  cwd: '/Users/tilde/Projects/oss/to-vfile'
}
VFile {
  data: {},
  messages: [],
  history: [ '.git/HEAD' ],
  cwd: '/Users/tilde/Projects/oss/to-vfile',
  value: <Buffer 72 65 66 3a 20 72 65 66 73 2f 68 65 61 64 73 2f 6d 61 69 6e 0a>
}
VFile {
  data: {},
  messages: [],
  history: [ '.git/HEAD' ],
  cwd: '/Users/tilde/Projects/oss/to-vfile',
  value: 'ref: refs/heads/main\n'
}
```

## API

This package exports the identifiers [`read`][api-read],
[`readSync`][api-read-sync], [`toVFile`][api-to-vfile],
[`write`][api-write], and [`writeSync`][api-write-sync].
There is no default export.

### `toVFile(description)`

Create a virtual file from a description.

This is like `VFile`, but it accepts a file path instead of file cotnents.

If `options` is a string, URL, or buffer, it’s used as the path.
Otherwise, if it’s a file, that’s returned instead.
Otherwise, the options are passed through to `new VFile()`.

###### Parameters

*   `description` ([`Compatible`][api-compatible], optional)
    — fath to file, file options, or file itself

###### Returns

Given file or new file ([`VFile`][vfile]).

### `read(description[, options][, callback])`

Create a virtual file and read it in, async.

###### Signatures

*   `(description[, options], Callback): void`
*   `(description[, options]): Promise<VFile>`

###### Parameters

*   `description` ([`Compatible`][api-compatible])
    — path to file, file options, or file itself
*   `options` ([`BufferEncoding`][api-buffer-encoding],
    [`ReadOptions`][api-read-options], optional)
*   `callback` ([`Callback`][api-callback], optional)
    — callback called when done

###### Returns

Nothing when a callback is given, otherwise [promise][] that resolves to given
file or new file ([`VFile`][vfile]).

### `readSync(description[, options])`

Create a virtual file and read it in, synchronously.

###### Parameters

*   `description` ([`Compatible`][api-compatible])
    — path to file, file options, or file itself
*   `options` ([`BufferEncoding`][api-buffer-encoding],
    [`ReadOptions`][api-read-options], optional)

###### Returns

Given file or new file ([`VFile`][vfile]).

### `write(description[, options][, callback])`

Create a virtual file and write it, async.

###### Signatures

*   `(description[, options], Callback): void`
*   `(description[, options]): Promise<VFile>`

###### Parameters

*   `description` ([`Compatible`][api-compatible])
    — path to file, file options, or file itself
*   `options` ([`BufferEncoding`][api-buffer-encoding],
    [`WriteOptions`][api-write-options], optional)
*   `callback` ([`Callback`][api-callback], optional)
    — callback called when done

###### Returns

Nothing when a callback is given, otherwise [promise][] that resolves to given
file or new file ([`VFile`][vfile]).

### `writeSync(description[, options])`

Create a virtual file and write it, synchronously.

###### Parameters

*   `description` ([`Compatible`][api-compatible])
    — path to file, file options, or file itself
*   `options` ([`BufferEncoding`][api-buffer-encoding],
    [`WriteOptions`][api-write-options], optional)

###### Returns

Given file or new file ([`VFile`][vfile]).

### `BufferEncoding`

Encodings supported by the buffer class (TypeScript type).

This is a copy of the types from Node and [`VFile`][vfile].

###### Type

```ts
type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex'
```

### `Callback`

Callback called after reading or writing a file (TypeScript type).

###### Parameters

*   `error` (`Error`, optional)
    — error when reading or writing was not successful
*   `file` ([`VFile`][vfile], optional)
    — file when reading or writing was successful

###### Returns

Nothing (`void`).

### `Compatible`

URL to file, path to file, options for file, or actual file (TypeScript type).

###### Type

```ts
type Compatible = Buffer | URL | VFileOptions | VFile | string
```

<!-- To do: fix link to `VFileOptions` when `VFile` is updated -->

See [`VFileOptions`][vfile] and [`VFile`][vfile].

### `ReadOptions`

Configuration for `fs.readFile` (TypeScript type).

###### Fields

*   `encoding` ([`BufferEncoding`][api-buffer-encoding], optional)
    — encoding to read file as, will turn `file.value` into a string if passed
*   `flag` (`string`, optional)
    — file system flags to use

### `WriteOptions`

Configuration for `fs.writeFile` (TypeScript type).

###### Fields

*   `encoding` ([`BufferEncoding`][api-buffer-encoding], optional)
    — encoding to write file as
*   `mode` (`number | string`, optional)
    — file mode (permission and sticky bits) if the file was newly created
*   `flag` (`string`, optional)
    — file system flags to use

## Types

This package is fully typed with [TypeScript][].
It exports the additional types
[`BufferEncoding`][api-buffer-encoding],
[`Callback`][api-callback],
[`Compatible`][api-compatible],
[`ReadOptions`][api-read-options], and
[`WriteOptions`][api-write-options].

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/vfile/to-vfile/workflows/main/badge.svg

[build]: https://github.com/vfile/to-vfile/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/to-vfile.svg

[coverage]: https://codecov.io/github/vfile/to-vfile

[downloads-badge]: https://img.shields.io/npm/dm/to-vfile.svg

[downloads]: https://www.npmjs.com/package/to-vfile

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contributing]: https://github.com/vfile/.github/blob/main/contributing.md

[support]: https://github.com/vfile/.github/blob/main/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[vfile]: https://github.com/vfile/vfile

[promise]: https://developer.mozilla.org/Web/JavaScript/Reference/Global_Objects/Promise

[api-read]: #readdescription-options-callback

[api-read-sync]: #readsyncdescription-options

[api-to-vfile]: #tovfiledescription

[api-write]: #writedescription-options-callback

[api-write-sync]: #writesyncdescription-options

[api-buffer-encoding]: #bufferencoding

[api-callback]: #callback

[api-compatible]: #compatible

[api-read-options]: #readoptions

[api-write-options]: #writeoptions
