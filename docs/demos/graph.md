---
title: 关系图
order: 89
---

# 关系图

## 通用配置项

注：表格中默认值一栏的 ‘-’ 代表各图表不同。

| 配置项 | 类型 | 是否必须 | 默认值 | 示例 | 说明 |
| - | --- | ----- | ----- | ----- | ----- |
| className | String | false | undefined | 'graph-container' | 容器组件的 className |
| style | Object | false | undefined | - | 容器组件的 CSS 样式 |
| data | Object | true | 无 | - | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| width | Number | false | 500 | 500 | 图的宽度 |
| height | Number | false | 500 | 500 | 图的高度 |
| nodeType | String | false | - | 'circle' | 节点类型，可以是 [G6 内置节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode)，也可以是[antd-charts 内置的节点]() |
| edgeType | String | false | - | 'line' | 边类型，可以是 [G6 内置边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，也可以是[antd-charts 内置的边]() |
| nodeSize | Number[] | false | - | [30, 10] | 节点的（最小）大小，部分图表可能会根据节点内容自适应大小 |
| nodeStyle | ShapeStyle | false | - | - | [节点的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| edgeStyle | ShapeStyle | false | - | - | [边的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| nodeStateStyles | ShapeStyles | false | - | - | 节点在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| edgeStateStyles | ShapeStyles | false | - | - | 边在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| nodeLabelCfg | Object | false | - | - | [节点文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| edgeLabelCfg | Object | false | - | - | [边文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| nodeAnchorPoints | Number[][] | false | [[0, 0.5], [1, 0.5]] | - | [节点相关边的连入位置](https://g6.antv.vision/zh/docs/manual/middle/elements/anchorpoint) |
| behaviors | string[] | false | - | ['drag-canvas', 'zoom-canvas'] | 默认的[内置交互](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior) |
| layout | Object | false | - | - | 布局配置项 |
| showMinimap | Boolean | false | false | true | 是否展示 minimap |
| otherGraphOptions | Object | false | false | - | [Graph 的其他配置项](https://g6.antv.vision/zh/docs/api/Graph#g6graph)，可覆盖上面所有配置 |


## 流程图

### 默认配置

默认配置如下，下表列出的配置均可修改：

| 配置项 | 默认值 |
| ----- | ----- |
| nodeType | 'modelRect' |
| edgeType | 'polyline' |
| behaviors | ['zoom-canvas', 'drag-canvas'] |
| nodeSize | [120, 40] |
| nodeLabelCfg | {style: { fill: '#000', fontSize: 12 }} |
| nodeAnchorPoints | [[0.5, 0], [0.5, 1]] |
| layout | {type: 'dagre', direction: 'TB', nodesepFunc: (d: any) => 0, ranksepFunc: (d: any) => 0, controlPoints: true } |
| showMinimap | false |
| nodeStyle | { stroke: '#40a9ff' } |
| edgeStyle | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#91d5ff' }} |
| nodeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| edgeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| otherGraphOptions | {} |
| handleEdgeClick | undefined |
| handleEdgeHover | undefined |
| handleEdgeUnHover | undefined |


### 数据说明

本图表中，data 的基本格式遵循[通用配置项](#通用配置项)。

### 演示结果


```tsx
import React, { useState, useEffect } from 'react';
import { DagreGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoDagreGraph: React.FC = () => {
  
  const data = {
    nodes: [
      {
        id: '0',
        label: '0',
      },
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '2',
      },
      {
        id: '3',
        label: '3',
      },
      {
        id: '4',
        label: '4',
      },
      {
        id: '5',
        label: '5',
      },
      {
        id: '6',
        label: '6',
      },
      {
        id: '7',
        label: '7',
      },
      {
        id: '8',
        label: '8',
      },
      {
        id: '9',
        label: '9',
      },
    ],
    edges: [
      {
          source: '0',
          target: '1',
      },
      {
          source: '0',
          target: '2',
      },
      {
          source: '1',
          target: '4',
      },
      {
          source: '0',
          target: '3',
      },
      {
          source: '3',
          target: '4',
      },
      {
          source: '4',
          target: '5',
      },
      {
          source: '4',
          target: '6',
      },
      {
          source: '5',
          target: '7',
      },
      {
          source: '5',
          target: '8',
      },
      {
          source: '8',
          target: '9',
      },
      {
          source: '2',
          target: '9',
      },
      {
          source: '3',
          target: '9',
      },
    ],
  };

  const config = {
    width: 650,
    height: 500,
    data,
    otherGraphOptions: {
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node']
      }
    }
  };

  return <DagreGraph {...config} />;
};

export default DemoDagreGraph;
```




## 资金流向图


### 默认配置

默认配置如下，下表列出的配置均可修改：

| 配置项 | 默认值 |
| ----- | ----- |
| nodeType | 'round-rect' |
| edgeType | 'fund-polyline' |
| behaviors | ['zoom-canvas', 'drag-canvas'] |
| nodeSize | [150, 30] |
| nodeLabelCfg | {style: { fill: '#000000A6', fontSize: 10 }} |
| nodeAnchorPoints | [[0.5, 0], [0.5, 1]] |
| layout | {type: 'dagre', rankdir: 'LR', nodesep: 30, ranksep: 50 } |
| showMinimap | false |
| nodeStyle | { stroke: '#72CC4A' } |
| edgeStyle | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#91d5ff' }} |
| nodeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| edgeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| otherGraphOptions | {} |
| handleEdgeClick | undefined |
| handleEdgeHover | undefined |
| handleEdgeUnHover | undefined |


### 数据说明

本图表中，data 的基本格式遵循[通用配置项](#通用配置项)。但元素颜色、边的文本依赖一些附加字段（dataType，subLabel），若使用该组件的默认边 'fund-polyline'，一个边数据可遵循以下格式：
```
{
  source: '1', // 必须
  target: '2', // 必须
  dataType: 'A', // 边的数据类型，既是一条边最上方的文本，也决定了该边的颜色，若不配置则不显示
  label: '100,000 Yuan', // 边的主要文本，将绘制于 dataType 文本下方，边上方，若不配置则不显示
  subLabel: '2019-08-03', // 边的次要文本，将绘制与 label 文本下方，边下方，若不配置则不显示
}
```

也可以通过配置 `edgeType` 使用其他类型的边。

### 演示结果

```tsx
import React, { useState, useEffect } from 'react';
import { DagreFundFlow } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoDagreFundFlow: React.FC = () => {
  
  const data = {
    nodes: [
      {
        id: '1',
        label: 'Company1',
      },
      {
        id: '2',
        label: 'Company2',
      },
      {
        id: '3',
        label: 'Company3',
      },
      {
        id: '4',
        label: 'Company4',
      },
      {
        id: '5',
        label: 'Company5',
      },
      {
        id: '6',
        label: 'Company6',
      },
      {
        id: '7',
        label: 'Company7',
      },
      {
        id: '8',
        label: 'Company8',
      },
      {
        id: '9',
        label: 'Company9',
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        dataType: 'A',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '1',
        target: '3',
        dataType: 'B',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '2',
        target: '5',
        dataType: 'C',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '5',
        target: '6',
        dataType: 'B',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '3',
        target: '4',
        dataType: 'C',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '4',
        target: '7',
        dataType: 'B',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '1',
        target: '8',
        dataType: 'B',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
      {
        source: '1',
        target: '9',
        dataType: 'C',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
    ],
  };


  const config = {
    width: 650,
    height: 500,
    data,
    colorMap: {
      A: '#72CC4A',
      B: '#1A91FF',
      C: '#FFAA15',
    },
    otherGraphOptions: {
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node']
      }
    }
  };

  return <DagreFundFlow {...config} />;
};

export default DemoDagreFundFlow;
```



## 缩进树


### 默认配置

默认配置如下，下表列出的配置均可修改：

| 配置项 | 默认值 |
| ----- | ----- |
| nodeType | 'card-node' |
| edgeType | 'cubic-horizontal' |
| behaviors | ['zoom-canvas', 'drag-canvas'] |
| nodeSize | [120, 40] |
| nodeLabelCfg | {style: { fill: '#000', fontSize: 12 }} |
| nodeAnchorPoints | [[0.5, 0], [0.5, 1]] |
| layout | {type: 'indented', rankdir: 'LR', dropCap: false, indent: 250, getHeight: () => 60, getWidth: () => 100 } |
| showMinimap | false |
| nodeStyle | { stroke: '#ccc' } |
| edgeStyle | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#ccc' }} |
| nodeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| edgeStateStyles | { hover: { stroke: '#1890ff', lineWidth: 2 }} |
| otherGraphOptions | {} |
| handleEdgeClick | undefined |
| handleEdgeHover | undefined |
| handleEdgeUnHover | undefined |

### 数据说明

本图表中，data 的基本格式遵循[通用配置项](#通用配置项)。但该组件默认使用的节点 'card-node' 有附加字段（description）作为描述文本。也可以通过配置 `nodeType` 使用其他类型的节点。

### 演示结果

```tsx
import React, { useState, useEffect } from 'react';
import { IndentedTree } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoIndentedTree: React.FC = () => {
  

  const data = {
    id: "A",
    label: "A",
    description: 'node Anode Anode Anode a',
    children: [{
      id: "A1",
      label: "A1",
      description: 'node A1',
      children: [
        { id: "A11", label: "A11", description: 'node A11\nnode A11\nnode A11', },
        { id: "A12", label: "A12", description: 'node A12', },
        { id: "A13", label: "A13", description: 'node A13', },
        { id: "A14", label: "A14", description: 'node A14', },
      ]
    }, {
      id: "A2",
      label: "A2",
      description: 'node A2\nnode A2\nnode A2\nnode A2\nnode A2',
      children: [{
        id: "A21",
        label: "A21",
        description: 'node A21',
        children: [
          { id: "A211", label: "A211", description: 'node A211', },
          { id: "A212", label: "A212", description: 'node A212', },
        ]
      }, {
        id: 'A22',
        label: "A22",
        description: 'node A22',
      }]
    }]
  };

  const config = {
    width: 650,
    height: 500,
    data,
    collasable: true,
    otherGraphOptions: {
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node']
      }
    }
  };

  return <IndentedTree {...config} />;
};

export default DemoIndentedTree;
```