---
category: Components
type: Graph
usage: relation
title: OrganizationChart 组织结构图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jgGCT7cMxg8AAAAAAAAAAAAADmJ7AQ/original
order: 4
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

<!-- prettier-ignore -->
<code src="../graphs-demos/organization-chart/default.tsx">基本用法</code>
<code src="../graphs-demos/organization-chart/direction.tsx">节点排布</code>
<code src="../graphs-demos/organization-chart/custom-node.tsx">自定义节点</code>
<code src="../graphs-demos/organization-chart/collapse-expand.tsx">展开/收起子节点</code>

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
