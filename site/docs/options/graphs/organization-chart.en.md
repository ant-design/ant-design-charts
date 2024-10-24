---
title: Organization Chart
order: 4
demo:
  cols: 3
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

## Code Examples

<code id="demo-org-chart-default" src="./demos/organization-chart/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-org-chart-direction" src="./demos/organization-chart/direction.tsx" description="Set `direction` to `vertical` for top-down or `horizontal` for left-right layout. The default is vertical.">Node Layout</code>

<code id="demo-org-chart-custom-node" src="./demos/organization-chart/custom-node.tsx" description="Render the chart using custom React nodes. The example uses the built-in `OrganizationChartNode`, but you can develop your own RC component for specific needs.">Custom Nodes</code>

<code id="demo-org-chart-collapse-expand" src="./demos/organization-chart/collapse-expand.tsx" description="
Adjust the `collapse-expand-react-node` interaction configuration to control expand/collapse behavior for child nodes.<br> - `enable`: Whether to enable the interaction, type is `boolean | ((data: NodeData) => boolean)`, default is `false` <br> - `trigger`: The element that triggers node collapse/expand; `'icon'` triggers on icon click, `'node'` triggers on node click, and `HTMLElement` allows custom elements, default is `'icon'` <br> - `direction`: Collapse/expand neighbor nodes in the specified direction, `'in'` for predecessor nodes, `'out'` for successor nodes, and `'both'` for both predecessors and successors, default is `'out'` <br> - `iconType`: Built-in icon options, either `'plus-minus'` or `'arrow-count'` <br> - `iconRender`: Render function to customize the collapse/expand icon, takes `isCollapsed` (whether the node is collapsed) and `data` (node data) as parameters, returns a custom icon <br> - `iconPlacement`: Icon position relative to the node, can be `'left'`, `'right'`, `'top'`, or `'bottom'`, default is `'bottom'` <br> - `iconOffsetX/iconOffsetY`: Horizontal/vertical offset for the icon relative to the node, default is `0` <br> - `iconClassName/iconStyle`: CSS class name and inline styles for the icon <br> - `refreshLayout`: Whether to refresh the layout after each collapse/expand operation
">Collapse/Expand Child Nodes</code>

## API

For general configuration, refer to: [Common Graph Properties](./overview#common-graph-properties)

### OrganizationChart

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Syntax sugar for node layout direction. Takes precedence over `layout.rankdir` if set | `'vertical'` \| `'horizontal'` | `'vertical'` |
| layout | AntV Dagre layout configuration | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins   | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
