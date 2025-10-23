<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> [English](./README.md) | 简体中文

<p align="center">
  <a href="https://github.com/ant-design/html2sketch">
   <img src="https://gw.alipayobjects.com/zos/antfincdn/Q0VnKtVzuB/Logo.png" height="200" width="200" alt="html2sketch"/>
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

## 简介

一个将 HTML 转 Sketch JSON 的模块

## 快速上手

### 安装

```bash
npm i html2sketch --save
```

或

```
yarn add html2sketch
```

### 使用

`html2sketch` 包含 3 个主要方法 `nodeToLayer` 、 `nodeToGroup` 和 `nodeToSymbol` 。

#### nodeToLayer

将 DOM 节点转成 Sketch 的对象,转换时不处理节点的子级

```js
import { nodeToLayer } from 'html2sketch';

const fn = async () => {
  // 1. 获取 DOM 节点
  const node = document.getElementById('id');

  // 2. 调用转换方法
  const layer = await nodeToLayer(node);

  // 3. 生成为 Sketch JSON
  const sketchJSON = layer.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

#### nodeToGroup

将 DOM 节点以及它的子级整体转成 Sketch 的 Group 对象

```js
import { nodeToGroup } from 'html2sketch';

const fn = async () => {
  // 1. 获取 DOM 节点
  const node = document.getElementById('id');

  // 2. 调用转换方法
  const group = await nodeToGroup(node);

  // 3. 生成为 Sketch JSON
  const sketchJSON = group.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

#### nodeToSymbol

将 DOM 节点转 Sketch 的 Symbol 对象

```js
import { nodeToSymbol } from 'html2sketch';

const fn = async () => {
  // 1. 获取 DOM 节点
  const node = document.getElementById('id');

  // 2. 调用转换方法
  const symbol = await nodeToSymbol(node);

  // 3. 生成为 Sketch JSON
  const sketchJSON = symbol.toSketchJSON();

  return sketchJSON;
};

fn().then((json) => {
  console.log(json);
});
```

## 有了 Sketch JSON 的下一步?

生成的 Sketch JSON 严格符合 [Sketch File Format](https://developer.sketch.com/file-format/) 结构，因此只需要简单地将相应的 JSON 按照 Sketch 文件规范合成 `.sketch` 文件，即可获得 Sketch 文件。

社区相关 API 模块:

- [sketch-json-api](https://github.com/ant-design/sketch-json-api)
- [node-sketch](https://github.com/oscarotero/node-sketch)
- [sketch-constructor](https://github.com/amzn/sketch-constructor)

如果希望直接使用该 JSON 对象，可以使用 [Sketch JSON](https://github.com/arvinxx/sketch-json) 插件，一键粘贴 JSON 进入 Sketch 中。

## 开发动机

本模块主要的应用领域在于 C2D (Code to Design)。主要参考了 [html-sketchapp](https://github.com/html-sketchapp/html-sketchapp) 。

html-sketchapp 可以直接将任何框架开发的 HTML 页面转换成 Sketch 文档，但是也具有明显的局限性：

- **不支持伪类、文本溢出（overflow）、渐变、transform 等属性**: 这就使得很多网页使用 html-sketchapp 解析出来的视觉还原度不高；

- **html-sketchapp 虽然不依赖框架，但是与 Sketch App 完全耦合.**: 生成的 JSON 并不严格符合 [Sketch File Format](https://developer.sketch.com/file-format/) ，所以无法直接生成 sketch 文档，缺少在服务器端集成的能力。

- **html-sketchapp 基于 js 开发，缺少完善的类型定义，项目架构不太合理，二次开发难度大。**

### html2sketch 做了什么？

html2sketch 在 html-sketchapp 的基础上做了诸多优化，取其精华去其糟粕：

#### 解析能力强化

html2sketch 支持了大部分 html-sketchapp 不支持的网页样式，比如伪类、渐变、文本溢出等等。这一点对于解析效果来说，非常重要。可能原本使用 html-sketchapp 能够还原出 80% 的效果，而在使用 html2sketch 模块之后，可以支持到 95%乃至以上的还原度。当然，模块的解析能力也需要靠解析场景的覆盖来逐步提升，如果在使用当中遇到不正确的解析情况，请务必给我提 [issue](https://github.com/ant-design/html2sketch/issues) ，我会尽快解决。目前该模块支持的样式都在 [解析用例](https://ant-design.github.io/html2sketch/e2e) 中进行了呈现。

#### 与 Sketch App 解耦

html2sketch 这个模块在功能层面最大的差异点，就是与 Sketch App 解耦。相关的解析能力 （Svg、图片、字体等的解析）全都从零开始构建。

由于 html2sketch 生成的 Sketch JSON 将严格符合 [Sketch File Format](https://developer.sketch.com/file-format/) ，所以在获得这个 Sketch JSON 后，就可以直接使用 [sketch-json-api](https://github.com/ant-design/sketch-json-api)、[node-sketch](https://github.com/oscarotero/node-sketch) 等模块合成合法的 sketch 文件，不需要其他任何处理。因此，基于这个模块就可以使用任何普通的服务器解析网页，生成 sketch 文件。

#### 基于 Typescript 开发

html2sketch 采用 Typescript 进行开发，所以无论是作为消费者的使用体验，还是作为生产者的开发体验，都将十分良好。无论是项目的组织结构、代码注释、单元测试上都有一定保证。

## 开发

查看 [开发指南](https://github.com/ant-design/html2sketch/guide)

## License

[MIT](./LICENSE)
