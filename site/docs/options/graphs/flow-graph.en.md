---
title: Flow Graph
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

## Code Examples

<code id="demo-flow-graph-default" src="./demos/flow-graph/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-flow-graph-hover" src="./demos/flow-graph/hover-activate-chain.tsx" description="By adding hover-highlight interaction (registered as `hover-activate-chain`), elements and their associated chains are highlighted on hover.">Highlight Elements and Their Chains</code>

<code id="demo-flow-graph-custom-node" src="./demos/flow-graph/custom-node.tsx" description="Customize nodes using `node.component`, which needs to be paired with `node.size` to work properly.">Custom Nodes</code>

## API

For general configuration, refer to: [Common Graph Properties](./graphs/overview#common-graph-properties)

| Property  | Description | Type | Default Value |
| ---       | ---         | ---  | ---           |
| layout    | AntV Dagre layout configuration | [AntVDagreLayoutOptions](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user interaction events, also supports G6 built-in interactions. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins   | Set canvas plugins to handle rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | Configure data transformations to process user input and convert it into internal data flows. Also supports G6 built-in transformers. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
