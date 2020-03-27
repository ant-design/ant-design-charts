---
title: 条形图
order: 8
---

# 条形图

## 基本用法

```tsx
import React from 'react';
import { Bar } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { 地区: '华东', 销售额: 4684506.442 },
    { 地区: '中南', 销售额: 4137415.0929999948 },
    { 地区: '东北', 销售额: 2681567.469000001 },
    { 地区: '华北', 销售额: 2447301.017000004 },
    { 地区: '西南', 销售额: 1303124.508000002 },
    { 地区: '西北', 销售额: 815039.5959999998 },
  ];
  const config = {
    data,
    title: {
      visible: true,
      text: '基础条形图',
    },
    forceFit: true,
    xField: '销售额',
    yField: '地区',
    xAxis: {
      formatter: v => Math.round(v / 10000) + '万',
    },
  };

  return <Bar {...config} />;
};

export default App;
```

## 堆叠条形图

```tsx
import React from 'react';
import { StackedBar } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      地区: '华东',
      细分: '公司',
      销售额: 1454715.807999998,
    },
    {
      地区: '华东',
      细分: '消费者',
      销售额: 2287358.261999998,
    },
    {
      地区: '中南',
      细分: '公司',
      销售额: 1335665.3239999984,
    },
    {
      地区: '中南',
      细分: '消费者',
      销售额: 2057936.7620000008,
    },
    {
      地区: '东北',
      细分: '公司',
      销售额: 834842.827,
    },
    {
      地区: '东北',
      细分: '消费者',
      销售额: 1323985.6069999991,
    },
    {
      地区: '华北',
      细分: '公司',
      销售额: 804769.4689999995,
    },
    {
      地区: '华北',
      细分: '消费者',
      销售额: 1220430.5610000012,
    },
    {
      地区: '西南',
      细分: '公司',
      销售额: 469341.684,
    },
    {
      地区: '西南',
      细分: '消费者',
      销售额: 677302.8919999995,
    },
    {
      地区: '西北',
      细分: '公司',
      销售额: 253458.1840000001,
    },
    {
      地区: '西北',
      细分: '消费者',
      销售额: 458058.1039999998,
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '百分比堆叠条形图',
    },
    data,
    yField: '地区',
    xField: '销售额',
    label: {
      visible: true,
      formatter: v => Math.round(v / 10000) + '万',
    },
    stackField: '细分',
  };
  return <StackedBar {...config} />;
};
export default App;
```

## 百分比堆叠条形图

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
      formatter: v => {
        return v.toFixed(2);
      },
    },
  };
  return <PercentStackedBar {...config} />;
};

export default App;
```

## 分组条形图

```tsx
import React from 'react';
import { GroupedBar } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];

  const config = {
    title: {
      visible: true,
      text: '分组条形图',
    },
    data,
    xField: 'value',
    yField: 'label',
    groupField: 'type',
    color: ['#1383ab', '#c52125'],
    label: {
      formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
    },
  };

  return <GroupedBar {...config} />;
};
export default App;
```

## 区间条形图

```tsx
import React from 'react';
import { RangeBar } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { type: '分类一', values: [76, 100] },
    { type: '分类二', values: [56, 108] },
    { type: '分类三', values: [38, 129] },
    { type: '分类四', values: [58, 155] },
    { type: '分类五', values: [45, 120] },
    { type: '分类六', values: [23, 99] },
    { type: '分类七', values: [18, 56] },
    { type: '分类八', values: [18, 34] },
  ];

  const config = {
    title: {
      visible: true,
      text: '为区间条形图配置label样式',
    },
    description: {
      visible: true,
      text:
        '使用style配置项配置label整体样式，同时支持通过leftStyle和rightStyle分别配置label样式。',
    },
    data,
    xField: 'values',
    yField: 'type',
    color: 'l(0) 0:#3e5bdb 1:#dd3121',
    columnStyle: {
      fillOpacity: 0.8,
    },
    label: {
      visible: true,
      leftStyle: {
        fill: '#3e5bdb',
      },
      rightStyle: {
        fill: '#dd3121',
      },
    },
  };
  return <RangeBar {...config} />;
};
export default App;
```
