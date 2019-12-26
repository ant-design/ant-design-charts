---
title: Area
order: 8
---

# Area Component

## Normal

```tsx
import React from 'react';
import { Area } from '@alipay/techui-charts';

import { data1 } from './data/area';

const config = {
  data: data1,
  title: {
    visible: true,
    text: '基础面积图',
  },
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    type: 'dateTime',
    tickCount: 5,
  },
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <Area {...config} />;
```
