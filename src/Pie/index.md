---
title: Pie
---

# Pie Component

## Normal

``` jsx
import React from 'react';
import Pie from './';
import { Playground } from 'docz';
import { MockData } from './mock';

const config = {
  data: MockData,
  forceFit: true,
  title: {
    visible: true,
    text: '多色饼图',
  },
  description: {
    visible: true,
    text:
      '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
  },
  radius: 0.8,

  angleField: 'value',
  colorField: 'type',
  label: {
    visible: true,
    type: 'inner',
  },
}

export default () => <Pie {...config} />;
```
