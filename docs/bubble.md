---
title: 气泡图
---

# 气泡图

## 基本用法

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    title: {
      visible: true,
      text: '基础气泡图',
    },
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.8,
    },
    xAxis: {
      visble: true,
      max: 5,
      min: -25,
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```

## 添加 quadrant

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/86530df2-6d61-4485-b645-0f2c5d59c07e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.8,
    },
    xAxis: {
      visble: true,
      max: 5,
      min: -25,
    },
    quadrant: {
      visible: true,
      xBaseline: 0,
      yBaseline: 0,
      regionStyle: [
        { fill: '#d8d0c0', opacity: 0.2 },
        { fill: '#a3dda1', opacity: 0.1 },
        { fill: 'white', opacity: 0 },
        { fill: '#d8d0c0', opacity: 0.2 },
      ],
      label: {
        text: [
          'Female decrease,\nmale increase',
          'Female & male decrease',
          'Female &\n male increase',
          'Male decrease,\nfemale increase',
        ],
      },
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```

## 添加 trendline

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/dbb54dbc-eac1-4323-8b81-ae270b30d74e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'Revenue per club[€ m]',
    yField: 'UEFA points*',
    sizeField: 'UEFA points*',
    pointSize: [4, 25],
    colorField: 'revenueGroup',
    color: ['#72302f', '#beb298', '#d18768', '#e3cda1'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.9,
    },
    xAxis: {
      visible: true,
      min: -5,
      max: 230,
      nice: false,
    },
    trendline: {
      visible: true,
      type: 'log',
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```
