---
title: 日历图
order: 42
---

# 日历图

## Calendar

### 月份

<a href="https://antv-g2plot.gitee.io/zh/examples/calendar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Calendar } from '@ant-design/charts';

const DemoCalendar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/vIirZPDIu%26/contributions.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
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
    data,
    dateField: 'date',
    valueField: 'commits',
    dateRange: ['2017-05-01', '2017-10-31'],
    colors: '#BAE7FF-#1890FF-#0050B3',
    padding: 'auto',
    xAxis: { title: { text: '月份' } },
    yAxis: { title: null },
    label: { visible: true },
  };
  return <Calendar {...config} />;
};

export default DemoCalendar;
```
