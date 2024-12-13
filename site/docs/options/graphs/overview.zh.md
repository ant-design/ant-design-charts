---
title: 总览
order: 0
---

@ant-design/graphs 是基于 [G6](https://g6.antv.antgroup.com/manual/introduction) 精心打造的 React 组件库，旨在为开发者提供一套直接可用于业务的 “一图一做” 封装，同时保持 G6 能力同步，让关系图集成变得更加简单、高效。

**如何理解 “一图一做”？**

“一图” 指的是特定业务场景（如思维导图、组织结构图、流程图等）量身定制的图组件，“一做” 则强调了这种封装是即拿即用的，用户不再需要从零开始搭建，只需根据业务场景选择对应的图组件，并可能通过简单的配置调整即可满足需求。

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

> Tips: 以下通用属性适用于 Graphs 组件，不支持的组件会单独说明。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据。关于图数据的详细说明，请参考 [G6 - 核心概念 - 数据](https://g6.antv.antgroup.com/manual/core-concept/data) | [GraphData](https://g6.antv.antgroup.com/api/reference/g6/graphdata) | - |
| node | 节点，支持 G6 内置节点。关于节点的详细说明，请参考 [G6 - 核心概念 - 元素 - 节点](https://g6.antv.antgroup.com/manual/core-concept/element#节点) | [NodeOptions](https://g6.antv.antgroup.com/api/reference/g6/nodeoptions) | - |
| edge | 边，支持 G6 内置边。关于边的详细说明，请参考 [G6 - 核心概念 - 元素 - 边](https://g6.antv.antgroup.com/manual/core-concept/element#边) | [EdgeOptions](https://g6.antv.antgroup.com/api/reference/g6/edgeoptions) | - |
| combo | Combo，支持 G6 内置 Combo。关于 Combo 的详细说明，请参考 [G6 - 核心概念 - 元素 - 组合](https://g6.antv.antgroup.com/manual/core-concept/element#组合) | [ComboOptions](https://g6.antv.antgroup.com/api/reference/g6/combooptions) | - |
| layout | 布局，支持 G6 内置布局。关于图布局的详细说明，请参考 [G6 - 核心概念 - 布局](https://g6.antv.antgroup.com/manual/core-concept/layout) | 组件内查看 | - |
| behaviors | 设置用户交互事件 | [交互 Behavior](#交互-behavior) | - |
| plugins | 设置插件 | [插件 Plugin](#插件-plugin) | - |
| transforms | 设置数据处理 | [数据处理 Transform](#数据处理-transform) | - |
| theme | 主题 | `light` \| `dark` \| string | - |

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
| animation | 启用或关闭全局动画，为动画配置项时，会启用动画，并将该动画配置作为全局动画的基础配置。关于动画的详细说明，请参考 [G6 - 核心概念 - 动画](https://g6.antv.antgroup.com/manual/core-concept/animation) | boolean \| [AnimationEffectTiming](https://g6.antv.antgroup.com/api/reference/g6/viewportanimationeffecttiming) | - |
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

## 交互 Behavior

交互（Behaviors）指的是用户与画布及元素间的一系列操作，如拖拽、缩放、平移和选择等。这些交互方式增强了用户从图表中获取信息的直观性。

**类型定义**：`BehaviorOptions[] | ((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])`

默认情况下，`zoom-canvas`（缩放画布）和 `drag-canvas`（拖拽画布）交互是开启的。若需其他交互方式，则需进行额外配置。

Behavior 可定义为静态数组或动态函数：

- 静态数组：直接声明所有需要的交互方式。
- **（👍 推荐）** 动态函数：基于现有交互数组，动态添加或调整。

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // 静态数组形式
  const behaviors = ['zoom-canvas', { type: 'drag-canvas', direction: 'x' }];

  // 动态函数形式
  const dynamicBehaviors = (existingBehaviors) => {
    // console.log(existingBehaviors); 👉 [{ key: 'zoom-canvas', type: 'zoom-canvas' }, { key: 'drag-canvas', type: 'drag-canvas' }]
    return [...existingBehaviors, { type: 'click-select' /* 参数 */ }];
  };

  return <MindMap behaviors={behaviors /** or dynamicBehaviors **/} />;
};
```

支持 G6 提供的所有交互。以下是部分内置交互的简介，详情可参考 [G6 - 核心概念 - 交互](https://g6.antv.antgroup.com/manual/core-concept/behavior)：

- [Brush Select](https://g6.antv.antgroup.com/api/behaviors/brush-select)：框选
- [Click Element](https://g6.antv.antgroup.com/api/behaviors/click-select)：单击选中
- [Collapse Expand](https://g6.antv.antgroup.com/api/behaviors/collapse-expand)：展开收起
- [Create Edge](https://g6.antv.antgroup.com/api/behaviors/create-edge)：创建边
- [Drag Canvas](https://g6.antv.antgroup.com/api/behaviors/drag-canvas)：拖拽画布
- [Drag Element](https://g6.antv.antgroup.com/api/behaviors/drag-element)：拖拽元素
- [Focus Element](https://g6.antv.antgroup.com/api/behaviors/focus-element)：聚焦元素
- [Hover Element](https://g6.antv.antgroup.com/api/behaviors/hover-activate)：悬停元素
- [Lasso Select](https://g6.antv.antgroup.com/api/behaviors/lasso-select)：套索选择
- [Zoom Canvas](https://g6.antv.antgroup.com/api/behaviors/zoom-canvas)：缩放画布

若内置交互无法满足特定需求，还可根据 [G6 - 自定义交互](https://g6.antv.antgroup.com/manual/custom-extension/behavior) 教程来自定义交互。

此外，Graphs 也提供了一系列交互。

| 扩展 | 注册类型 | 描述 | 适用场景 |  |
| --- | --- | --- | --- | --- |
| HoverActivateChain | `hover-activate-chain` | 鼠标悬停激活节点及其链路 | 所有图类型 | [配置项](https://g6.antv.antgroup.com/api/behaviors/hover-activate) |
| HoverActivateNeighbors | `hover-activate-neighbors` | 鼠标悬停高亮邻接的节点和边 | 所有图类型 | [配置项](https://g6.antv.antgroup.com/api/behaviors/hover-activate) |

### HoverActivateChain

**用途：** 当用户将鼠标悬停在一个节点或边上时，高亮该节点或边以及其直接关联的链路（上下游路径）。该交互常用于突出显示网络结构中的路径，帮助用户快速分析链路关系。

**配置项：** 同 [G6 - Behavior - HoverActivate](https://g6.antv.antgroup.com/api/behaviors/hover-activate) 配置项。

### HoverActivateNeighbors

**用途：** 鼠标悬停时，高亮与当前节点或边直接邻接的元素，帮助用户快速理解元素的局部上下文。

**配置项：** 同 [G6 - Behavior - HoverActivate](https://g6.antv.antgroup.com/api/behaviors/hover-activate) 配置项。

## 数据处理 Transform

数据处理 (Transforms) 用于对用户输入数据进行处理。这种转换只会影响渲染数据，原始输入数据始终保持不变。

**类型定义**：`TransformOptions[] | (existingTransforms: TransformOptions[]) => TransformOptions[]`

Transform 可定义为静态数组或动态函数：

- 静态数组：明确列出所有需要的转换器。
- **（👍 推荐）** 动态函数：基于现有转换器数组，动态生成新的转换器数组。

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // 静态数组形式
  const transforms = [{ type: 'assign-color-by-branch' /* 参数 */ }, { type: 'map-edge-line-width' /* 参数 */ }];

  // 动态函数形式
  const dynamicTransforms = (existingTransforms) => {
    return [...existingTransforms, { type: 'arrange-edge-z-index' /* 参数 */ }];
  };

  return <MindMap transforms={transforms /** or dynamicTransforms**/} />;
};
```

支持 G6 提供的所有数据处理。内置数据处理列表请查看 [G6 - API - 数据转换](https://g6.antv.antgroup.com/api/transforms/map-node-size)。

另外，Graphs 也提供了一系列数据处理。

| 扩展 | 注册类型 | 描述 | 适用场景 |  |
| --- | --- | --- | --- | --- |
| TranslateReactNodeOrigin | `translate-react-node-origin` | 调整 React 节点原点，从左上调整成中心 | 所有图类型 | [配置项](#translatereactnodeorigin) |
| CollapseExpandReactNode | `collapse-expand-react-node` | 折叠/展开 React 节点 | 所有图类型 | [配置项](#collapseexpandreactnode) |
| AssignColorByBranch | `assign-color-by-branch` | 根据节点所在分支为节点分配颜色 | MindMap、IndentedTree、Fishbone | [配置项](#assigncolorbybranch) |
| ArrangeEdgeZIndex | `arrange-edge-z-index` | 调整边的层级 | IndentedTree、Fishbone | [配置项](#arrangeedgezindex) |
| MapEdgeLineWidth | `map-edge-line-width` | 调整边的描边宽度 | FlowDirectionGraph | [配置项](#mapedgelinewidth) |

### TranslateReactNodeOrigin

**用途：** 由于 React Node 默认原点位于左上角，与布局预期不符。通过调整偏移量 `dx` 和 `dy`，将原点设置为节点中心。

### CollapseExpandReactNode

**用途：** 用于实现 React 节点的子节点展开和收起功能。仅对 React 节点类型有效。通过为节点绑定副作用，控制其“展开/收起”行为。

**配置项：**

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enable | 是否启用收起/展开功能 | boolean \| ((data: NodeData) => boolean) | true |
| trigger | 点击指定元素，触发节点收起/展开 | `icon` \| `node` \| HTMLElement | `icon` |
| enable | 收起/展开指定方向上的邻居节点 <br> - `in`: 前驱节点 <br> - `out`: 后继节点 <br> - `both`: 前驱和后继节点 | `in` \| `out` \| `both` | `out` |
| iconType | 内置图标语法糖 | `plus-minus` \| `arrow-count` | - |
| iconRender | 渲染函数，用于自定义收起/展开图标，参数为 `isCollapsed`（当前节点是否已收起）和 `data`（节点数据），返回自定义图标 | (this: Graph, isCollapsed: boolean, data: NodeData) => React.ReactNode | - |
| iconPlacement | 图标相对于节点的位置 | `left` \| `right` \| `top` \| `bottom` \| ((this: Graph, data: NodeData) => CardinalPlacement) | `bottom` |
| iconOffsetX | 图标相对于节点的水平偏移量 | number \| ((this: Graph, data: NodeData) => number) | 0 |
| iconOffsetY | 图标相对于节点的垂直偏移量 | number \| ((this: Graph, data: NodeData) => number) | 0 |
| iconClassName | 指定图标的 CSS 类名 | string | - |
| iconStyle | 指定图标的内联样式 | React.CSSProperties | {} |
| refreshLayout | 每次收起/展开节点后，是否刷新布局 | boolean | false |

### AssignColorByBranch

**用途：** 为树图中的分支分配颜色，有助于在逻辑分支或层级结构中增强视觉区分。

**配置项：**

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colors | 色板 | string[] | `['#1783FF', '#F08F56', '#D580FF', '#00C9C9', '#7863FF', '#DB9D0D', '#60C42D', '#FF80CA', '#2491B3', '#17C76F']` |

### ArrangeEdgeZIndex

**用途：** 调整边的 z-index 以优化渲染层次，避免边缘被遮挡或不清晰。常用于树图场景，配合 `assign-color-by-branch`使用。

### MapEdgeLineWidth

**用途：** 根据边的属性（如权重）动态调整其线宽，使图形信息表达更直观。

**配置项：**

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| **(Required)** value | 指定边的线宽值 | number \| ((this: Graph, data: EdgeData) => number) | - |
| minValue | 线宽的最小值 | number \| ((data: EdgeData, edges: Record<ID, number>) => number) | - |
| maxValue | 线宽的最大值 | number \| ((data: EdgeData, edges: Record<ID, number>) => number) | - |
| minLineWidth | 映射线宽的最小阈值 | number \| ((data: EdgeData) => number) | 1 |
| maxLineWidth | 映射线宽的最大阈值 | number \| ((data: EdgeData) => number) | 10 |
| scale | 线宽的映射函数或比例（支持线性、对数等变换） | `linear` \| `log` \| `pow` \| `sqrt` \| ((value: number, domain: [number, number], range: [number, number]) => number) | `linear` |

## 插件 Plugin

插件 (Plugin) 用于处理画布的渲染逻辑、额外组件渲染，例如在画布中额外挂载图形组件、实现撤销重做等功能。

**类型定义**：`PluginOptions[] | ((existingPlugins: PluginOptions[]) => PluginOptions[])`

Plugin 可定义为静态数组或动态函数：

- 静态数组：明确列出所有需要的插件。
- **（👍 推荐）** 动态函数：基于现有插件，动态新增或调整。

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // 静态数组形式
  const plugins = [{ type: 'minimap' /* 参数 */ }];

  // 动态函数形式
  const dynamicTransforms = (existingPlugins) => {
    // console.log(existingPlugins); 👉 []
    return [...existingPlugins, { type: 'minimap' /* 参数 */ }];
  };

  return <MindMap plugins={plugins /** or existingPlugins**/} />;
};
```

支持 G6 的所有内置插件。内置插件列表请参考 [G6 - API - 插件](https://g6.antv.antgroup.com/api/plugins/background)。
