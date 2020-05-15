---
title: 混合图
order: 8
---

# 混合图

## 双折线图

<a href="https://g2plot.antv.vision/zh/examples/combo/dual-line/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { DualLine } from '@ant-design/charts';

const App: React.FC = () => {
  const data1 = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const data2 = [
    { year: '1991', count: 10 },
    { year: '1992', count: 4 },
    { year: '1993', count: 5 },
    { year: '1994', count: 5 },
    { year: '1995', count: 4.9 },
    { year: '1996', count: 35 },
    { year: '1997', count: 7 },
    { year: '1998', count: 1 },
    { year: '1999', count: 20 },
  ];
  const config = {
    title: {
      visible: true,
      text: '双折线图',
    },
    description: {
      visible: true,
      text: '自定义双折线的样式，突出主要折线',
    },
    data: [data1, data2],
    xField: 'year',
    yField: ['value', 'count'],
    lineConfigs: [
      { color: '#29cae4', smooth: false, lineSize: 3 },
      {
        color: '#586bce',
        smooth: true,
        point: {
          visible: true,
        },
        label: {
          visible: true,
        },
        lineSize: 4,
        lineStyle: {
          opacity: 0.5,
        },
      },
    ],
  };
  return <DualLine {...config} />;
};

export default App;
```

## 柱线混合图

<a href="https://g2plot.antv.vision/zh/examples/combo/column-line/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { ColumnLine } from '@ant-design/charts';

const App: React.FC = () => {
  const uvData = [
    { time: '2019-03', value: 350 },
    { time: '2019-04', value: 900 },
    { time: '2019-05', value: 300 },
    { time: '2019-06', value: 450 },
    { time: '2019-07', value: 470 },
  ];

  const transformData = [
    { time: '2019-03', count: 800 },
    { time: '2019-04', count: 600 },
    { time: '2019-05', count: 400 },
    { time: '2019-06', count: 380 },
    { time: '2019-07', count: 220 },
  ];

  const config = {
    title: {
      visible: true,
      text: '柱线混合图',
    },
    description: {
      visible: true,
      text: '自定义图形细节',
    },
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    columnConfig: {
      color: '#586bce',
    },
    lineConfig: {
      color: '#29cae4',
      point: {
        visible: true,
      },
      label: {
        visible: true,
      },
    },
  };
  return <ColumnLine {...config} />;
};
export default App;
```

## 柱线混合图

<a href="" target="_blank">配置</a>

```tsx
import React from 'react';
import { PercentStackedBar } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];

  const config = {
    title: {
      visible: true,
      text: '百分比堆叠条形图',
    },
    data,
    xField: 'value',
    yField: 'year',
    stackField: 'country',
    color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
    label: {
      visible: true,
      formatter: (v) => {
        return v.toFixed(2);
      },
    },
  };
  return <PercentStackedBar {...config} />;
};

export default App;
```

## 分组柱+折线混合图

<a href="https://g2plot.antv.vision/zh/examples/combo/stackedColumn-line/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { StackedColumnLine } from '@ant-design/charts';

const App: React.FC = () => {
  const uvBillData = [
    { time: '2019-03', value: 350, type: 'uv' },
    { time: '2019-04', value: 900, type: 'uv' },
    { time: '2019-05', value: 300, type: 'uv' },
    { time: '2019-06', value: 450, type: 'uv' },
    { time: '2019-07', value: 470, type: 'uv' },
    { time: '2019-03', value: 220, type: 'bill' },
    { time: '2019-04', value: 300, type: 'bill' },
    { time: '2019-05', value: 250, type: 'bill' },
    { time: '2019-06', value: 220, type: 'bill' },
    { time: '2019-07', value: 362, type: 'bill' },
  ];

  const transformData = [
    { time: '2019-03', count: 800, name: 'a' },
    { time: '2019-04', count: 600, name: 'a' },
    { time: '2019-05', count: 400, name: 'a' },
    { time: '2019-06', count: 380, name: 'a' },
    { time: '2019-07', count: 220, name: 'a' },
    { time: '2019-03', count: 750, name: 'b' },
    { time: '2019-04', count: 650, name: 'b' },
    { time: '2019-05', count: 450, name: 'b' },
    { time: '2019-06', count: 400, name: 'b' },
    { time: '2019-07', count: 320, name: 'b' },
    { time: '2019-03', count: 900, name: 'c' },
    { time: '2019-04', count: 600, name: 'c' },
    { time: '2019-05', count: 450, name: 'c' },
    { time: '2019-06', count: 300, name: 'c' },
    { time: '2019-07', count: 200, name: 'c' },
  ];

  const config = {
    title: {
      visible: true,
      text: '分组柱+折线混合图',
      alignTo: 'middle',
    },
    description: {
      visible: true,
      text: '配置多折线',
      alignTo: 'middle',
    },
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    columnStackField: 'type',
    lineSeriesField: 'name',
  };

  return <StackedColumnLine {...config} />;
};
export default App;
```

## 分组柱+折线混合图

<a href="https://g2plot.antv.vision/zh/examples/combo/groupedColumn-line/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { GroupedColumnLine } from '@ant-design/charts';

const App: React.FC = () => {
  const uvBillData = [
    { time: '2019-03', value: 350, type: 'uv' },
    { time: '2019-04', value: 900, type: 'uv' },
    { time: '2019-05', value: 300, type: 'uv' },
    { time: '2019-06', value: 450, type: 'uv' },
    { time: '2019-07', value: 470, type: 'uv' },
    { time: '2019-03', value: 220, type: 'bill' },
    { time: '2019-04', value: 300, type: 'bill' },
    { time: '2019-05', value: 250, type: 'bill' },
    { time: '2019-06', value: 220, type: 'bill' },
    { time: '2019-07', value: 362, type: 'bill' },
  ];

  const transformData = [
    { time: '2019-03', count: 800 },
    { time: '2019-04', count: 600 },
    { time: '2019-05', count: 400 },
    { time: '2019-06', count: 380 },
    { time: '2019-07', count: 220 },
  ];
  const config = {
    title: {
      visible: true,
      text: '分组柱+折线混合图',
      alignTo: 'middle',
    },
    description: {
      visible: true,
      text: '分组柱+折线混合图表',
      alignTo: 'middle',
    },
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    columnGroupField: 'type',
  };
  return <GroupedColumnLine {...config} />;
};
export default App;
```
