---
title: Line
---

# Line Component

## Normal

``` jsx
import React from 'react';
import TechLine from './';
import { MockData } from './mock';

const config = {
  data: MockData,
  xField: 'year',
  yField: 'value',
  title: {
      visible: true,
      text: '我是标题'
  },
  onInit: (chart)=>{
    console.log('canvas instance', chart);
  }
}
export default () => <TechLine {...config} />
```
