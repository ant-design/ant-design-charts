# findAndReplaceDOMText

Forked from [padolsey/findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText), add offset option to fix browsers which don't support regex lookbehind.

**[See the demo](http://padolsey.github.com/findAndReplaceDOMText/demo.html)**

`findAndReplaceDOMText` searches for regular expression matches in a given DOM node and replaces or wraps each match with a node or piece of text that you can specify.

For example:

```html
<p id="t">
  123 456 Hello
</p>
```

```js
findAndReplaceDOMText(document.getElementById('t'), {
  find: /Hello/,
  wrap: 'em'
});
```

This would result in:

```html
<p id="t">
  123 456 <em>Hello</em>
</p>
```

And it also works when matches are spread **across multiple nodes**! E.g.

```html
<p id="t">
  123 456 Hell<span>o Goodbye</span>
</p>
```

```js
findAndReplaceDOMText(document.getElementById('t'), {
  find: /Hello/,
  wrap: 'em'
});
```

This would result in:

```html
<p id="t">
  123 456 <em>Hell</em><span><em>o</em> Goodbye</span>
</p>
```

The `EM` element has been added twice, to cover both portions of the match.

## Installation

Grab the latest [findAndReplaceDOMText.js](https://github.com/padolsey/findAndReplaceDOMText/blob/master/src/findAndReplaceDOMText.js) (or `npm install findandreplacedomtext`) and include it as a `<script>` on your page.

## API / Usage

`findAndReplaceDOMText` has the following argument signature:

```js
findAndReplaceDOMText(
  element, // (Element) The element or text-node to search within
  options  // (Object) Explained below
);
```

### API

#### Options

The `options` object includes:

 * **find** (`RegExp | String`): Something to search for. A string will perform a global search by default (looking for all matches), but a RegExp will only do so if you include the global (`/.../g`) flag.
 * **replace** *optional* (`String | Function`): A String of text to replace matches with, or a Function which should return replacement Node or String. If you use a string, it can contain various tokens:
  * `$n` to represent the *n*th captured group of a regular expression (i.e. `$1`, `$2`, ...)
  * `$0` or `$&` to represent the entire match
  * <code>$`</code> to represent everything to the left of the match.
  * `$'` to represent everything to the right of the match.
 * **wrap** *optional* (`String | Node`): A string representing the node-name of an element that will be wrapped around matches (e.g. `span` or `em`). Or a Node (i.e. a stencil node) that we will clone for each match portion.
 * **wrapClass** *optional* (`String`): A string representing the class name to be assigned to the wrapping element (e.g. `<span class="myClass">found text</span>`).  If the `wrap` option is not specified, then this option is ignored.
 * **portionMode** *optional* (`String`, one of `"retain"` or `"first"`): Indicates whether to re-use existing node boundaries when replacing a match with text (i.e. the default, `"retain"`), or whether to instead place the entire replacement in the first-found match portion's node. *Most of the time you'll want the default*.
 * **filterElements** *optional* (`Function`): A function to be called on every element encountered by `findAndReplaceDOMText`. If the function returns false the element will be altogether ignored.
 * **forceContext** *optional* (`Function | Boolean`): A boolean or a boolean-returning function that'll be called on every element to determine if it should be considered as its own matching context. See below under [*Contexts*](#user-content-contexts) for more info.
 * **preset** *optional* (`String`): Currently there's only one preset: `prose`. See below.

#### `preset:prose`

The most common usage of `findAndReplaceDOMText` is to replace text found in regular prose, not all DOM nodes. To make this easier there is a preset that you can use to instruct it to:

 * Ignore non-textual elements (E.g. `<script>`, `<svg>`, `<optgroup>`, `<textarea>`, etc.)
 * Force [bordered contexts](#user-content-contexts) on block-elements like `<p>` and `<div>` so that matches cannot cross element borders.
 * Note: matches will still be able to cross textual-inline element borders (`<em>`, `<span>`, etc.)

To enable this preset:

```js
findAndReplaceDOMText(element, {
  preset: 'prose',
  find: 'something',
  replace: 'something else'
})
```

#### What is a portion?

A portion or "match portion" is a part of a match that is delimited by node boundaries. Not all matches occur within a single text-node, so `findAndReplaceDOMText` has to be able to deal with cross-boundary matches (e.g. when matching `/foo/` in `"<em>f</em>oo"`).

A portion object has the following properties:

 * `node`: The DOM node pertaining to the portion. Note that this node might not fully encapsulate part of a match, e.g. the node might contain additional text.
 * `index`: The index of the portion (`0` is the first portion of the match, etc.)
 * `text`: The text of the portion relevant to the match
 * `indexInMatch`: The index of the portion within the match
 * `indexInNode`: The index of the portion text within the node


#### The `replace` Function

If you pass a function to the `replace` option your function will be called on every portion of every match and is expected to return a DOM Node (a Text or Element node). Your function will be passed both the portion and the encapsulating match of that portion.

E.g.

*Input HTML*

```html
<div id="container">
  Explaining how to write a replace <em>fun</em>ction
</div>
```

*JS*

```js
findAndReplaceDOMText(document.getElementById('container'), {
  find: 'function',
  replace: function(portion, match) {
    return '[[' + portion.index + ']]';
  }
});
```

*Output HTML*

```html
<div id="container">
  Explaining how to write a replace <em>[[0]]</em>[[1]]
</div>
```

#### The `wrap` Option

If you pass a string to the `wrap` option, every matching text segment will be wrapped in that element.  If you also specify the `wrapClass` option, the wrapping element will be assigned that class after it is created.  This is useful for attaching various styles from your css.

E.g.

*Input HTML*

```html
<div id="container">
  Explaining how to wrap text in elements with and without classes assigned.
</div>
```

*JS*

```js
findAndReplaceDOMText(document.getElementById('container'), {
 find: 'without',
 wrap: 'em'
});
findAndReplaceDOMText(document.getElementById('container'), {
 find: 'with ',
 wrap: 'em',
 wrapClass: 'shiny'
});
```

*CSS*

```css
.shiny {
 background-color: yellow;
}
```

*Output HTML*

```html
<div id="container">
  Explaining how to wrap text in elements <em class="shiny">with </em>and <em>without</em> classes assigned.
</div>
```

#### The instance

Calling `findAndReplaceDOMText` returns an instance of an internal Finder constructor -- the API on the object is limited, at the moment, to reverting:

```js
var finder = findAndReplaceDOMText(...);

// Later:
finder.revert();
```

**Note:** Reversion will only work if the nodes have not been tampered with after the initial replacement -- if there have been removals, movements or normalisations then the reversion is not guarenteed to work. In this case it's best to retain your own clone of the target node(s) in order to run your own reversion.

### Contexts

Matching, by default, will occur on all elements and across all element borders. E.g.

Before:

```html
<div id="test">
  <p>ama</p><p>zing</p>
</div>
```

```js
findAndReplaceDOMText(document.getElementById('test'), {
  find: 'amazing',
  wrap: 'em'
});
```

After:

```html
<div id="test">
  <p><em>ama</em></p><p><em>zing</em></p>
</div>
```

This is a useful feature for inline elements, but is undesirable in many other cases, so to stop it from happening you can choose to "force a context" on those particular elements. In this case we want to force a context on `<p>` elements:

```js
findAndReplaceDOMText(document.getElementById('test'), {
  find: 'amazing',
  wrap: 'em',
  forceContext: function(el) {
    // Using https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
    return el.matches('p');
  }
});
```

Internally, the `prose` preset uses this feature:

```js
exposed.PRESETS = {
  prose: {
    forceContext: exposed.NON_INLINE_PROSE,
    filterElements: function(el) {
      return !hasOwn.call(exposed.NON_PROSE_ELEMENTS, el.nodeName.toLowerCase());
    }
  }
};
```

### Changelog

 * 0.4.6 (5 Dec 2017): Fix indexInMatch ([See #60](https://github.com/padolsey/findAndReplaceDOMText/issues/60)). Fix undefined being echoed in optional+empty capture groups ([See #70](https://github.com/padolsey/findAndReplaceDOMText/issues/70)).
 * 0.4.4 (4 May 2015): Remove duplicate key from `NON_CONTIGUOUS_PROSE_ELEMENTS`. Expose library via UMD ([See #32](https://github.com/padolsey/findAndReplaceDOMText/issues/32)).
 * 0.4.3 (28 Apr 2015): Add `preset:prose` and `forceContext` features. [See #29](https://github.com/padolsey/findAndReplaceDOMText/issues/29).
 * 0.4.2 (30 Mar 2014): Fix IE to avoid incorrectly-closed-tags issue ([see #20](https://github.com/padolsey/findAndReplaceDOMText/issues/20)). Thanks to [shauryamal](https://github.com/shauryamal)!
 * 0.4.1 (11 Mar 2014): Fix portionMode:first phantom nodes (see [issue #19](https://github.com/padolsey/findAndReplaceDOMText/issues/19))
 * 0.4.0 (6 Oct 2013): Major API overhaul, including a new arg signature (`findAndReplaceDOMText(node, options)`, plus the ability to replace a match with text or wrap it with a DOM Node.
 * 0.3.0: Switch to semver, add node-filtering feature (as requested in [Issue #11](https://github.com/padolsey/findAndReplaceDOMText/issues/11)
 * 0.2: Fix case where regular expression contains word bounderies and add support for specifying a capture group to replace as the fourth argument to `findAndReplaceDOMText()` (see [issue #5](https://github.com/padolsey/findAndReplaceDOMText/issues/5))
 * 0.11: Minor fix: Make sure replacement node function is called in order of matches (see [issue #4](https://github.com/padolsey/findAndReplaceDOMText/issues/4))
 * 0.1: Initial commit + Fix for IE's broken HTML5 cloneNode ([pull request](https://github.com/padolsey/findAndReplaceDOMText/pull/3))

### License

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
```
