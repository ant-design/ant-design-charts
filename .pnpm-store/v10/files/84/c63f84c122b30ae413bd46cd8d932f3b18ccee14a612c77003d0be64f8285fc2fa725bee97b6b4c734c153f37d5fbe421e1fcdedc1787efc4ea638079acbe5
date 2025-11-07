<h1 align="center">
<b>@antv/scale</b>
</h1>

<div align="center">

> 将抽象数据映射为视觉数据的比例尺工具包。 [在线演示](https://observablehq.com/@pearmini/antv-scale) · [English](./README.en-US.md)

![scale mapping](https://user-images.githubusercontent.com/7856674/116353528-85644a80-a829-11eb-85e4-3463a29000a9.png)

[![Build Status](https://github.com/antvis/scale/workflows/build/badge.svg?branch=master)](https://github.com/antvis/scale/actions)
[![Coverage Status](https://img.shields.io/coveralls/github/antvis/scale/master.svg)](https://coveralls.io/github/antvis/scale?branch=master)
[![npm Version](https://img.shields.io/npm/v/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)
[![npm Download](https://img.shields.io/npm/dm/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)
[![npm License](https://img.shields.io/npm/l/@antv/scale.svg)](https://www.npmjs.com/package/@antv/scale)

</div>

## ✨ 特性

- **功能强大**：内置包含 15+ 丰富的比例尺类型，满足各种不同的定制化需求。
- **高性能**：利用各种手段方法去提升数据映射的性能。
- **TypeScript**：全部 TypeScript，并提供了完整有效的类型定义。

![scale examples](https://gw.alipayobjects.com/mdn/rms_40052e/afts/img/A*Usg2S685JQkAAAAAAAAAAAAAARQnAQ)

## 📦 安装

```bash
$ npm install @antv/scale
```

## 🔨 上手

- 基本用法

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

- 自定义可读 tickMethod

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

## 📎 链接

- [入门介绍](https://observablehq.com/@pearmini/antv-scale)
- [API 索引](./docs/api/readme.md)

## 📮 贡献

```bash
$ git clone git@github.com:antvis/scale.git

$ cd scale

$ npm i

$ npm t
```

写完代码之后，提交 PR 即可。

## 📄 License

MIT@[AntV](https://github.com/antvis).
