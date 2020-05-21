---
title: 雷达图
order: 21
---

# 雷达图

## Radar

### 基础雷达图

<a href="https://antv-g2plot.gitee.io/zh/examples/radar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const data = [
    {
      item: 'Design',
      score: 70,
    },
    {
      item: 'Development',
      score: 60,
    },
    {
      item: 'Marketing',
      score: 60,
    },
    {
      item: 'Users',
      score: 40,
    },
    {
      item: 'Test',
      score: 60,
    },
    {
      item: 'Language',
      score: 70,
    },
    {
      item: 'Technology',
      score: 50,
    },
    {
      item: 'Support',
      score: 30,
    },
    {
      item: 'Sales',
      score: 60,
    },
    {
      item: 'UX',
      score: 50,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '基础雷达图',
    },
    data,
    angleField: 'item',
    radiusField: 'score',
    radiusAxis: {
      grid: {
        alternateColor: ['rgba(0, 0, 0, 0.04)', null],
      },
    },
    area: { visible: false },
    point: { visible: true },
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```

### 多组雷达图

<a href="https://antv-g2plot.gitee.io/zh/examples/radar/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const data = [
    {
      item: 'Design',
      user: 'a',
      score: 70,
    },
    {
      item: 'Design',
      user: 'b',
      score: 30,
    },
    {
      item: 'Development',
      user: 'a',
      score: 60,
    },
    {
      item: 'Development',
      user: 'b',
      score: 70,
    },
    {
      item: 'Marketing',
      user: 'a',
      score: 60,
    },
    {
      item: 'Marketing',
      user: 'b',
      score: 50,
    },
    {
      item: 'Users',
      user: 'a',
      score: 40,
    },
    {
      item: 'Users',
      user: 'b',
      score: 50,
    },
    {
      item: 'Test',
      user: 'a',
      score: 60,
    },
    {
      item: 'Test',
      user: 'b',
      score: 70,
    },
    {
      item: 'Language',
      user: 'a',
      score: 70,
    },
    {
      item: 'Language',
      user: 'b',
      score: 50,
    },
    {
      item: 'Technology',
      user: 'a',
      score: 50,
    },
    {
      item: 'Technology',
      user: 'b',
      score: 40,
    },
    {
      item: 'Support',
      user: 'a',
      score: 30,
    },
    {
      item: 'Support',
      user: 'b',
      score: 40,
    },
    {
      item: 'Sales',
      user: 'a',
      score: 60,
    },
    {
      item: 'Sales',
      user: 'b',
      score: 40,
    },
    {
      item: 'UX',
      user: 'a',
      score: 50,
    },
    {
      item: 'UX',
      user: 'b',
      score: 60,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '多组雷达图',
    },
    data,
    angleField: 'item',
    radiusField: 'score',
    seriesField: 'user',
    radiusAxis: { grid: { line: { type: 'line' } } },
    line: { visible: true },
    point: {
      visible: true,
      shape: 'circle',
    },
    legend: {
      visible: true,
      position: 'bottom-center',
    },
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```
