# remark-html

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to add support for serializing HTML.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkHtml[, options])`](#unifieduseremarkhtml-options)
    *   [`Options`](#options)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin that compiles markdown to
HTML.

## When should I use this?

This plugin is useful when you want to turn markdown into HTML.
It’s a shortcut for
`.use(remarkRehype).use(rehypeSanitize).use(rehypeStringify)`.

The reason that there are different ecosystems for markdown and HTML is that
turning markdown into HTML is, while frequently needed, not the only purpose of
markdown.
Checking (linting) and formatting markdown are also common use cases for
remark and markdown.
There are several aspects of markdown that do not translate 1-to-1 to HTML.
In some cases markdown contains more information than HTML: for example, there
are several ways to add a link in markdown (as in, autolinks: `<https://url>`,
resource links: `[label](url)`, and reference links with definitions:
`[label][id]` and `[id]: url`).
In other cases HTML contains more information than markdown: there are many
tags, which add new meaning (semantics), available in HTML that aren’t available
in markdown.
If there was just one AST, it would be quite hard to perform the tasks that
several remark and rehype plugins currently do.

This plugin is useful when you want to quickly turn markdown into HTML.
In most cases though, it’s recommended to use [`remark-rehype`][remark-rehype]
instead and finally use [`rehype-stringify`][rehype-stringify] to serialize
HTML.
The reason using both ecosystems instead of this plugin is recommended, is that
there are many useful rehype plugins that you can then use.
For example, you can [minify HTML][rehype-minify], [format HTML][rehype-format],
[highlight code][rehype-highlight], [add metadata][rehype-meta], and a lot more.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install remark-html
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkHtml from 'https://esm.sh/remark-html@16'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkHtml from 'https://esm.sh/remark-html@16?bundle'
</script>
```

## Use

Say we have the following file `example.md`:

```markdown
# Pluto

**Pluto** (minor-planet designation: **134340 Pluto**) is a
[dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet) in the
[Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt).
```

…and a module `example.js`:

```js
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import {unified} from 'unified'

const file = await unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(await read('example.md'))

console.log(String(file))
```

…then running `node example.js` yields:

```html
<h1>Pluto</h1>
<p><strong>Pluto</strong> (minor-planet designation: <strong>134340 Pluto</strong>) is a
<a href="https://en.wikipedia.org/wiki/Dwarf_planet">dwarf planet</a> in the
<a href="https://en.wikipedia.org/wiki/Kuiper_belt">Kuiper belt</a>.</p>
```

## API

This package exports no identifiers.
The default export is [`remarkHtml`][api-remark-html].

### `unified().use(remarkHtml[, options])`

Serialize markdown as HTML.

###### Parameters

*   `options` ([`Options`][api-options], optional)
    — configuration

###### Returns

Transform ([`Transformer`][unified-transformer]).

###### Notes

Passing `sanitize: false` is dangerous.
It allows arbitrary HTML and does not sanitize elements.

### `Options`

Configuration (TypeScript type).

###### Fields

*   `handlers` ([`Handlers` from
    `mdast-util-to-hast`][mdast-util-to-hast-handlers], optional)
    — how to turn mdast nodes into hast nodes
*   `sanitize` ([`Schema` from
    `hast-util-sanitize`][hast-util-sanitize-schema] or `boolean`, default:
    `true`)
    — sanitize the output, and how
*   `...toHtmlOptions` ([`Options` from
    `hast-util-to-html`][hast-util-to-html-options], optional)
    — other options are passed to `hast-util-to-html`

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][api-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `remark-html@^16`,
compatible with Node.js 16.

This plugin works with `unified` version 6+ and `remark` version 15+.

## Security

Use of `remark-html` is safe by default.
Passing `sanitize: false` is unsafe and opens you up to
[cross-site scripting (XSS)][wiki-xss] attacks.
A safe schema is used by default, but passing an unsafe schema is unsafe.

## Related

*   [`remark-rehype`](https://github.com/remarkjs/remark-rehype)
    — turn markdown into HTML to support rehype
*   [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize)
    — sanitize HTML

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/remarkjs/remark-html/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-html/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-html.svg

[coverage]: https://codecov.io/github/remarkjs/remark-html

[downloads-badge]: https://img.shields.io/npm/dm/remark-html.svg

[downloads]: https://www.npmjs.com/package/remark-html

[size-badge]: https://img.shields.io/bundlejs/size/remark-html

[size]: https://bundlejs.com/?q=remark-html

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[hast-util-sanitize-schema]: https://github.com/syntax-tree/hast-util-sanitize#schema

[hast-util-to-html-options]: https://github.com/syntax-tree/hast-util-to-html#options

[mdast-util-to-hast-handlers]: https://github.com/syntax-tree/mdast-util-to-hast#handlers

[rehype-format]: https://github.com/rehypejs/rehype-format

[rehype-highlight]: https://github.com/rehypejs/rehype-highlight

[rehype-meta]: https://github.com/rehypejs/rehype-meta

[rehype-minify]: https://github.com/rehypejs/rehype-minify

[rehype-stringify]: https://github.com/rehypejs/rehype/tree/main/packages/rehype-stringify

[remark]: https://github.com/remarkjs/remark

[remark-rehype]: https://github.com/remarkjs/remark-rehype

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-options]: #options

[api-remark-html]: #unifieduseremarkhtml-options
