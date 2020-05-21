---
title: 基础阶梯图
order: 11
---

# 基础阶梯图

## StepLine

### 配置折线数据点样式

<a href="https://antv-g2plot.gitee.io/zh/examples/step/line/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '配置折线数据点样式',
    },
    description: {
      visible: true,
      text: '自定义配置趋势线上数据点的样式',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    label: {
      visible: true,
      type: 'point',
    },
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```

### 为阶梯图添加缩略轴交互

<a href="https://antv-g2plot.gitee.io/zh/examples/step/line/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '为阶梯图添加缩略轴交互',
    },
    description: {
      visible: true,
      text: '缩略轴 (slider) 交互适用于数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: '城市',
    xAxis: {
      visible: true,
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yField: '销售额',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.1,
          end: 0.2,
        },
      },
    ],
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```

### 带数据点的折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/step/line/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    description: {
      visible: true,
      text: '将折线图上的每一个数据点显示出来\uFF0C作为辅助阅读\u3002',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    step: 'hvh',
    point: { visible: true },
    label: {
      visible: true,
      type: 'point',
    },
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```

### 单阶梯折线的基础用法

<a href="https://antv-g2plot.gitee.io/zh/examples/step/line/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '单阶梯折线的基础用法',
    },
    description: {
      visible: true,
      text: '最基础简单的阶梯图使用方式\uFF0C显示一个指标的趋势和变化',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```

## StepLine

### 2000 ~ 2018 年各国家 GDP 趋势对比

<a href="https://antv-g2plot.gitee.io/zh/examples/step-line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24KjfUOgRYa/GDP.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: '2000 ~ 2018 年各国家 GDP 趋势对比',
    },
    description: {
      visible: true,
      text:
        '图形标签 (label) 位于折线尾部\uFF0C用于标注整根阶梯折线\uFF0C并有带有排名的含义在其中\u3002',
    },
    padding: [20, 100, 30, 80],
    forceFit: true,
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    xAxis: {
      type: 'dateTime',
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yAxis: { formatter: (v) => `${(v / 1000000000).toFixed(1)} B` },
    legend: { visible: false },
    label: {
      visible: true,
      type: 'line',
    },
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```

### 多阶梯折线图

<a href="https://antv-g2plot.gitee.io/zh/examples/step-line/multiple/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StepLine } from '@ant-design/charts';

const DemoStepLine: React.FC = () => {
  const data = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623,
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208,
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182,
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145,
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016,
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257,
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508,
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916,
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289,
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311,
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188,
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548,
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116,
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491,
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456,
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419,
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852,
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689,
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643,
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788,
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280,
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445,
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319,
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多阶梯折线图',
    },
    description: {
      visible: true,
      text: '将数据按照某一字段进行分组\uFF0C用于比对不同类型数据的趋势和变化\u3002',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    legend: { position: 'right-top' },
    seriesField: 'type',
    responsive: true,
  };
  return <StepLine {...config} />;
};

export default DemoStepLine;
```
