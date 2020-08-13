---
title: 组织架构树图
order: 89
---

### 配置项
OrganizationTreeGraph 支持以下配置项：

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| data | TreeGraphData | null | 关系图的数据，必填字段 |
| className | string | null | 容器的 class 名称 |
| style | React.CSSProperties | null | 容器样式 |
| width | number | 500 | 容器宽度 |
| height | number | 500 | 容器高度 |
| nodeType | string | 'rect' | 节点类型，默认支持 rect、circle、modelRect、icon-node等 |
| edgeType | string | 'flow-line' | 边类型，默认为 flow-line，可自定义 |
| nodeStyle | ShapeStyle | {} | 节点的样式 |
| edgeStyle | ShapeStyle | {} | 边的样式 |
| nodeStateStyles | StateStyles | {} | 节点状态样式 |
| edgeStateStyles | StateStyles | {} | 边状态样式 |
| nodeSize | number / number[] | [120, 40] | 节点大小 |
| nodeLabelCfg | object | null | 节点文本样式 |
| edgeLabelCfg | object | null | 边文本样式 |
| layout | object | - | 布局配置 |
| enableEdit | boolean | false | 是否开启编辑功能，默认为 false，设置为 true 后，可以动态增加或删除节点 |
| minimapCfg | Object | {show: false, size: [150, 100], type: 'keyShape'} | 控制是否显示缩略图以及缩略图配置，若 minimapCfg.show 设置为 true，则显示 Minimap，其他配置参见 [G6 Minimap](https://g6.antv.vision/zh/docs/api/Plugins/#minimap) |
| collapseExpand | boolean | false | 是否允许点击节点收起或展示子节点，默认为 false，设置为 true 后，可以通过点击节点收起或展示子节点，当 enableEdit 设置为 true 时，建议将该值设置为 false |
| handleNodeClick | (item: INode, graph: IGraph) => void | null | 点击节点的回调函数 |
| handleEdgeClick | (item: IEdge, graph: IGraph) => void | null | 点击边的回调函数 |
| handleNodeHover | (item: INode, graph: IGraph) => void | null | 鼠标 hover 到节点上的回调函数 |
| handleNodeUnHover | (item: INode, graph: IGraph) => void | null | 鼠标从节点上移开的回调函数 |
| handleEdgeHover | (item: IEdge, graph: IGraph) => void | null | 鼠标 hover 到边上的回调函数 |
| handleEdgeUnHover | (item: IEdge, graph: IGraph) => void | null | 鼠标从边上移开的回调函数 |
| handleNodeClick | Object | false | undefined | 点击点的响应函数 |
| handleNodeHover | Object | false | undefined | hover 点的响应函数 |
| handleNodeUnHover | Object | false | undefined | unhover 点的响应函数 |
| handleCanvasClick | Object | false | undefined | 点击画布空白区域的响应函数 |


### 基础组织架构树图

<a href="#配置项">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationTreeGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1'
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2'
              },
            ]
          },
        ]
      },
      {
        id: 'c2',
        label: 'c2'
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1'
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1'
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2'
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3'
              },
            ]
          },
          {
            id: 'c3-3',
            label: 'c3-3'
          },
        ]
      }
    ]
  }

  /**
   * 遍历树的方法，仅作为演示 demo 中使用，实际使用中根据具体需求而定
  */
  const traverseTree = <T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) => {
    if (typeof fn !== 'function') {
      return;
    }

    if (fn(data) === false) {
      return false;
    }

    if (data && data.children) {
      for (let i = data.children.length - 1; i >= 0; i--) {
        if (!traverseTree(data.children[i], fn)) return false;
      }
    }
    return true;
  };

  traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })
  
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

  return <OrganizationTreeGraph 
    data={data}
    nodeType='rect' nodeStateStyles={nodeStateStyles} handleNodeClick={handleNodeClick} handleCanvasClick={handleCanvasClick} />;
};

