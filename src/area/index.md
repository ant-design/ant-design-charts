---
title: Area
---

# TechArea Component

## Normal

```jsx
import React from 'react';
import { data1 } from '../../examples/data/area';
import TechArea from './';

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
export default () => <TechArea {...config} />;
```
