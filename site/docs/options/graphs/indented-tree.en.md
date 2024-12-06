---
category: Components
type: Graph
usage: relation
title: IndentedTree
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JZZVT5PsWPQAAAAAAAAAAAAADmJ7AQ/original
order: 2
---

An indented tree is used to represent hierarchical data, displaying parent-child relationships through indentation.

```js
import { IndentedTree } from '@ant-design/graphs';
```

## When to Use

- **File Directory Structure**: Show hierarchy of directories and files in a file system.
- **Organizational Structure**: Display the hierarchy of a company or team, and department relationships.
- **Navigation Menus**: Show hierarchical navigation menus for websites or applications.
- **Category Hierarchy**: Represent hierarchical relationships in classification systems, such as product categories or article categories.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/indented-tree/default.tsx">Basic Usage</code>
<code src="../graphs-demos/indented-tree/type.tsx">Styles</code>
<code src="../graphs-demos/indented-tree/direction.tsx">Child Node Distribution</code>
<code src="../graphs-demos/indented-tree/custom-node.tsx">Custom Nodes</code>
<code src="../graphs-demos/indented-tree/collapse-expand.tsx">Expand/Collapse Child Nodes</code>
<code src="../graphs-demos/indented-tree/color.tsx">Set Branch Colors</code>

## API

Common props ref: [Common Graph Properties](./overview#common-graph-properties)

### IndentedTree

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Syntax sugar for setting the display style of the indented tree. When `node.component` is set, it takes precedence. | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction | Syntax sugar for setting the node arrangement direction. When `layout.direction` is set, it takes precedence. | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth | Minimum node width in the indented tree | `number` | `0` |
| nodeMaxWidth | Maximum node width in the indented tree | `number` | `300` |
| layout | Indented tree layout configuration | [`IndentedLayoutOptions`](https://g6.antv.antgroup.com/en/api/layouts/indented-layout) | `{ type: 'indented' }` |
| behaviors | Set user interaction events, also supports G6 built-in behaviors. For more details on behaviors, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | Set canvas plugins for handling rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details on plugins, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in data transformers. For more details on data transformation, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
