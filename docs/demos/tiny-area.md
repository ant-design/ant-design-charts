---
title: 迷你面积图
order: 28
---

# 迷你面积图

## TinyArea

### 带辅助信息的迷你面积图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

const DemoTinyArea: React.FC = () => {
  var data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  var config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: data,
    smooth: true,
    tooltip: false,
    annotations: [
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        text: {
          content: '平均值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: { stroke: 'rgba(0, 0, 0, 0.25)' },
      },
      {
        type: 'line',
        start: ['min', 800],
        end: ['max', 800],
        text: {
          content: '目标值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: { stroke: 'rgba(0, 0, 0, 0.55)' },
      },
    ],
  };
  return <TinyArea {...config} />;
};

export default DemoTinyArea;
```

### 基础迷你面积图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

const DemoTinyArea: React.FC = () => {
  var data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  var config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: data,
    smooth: true,
  };
  return <TinyArea {...config} />;
};

export default DemoTinyArea;
```

### 平铺填充迷你面积图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

const DemoTinyArea: React.FC = () => {
  var data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  var config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: data,
    smooth: true,
    areaStyle: { fill: '#d6e3fd' },
  };
  return <TinyArea {...config} />;
};

export default DemoTinyArea;
```
