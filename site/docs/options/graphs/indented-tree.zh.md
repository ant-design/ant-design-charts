---
category: Components
type: Graph
usage: relation
title: IndentedTree 缩进树图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JZZVT5PsWPQAAAAAAAAAAAAADmJ7AQ/original
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

<!-- prettier-ignore -->
<code src="../graphs-demos/indented-tree/default.tsx">基本用法</code>
<code src="../graphs-demos/indented-tree/type.tsx">风格</code>
<code src="../graphs-demos/indented-tree/direction.tsx">子节点分布</code>
<code src="../graphs-demos/indented-tree/custom-node.tsx">自定义节点</code>
<code src="../graphs-demos/indented-tree/collapse-expand.tsx">展开/收起子节点</code>
<code src="../graphs-demos/indented-tree/color.tsx">设置分支颜色</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### IndentedTree

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 语法糖，设置缩进树图的展示风格。当设置 `node.component` 时以后者为准 | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | 语法糖，设置缩进树图节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth | 缩进树图节点的最小宽度，当文字内容不够时将居中显示 | `number` | `0` |
| nodeMaxWidth | 缩进树图节点的最大宽度，超出部分将自动换行 | `number` | `300` |
| layout | 缩进树布局配置 | [`IndentedLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/indented-layout) | `{ type: 'indented' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
