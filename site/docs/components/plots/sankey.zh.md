---
category: Components
type: Plot
usage: flow,relation
title: Sankey 桑基图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*fecqTpstXu0AAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-sankey
order: 10
---

## 简介

桑基图 (`Sankey Diagram`)，是一种特定类型的流图，用于描述一组值到另一组值的流向，通常应用于能源、材料成分、金融等数据的可视化分析。桑基图的特点如下：
- 起始流量和结束流量相同，所有主支宽度的总和与所有分出去的分支宽度总和相等，保持能量的平衡；
- 在内部，不同的线条代表了不同的流量分流情况，它的宽度成比例地显示此分支占有的流量；
- 节点不同的宽度代表了特定状态下的流量大小；

## 代码演示

更多示例详见[桑基图](/examples#statistics-sankey)

### 基础用法

<Playground path="/statistics/sankey/demo/alipay.js" rid="sankey-alipay"></playground>

### 节点排序

<Playground path="/statistics/sankey/demo/node-sort-sankey.js" rid="sankey-node-sort"></playground>

### 自定义节点颜色

<Playground path="/statistics/sankey/demo/color.js" rid="sankey-color"></playground>

### 自定边颜色

<Playground path="/statistics/sankey/demo/edge.js" rid="sankey-edge"></playground>


## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](#data) | Array | [] |
| valueField | 值映射字段 | string（可选） | - |
| tooltip    | 配置桑基图的 tooltip，详见 [tooltip 配置](#tooltip)             | _object_  | 详见 [tooltip 配置](#tooltip) |
| layout     | 配置桑基图的布局方式，详见 [layout 配置](#layout)               | _object_  | 详见 [layout 配置](#layout)   |
| style      | 配置图形样式和标签样式，详见 [style 配置](#style)               | _object_  | 详见 [style 配置](#style)     |
| nodeLabels | 自定义节点数据标签的配置，详见 [nodeLabels 配置](##nodelabels)  | _label[]_ | []                            |
| linkLabels | 自定义连接线数据标签的配置，详见 [linkLabels 配置](#linklabels) | _label[]_ | []                            |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`Sankey` 组件默认在其上绘制了一个桑基图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### data

1. 数据中需要包含 `source` 和 `target` 字段，缺失则无法绘制。默认使用 `value` 进行值的映射，当数据中缺乏 `value` 字段时，需要使用 `valueField` 指定值的映射关系。

```js
[
  { source: "Agricultural 'waste'", target: 'Bio-conversion', value: 124 },
]
```

2. 数据中包含 `nodes` 和 `links`，一般用于处理存在环的情况。

```js
{
  nodes: [
    { id: 'a', key: '首页' },
    { id: 'b', key: '页面1' },
  ],
  links: [
    { source: 'a', target: 'b', value: 100 },
  ],
}
```

### tooltip

桑基图作为复合图形，配置 `tooltip` 的时候需要区分节点和连接线。

#### title

不同于单一标记配置 `title`,桑基图需要分别配置 `nodeTitle` 和 `linkTitle` 。

```js
({
  tooltip: {
    nodeTitle: (d) => d.key,
    linkTitle: (d) => 'link',
  },
});
```

#### items

不同于单一标记配置 `items`,桑基图需要同时配置 `nodeItems` 和 `linkItems` 。

和一般的 `items` 一样， `nodeItems` 和 `linkItems` 也支持自定义配置：

```js
({
  tooltip: {
    nodeItems: [
      (d, index, data, column) => {
        return {
          color: 'red', // 指定 item 的颜色
          name: '节点', // 指定 item 的名字
          value: d.key, // 使用 y 通道的值
          content: '节点自定义属性',
        };
      },
    ],
    linkItems: [
      (d, index, data, column) => {
        return {
          color: 'red', // 指定 item 的颜色
          name: '连接线', // 指定 item 的名字
          value: `${d.source.key}-${d.target.key}`, // 使用 y 通道的值
          content: '连接线自定义属性',
        };
      },
    ],
  },
});
```

### layout

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| nodeId | 节点绑定字段，在布局中作为唯一标识，如果未指定 `nodeId`，默认为 `(node) => node.key` | `(node: any) => string` | - |
| nodeAlign | 当前节点的对齐方法。除了内置的几种类型外，还可以传递当前节点和图的总深度 `n` （最大的节点深度+1 ），并且必须返回 `0` 到 `n - 1` 之间的整数，指示节点在生成图中所需的水平位置。 | `left、right、center、justify` \| `((node: any, n: number) => number` | - |
| nodeWidth | 节点的宽度 | number | 0.02 |
| nodePadding | 节点的间距 | number | 0.02 |
| nodeLabels | 节点标签[配置](#nodelabels) | object[] | - |
| nodeDepth | 节点的深度 | `(datum: any, maxDepth: number) => number` | - |
| nodeSort | 节点排序方式。如果未指定 `nodeSort` ，则返回当前节点排序方法，默认为 `undefined`，表示每列内的节点垂直顺序将由布局自动确定。如果 `nodeSort` 为 `null`，则顺序由输入固定。否则，由指定的排序函数确定顺序；该函数传递两个节点，如果第一个节点应位于第二个节点上方，则必须返回小于 0 的值，如果第二个节点应位于第一个节点上方，则必须返回大于 0 的值，如果未指定顺序，则返回 0。 | `((a: any, b: any) => number)` | - |
| linkSort | 连接线排序方式。如果未指定 `linkSort` ，则返回当前连接线排序方法，默认为 `undefined`，表示每个节点内的连接线的垂直顺序将由布局自动确定。如果 `linkSort` 为 `null`，则顺序由输入固定。否则，由指定的排序函数确定顺序；该函数传递两个连接线，如果第一个连接线应位于第二个连接线上方，则必须返回小于 0 的值，如果第二个连接线应位于第一个连接线上方，则必须返回大于 0 的值，如果未指定顺序，则返回 0。 | `((a: any, b: any) => number)` | - |
| iterations | 布局计算迭代次数，默认为 `6`, 次数越多，布局越合理。更多 `layout` 配置，详见 [d3-sankey](https://github.com/d3/d3-sankey) | number | 6 |
| linkColorField | 连线颜色映射字段 | `(d) => d.source.key` | - |
| linkLabels | 连线标签[配置](#linklabels) | object[] | - |


### style

样式通过 `text`、`node`、`link` 前缀区分，更多参[绘图属性](/options/plots/style#绘图属性)

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| labelText | 文本内容 | `(d) => d.key` | - |
| labelFontSize | 文本字号 | number | - |
| labelSpacing | 文本和节点间的距离 | number | - |
| nodeStroke | 节点描边 | string | - |
| linkLineWidth | 连接线描边宽度 | number | - |

### nodeLabels

<description>**optional** _Label[]_ </description>

内置数据标签的配置如下。

```js
({
  labels: [
    {
      text,
      dx: (d) => (d.x[0] < 0.5 ? spacing : -spacing),
      ...labelStyle, // 用户传入的数据标签自定义样式
    },
    ...nodeLabels, // 用户传入的自定义数据标签
  ],
});
```

除了节点内置的数据标签以外，你还可以自定义节点数据标签的配置。

```js
({
  nodeLabels: [
    {
      text: (d) => d.key,
      fontSize: 10, // 注意！！！这里的绘图属性不再需要加label前缀
      fill: 'red',
    },
  ],
});
```

### linkLabels

<description>**optional** _Label[]_ </description>

连接线没有内置的数据标签，你可以自定义连接线数据标签的配置。

```js
({
  linkLabels: [
    {
      text: (d) => d.key,
      fontSize: 10, // 注意！！！这里的绘图属性不再需要加label前缀
      fill: 'yellow',
    },
  ],
});
```

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 桑基图怎么使用 data 中的补充属性实现自定义 tooltip 的展示？

和一般组件自定义 `tooltip` 交互的方法类似，先在图形的 `tooltip` 里传入自定义属性，然后在 `interaction` 里使用。

示例：

```js
{
  tooltip: {
    nodeItems: [
      (d, index, data, column) => {
        return {
          content: d.des,
        };
      },
    ],
    linkItems: [
      (d, index, data, column) => {
        return {
          color: 'red', // 指定 item 的颜色
          name: '连接线', // 指定 item 的名字
          value: `${d.source.key}-${d.target.key}`, // 使用 y 通道的值
          content: '连接线自定义属性',
        };
      },
    ],
  },
  interaction: {
    tooltip: {
      render: (e, { items, title }) => {
        return `<div>${items[0].content}</div>`;
      },
    },
  },
};
```

2. 桑基图不支持成环，那在页面流向图这种会出现重复节点的情况应该怎么配置？

对于多次出现的节点，设置 id 作为唯一标识，并配置 `nodeId` 的回调方法为 `(node) => node.id`。

```js
const data = {
  nodes: [
    { id: 'a', key: '首页' },
    { id: 'b', key: '页面1' },
    { id: 'b_1', key: '页面1' },
    { id: 'c', key: '页面2' },
    { id: 'c_1', key: '页面2' },
    { id: 'd', key: '页面3' },
    { id: 'd_1', key: '页面3' },
  ],
  links: [
    { source: 'a', target: 'b', value: 100 },
    { source: 'b', target: 'c', value: 80 },
    { source: 'b', target: 'd', value: 20 },
    { source: 'c', target: 'b_1', value: 80 },
    { source: 'b_1', target: 'c_1', value: 40 },
    { source: 'b_1', target: 'd_1', value: 40 },
  ],
};

const config = {
  layout: {
    nodeId: (d) => d.id,
    nodeAlign: 'center',
    nodePadding: 0.03,
    iterations: 25,
  },
};
```
