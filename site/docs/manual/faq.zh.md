---
title: FAQ
order: 8
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

可能原因：

- React 版本过低，不支持 hooks 引起的，升级到 16.8.4 版本或最新版本即可。
- 使用了 2.x 版本的 ant-design-pro ，导致底层依赖冲突，建议升级 pro 到最新版本。
- 使用了 BizCharts 依赖冲突。

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

横轴的范围是可配置的，在 meta 里面配置即可，range 可选范围是 0~1。

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

方案 1：从 es 引入

从对应子包里面引入

```ts
// 统计图表
import Line from '@ant-design/plots/es/components/line';
// 关系图
import DecompositionTreeGraph from '@ant-design/graphs/es/components/decomposition-tree-graph';
// 地理可视化
import AreaMap from '@ant-design/maps/es/components/area-map';
```

方案 2： 开启 sideEffects

开启 webpack sideEffcets 配置，webpack 4+ 默认应该是开启的。

```ts
{
  optimization: {
     sideEffects: true,
  }
}
```

方案 3： 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```ts
  // 安装依赖
  npm install babel-plugin-import -D

  // 配置 .babelrc 文件
  {
    "plugins": [
      ["import", {
        "libraryName": "@ant-design/plots",
        "libraryDirectory": "es"
      }],
      ["import", {
        "libraryName": "@ant-design/graphs",
        "libraryDirectory": "es"
      }],
      ["import", {
        "libraryName": "@ant-design/maps",
        "libraryDirectory": "es"
      }]
    ]
  }
```

### 7、为什么图表一直重绘

由于 react 机制，默认情况下只要父组件有状态更新，子组件都会重新渲染，导致图表再次重绘。可参考[示例](https://codesandbox.io/s/pedantic-lucy-tylzl?file=/App.tsx)

### 8、IE 兼容

参考 [ChartsIE](https://github.com/lxfu1/charts-ie)

### 更多问题

请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈，搜索是否有类似问题。我们会尽快响应和相应改进这篇文档。
