---
title: 双轴图（beta版）
---

# 双轴图（beta 版）

## 基本用法

```tsx
import React from 'react';
import { OverlappedComboPlot } from '@alipay/techui-charts';

const App: React.FC = () => {
  const uvBillData = [
    { time: '2019-03', value: 350, type: 'uv' },
    { time: '2019-04', value: 900, type: 'uv' },
    { time: '2019-05', value: 300, type: 'uv' },
    { time: '2019-06', value: 450, type: 'uv' },
    { time: '2019-07', value: 470, type: 'uv' },
    { time: '2019-03', value: 220, type: 'bill' },
    { time: '2019-04', value: 300, type: 'bill' },
    { time: '2019-05', value: 250, type: 'bill' },
    { time: '2019-06', value: 220, type: 'bill' },
    { time: '2019-07', value: 362, type: 'bill' },
  ];

  const transformData = [
    { time: '2019-03', value: 800 },
    { time: '2019-04', value: 600 },
    { time: '2019-05', value: 400 },
    { time: '2019-06', value: 380 },
    { time: '2019-07', value: 220 },
  ];
  const config = {
    layers: [
      {
        type: 'groupColumn',
        name: '订单量',
        data: uvBillData,
        xField: 'time',
        yField: 'value',
        groupField: 'type',
      },
      {
        type: 'line',
        name: '转化',
        data: transformData,
        xField: 'time',
        yField: 'value',
        color: '#f8ca45',
        lineSize: 2,
      },
    ],
  };
  return <OverlappedComboPlot {...config} />;
};

export default App;
```

<!-- ## 基本用法

```tsx
import React, { useState, useEffect } from 'react';
import { OverlappedComboPlot } from '@alipay/techui-charts';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/9dbb58b2-d857-4555-a0e1-dcb4db9d04ca.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    theme: 'dark',
    legend: {
      visible: true,
      position: 'top-center',
    },
    xAxis: {
      visible: true,
      tickCount: 5,
    },
    yAxis: {
      visible: true,
      colorMapping: false,
    },
    layers: [
      {
        type: 'line',
        name: 'wind',
        data,
        xField: 'date',
        yField: 'wind',
        xAxis: {
          type: 'cat',
          tickCount: 5,
        },
        color: '#7fb170',
        smooth: true,
      },
      {
        type: 'line',
        name: 'temprature',
        data,
        xField: 'date',
        yField: 'temp_min',
        color: '#e04e47',
        smooth: true,
      },
    ],
  };
  return <OverlappedComboPlot {...config} />;
};

export default App;
``` -->

## 多图结合

```tsx
import React from 'react';
import { OverlappedComboPlot } from '@alipay/techui-charts';

const App: React.FC = () => {
  const uvData = [
    { time: '2019-03', value: 350 },
    { time: '2019-04', value: 900 },
    { time: '2019-05', value: 300 },
    { time: '2019-06', value: 450 },
    { time: '2019-07', value: 470 },
  ];

  const billData = [
    { time: '2019-03', value: 220 },
    { time: '2019-04', value: 300 },
    { time: '2019-05', value: 250 },
    { time: '2019-06', value: 220 },
    { time: '2019-07', value: 362 },
  ];

  const transformData = [
    { time: '2019-03', value: 800 },
    { time: '2019-04', value: 600 },
    { time: '2019-05', value: 400 },
    { time: '2019-06', value: 380 },
    { time: '2019-07', value: 220 },
  ];

  const config = {
    layers: [
      {
        type: 'column',
        name: '浏览',
        data: uvData,
        xField: 'time',
        yField: 'value',
      },
      {
        type: 'scatter',
        name: '下单',
        data: billData,
        xField: 'time',
        yField: 'value',
        pointSize: 20,
        yAxis: {
          min: 0,
        },
      },
      {
        type: 'line',
        name: '转化',
        data: transformData,
        xField: 'time',
        yField: 'value',
        color: '#f8ca45',
      },
    ],
  };
  return <OverlappedComboPlot {...config} />;
};

export default App;
```
