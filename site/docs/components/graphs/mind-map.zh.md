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
<code src="../graphs-demos/mind-map/direction.tsx">节点分布</code>
<code src="../graphs-demos/mind-map/collapse-expand.tsx">展开/收起子节点</code>
<code src="../graphs-demos/mind-map/color.tsx">设置分支颜色</code>
<code src="../graphs-demos/mind-map/custom-node.tsx">自定义节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### MindMap

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| layout | 设置布局配置 | [Layout](#layout) | - |
| type | 语法糖，设置展示风格。当设置 `node.component` 时以后者为准 | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | 语法糖，设置节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'left'` \| `'right'` \| `'alternate'` | `'alternate'` |
| nodeMinWidth | 节点的最小宽度，当文字内容不足时将居中显示 | `number` | `0` (`default` 类型) <br> `120` (`boxed` 类型) |
| nodeMaxWidth | 节点的最大宽度，超出部分将自动换行 | `number` | `300` |
| defaultExpandLevel | 默认展开层级，若不指定，将展开全部 | number | - |

<embed src="../graphs-common/tree-data.zh.md"></embed>

### Layout

脑图布局，深度相同的节点将会被放置在同一层。参数如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局类型 | string | `mindmap` |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| direction | 树布局的方向 | `H` \| `V` | `H` |
| getWidth | 每个节点的宽度 | (node: NodeData) => number | 默认使用节点高度 |
| getHeight | 每个节点的高度 | (node: NodeData) => number | 默认使用节点宽度 |
| getHGap | 每个节点的水平间隙 | (node: NodeData) => number | - |
| getVGap | 每个节点的垂直间隙 | (node: NodeData) => number | - |
| getSide | 节点排布在根节点的左侧/右侧。若设置了该值，则所有节点会在根节点同一侧，即 direction = 'H' 不再起效。若该参数为回调函数，则可以指定每一个节点在根节点的左/右侧。 | (node: NodeData) => string | - |
