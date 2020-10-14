---
title: 瀑布图
order: 31
---

# 瀑布图

## Waterfall

### 瀑布图 - 数值标签展示绝对值

```tsx
import React, { useState, useEffect } from 'react';
import { Waterfall } from '@ant-design/charts';

const DemoWaterfall: React.FC = () => {
  const data = [
    {
      month: '一月',
      value: 6200000,
    },
    {
      month: '二月',
      value: -600000,
    },
    {
      month: '三月',
      value: -4100000,
    },
    {
      month: '四月',
      value: 3700000,
    },
    {
      month: '五月',
      value: -2100000,
    },
    {
      month: '六月',
      value: 5300000,
    },
    {
      month: '七月',
      value: 3100000,
    },
    {
      month: '八月',
      value: -500000,
    },
    {
      month: '九月',
      value: 4200000,
    },
    {
      month: '十月',
      value: 5300000,
    },
    {
      month: '十一月',
      value: -500000,
    },
    {
      month: '十二月',
      value: 5100000,
    },
  ];
  const config = {
    data,
    padding: 'auto',
    appendPadding: [20, 0, 0, 0],
    xField: 'month',
    yField: 'value',
    meta: {
      month: { alias: '月份' },
      value: {
        alias: '销售量',
        formatter: (v) => `${v / 10000000} 亿`,
      },
    },
    total: {
      label: '总计',
      style: { fill: '#96a6a6' },
    },
    labelMode: 'absolute',
    label: {
      style: { fontSize: 10 },
      background: {
        style: {
          fill: '#f6f6f6',
          stroke: '#e6e6e6',
          radius: 2,
        },
        padding: 1.5,
      },
    },
  };
  return <Waterfall {...config} />;
};

export default DemoWaterfall;
```

### 基础瀑布图 - 每月收支情况

```tsx
import React, { useState, useEffect } from 'react';
import { Waterfall } from '@ant-design/charts';

const DemoWaterfall: React.FC = () => {
  const data = [
    {
      type: '日用品',
      money: 120,
    },
    {
      type: '伙食费',
      money: 900,
    },
    {
      type: '交通费',
      money: 200,
    },
    {
      type: '水电费',
      money: 300,
    },
    {
      type: '房租',
      money: 1200,
    },
    {
      type: '商场消费',
      money: 1000,
    },
    {
      type: '红包收入',
      money: -2000,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'money',
    appendPadding: [15, 0, 0, 0],
    meta: {
      type: { alias: '类别' },
      money: {
        alias: '收支',
        formatter: (v) => `${v} 元`,
      },
    },
    label: {
      style: {
        fontSize: 10,
        fill: 'rgba(0,0,0,0.65)',
      },
      layout: [{ type: 'interval-adjust-position' }],
    },
    total: {
      label: '总支出',
      style: { fill: '#96a6a6' },
    },
  };
  return <Waterfall {...config} />;
};

export default DemoWaterfall;
```

### 变化瀑布图 - 销售量一年的变化情况

```tsx
import React, { useState, useEffect } from 'react';
import { Waterfall } from '@ant-design/charts';

const DemoWaterfall: React.FC = () => {
  const data = [
    {
      month: '2019',
      value: 23000000,
    },
    {
      month: 'Jan',
      value: 2200000,
    },
    {
      month: 'Feb',
      value: -4600000,
    },
    {
      month: 'Mar',
      value: -9100000,
    },
    {
      month: 'Apr',
      value: 3700000,
    },
    {
      month: 'May',
      value: -2100000,
    },
    {
      month: 'Jun',
      value: 5300000,
    },
    {
      month: 'Jul',
      value: 3100000,
    },
    {
      month: 'Aug',
      value: -1500000,
    },
    {
      month: 'Sep',
      value: 4200000,
    },
    {
      month: 'Oct',
      value: 5300000,
    },
    {
      month: 'Nov',
      value: -1500000,
    },
    {
      month: 'Dec',
      value: 5100000,
    },
  ];
  const config = {
    data,
    padding: 'auto',
    appendPadding: [20, 0, 0, 0],
    xField: 'month',
    yField: 'value',
    meta: {
      month: { alias: '月份' },
      value: {
        alias: '销售量',
        formatter: (v) => `${v / 10000000} 亿`,
      },
    },
    total: { label: '2020' },
    color: ({ month, value }) => {
      if (month === '2019' || month === '2020') {
        return '#96a6a6';
      }
      return value > 0 ? '#f4664a' : '#30bf78';
    },
    legend: {
      custom: true,
      items: [
        {
          name: 'Increase',
          value: 'increase',
          marker: {
            symbol: 'square',
            style: {
              r: 5,
              fill: '#f4664a',
            },
          },
        },
        {
          name: 'Decrease',
          value: 'decrease',
          marker: {
            symbol: 'square',
            style: {
              r: 5,
              fill: '#30bf78',
            },
          },
        },
        {
          name: 'Total',
          value: 'total',
          marker: {
            symbol: 'square',
            style: {
              r: 5,
              fill: '#96a6a6',
            },
          },
        },
      ],
    },
    label: {
      style: { fontSize: 10 },
      layout: [{ type: 'interval-adjust-position' }],
      background: {
        style: {
          fill: '#f6f6f6',
          stroke: '#e6e6e6',
          strokeOpacity: 0.65,
          radius: 2,
        },
        padding: 1.5,
      },
    },
    waterfallStyle: ({ month, value }) => {
      return {
        fillOpacity: 0.85,
        stroke:
          month === '2019' || month === '2020' ? '#697474' : value < 0 ? '#0ba156' : '#f84825',
      };
    },
  };
  return <Waterfall {...config} />;
};

export default DemoWaterfall;
```
