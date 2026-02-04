# @antv/layout

Collection of basic layout algorithms to be used with [@antv/graphlib](https://www.npmjs.com/package/@antv/graphlib).

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6)

## Usage

### NPM

Install `@antv/layout` first.

```shell
# npm
$ npm install @antv/layout --save

# yarn
$ yarn add @antv/layout
```

Choose a layout algorithm from `@antv/layout` then.

```ts
import { Graph } from "@antv/graphlib";
import { CircularLayout } from "@antv/layout";

const graph = new Graph({ nodes: [], edges: [] });

const circularLayout = new CircularLayout({ radius: 10 });

(async () => {
  // 1. Return positions of nodes & edges.
  const positions = await circularLayout.execute(graph);

  // 2. To directly assign the positions to the nodes:
  await circularLayout.assign(graph);
})();
```

### UMD

Import scripts in UMD version of `@antv/graphlib` and `@antv/layout`.

```html
<script
  src="https://unpkg.com/@antv/graphlib"
  type="application/javascript"
></script>
<script
  src="https://unpkg.com/@antv/layout"
  type="application/javascript"
></script>
```

Use layouts under `Layout` namespace.

```js
const { Graph } = window.GraphLib;
const { CircularLayout } = window.Layout;
```

## Documentation

We provide the following layouts:

