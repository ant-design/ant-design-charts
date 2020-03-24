---
title: 日历图
---

# 日历图

## 基本用法

```tsx
import React, { useState, useEffect } from 'react';
import { Calendar } from '@ant-design/charts';

const DemoCalendar: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/dcffd1f8-265b-4bda-aab1-4ef5c32708b1.json')
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
      text: 'GitHub contribution',
    },
    description: {
      visible: true,
      text: '853 contributions in the last year.',
    },
    width: 650,
    height: 300,
    dateField: 'date',
    valueField: 'commits',
    dateRange: ['2017-05-01', '2017-10-31'],
    colors: '#BAE7FF-#1890FF-#0050B3',
    padding: 'auto',
    xAxis: {
      title: {
        text: '月份',
      },
    },
    yAxis: {
      title: null,
    },
    label: {
      visible: true,
    },
  };
  return <Calendar {...config} />;
};

export default DemoCalendar;
```
