---
title: 进度条图
order: 19
---

### 迷你进度条图样式

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  var config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
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
  var config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.536,
    barWidthRatio: 0.3,
    color: ['#F4664A', '#E8EDF3'],
  };
  return <Progress {...config} />;
};

export default DemoProgress;
```

### 迷你进度条-目标值

```tsx
import React, { useState, useEffect } from 'react';
import { Progress } from '@ant-design/charts';

const DemoProgress: React.FC = () => {
  var config = {
    height: 30,
    width: 300,
    autoFit: false,
    percent: 0.536,
    barWidthRatio: 0.8,
    color: ['#F4664A', '#E8EDF3'],
    annotations: [
      {
        type: 'line',
        start: ['80%', '0%'],
        end: ['80%', '100%'],
        style: {
          stroke: '#f00',
          lineWidth: 2,
        },
      },
    ],
  };
  return <Progress {...config} />;
};

export default DemoProgress;
```
