# remark-directive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to support the [generic directives proposal][prop]
(`:cite[smith04]`, `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and
such).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkDirective)`](#unifieduseremarkdirective)
*   [Examples](#examples)
    *   [Example: YouTube](#example-youtube)
    *   [Example: Styled blocks](#example-styled-blocks)
*   [Syntax](#syntax)
*   [Syntax tree](#syntax-tree)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin to add support for directives:
one syntax for arbitrary extensions in markdown.
You can use this with some more code to match your specific needs, to allow for
anything from callouts, citations, styled blocks, forms, embeds, spoilers, etc.

unified is an AST (abstract syntax tree) based transform project.
**remark** is everything unified that relates to markdown.
The layer under remark is called mdast, which is only concerned with syntax
trees.
Another layer underneath is micromark, which is only concerned with parsing.
This package is a small wrapper to integrate all of these.

## When should I use this?

Directives are one of the four ways to extend markdown: an arbitrary extension
syntax (see [Extending markdown](https://github.com/micromark/micromark#extending-markdown)
in micromark’s docs for the alternatives and more info).
This mechanism works well when you control the content: who authors it, what
tools handle it, and where it’s displayed.
When authors can read a guide on how to embed a tweet but are not expected to
know the ins and outs of HTML or JavaScript.
Directives don’t work well if you don’t know who authors content, what tools
handle it, and where it ends up.
Example use cases are a docs website for a project or product, or blogging tools
and static site generators.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (12.20+, 14.14+, 16.0+), install with [npm][]:

```sh
npm install remark-directive
```

In Deno with [Skypack][]:

```js
import remarkDirective from 'https://cdn.skypack.dev/remark-directive@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import remarkDirective from 'https://cdn.skypack.dev/remark-directive@2?min'
</script>
```

## Use

Say we have the following file, `example.md`:

```markdown
:::main{#readme}

Lorem:br
ipsum.

::hr{.red}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

:::
```

And our module, `example.js`, looks as follows:

```js
import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import {visit} from 'unist-util-visit'
import {h} from 'hastscript'

main()

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(myRemarkPlugin)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(await read('example.md'))

  console.log(String(file))
}

// This plugin is an example to let users write HTML with directives.
// It’s informative but rather useless.
// See below for others examples.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}
```

Now, running `node example` yields:

```html
<main id="readme">
  <p>Lorem<br>ipsum.</p>
  <hr class="red">
  <p>A <i>lovely</i> language know as <abbr title="HyperText Markup Language">HTML</abbr>.</p>
</main>
```

## API

This package exports no identifiers.
The default export is `remarkDirective`.

### `unified().use(remarkDirective)`

Configures remark so that it can parse and serialize directives.
Doesn’t handle the directives: [create your own plugin][create-plugin] to do
that.

## Examples

### Example: YouTube

This example shows how directives can be used for YouTube embeds.
It’s based on the example in Use above.
If `myRemarkPlugin` was replaced with this function:

```js
// This plugin is an example to turn `::youtube` into iframes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPlugin() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'youtube') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (node.type === 'textDirective') file.fail('Text directives for `youtube` not supported', node)
        if (!id) file.fail('Missing video id', node)

        data.hName = 'iframe'
        data.hProperties = {
          src: 'https://www.youtube.com/embed/' + id,
          width: 200,
          height: 200,
          frameBorder: 0,
          allow: 'picture-in-picture',
          allowFullScreen: true
        }
      }
    })
  }
}
```

…and `example.md` contains:

```markdown
# Cat videos

::youtube[Video of a cat in a box]{#01ab2cd3efg}
```

…then running `node example` yields:

```html
<h1>Cat videos</h1>
<iframe src="https://www.youtube.com/embed/01ab2cd3efg" width="200" height="200" frameborder="0" allow="picture-in-picture" allowfullscreen>Video of a cat in a box</iframe>
```

### Example: Styled blocks

Note: This is sometimes called admonitions, callouts, etc.

This example shows how directives can be used to style blocks.
It’s based on the example in Use above.
If `myRemarkPlugin` was replaced with this function:

```js
// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function myRemarkPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'note') return

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div'

        data.hName = tagName
        data.hProperties = h(tagName, node.attributes).properties
      }
    })
  }
}
```

…and `example.md` contains:

```markdown
# How to use xxx

You can use xxx.

:::note{.warning}
if you chose xxx, you should also use yyy somewhere…
:::
```

…then running `node example` yields:

```html
<h1>How to use xxx</h1>
<p>You can use xxx.</p>
<div class="warning">
  <p>if you chose xxx, you should also use yyy somewhere…</p>
</div>
```

## Syntax

This plugin applies a micromark extensions to parse the syntax.
See its readme for parse details:

*   [`micromark-extension-directive`](https://github.com/micromark/micromark-extension-directive#syntax)

## Syntax tree

This plugin applies one mdast utility to build and serialize the AST.
See its readme for the node types supported in the tree:

*   [`mdast-util-directive`](https://github.com/syntax-tree/mdast-util-directive#syntax-tree)

## Types

This package is fully typed with [TypeScript][].
If you’re working with the syntax tree, make sure to import this plugin
somewhere in your types, as that registers the new node types in the tree.

```js
/** @typedef {import('remark-directive')} */

import {visit} from 'unist-util-visit'

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function myRemarkPlugin() => {
  return (tree) => {
    visit(tree, (node) => {
      // `node` can now be one of the nodes for directives.
    })
  }
}
```

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

This plugin works with unified 9+ and remark 14+.

## Security

Use of `remark-directive` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for [cross-site
scripting (XSS)][xss] attacks.

## Related

*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
    — support GFM (autolink literals, strikethrough, tables, tasklists)
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — link references to commits, issues, pull-requests, and users, like on
    GitHub
*   [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter)
    — support frontmatter (YAML, TOML, and more)
*   [`remark-math`](https://github.com/remarkjs/remark-math)
    — support math

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

[build-badge]: https://github.com/remarkjs/remark-directive/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-directive/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-directive.svg

[coverage]: https://codecov.io/github/remarkjs/remark-directive

[downloads-badge]: https://img.shields.io/npm/dm/remark-directive.svg

[downloads]: https://www.npmjs.com/package/remark-directive

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-directive.svg

[size]: https://bundlephobia.com/result?p=remark-directive

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[unified]: https://github.com/unifiedjs/unified

[remark]: https://github.com/remarkjs/remark

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[typescript]: https://www.typescriptlang.org

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast

[prop]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444

[create-plugin]: https://unifiedjs.com/learn/guide/create-a-plugin/
