---
title: 流程图
order: 90
---

## 配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| className | String | false | undefined | 容器组件的 className |
| style | Object | false | undefined | 容器组件的 CSS 样式 |
| data | Object | true | 无 | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| width | Number | false | 500 | 图的宽度 |
| height | Number | false | 500 | 图的高度 |
| nodeType | String | false |'modelRect' | 节点类型，可以是 [G6 内置节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode)，也可以是[antd-charts 内置的节点]() |
| edgeType | String | false | 'polyline' | 边类型，可以是 [G6 内置边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，也可以是[antd-charts 内置的边]() |
| nodeSize | Number[] | false | [120, 40] | 节点的（最小）大小，部分图表可能会根据节点内容自适应大小 |
| nodeStyle | ShapeStyle | false | { stroke: '#40a9ff' } | [节点的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| edgeStyle | ShapeStyle | false | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#91d5ff' }} | [边的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| nodeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 节点在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| edgeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 边在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| nodeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} | [节点文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| edgeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} | [边文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| nodeAnchorPoints | Number[][] | false | [[0, 0.5], [1, 0.5]] | [节点相关边的连入位置](https://g6.antv.vision/zh/docs/manual/middle/elements/anchorpoint) |
| behaviors | string[] | false | 默认 udnefined，示例：['drag-canvas', 'zoom-canvas'] | ['drag-canvas', 'zoom-canvas'] | 默认的[内置交互](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior) |
| layout | Object | false | {type: 'dagre', direction: 'TB', nodesepFunc: (d: any) => 0, ranksepFunc: (d: any) => 0, controlPoints: true } | 布局配置项 |
| minimapCfg | Object | {show: false, size: [150, 100], type: 'keyShape'} | 控制是否显示缩略图以及缩略图配置，若 minimapCfg.show 设置为 true，则显示 Minimap，其他配置参见 [G6 Minimap](https://g6.antv.vision/zh/docs/api/Plugins/#minimap) |
| handleEdgeClick | Object | false | undefined | 点击边的响应函数 |
| handleEdgeHover | Object | false | undefined | hover 边的响应函数 |
| handleEdgeUnHover | Object | false | undefined | unhover 边的响应函数 |


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
    data,
    minimapCfg: {
      show: true
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node']
  };

  return <DagreGraph {...config} />;
};

export default DemoDagreGraph;
```



