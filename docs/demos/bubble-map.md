---
title: 气泡地图
order: 33
---

### 带颜色与大小气泡地图

```tsx
import React, { useState, useEffect } from 'react';
import { BubbleMap } from '@ant-design/charts';

const DemoBubbleMap: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    map: {
      type: 'mapbox',
      center: [102.447303, 37.753574],
      zoom: 5,
      pitch: 0,
    },
    source: {
      data: data.list,
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    },
    color: {
      field: 't',
      value: [
        '#03071e',
        '#370617',
        '#6a040f',
        '#9d0208',
        '#d00000',
        '#dc2f02',
        '#e85d04',
        '#f48c06',
        '#faa307',
        '#ffba08',
      ].reverse(),
    },
    size: {
      field: 't',
      value: [2, 18],
    },
    style: {
      opacity: 0.8,
      strokeWidth: 0,
    },
    state: { active: { color: '#FFF684' } },
    zoom: {
      position: 'bottomright',
    },
    tooltip: {
      items: ['s', 't'],
    },
  };
  return <BubbleMap {...config} />;
};

export default DemoBubbleMap;
```