- [Circular](#Circular)
- [Random](#Random)
- [Grid](#Grid)
- [MDS](#MDS)
- [Concentric](#Concentric)
- [Radial](#Radial)
- [Fruchterman](#Fruchterman)
- [D3Force](#D3Force)
- [Force](#Force)
- [ForceAtlas2](#ForceAtlas2)

You can choose the following two ways to use, the difference is whether to change the node & edge data in the graph model:

- Calling execute to return positions of nodes & edges.
- Or calling assign to directly assign the positions to the nodes in graph model.

The first argument is the target `graph` whose type is **Graph**.

### Circular

Circular layout arranges the node on a circle. By tuning the configurations, user can adjust the node ordering method, division number, radial layout, and so on. G6 implements it according to the paper: [A framework and algorithms for circular drawings of graphs](https://www.sciencedirect.com/science/article/pii/S1570866705000031).

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*-3idTK1xa6wAAAAAAAAAAABkARQnAQ" alt="circular layout" width="300">
<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*_nLORItzM5QAAAAAAAAAAABkARQnAQ" alt="circular layout" width="300">
<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6J6BRIjmXKAAAAAAAAAAAABkARQnAQ" alt="circular layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-38)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `radius` **number** The radius of the circle. If the raidus exists, startRadius and endRadius do not take effect.
- `startRadius` **number** The start radius of spiral layout. The default value is `null`.
- `endRadius` **number** The end radius of spiral layout. The default value is `null`.
- `clockwise` **boolean** Whether to layout clockwisely. The default value is `true`.
- `divisions` **number** The division number of the nodes on the circle. Takes effect when `endRadius - startRadius !== 0`. The default value is `1`.
- `ordering` **null | 'topology' | 'degree'** The ordering method for nodes. `null` by default, which means the nodes are arranged in data order. `'topology'` means in topology order; `'degree'` means in degree order.
- `angleRatio` **number** How many `2*PI`s Between the first node and the last node. The default value is `1`.

### Random

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*G5_uRodUTaYAAAAAAAAAAABkARQnAQ" alt="random layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-226)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `width` **number** The width of the graph.
- `height` **number** The height of the graph.

### Grid

Grid orders the nodes according to the configurations and arranged them onto grid.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Oh6mRLVEBBIAAAAAAAAAAABkARQnAQ" alt="grid layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-438)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `width` **number** The width of the graph.
- `height` **number** The height of the graph.
- `rows` **number** The row number of the grid. If `rows` and `cols` is not provided, the algorithm will calculate it according to the space and node numbers automatically.
- `cols` **number** The col number of the grid.
- `condense` **boolean** Wheter to utilize the minimum space of the canvas. `false` means utilizing the full space, `true` means utilizing the minimum space.
- `preventOverlap` **boolean** Whether to prevent node overlappings. To activate preventing node overlappings, nodeSize is required, which is used for collide detection. The size in the node data will take effect if nodeSize is not assigned. If the size in node data does not exist either, nodeSize is assigned to 30 by default.
- `nodeSize` **number** The diameter of the node. It is used for preventing node overlappings.
- `preventOverlapPadding` **boolean** The minimum padding between nodes to prevent node overlappings. Takes effect when preventOverlap is true.
- `sortBy` **string** The ordering method for nodes. Smaller the index in the ordered array, more center the node will be placed. If sortBy is `undefined`, the algorithm order the nodes according to their degrees.

### MDS

MDS (Multidimensional scaling) is used for project high dimensional data onto low dimensional space.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aUS7TJR2NHcAAAAAAAAAAABkARQnAQ" alt="MDS layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-557)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `linkDistance` **number** The edge length. The default value is `50`.

### Concentric

Concentric arranges the nodes on several concentric circles. Each node is sorted by degree by default. The greater the degree of a node, the closer it is to the center point.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*QpyPTbBpO2AAAAAAAAAAAABkARQnAQ" alt="concentric layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-596)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `width` **number** The width of the graph.
- `height` **number** The height of the graph.
- `maxLevelDiff` **number** The sum of concentric values in each level. If it is `undefined`, `maxValue / 4` will take place, where maxValue is the max value of ordering properties. For example, if sortBy is `'degree'`, maxValue is the max degree value of all the nodes.
- `nodeSize` **number** The diameter of the node. It is used for preventing node overlappings. The default value is `30`.
- `minNodeSpacing` **number** The minimum separation between adjacent nodes. The default value is `10`.
- `clockwise` **boolean** Place the nodes in clockwise or not. The default value is `true`.
- `startAngle` **number** Where nodes start in radians. The default value is `(3 / 2) * Math.PI`.
- `equidistant` **boolean** Whether levels have an equal radial distance between them, may cause bounding box overflow. The default value is `false`.

### Radial

Radial layout arranges the nodes to concentrics centered at a focus node according to their shortest path length to the focus node. We implements it according to the paper: [More Flexible Radial Layout](http://emis.ams.org/journals/JGAA/accepted/2011/BrandesPich2011.15.1.pdf).

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*GAFjRJeAoAsAAAAAAAAAAABkARQnAQ" alt="radial layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-874)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `width` **number** The width of the graph.
- `height` **number** The height of the graph.
- `linkDistance` **number** The edge length. The default value is `50`.
- `focusNode` **string** The focus node of the radial layout. The first node of the data is the default value. It can be the id of a node or the node item.
- `unitRadius` **number** The separation between adjacent circles. If not provided, the layout will fill the canvas automatically.
- `preventOverlap` **boolean** Whether to prevent node overlappings. To activate preventing node overlappings, nodeSize is required, which is used for collide detection. The size in the node data will take effect if nodeSize is not assigned. If the size in node data does not exist either, nodeSize is assigned to 30 by default.
- `nodeSize` **number** The diameter of the node. It is used for preventing node overlappings.
- `preventOverlapPadding` **boolean** The minimum padding between nodes to prevent node overlappings. Takes effect when preventOverlap is true.
- `nodeSpacing` **number** It is the minimum distance between nodes to prevent node overlappings.
- `strictRadial` **boolean** Whether to layout the graph as strict radial, which means the nodes will be arranged on each circle strictly. Takes effect only when preventOverlap is true.
  - `true` The overlapped nodes can be arranged around their circle with small offsets.
  - `false` The overlapped nodes are arranged along their circles strictly. But for the situation that there are too many nodes on a circle to be arranged, the overlappings might not be eliminated completely.
- `sortBy` **string** Sort the nodes of the same level. undefined by default, which means place the nodes with connections as close as possible; 'data' means place the node according to the ordering in data, the closer the nodes in data ordering, the closer the nodes will be placed. sortBy also can be assigned to any name of property in nodes data, such as 'cluster', 'name' and so on (make sure the property exists in the data)
- `sortStrength` **number** The strength to sort the nodes in the same circle. Larger number means place the nodes with smaller distance of sortBy more closely. Takes effect only when sortBy is not undefined.

### Fruchterman

Fruchterman is a kind of force-directed layout. The implementation is according to the paper [Graph Drawing by Force-directed Placement](http://www.mathe2.uni-bayreuth.de/axel/papers/reingold:graph_drawing_by_force_directed_placement.pdf).

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*jK3ITYqVJnQAAAAAAAAAAABkARQnAQ" alt="fruchterman layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-1058)

LayoutOptions:

- `dimensions` **number** The dimensions of node's coordinates. The default value is `2`.
- `center` **[number, number] | [number, number, number]** The center of the graph. e.g. `[0, 0]`.
- `width` **number** The width of the graph.
- `height` **number** The height of the graph.
- `maxIteration` **number**
- `gravity` **number** The gravity, which will affect the compactness of the layout. The default value is `10`.
- `speed` **number** The moving speed of each iteraction. Large value of the speed might lead to violent swing.
- `clustering` **boolean** We can also layout according to `nodeClusterBy` field in data when enable clustering.
- `clusterGravity` The gravity of each cluster, which will affect the compactness of each cluster. The default value is `10`.

### D3Force

Force is the classical force-dicrected layout algorithm, which corresponds to force-directed layout in d3.js.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Nt45Q6nnK2wAAAAAAAAAAABkARQnAQ" alt="d3force layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-791)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`
- `linkDistance` **number** The edge length. The default length is `50`.
- `nodeStrength` **number** The strength of node force. Positive value means attractive force, negative value means repulsive force.
- `edgeStrength` **number** The strength of edge force, ranges from 0 to 1. Calculated according to the degree of nodes by default.
- `preventOverlap` **boolean**
- `collideStrength` **number** The strength of force for preventing node overlappings. The range is `[0, 1]`.
- `nodeSize` **number** The diameter of the node. It is used for preventing node overlappings. If nodeSize is not assigned, the size property in node data will take effect. If the size in node data does not exist either, nodeSize is assigned to `10` by default.
- `nodeSpacing` **number** The minimum space between two nodes when preventOverlap is true. The default value is `0`.

### Force

Force2 implements the force-directed layout algorithm. It comes from graphin-force, supports assign different masses and center gravities for different nodes freedomly. Comparing to graphin-force, the performance is improved greatly.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lX-qSqDECrIAAAAAAAAAAAAAARQnAQ" alt="force layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-1402)

LayoutOptions:

- `dimensions` **number** The dimensions of node's coordinates. The default value is `2`.
- `center` **[number, number] | [number, number, number]** The center of the graph. e.g. `[0, 0]`.
- `linkDistance` **number** The edge length. The default length is `200`.
- `nodeStrength` **number** The strength of node force. Positive value means repulsive force, negative value means attractive force (it is different from 'force'). The default value is `1000`.
- `edgeStrength` **number** The strength of edge force. Calculated according to the degree of nodes by default. The default value is `200`.
- `preventOverlap` **boolean**
- `nodeSize` **number** The diameter of the node. It is used for preventing node overlappings. If nodeSize is not assigned, the size property in node data will take effect. If the size in node data does not exist either, nodeSize is assigned to `10` by default.
- `nodeSpacing` **number** The minimum space between two nodes when preventOverlap is true. The default value is `0`.
- `minMovement` **number** When the average/minimum/maximum (according to `distanceThresholdMode`) movement of nodes in one iteration is smaller than minMovement, terminate the layout.
- `distanceThresholdMode` **'mean' | 'max' ｜ 'min'** The condition to judge with minMovement, `'mean'` means the layout stops while the nodes' average movement is smaller than minMovement, `'max' / 'min'` means the layout stops while the nodes' maximum/minimum movement is smaller than minMovement. `'mean'` by default
- `damping` **number** Range [0, 1], affect the speed of decreasing node moving speed. Large the number, slower the decreasing. The default value is `0.9`.
- `interval` **number** Controls the speed of the nodes' movement in each iteration. The default value is `0.02`.
- `maxSpeed` **number** The max speed in each iteration. The default value is `1000`.
- `force` **number** Coefficient for the repulsive force. Larger the number, larger the repulsive force.
- `coulombDisScale` **number** A parameter for repulsive force between nodes. Large the number, larger the repulsion. The default value is `0.005`.
- `gravity` **number** The gravity strength to the center for all the nodes. Larger the number, more compact the nodes. The default value is `10`.

### ForceAtlas2

FA2 is a kind of force directed layout, which performs better on the convergence and compactness.

<img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*MqwAQZLIVPwAAAAAAAAAAAAAARQnAQ" alt="forceAtlas2 layout" width="300">

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-1542)

LayoutOptions:

- `center` **[number, number]** The center of the graph. e.g. `[0, 0]`.
- `kr` **number** Repulsive parameter, smaller the kr, more compact the graph. The default value is `5`.
- `kg` **number** The parameter for the gravity. Larger kg, the graph will be more compact to the center. The default value is `5`.
- `ks` **number** The moving speed of the nodes during iterations. The default value is `0.1`.
- `tao` **number** The threshold of the swinging. The default value is `0.1`.
- `preventOverlap` **boolean**
- `dissuadeHubs` **boolean** Wheather to enable hub mode. If it is `true`, the nodes with larger in-degree will be placed on the center in higher priority.
- `barnesHut` **boolean** Whether to enable the barnes hut speedup, which is the quad-tree optimization. Due to the computation for quad-tree re-build in each iteration, we sugguest to enable it in large graph. It is `undefined` by deafult, when the number of nodes is larger than 250, it will be activated automatically. If it is set to be `false`, it will not be activated anyway.

### Supervisor

Sometimes we need to execute CPU-intensive algorithms in WebWorker so as not to block the main thread. For this we encapsulate a class called Supervisor. It accepts a graph model and layout algorithm as parameters, completes the creation and communication of WebWorker internally, and notifies the main thread through events after the calculation is completed.

```js
const graph = new Graph();
const layout = new CircularLayout();

const supervisor = new Supervisor(graph, layout);
const positions = await supervisor.execute();
```

[Online Demo](https://observablehq.com/d/2db6b0cc5e97d8d6#cell-199)

- `execute` Call `execute` on the selected layout algorithm. This is an async method.
- `stop` Call `stop` on the selected layout algorithm.
- `kill` Terminate the WebWorker.

### Use WebWorker in UMD and ESM format

We use the following syntax in ESM, which is also available in native ECMAScript modules in the browser:

```js
new Worker(new URL('./worker.js', import.meta.url));
```

Here are some demos with different bundlers:

* UMD format: https://codepen.io/xiaoiver/pen/LYgqEbN
* ESM with Vite: https://stackblitz.com/edit/vite-t1euu4?file=vite.config.js
* ESM with Webpack5: https://stackblitz.com/edit/github-wpncwj-u8ghot?file=src%2Findex.js

For more discussion see: https://github.com/antvis/layout/issues/121#issuecomment-1558408701.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
