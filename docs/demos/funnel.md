---
title: 漏斗图
order: 14
---

# 漏斗图

## Funnel

### 基础漏斗图-转置

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付',
      pv: 15000,
    },
    {
      action: '成交',
      pv: 8500,
    },
  ];
  const config = {
    padding: [0, 100],
    data: data,
    xField: 'action',
    yField: 'pv',
    transpose: true,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 基础漏斗图

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付',
      pv: 15000,
    },
    {
      action: '成交',
      pv: 8500,
    },
  ];
  const config = {
    padding: [30, 60],
    data: data,
    xField: 'action',
    yField: 'pv',
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 对比漏斗图-转置

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
      quarter: '2020Q1',
    },
    {
      action: '放入购物车',
      pv: 35000,
      quarter: '2020Q1',
    },
    {
      action: '生成订单',
      pv: 25000,
      quarter: '2020Q1',
    },
    {
      action: '支付订单',
      pv: 15000,
      quarter: '2020Q1',
    },
    {
      action: '完成交易',
      pv: 11500,
      quarter: '2020Q1',
    },
    {
      action: '浏览网站',
      pv: 80000,
      quarter: '2020Q2',
    },
    {
      action: '放入购物车',
      pv: 63000,
      quarter: '2020Q2',
    },
    {
      action: '生成订单',
      pv: 47000,
      quarter: '2020Q2',
    },
    {
      action: '支付订单',
      pv: 24000,
      quarter: '2020Q2',
    },
    {
      action: '完成交易',
      pv: 17500,
      quarter: '2020Q2',
    },
  ];
  const config = {
    padding: [30, 60],
    data,
    xField: 'action',
    yField: 'pv',
    compareField: 'quarter',
    transpose: true,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 对比漏斗图

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
      quarter: '2020Q1',
    },
    {
      action: '放入购物车',
      pv: 35000,
      quarter: '2020Q1',
    },
    {
      action: '生成订单',
      pv: 25000,
      quarter: '2020Q1',
    },
    {
      action: '支付订单',
      pv: 15000,
      quarter: '2020Q1',
    },
    {
      action: '完成交易',
      pv: 11500,
      quarter: '2020Q1',
    },
    {
      action: '浏览网站',
      pv: 80000,
      quarter: '2020Q2',
    },
    {
      action: '放入购物车',
      pv: 63000,
      quarter: '2020Q2',
    },
    {
      action: '生成订单',
      pv: 47000,
      quarter: '2020Q2',
    },
    {
      action: '支付订单',
      pv: 24000,
      quarter: '2020Q2',
    },
    {
      action: '完成交易',
      pv: 17500,
      quarter: '2020Q2',
    },
  ];
  const config = {
    padding: [30, 60],
    data,
    xField: 'action',
    yField: 'pv',
    compareField: 'quarter',
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 动态高度漏斗图-转置

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付',
      pv: 15000,
    },
    {
      action: '成交',
      pv: 8500,
    },
  ];
  const config = {
    padding: [0, 100],
    data: data,
    xField: 'action',
    yField: 'pv',
    dynamicHeight: true,
    transpose: true,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 动态高度漏斗图

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付',
      pv: 15000,
    },
    {
      action: '成交',
      pv: 8500,
    },
  ];
  const config = {
    padding: [0, 100],
    data: data,
    xField: 'action',
    yField: 'pv',
    dynamicHeight: true,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```
