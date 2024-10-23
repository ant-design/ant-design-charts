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
| autoFit | Auto-fit settings | `{ type: 'view'; options?: `[`FitViewOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/fitviewoptions)`; animation?:` [`ViewportAnimationEffectTiming`](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming)`; }` <br> \| `{ type: 'center'; animation?: ViewportAnimationEffectTiming; }` <br> \| `'view'` \| `'center'` | - |
| animation | Enable or disable global animations. If set with animation config, it enables animation and uses the config as a base for global animations. | `boolean` \| [`AnimationEffectTiming`](https://g6.antv.antgroup.com/en/api/reference/g6/viewportanimationeffecttiming) | - |
| autoResize | Automatically adjust canvas size | `boolean` | `false` |
| background | Canvas background color | `string` | - |
| combo | Combo support, using G6 built-in Combo. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/elements/combos/base-combo) | [`ComboOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/combooptions) | - |
| container | Canvas container | `string` \| `HTMLElement` \| `Canvas` | - |
| cursor | Cursor style | `Cursor` | - |
| data | Graph data | [GraphData](https://g6.antv.antgroup.com/en/api/reference/g6/graphdata) | - |
| devicePixelRatio | Device pixel ratio | `number` | - |
| edge | Edge settings, using G6 built-in edges. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/elements/edges/base-edge) | [`EdgeOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/edgeoptions) | - |
| height | Canvas height | `number` | - |
| layout | Layout settings, using G6 built-in layouts. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/layouts/antv-dagre-layout) | `LayoutOptions` \| `LayoutOptions[]` | - |
| node | Node settings, using G6 built-in nodes. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/elements/nodes/base-node) | [`NodeOptions`](https://g6.antv.antgroup.com/en/api/reference/g6/nodeoptions) | - |
| padding | Canvas padding, typically applied when auto-fitting based on padding | `number` \| `number[]` | - |
| renderer | Renderer accessor | `(layer: 'background' \| 'main' \| 'label' \| 'transient') => IRenderer` | - |
| rotation | Rotation angle | `number` | `0` |
| theme | Theme setting | `'light'` \| `'dark'` \| `string` | - |
| width | Canvas width | `number` | - |
| x | Viewport x-coordinate | `number` | - |
| y | Viewport y-coordinate | `number` | - |
| zoom | Zoom level | `number` | `1` |
| zoomRange | Zoom range | `[number, number]` | `[0.01, 10]` |
| behaviors | User interaction events, also supports G6 built-in behaviors. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/behaviors/brush-select) | `BehaviorOptions \| ((this: Graph, behaviors: BehaviorOptions) => BehaviorOptions)` | See component |
| plugins | Canvas plugins, handles rendering logic and additional component rendering. Also supports G6 built-in plugins. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/plugins/background) | `PluginOptions \| ((this: Graph, plugins: PluginOptions) => PluginOptions)` | - |
| transforms | Data transformation settings, handling user input and converting it to internal data streams for processing. Also supports G6 built-in transformers. For more configuration details, refer to [here](https://g6.antv.antgroup.com/en/api/transforms/map-node-size) | `TransformOptions \| ((this: Graph, behaviors: TransformOptions) => TransformOptions)` | See component |
| onDestroy | Callback executed after graph destruction (`graph.destroy()`) | `() => void` | - |
| onInit | Callback executed after graph initialization (`new Graph()`) | `(graph: Graph) => void` | - |
| onReady | Callback executed after graph rendering (`graph.render()`) | `(graph: Graph) => void` | - |

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
