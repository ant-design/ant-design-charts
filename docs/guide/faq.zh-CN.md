---
title: FAQ
order: 5
nav:
  title: 使用文档
  order: 1
---

## FAQ

以下整理了一些 Ant Design Charts 社区常见的问题和官方答复。

### 1、 G2、G2Plot、Ant Design Charts 什么关系？

- 同一团队开发。
- G2 是 G2Plot 的底层依赖，使用了图形语法，使用成本相对较高，功能强大。
- G2Plot 是 G2 的上层封装，把图形语法装换成了配置项。
- Ant Design Charts 是 G2Plot 的 React 版本，功能和 G2Plot 同步，并内置了一些图相关的图表，例如流程图、组织架构图等。
- 其它一些图表是其它团队的同学基于 G2 或 G2Plot 实现。

### 2、Object(...) is not a function

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*GnrEQZUVa5AAAAAAAAAAAAAAARQnAQ" alt="示例" />

该问题一般是因为 React 版本过低，不支持 hooks 引起的，升级到 16 最新版本即可。

### 3、如何监听事件并获取当前值

```tsx | pure
<Bar
  onReady={(plot) => {
    plot.chart.on('plot:click', (evt) => {
      const { x, y } = evt;
      console.log(plot.chart.getTooltipItems({ x, y }));
    });
  }}
/>
```

### 4、怎么设置横轴从 0 开始

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*NAvlTZ66qzMAAAAAAAAAAAAAARQnAQ" alt="faq">

横轴的范范是可配置的，在 meta 里面配置即可，range 可选范围是 0~1。

```ts
meta: {
  [xField]: {
    range: [0, 1]
  }
}
```

### 5、双轴图如何共用一个 Y 轴

可以通过开启 scale 同步， 然后隐藏其中一个 y 轴坐标。

```ts
// 适用于 DualAxes plot
{
  yFields: ['y1', 'y2'],
  meta: {
    y1: { sync: 'y2' },
    y2: { sync: true },
  },
  yAxis: {
    y2: false
  }
}
```

### 6、打包文件过大，如何按需加载

按需加载可以通过从 lib 中引入依赖，也可以通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现。

- 从 lib 引入

```ts
import Line from '@ant-design/charts/lib/line';
```

- 使用 babel-plugin-import

```ts
  // 安装依赖
  npm install babel-plugin-import -D

  // 配置 .babelrc 文件
  {
    "plugins": [
      ["import", {
        "libraryName": "@ant-design/charts",
        "libraryDirectory": "lib"
      }]
    ]
  }
```

### 更多问题

请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈，搜索是否有类似问题。我们会尽快响应和相应改进这篇文档。
