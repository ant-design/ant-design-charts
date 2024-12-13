---
category: Components
type: Graph
usage: relation
title: Dendrogram
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original
order: 3
---

A dendrogram breaks down items or phenomena into a tree-like structure to systematically display their composition or internal logic.

```js
import { Dendrogram } from '@ant-design/graphs';
```

## When to Use

It is suitable for displaying hierarchical data relationships, clarifying key points of an issue, and outlining logical steps to achieve a goal.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/dendrogram/default.tsx">Basic Usage</code>
<code src="../graphs-demos/dendrogram/direction.tsx">Arrangement Direction</code>
<code src="../graphs-demos/dendrogram/compact.tsx">Compact Mode</code>
<code src="../graphs-demos/dendrogram/collapse-expand.tsx">Expand/Collapse Nodes</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### Dendrogram

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| direction | Syntactic sugar for setting the arrangement direction of tree nodes. When `layout.direction` is set, it will take precedence | `vertical` \| `horizontal` \| `radial` | `horizontal` |
| compact | Whether to enable compact mode | boolean | false |
| defaultExpandLevel | The default expansion level; if not specified, all levels will be expanded | number | - |
| layout | Configuration for the dendrogram layout | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.en.md"></embed>

### Layout

Dendrogram layout properties are as follows:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Layout type | string | `dendrogram` |
| direction | Layout direction | `LR` \| `RL` \| `TB` \| `BT` \| `H` \| `V` | `RL` |
| nodeSep | Node separation | number | 40 |
| rankSep | Separation between layers | number | 200 |
| radial | Whether to arrange nodes in a radial layout. If `radial` is true, it is recommended to set `direction` to `LR` or `RL` |  |  |
