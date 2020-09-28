---
title: 玫瑰图
order: 6
---

# 玫瑰图

## Rose

### 玫瑰图

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
  };
  return <Rose {...config} />;
};

export default DemoRose;
```

### 玫瑰图-内部图形标签

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: { offset: -15 },
  };
  return <Rose {...config} />;
};

export default DemoRose;
```

### 玫瑰图-元素交互

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    interactions: [{ type: 'element-active' }],
  };
  return <Rose {...config} />;
};

export default DemoRose;
```

### 玫瑰图-设置条件状态

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Rose {...config} />;
};

export default DemoRose;
```

### 分组玫瑰图

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 15,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 5,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 7,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 38,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    isGroup: true,
    seriesField: 'user',
    radius: 0.9,
    xAxis: { line: { style: { lineWidth: 0 } } },
    label: { offset: -15 },
    interactions: [{ type: 'element-active' }],
  };
  return <Rose {...config} />;
};

export default DemoRose;
```

### 堆叠玫瑰图

```tsx
import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/charts';

const DemoRose: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 15,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 5,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 7,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 38,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    isStack: true,
    seriesField: 'user',
    radius: 0.9,
    xAxis: { line: { style: { lineWidth: 0 } } },
    label: { offset: -15 },
    interactions: [{ type: 'element-active' }],
  };
  return <Rose {...config} />;
};

export default DemoRose;
```
