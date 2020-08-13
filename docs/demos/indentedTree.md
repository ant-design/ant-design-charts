---
title: 缩进树图
order: 92
---

## 配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 示例 | 说明 |
| - | --- | ----- | ----- | ----- | ----- |
| className | String | false | undefined | 容器组件的 className |
| style | Object | false | undefined | 容器组件的 CSS 样式 |
| data | Object | true | 无 | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| width | Number | false | 500 | 图的宽度 |
| height | Number | false | 500 | 图的高度 |
| nodeType | String | false |'card-node' | 节点类型，可以是 [G6 内置节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode)，也可以是[antd-charts 内置的节点]() |
| edgeType | String | false | 'cubic-horizontal' | 边类型，可以是 [G6 内置边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，也可以是[antd-charts 内置的边]() |
| nodeSize | Number[] | false | [120, 40] | 节点的（最小）大小，部分图表可能会根据节点内容自适应大小 |
| nodeStyle | ShapeStyle | false | { stroke: '#ccc' } | [节点的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| edgeStyle | ShapeStyle | false | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#ccc' }} | [边的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| nodeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 节点在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| edgeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 边在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| nodeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} |  [节点文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| edgeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} |  [边文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| nodeAnchorPoints | Number[][] | false | [[0.5, 0], [0.5, 1]] | [节点相关边的连入位置](https://g6.antv.vision/zh/docs/manual/middle/elements/anchorpoint) |
| behaviors | string[] | false | ['zoom-canvas', 'drag-canvas'] | 默认的[内置交互](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior) |
| layout | Object | false | {type: 'indented', rankdir: 'LR', dropCap: false, indent: 250, getHeight: () => 60, getWidth: () => 100 } | 布局配置项 |
| minimapCfg | Object | {show: false, size: [150, 100], type: 'keyShape'} | 控制是否显示缩略图以及缩略图配置，若 minimapCfg.show 设置为 true，则显示 Minimap，其他配置参见 [G6 Minimap](https://g6.antv.vision/zh/docs/api/Plugins/#minimap |
| handleEdgeClick | Object | false | undefined | 点击边的响应函数 |
| handleEdgeHover | Object | false | undefined | hover 边的响应函数 |
| handleEdgeUnHover | Object | false | undefined | unhover 边的响应函数 |
| handleNodeClick | Object | false | undefined | 点击点的响应函数 |
| handleNodeHover | Object | false | undefined | hover 点的响应函数 |
| handleNodeUnHover | Object | false | undefined | unhover 点的响应函数 |
| handleCanvasClick | Object | false | undefined | 点击画布空白区域的响应函数 |


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
    data,
    collasable: true,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node']
  };

  const handleEdgeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true)
  }
  const handleNodeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true)
  }

  const handleCanvasClick = (graph) => {
    const selectedEdges = graph.findAllByState('edge', 'selected');
    selectedEdges.forEach(edge => {
      graph.setItemState(edge, 'selected', false)
    })
    const selectedNodes = graph.findAllByState('node', 'selected');
    selectedNodes.forEach(node => {
      graph.setItemState(node, 'selected', false)
    })
  }
  const edgeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3
    }
  }
  const nodeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3
    }
  }
  return <IndentedTree {...config} handleEdgeClick={handleEdgeClick} handleCanvasClick={handleCanvasClick} edgeStateStyles={edgeStateStyles} nodeStateStyles={nodeStateStyles} handleNodeClick={handleNodeClick}/>;
};

export default DemoIndentedTree;
```