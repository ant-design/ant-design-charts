---
title: 饼图
---

# 饼图

## 基本用法

```tsx
import React from 'react';
import { Pie } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const config = {
    data,
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-图形标签蜘蛛布局',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为spider时，标签分为两组，在图表两侧拉线对齐显示。一般来说，蜘蛛布局的label更不容易相互遮挡。',
    },
    radius: 0.8,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'spider',
    },
  };
  return <Pie {...config} />;
};

export default App;
```

## 外部标签

```tsx
import React from 'react';
import { Pie } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [];
  for (let i = 1; i < 50; i++) {
    data.push({ type: `分类 ${i}`, value: (Math.random() * 10).toFixed(0) + 1 });
  }

  const config = {
    data,
    forceFit: true,
    title: {
      visible: true,
      text: '饼图-外部圆形图形标签(outer-center label)',
    },
    description: {
      visible: true,
      text:
        '当把饼图label的类型设置为outer-center时，标签在切片外部拉线显示。outer-center布局的label发生遮挡会直接隐藏而不偏移躲避，相对于outer label布局来说，更美观',
    },
    radius: 0.8,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer-center',
      formatter: (text, item) => `${item._origin.type}: ${item._origin.value}`,
    },
  };
  return <Pie {...config} />;
};

export default App;
```

## 环图

```tsx
import React from 'react';
import { Donut } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图',
    },
    description: {
      visible: true,
      text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
  };
  return <Donut {...config} />;
};
export default App;
```

## 玫瑰图

```tsx
import React from 'react';
import { Rose } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '多色玫瑰图',
    },
    description: {
      visible: true,
      text:
        '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
    },
    radius: 0.8,
    data,
    radiusField: 'value',
    categoryField: 'type',
    colorField: 'type',
    label: {
      visible: true,
      type: 'outer',
      formatter: (text) => text,
    },
  };
  return <Rose {...config} />;
};
export default App;
```

## 堆叠玫瑰图

```tsx
import React from 'react';
import { StackedRose } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 15,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 5,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 7,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 38,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '堆叠玫瑰图',
    },
    description: {
      visible: true,
      text:
        '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
    },
    radius: 0.8,
    data,
    radiusField: 'value',
    categoryField: 'type',
    stackField: 'user',
    label: {
      visible: true,
      type: 'inner',
    },
  };
  return <StackedRose {...config} />;
};
export default App;
```

## 分组玫瑰图

```tsx
import React from 'react';
import { GroupedRose } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 12,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 17,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 35,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 28,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 35,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ];

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '分组玫瑰图',
    },
    description: {
      visible: true,
      text:
        '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
    },
    radius: 0.7,
    data,
    radiusField: 'value',
    categoryField: 'type',
    groupField: 'user',
    label: {
      visible: true,
      type: 'inner',
    },
    theme: {
      legend: {
        margin: [0, 0, 80, 0],
      },
    },
  };
  return <GroupedRose {...config} />;
};
export default App;
```
