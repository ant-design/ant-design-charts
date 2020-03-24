---
title: 散点图
---

# 散点图

## 基本用法

```tsx
import React from 'react';
import { Scatter } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { x: 1, y: 4.181 },
    { x: 2, y: 4.665 },
    { x: 3, y: 5.296 },
    { x: 4, y: 5.365 },
    { x: 5, y: 5.448 },
    { x: 6, y: 5.744 },
    { x: 7, y: 5.653 },
    { x: 8, y: 5.844 },
    { x: 9, y: 6.362 },
    { x: 10, y: 6.38 },
    { x: 11, y: 6.311 },
    { x: 12, y: 6.457 },
    { x: 13, y: 6.479 },
    { x: 14, y: 6.59 },
    { x: 15, y: 6.74 },
    { x: 16, y: 6.58 },
    { x: 17, y: 6.852 },
    { x: 18, y: 6.531 },
    { x: 19, y: 6.682 },
    { x: 20, y: 7.013 },
    { x: 21, y: 6.82 },
    { x: 22, y: 6.647 },
    { x: 23, y: 6.951 },
    { x: 24, y: 7.121 },
    { x: 25, y: 7.143 },
    { x: 26, y: 6.914 },
    { x: 27, y: 6.941 },
    { x: 28, y: 7.226 },
    { x: 29, y: 6.898 },
    { x: 30, y: 7.392 },
    { x: 31, y: 6.938 },
  ];

  const config = {
    padding: 'auto',
    data: data,
    xField: 'x',
    yField: 'y',
    pointSize: 5,
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
    },
    trendline: {
      visible: true,
      type: 'quad', // linear, exp, loess, log, poly, pow, quad
      showConfidence: true,
    },
  };
  return <Scatter {...config} />;
};
export default App;
```

## 多色

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/7a78a36d-c97c-459d-9090-9e664cd17167.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    colorField: 'Genre',
    color: [
      '#d62728',
      '#2ca02c',
      '#000000',
      '#9467bd',
      '#ffd500',
      '#1f77b4',
      '#00518a',
      '#ffbc69',
      '#9bd646',
    ],
    pointStyle: {
      fillOpacity: 1,
    },
    xAxis: {
      visible: true,
      min: -5,
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
