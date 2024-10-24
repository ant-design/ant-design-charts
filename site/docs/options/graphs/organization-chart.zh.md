---
title: 组织结构图
order: 4
demo:
  cols: 3
---

直观展示组织内部的层级结构和部门关系。

```js
import { OrganizationChart } from '@ant-design/graphs';
```

## 何时使用

- 想要展示公司或团队的层级结构，明确各个职位和部门的上下级关系。
- 展示员工的职位和部门分布。
- 项目管理时，明确项目团队的成员和职责分工。
- 用于股权穿透、投资上下游公司等依赖分析。

## 代码演示

<code id="demo-org-chart-default" src="./demos/organization-chart/default.tsx" description="简单的展示。">基本用法</code>

<code id="demo-org-chart-direction" src="./demos/organization-chart/direction.tsx" description="通过设置 `direction` 为 `vertical` `horizontal` 分别让垂直（自上而下）、水平（自左而右）分布。若不设置 `direction`，则默认垂直分布。">节点排布</code>

<code id="demo-org-chart-custom-node" src="./demos/organization-chart/custom-node.tsx" description="使用自定义的 React 节点进行图的渲染。此示例中使用了内置的 RC 组件 `OrganizationChartNode` 进行简单实现，你也可以自行开发 RC 组件以满足特定需求。">自定义节点</code>

<code id="demo-org-chart-collapse-expand" src="./demos/organization-chart/collapse-expand.tsx" description="
通过调整 `collapse-expand-react-node` 交互配置来控制展开/收起子节点的操作。<br> - `enable`: 是否启用该交互，类型为 `boolean | ((data: NodeData) => boolean)`，默认为 `false` <br> - `trigger`: 点击指定元素，触发节点收起/展开；`'icon'` 代表点击图标触发，`'node'` 代表点击节点触发，`HTMLElement` 代表自定义元素，默认为 `'icon'` <br> - `direction`: 收起/展开指定方向上的邻居节点，`'in'` 代表前驱节点，`'out'` 代表后继节点，`'both'` 代表前驱和后继节点，默认为 `'out'` <br> - `iconType`: 内置图标语法糖，`'plus-minus'` 或 `'arrow-count'` <br> - `iconRender`: 渲染函数，用于自定义收起/展开图标，参数为 `isCollapsed`（当前节点是否已收起）和 `data`（节点数据），返回自定义图标 <br> - `iconPlacement`: 图标相对于节点的位置，可选值为 `'left'`、`'right'`、`'top'`、`'bottom'`，默认为 `'bottom'` <br> - `iconOffsetX/iconOffsetY`: 图标相对于节点的水平、垂直偏移量，默认为 `0` <br> - `iconClassName/iconStyle`: 指定图标的 CSS 类名及内联样式 <br> - `refreshLayout`: 每次收起/展开节点后，是否刷新布局
">展开/收起子节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### OrganizationChart

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 语法糖，设置节点的排布方向。当设置 `layout.rankdir` 时会以后者为准 | `'vertical'` \| `'horizontal'` | `'vertical'` |
| layout | AntV Dagre 布局配置 | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
