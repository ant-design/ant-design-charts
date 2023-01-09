---
title: 转化流程图
---

#### data

数据，详见示例代码。

```ts
// 数据
interface ConvGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// 节点
interface GraphNode {
  id: string; // 节点id
  label: string; // 节点名称
  layer: number; // 节点所属层级
  custom: {
    layerName: string; // 节点所属层级名称
    measure: measureItem; // 节点主指标
    relatedMeasures?: measureItem[]; // 节点相关指标
    compareMeasures?: measureItem[]; // 同环比指标
    [key: string]: any;
  };
  style: PlainObject; // 样式
  data: OriginNode; // 节点原始数据
  x?: number; // 节点x坐标
  y?: number; // 节点y坐标
}

// 边
interface GraphEdge {
  id: string; // 边id
  source: string; // 边起点id
  target: string; // 边终点id
  label: string; // 边名称
  style: PlainObject; // 样式
  custom: {
    ratio: number; // 边比率
    showRatio: string; // 边比率(展示)
    [key: string]: any;
  };
  data: OriginEdge; // 边原始数据
}
```

#### layerOrder

层级配置，string[]，每一项与节点中LayerName的值对应。

##### segmLayer

分段层级，用于结合比率计算方式，来计算每条边上的比率值。

#### ratioMethod

占比计算方式，'both' | 'splitFlow' 'proportion'。
'both'：包含占比和分流，同层级的边、分段层级的入边都是占比边, 比率 = 边上指标 / 终点的主指标；分段层级的出边都是分流边, 比率 = 边上指标 / 起点的主指标；
'splitFlow'：均是分流：比率 = 边上指标 / 起点的主指标；
'proportion'：均是占比：比率 = 边上指标 / 终点的主指标；

##### onChangeData

数据变化的回调，(graphData: ConvGraphData) => void;

#### layout

布局相关的配置，对标G6的layout options；

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
