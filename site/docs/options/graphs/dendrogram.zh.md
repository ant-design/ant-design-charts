---
title: 生态树图
order: 3
---

将事物或现象分解成树枝状结构，来系统地展示其构成关系或内在逻辑关系。

```js
import { Dendrogram } from '@ant-design/graphs';
```

## 何时使用

适用于展示数据的层级关系、明确问题的重点、寻求达成目标的合理步骤。

## 代码演示

<code id="demo-dendrogram-default" src="./demos/dendrogram/default.tsx" description="简单的展示。">基本用法</code>

<code id="demo-dendrogram-direction" src="./demos/dendrogram/direction.tsx" description="通过设置语法糖 `direction` 为 `vertical` `radial` 分别让子节点垂直、径向分布。若不设置 `direction`，则默认 `horizontal` 水平分布。注意，节点标签也会自动根据 `direction` 排布，当设置 `node.style.labelPlacement` 时会以后者为准">排布方向</code>

<code id="demo-dendrogram-compact" src="./demos/dendrogram/compact.tsx" description="通过 `compact` 配置紧凑模式">紧凑模式</code>

<code id="demo-dendrogram-collapse-expand" src="./demos/dendrogram/collapse-expand.tsx" description="添加 G6 内置 CollapseExpand 交互，双击触发展开/收起。更多 G6 内置交互请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior)。">展开/收起节点</code>

## API

通用配置参考：[图通用属性](./graphs/overview#图通用属性)

### Dendrogram

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 语法糖，设置树图节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'vertical'` \| `'horizontal'` \| `'radial'` | `'horizontal'` |
| compact | 是否为紧凑模式 | `boolean` | `false` |
| layout | 树图布局配置 | [DendrogramLayoutOptions](https://g6.antv.antgroup.com/api/layouts/dendrogram-layout) | `{ type: 'dendrogram' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | 设置数据转换，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器，了解相关配置项请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
