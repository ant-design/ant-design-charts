---
title: 总览
order: 0
---

@ant-design/graphs 是基于 [G6](https://g6.antv.antgroup.com/manual/introduction) 精心打造的 React 组件库，旨在为开发者提供一套直接可用于业务的 “一图一做” 封装，同时保持 G6 能力同步，让关系图集成变得更加简单、高效。

**如何理解 “一图一做”？**

“一图” 指的是针对特定业务场景定制的关系图，“一做” 则强调了这种封装是即拿即用的，用户不再需要从零开始搭建，只需根据业务场景选择对应的图组件，并可能通过简单的配置调整即可满足需求。

但对于需要深度定制化的复杂场景，推荐使用 G6 直接开发，充分利用其底层强大的功能与灵活性。

## 术语定义

在深入了解关系图用法之前，我们需要了解以下术语：

- graph：图的统一入口，由节点（代表实体）和边（代表实体间的关系）构成的复杂网络结构。
- data：数据是图表的核心，图表的展示和交互都是基于数据驱动的。
- element：作为基本构成单元，包括节点(Node)、边(Edge)、组合(Combo)。
- layout：布局，将图中的元素按照一定的规则进行排列。
- behavior：交互，用户与画布、元素之间的一系列行为操作，例如拖拽、缩放、平移、选中等。
- plugin：插件，用于扩展能力，例如在画布中额外挂载图形组件、实现撤销重做等功能。
- transform：数据转换，对用户输入数据进行处理，最终会影响渲染数据，但用户输入数据不受污染。

## 图通用属性

> Tips: 以下通用属性适用于 graphs 组件，不支持的组件会单独说明。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据。关于图数据的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/data) | [GraphData](https://g6.antv.antgroup.com/api/reference/g6/graphdata) | - |
| layout | 布局，支持 G6 内置布局。关于图布局的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/layout) | [LayoutOptions](https://g6.antv.antgroup.com/examples#layout-force-directed) \| LayoutOptions[] | - |
| node | 节点，支持 G6 内置节点。关于节点的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/element#%E8%8A%82%E7%82%B9) | [NodeOptions](https://g6.antv.antgroup.com/api/reference/g6/nodeoptions) | - |
| edge | 边，支持 G6 内置边。关于边的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/element#%E8%BE%B9) | [EdgeOptions](https://g6.antv.antgroup.com/api/reference/g6/edgeoptions) | - |
| combo | Combo，支持 G6 内置 Combo。关于 Combo 的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/element#%E7%BB%84%E5%90%88) | [ComboOptions](https://g6.antv.antgroup.com/api/reference/g6/combooptions) | - |
| theme | 主题 | `light` \| `dark` \| string | - |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [BehaviorOptions[]](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| ((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[]) | 组件中查看 |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [PluginOptions[]](https://g6.antv.antgroup.com/api/plugins/background) \| ((existingPlugins: PluginOptions[]) => PluginOptions[]) | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [TransformOptions[]](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| ((existingTransforms: TransformOptions[]) => TransformOptions[]) | 组件中查看 |

### 容器属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| containerStyle | 配置图表容器的样式，接受一个包含 CSS 属性和值的对象 | React.CSSProperties | - |
| containerAttributes | 为图表容器添加自定义的 HTML 属性 | Record<string, any> | - |
| className | 添加在组件最外层的 className | string | - |
| loading | 表示图表是否处于加载状态 | boolean | false |
| loadingTemplate | 自定义加载模板，当图表加载时显示的元素 | React.ReactElement | - |
| errorTemplate | 自定义错误模板，当图表出错时调用的函数，返回显示的错误信息 | (e: Error) => React.ReactNode | - |

### 画布属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animation | 启用或关闭全局动画，为动画配置项时，会启用动画，并将该动画配置作为全局动画的基础配置。关于动画的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/animation) | boolean \| [AnimationEffectTiming](https://g6.antv.antgroup.com/api/reference/g6/viewportanimationeffecttiming) | - |
| autoFit | 是否自动适应 | `view` \| `center` | - |
| autoResize | 是否自动调整画布大小 | boolean | false |
| background | 画布背景色 | string | - |
| cursor | 指针样式 | [Cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor) | - |
| devicePixelRatio | 设备像素比 | number | - |
| width | 画布宽度 | number | - |
| height | 画布高度 | number | - |
| zoom | 缩放比例 | number | 1 |
| zoomRange | 缩放范围 | [number, number] | [0.01, 10] |
| padding | 画布内边距，通常在自适应时，会根据内边距进行适配 | number \| number[] | - |
| renderer | 获取渲染器 | (layer: `background` \| `main` \| `label` \| `transient`) =>[IRenderer](https://g.antv.antgroup.com/api/canvas/options#renderer) | - |
| rotation | 旋转角度 | number | 0 |

### 生命周期属性

定义在图的不同生命周期阶段执行特定的回调。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onDestroy | 当图销毁后（即 graph.destroy() 之后）执行回调 | () => void | - |
| onInit | 当图初始化完成后（即 new Graph() 之后）执行回调 | (graph:[Graph](https://g6.antv.antgroup.com/api/reference/g6/graph)) => void | - |
| onReady | 当图渲染完成后（即 graph.render() 之后）执行回调 | (graph:[Graph](https://g6.antv.antgroup.com/api/reference/g6/graph)) => void | - |

### 交互

## 定制需求

为了满足多样化需求，用户可以在标准图组件基础上进行扩展，实现自定义关系图。

#### 更新基本配置

除了交互、插件、数据转换以外，其他图配置项都可以直接配置。

js import { MindMap } from '@ant-design/graphs';

export default () => { const options = { autoFit: 'view', edge: { style: { lineWidth: 3, }, }, }; return <MindMap {...options} />; };

#### 更新交互/插件/数据转换配置

> 详细讲解如何更新插件，该策略同样适用于交互与数据转换。

在进行插件配置时，需特别留意插件的添加方式。为了确保既能增添新的功能，又不影响原有预设插件的正常运行，我们引入了一种 🔔 特定的插件更新策略。

具体来说，就是通过一个高阶函来对现有插件列表进行扩展，而不是直接替换。该函数接受当前图表实例（this: Graph）及现有插件配置（plugins: PluginOptions）作为参数，并返回一个新的插件配置数组。

以下是一个具体的示例，展示了如何在思维导图中添加小地图插件：

```js
import { MindMap } from '@ant-design/graphs';

export default () => { const options = { plugins: (existingPlugins) => [ ...existingPlugins, // 保留原有的所有插件 { type: 'minimap', key: 'minimap' }, // 添加小地图插件 ], };

return <MindMap {...options} />; };
```
