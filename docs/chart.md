---
title: 使用组件配置图表
order: 100
---

# 使用组件配置图表

## 基本用法

```tsx
import React, { useState, useEffect } from 'react';
import { Area, Title, Description } from '@ant-design/charts';

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
    title: {
      visible: true,
      text: '基础面积图',
    },
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
  };
  return <Area {...config} ><Title text='基础面积图1'/><Description text='图表描述'/></Area>;
};

export default DemoArea;
```
