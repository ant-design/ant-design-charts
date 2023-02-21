---
title: Conversion Dagre Graph
---

#### data

Data, see example code for details.

```ts
// Data
interface ConvGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Node
interface GraphNode {
  id: string; // node id
  label: string; // node name
  layer: number; // node layer
  custom: {
    layerName: string; // node layer name
    measure: measureItem; // node main measure
    relatedMeasures?: measureItem[]; // node related measures
    compareMeasures?: measureItem[]; // node compare measures
    [key: string]: any;
  };
  style: PlainObject; // style
  data: OriginNode; // node origin data
  x?: number; // node x position
  y?: number; // node y position
}

// Edge
interface GraphEdge {
  id: string; // edge id
  source: string; // edge source node id
  target: string; // edge target node id
  label: string; // edge name
  style: PlainObject; // style
  custom: {
    ratio: number; // edge ratio
    showRatio: string; // edge ratio(show)
    [key: string]: any;
  };
  data: OriginEdge; // edge origin data
}
```

#### layerOrder

layer order config, string[], Each item corresponds to the value of LayerName in the node.

##### segmLayer

Segment layer is used to calculate the ratio value on each edge in combination with the ratio calculation method.

#### ratioMethod

ratio calculation method，'both' | 'splitFlow' 'proportion'。
'both'：Including proportion and diversion, the edge at the same level and the entry edge at the segment level are both proportion edges, and the ratio = the measure on the edge / the main measure of the target node; The outgoing edges of the segmentation level are all diversion edges, and the ratio = the measure on the edge / the main measure of the source point;
'splitFlow'：Both are split flow: ratio = edge measure / main measure of source node;
'proportion'：Both are proportion: ratio = edge measure / main measure of the target node;

##### onChangeData

Callback of data change, (graphData: ConvGraphData) => void;

#### layout

Layout related configuration, benchmarking G6 layout options;

```ts
{
  /** Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right. */
  rankdir: 'LR',
   /** Number of pixels that separate nodes vertically in the layout. */
  nodesep: 30,
  /** Number of pixels that separate nodes horizontally in the layout. */
  ranksep: 50,
}
```
