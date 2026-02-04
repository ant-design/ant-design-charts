<h1 align="center">
<b>@antv/coord</b>
</h1>
<div align="center">

Toolkit for mapping elements of sets into geometric objects. ([demo](https://observablehq.com/@pearmini/antv-coord))

![examples](https://gw.alipayobjects.com/mdn/rms_026665/afts/img/A*3jseR7EZEBwAAAAAAAAAAAAAARQnAQ)

[![Build Status](https://github.com/antvis/coord/workflows/build/badge.svg?branch=master)](https://github.com/antvis/coord/actions)
[![Coverage Status](https://img.shields.io/coveralls/github/antvis/coord/master.svg)](https://coveralls.io/github/antvis/coord?branch=master)
[![npm Version](https://img.shields.io/npm/v/@antv/coord.svg)](https://www.npmjs.com/package/@antv/coord)
[![npm Download](https://img.shields.io/npm/dm/@antv/coord.svg)](https://www.npmjs.com/package/@antv/coord)
[![npm License](https://img.shields.io/npm/l/@antv/coord.svg)](https://www.npmjs.com/package/@antv/coord)

</div>

## ✨ Features

- **Powerful**: Not only does @antv/coord provide some basic affine transformations(translate, rotate, scale, etc.), it also provide some advanced coordinate system transformations(polar, helix, parallel) and cool fisheye transformations.
- **Fixable**: It is a independent lib which means you can use it with other libs besides [G2](https://github.com/antvis/g2/), such as [D3](https://github.com/d3/d3) to create some awesome charts and animations.
- **Fully embrace TypeScript**: All code are written in TypeScript and complete type definition files are provided.

![bubbles](https://gw.alipayobjects.com/mdn/rms_026665/afts/img/A*G5jIQLRQ86QAAAAAAAAAAAAAARQnAQ)

## 📦 Installation

```bash
$ npm install @antv/coord
```

## 🔨 Getting Started

```ts
import { Coordinate, Options } from '@antv/coord';

const optons: Options = {
  x: 0,
  y: 0,
  width: 500,
  height: 500,
  transformations: [['cartesian']]
};

const coord = new Coordinate(options);
coord.transform('translate', 10, 10);
coord.map([0.5, 0.5]); // [260, 260]
coord.getSize(); // [500, 500]
coord.getCenter(); // [250, 250]
```

## 📎 Links

- [Online Demo](https://observablehq.com/@pearmini/antv-coord)
- [API Reference](./docs/api/README.md)

## 📮 Contribution

```bash
$ git clone git@github.com:antvis/coord.git

$ cd coord

$ npm i

$ npm t
```

Then send a pull request after coding.

## 📄 License

MIT@[AntV](https://github.com/antvis).
