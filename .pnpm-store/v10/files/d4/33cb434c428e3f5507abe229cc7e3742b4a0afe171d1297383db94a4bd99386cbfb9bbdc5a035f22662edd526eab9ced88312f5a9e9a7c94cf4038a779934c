<h1 align="center">
<b>@antv/scale</b>
</h1>

<div align="center">

> Toolkit for mapping abstract data into visual representation. [Living Demo](https://observablehq.com/@pearmini/antv-scale) · [中文文档](./README.md)

![scale mapping](https://user-images.githubusercontent.com/7856674/116353528-85644a80-a829-11eb-85e4-3463a29000a9.png)

[![Build Status](https://github.com/antvis/scale/workflows/build/badge.svg?branch=master)](https://github.com/antvis/scale/actions)
[![Coverage Status](https://img.shields.io/coveralls/github/antvis/scale/master.svg)](https://coveralls.io/github/antvis/scale?branch=master)
[![npm Version](https://img.shields.io/npm/v/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)
[![npm Download](https://img.shields.io/npm/dm/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)
[![npm License](https://img.shields.io/npm/l/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)

</div>

## ✨ Features

- **Powerful**: Ability to customize tickMethod are offered with abundant kinds of scales.
- **High performance**: Use different methods to cache some state of scales to improve performance.
- **Fully embrace TypeScript**: All code are written in TypeScript and complete type definition files are provided.

![scale examples](https://gw.alipayobjects.com/mdn/rms_40052e/afts/img/A*Usg2S685JQkAAAAAAAAAAAAAARQnAQ)

## 📦 Installation

```bash
$ npm install @antv/scale
```

## 🔨 Getting Started

- Basic usage

```ts
import { Linear, LinearOptions } from '@antv/scale';

const options: LinearOptions = {
  domain: [0, 10],
  range: [0, 100],
};
const x = new Linear(options);

x.map(2); // 20
x.invert(20); // 2
x.getTicks(); // [0, 2.5, 5, 7.5, 10]
```

- Customize tickMethod

```ts
import { Linear } from '@antv/scale';

const x = new Linear({
  domain: [0, 10],
  range: [0, 100],
  tickCount: 3,
  tickMethod: () => [0, 5, 10],
});

x.getTicks(); // [0, 5, 10]
```

## 📎 Links

- [Introduction](https://observablehq.com/@pearmini/antv-scale)
- [API Reference](./docs/api/readme.md)

## 📮 Contribution

```bash
$ git clone git@github.com:antvis/scale.git

$ cd scale

$ npm i

$ npm t
```

Then send a pull request after coding.

## 📄 License

MIT@[AntV](https://github.com/antvis).
