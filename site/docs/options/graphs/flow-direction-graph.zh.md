---
category: Components
type: Graph
usage: flow,relation
title: FlowDirectionGraph 流向图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original
order: 6
---

用于直观展示流动路径和量值变化。

```js
import { FlowDirectionGraph } from '@ant-design/graphs';
```

## 何时使用

适用于信息繁杂、需要明确逻辑关系或决策支持时，能直观、清晰地展示数据流向和关系，提升理解和决策效率。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/flow-direction-graph/default.tsx">基本用法</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-neighbor.tsx">高亮相邻元素</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-chain.tsx">高亮元素及其所在链路</code>
<code src="../graphs-demos/flow-direction-graph/custom.tsx">自定义</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | AntV Dagre 布局配置 | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
