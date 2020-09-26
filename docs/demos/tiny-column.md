---
title: 迷你柱状图
order: 28
---

# 迷你柱状图

## TinyColumn

### 迷你柱形图回调样式

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    columnStyle: ({ x, y }) => {
      return { fill: y > 80 ? 'red' : 'green' };
    },
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```

### 迷你柱形图样式

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    columnStyle: { fill: '#222' },
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```

###

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    columnWidthRatio: 0.9,
    meta: {
      y: {
        max: 150,
        min: -50,
      },
    },
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```

### 基础迷你柱形图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data: new Array(100).fill(0).map(() => Math.random() * 100),
    tooltip: { formatter: ({ x, y }) => `NO.${x}: ${y.toFixed(2)}` },
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```
