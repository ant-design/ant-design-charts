---
title: 快速开始
order: 2
nav:
  title: 使用文档
  order: 1
---

## 快速上手

## 安装

### NPM 模式(推荐)

```bash
$ npm install @ant-design/charts
```

### CDN 模式

推荐使用 npm 的方式，<b>CDN 模式下由于底层依赖不一样，为了降低包体积，从 1.0.5 版本开始，组织架构图、流程图、资金流向图、缩进树图被打包到 graphs.min.js 里，其它图表打包到 charts.min.js 里</b>，使用时按需引入即可。

graphs 包含图表：

- OrganizationTreeGraph
- DagreGraph
- DagreFundFlowGraph
- IndentedTreeGraph

```ts
// 引入在线资源
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
// Graphs 相关的图表
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/graphs.min.js"></script>
```

由于 @ant-design/charts 里面 externals 了 `react` 和 `react-dom`，该方式使用时需要在项目里面做同样的操作，通过 CDN 的方式在 `charts.min.js` 之前引入 `react` 和 `react-dom`。

```ts
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
}
// public/index.html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
// 按需引入
<script crossorigin src="https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js"></script>
<script crossorigin src="https://unpkg.com/@ant-design/charts@1.0.5/dist/graphs.min.js"></script>
```

使用方式

```ts
// 折线图，其它图表类似
const { Line } = window.charts;
// 组织架构图
const { OrganizationTreeGraph } = window.graphs;
```

## 使用

大部分 demos 使用了父容器宽高，请确保父容器宽高或者手动设置图表宽高。

```tsx | pure
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
```

最终效果：

```tsx
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
```
