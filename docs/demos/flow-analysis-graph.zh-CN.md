---
title: 来源去向图
---

### 基本用法

```tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '-3',
        value: {
          title: '来源页面A',
          items: [
            {
              text: '曝光PV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-2',
        value: {
          title: '来源页面B',
          items: [
            {
              text: '点击UV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-1',
        value: {
          title: '来源页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '0',
        value: {
          title: '活动页面',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '去向页面A',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '去向页面B',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '去向页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '去向页面D',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '5',
        value: {
          title: '去向页面E',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '7',
        value: {
          title: '去向页面G',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '8',
        value: {
          title: '去向页面H',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '-3',
        target: '0',
        value: '来源A',
      },
      {
        source: '-2',
        target: '0',
        value: '来源B',
      },
      {
        source: '-1',
        target: '0',
        value: '来源C',
      },
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '0',
        target: '3',
      },
      {
        source: '0',
        target: '4',
      },
      {
        source: '0',
        target: '5',
      },
      {
        source: '2',
        target: '6',
      },
      {
        source: '3',
        target: '7',
      },
      {
        source: '4',
        target: '8',
      },
    ],
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (name, edge) => {
        const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
        return {
          stroke,
          lineWidth: 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph;
```

### 调整布局

```tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '-3',
        value: {
          title: '来源页面A',
          items: [
            {
              text: '曝光PV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-2',
        value: {
          title: '来源页面B',
          items: [
            {
              text: '点击UV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-1',
        value: {
          title: '来源页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '0',
        value: {
          title: '活动页面',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '去向页面A',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '去向页面B',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '去向页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '去向页面D',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '5',
        value: {
          title: '去向页面E',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '7',
        value: {
          title: '去向页面G',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '8',
        value: {
          title: '去向页面H',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '-3',
        target: '0',
        value: '来源A',
      },
      {
        source: '-2',
        target: '0',
        value: '来源B',
      },
      {
        source: '-1',
        target: '0',
        value: '来源C',
      },
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '0',
        target: '3',
      },
      {
        source: '0',
        target: '4',
      },
      {
        source: '0',
        target: '5',
      },
      {
        source: '2',
        target: '6',
      },
      {
        source: '3',
        target: '7',
      },
      {
        source: '4',
        target: '8',
      },
    ],
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      anchorPoints: [
        [0.5, 1],
        [0.5, 0],
      ],
      items: {
        padding: [6, 0, 0],
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      style: {
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      type: 'polyline',
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      endArrow: {
        fill: '#ddd',
      },
      edgeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'bottom',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    layout: {
      rankdir: 'TB',
      ranksepFunc: () => 20,
    },
  };

  return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph;
```

### 边样式

```tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '-3',
        value: {
          title: '来源页面A',
          items: [
            {
              text: '曝光PV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-2',
        value: {
          title: '来源页面B',
          items: [
            {
              text: '点击UV',
              value: '10.30万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
      {
        id: '-1',
        value: {
          title: '来源页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '0',
        value: {
          title: '活动页面',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '去向页面A',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '去向页面B',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '去向页面C',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '去向页面D',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '5',
        value: {
          title: '去向页面E',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '去向页面F',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '7',
        value: {
          title: '去向页面G',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
      {
        id: '8',
        value: {
          title: '去向页面H',
          items: [
            {
              text: '访问页面UV',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '-3',
        target: '0',
        value: '来源A',
      },
      {
        source: '-2',
        target: '0',
        value: '来源B',
      },
      {
        source: '-1',
        target: '0',
        value: '来源C',
      },
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '0',
        target: '3',
      },
      {
        source: '0',
        target: '4',
      },
      {
        source: '0',
        target: '5',
      },
      {
        source: '2',
        target: '6',
      },
      {
        source: '3',
        target: '7',
      },
      {
        source: '4',
        target: '8',
      },
    ],
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      items: {
        containerStyle: {
          fill: '#fff',
        },
        padding: 6,
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (name, edge) => {
        const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
        return {
          stroke,
          lineWidth: Math.random() * 10 + 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: {
        hover: {
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph;
```

### 自定义节点

```tsx
import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '-4',
        value: {
          title: '甲乙对话',
          items: [
            {
              text: '出去玩吗',
            },
            {
              value: '不去',
            },
            {
              text: '有活动',
            },
            {
              value: '走',
            },
            {
              text: '带上钱',
            },
          ],
        },
      },
      {
        id: '-3',
        value: {
          title: '乙',
          items: [
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/n71KOJONFe/98a62cd8-789d-4585-b6b0-729af1ff37d2.png',
            },
          ],
        },
      },
      {
        id: '-2',
        value: {
          title: '甲',
          items: [
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/dShhKje96T/86d0cbca-f767-4c8b-98f0-df4353b3ad1d.png',
            },
          ],
        },
      },
      {
        id: '-1',
        value: {
          title: '甲',
          items: [
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/WifGuAhKdm/357884f9-1bd5-409a-91fa-1d3990cacebd.png',
            },
          ],
        },
      },
      {
        id: '0',
        value: {
          title: '乙',
          items: [
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/YjOskQ5bCJ/ec3e15d8-bde3-4c5e-a31a-4fbdecb03f50.png',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '-4',
        target: '-3',
      },
      {
        source: '-3',
        target: '-2',
      },
      {
        source: '-2',
        target: '-1',
        value: '赶紧打理',
      },
      {
        source: '-2',
        target: '0',
        value: '赶紧打理',
      },
    ],
  };

  const config = {
    data,
    nodeCfg: {
      size: [140, 40],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
      },
      customContent: (item, group, cfg) => {
        const { startX, startY, width } = cfg;
        const { text, value, icon } = item;
        let textShape, valueShape, iconShape;
        textShape =
          text &&
          group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX,
              y: startY,
              text,
              fill: '#aaa',
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
        valueShape =
          value &&
          group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX,
              y: startY,
              text: value,
              fill: '#f00',
            },
            name: `value-${Math.random()}`,
          });
        iconShape =
          icon &&
          group!.addShape('image', {
            attrs: {
              x: startX,
              y: startY,
              width: 84,
              height: 84,
              img: icon,
            },
            name: `image-${Math.random()}`,
          });
        return Math.max(
          textShape?.getBBox().height ?? 0,
          valueShape?.getBBox().height ?? 0,
          iconShape?.getBBox().height ?? 0,
        );
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 0.5,
        },
      },
      edgeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    layout: {
      ranksepFunc: () => 30,
      nodesepFunc: () => 30,
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph;
```
