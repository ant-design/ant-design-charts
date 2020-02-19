---
title: 气泡图
---

# 气泡图

## Normal

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@alipay/techui-charts';

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
