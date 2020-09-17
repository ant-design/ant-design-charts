---
title: 雷达图
order: 29
---

# 雷达图

## Radar

### 基础雷达图

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/a104a693-2dd0-4a71-a190-39ec88f7307c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    meta: { score: { alias: '分数' } },
    xAxis: {
      line: null,
      tickLine: null,
      grid: { line: { style: { lineDash: null } } },
    },
    point: {},
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```

### 雷达图-自定义 axis grid

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/a104a693-2dd0-4a71-a190-39ec88f7307c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    meta: { score: { alias: '分数' } },
    xAxis: {
      line: null,
      tickLine: null,
      grid: { line: { style: { lineDash: null } } },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: { lineDash: null },
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    point: {},
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```

### 多组雷达图

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/5c41aa9b-9c8a-425f-9f4d-934b889bb75d.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    xAxis: {
      label: { offset: 15 },
      grid: { line: { type: 'line' } },
    },
    yAxis: { grid: { line: { type: 'circle' } } },
    point: { shape: 'circle' },
    area: {},
    legend: { position: 'bottom' },
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```
