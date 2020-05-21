---
title: 条形图
order: 2
---

# 条形图

## Bar

### 基础条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础条形图',
    },
    description: {
      visible: true,
      text: '基础条形图的图形之间添加转化率标签图形\uFF0C用户希望关注从上到下的数据变化比例',
    },
    forceFit: true,
    data,
    xField: 'pv',
    yField: 'action',
    conversionTag: { visible: true },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### 基础条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  const data = [
    {
      地区: '华东',
      销售额: 4684506.442,
    },
    {
      地区: '中南',
      销售额: 4137415.0929999948,
    },
    {
      地区: '东北',
      销售额: 2681567.469000001,
    },
    {
      地区: '华北',
      销售额: 2447301.017000004,
    },
    {
      地区: '西南',
      销售额: 1303124.508000002,
    },
    {
      地区: '西北',
      销售额: 815039.5959999998,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础条形图',
    },
    forceFit: true,
    data,
    xField: '销售额',
    yField: '地区',
    label: {
      visible: true,
      formatter: (v) => Math.round(v / 10000) + '万',
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### 基础条形图 - 图形标签颜色自适应

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  const data = [
    {
      year: '1951 年',
      sales: 38,
      category: 'A',
    },
    {
      year: '1952 年',
      sales: 52,
      category: 'A',
    },
    {
      year: '1956 年',
      sales: 61,
      category: 'A',
    },
    {
      year: '1957 年',
      sales: 145,
      category: 'A',
    },
    {
      year: '1958 年',
      sales: 48,
      category: 'B',
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '基础条形图 - 图形标签颜色自适应',
    },
    description: {
      visible: true,
      text:
        '图形标签(label)的adjustColor配置项默认设置为true\uFF0C位于柱形的内部的label颜色会根据柱形颜色自动调整\uFF0C保证可读性\u3002',
    },
    data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
    color: ['#55A6F3', '#CED4DE', '#55A6F3', '#55A6F3', '#55A6F3'],
    label: {
      visible: true,
      position: 'middle',
      adjustColor: true,
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### 基础条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  const data = [
    {
      地区: '华东',
      销售额: 4684506.442,
    },
    {
      地区: '中南',
      销售额: 4137415.0929999948,
    },
    {
      地区: '东北',
      销售额: 2681567.469000001,
    },
    {
      地区: '华北',
      销售额: 2447301.017000004,
    },
    {
      地区: '西南',
      销售额: 1303124.508000002,
    },
    {
      地区: '西北',
      销售额: 815039.5959999998,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础条形图',
    },
    forceFit: true,
    data,
    xField: '销售额',
    yField: '地区',
    label: {
      visible: true,
      position: 'middle',
      formatter: (v) => Math.round(v / 10000) + '万',
    },
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

### 基础条形图 - 滚动条

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
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
    forceFit: true,
    title: {
      visible: true,
      text: '基础条形图 - 滚动条',
    },
    data,
    xField: '销售额',
    yField: '城市',
    xAxis: {
      visible: true,
      label: { autoHide: true },
    },
    yAxis: {
      visible: true,
      label: { autoHide: true },
    },
    label: { visible: false },
    interactions: [
      {
        type: 'scrollbar',
        cfg: { type: 'vertical' },
      },
    ],
  };
  return <Bar {...config} />;
};

export default DemoBar;
```

## RangeBar

### 为区间条形图配置 label 样式

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/range/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { RangeBar } from '@ant-design/charts';

const DemoRangeBar: React.FC = () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '为区间条形图配置label样式',
    },
    description: {
      visible: true,
      text:
        '使用style配置项配置label整体样式\uFF0C同时支持通过leftStyle和rightStyle分别配置label样式\u3002',
    },
    data,
    xField: 'values',
    yField: 'type',
    color: 'l(0) 0:#3e5bdb 1:#dd3121',
    columnStyle: { fillOpacity: 0.8 },
    label: {
      visible: true,
      leftStyle: { fill: '#3e5bdb' },
      rightStyle: { fill: '#dd3121' },
    },
  };
  return <RangeBar {...config} />;
};

export default DemoRangeBar;
```

### 区间条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/range/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { RangeBar } from '@ant-design/charts';

const DemoRangeBar: React.FC = () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '区间条形图',
    },
    data,
    xField: 'values',
    yField: 'type',
  };
  return <RangeBar {...config} />;
};

export default DemoRangeBar;
```

## GroupedBar

### 分组条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/grouped/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { GroupedBar } from '@ant-design/charts';

const DemoGroupedBar: React.FC = () => {
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
    label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) },
  };
  return <GroupedBar {...config} />;
};

export default DemoGroupedBar;
```

## StackedBar

### 堆叠条形图：label 自动隐藏

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedBar } from '@ant-design/charts';

const DemoStackedBar: React.FC = () => {
  const data_old = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 0.5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 0.3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];
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
      地区: '华东',
      细分: '小型企业',
      销售额: 942432.3720000006,
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
      地区: '中南',
      细分: '小型企业',
      销售额: 743813.0069999992,
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
      地区: '东北',
      细分: '小型企业',
      销售额: 522739.0349999995,
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
      地区: '华北',
      细分: '小型企业',
      销售额: 422100.9870000001,
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
      地区: '西南',
      细分: '小型企业',
      销售额: 156479.9319999999,
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
    {
      地区: '西北',
      细分: '小型企业',
      销售额: 103523.308,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '堆叠条形图\uFF1Alabel自动隐藏',
    },
    description: {
      visible: true,
      text:
        '在堆叠条形图中\uFF0C如果label的位置被设定为middle\uFF0C即显示在条形中间\u3002在对应形状大小不够摆放label的情况下\uFF0Clabel会被自动隐藏\u3002',
    },
    data,
    yField: '地区',
    xField: '销售额',
    stackField: '细分',
    label: {
      offset: 0,
      visible: true,
      position: 'middle',
      formatter: (v) => Math.round(v / 10000) + '万',
    },
  };
  return <StackedBar {...config} />;
};

export default DemoStackedBar;
```

### 百分比堆叠条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedBar } from '@ant-design/charts';

const DemoStackedBar: React.FC = () => {
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
      formatter: (v) => Math.round(v / 10000) + '万',
    },
    stackField: '细分',
  };
  return <StackedBar {...config} />;
};

export default DemoStackedBar;
```

## PercentStackedBar

### 百分比堆叠条形图

<a href="https://antv-g2plot.gitee.io/zh/examples/bar/percent-stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { PercentStackedBar } from '@ant-design/charts';

const DemoPercentStackedBar: React.FC = () => {
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

export default DemoPercentStackedBar;
```
