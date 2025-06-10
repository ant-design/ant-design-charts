---
category: Components
type: Graph
usage: relation
title: OrganizationChart
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jgGCT7cMxg8AAAAAAAAAAAAADmJ7AQ/original
order: 4
---

Visually displays the hierarchical structure and departmental relationships within an organization.

```js
import { OrganizationChart } from '@ant-design/graphs';
```

## When to Use

- To show the hierarchical structure of a company or team, clarifying the relationships between positions and departments.
- To display the distribution of employees by position and department.
- For project management, clarifying team members and their responsibilities.
- For dependency analysis in scenarios like equity penetration and upstream/downstream company relationships.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/organization-chart/default.tsx">Basic Usage</code>
<code src="../graphs-demos/organization-chart/direction.tsx">Node Layout</code>
<code src="../graphs-demos/organization-chart/custom-node.tsx">Custom Nodes</code>
<code src="../graphs-demos/organization-chart/collapse-expand.tsx">Collapse/Expand Child Nodes</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### OrganizationChart

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| direction | Syntactic sugar for setting the arrangement direction of tree nodes. When `layout.rankdir` is set, it will take precedence | `vertical` \| `horizontal` | `vertical` |
| layout | Dagre layout configuration | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.en.md"></embed>

<embed src="../graphs-common/dagre-layout.en.md"></embed>
