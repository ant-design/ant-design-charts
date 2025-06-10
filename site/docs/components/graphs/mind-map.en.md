---
category: Components
type: Graph
usage: relation
title: MindMap
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cce0Sa7DR3cAAAAAAAAAAAAADmJ7AQ/original
order: 1
---

A mind-mapping tool to help users organize and express their thoughts systematically.

```js
import { MindMap } from '@ant-design/graphs';
```

## When to Use

When information is complex or requires clear logical relationships, organize it into a series of nodes and branches to simplify understanding.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/mind-map/default.tsx">Basic Usage</code>
<code src="../graphs-demos/mind-map/type.tsx">Styles</code>
<code src="../graphs-demos/mind-map/direction.tsx">Child Node Distribution</code>
<code src="../graphs-demos/mind-map/custom-node.tsx">Custom Nodes</code>
<code src="../graphs-demos/mind-map/collapse-expand.tsx">Collapse/Expand Child Nodes</code>
<code src="../graphs-demos/mind-map/color.tsx">Set Branch Colors</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### MindMap

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| layout | Configuration for setting the layout | [Layout](#layout) | - |
| type | Syntactic sugar for setting the display style. When `node.component` is set, it takes precedence | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | Syntactic sugar for setting the arrangement direction of nodes. When `layout.direction` is set, it takes precedence | `'left'` \| `'right'` \| `'alternate'` | `'alternate'` |
| nodeMinWidth | Minimum width of a node; if the text content is insufficient, it will be centered | `number` | `0` (`default` type) <br> `120` (`boxed` type) |
| nodeMaxWidth | Maximum width of a node; excess content will automatically wrap to the next line | `number` | `300` |
| defaultExpandLevel | The default expansion level; if not specified, all levels will be expanded | number | - |

<embed src="../graphs-common/tree-data.en.md"></embed>

### Layout

Mind map layout, where nodes at the same depth are placed on the same level. Parameters are as follows:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Layout type | string | `mindmap` |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| direction | Direction of the tree layout | `H` \| `V` | `H` |
| getWidth | Width of each node | (node: NodeData) => number | Default is node height |
| getHeight | Height of each node | (node: NodeData) => number | Default is node width |
| getHGap | Horizontal gap between each node | (node: NodeData) => number | - |
| getVGap | Vertical gap between each node | (node: NodeData) => number | - |
| getSide | Specifies whether nodes are arranged on the left/right side of the root node. If set, all nodes will be on the same side of the root node, making `direction = 'H'` ineffective. If this parameter is a callback function, it can specify whether each node is on the left/right side of the root node. | (node: NodeData) => string | - |
