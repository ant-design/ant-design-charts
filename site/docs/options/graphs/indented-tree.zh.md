---
title: 缩进树图
order: 2
---

用于表示层次结构数据的图形结构，通过缩进来展示父子关系。

```js
import { IndentedTree } from '@ant-design/graphs';
```

## 何时使用

- 文件目录结构：展示文件系统中的目录和文件层级关系。
- 组织结构：展示公司或团队的层级结构和部门关系。
- 导航菜单：展示网站或应用程序中的导航菜单层级。
- 分类层次：展示分类系统中的层级关系，例如产品分类、文章分类等。

## 代码演示

<code id="demo-indented-tree-default" src="./demos/indented-tree/default.tsx" description="简单的展示。">基本用法</code>

<code id="demo-indented-tree-type" src="./demos/indented-tree/type.tsx" description="通过 `type` 语法糖，使用预设的风格：线条风格和方框风格。">风格</code>

<code id="demo-indented-tree-direction" src="./demos/indented-tree/direction.tsx" description="通过设置 `direction` 为 `alternate` `left` 分别让子节点自由、左侧分布。若不设置 `direction`，则默认 `right` 右侧分布。">子节点分布</code>

<code id="demo-indented-tree-custom-node" src="./demos/indented-tree/custom-node.tsx" description="通过 `node.component` 来进行自定义节点，需要与 `node.size` 配合实现。">自定义节点</code>

<code id="demo-indented-tree-collapse-expand" src="./demos/indented-tree/collapse-expand.tsx" description="
通过调整 `collapse-expand-react-node` 交互配置来控制展开/收起子节点的操作。<br> - `enable`: 是否启用该交互，类型为 `boolean | ((data: NodeData) => boolean)`，默认为 `false` <br> - `trigger`: 点击指定元素，触发节点收起/展开；`'icon'` 代表点击图标触发，`'node'` 代表点击节点触发，`HTMLElement` 代表自定义元素，默认为 `'icon'` <br> - `direction`: 收起/展开指定方向上的邻居节点，`'in'` 代表前驱节点，`'out'` 代表后继节点，`'both'` 代表前驱和后继节点，默认为 `'out'` <br> - `iconType`: 内置图标语法糖，`'plus-minus'` 或 `'arrow-count'` <br> - `iconRender`: 渲染函数，用于自定义收起/展开图标，参数为 `isCollapsed`（当前节点是否已收起）和 `data`（节点数据），返回自定义图标 <br> - `iconPlacement`: 图标相对于节点的位置，可选值为 `'left'`、`'right'`、`'top'`、`'bottom'`，默认为 `'bottom'` <br> - `iconOffsetX/iconOffsetY`: 图标相对于节点的水平、垂直偏移量，默认为 `0` <br> - `iconClassName/iconStyle`: 指定图标的 CSS 类名及内联样式 <br> - `refreshLayout`: 每次收起/展开节点后，是否刷新布局
">展开/收起子节点</code>

<code id="demo-indented-tree-color" src="./demos/indented-tree/color.tsx" description="`assign-color-by-branch` 是内置数据转换的一个环节，可以通过修改 `colors` 来分配不同的颜色来区分思维导图的分支。">设置分支颜色</code>

## API

通用配置参考：[图通用属性](./graphs/overview#图通用属性)

### IndentedTree

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 语法糖，设置缩进树图的展示风格。当设置 `node.component` 时以后者为准 | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | 语法糖，设置缩进树图节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth | 缩进树图节点的最小宽度 | `number` | `0` |
| nodeMaxWidth | 缩进树图节点的最大宽度 | `number` | `300` |
| layout | 缩进树布局配置 | [IndentedLayoutOptions](https://g6-next.antv.antgroup.com/api/layouts/indented-layout) | `{ type: 'indented' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | 设置数据转换，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器，了解相关配置项请查阅[此处](https://g6-next.antv.antgroup.com/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
