---
title: 面积图
order: 8
---

# Area Component

## Normal

```tsx
import React, { useState, useEffect } from 'react';
import { Area } from '@alipay/techui-charts';

const DemoArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/72ea027c-a7eb-404e-9c23-3761b016953c.json')
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
      text: '基础面积图',
    },
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
  };
  return <Area {...config} />;
};

export default DemoArea;
```
