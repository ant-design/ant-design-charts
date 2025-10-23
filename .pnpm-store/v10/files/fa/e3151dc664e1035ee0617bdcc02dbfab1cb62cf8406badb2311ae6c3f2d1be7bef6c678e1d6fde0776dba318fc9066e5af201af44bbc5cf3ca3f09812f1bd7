# unist-util-filter

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unist][] utility to create a new tree with only nodes that pass a test.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`filter(tree[, options][, test])`](#filtertree-options-test)
    *   [`Options`](#options)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a small utility that helps you clean a tree.

## When should I use this?

You can use this utility to remove things from a tree.
This utility is very similar to [`unist-util-remove`][unist-util-remove], which
changes the given tree.
Modifying a tree like that utility does is much faster on larger documents.

You can also walk the tree with [`unist-util-visit`][unist-util-visit] to remove
nodes.
To create trees, use [`unist-builder`][unist-builder].

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install unist-util-filter
```

In Deno with [`esm.sh`][esmsh]:

```js
import {filter} from 'https://esm.sh/unist-util-filter@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {filter} from 'https://esm.sh/unist-util-filter@4?bundle'
</script>
```

## Use

```js
import {u} from 'unist-builder'
import {filter} from 'unist-util-filter'

const tree = u('root', [
  u('leaf', '1'),
  u('parent', [u('leaf', '2'), u('parent', [u('leaf', '3')])]),
  u('leaf', '4')
])

const newTree = filter(tree, node => node.type !== 'leaf' || node.value % 2 === 0)

console.dir(newTree, {depth: null})
```

Yields:

```js
{
  type: 'root',
  children: [
    {type: 'parent', children: [{type: 'leaf', value: '2'}]},
    {type: 'leaf', value: '4'}
  ]
}
```

## API

This package exports the identifier [`filter`][filter].
There is no default export.

### `filter(tree[, options][, test])`

Create a new `tree` of copies of all nodes that pass `test`.

The tree is walked in *[preorder][]* (NLR), visiting the node itself, then its
head, etc.

###### Parameters

*   `tree` ([`Node`][node])
    — tree to filter
*   `options` ([`Options`][options], optional)
    — configuration
*   `test` ([`Test`][test], optional)
    — `unist-util-is` compatible test

###### Returns

New filtered tree ([`Node`][node] or `null`).

`null` is returned if `tree` itself didn’t pass the test, or is cascaded away.

### `Options`

Configuration (TypeScript type).

###### Fields

*   `cascade` (`boolean`, default: `true`)
    — whether to drop parent nodes if they had children, but all their
    children were filtered out

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][options].

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Related

*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — walk the tree
*   [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents)
    — walk the tree with a stack of parents
*   [`unist-util-map`](https://github.com/syntax-tree/unist-util-map)
    — create a new tree with all nodes mapped by a given function
*   [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap)
    — create a new tree by mapping (to an array) by a given function
*   [`unist-util-remove`](https://github.com/syntax-tree/unist-util-remove)
    — remove nodes from a tree that pass a test
*   [`unist-util-select`](https://github.com/syntax-tree/unist-util-select)
    — select nodes with CSS-like selectors

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-util-filter/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-filter/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-filter.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-filter

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-filter.svg

[downloads]: https://www.npmjs.com/package/unist-util-filter

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-filter.svg

[size]: https://bundlephobia.com/result?p=unist-util-filter

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[preorder]: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

[unist-util-remove]: https://github.com/syntax-tree/unist-util-remove

[unist-util-visit]: https://github.com/syntax-tree/unist-util-visit

[unist-builder]: https://github.com/syntax-tree/unist-builder

[test]: https://github.com/syntax-tree/unist-util-is#test

[filter]: #filtertree-options-test

[options]: #options
