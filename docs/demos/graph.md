---
title: 关系图
order: 89
---

# 关系图

## Gauge
RelationCharts 支持以下配置项：

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
| labelCfg | object | null | 文本样式 |
| layout | object | - | 布局配置 |
| enableEdit | boolean | false | 是否开启编辑功能，默认为 false，设置为 true 后，可以动态增加或删除节点 |
| showMinimap | boolean | false | 是否显示缩略图，默认为 false，设置为 true 后，显示 Minimap |
| collapseExpand | boolean | false | 是否允许点击节点收起或展示子节点，默认为 false，设置为 true 后，可以通过点击节点收起或展示子节点，当 enableEdit 设置为 true 时，建议将该值设置为 false |
| handleNodeClick | (item: INode, graph: IGraph) => void | null | 点击节点的回调函数 |
| handleEdgeClick | (item: IEdge, graph: IGraph) => void | null | 点击边的回调函数 |
| handleNodeHover | (item: INode, graph: IGraph) => void | null | 鼠标 hover 到节点上的回调函数 |
| handleNodeUnHover | (item: INode, graph: IGraph) => void | null | 鼠标从节点上移开的回调函数 |
| handleEdgeHover | (item: IEdge, graph: IGraph) => void | null | 鼠标 hover 到边上的回调函数 |
| handleEdgeUnHover | (item: IEdge, graph: IGraph) => void | null | 鼠标从边上移开的回调函数 |


### 基础关系图

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6'
import { RelationChart } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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

  G6.Util.traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <RelationChart 
    data={data}
    width={800}
    nodeType='rect' />;
};

export default DemoGauge;
```

### 个性化定制-不可编辑

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6'
import { RelationChart } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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

  G6.Util.traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <RelationChart 
    data={data}
    width={800}
    nodeType='icon-node'
    enableEdit={false} />;
};

export default DemoGauge;
```

### 个性化定制-可编辑

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6'
import { RelationChart } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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

  G6.Util.traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <RelationChart 
    data={data}
    width={800}
    nodeType='icon-node'
    enableEdit={true} />;
};

export default DemoGauge;
```

### 显示 Minimap

<a href="https://antv-g2plot.gitee.io/zh/examples/gauge/gauge/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6'
import { RelationChart } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
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

  G6.Util.traverseTree((data as any), (d: any) => {
    d.leftIcon = {
      style: {
        fill: '#e6fffb',
        stroke: '#e6fffb'
      },
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
    }
    return true
  })

  return <RelationChart 
    data={data}
    width={800}
    nodeType='icon-node'
    enableEdit={true}
    showMinimap={true} />;
};

export default DemoGauge;
```