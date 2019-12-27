---
title: StackArea
---

# StackArea Component

## Normal

```tsx
import React from 'react';
import { data2 } from './data/area';
import { StackArea } from '@alipay/techui-charts';

const config = {
  title: {
    visible: true,
    text: 'The causes of CO2 emissions',
  },
  padding: 'auto',
  data: data2,
  xField: 'year',
  yField: 'value',
  seriesField: 'category',
  xAxis: {
    type: 'time',
  },
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
    },
  },
  responsive: true,
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <StackArea {...config} />;
```
