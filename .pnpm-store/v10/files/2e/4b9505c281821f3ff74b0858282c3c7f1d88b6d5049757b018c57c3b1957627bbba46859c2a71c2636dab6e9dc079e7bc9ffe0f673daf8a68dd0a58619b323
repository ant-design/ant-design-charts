# domparser-rs

一个使用 Rust 编写的超快 Node.js HTML 解析和操作插件。它旨在为 Node.js 提供符合标准的 DOM API。

## 特性

- **符合标准**：实现了标准的 DOM API，包括 `DOMParser`、`querySelector`、`classList` 等，使得从基于浏览器的代码迁移变得容易。
- 高性能的 DOM 解析和操作
- 通过 NAPI-RS 暴露简单的 JavaScript API
- 专为服务端和 CLI HTML 处理而设计
- 使用 Rust 编写，兼顾速度与安全性

## 安装

```bash
yarn add domparser-rs
# 或者
npm install domparser-rs
```

## 使用

```js
const { parse } = require('domparser-rs');
const root = parse('<div id="foo" class="bar">hello <span>world</span></div>');

const div = root.select('div');
console.log(div.getAttribute('id')); // "foo"
console.log(div.text()); // "hello world"
div.setAttribute('title', 'my-title');
console.log(div.outerHtml()); // <div id="foo" class="bar" title="my-title">hello <span>world</span></div>
```

## API 文档

### `parse(html: string): NodeRepr`

解析 HTML 字符串并返回代表根节点的 `NodeRepr` 实例。

### `DOMParser` 类

#### `parseFromString(string: string, mimeType: string): NodeRepr`
使用指定的 MIME 类型（例如 "text/html"）解析字符串。

---

### `NodeRepr` 类

表示一个 DOM 节点并提供各种操作方法。

#### 属性 (Getters/Setters)

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

#### 操作方法

- `append(newChild: NodeRepr): void`
- `appendChild(newChild: NodeRepr): NodeRepr`
- `prepend(newChild: NodeRepr): void`
- `after(newSibling: NodeRepr): void`
- `before(newSibling: NodeRepr): void`
- `insertBefore(newNode: NodeRepr, refNode?: NodeRepr | null): NodeRepr`
- `replaceChild(newChild: NodeRepr, oldChild: NodeRepr): NodeRepr`
- `replaceWith(newNode: NodeRepr): void`
- `remove(): void`
- `clone(): NodeRepr` (浅拷贝)
- `cloneRecursive(): NodeRepr` (深拷贝)
- `cloneNode(deep?: boolean): NodeRepr`
- `importNode(externalNode: NodeRepr, deep?: boolean): NodeRepr`
- `adoptNode(externalNode: NodeRepr): NodeRepr`
- `normalize(): void`

#### 属性方法

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

#### 查询与选择方法

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

#### 其他方法

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

#### 文本节点方法

- `splitText(offset: number): NodeRepr`
- `substringData(offset: number, count: number): string`
- `appendData(data: string): void`
- `insertData(offset: number, data: string): void`
- `deleteData(offset: number, count: number): void`
- `replaceData(offset: number, count: number, data: string): void`

#### 插入方法

- `insertAdjacentElement(position: string, element: NodeRepr): NodeRepr | null`
- `insertAdjacentText(position: string, data: string): void`
- `insertAdjacentHTML(position: string, html: string): void`


## 贡献

```bash
npm install
npm run build
npm test
```

## 基准测试

```bash
cargo benchmark
npm run benchmark
```

---

更多使用示例和高级 API，请参阅仓库中的源代码和基准测试。
