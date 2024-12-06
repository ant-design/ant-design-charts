---
category: Components
type: Graph
usage: relation
title: NetworkGraph 网络图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q9AkRIF8fF4AAAAAAAAAAAAADmJ7AQ/original
order: 7
---

展示一系列节点（如实体、对象或概念）以及它们之间的连接或关系。

```js
import { NetworkGraph } from '@ant-design/graphs';
```

## 何时使用

当需要展示复杂网络结构中的节点及其相互关系时，直观地揭示连接模式和数据流动。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/network-graph/default.tsx">基本用法</code>
<code src="../graphs-demos/network-graph/label.tsx">节点标签</code>
<code src="../graphs-demos/network-graph/node-importance.tsx">节点重要性</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | D3 Force 布局配置 | [`D3ForceLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/d3-force-layout) | `{ type: 'd3-force' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
