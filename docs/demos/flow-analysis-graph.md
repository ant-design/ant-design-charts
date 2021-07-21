---
title: FlowAnalysisGraph
---

### Base

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
      style: (edge) => {
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

### Layout

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

### Edge Style

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
      style: (edge) => {
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

### Status

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
      badge: {
        style: (cfg) => {
          const ids = ['-3', '-2', '-1'];
          const fill = ids.includes(cfg.id) ? '#c86bdd' : '#5ae859';
          return {
            fill,
            radius: [2, 0, 0, 2],
          };
        },
      },
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
      style: (edge) => {
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

### Custom Items

```tsx
import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '0',
        value: {
          title: 'spmd1',
          items: [
            {
              text: '曝光UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
            {
              text: '点击UV',
              value: '10万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '1.9%',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '开通营销页1',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '开通营销页2',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '去向页面1',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '去向页面2',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
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
        target: '3',
      },
      {
        source: '2',
        target: '4',
      },
    ],
  };

  const config = {
    data,
    nodeCfg: {
      size: [180, 30],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
      },
      customContent: (item, group, cfg) => {
        const { startX, startY, width } = cfg;
        const { text, value, icon, trend } = item;
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
        value &&
          group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 60,
              y: startY,
              text: value,
              fill: '#000',
            },
            name: `value-${Math.random()}`,
          });
        icon &&
          group!.addShape('image', {
            attrs: {
              x: startX + 100,
              y: startY,
              width: 8,
              height: 10,
              img: icon,
            },
            name: `image-${Math.random()}`,
          });
        trend &&
          group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 110,
              y: startY,
              text: trend,
              fill: '#f00',
            },
            name: `value-${Math.random()}`,
          });

        // 行高
        return 14;
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
