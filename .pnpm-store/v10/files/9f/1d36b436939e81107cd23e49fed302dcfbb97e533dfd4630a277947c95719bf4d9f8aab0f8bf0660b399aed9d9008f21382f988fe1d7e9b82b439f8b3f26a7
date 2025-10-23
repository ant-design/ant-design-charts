<p align="center">
  <img src="https://raw.githubusercontent.com/pladaria/xml-lexer/master/logo.png" alt="XML-Lexer"/>
</p>
<p align="center">
  Simple JavaScript Lexer for XML documents
</p>

## Features
- Very small, fast and simple! (~250 sloc)
- Event driven API (SAX-like)
- Works in Browser, WebWorkers, ServiceWorkers, Node.js or React Native
- Fault tolerant
- Handles CDATA
- Easy to extend and fine tune (state machine is exposed in Lexer instances)

If you are looking for a [XML Reader/Parser to convert XML documents into Javascript objects](https://github.com/pladaria/xml-reader), check my other projects:
- [xml-reader](https://github.com/pladaria/xml-reader)
- [xml-query](https://github.com/pladaria/xml-query)

## Install

```bash
npm install --save xml-lexer
```

## Examples

### Happy case

```javascript
const lexer = require('xml-lexer').create();

const xml =
`<hello color="blue">
  <greeting>Hello, world!</greeting>
</hello>`;

lexer.on('data', (data) => console.log(data));
lexer.write(xml);

/*
Console output:

{ type: 'open-tag', value: 'hello' }
{ type: 'attribute-name', value: 'color' }
{ type: 'attribute-value', value: 'blue' }
{ type: 'open-tag', value: 'greeting' }
{ type: 'data', value: 'Hello, world!' }
{ type: 'close-tag', value: 'greeting' }
{ type: 'close-tag', value: 'hello' }
*/
```
### Chunked processing

```javascript
const lexer = require('xml-lexer').create();

const chunk1 = `<hello><greet`; // note this
const chunk2 = `ing>Hello, world!</greeting></hello>`;

lexer.on('data', (data) => console.log(data));
lexer.write(chunk1);
lexer.write(chunk2);

/*
Console output:

{ type: 'open-tag', value: 'hello' }
{ type: 'open-tag', value: 'greeting' }
{ type: 'data', value: 'Hello, world!' }
{ type: 'close-tag', value: 'greeting' }
{ type: 'close-tag', value: 'hello' }
*/
```

### Document with errors

```javascript
const lexer = require('xml-lexer').create();

lexer.on('data', (data) => console.log(data));
lexer.write(`<<hello">hi</hello attr="value">`);

/*
Console output (note the open-tag value):

{ type: 'open-tag', value: '<hello"' }
{ type: 'data', value: 'hi' }
{ type: 'close-tag', value: 'hello' }
*/
```

### Update state machine to fix document errors

```javascript
const Lexer = require('xml-lexer');
const lexer = Lexer.create();

lexer.stateMachine[Lexer.State.tagBegin][Lexer.Action.lt] = () => {};
lexer.stateMachine[Lexer.State.tagName][Lexer.Action.error] = () => {};

lexer.on('data', (data) => console.log(data));
lexer.write(`<<hello">hi</hello attr="value">`);

/*
Console output (note the fixed open-tag value):

{ type: 'open-tag', value: 'hello' }
{ type: 'data', value: 'hi' }
{ type: 'close-tag', value: 'hello' }
*/
```

## License

MIT
