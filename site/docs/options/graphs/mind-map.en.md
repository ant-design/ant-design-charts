---
category: Components
type: Graph
usage: relation
title: MindMap
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cce0Sa7DR3cAAAAAAAAAAAAADmJ7AQ/original
order: 1
---

A mind-mapping tool to help users organize and express their thoughts systematically.

```js
import { MindMap } from '@ant-design/graphs';
```

## When to Use

When information is complex or requires clear logical relationships, organize it into a series of nodes and branches to simplify understanding.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/mind-map/default.tsx">Basic Usage</code>
<code src="../graphs-demos/mind-map/type.tsx">Styles</code>
<code src="../graphs-demos/mind-map/direction.tsx">Child Node Distribution</code>
<code src="../graphs-demos/mind-map/custom-node.tsx">Custom Nodes</code>
<code src="../graphs-demos/mind-map/collapse-expand.tsx">Collapse/Expand Child Nodes</code>
<code src="../graphs-demos/mind-map/color.tsx">Set Branch Colors</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

### MindMap

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Syntax sugar, sets the mind map's display style. If `node.component` is set, it takes precedence | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | Syntax sugar, sets the layout direction of the mind map nodes. If `layout.direction` is set, it takes precedence | `'left'` \| `'right'` \| `'alternate'` | `'alternate'` |
| nodeMinWidth | Minimum width of the mind map nodes | `number` | `0` (`default` type) <br> `120` (`boxed` type) |
| nodeMaxWidth | Maximum width of the mind map nodes | `number` | `300` |
| layout | Mind map layout configuration | [`MindmapLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/mindmaplayout) | `{ type: 'mindmap' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
