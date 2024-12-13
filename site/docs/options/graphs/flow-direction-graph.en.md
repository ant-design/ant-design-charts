---
category: Components
type: Graph
usage: flow,relation
title: FlowDirectionGraph
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original
order: 6
---

Used to visually display flow paths and value changes.

```js
import { FlowDirectionGraph } from '@ant-design/graphs';
```

## When to Use

Ideal for complex information that requires clear logical relationships or decision support. It visually and clearly shows data flow and relationships, improving understanding and decision-making efficiency.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/flow-direction-graph/default.tsx">Basic Usage</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-neighbor.tsx">Highlight Neighboring Elements</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-chain.tsx">Highlight Element and Its Chain</code>
<code src="../graphs-demos/flow-direction-graph/custom.tsx">Custom</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### FlowDirectionGraph

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| layout | Dagre layout configuration | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.en.md"></embed>

<embed src="../graphs-common/dagre-layout.en.md"></embed>
