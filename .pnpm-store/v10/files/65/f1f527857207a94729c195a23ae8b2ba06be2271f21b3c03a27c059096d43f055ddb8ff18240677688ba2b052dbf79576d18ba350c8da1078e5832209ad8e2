# vfile-sort

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[`vfile`][vfile] utility to sort messages.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`sort(file)`](#sortfile)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a small package to sort the list of messages.
It first sorts by line/column: earlier messages come first.
When two messages occurr at the same place, sorts fatal error before warnings,
before info messages.
Finally, it sorts using `localeCompare` on `source`, `ruleId`, or finally
`reason`.

## When should I use this?

You can use this right before a reporter is used to give humans a coherent
report.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install vfile-sort
```

In Deno with [`esm.sh`][esmsh]:

```js
import {sort} from 'https://esm.sh/vfile-sort@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {sort} from 'https://esm.sh/vfile-sort@3?bundle'
</script>
```

## Use

```js
import {VFile} from 'vfile'
import {sort} from 'vfile-sort'

const file = VFile()

file.message('Error!', {line: 3, column: 1})
file.message('Another!', {line: 2, column: 2})

sort(file)

console.log(file.messages.map(d => String(d)))
// => ['2:2: Another!', '3:1: Error!']
```

## API

This package exports the identifier [`sort`][api-sort].
There is no default export.

### `sort(file)`

Sort messages in the given [vfile][].

###### Parameters

*   `file` ([`VFile`][vfile])
    — file to sort

###### Returns

Sorted file ([`VFile`][vfile]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

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

[build-badge]: https://github.com/vfile/vfile-sort/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-sort/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-sort.svg

[coverage]: https://codecov.io/github/vfile/vfile-sort

[downloads-badge]: https://img.shields.io/npm/dm/vfile-sort.svg

[downloads]: https://www.npmjs.com/package/vfile-sort

[size-badge]: https://img.shields.io/bundlephobia/minzip/vfile-sort.svg

[size]: https://bundlephobia.com/result?p=vfile-sort

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

[api-sort]: #sortfile
