---
title: Overview
order: 0
---

`@ant-design/graphs` is a React component library meticulously built on top of [G6](https://g6.antv.antgroup.com/en/manual/introduction), designed to provide developers with an out-of-the-box solution for business applications with a "one graph, one action" approach, while maintaining feature parity with G6. This makes the integration of relational graphs simpler and more efficient.

> The graph components provided by this library come with a set of default configurations that cater to most common use cases. Users can easily modify these configurations through custom parameters to optimize rendering and meet specific business needs. However, for highly customized and complex scenarios, it is recommended to use G6 directly to fully leverage its powerful underlying functionality and flexibility.

## Overview of Graph Components

| Application Scenario | Graph Component | Demo | Example |
| --- | --- | --- | --- |
| Mind Map | `MindMap` | ![mind-map](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cce0Sa7DR3cAAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-mind-map) |
| Dendrogram | `Dendrogram` | ![dendrogram](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-dendrogram) |
| Indented Tree | `IndentedTree` | ![indented-tree](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JZZVT5PsWPQAAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-indented-tree) |
| Organizational Chart | `OrganizationChart` | ![org-chart](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jgGCT7cMxg8AAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-organization-chart) |
| Flowchart | `FlowGraph` | ![flow-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*n9JgQIGi9BQAAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-flow-graph) |
| Flow Direction Graph | `FlowDirectionGraph` | ![flow-direction-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-flow-direction-graph) |
| Network Graph | `NetworkGraph` | ![network-graph](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q9AkRIF8fF4AAAAAAAAAAAAADmJ7AQ/original) | [Example](https://ant-design-charts.antgroup.com/en/examples#relations-network-graph) |

## Common Graph Properties

For general configuration reference: [General Properties](./general-properties.en.md)

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| autoFit | Whether to auto-fit the graph | `{ type: 'view'; options?: `[`FitViewOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/fitviewoptions)`; animation?:` [`ViewportAnimationEffectTiming`](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming)`}` <br> \| `{ type: 'center'; animation?:` [`ViewportAnimationEffectTiming`](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming)`}` <br> \| `'view'` \| `'center'` | - |
| animation | Enable or disable global animations. If animation config is provided, it enables animations and uses the config as the base. For more details on animations, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/animation) | `boolean` \| [`AnimationEffectTiming`](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming) | - |
| autoResize | Whether to automatically adjust the canvas size | `boolean` | `false` |
| background | Background color of the canvas | `string` | - |
| combo | Combo support, using G6 built-in Combos. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/element#combo) | [`ComboOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/combooptions) | - |
| container | Canvas container | `string` \| [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) \| [`Canvas`](https://g.antv.antgroup.com/en/api/renderer/canvas) | - |
| cursor | Cursor style | [`Cursor`](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) | - |
| data | Graph data. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/data) | [`GraphData`](https://g6.antv.antgroup.com/en/api/reference/g6/graphdata) | - |
| devicePixelRatio | Device pixel ratio | `number` | - |
| edge | Edge configuration, using G6 built-in edges. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/element#edge) | [`EdgeOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/edgeoptions) | - |
| height | Canvas height | `number` | - |
| layout | Graph layout configuration, using G6 built-in layouts. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/layout) | [`LayoutOptions`](https://g6.antv.antgroup.com/en/examples#layout-force-directed) \| `LayoutOptions[]` | - |
| node | Node configuration, using G6 built-in nodes. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/element#node) | [`NodeOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/nodeoptions) | - |
| padding | Canvas padding, usually applied during auto-fitting based on padding | `number` \| `number[]` | - |
| renderer | Access renderer | `(layer: 'background' \| 'main' \| 'label' \| 'transient') =>`[`IRenderer`](https://g.antv.antgroup.com/en/api/canvas/options#renderer) | - |
| rotation | Rotation angle | `number` | `0` |
| theme | Theme | `'light'` \| `'dark'` \| `string` | - |
| width | Canvas width | `number` | - |
| x | Viewport x-coordinate | `number` | - |
| y | Viewport y-coordinate | `number` | - |
| zoom | Zoom scale | `number` | `1` |
| zoomRange | Zoom range | `[number, number]` | `[0.01, 10]` |
| behaviors | Set user interaction events, also supports G6 built-in interactions. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | See component |
| plugins | Set canvas plugins to handle rendering logic and additional components. Also supports G6 built-in plugins. For more details, refer to [here](https://g6.antv.antgroup.com/en/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/en/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | Set data transformers to process user input data and convert it into internal flow data. Also supports G6 built-in transformers. For more details, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | See component |
| onDestroy | Callback executed after the graph is destroyed (`graph.destroy()`) | `() => void` | - |
| onInit | Callback executed after the graph is initialized (`new Graph()`) | `(graph:`[`Graph`](https://g6.antv.antgroup.com/en/api/reference/g6/graph)`) => void` | - |
| onReady | Callback executed after the graph is rendered (`graph.render()`) | `(graph:`[`Graph`](https://g6.antv.antgroup.com/en/api/reference/g6/graph)`) => void` | - |

## Customization

To meet diverse needs, users can extend the standard graph components to implement custom relationship graphs.

#### Update Basic Configurations

Except for interactions, plugins, and data transformations, all other graph configuration options can be directly customized.

```js
import { MindMap } from '@ant-design/graphs';

export default () => {
  const options = {
    autoFit: 'view',
    edge: {
      style: {
        lineWidth: 3,
      },
    },
  };
  return <MindMap {...options} />;
};
```

#### Update Interactions/Plugins/Data Transformations

> The following explanation on how to update plugins also applies to interactions and data transformations.

When configuring plugins, special attention should be paid to how they are added. To ensure that new functionality can be added without affecting the existing default plugins, we introduce a 🔔 specific plugin update strategy.

Specifically, this involves extending the existing plugin list through a higher-order function, rather than directly replacing it. This function accepts the current graph instance (`this: Graph`) and the existing plugin configuration (`plugins: PluginOptions`) as parameters, and returns a new array of plugin configurations.

Here’s a concrete example showing how to add a mini-map plugin to a mind map:

```js
import { MindMap } from '@ant-design/graphs';

export default () => {
  const options = {
    plugins: (existingPlugins) => [
      ...existingPlugins, // Retain all existing plugins
      { type: 'minimap', key: 'minimap' }, // Add the mini-map plugin
    ],
  };

  return <MindMap {...options} />;
};
```
