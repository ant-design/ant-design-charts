---
title: Progress
order: 19
---

# Progress

## Progress

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
