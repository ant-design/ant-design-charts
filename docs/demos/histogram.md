---
title: 直方图
order: 22
---

# 直方图

## Histogram

### 基础直方图

```tsx
import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram: React.FC = () => {
  const data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config = {
    data,
    binField: 'value',
    binWidth: 2,
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;
```

### 直方图范围刻度

```tsx
import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram: React.FC = () => {
  const data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11 },
    { value: 11 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18 },
    { value: 18 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config = {
    data,
    binField: 'value',
    binWidth: 4,
    tooltip: {
      showMarkers: false,
      position: 'top',
    },
    interactions: [{ type: 'element-highlight' }],
    meta: {
      range: {
        min: 0,
        tickInterval: 2,
      },
      count: {
        max: 20,
        nice: true,
      },
    },
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;
```

### 层叠直方图

```tsx
import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const DemoHistogram: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
    coloField: 'color',
    tooltip: {
      showMarkers: false,
      position: 'top',
    },
    interactions: [{ type: 'element-highlight' }],
  };
  return <Histogram {...config} />;
};

export default DemoHistogram;
```