export default DemoOrganizationGraph;
```

### 个性化定制-不可编辑

<a href="#配置项">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationTreeGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1'
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2'
              },
            ]
          },
        ]
      },
      {
        id: 'c2',
        label: 'c2'
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1'
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1'
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2'
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3'
              },
            ]
          },
          {
            id: 'c3-3',
            label: 'c3-3'
          },
        ]
      }
    ]
  }

  /**
   * 遍历树的方法，仅作为演示 demo 中使用，实际使用中根据具体需求而定
  */
  const traverseTree = <T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) => {
    if (typeof fn !== 'function') {
      return;
    }

    if (fn(data) === false) {
      return false;
    }

    if (data && data.children) {
      for (let i = data.children.length - 1; i >= 0; i--) {
        if (!traverseTree(data.children[i], fn)) return false;
      }
    }
    return true;
  };

  traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <OrganizationTreeGraph 
    data={data}
    nodeType='icon-node'
    enableEdit={false} />;
};

export default DemoOrganizationGraph;
```

### 个性化定制-可编辑

<a href="#配置项">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6/es'
import { OrganizationTreeGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1'
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2'
              },
            ]
          },
        ]
      },
      {
        id: 'c2',
        label: 'c2'
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1'
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1'
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2'
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3'
              },
            ]
          },
          {
            id: 'c3-3',
            label: 'c3-3'
          },
        ]
      }
    ]
  }

  /**
   * 遍历树的方法，仅作为演示 demo 中使用，实际使用中根据具体需求而定
  */
  const traverseTree = <T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) => {
    if (typeof fn !== 'function') {
      return;
    }

    if (fn(data) === false) {
      return false;
    }

    if (data && data.children) {
      for (let i = data.children.length - 1; i >= 0; i--) {
        if (!traverseTree(data.children[i], fn)) return false;
      }
    }
    return true;
  };
  
  traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <OrganizationTreeGraph 
    data={data}
    nodeType='icon-node'
    enableEdit={true} />;
};

export default DemoOrganizationGraph;
```

### 显示 Minimap

<a href="#配置项">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { OrganizationTreeGraph } from '@ant-design/charts';

const DemoOrganizationGraph: React.FC = () => {
  const data = {
    id: 'root',
    label: 'root',
    children: [
      {
        id: 'c1',
        label: 'c1',
        children: [
          {
            id: 'c1-1',
            label: 'c1-1',
          },
          {
            id: 'c1-2',
            label: 'c1-2',
            children: [
              {
                id: 'c1-2-1',
                label: 'c1-2-1'
              },
              {
                id: 'c1-2-2',
                label: 'c1-2-2'
              },
            ]
          },
        ]
      },
      {
        id: 'c2',
        label: 'c2'
      },
      {
        id: 'c3',
        label: 'c3',
        children: [
          {
            id: 'c3-1',
            label: 'c3-1'
          },
          {
            id: 'c3-2',
            label: 'c3-2',
            children: [
              {
                id: 'c3-2-1',
                label: 'c3-2-1'
              },
              {
                id: 'c3-2-2',
                label: 'c3-2-2'
              },
              {
                id: 'c3-2-3',
                label: 'c3-2-3'
              },
            ]
          },
          {
            id: 'c3-3',
            label: 'c3-3'
          },
        ]
      }
    ]
  }

  /**
   * 遍历树的方法，仅作为演示 demo 中使用，实际使用中根据具体需求而定
  */
  const traverseTree = <T extends { children?: T[] }>(data: T, fn: (param: T) => boolean) => {
    if (typeof fn !== 'function') {
      return;
    }

    if (fn(data) === false) {
      return false;
    }

    if (data && data.children) {
      for (let i = data.children.length - 1; i >= 0; i--) {
        if (!traverseTree(data.children[i], fn)) return false;
      }
    }
    return true;
  };

  traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <OrganizationTreeGraph 
    data={data}
    nodeType='icon-node'
    enableEdit={true}
    minimapCfg = {{ show: true}}
    />;
};

export default DemoOrganizationGraph;
```