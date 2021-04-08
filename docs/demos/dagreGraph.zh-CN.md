---
title: 流程图
order: 3
---

### 数据说明

本图表中，data 的基本格式遵循[通用配置项](#通用配置项)。

### 演示结果

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { DagreGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoDagreGraph: React.FC = () => {
  const sourceData = {
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

  const [data, setData] = useState(sourceData);

  const [nodeStyle, setNodeStyle] = useState();
  const [edgeStyle, setEdgeStyle] = useState();
  const [layoutCfg, setLayoutCfg] = useState();
  const [anchorPoints, setAnchorPoints] = useState();
  const [nodeType, setNodeType] = useState();
  const [minimapCfg, setMinimapCfg] = useState({
    show: true,
  });
  const [behaviors, setBehaviors] = useState(['drag-canvas', 'zoom-canvas']);
  const [nodeLabelCfg, setNodeLabelCfg] = useState();

  const ref = useRef();

  const destroyGraph = () => {
    ref.current.destroy();
  };

  const updateBehaviors = () => {
    if (behaviors.indexOf('drag-node') !== -1) {
      setBehaviors(['drag-canvas', 'zoom-canvas']);
    } else {
      setBehaviors(['drag-canvas', 'zoom-canvas', 'drag-node']);
    }
  };

  const handleEdgeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true);
  };
  const handleNodeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true);
  };

  const handleCanvasClick = (graph) => {
    const selectedEdges = graph.findAllByState('edge', 'selected');
    selectedEdges.forEach((edge) => {
      graph.setItemState(edge, 'selected', false);
    });
    const selectedNodes = graph.findAllByState('node', 'selected');
    selectedNodes.forEach((node) => {
      graph.setItemState(node, 'selected', false);
    });
  };
  const edgeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };
  const nodeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };

  return (
    <DagreGraph
      nodeStyle={nodeStyle}
      layout={layoutCfg}
      nodeAnchorPoints={anchorPoints}
      nodeType={nodeType}
      nodeLabelCfg={nodeLabelCfg}
      minimapCfg={minimapCfg}
      behaviors={behaviors}
      data={data}
      graphRef={ref}
      handleEdgeClick={handleEdgeClick}
      handleCanvasClick={handleCanvasClick}
      edgeStateStyles={edgeStateStyles}
      nodeStateStyles={nodeStateStyles}
      handleNodeClick={handleNodeClick}
    />
  );
};

export default DemoDagreGraph;
```

### 演示结果-可操作

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { DagreGraph } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoDagreGraph: React.FC = () => {
  const sourceData = {
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

  const sourceData2 = {
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
    ],
  };

  const [data, setData] = useState(sourceData);

  const [nodeStyle, setNodeStyle] = useState();
  const [edgeStyle, setEdgeStyle] = useState();
  const [size, setSize] = useState();
  const [layoutCfg, setLayoutCfg] = useState();
  const [anchorPoints, setAnchorPoints] = useState();
  const [nodeType, setNodeType] = useState();
  const [minimapCfg, setMinimapCfg] = useState({
    show: true,
  });
  const [behaviors, setBehaviors] = useState(['drag-canvas', 'zoom-canvas']);
  const [nodeLabelCfg, setNodeLabelCfg] = useState();

  const ref = useRef();

  // 导出图片
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  const changeData = () => {
    if (!data || data.nodes.length !== sourceData2.nodes.length) {
      setData(sourceData2);
    } else {
      setData(sourceData);
    }
  };

  const updateNodeStyle = () => {
    if (!nodeType || nodeType !== 'rect') {
      setNodeStyle({
        stroke: '#666',
        fill: '#fff',
      });
      setNodeLabelCfg({
        style: {
          fill: '#ccc',
          fontWeight: 500,
          fontSize: 20,
        },
      });
      setEdgeStyle({
        stroke: '#666',
        lineWidth: 3,
      });
      setNodeType('rect');
    } else {
      setNodeStyle();
      setNodeType();
      setNodeLabelCfg();
    }
  };

  const changeSize = () => {
    if (size && size[0] <= 300) {
      setSize(undefined);
    } else {
      setSize([300, 500]);
    }
    setTimeout(() => {
      ref.current.fitView();
    }, 16);
  };

  const updateLayout = () => {
    if (!layoutCfg || layoutCfg.rankdir !== 'lr') {
      setLayoutCfg({
        rankdir: 'lr',
      });
      setAnchorPoints([
        [0, 0.5],
        [1, 0.5],
      ]);
    } else {
      setLayoutCfg({
        rankdir: 'TB',
      });
      setAnchorPoints();
    }
    setTimeout(() => {
      ref.current?.fitView();
    }, 16);
  };

  const updateMinimap = () => {
    setMinimapCfg({
      show: !minimapCfg.show,
    });
  };

  const destroyGraph = () => {
    ref.current.destroy();
  };

  const updateBehaviors = () => {
    if (behaviors.indexOf('drag-node') !== -1) {
      setBehaviors(['drag-canvas', 'zoom-canvas']);
    } else {
      setBehaviors(['drag-canvas', 'zoom-canvas', 'drag-node']);
    }
  };

  const handleEdgeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true);
  };
  const handleNodeClick = (item, graph) => {
    graph.setItemState(item, 'selected', true);
  };

  const handleCanvasClick = (graph) => {
    const selectedEdges = graph.findAllByState('edge', 'selected');
    selectedEdges.forEach((edge) => {
      graph.setItemState(edge, 'selected', false);
    });
    const selectedNodes = graph.findAllByState('node', 'selected');
    selectedNodes.forEach((node) => {
      graph.setItemState(node, 'selected', false);
    });
  };
  const edgeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };
  const nodeStateStyles = {
    hover: {
      stroke: '#1890ff',
      lineWidth: 2,
    },
    selected: {
      stroke: '#f00',
      lineWidth: 3,
    },
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 8 }}>
        导出图片
      </button>
      <button type="button" onClick={changeData} style={{ marginRight: 8 }}>
        切换数据
      </button>
      <button type="button" onClick={updateNodeStyle} style={{ marginRight: 8 }}>
        切换节点样式
      </button>
      <button type="button" onClick={changeSize} style={{ marginRight: 8 }}>
        {size && size[0] === 300 ? '扩大画布' : '缩小画布'}
      </button>
      <button type="button" onClick={updateLayout} style={{ marginRight: 8 }}>
        切换布局方向
      </button>
      <button type="button" onClick={updateMinimap} style={{ marginRight: 8 }}>
        {minimapCfg.show ? '关闭 minimap' : '打开 minimap'}
      </button>
      <button type="button" onClick={updateBehaviors} style={{ marginRight: 8 }}>
        {behaviors.indexOf('drag-node') !== -1 ? '关闭拖拽节点' : '打开拖拽节点'}
      </button>
      <button type="button" onClick={destroyGraph} style={{ marginRight: 8 }}>
        销毁图
      </button>
      <DagreGraph
        nodeStyle={nodeStyle}
        width={size ? size[0] : undefined}
        height={size ? size[1] : undefined}
        layout={layoutCfg}
        nodeAnchorPoints={anchorPoints}
        nodeType={nodeType}
        nodeLabelCfg={nodeLabelCfg}
        minimapCfg={minimapCfg}
        behaviors={behaviors}
        data={data}
        graphRef={ref}
        handleEdgeClick={handleEdgeClick}
        handleCanvasClick={handleCanvasClick}
        edgeStateStyles={edgeStateStyles}
        nodeStateStyles={nodeStateStyles}
        handleNodeClick={handleNodeClick}
      />
    </div>
  );
};

export default DemoDagreGraph;
```

