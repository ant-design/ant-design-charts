---
title: 柱状图
---

# 柱状图

## 基本用法

```tsx
import React from 'react';
import { Column } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];

  const config = {
    title: {
      visible: true,
      text: '基础柱状图-图形标签',
    },
    description: {
      visible: true,
      text: '基础柱状图图形标签默认位置在柱形上部。',
    },
    forceFit: true,
    data,
    padding: 'auto',
    data,
    xField: 'type',
    yField: 'sales',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额(万)',
      },
    },
    label: {
      visible: true,
      style: {
        fill: '#0D0E68',
        fontSize: 12,
        fontWeight: 600,
        opacity: 0.6,
      },
    },
  };
  return <Column {...config} />;
};
export default App;
```

## 堆叠柱状图

```tsx
import React from 'react';
import { StackedColumn } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { year: '2006', type: 'redDeliciou', value: 10 },
    { year: '2006', type: 'mcintosh', value: 15 },
    { year: '2006', type: 'oranges', value: 9 },
    { year: '2006', type: 'pears', value: 6 },
    { year: '2007', type: 'redDeliciou', value: 12 },
    { year: '2007', type: 'mcintosh', value: 18 },
    { year: '2007', type: 'oranges', value: 9 },
    { year: '2007', type: 'pears', value: 4 },
    { year: '2008', type: 'redDeliciou', value: 5 },
    { year: '2008', type: 'mcintosh', value: 20 },
    { year: '2008', type: 'oranges', value: 8 },
    { year: '2008', type: 'pears', value: 2 },
    { year: '2009', type: 'redDeliciou', value: 1 },
    { year: '2009', type: 'mcintosh', value: 15 },
    { year: '2009', type: 'oranges', value: 5 },
    { year: '2009', type: 'pears', value: 4 },
    { year: '2010', type: 'redDeliciou', value: 2 },
    { year: '2010', type: 'mcintosh', value: 10 },
    { year: '2010', type: 'oranges', value: 4 },
    { year: '2010', type: 'pears', value: 2 },
    { year: '2011', type: 'redDeliciou', value: 3 },
    { year: '2011', type: 'mcintosh', value: 12 },
    { year: '2011', type: 'oranges', value: 6 },
    { year: '2011', type: 'pears', value: 3 },
    { year: '2012', type: 'redDeliciou', value: 4 },
    { year: '2012', type: 'mcintosh', value: 15 },
    { year: '2012', type: 'oranges', value: 8 },
    { year: '2012', type: 'pears', value: 1 },
    { year: '2013', type: 'redDeliciou', value: 6 },
    { year: '2013', type: 'mcintosh', value: 11 },
    { year: '2013', type: 'oranges', value: 9 },
    { year: '2013', type: 'pears', value: 4 },
    { year: '2014', type: 'redDeliciou', value: 10 },
    { year: '2014', type: 'mcintosh', value: 13 },
    { year: '2014', type: 'oranges', value: 9 },
    { year: '2014', type: 'pears', value: 5 },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '联通区域组件交互',
    },
    description: {
      visible: true,
      text:
        '联通区域组件可以经由交互触发。通过triggerOn配置项设置联通区域组件的触发事件。一次只显示一个堆叠字段的联通区域。',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    yAxis: {
      min: 0,
    },
    label: {
      visible: false,
    },
    stackField: 'type',
    color: ['#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
    connectedArea: {
      visible: true,
      triggerOn: 'mouseenter',
    },
  };
  return <StackedColumn {...config} />;
};
export default App;
```

## 百分比堆叠柱状图

```tsx
import React from 'react';
import { PercentStackedColumn } from '@ant-design/charts';

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
      text: '百分比堆叠柱状图',
    },
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    groupField: 'country',
    color: ['#0f759c', '#26a2cb', '#65d1fc'],
  };
  return <PercentStackedColumn {...config} />;
};
export default App;
```

## 分组柱状图

```tsx
import React from 'react';
import { GroupedColumn } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47,
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];

  const config = {
    title: {
      visible: true,
      text: '分组柱状图',
    },
    forceFit: true,
    data,
    xField: '月份',
    yField: '月均降雨量',
    yAxis: {
      min: 0,
    },
    label: {
      visible: true,
    },
    groupField: 'name',
  };
  return <GroupedColumn {...config} />;
};
export default App;
```

## 区间柱状图

```tsx
import React from 'react';
import { RangeColumn } from '@ant-design/charts';

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
      text: '为区间柱状图配置label样式',
    },
    description: {
      visible: true,
      text:
        '使用style配置项配置label整体样式，同时支持通过topStyle和bottomStyle分别配置label样式。',
    },
    data,
    xField: 'type',
    yField: 'values',
    color: 'l(90) 0:#3e5bdb 1:#b4d9e4',
    columnStyle: {
      fillOpacity: 0.8,
    },
    label: {
      visible: true,
      topStyle: {
        fill: '#3e5bdb',
      },
      bottomStyle: {
        fill: '#b4d9e4',
      },
    },
  };
  return <RangeColumn {...config} />;
};
export default App;
```

## 直方图

```tsx
import React from 'react';
import { Histogram } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { value: 1.2 },
    { value: 3.4 },
    { value: 3.7 },
    { value: 4.3 },
    { value: 5.2 },
    { value: 5.8 },
    { value: 6.1 },
    { value: 6.5 },
    { value: 6.8 },
    { value: 7.1 },
    { value: 7.3 },
    { value: 7.7 },
    { value: 8.3 },
    { value: 8.6 },
    { value: 8.8 },
    { value: 9.1 },
    { value: 9.2 },
    { value: 9.4 },
    { value: 9.5 },
    { value: 9.7 },
    { value: 10.5 },
    { value: 10.7 },
    { value: 10.8 },
    { value: 11.0 },
    { value: 11.0 },
    { value: 11.1 },
    { value: 11.2 },
    { value: 11.3 },
    { value: 11.4 },
    { value: 11.4 },
    { value: 11.7 },
    { value: 12.0 },
    { value: 12.9 },
    { value: 12.9 },
    { value: 13.3 },
    { value: 13.7 },
    { value: 13.8 },
    { value: 13.9 },
    { value: 14.0 },
    { value: 14.2 },
    { value: 14.5 },
    { value: 15 },
    { value: 15.2 },
    { value: 15.6 },
    { value: 16.0 },
    { value: 16.3 },
    { value: 17.3 },
    { value: 17.5 },
    { value: 17.9 },
    { value: 18.0 },
    { value: 18.0 },
    { value: 20.6 },
    { value: 21 },
    { value: 23.4 },
  ];
  const config = {
    title: {
      visible: true,
      text: '直方图',
    },
    description: {
      visible: true,
      text: '通过设置binNumber进行分箱，binNumber决定直方图分箱的区域。',
    },
    forceFit: true,
    data,
    padding: 'auto',
    binField: 'value',
    binNumber: 6,
  };
  return <Histogram {...config} />;
};
export default App;
```

## 瀑布图

```tsx
import React from 'react';
import { Waterfall } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬红包', money: -2000 },
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: '每月收支情况（瀑布图）',
    },
    forceFit: true,
    padding: 'auto',
    xField: 'type',
    yField: 'money',
    meta: {
      type: {
        alias: '类别',
      },
      money: {
        alias: '金额',
      },
    },
  };
  return <Waterfall {...config} />;
};
export default App;
```
