---
title: Bubble
---

# TechBubble Component

## Normal

```jsx
import React from 'react';
import { data1 } from '../../examples/data/bubble';
import TechBubble from './';

const config = {
  data: data1,
  title: {
    visible: true,
    text: '基础气泡图',
  },
  xField: 'change in female rate',
  yField: 'change in male rate',
  sizeField: 'pop',
  pointSize: [4, 30],
  colorField: 'continent',
  color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
  pointStyle: {
    stroke: '#777777',
    lineWidth: 1,
    opacity: 0.8,
  },
  xAxis: {
    visble: true,
    max: 5,
    min: -25,
  },
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <TechBubble {...config} />;
```
