---
title: Dendrogram
order: 3
---

A dendrogram breaks down items or phenomena into a tree-like structure to systematically display their composition or internal logic.

```js
import { Dendrogram } from '@ant-design/graphs';
```

## When to Use

It is suitable for displaying hierarchical data relationships, clarifying key points of an issue, and outlining logical steps to achieve a goal.

## Code Examples

<code id="demo-dendrogram-default" src="./demos/dendrogram/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-dendrogram-direction" src="./demos/dendrogram/direction.tsx" description="Use the syntax sugar `direction` to set the arrangement of child nodes as `vertical` or `radial`. If `direction` is not set, the default is `horizontal`. Note that the label placement will adjust based on the `direction`, but if `node.style.labelPlacement` is set, it takes precedence.">Arrangement Direction</code>

<code id="demo-dendrogram-compact" src="./demos/dendrogram/compact.tsx" description="Use the `compact` configuration for compact mode.">Compact Mode</code>

<code id="demo-dendrogram-collapse-expand" src="./demos/dendrogram/collapse-expand.tsx" description="Add G6's built-in CollapseExpand interaction, allowing nodes to expand/collapse on double-click. For more built-in interactions, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior).">Expand/Collapse Nodes</code>

## API

For general configuration, refer to: [Common Graph Properties](./graphs/overview#common-graph-properties)

### Dendrogram

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| direction | Syntax sugar to set the arrangement direction of tree nodes. When `layout.direction` is set, it takes precedence. | `'vertical'` \| `'horizontal'` \| `'radial'` | `'horizontal'` |
| compact | Whether to enable compact mode | `boolean` | `false` |
| layout | Tree layout configuration | [DendrogramLayoutOptions](https://g6.antv.antgroup.com/en/api/layouts/dendrogram-layout) | `{ type: 'dendrogram' }` |
| behaviors | Set user interaction events. Also supports G6 built-in interactions. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins | Set canvas plugins for rendering logic and additional components. Also supports G6 built-in plugins. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | Configure data transformations to handle user input and convert it into internal data flows. Also supports G6 built-in data transformers. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
