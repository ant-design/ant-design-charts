---
title: Overview
order: 0
---

@ant-design/graphs is a React component library meticulously built on [G6](https://g6.antv.antgroup.com/en/manual/introduction). Its purpose is to provide developers with a collection of ready-to-use encapsulated "One Graph, One Action" components, while maintaining compatibility with G6 capabilities. This approach simplifies and streamlines the integration of relational graphs, making the process more efficient.

**Understanding "One Graph, One Action"**

- **"One Graph"** refers to graph components tailored for specific business scenarios (e.g., mind maps, organizational charts, flowcharts).
- **"One Action"** emphasizes the plug-and-play nature of these components. Users can directly select the appropriate graph component for their business needs and customize it with simple configurations.

For highly complex scenarios requiring deep customization, direct development using G6 is recommended to fully utilize its robust and flexible core functionalities.

## Terminology

Before delving into the usage of relational graphs, the following terms need to be understood:

- **Graph**: The central entry point for visualizations, consisting of nodes (representing entities) and edges (representing relationships between entities) that form a complex network structure.
- **Data**: The core of a graph. Its visualization and interactions are data-driven.
- **Element**: The basic building blocks of a graph, including nodes (Node), edges (Edge), and combinations (Combo).
- **Layout**: The arrangement of elements within a graph based on specified rules.
- **Behavior**: A set of interactions between users and the canvas or elements, such as dragging, zooming, panning, and selecting.
- **Plugin**: Extensions that enhance functionality, such as attaching additional graphical components or implementing undo-redo mechanisms.
- **Transform**: Data transformations that process input data for rendering purposes, ensuring input data remains unaltered.

## General Graph Properties

> **Tips**: The following properties are common across `Graphs` components. Unsupported components will be explicitly noted.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The data to be visualized. For details, refer to [G6 - Core Concepts - Data](https://g6.antv.antgroup.com/en/manual/core-concept/data). | [GraphData](https://g6.antv.antgroup.com/en/api/reference/g6/graphdata) | - |
| node | Nodes, supporting G6 built-in node types. For details, refer to [G6 - Core Concepts - Elements - Node](https://g6.antv.antgroup.com/en/manual/core-concept/element#node). | [NodeOptions](https://g6.antv.antgroup.com/en/api/reference/g6/nodeoptions) | - |
| edge | Edges, supporting G6 built-in edge types. For details, refer to [G6 - Core Concepts - Elements - Edge](https://g6.antv.antgroup.com/en/manual/core-concept/element#edge). | [EdgeOptions](https://g6.antv.antgroup.com/en/api/reference/g6/edgeoptions) | - |
| combo | Combos, supporting G6 built-in combo types. For details, refer to [G6 - Core Concepts - Elements - Combo](https://g6.antv.antgroup.com/en/manual/core-concept/element#combo). | [ComboOptions](https://g6.antv.antgroup.com/en/api/reference/g6/combooptions) | - |
| layout | Layouts, supporting G6 built-in layouts. For details, refer to [G6 - Core Concepts - Layout](https://g6.antv.antgroup.com/en/manual/core-concept/layout). | Refer to the component documentation. | - |
| behaviors | Behavior configurations. | [Behaviors](#behaviors) | - |
| plugins | Plugin configurations. | [Plugins](#plugins) | - |
| transforms | Data transformation settings. | [Data Transforms](#data-transforms) | - |
| theme | Theme options. | `light` \| `dark` \| string | - |

### Container Properties

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| containerStyle | Configures the style of the chart container, accepts an object containing CSS properties and values. | React.CSSProperties | - |
| containerAttributes | Adds custom HTML attributes to the chart container. | Record<string, any> | - |
| className | Adds a class name to the outermost wrapper of the component. | string | - |
| loading | Indicates whether the chart is in a loading state. | boolean | false |
| loadingTemplate | Custom loading template displayed when the chart is loading. | React.ReactElement | - |
| errorTemplate | Custom error template. A function that returns error information when the chart encounters an error. | (e: Error) => React.ReactNode | - |

### Canvas Properties

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| animation | Enables or disables global animations. When configured with animation settings, it uses those as the base configuration for global animations. For details, refer to [G6 - Core Concepts - Animation](https://g6.antv.antgroup.com/en/manual/core-concept/animation). | boolean \| [AnimationEffectTiming](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming) | - |
| autoFit | Whether to automatically fit the view. | `view` \| `center` | - |
| autoResize | Whether to automatically adjust the canvas size. | boolean | false |
| background | The background color of the canvas. | string | - |
| cursor | The pointer style. | [Cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor) | - |
| devicePixelRatio | The device pixel ratio. | number | - |
| width | The width of the canvas. | number | - |
| height | The height of the canvas. | number | - |
| zoom | The zoom scale. | number | 1 |
| zoomRange | The zoom range. | [number, number] | [0.01, 10] |
| padding | The inner padding of the canvas, usually adjusts the canvas based on this padding when auto-fitting. | number \| number[] | - |
| renderer | Gets the renderer. | (layer: `background` \| `main` \| `label` \| `transient`) => [IRenderer](https://g.antv.antgroup.com/api/canvas/options#renderer) | - |
| rotation | The rotation angle of the canvas. | number | 0 |

---

### Lifecycle Properties

Defines callbacks that execute at specific stages of the graph's lifecycle.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| onDestroy | Callback executed after the graph is destroyed (i.e., after `graph.destroy()` is called). | () => void | - |
| onInit | Callback executed after the graph is initialized (i.e., after `new Graph()` is called). | (graph: [Graph](https://g6.antv.antgroup.com/en/api/reference/g6/graph)) => void | - |
| onReady | Callback executed after the graph is rendered (i.e., after `graph.render()` is called). | (graph: [Graph](https://g6.antv.antgroup.com/en/api/reference/g6/graph)) => void | - |

## Behaviors

Behaviors refer to a series of actions users can take on the canvas and elements, such as dragging, zooming, panning, and selecting. These interactions enhance the intuitiveness of extracting information from the graph.

**Type Definition**: `BehaviorOptions[] | ((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])`

By default, the `zoom-canvas` (zoom canvas) and `drag-canvas` (drag canvas) interactions are enabled. For additional interactions, extra configuration is required.

Behaviors can be defined as either a static array or a dynamic function:

- **Static Array**: Declare all required interactions directly.
- **(👍 Recommended)** Dynamic Function: Dynamically add or adjust interactions based on existing behaviors.

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // Static array example
  const behaviors = ['zoom-canvas', { type: 'drag-canvas', direction: 'x' }];

  // Dynamic function example
  const dynamicBehaviors = (existingBehaviors) => {
    // console.log(existingBehaviors); 👉 [{ key: 'zoom-canvas', type: 'zoom-canvas' }, { key: 'drag-canvas', type: 'drag-canvas' }]
    return [...existingBehaviors, { type: 'click-select' /* properties */ }];
  };

  return <MindMap behaviors={behaviors /** or dynamicBehaviors **/} />;
};
```

Supports all interactions provided by G6. Below is a brief overview of some built-in interactions, with more details available in [G6 - Core Concepts - Interactions](https://g6.antv.antgroup.com/en/manual/core-concept/behavior):

- [Brush Select](https://g6.antv.antgroup.com/en/api/behaviors/brush-select): Box selection
- [Click Element](https://g6.antv.antgroup.com/en/api/behaviors/click-select): Click to select
- [Collapse Expand](https://g6.antv.antgroup.com/en/api/behaviors/collapse-expand): Expand/Collapse
- [Create Edge](https://g6.antv.antgroup.com/en/api/behaviors/create-edge): Create edge
- [Drag Canvas](https://g6.antv.antgroup.com/en/api/behaviors/drag-canvas): Drag canvas
- [Drag Element](https://g6.antv.antgroup.com/en/api/behaviors/drag-element): Drag element
- [Focus Element](https://g6.antv.antgroup.com/en/api/behaviors/focus-element): Focus element
- [Hover Element](https://g6.antv.antgroup.com/en/api/behaviors/hover-activate): Hover over element
- [Lasso Select](https://g6.antv.antgroup.com/en/api/behaviors/lasso-select): Lasso selection
- [Zoom Canvas](https://g6.antv.antgroup.com/en/api/behaviors/zoom-canvas): Zoom canvas

If the built-in interactions do not meet specific needs, custom interactions can be created following the tutorial on [G6 - Custom Interactions](https://g6.antv.antgroup.com/en/manual/custom-extension/behavior).

Additionally, Graphs also provides a set of interaction extensions.

| Extension | Register Type | Description | Applicable Scenarios |  |
| --- | --- | --- | --- | --- |
| HoverActivateChain | `hover-activate-chain` | Hovering to activate the node and its linked elements. | All graph types | [Configuration](https://g6.antv.antgroup.com/en/api/behaviors/hover-activate) |
| HoverActivateNeighbors | `hover-activate-neighbors` | Hovering to highlight adjacent nodes and edges. | All graph types | [Configuration](https://g6.antv.antgroup.com/en/api/behaviors/hover-activate) |

### HoverActivateChain

**Purpose**: When the user hovers over a node or edge, this interaction highlights the hovered node or edge and its directly connected links (upstream and downstream paths). It is commonly used to emphasize paths in network structures, aiding users in quickly analyzing link relationships.

**Configuration**: Same as [G6 - Behavior - HoverActivate](https://g6.antv.antgroup.com/en/api/behaviors/hover-activate).

### HoverActivateNeighbors

**Purpose**: When hovering over an element, this interaction highlights directly adjacent elements, helping users quickly understand the local context of the element.

**Configuration**: Same as [G6 - Behavior - HoverActivate](https://g6.antv.antgroup.com/en/api/behaviors/hover-activate).

## Data Transforms

Data processing (Transforms) is used to manipulate the input data provided by the user. These transformations only affect the data as rendered and do not alter the original input data.

**Type Definition**: `TransformOptions[] | (existingTransforms: TransformOptions[]) => TransformOptions[]`

Transforms can be defined in two ways:

- Static array: explicitly specify all required transformers.
- **(👍 Recommended)** Dynamic function: dynamically generate a new array of transformers based on the existing array.

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // Static array approach
  const transforms = [
    { type: 'assign-color-by-branch' /* properties */ },
    { type: 'map-edge-line-width' /* properties */ },
  ];

  // Dynamic function approach
  const dynamicTransforms = (existingTransforms) => {
    return [...existingTransforms, { type: 'arrange-edge-z-index' /* properties */ }];
  };

  return <MindMap transforms={transforms /** or dynamicTransforms **/} />;
};
```

All data transforms provided by G6 are supported. For a list of built-in transforms, please refer to [G6 - API - Data Transform](https://g6.antv.antgroup.com/en/api/transforms/map-node-size).

Additionally, Graphs also provide various data processing options.

| Extension | Registration Type | Description | Applicable Scenarios |  |
| --- | --- | --- | --- | --- |
| TranslateReactNodeOrigin | `translate-react-node-origin` | Adjusts the React node origin from top-left to center | All graph types | [Configuration](#translatereactnodeorigin) |
| CollapseExpandReactNode | `collapse-expand-react-node` | Collapse/expand React nodes | All graph types | [Configuration](#collapseexpandreactnode) |
| AssignColorByBranch | `assign-color-by-branch` | Assign colors to nodes based on the branch they belong to | MindMap, IndentedTree, Fishbone | [Configuration](#assigncolorbybranch) |
| ArrangeEdgeZIndex | `arrange-edge-z-index` | Adjusts the z-index of edges | IndentedTree, Fishbone | [Configuration](#arrangeedgezindex) |
| MapEdgeLineWidth | `map-edge-line-width` | Adjusts the width of edges | FlowDirectionGraph | [Configuration](#mapedgelinewidth) |

### TranslateReactNodeOrigin

**Purpose**: Since the default origin of React nodes is at the top-left corner, which may not align with the expected layout, this transformation moves the origin to the center of the node using offset values `dx` and `dy`.

### CollapseExpandReactNode

**Purpose**: Implements the ability to collapse and expand child nodes of React nodes. This functionality is only valid for React node types. The collapse/expand behavior is controlled by associating side effects with the node.

**Configuration**:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| enable | Enables the collapse/expand functionality | boolean \| ((data: NodeData) => boolean) | true |
| trigger | Specifies the element that triggers node collapse/expand | `icon` \| `node` \| HTMLElement | `icon` |
| direction | Specifies whether to collapse/expand neighbors in a specified direction: <br> - `in`: Predecessor nodes <br> - `out`: Successor nodes <br> - `both`: Both predecessor and successor nodes | `in` \| `out` \| `both` | `out` |
| iconType | Built-in icon options | `plus-minus` \| `arrow-count` | - |
| iconRender | Render function to customize collapse/expand icons. Takes property `isCollapsed` (whether the node is collapsed) and `data` (node data), returning a custom icon | (this: Graph, isCollapsed: boolean, data: NodeData) => React.ReactNode | - |
| iconPlacement | Specifies the icon’s relative position to the node | `left` \| `right` \| `top` \| `bottom` \| ((this: Graph, data: NodeData) => CardinalPlacement) | `bottom` |
| iconOffsetX | Specifies the horizontal offset of the icon relative to the node | number \| ((this: Graph, data: NodeData) => number) | 0 |
| iconOffsetY | Specifies the vertical offset of the icon relative to the node | number \| ((this: Graph, data: NodeData) => number) | 0 |
| iconClassName | Specifies the CSS class for the icon | string | - |
| iconStyle | Specifies the inline style for the icon | React.CSSProperties | {} |
| refreshLayout | Whether to refresh the layout after collapsing/expanding nodes | boolean | false |

### AssignColorByBranch

**Purpose**: Assigns colors to branches within a tree diagram to enhance visual distinction within logical branches or hierarchical structures.

**Configuration**:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| colors | Color palette | string[] | `['#1783FF', '#F08F56', '#D580FF', '#00C9C9', '#7863FF', '#DB9D0D', '#60C42D', '#FF80CA', '#2491B3', '#17C76F']` |

### ArrangeEdgeZIndex

**Purpose**: Adjusts the z-index of edges to optimize layer rendering, preventing edges from being obscured or unclear. Commonly used in tree diagrams alongside `assign-color-by-branch`.

### MapEdgeLineWidth

**Purpose**: Dynamically adjusts the width of edges based on their attributes (such as weight), making the graph more intuitive.

**Configuration**:

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| **(Required)** value | Specifies the edge’s line width | number \| ((this: Graph, data: EdgeData) => number) | - |
| minValue | Minimum line width | number \| ((data: EdgeData, edges: Record<ID, number>) => number) | - |
| maxValue | Maximum line width | number \| ((data: EdgeData, edges: Record<ID, number>) => number) | - |
| minLineWidth | Minimum threshold for line width mapping | number \| ((data: EdgeData) => number) | 1 |
| maxLineWidth | Maximum threshold for line width mapping | number \| ((data: EdgeData) => number) | 10 |
| scale | Mapping function or scale for line width (supports linear, logarithmic, etc.) | `linear` \| `log` \| `pow` \| `sqrt` \| ((value: number, domain: [number, number], range: [number, number]) => number) | `linear` |

## Plugins

Plugins are used to manage the rendering logic of the canvas and additional component rendering, such as embedding graphic components or enabling undo/redo features on the canvas.

**Type Definition**: `PluginOptions[] | ((existingPlugins: PluginOptions[]) => PluginOptions[])`

Plugins can be defined as either a static array or a dynamic function:

- Static array: explicitly list the required plugins.
- **(👍 Recommended)** Dynamic function: dynamically adjust the plugin list based on existing plugins.

```jsx
import { MindMap } from '@ant-design/graphs';

export default () => {
  // Static array approach
  const plugins = [{ type: 'minimap' /* properties */ }];

  // Dynamic function approach
  const dynamicTransforms = (existingPlugins) => {
    // console.log(existingPlugins); 👉 []
    return [...existingPlugins, { type: 'minimap' /* properties */ }];
  };

  return <MindMap plugins={plugins /** or dynamicPlugins **/} />;
};
```

All built-in plugins from G6 are supported. For a list of plugins, refer to [G6 - API - Plugins](https://g6.antv.antgroup.com/en/api/plugins/background).
