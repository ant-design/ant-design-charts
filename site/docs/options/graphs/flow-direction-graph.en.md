---
category: Components
type: Graph
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

<code id="demo-flow-direction-graph-default" src="./demos/flow-direction-graph/default.tsx" description="A simple demonstration.<br> Adjust `edge.style.lineWidth` via the interaction `map-edge-line-width`. It includes the following properties:<br> - `value` (number or function to compute the value of the edge)<br> - `minValue` and `maxValue` (optional, minimum and maximum values, can be numbers or functions)<br> - `minLineWidth` and `maxLineWidth` (optional, minimum and maximum line widths, can be numbers or functions)<br> - `scale` (optional, interpolation function to map values to line widths, supports `'linear'`, `'log'`, `'pow'`, `'sqrt'`, and custom interpolation functions)">Basic Usage</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

| Property  | Description | Type | Default Value |
| ---       | ---         | ---  | ---           |
| layout    | AntV Dagre layout configuration | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins   | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
