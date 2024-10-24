---
title: Network Graph
order: 7
---

Displays a series of nodes (such as entities, objects, or concepts) and their connections or relationships.

```js
import { NetworkGraph } from '@ant-design/graphs';
```

## When to Use

Use when you need to visualize nodes and their relationships in a complex network structure, revealing connection patterns and data flow intuitively.

## Code Examples

<code id="demo-network-graph-default" src="./demos/network-graph/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-network-graph-label" src="./demos/network-graph/label.tsx" description="Display node labels. By default, three lines of text are shown, with the full content displayed on hover.">Node Labels</code>

<code id="demo-network-graph-node-importance" src="./demos/network-graph/node-importance.tsx" description="Map node importance to node size. Click [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) for more configuration options.">Node Importance</code>

## API

For general configuration, refer to: [Common Graph Properties](./overview#common-graph-properties)

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| layout | D3 Force layout configuration | [`D3ForceLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/d3-force-layout) | `{ type: 'd3-force' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins   | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
