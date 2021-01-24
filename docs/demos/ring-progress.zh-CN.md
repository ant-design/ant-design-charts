---
title: 进度环图
order: 24
---

# 进度环图

## RingProgress
### 迷你进度环图样式

```tsx
import React, { useState, useEffect } from 'react';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress: React.FC = () => {
  

var config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: [
        '#F4664A',
        '#E8EDF3'
    ],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
        title: {
            style: {
                color: '#363636',
                fontSize: '12px',
                lineHeight: '14px'
            },
            formatter: function formatter() {
                return '进度';
            }
        }
    }
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
  

var config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    color: [
        '#5B8FF9',
        '#E8EDF3'
    ]
};
  return <RingProgress {...config} />;
};

export default DemoRingProgress;
```

