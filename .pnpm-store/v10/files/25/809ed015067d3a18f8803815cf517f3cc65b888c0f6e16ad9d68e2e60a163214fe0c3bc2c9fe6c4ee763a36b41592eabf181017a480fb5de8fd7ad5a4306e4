# XML Reader

Reads XML documents and emits JavaScript objects with a simple, easy to use structure.

## Features

- Small, fast and simple
- Runs everywhere (browser, node.js, React Native, ServiceWorkers, WebWorkers...)
- Event driven and synchronous API
- Can process input piece-by-piece in a serial fashion
- Stream mode (low memory usage)
- Reads CDATA sections

## Install

```bash
npm install --save xml-reader
```

## Node structure

Objects emitted by the reader are trees where each node has the following structure:

```typescript
interface XmlNode {
    name: string; // element name (empty for text nodes)
    type: string; // node type (element or text), see NodeType constants
    value: string; // value of a text node
    parent: XmlNode; // reference to parent node (null with parentNodes option disabled or root node)
    attributes: {[name: string]: string}; // map of attributes name => value
    children: XmlNode[];  // array of children nodes
}
```

## Breaking changes in version 2

Added the `tagPrefix` option with a default value of `'tag:'`. This way we avoid possible name collisions with the `done` event.
To keep the old behavior, set it to an empty string.

## Reading results

Check the [`xml-query`](https://github.com/pladaria/xml-query) package! It is very useful to read values from the structures returned by `xml-reader`.

## Examples

### Read document (event driven)

Basic example. Read and parse a XML document.

```javascript
const XmlReader = require('xml-reader');
const reader = XmlReader.create();
const xml =
    `<?xml version="1.0" encoding="UTF-8"?>
    <message>
        <to>Alice</to>
        <from>Bob</from>
        <heading color="blue">Hello</heading>
        <body color="red">This is a demo!</body>
    </message>`;

reader.on('done', data => console.log(data));
reader.parse(xml);

/*
Console output:

{ name: 'message',
  type: 'element',
  children: [
    { name: 'to',
      type: 'element',
      children: [{ type: 'text', value: 'Alice' }]},
    { name: 'from',
      type: 'element',
      children: [{ type: 'text', value: 'Bob' }]},
    { name: 'heading',
      type: 'element',
      attributes: { color: 'blue' },
      children: [{ type: 'text', value: 'Hello' }]},
    { name: 'body',
      type: 'element',
      attributes: { color: 'red' },
      children: [{ type: 'text', value: 'This is a demo!' }]}]}

Note: empty values and references to parent nodes removed for brevity!
*/
```

### Read document (synchronous)

This mode is only valid for reading complete documents (root node must be closed).

```javascript
const XmlReader = require('xml-reader');

const xml = '<doc>Hello!</doc>';
const result = XmlReader.parseSync(xml/*, options*/);
```

### Stream mode

In stream mode, nodes are removed from root as they are emitted. This way memory usage does not increases.

```javascript
const XmlReader = require('xml-reader');

const reader = XmlReader.create({stream: true});
const xml =
    `<root>
        <item v=1/>
        <item v=2/>
        <item v=3/>
    </root>`;

reader.on('tag:item', (data) => console.log(data));
// {name: 'item', type: 'element', value: '', attributes: {v: '1'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '2'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '3'}, children: []}

reader.on('done', (data) => console.log(data.children.length));
// 0

reader.parse(xml);
```

You can also listen to all tags:

```javascript
reader.on('tag', (name, data) => console.log(`received a ${name} tag:`, data));
```

### Stream mode (chunked)

In this example we are calling multiple times to the parser. This is useful if your XML document is a stream that comes from a TCP socket or WebSocket (for example XMPP streams).

Simply feed the parser with the data as it arrives. As you can see, the result is exactly the same as the previous one.

```javascript
const XmlReader = require('xml-reader');

const reader = XmlReader.create({stream: true});
const xml =
    `<root>
        <item v=1/>
        <item v=2/>
        <item v=3/>
    </root>`;

reader.on('tag:item', (data) => console.log(data));
// {name: 'item', type: 'element', value: '', attributes: {v: '1'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '2'}, children: []}
// {name: 'item', type: 'element', value: '', attributes: {v: '3'}, children: []}

reader.on('done', (data) => console.log(data.children.length));
// 0

// Note that we are calling the parse function providing just one char each time
xml.split('').forEach(char => reader.parse(char));
```

### Reset

Use the `reset()` method to reset the reader. This is useful if a stream gets interrupted and you want to start a new one or to use the same reader instance to parse multiple documents (just reset the reader between them).

Example:
```javascript
const doc1 = '<document>...</document>';
const doc2 = '<document>...</document>';

reader.parse(doc1);

// when the document ends, the reader stops emitting events
reader.reset();

// now you can parse a new document
reader.parse(doc2);
```

### Options

Default options are:

```javascript
{
  stream: false,
  parentNodes: true,
  tagPrefix: 'tag:',
  doneEvent: 'done',
  emitTopLevelOnly: false,
}
```

#### parentNodes (boolean)

If `true` (default), each node of the AST has a `parent` node which point to its parent. If `false` the parent node is always `null`.

#### stream (boolean)

Enable or disable stream mode. In stream mode nodes are removed from root after being emitted. Default `false`.
Ignored in `parseSync`;


#### doneEvent (string)

Default value is `'done'`. This is the name of the event emitted when the root node is closed and the parse is done.
Ignored in `parseSync`;

#### tagPrefix (string)

Default value is `'tag:'`. The event driven API emits an event each time a tag is read. Use this option to set a name prefix.
Ignored in `parseSync`;

#### emitTopLevelOnly (boolean)

Default value is `false`. When true, tag events are only emitted by top level nodes (direct children from root). This is useful for XMPP streams like XMPP where each top level child is a stanza.

For example, given the following XML stream:

```xml
<stream>
  <message from="alice" to="bob">
    <body>hello</body>
    <date>2016-10-06</date>
  </message>

  <message from="alice" to="bob">
    <body>bye</body>
    <date>2016-10-07</date>
  </message>
```

tags emitted with `emitTopLevelOnly=false`
```text
body
date
message
body
date
message
```

tags emitted with `emitTopLevelOnly=true`

```text
message
message
```

## License

MIT
