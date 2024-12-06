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

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

### OrganizationChart

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Syntax sugar for node layout direction. Takes precedence over `layout.rankdir` if set | `'vertical'` \| `'horizontal'` | `'vertical'` |
| layout | AntV Dagre layout configuration | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
