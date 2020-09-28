---
title: 进度环图
order: 22
---

# 进度环图

## RingProgress

### 迷你进度环图半径大小

```tsx
import React, { useState, useEffect } from 'react';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    innerRadius: 0.95,
    radius: 0.95,
  };
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
```

### 迷你进度环图回调样式

```tsx
import React, { useState, useEffect } from 'react';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 100,
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
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
```

### 迷你进度环图样式

```tsx
import React, { useState, useEffect } from 'react';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    progressStyle: {
      stroke: 'grey',
      lineDash: [4, 4],
      lineWidth: 1,
    },
  };
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
```

### 迷你进度环图

```tsx
import React, { useState, useEffect } from 'react';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress: React.FC = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
  };
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
```
