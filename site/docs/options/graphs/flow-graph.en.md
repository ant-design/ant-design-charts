---
category: Components
type: Graph
usage: flow,relation
title: FlowGraph
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*n9JgQIGi9BQAAAAAAAAAAAAADmJ7AQ/original
order: 5
---

Used to visually represent the steps and decision points of a process or system.

```js
import { FlowGraph } from '@ant-design/graphs';
```

## When to Use

A flowchart shows the entire process from start to finish. Each node represents a specific step or decision point, and the edges indicate the sequence and relationships between steps.

- Suitable for scenarios that require displaying linear processes or steps.
- Useful for planning and tracking project progress, clarifying task order and dependencies.
- Ideal for building decision trees, showing different decision points and paths.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/flow-graph/default.tsx">Basic Usage</code>
<code src="../graphs-demos/flow-graph/hover-activate-chain.tsx">Highlight Elements and Their Chains</code>
<code src="../graphs-demos/flow-graph/custom-node.tsx">Custom Nodes</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### FlowGraph

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| layout | Dagre layout configuration | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.en.md"></embed>

<embed src="../graphs-common/dagre-layout.en.md"></embed>
