---
title: 快速上手
order: 1
---

## 安装
### 方式一：通过 npm 安装

我们提供了 Ant Design 的 npm 包，通过下面的命令即可完成安装：

```bash
npm install @ant-design/charts --save
```

成功安装完成之后，即可使用 `import` 或 `require` 进行引用：

```ts
import { Line } from '@ant-design/charts';
```

```ts
"peerDependencies": {
    "lodash-es": "^4.17.20",
    "react": ">=16.8.4",
    "react-dom": ">=16.8.4"
  }
```

在需求明确的情况下，也可仅引入相关子包

```bash
# 统计图表
npm install @ant-design/plots --save 
```

### 方式二：浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源。

```ts
// Plots 相关的图表
<script type="text/javascript" src="https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js"></script>
```

由于 @ant-design/charts 里面 externals 了 `react` 、`react-dom` 和 `lodash-es`，使用时需要通过 CDN 的方式在 `charts.min.js` 之前引入对应包的 CDN 地址。
 
```ts
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
  'lodash-es': 'lodash'
}
// public/index.html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/lodash@4.17.21/lodash.js"></script>
// 按需引入
<script type="text/javascript" src="https://unpkg.com/@ant-design/plots@latest/dist/plots.min.js"></script>
```

使用方式

```ts
// 折线图，其它图表类似
const { Line } = window.charts;
```


```html
<!-- 下载到本地 引入本地脚本 -->
<script src="./plots.min.js"></script>
<script>
  const { Line } = window.charts;
</script>
```

## 快速使用

在 Ant Design Charts 引入页面后，我们就已经做好了创建第一个图表的准备了，下面以一个基础折线图为例开始我们第一个图表的创建。大部分 demos 使用了父容器宽高，请确保父容器宽高或者手动设置图表宽高。

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
  };
  return <Line {...config} />;
};
export default Page;
```
