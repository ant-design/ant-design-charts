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
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| type | 语法糖，设置展示风格。当设置 `node.component` 时以后者为准 | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | 语法糖，设置节点的排布方向。当设置 `layout.direction` 时会以后者为准 | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth | 节点的最小宽度，当文字内容不够时将居中显示 | `number` | `0` |
| nodeMaxWidth | 节点的最大宽度，超出部分将自动换行 | `number` | `300` |
| defaultExpandLevel | 默认展开层级，若不指定，将展开全部 | number | - |
| layout | 缩进树布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.zh.md"></embed>

### Layout

缩进树布局，树节点的层级通过水平方向的缩进量来表示。每个元素会占一行/一列。参数如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局类型 | string | `indented` |
| direction | 树布局的方向 | `LR` \| `RL` \| `H` | `LR` |
| indent | 列间间距。类型为 Number 时，列间间距是固定值；类型为 Function 时，节点与根结点的间距是函数返回值 | number \| (node: NodeData) => string | 20 |
| getWidth | 每个节点的宽度，direction 为 `H` 时有效 | (node: NodeData) => number | 默认使用节点宽度 |
| getHeight | 每个节点的高度 | (node: NodeData) => number | 默认使用节点高度 |
| getSide | 节点排布在根节点的左侧/右侧。若设置了该值，则所有节点会在根节点同一侧，即 direction = 'H' 不再起效。若该参数为回调函数，则可以指定每一个节点在根节点的左/右侧 | (node: NodeData) => string | - |
| dropCap | 每个节点的第一个自节点是否位于下一行 | boolean | true |
