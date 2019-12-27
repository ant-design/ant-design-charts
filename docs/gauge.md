---
title: Gauge
---

# Gauge Component

## Normal

```tsx
import React from 'react';
import { Gauge } from '@alipay/techui-charts';

const config = {
  title: {
    visible: true,
    text: '仪表盘',
  },
  width: 400,
  height: 400,
  value: 64,
  min: 0,
  max: 100,
  gaugeStyle: {
    colors: ['#f4664a', '#faad14', '#a0d911', '#30bf78'],
    tickLabelSize: 20,
  },
  statistic: () => {
    return '<div class="g2plot-gauge-label"><p class="title">优</p><p class="value">系统表现</p></div>';
  },
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <Gauge {...config} />;
```
