---
title: 迷你折线图
order: 29
---

# 迷你折线图

## TinyLine

### 迷你折线图回调样式

```tsx
import React, { useState, useEffect } from 'react';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: false,
    lineStyle: () => {
      return {
        stroke: 'green',
        lineWidth: 1,
      };
    },
  };
  return <TinyLine {...config} />;
};

export default DemoTinyLine;
```

### 迷你折线图样式

```tsx
import React, { useState, useEffect } from 'react';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    lineStyle: {
      lineDash: [2, 2],
    },
  };
  return <TinyLine {...config} />;
};

export default DemoTinyLine;
```

### 迷你折线图比例尺

```tsx
import React, { useState, useEffect } from 'react';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine: React.FC = () => {
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
  return <TinyLine {...config} />;
};

export default DemoTinyLine;
```

### 基础迷你折线图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    smooth: true,
    tooltip: { formatter: ({ x, y }) => `NO.${x}: ${y.toFixed(2)}` },
  };
  return <TinyLine {...config} />;
};

export default DemoTinyLine;
```
