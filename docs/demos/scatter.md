---
title: 散点图
order: 24
---

# 散点图

## Scatter

### 散点图-右侧坐标轴

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/f950b2f1-038b-47c2-afcc-63001bc8d07c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var processData = data.map(function (item) {
    item['Average annual wage'] = item['Average annual wage'] * 1;
    item['probability'] = item['probability'] * 1;
    item['numbEmployed'] = item['numbEmployed'] * 1;
    return item;
  });
  var labels = ['Airline Pilots, Copilots and Flight Engineers', 'Benefits Managers'];
  var config = {
    appendPadding: 30,
    data: processData,
    xField: 'probability',
    yField: 'Average annual wage',
    colorField: 'education',
    size: [2, 16],
    sizeField: 'numbEmployed',
    shape: 'circle',
    yAxis: {
      nice: false,
      min: -20000,
      tickCount: 5,
      position: 'right',
      label: {
        formatter: function formatter(value) {
          return Math.floor(value / 1000) + 'K';
        },
      },
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    tooltip: {
      fields: ['probability', 'Average annual wage', 'numbEmployed'],
    },
    legend: { position: 'top' },
    xAxis: {
      min: -0.04,
      max: 1.04,
      nice: false,
      grid: { line: { style: { stroke: '#eee' } } },
      line: false,
      label: false,
    },
    label: {
      formatter: function formatter(item) {
        return labels.includes(item['short occupation']) ? item['short occupation'] : '';
      },
      offsetY: -10,
    },
    annotations: [
      {
        type: 'line',
        start: [-0.04, 100000],
        end: [1.04, 30000],
        style: { stroke: '#aaa' },
      },
      {
        type: 'text',
        position: ['1.03', 'max'],
        content: 'Average annual wage',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
      {
        type: 'text',
        position: ['1.03', 'min'],
        content: 'Most likely to \nbe automated ',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
      {
        type: 'text',
        position: ['-0.03', 'min'],
        content: 'Least likely to \nbe automated ',
        style: {
          textAlign: 'left',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
    ],
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图颜色映射

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 10,
    data: data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      min: -100,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图图形标签

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    colorField: 'Result',
    color: ['#c71e1d', '#ffca76', '#09bb9f'],
    size: 5,
    shape: 'circle',
    pointStyle: { fillOpacity: 1 },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    label: {},
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图-回归线

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  var data = [
    {
      x: 1,
      y: 4.181,
    },
    {
      x: 2,
      y: 4.665,
    },
    {
      x: 3,
      y: 5.296,
    },
    {
      x: 4,
      y: 5.365,
    },
    {
      x: 5,
      y: 5.448,
    },
    {
      x: 6,
      y: 5.744,
    },
    {
      x: 7,
      y: 5.653,
    },
    {
      x: 8,
      y: 5.844,
    },
    {
      x: 9,
      y: 6.362,
    },
    {
      x: 10,
      y: 6.38,
    },
    {
      x: 11,
      y: 6.311,
    },
    {
      x: 12,
      y: 6.457,
    },
    {
      x: 13,
      y: 6.479,
    },
    {
      x: 14,
      y: 6.59,
    },
    {
      x: 15,
      y: 6.74,
    },
    {
      x: 16,
      y: 6.58,
    },
    {
      x: 17,
      y: 6.852,
    },
    {
      x: 18,
      y: 6.531,
    },
    {
      x: 19,
      y: 6.682,
    },
    {
      x: 20,
      y: 7.013,
    },
    {
      x: 21,
      y: 6.82,
    },
    {
      x: 22,
      y: 6.647,
    },
    {
      x: 23,
      y: 6.951,
    },
    {
      x: 24,
      y: 7.121,
    },
    {
      x: 25,
      y: 7.143,
    },
    {
      x: 26,
      y: 6.914,
    },
    {
      x: 27,
      y: 6.941,
    },
    {
      x: 28,
      y: 7.226,
    },
    {
      x: 29,
      y: 6.898,
    },
    {
      x: 30,
      y: 7.392,
    },
    {
      x: 31,
      y: 6.938,
    },
  ];
  var config = {
    data: data,
    xField: 'x',
    yField: 'y',
    size: 5,
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9',
    },
    regressionLine: { type: 'quad' },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图-气泡四象限

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    size: [4, 30],
    shape: 'circle',
    pointStyle: {
      fillOpacity: 0.8,
      stroke: '#bbb',
    },
    xAxis: {
      min: -25,
      max: 5,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    yAxis: { line: { style: { stroke: '#aaa' } } },
    quadrant: {
      xBaseline: 0,
      yBaseline: 0,
      labels: [
        { content: 'Male decrease,\nfemale increase' },
        { content: 'Female decrease,\nmale increase' },
        { content: 'Female & male decrease' },
        { content: 'Female &\n male increase' },
      ],
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
