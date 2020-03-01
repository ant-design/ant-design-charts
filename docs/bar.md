---
title: 条形图
order: 8
---

# 条形图

## 基本用法

```tsx | pure
import React from 'react';
import { Bar } from '@alipay/techui-charts';

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
