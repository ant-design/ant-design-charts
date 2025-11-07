<h1 align="center">@antv/util</h1>

<div align="center">

AntV 底层依赖的工具库，包含有所有的 util 纯函数，**不建议在自己业务中使用**，避免因为迭代过程的 Break Change 给您带来维护成本。

[![Build Status](https://github.com/antvis/util/workflows/build/badge.svg)](https://github.com/antvis/util/actions)
[![npm Version](https://img.shields.io/npm/v/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm Download](https://img.shields.io/npm/dm/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm License](https://img.shields.io/npm/l/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)

</div>


## ✨ 特性

- **轻量级**：按需实现代码逻辑，尽可能的减少包大小，目前约 `12kb`；在 lodash 未优化包大小之前，不要在 AntV 中使用 lodash。
- **工具丰富**：包含了不同类别的函数上百种。
- **可视化**：特化工具可视化中使用的颜色、形状、路径、向量、矩阵等方向的功能。


## 📦 安装

```bash
$ npm install @antv/util
```

## 🔨 上手

```ts
import { path2String, path2Array } from '@antv/util';

path2String([
  ['M', 10, 10],
  ['L', 100, 100],
  ['l', 10, 10],
  ['h', 20],
  ['v', 20],
]); 
// ----> 'M10 10L100 100l10 10h20v20'

path2Array('M10 10L100 100l10 10h20v20');
/**
 *  ------->
 * [
 *  ['M', 10, 10],
 *  ['L', 100, 100],
 *  ['l', 10, 10],
 *  ['h', 20],
 *  ['v', 20],
 * ]
 */
```


## 📎 API

- [color（颜色）](./docs/api/color.md) - 颜色格式转化、g 渐变转化 css 渐变等
- [dom（元素）](./docs/api/dom.md) - 基础和 css 添加
- [math（数学）](./docs/api/math.md) - 基础数学计算，包含判断点是否在两个点的线段上、判断点十分在多变形内等
- [matrix（矩阵）](./docs/api/matrix.md) - 向量及矩阵计算方法
- [path（图形）](./docs/api/path.md) - 图形绘画计算方法，包含转换、几何计算等
- [lodash（通用方法）](./docs/api/lodash.md) - util 内置 lodash 通用方法，并添加了更多针对 AntV 的方法工具。


## 🚥 原则

- util 只有一个 npm 包，按照目录来组织不同类型的方法，避免 monorepo 互相依赖。
- 内容和 AntV 强相关，避免做和 lodash 等相同的工具库。
- 不使用的方法，及时删除，并保持新增方法可以按需引入。
- 保持单元测试、文档的完整性。
- 旧版本不维护，如果 AntV 技术栈的旧版本需要迭代，请升级到 v3。


## 📮 贡献

```bash
$ git clone git@github.com:antvis/util.git

$ cd util

$ npm i

$ npm t
```

写完代码之后，提交 PR 即可。


## License

MIT@[AntV](https://github.com/antvis).
