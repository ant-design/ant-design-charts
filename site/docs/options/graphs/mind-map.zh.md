---
category: Components
type: Graph
usage: relation
title: MindMap 思维导图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cce0Sa7DR3cAAAAAAAAAAAAADmJ7AQ/original
order: 1
---

辅助用户系统整理与表达思想的思维辅助工具。

```js
import { MindMap } from '@ant-design/graphs';
```

## 何时使用

当信息繁杂或需明确逻辑关系时，将其梳理成一系列节点与分支，进而简化理解。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/mind-map/default.tsx">基本用法</code>
<code src="../graphs-demos/mind-map/type.tsx">风格</code>
<code src="../graphs-demos/mind-map/direction.tsx">子节点分布</code>
<code src="../graphs-demos/mind-map/custom-node.tsx">自定义节点</code>
<code src="../graphs-demos/mind-map/collapse-expand.tsx">展开/收起子节点</code>
<code src="../graphs-demos/mind-map/color.tsx">设置分支颜色</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### MindMap

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 语法糖，设置思维导图的展示风格。当设置 `node.component` 时以后者为准 | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | 语法糖，设置思维导图节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'left'` \| `'right'` \| `'alternate'` | `'alternate'` |
| nodeMinWidth | 思维导图节点的最小宽度，当文字内容不足时将居中显示 | `number` | `0` (`default` 类型) <br> `120` (`boxed` 类型) |
| nodeMaxWidth | 思维导图节点的最大宽度，超出部分将自动换行 | `number` | `300` |
| layout | 思维导图布局配置 | [`MindmapLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/mindmaplayout) | `{ type: 'mindmap' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
