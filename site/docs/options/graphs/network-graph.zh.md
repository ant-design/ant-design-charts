---
title: 网络图
order: 7
---

展示一系列节点（如实体、对象或概念）以及它们之间的连接或关系。

```js
import { NetworkGraph } from '@ant-design/graphs';
```

## 何时使用

当需要展示复杂网络结构中的节点及其相互关系时，直观地揭示连接模式和数据流动。

## 代码演示

<code id="demo-network-graph-default" src="./demos/network-graph/default.tsx" description="简单的展示。">基本用法</code>

<code id="demo-network-graph-label" src="./demos/network-graph/label.tsx" description="展示节点标签，默认显示三行文字，鼠标悬浮时显示全部内容。">节点标签</code>

<code id="demo-network-graph-node-importance" src="./demos/network-graph/node-importance.tsx" description="根据节点重要性映射到节点大小，点击[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size)查看更多配置项">节点重要性</code>

## API

通用配置参考：[图通用属性](./graphs/overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | D3 Force 布局配置 | [D3ForceLayoutOptions](https://g6.antv.antgroup.com/api/layouts/d3-force-layout) | `{ type: 'd3-force' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | 设置数据转换，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
