---
category: Components
type: Graph
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

<code id="demo-mind-map-default" src="./demos/mind-map/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-mind-map-type" src="./demos/mind-map/type.tsx" description="Use the `type` syntax to apply preset styles: linear style and boxed style.">Styles</code>

<code id="demo-mind-map-direction" src="./demos/mind-map/direction.tsx" description="Set `direction` to `right` or `left` to distribute child nodes on the right or left. If `direction` is not set, the default is free distribution.">Child Node Distribution</code>

<code id="demo-mind-map-custom-node" src="./demos/mind-map/custom-node.tsx" description="Customize nodes using `node.component`, in conjunction with `node.size`.">Custom Nodes</code>

<code id="demo-mind-map-collapse-expand" src="./demos/mind-map/collapse-expand.tsx" description="
Adjust the `collapse-expand-react-node` interaction configuration to control expand/collapse behavior for child nodes.<br> - `enable`: Whether to enable the interaction, type is `boolean | ((data: NodeData) => boolean)`, default is `false` <br> - `trigger`: The element that triggers node collapse/expand; `'icon'` triggers on icon click, `'node'` triggers on node click, and `HTMLElement` allows custom elements, default is `'icon'` <br> - `direction`: Collapse/expand neighbor nodes in the specified direction, `'in'` for predecessor nodes, `'out'` for successor nodes, and `'both'` for both predecessors and successors, default is `'out'` <br> - `iconType`: Built-in icon options, either `'plus-minus'` or `'arrow-count'` <br> - `iconRender`: Render function to customize the collapse/expand icon, takes `isCollapsed` (whether the node is collapsed) and `data` (node data) as parameters, returns a custom icon <br> - `iconPlacement`: Icon position relative to the node, can be `'left'`, `'right'`, `'top'`, or `'bottom'`, default is `'bottom'` <br> - `iconOffsetX/iconOffsetY`: Horizontal/vertical offset for the icon relative to the node, default is `0` <br> - `iconClassName/iconStyle`: CSS class name and inline styles for the icon <br> - `refreshLayout`: Whether to refresh the layout after each collapse/expand operation
">Collapse/Expand Child Nodes</code>

<code id="demo-mind-map-color" src="./demos/mind-map/color.tsx" description="The `assign-color-by-branch` feature allows branch differentiation by modifying `colors` to assign different colors to the mind map branches.">Set Branch Colors</code>

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
| plugins   | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
