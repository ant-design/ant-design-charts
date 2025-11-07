<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [简体中文](./README.zh-CN.md)

<p align="center">
  <a href="https://github.com/ant-design/html2sketch">
   <img src="https://gw.alipayobjects.com/zos/antfincdn/9qm%24x99yzk/Logo.png" height="200" width="200" alt="html2sketch"/>
  </a>
</p>

<h1 align="center"><a href="https://ant-design.github.io/html2sketch/">html2sketch</a></h1>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM version][npm-next-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] ![Deploy CI][deploy-ci] [![Coverage][coverage]][codecov-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

[![Gitpod ready-to-code][gitpod-badge]][gitpod-url]

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/html2sketch

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/html2sketch.svg?style=flat-square&color=deepgreen&label=latest
[npm-next-image]: https://img.shields.io/npm/v/html2sketch/next?label=next&style=flat-square
[npm-url]: http://npmjs.org/package/html2sketch
[npm-size]: https://img.shields.io/bundlephobia/minzip/html2sketch?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=html2sketch

<!-- coverage -->

[coverage]: https://codecov.io/gh/ant-design/html2sketch/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ant-design/html2sketch/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/ant-design/html2sketch/workflows/Test%20CI/badge.svg
[deploy-ci]: https://github.com/ant-design/html2sketch/workflows/Deploy%20CI/badge.svg
[test-ci-url]: https://github.com/ant-design/html2sketch/actions?query=workflow%3ATest%20CI
[deploy-ci-ci]: https://github.com/ant-design/html2sketch/actions?query=workflow%3ADeploy%20CI
[download-image]: https://img.shields.io/npm/dm/html2sketch.svg?style=flat-square
[download-url]: https://npmjs.org/package/html2sketch

</div>

## Introduction

A module that transform HTML into Sketch JSON

## Quick Guide

### Install

```bash
npm i html2sketch --save
```

or

```
yarn add html2sketch
```

### Usage

`html2sketch` includes three methods `nodeToLayer` 、 `nodeToGroup` 和 `nodeToSymbol` 。

#### nodeToLayer

this method transforms a DOM node into Sketch Objects without processing children of nodes

```js
import { nodeToLayer } from 'html2sketch';

const fn = async () => {
  // 1. get DOM node
  const node = document.getElementById('id');

  // 2. run nodeToLayer method
  const layer = await nodeToLayer(node);

  // 3. generate Sketch JSON
  const sketchJSON = layer.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

#### nodeToGroup

This method transforms a DOM node and its children into a Sketch Group Object

```js
import { nodeToGroup } from 'html2sketch';

const fn = async () => {
  // 1. get DOM node
  const node = document.getElementById('id');

  // 2. run nodeToGroup method
  const group = await nodeToGroup(node);

  // 3. generate Sketch JSON
  const sketchJSON = group.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

#### nodeToSymbol

This method transforms a DOM node and its children into a Sketch Symbol Object

```js
import { nodeToSymbol } from 'html2sketch';

const fn = async () => {
  // 1. get DOM node
  const node = document.getElementById('id');

  // 2. run nodeToSymbol method
  const symbol = await nodeToSymbol(node);

  // 3. generate Sketch JSON
  const sketchJSON = symbol.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

## What's next step with Sketch JSON?

the generated Sketch JSON strictly match with [Sketch File Format](https://developer.sketch.com/file-format/) Schema, So you can just synthesize the JSON according to the [Sketch File Format](https://developer.sketch.com/file-format/) into a '. Sketch 'file .

So the Sketch file can be obtained simply by synthesizing the corresponding JSON into a '. Sketch 'file according to the Sketch file specification

There is some community modules of synthesizing:

- [sketch-json-api](https://github.com/ant-design/sketch-json-api)
- [node-sketch](https://github.com/oscarotero/node-sketch)
- [sketch-constructor](https://github.com/amzn/sketch-constructor)

If you want to use the JSON object directly in sketch, you can use the [Sketch JSON](https://github.com/arvinxx/sketch-json) Plugin,which will allow you just paste JSON into Sketch.

## Why?

The main application of this module focus on C2D (Code to Design).This module mainly refers to [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp).

html-sketchapp can directly transforms any HTML page into a Sketch document without framework limit, but there are significant limitations:

- **Not supported pseudoelements, overflow,some kind of gradient, transform, and other properties**: As a result, many web pages transformed by html-sketchapp are not visually restored;

- **Although html-sketchapp don't dependent on the framework, it fully dependent on the Sketch App**: Because JSON structure generated by html-sketchapp does not strictly match [Sketch File Format](https://developer.sketch.com/file-format/) ,it can't generate sketch document directly.What's more,it also lead to lacking of the ability to integrate on the server side.

- **html-sketchapp developed by JS ,lacking perfect type definition, the project architecture is not reasonable, the secondary development is difficult**

### What html2sketch do?

html2sketch makes a lot of optimization on the basis of html-sketchapp, and takes the essence to discard the dross:

#### Enhancement of parsing ability

html2sketch supports most web page styles which is not supported by html-sketchapp, such as pseudo-elements,radial gradient, text overflows, and so on.This is important for transforming result.Perhaps reproducing 80% using html-sketchapp, but 95% or more using html2sketch. Of course, the parsing capability of the module also needs to be improved step by step by covering the parsing scene. If you encounter any incorrect parsing situation under the real word, please be sure to submit an [issue](https://github.com/ant-design/html2sketch/issues), I will solve it as soon as possible. The styles supported by this module are currently available on [解析用例](https://ant-design.github.io/html2sketch/e2e).

#### Decouple from the Sketch App

The biggest difference at the functional level of html2sketch is its decoupling from the Sketch App.The relevant parsing capabilities (Svg, image, font, and so on) are all built from scratch.

Thanks to the JSON generated by html2Sketch will strictly match [Sketch File Format](https://developer.sketch.com/file-format/) , you can directly synthesize it into a legal `.sketch` file by using [sketch-json-api](https://github.com/ant-design/sketch-json-api) or [node-sketch](https://github.com/oscarotero/node-sketch) . Therefore,based on html2sketch, it is possible to parse a web page and generate the Sketch file using any normal server.

#### Development based on Typescript

Developed with Typescript makes it a good experience for both consumers and producers.Whether it's in the organization of the project, code comments, or unit testing, there are guarantees.

## Develop

Refer to [Develop Guidelines](https://github.com/ant-design/html2sketch/guide)

## License

[MIT](./LICENSE)
