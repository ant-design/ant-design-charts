---
title: 资金流向图
order: 91
---

## 配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 示例 | 说明 |
| - | --- | ----- | ----- | ----- | ----- |
| className | String | false | undefined | 容器组件的 className |
| style | Object | false | undefined | 容器组件的 CSS 样式 |
| data | Object | true | 无 | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| width | Number | false | 500 | 图的宽度 |
| height | Number | false | 500 | 图的高度 |
| nodeType | String | false |'round-rect' | 节点类型，可以是 [G6 内置节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode)，也可以是[antd-charts 内置的节点]() |
| edgeType | String | false | 'fund-polyline' | 边类型，可以是 [G6 内置边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，也可以是[antd-charts 内置的边]() |
| nodeSize | Number[] | false | [150, 30] | 节点的（最小）大小，部分图表可能会根据节点内容自适应大小 |
| nodeStyle | ShapeStyle | false | { stroke: '#40a9ff' } | [节点的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| edgeStyle | ShapeStyle | false | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#91d5ff' }} | [边的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| nodeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 节点在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| edgeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 边在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| nodeLabelCfg | Object | false | {style: { fill: '#000000A6', fontSize: 10 }} |  [节点文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| edgeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} |  [边文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| nodeAnchorPoints | Number[][] | false | [[0.5, 0], [0.5, 1]] | [节点相关边的连入位置](https://g6.antv.vision/zh/docs/manual/middle/elements/anchorpoint) |
| behaviors | string[] | false | ['zoom-canvas', 'drag-canvas'] | 默认的[内置交互](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior) |
| layout | Object | false | {type: 'dagre', rankdir: 'LR', nodesep: 30, ranksep: 50 } | 布局配置项 |
| minimapCfg | Object | {show: false, size: [150, 100], type: 'keyShape'} | 控制是否显示缩略图以及缩略图配置，若 minimapCfg.show 设置为 true，则显示 Minimap，其他配置参见 [G6 Minimap](https://g6.antv.vision/zh/docs/api/Plugins/#minimap |
| handleEdgeClick | Object | false | undefined | 点击边的响应函数 |
| handleEdgeHover | Object | false | undefined | hover 边的响应函数 |
| handleEdgeUnHover | Object | false | undefined | unhover 边的响应函数 |


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
import React, { useState, useEffect, useRef } from 'react';
import { DagreFundFlowGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoDagreFundFlowGraph: React.FC = () => {
  
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

  const data2 = {
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
        id: '5',
        label: 'Company5',
      },
      {
        id: '6',
        label: 'Company6',
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
        source: '1',
        target: '9',
        dataType: 'C',
        label: '100,000 Yuan',
        subLabel: '2019-08-03',
      },
    ],
  };
  const [config, setConfig] = useState({
    data,
    colorMap: {
      A: '#72CC4A',
      B: '#1A91FF',
      C: '#FFAA15',
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node']
  });

  const [nodeStyle, setNodeStyle] = useState();

  const ref = useRef();

  // 导出图片
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  const changeData = () => {
    setConfig({
      data: data2,
      colorMap: {
        A: '#72CC4A',
        B: '#1A91FF',
        C: '#FFAA15',
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node']
    });
  }

  return (<div><button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>导出图片</button><button type="button" onClick={changeData} style={{ marginRight: 24 }}>切换数据</button><DagreFundFlowGraph nodeStyle {...config} graphRef={ref} /></div>);
};

export default DemoDagreFundFlowGraph;
```


