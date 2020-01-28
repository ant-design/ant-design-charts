---
title: StepLine
---

# StepLine Component

## Normal

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@alipay/techui-charts';

const DemoStepLine: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/6c15fd60-2dc4-48da-94e1-76e4f023f635.json')
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
      text: '多阶梯折线图',
    },
    description: {
      visible: true,
      text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势和变化。',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
      },
    },
    legend: {
      position: 'right-top',
    },
    seriesField: 'type',
    responsive: true,
  };
  return <StepLine {...config} />;
};

export default () => <DemoStepLine />;
```

## GDP

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@alipay/techui-charts';

const DemoStepLine: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/15dde058-6a47-412b-915f-672bc103dc5a.json')
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
      text: '2000 ~ 2018 年各国家 GDP 趋势对比',
    },
    description: {
      visible: true,
      text: '图形标签 (label) 位于折线尾部，用于标注整根阶梯折线，并有带有排名的含义在其中。',
    },
    padding: [20, 100, 30, 80],
    forceFit: true,
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      type: 'dateTime',
      autoHideLabel: true,
    },
    yAxis: {
      formatter: v => `${(v / 10e8).toFixed(1)} B`,
    },
    legend: {
      visible: false,
    },
    label: {
      visible: true,
      type: 'line',
    },
  };
  return <StepLine {...config} />;
};

export default () => <DemoStepLine />;
```
