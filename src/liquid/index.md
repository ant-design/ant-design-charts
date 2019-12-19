---
title: Liquid
---

# TechLiquid Component

## Normal

```jsx
import React from 'react';
import TechLiquid from './';

const config = {
  title: {
    visible: true,
    text: '水波图',
  },
  statistic: 'normal',
  width: 400,
  height: 400,
  min: 0,
  max: 10000,
  value: 4500,
  showValue: true,
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <TechLiquid {...config} />;
```
