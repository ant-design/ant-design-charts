---
category: Components
type: Graph
usage: relation
title: Fishbone
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*olIATZ-4qMEAAAAAAAAAAAAADmJ7AQ/original
---

The Fishbone diagram, also known as the Ishikawa diagram, is a systematic graphical tool for analyzing the root causes of problems. By breaking a problem down into various factors, it assists in identifying and resolving issues.

```js
import { Fishbone } from '@ant-design/graphs';
```

## When to Use

The Fishbone analysis method, also referred to as cause-and-effect analysis, was developed by the Japanese management expert Kaoru Ishikawa. This method is designed to look beyond symptoms to uncover the underlying causes of a problem, helping to quickly identify the root causes that lead to the issue.

The basic principle of the Fishbone method is to identify the main causes of a problem (represented as the fish’s head) and list them as primary branches (the fish’s spine). These main causes are then further subdivided into smaller causes (represented by the fish's branches). The analysis continues in this manner until the underlying causes are fully explored, leading to potential solutions or actionable steps.

## Examples

<code id="default" src="./demos/fishbone/default.tsx" description="Cause-type fishbone diagram (with the head on the right), used for analyzing problems.">Cause-type Fishbone Diagram</code>

<code id="decision" src="./demos/fishbone/decision.tsx" description="Decision-type fishbone diagram (with the head on the left), used for solving problems.">Decision-type Fishbone Diagram</code>

<code id="layout" src="./demos/fishbone/layout.tsx" description="Adjust the position of the fishbone branches.">Adjust Layout Parameters</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | The type of the fishbone diagram | `'cause'` \| `'decision'` | `'cause'` |
| layout | Configuration for the layout of the fishbone diagram | [`FishboneLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/fishbone) | `{ type: 'fishbone' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
