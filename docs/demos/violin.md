---
title: 小提琴图
order: 36
---

### 基础小提琴图

```tsx
import React, { useState, useEffect } from 'react';
import { Violin } from '@ant-design/charts';

const DemoViolin: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/6b0a5f1d-5931-42ae-b3ba-3c3cb77d0861.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    height: 500,
    data: data,
    xField: 'x',
    yField: 'y',
  };
  return <Violin {...config} />;
};

export default DemoViolin;
```

### 分组小提琴图

```tsx
import React, { useState, useEffect } from 'react';
import { Violin } from '@ant-design/charts';

const DemoViolin: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/6b0a5f1d-5931-42ae-b3ba-3c3cb77d0861.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    height: 500,
    data: data,
    xField: 'x',
    yField: 'y',
    seriesField: 'species',
  };
  return <Violin {...config} />;
};

export default DemoViolin;
```

### 平滑/空心小提琴图

```tsx
import React, { useState, useEffect } from 'react';
import { Violin } from '@ant-design/charts';

const DemoViolin: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/6b0a5f1d-5931-42ae-b3ba-3c3cb77d0861.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    height: 500,
    data: data,
    xField: 'x',
    yField: 'y',
    shape: 'hollow-smooth',
  };
  return <Violin {...config} />;
};

export default DemoViolin;
```

### 自定义 Tooltip 文案

```tsx
import React, { useState, useEffect } from 'react';
import { Violin } from '@ant-design/charts';

const DemoViolin: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/6b0a5f1d-5931-42ae-b3ba-3c3cb77d0861.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    width: 400,
    height: 500,
    data: data,
    xField: 'x',
    yField: 'y',
    seriesField: 'species',
    meta: {
      high: {
        alias: '最大值',
        formatter: function formatter(v) {
          return ''.concat(v.toFixed(2), ' %');
        },
      },
      low: {
        alias: '最小值',
        formatter: function formatter(v) {
          return ''.concat(v.toFixed(2), ' %');
        },
      },
      q1: {
        alias: '上四分位数',
        formatter: function formatter(v) {
          return ''.concat(v.toFixed(2), ' %');
        },
      },
      q3: {
        alias: '下四分位数',
        formatter: function formatter(v) {
          return ''.concat(v.toFixed(2), ' %');
        },
      },
      species: { alias: '品类' },
    },
    tooltip: {
      fields: ['species', 'high', 'q1', 'q3', 'low'],
    },
  };
  return <Violin {...config} />;
};

export default DemoViolin;
```
