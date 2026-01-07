# domparser-rs

A super fast Node.js addon for HTML parsing and manipulation, written in Rust. It aims to provide a standard-compliant DOM API for Node.js.

## Features

- **Standard Compliant**: Implements standard DOM APIs including `DOMParser`, `querySelector`, `classList`, and more, making it easy to migrate from browser-based code.
- High-performance DOM parsing and manipulation
- Exposes a simple JavaScript API via NAPI-RS
- Designed for both server-side and CLI HTML processing
- Written in Rust for speed and safety

## Installation

```bash
yarn add domparser-rs
# or
npm install domparser-rs
```

## Usage

```js
const { parse } = require('domparser-rs');
const root = parse('<div id="foo" class="bar">hello <span>world</span></div>');

const div = root.select('div');
console.log(div.getAttribute('id')); // "foo"
console.log(div.text()); // "hello world"
div.setAttribute('title', 'my-title');
console.log(div.outerHtml()); // <div id="foo" class="bar" title="my-title">hello <span>world</span></div>
```

## API Documentation

### `parse(html: string): NodeRepr`

Parses an HTML string and returns a `NodeRepr` instance representing the root node.

### `DOMParser` Class

#### `parseFromString(string: string, mimeType: string): NodeRepr`
Parses a string using the specified MIME type (e.g., "text/html").

---

### `NodeRepr` Class

Represents a DOM node and provides various manipulation methods.

#### Properties (Getters/Setters)

- `nodeType`: number
- `nodeName`: string
- `tagName`: string | null
- `namespaceURI`: string | null
- `prefix`: string | null
- `localName`: string | null
- `id`: string
- `className`: string
- `parentNode`: NodeRepr | null
- `parentElement`: NodeRepr | null
- `firstChild`: NodeRepr | null
- `lastChild`: NodeRepr | null
- `previousSibling`: NodeRepr | null
- `nextSibling`: NodeRepr | null
- `firstElementChild`: NodeRepr | null
- `lastElementChild`: NodeRepr | null
- `previousElementSibling`: NodeRepr | null
- `nextElementSibling`: NodeRepr | null
- `children`: NodeRepr[]
- `childElementCount`: number
- `nodeValue`: string | null
- `data`: string | null
- `textContent`: string
- `innerHTML`: string
- `outerHTML`: string
- `ownerDocument`: NodeRepr | null
- `childNodes`: NodeRepr[]
- `isConnected`: boolean
- `doctype`: NodeRepr | null
- `head`: NodeRepr | null
- `body`: NodeRepr | null
- `title`: string
- `documentElement`: NodeRepr | null

#### Manipulation Methods

- `append(newChild: NodeRepr): void`
- `appendChild(newChild: NodeRepr): NodeRepr`
- `prepend(newChild: NodeRepr): void`
- `after(newSibling: NodeRepr): void`
- `before(newSibling: NodeRepr): void`
- `insertBefore(newNode: NodeRepr, refNode?: NodeRepr | null): NodeRepr`
- `replaceChild(newChild: NodeRepr, oldChild: NodeRepr): NodeRepr`
- `replaceWith(newNode: NodeRepr): void`
- `remove(): void`
- `clone(): NodeRepr` (Shallow clone)
- `cloneRecursive(): NodeRepr` (Deep clone)
- `cloneNode(deep?: boolean): NodeRepr`
- `importNode(externalNode: NodeRepr, deep?: boolean): NodeRepr`
- `adoptNode(externalNode: NodeRepr): NodeRepr`
- `normalize(): void`

#### Attribute Methods

- `getAttribute(name: string): string | null`
- `setAttribute(name: string, value: string): void`
- `removeAttribute(name: string): void`
- `toggleAttribute(name: string, force?: boolean): boolean`
- `hasAttribute(name: string): boolean`
- `getAttributeNames(): string[]`
- `getAttributes(): Record<string, string>`
- `getAttributeNS(namespace: string | null, localName: string): string | null`
- `setAttributeNS(namespace: string | null, name: string, value: string): void`
- `removeAttributeNS(namespace: string | null, localName: string): void`
- `hasAttributeNS(namespace: string | null, localName: string): boolean`

#### Query & Selection Methods

- `select(selectors: string): NodeRepr | null`
- `selectAll(selectors: string): NodeRepr[]`
- `querySelector(selectors: string): NodeRepr | null`
- `querySelectorAll(selectors: string): NodeRepr[]`
- `getElementById(id: string): NodeRepr | null`
- `getElementsByClassName(classNames: string): NodeRepr[]`
- `getElementsByTagName(tagName: string): NodeRepr[]`
- `matches(selectors: string): boolean`
- `closest(selectors: string): NodeRepr | null`
- `contains(otherNode: NodeRepr): boolean`

#### ClassList & Dataset

- `classListAdd(className: string): void`
- `classListRemove(className: string): void`
- `classListToggle(className: string, force?: boolean): boolean`
- `classListContains(className: string): boolean`
- `datasetGet(): Record<string, string>`
- `datasetSet(key: string, value: string): void`
- `datasetRemove(key: string): void`

#### Other Methods

- `text(): string`
- `innerHtml(): string`
- `outerHtml(): string`
- `createElement(tagName: string): NodeRepr`
- `createTextNode(data: string): NodeRepr`
- `createComment(data: string): NodeRepr`
- `createDocumentFragment(): NodeRepr`
- `createProcessingInstruction(target: string, data: string): NodeRepr`
- `isSameNode(otherNode: NodeRepr): boolean`
- `isEqualNode(otherNode: NodeRepr): boolean`
- `compareDocumentPosition(other: NodeRepr): number`
- `lookupPrefix(namespace?: string): string | null`
- `lookupNamespaceURI(prefix?: string): string | null`
- `isDefaultNamespace(namespace?: string): boolean`
- `getRootNode(): NodeRepr`
- `hasChildNodes(): boolean`
- `hasAttributes(): boolean`

#### Text Node Methods

- `splitText(offset: number): NodeRepr`
- `substringData(offset: number, count: number): string`
- `appendData(data: string): void`
- `insertData(offset: number, data: string): void`
- `deleteData(offset: number, count: number): void`
- `replaceData(offset: number, count: number, data: string): void`

#### Insertion Methods

- `insertAdjacentElement(position: string, element: NodeRepr): NodeRepr | null`
- `insertAdjacentText(position: string, data: string): void`
- `insertAdjacentHTML(position: string, html: string): void`


## Contributing

```bash
npm install
npm run build
npm test
```

## Benchmark

```bash
npm run benchmark
```

---

For more usage examples and advanced API, see the source code and benchmarks in the repository.
