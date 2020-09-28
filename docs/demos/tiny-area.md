---
title: 迷你面积图
order: 26
---

# 迷你面积图

## TinyArea

### 迷你面积图样式

```tsx
import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

const DemoTinyArea: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    lineStyle: {
      lineDash: [2, 2],
      stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
    },
    areaStyle: { fill: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' },
  };
  return <TinyArea {...config} />;
};

export default DemoTinyArea;
```

### 迷你面积图比例尺

```tsx
import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';

const DemoTinyArea: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: {
      showCrosshairs: true,
      showMarkers: true,
    },
    meta: {
      y: {
        max: 150,
        min: -50,
      },
    },
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
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: { formatter: (x, y) => `NO.${x}: ${y.toFixed(2)}` },
  };
  return <TinyArea {...config} />;
};

export default DemoTinyArea;
```
