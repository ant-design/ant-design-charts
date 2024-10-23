---
title: Indented Tree
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

## Code Examples

<code id="demo-indented-tree-default" src="./demos/indented-tree/default.tsx" description="A simple demonstration.">Basic Usage</code>

<code id="demo-indented-tree-type" src="./demos/indented-tree/type.tsx" description="Use the `type` syntax sugar to apply preset styles: line style or boxed style.">Styles</code>

<code id="demo-indented-tree-direction" src="./demos/indented-tree/direction.tsx" description="Set `direction` to `alternate` or `left` to distribute child nodes freely or to the left. If not set, the default is `right` (right distribution).">Child Node Distribution</code>

<code id="demo-indented-tree-custom-node" src="./demos/indented-tree/custom-node.tsx" description="Customize nodes using `node.component`, which must be paired with `node.size` to take effect.">Custom Nodes</code>

<code id="demo-indented-tree-collapse-expand" src="./demos/indented-tree/collapse-expand.tsx" description="
Adjust the `collapse-expand-react-node` interaction configuration to control expand/collapse behavior for child nodes.<br> - `enable`: Whether to enable the interaction, type is `boolean | ((data: NodeData) => boolean)`, default is `false` <br> - `trigger`: The element that triggers node collapse/expand; `'icon'` triggers on icon click, `'node'` triggers on node click, and `HTMLElement` allows custom elements, default is `'icon'` <br> - `direction`: Collapse/expand neighbor nodes in the specified direction, `'in'` for predecessor nodes, `'out'` for successor nodes, and `'both'` for both predecessors and successors, default is `'out'` <br> - `iconType`: Built-in icon options, either `'plus-minus'` or `'arrow-count'` <br> - `iconRender`: Render function to customize the collapse/expand icon, takes `isCollapsed` (whether the node is collapsed) and `data` (node data) as parameters, returns a custom icon <br> - `iconPlacement`: Icon position relative to the node, can be `'left'`, `'right'`, `'top'`, or `'bottom'`, default is `'bottom'` <br> - `iconOffsetX/iconOffsetY`: Horizontal/vertical offset for the icon relative to the node, default is `0` <br> - `iconClassName/iconStyle`: CSS class name and inline styles for the icon <br> - `refreshLayout`: Whether to refresh the layout after each collapse/expand operation
">Expand/Collapse Child Nodes</code>

<code id="demo-indented-tree-color" src="./demos/indented-tree/color.tsx" description="`assign-color-by-branch` is a built-in data transformation step that allows you to assign different colors to branches by modifying `colors`.">Set Branch Colors</code>

## API

For general configuration, refer to: [Common Graph Properties](./graphs/overview#common-graph-properties)

### IndentedTree

| Property      | Description | Type | Default Value |
| ---           | ---         | ---  | ---           |
| type          | Syntax sugar for setting the display style of the indented tree. When `node.component` is set, it takes precedence. | `'default'` \| `'linear'` \| `'boxed'` | `'default'` |
| direction     | Syntax sugar for setting the node arrangement direction. When `layout.direction` is set, it takes precedence. | `'left'` \| `'right'` \| `'alternate'` | `'right'` |
| nodeMinWidth  | Minimum node width in the indented tree | `number` | `0` |
| nodeMaxWidth  | Maximum node width in the indented tree | `number` | `300` |
| layout        | Indented tree layout configuration | [IndentedLayoutOptions](https://g6.antv.antgroup.com/en/api/layouts/indented-layout) | `{ type: 'indented' }` |
| behaviors     | Set user interaction events, also supports G6 built-in interactions. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | - |
| plugins       | Set canvas plugins to handle rendering logic and additional component rendering. Also supports G6 built-in plugins. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms    | Configure data transformations to process user input and convert it into internal data flows. Also supports G6 built-in transformers. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | - |
