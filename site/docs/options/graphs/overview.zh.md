---
title: 总览
order: 0
---

`@ant-design/graphs` 是基于 [G6](https://g6-next.antv.antgroup.com/manual/introduction) 精心打造的 React 组件库，旨在为开发者提供一套直接可用于业务的 “一图一做” 封装，同时保持 G6 能力同步，让关系图集成变得更加简单、高效。

> 该库提供的图组件会在内部维护一套默认配置，能够满足大多数常见场景的需求。用户可以通过自定义传参轻松修改这些配置，来优化渲染效果，贴合特定业务需求。然而，针对需深度定制的复杂场景，推荐使用 G6 直接开发，充分利用其底层强大的功能与灵活性。

## 图组件概览

| 应用场景 | 图组件 | 效果演示 | 示例 |
| --- | --- | --- | --- |
| 思维导图 | `MindMap` | ![mind-map](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cce0Sa7DR3cAAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-mind-map) |
| 生态树图 | `Dendrogram` | ![dendrogram](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-dendrogram) |
| 缩进树图 | `IndentedTree` | ![indented-tree](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JZZVT5PsWPQAAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-indented-tree) |
| 组织架构图 | `OrganizationChart` | ![org-chart](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jgGCT7cMxg8AAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-organization-chart) |
| 流程图 | `FlowGraph` | ![flow-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*n9JgQIGi9BQAAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-flow-graph) |
| 流向图 | `FlowDirectionGraph` | ![flow-direction-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-flow-direction-graph) |
| 网络图 | `NetworkGraph` | ![network-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q9AkRIF8fF4AAAAAAAAAAAAADmJ7AQ/original) | [示例](https://ant-design-charts.antgroup.com/examples#relations-network-graph) |

## 图通用属性

通用配置参考：[通用属性](./general-properties.zh.md)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFit | 是否自动适应 | `{ type: 'view'; options?: `[`FitViewOptions`](https://g6-next.antv.antgroup.com/api/reference/g6/fitviewoptions)`; animation?:` [`ViewportAnimationEffectTiming`](https://g6-next.antv.antgroup.com/api/reference/g6/viewportanimationeffecttiming)`; }` <br> \| `{ type: 'center'; animation?: ViewportAnimationEffectTiming; }` <br> \| `'view'` \| `'center'` | - |
| animation | 启用或关闭全局动画，为动画配置项时，会启用动画，并将该动画配置作为全局动画的基础配置 | `boolean` \| [`AnimationEffectTiming`](https://g6-next.antv.antgroup.com/api/reference/g6/viewportanimationeffecttiming) | - |
| autoResize | 是否自动调整画布大小 | `boolean` | `false` |
| background | 画布背景色 | `string` | - |
| combo | Combo，支持 G6 内置 Combo，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/elements/combos/base-combo) | [`ComboOptions`](https://g6-next.antv.antgroup.com/api/reference/g6/combooptions) | - |
| container | 画布容器 | `string` \| `HTMLElement` \| `Canvas` | - |
| cursor | 指针样式 | `Cursor` | - |
| data | 数据 | [GraphData](https://g6-next.antv.antgroup.com/api/reference/g6/graphdata) | - |
| devicePixelRatio | 设备像素比 | `number` | - |
| edge | 边，支持 G6 内置边，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/elements/edges/base-edge) | [`EdgeOptions`](https://g6-next.antv.antgroup.com/api/reference/g6/edgeoptions) | - |
| height | 画布高度 | `number` | - |
| layout | 布局，支持 G6 内置布局，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/layouts/antv-dagre-layout) | `LayoutOptions` \| `LayoutOptions[]` | - |
| node | 节点，支持 G6 内置节点，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/elements/nodes/base-node)。 | [`NodeOptions`](https://g6-next.antv.antgroup.com/api/reference/g6/nodeoptions) | - |
| padding | 画布内边距，通常在自适应时，会根据内边距进行适配 | `number` \| `number[]` | - |
| renderer | 获取渲染器 | `(layer: 'background' \| 'main' \| 'label' \| 'transient') => IRenderer` | - |
| rotation | 旋转角度 | `number` | `0` |
| theme | 主题 | `'light'` \| `'dark'` \| `string` | - |
| width | 画布宽度 | `number` | - |
| x | 视口 x 坐标 | `number` | - |
| y | 视口 y 坐标 | `number` | - |
| zoom | 缩放比例 | `number` | `1` |
| zoomRange | 缩放范围 | `[number, number]` | `[0.01, 10]` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | 组件中查看 |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | 设置数据转换，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | 组件中查看 |
| onDestroy | 当图销毁后（即 `graph.destroy()` 之后）执行回调 | `() => void` | - |
| onInit | 当图初始化完成后（即 `new Graph()` 之后）执行回调 | `(graph: Graph) => void` | - |
| onReady | 当图渲染完成后（即 `graph.render()` 之后）执行回调 | `(graph: Graph) => void` | - |

## 自定义定制

为了满足多样化需求，用户可以在标准图组件基础上进行扩展，实现自定义关系图。

#### 更新基本配置

除了交互、插件、数据转换以外，其他图配置项都可以直接配置。

```js
import { MindMap } from '@ant-design/graphs';

export default () => {
  const options = {
    autoFit: 'view',
    edge: {
      style: {
        lineWidth: 3,
      },
    },
  };
  return <MindMap {...options} />;
};
```

#### 更新交互/插件/数据转换配置

> 详细讲解如何更新插件，该策略同样适用于交互与数据转换。

在进行插件配置时，需特别留意插件的添加方式。为了确保既能增添新的功能，又不影响原有预设插件的正常运行，我们引入了一种 🔔 特定的插件更新策略。

具体来说，就是通过一个高阶函来对现有插件列表进行扩展，而不是直接替换。该函数接受当前图表实例（`this: Graph`）及现有插件配置（`plugins: PluginOptions`）作为参数，并返回一个新的插件配置数组。

以下是一个具体的示例，展示了如何在思维导图中添加小地图插件：

```js
import { MindMap } from '@ant-design/graphs';

export default () => {
  const options = {
    plugins: (existingPlugins) => [
      ...existingPlugins, // 保留原有的所有插件
      { type: 'minimap', key: 'minimap' }, // 添加小地图插件
    ],
  };

  return <MindMap {...options} />;
};
```
