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

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| layout | AntV Dagre layout configuration | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user behavior events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
