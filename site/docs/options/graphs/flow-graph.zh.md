---
title: 流程图
order: 5
---

用于直观地表示过程或系统的步骤和决策点。

```js
import { FlowGraph } from '@ant-design/graphs';
```

## 何时使用

展示了从开始到结束的整个流程。每个节点代表一个特定的步骤或决策点，边则表示步骤之间的顺序和关系。

- 适用于需要展示线性流程或步骤的场景
- 规划和跟踪项目进度，明确任务的先后顺序和依赖关系
- 构建决策树，展示不同决策点和路径的场景

## 代码演示

<code id="demo-flow-graph-default" src="./demos/flow-graph/default.tsx" description="简单的展示。">基本用法</code>

<code id="demo-flow-graph-hover" src="./demos/flow-graph/hover-activate-chain.tsx" description="通过添加悬浮高亮交互（注册类型：`hover-activate-chain`），可以高亮显示元素及其所在的链路。">高亮元素及其所在链路</code>

<code id="demo-flow-graph-custom-node" src="./demos/flow-graph/custom-node.tsx" description="通过 `node.component` 来进行自定义节点，需要与 `node.size` 配合实现。">自定义节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | AntV Dagre 布局配置 | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
