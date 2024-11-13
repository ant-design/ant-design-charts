---
category: Components
type: Graph
usage: relation
title: Dendrogram
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original
order: 3
---

A dendrogram breaks down items or phenomena into a tree-like structure to systematically display their composition or internal logic.

```js
import { Dendrogram } from '@ant-design/graphs';
```

## When to Use

It is suitable for displaying hierarchical data relationships, clarifying key points of an issue, and outlining logical steps to achieve a goal.

## Examples

<code id="demo-dendrogram-default" src="./demos/dendrogram/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-dendrogram-direction" src="./demos/dendrogram/direction.tsx" description="Use the syntax sugar `direction` to set the arrangement of child nodes as `vertical` or `radial`. If `direction` is not set, the default is `horizontal`. Note that the label placement will adjust based on the `direction`, but if `node.style.labelPlacement` is set, it takes precedence.">Arrangement Direction</code>

<code id="demo-dendrogram-compact" src="./demos/dendrogram/compact.tsx" description="Use the `compact` configuration for compact mode.">Compact Mode</code>

<code id="demo-dendrogram-collapse-expand" src="./demos/dendrogram/collapse-expand.tsx" description="Add G6's built-in CollapseExpand interaction, allowing nodes to expand/collapse on double-click. For more built-in interactions, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior).">Expand/Collapse Nodes</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

### Dendrogram

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| direction | Syntax sugar to set the arrangement direction of tree nodes. When `layout.direction` is set, it takes precedence. | `'vertical'` \| `'horizontal'` \| `'radial'` | `'horizontal'` |
| compact | Whether to enable compact mode | `boolean` | `false` |
| layout | Tree layout configuration | [`DendrogramLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/dendrogram-layout) | `{ type: 'dendrogram' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins   | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
