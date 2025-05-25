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

前置依赖
```ts
"peerDependencies": {
    "react": ">=16.8.4",
    "react-dom": ">=16.8.4"
  }
```

### 方式二：浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源。

```ts
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
```

由于 @ant-design/charts 里面 externals 了 `react` 、`react-dom`，使用时需要通过 CDN 的方式在 `charts.min.js` 之前引入对应包的 CDN 地址。
 
```ts
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
  'lodash': 'lodash',
}
// public/index.html
<script crossorigin src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/lodash@4.17.21/lodash.min.js"></script>

// 按需引入
<script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
```

使用方式

```ts
// 折线图，其它图表类似
const { Line } = window.Charts;
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

## 获取图表实例

图表实例用于后续事件监听、绑定、图表下载等，目前提供 2 种获取方式。

```tsx | pure
// 通过 onReady 配置获取
const config = {
  onReady: ( plot ) => {
    const { chart } = plot;
    chart.on('element:click', (evt) => {
      console.log(evt.target)
    })
  }
}

// 通过 ref 获取
const ref = useRef(null);
return (
  <div>
    <button onClick={() => console.log(ref.current)}>点我</button>
    <Line {...config} ref={ref} />
  </div>
);
```
