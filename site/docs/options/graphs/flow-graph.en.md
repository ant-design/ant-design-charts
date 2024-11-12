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

<code id="demo-flow-graph-default" src="./demos/flow-graph/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-flow-graph-hover" src="./demos/flow-graph/hover-activate-chain.tsx" description="By adding hover-highlight interaction (registered as `hover-activate-chain`), elements and their associated chains are highlighted on hover.">Highlight Elements and Their Chains</code>

<code id="demo-flow-graph-custom-node" src="./demos/flow-graph/custom-node.tsx" description="Customize nodes using `node.component`, which needs to be paired with `node.size` to work properly.">Custom Nodes</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| layout | AntV Dagre layout configuration | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
