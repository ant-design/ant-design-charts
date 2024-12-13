---
category: Components
type: Graph
usage: relation
title: IndentedTree
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JZZVT5PsWPQAAAAAAAAAAAAADmJ7AQ/original
order: 2
---

An indented tree is used to represent hierarchical data, displaying parent-child relationships through indentation.

```js
import { IndentedTree } from '@ant-design/graphs';
```

## When to Use

- **File Directory Structure**: Show hierarchy of directories and files in a file system.
- **Organizational Structure**: Display the hierarchy of a company or team, and department relationships.
- **Navigation Menus**: Show hierarchical navigation menus for websites or applications.
- **Category Hierarchy**: Represent hierarchical relationships in classification systems, such as product categories or article categories.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/indented-tree/default.tsx">Basic Usage</code>
<code src="../graphs-demos/indented-tree/type.tsx">Styles</code>
<code src="../graphs-demos/indented-tree/direction.tsx">Child Node Distribution</code>
<code src="../graphs-demos/indented-tree/custom-node.tsx">Custom Nodes</code>
<code src="../graphs-demos/indented-tree/collapse-expand.tsx">Expand/Collapse Child Nodes</code>
<code src="../graphs-demos/indented-tree/color.tsx">Set Branch Colors</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### IndentedTree

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| type | Syntactic sugar for setting the display style. When `node.component` is set, it takes precedence | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | Syntactic sugar for setting the arrangement direction of nodes. When `layout.direction` is set, it takes precedence | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth | Minimum width of a node; if the text content is not enough, it will be centered | `number` | `0` |
| nodeMaxWidth | Maximum width of a node; excess content will automatically wrap to the next line | `number` | `300` |
| defaultExpandLevel | The default expansion level; if not specified, all levels will be expanded | number | - |
| layout | Configuration for the indented tree layout | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.en.md"></embed>

### Layout

Indented tree layout, where the hierarchy of tree nodes is represented by horizontal indentation. Each element occupies a single line/column. Parameters are as follows:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Layout type | string | `indented` |
| direction | Direction of the tree layout | `LR` \| `RL` \| `H` | `LR` |
| indent | Spacing between columns. When the type is Number, the spacing is fixed; when the type is Function, the spacing between the node and the root node is the return value of the function | number \| (node: NodeData) => string | 20 |
| getWidth | Width of each node, effective when `direction` is `H` | (node: NodeData) => number | Default is node width |
| getHeight | Height of each node | (node: NodeData) => number | Default is node height |
| getSide | Specifies whether nodes are arranged on the left/right side of the root node. If set, all nodes will be on the same side of the root node, making `direction = 'H'` ineffective. If this parameter is a callback function, it can specify whether each node is on the left/right side of the root node | (node: NodeData) => string | - |
| dropCap | Whether the first child node of each node is positioned on the next line | boolean | true |