### 配置项

| 配置项 | 类型 | 是否必须 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| className | String | false | undefined | 容器组件的 className |
| style | Object | false | undefined | 容器组件的 CSS 样式 |
| data | Object | true | 无 | 图数据，基本格式遵循 [G6 数据格式](https://g6.antv.vision/zh/docs/manual/getting-started#step-2-%E6%95%B0%E6%8D%AE%E5%87%86%E5%A4%87)，各个类型图表可能有额外字段 |
| width | Number | false | 500 | 图的宽度 |
| height | Number | false | 500 | 图的高度 |
| nodeType | String | false | 'modelRect' | 节点类型，可以是 [G6 内置节点](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode)，也可以是[antd-charts 内置的节点]() |
| edgeType | String | false | 'polyline' | 边类型，可以是 [G6 内置边](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge)，也可以是[antd-charts 内置的边]() |
| nodeSize | Number[] | false | [120, 40] | 节点的（最小）大小，部分图表可能会根据节点内容自适应大小 |
| nodeStyle | ShapeStyle | false | { stroke: '#40a9ff' } | [节点的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| edgeStyle | ShapeStyle | false | { stroke: '#91d5ff', endArrow: { path: G6.Arrow.vee(10, 10), fill: '#91d5ff' }} | [边的默认样式配置项](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style) |
| nodeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 节点在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| edgeStateStyles | ShapeStyles | false | { hover: { stroke: '#1890ff', lineWidth: 2 }} | 边在[不同状态下的样式配置项](https://g6.antv.vision/zh/docs/manual/middle/states/state#%E9%85%8D%E7%BD%AE-state-%E6%A0%B7%E5%BC%8F) |
| nodeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} | [节点文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/nodes/defaultNode#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| edgeLabelCfg | Object | false | {style: { fill: '#000', fontSize: 12 }} | [边文本配置](https://g6.antv.vision/zh/docs/manual/middle/elements/edges/defaultEdge#%E6%A0%87%E7%AD%BE%E6%96%87%E6%9C%AC-label-%E5%8F%8A%E5%85%B6%E9%85%8D%E7%BD%AE-labelcfg) |
| nodeAnchorPoints | Number[][] | false | [[0, 0.5], [1, 0.5]] | [节点相关边的连入位置](https://g6.antv.vision/zh/docs/manual/middle/elements/anchorpoint) |
| behaviors | string[] | false | 默认 udnefined，示例：`['drag-canvas', 'zoom-canvas']` \| `['drag-canvas', 'zoom-canvas']` | 默认的[内置交互](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior) |
| layout | Object | false | {type: 'dagre', rankdir: 'TB', nodesepFunc: (d: any) => 0, ranksepFunc: (d: any) => 0, controlPoints: true } | 布局配置项 |
| minimapCfg | Object | {show: false, size: [150, 100], type: 'keyShape'} | 控制是否显示缩略图以及缩略图配置，若 minimapCfg.show 设置为 true，则显示 Minimap，其他配置参见 [G6 Minimap](https://g6.antv.vision/zh/docs/api/Plugins/#minimap) |
| handleEdgeClick | Object | false | undefined | 点击边的响应函数 |
| handleEdgeHover | Object | false | undefined | hover 边的响应函数 |
| handleEdgeUnHover | Object | false | undefined | unhover 边的响应函数 |
| handleNodeClick | Object | false | undefined | 点击点的响应函数 |
| handleNodeHover | Object | false | undefined | hover 点的响应函数 |
| handleNodeUnHover | Object | false | undefined | unhover 点的响应函数 |
| handleCanvasClick | Object | false | undefined | 点击画布空白区域的响应函数 |
