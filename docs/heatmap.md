---
title: 热力图
---

# 热力图

## Normal

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@alipay/techui-charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/293bb835-d067-4e94-be3e-f271d3c818a7.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'prob',
    yField: 'Average annual wage',
    colorField: 'numbEmployed',
    color: ['#295599', '#3e94c0', '#78c6d0', '#b4d9e4', '#fffef0', '#f9cdac', '#ec7d92', '#bc448c'],
    radius: 15,
    intensity: 2,
    xAxis: {
      visible: true,
      min: -0.05,
      max: 1.05,
      nice: false,
    },
    yAxis: {
      visible: true,
      min: -1000,
    },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```

## backgroundImage

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@alipay/techui-charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/ec7af1f7-b00d-46b2-bd8e-d4d7463f6e1b.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'g',
    yField: 'l',
    colorField: 'tmp',
    color: ['#295599', '#3e94c0', '#78c6d0', '#b4d9e4', '#fffef0', '#f9cdac', '#ec7d92', '#bc448c'],
    meta: {
      l: {
        alias: 'latitude',
      },
      g: {
        alias: 'longitude',
      },
    },
    legend: {
      visible: true,
      position: 'right-center',
    },
    radius: 10,
    intensity: 4,
    background: {
      type: 'image',
      src: 'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*TU_aSrMV6KYAAAAAAAAAAABkARQnAQ',
    },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```
