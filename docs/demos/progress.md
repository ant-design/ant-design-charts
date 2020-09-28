---
title: 进度条图
order: 19
---

# 进度条图

## Progress

### 迷你进度条图回调样式

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    progressStyle: ({ percent, type }) => {
      if (type === 'current') {
        return { fill: 'green' };
      }
      return {
        fill: '#999',
        lineDash: [1, 1],
        stroke: '#333',
      };
    },
  };
  return <Progress {...config} />;
};

export default DemoProgress;
```

### 迷你进度条图样式

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    progressStyle: {
      stroke: 'grey',
      lineDash: [4, 4],
      lineWidth: 1,
    },
  };
  return <Progress {...config} />;
};

export default DemoProgress;
```

### 迷你进度条图大小

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    barWidthRatio: 0.1,
  };
  return <Progress {...config} />;
};

export default DemoProgress;
```
