---
title: 资金流向图
---

### 基本用法

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { FundFlowGraph } from '@ant-design/charts';

const DemoFundFlowGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '1',
        value: {
          text: 'Company1',
          // 建议使用 bae64 数据
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/28B4PgocL4/bbd3e7ef-6b5e-4034-893d-1b5073ad9aa4.png',
        },
      },
      {
        id: '2',
        value: { text: 'Company2' },
      },
      {
        id: '3',
        value: { text: 'Company3' },
      },
      {
        id: '4',
        value: { text: 'Company4' },
      },
      {
        id: '5',
        value: { text: 'Company5' },
      },
      {
        id: '6',
        value: { text: 'Company6' },
      },
      {
        id: '7',
        value: { text: 'Company7' },
      },
      {
        id: '8',
        value: { text: 'Company8' },
      },
      {
        id: '9',
        value: { text: 'Company9' },
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '3',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '2',
        target: '5',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '5',
        target: '6',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '3',
        target: '4',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '4',
        target: '7',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '8',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '9',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
    ],
  };
  const config = {
    data,
  };

  return <FundFlowGraph {...config} />;
};

export default DemoFundFlowGraph;
```

### 个性化设置

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { FundFlowGraph } from '@ant-design/charts';

const DemoFundFlowGraph: React.FC = () => {
  const data = {
    nodes: [
      {
        id: '1',
        value: {
          text: 'Company1',
          // 建议使用 bae64 数据
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/28B4PgocL4/bbd3e7ef-6b5e-4034-893d-1b5073ad9aa4.png',
        },
      },
      {
        id: '2',
        value: { text: 'Company2' },
      },
      {
        id: '3',
        value: { text: 'Company3' },
      },
      {
        id: '4',
        value: { text: 'Company4' },
      },
      {
        id: '5',
        value: { text: 'Company5' },
      },
      {
        id: '6',
        value: { text: 'Company6' },
      },
      {
        id: '7',
        value: { text: 'Company7' },
      },
      {
        id: '8',
        value: { text: 'Company8' },
      },
      {
        id: '9',
        value: { text: 'Company9' },
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        value: { text: '100,000 Yuan', subText: '2019-08-03', extraKey: 'A' },
      },
      {
        source: '1',
        target: '3',
        value: { text: '100,000 Yuan', subText: '2019-08-03', extraKey: 'B' },
      },
      {
        source: '2',
        target: '5',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '5',
        target: '6',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '3',
        target: '4',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '4',
        target: '7',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '8',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '9',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
    ],
  };
  const colorMap = {
    A: '#FFAA15',
    B: '#72CC4A',
  };
  const config = {
    data,
    edgeCfg: {
      // type: 'line',
      endArrow: (edge) => {
        const { value } = edge;
        return {
          fill: colorMap[value.extraKey] || '#40a9ff',
        };
      },
      style: (edge) => {
        const { value } = edge;
        return {
          stroke: colorMap[value.extraKey] || '#40a9ff',
        };
      },
      edgeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
          endArrow: {
            fill: '#1890ff',
          },
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
  };

  return <FundFlowGraph {...config} />;
};

export default DemoFundFlowGraph;
```
