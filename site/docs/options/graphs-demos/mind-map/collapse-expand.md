## zh

通过调整 `collapse-expand-react-node` 交互配置来控制展开/收起子节点的操作。

- `enable`: 是否启用该交互，类型为 `boolean | ((data: NodeData) => boolean)`，默认为 `false`
- `trigger`: 点击指定元素，触发节点收起/展开；`'icon'` 代表点击图标触发，`'node'` 代表点击节点触发，`HTMLElement` 代表自定义元素，默认为 `'icon'`
- `direction`: 收起/展开指定方向上的邻居节点，`'in'` 代表前驱节点，`'out'` 代表后继节点，`'both'` 代表前驱和后继节点，默认为 `'out'`
- `iconType`: 内置图标语法糖，`'plus-minus'` 或 `'arrow-count'`
- `iconRender`: 渲染函数，用于自定义收起/展开图标，参数为 `isCollapsed`（当前节点是否已收起）和 `data`（节点数据），返回自定义图标
- `iconPlacement`: 图标相对于节点的位置，可选值为 `'left'`、`'right'`、`'top'`、`'bottom'`，默认为 `'bottom'`
- `iconOffsetX/iconOffsetY`: 图标相对于节点的水平、垂直偏移量，默认为 `0`
- `iconClassName/iconStyle`: 指定图标的 CSS 类名及内联样式
- `refreshLayout`: 每次收起/展开节点后，是否刷新布局

## en

Adjust the `collapse-expand-react-node` interaction configuration to control expand/collapse behavior for child nodes.

- `enable`: Whether to enable the interaction, type is `boolean | ((data: NodeData) => boolean)`, default is `false`
- `trigger`: The element that triggers node collapse/expand; `'icon'` triggers on icon click, `'node'` triggers on node click, and `HTMLElement` allows custom elements, default is `'icon'`
- `direction`: Collapse/expand neighbor nodes in the specified direction, `'in'` for predecessor nodes, `'out'` for successor nodes, and `'both'` for both predecessors and successors, default is `'out'`
- `iconType`: Built-in icon options, either `'plus-minus'` or `'arrow-count'`
- `iconRender`: Render function to customize the collapse/expand icon, takes `isCollapsed` (whether the node is collapsed) and `data` (node data) as parameters, returns a custom icon
- `iconPlacement`: Icon position relative to the node, can be `'left'`, `'right'`, `'top'`, or `'bottom'`, default is `'bottom'`
- `iconOffsetX/iconOffsetY`: Horizontal/vertical offset for the icon relative to the node, default is `0`
- `iconClassName/iconStyle`: CSS class name and inline styles for the icon
- `refreshLayout`: Whether to refresh the layout after each collapse/expand operation
