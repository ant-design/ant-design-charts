---
title: Bubble
---

# Bubble Component

## Normal

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Bubble } from '@alipay/techui-charts';

const DemoBubble = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/Xq8H1oslsp/bubble.json')
      .then(response => {
        return response.json();
      })
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data: data,
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

export default () => <DemoBubble />;
```
