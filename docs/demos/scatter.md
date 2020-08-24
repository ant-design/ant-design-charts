---
title: 散点图
order: 33
---

# 散点图

## Scatter

### 基础散点图

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
  const config = {
    appendPadding: 10,
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    yAxis: { grid: {} },
    xAxis: {
      min: -100,
      nice: true,
      grid: { line: { style: { stroke: '#eee' } } },
    },
    pointStyle: { stroke: '#fff' },
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
  const config = {
    appendPadding: 10,
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    sizeField: 'Rating',
    size: [2, 5],
    yAxis: { nice: true },
    xAxis: {
      min: -100,
      grid: { line: { style: { stroke: '#eee' } } },
    },
    pointStyle: { stroke: '#fff' },
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
  const config = {
    appendPadding: 30,
    data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    colorField: 'Result',
    color: ['#c71e1d', '#ffca76', '#09bb9f'],
    size: 5,
    shape: 'circle',
    pointStyle: { fillOpacity: 1 },
    xAxis: { grid: { line: { style: { stroke: '#eee' } } } },
    label: {},
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点形状色映射

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
  const config = {
    appendPadding: 10,
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shapeField: 'Genre',
    shape: [
      'circle',
      'square',
      'bowtie',
      'diamond',
      'hexagon',
      'triangle',
      'hyphen',
      'line',
      'cross',
    ],
    colorField: 'Genre',
    size: 6,
    yAxis: { nice: true },
    xAxis: {
      min: -100,
      nice: true,
      grid: { line: { style: { stroke: '#eee' } } },
    },
    pointStyle: { stroke: '#fff' },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图-气泡

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
  const config = {
    appendPadding: 30,
    data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    size: [4, 30],
    shape: 'circle',
    pointStyle: { fillOpacity: 0.8 },
    xAxis: {
      min: -25,
      max: 5,
      grid: { line: { style: { stroke: '#eee' } } },
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
