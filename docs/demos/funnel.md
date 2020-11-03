---
title: 漏斗图
order: 13
---

# 漏斗图

## Funnel

### 基础漏斗图-转置

```tsx
import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';

const DemoFunnel: React.FC = () => {
  var data = [
    {
      stage: '简历筛选',
      number: 253,
    },
    {
      stage: '初试人数',
      number: 151,
    },
    {
      stage: '复试人数',
      number: 113,
    },
    {
      stage: '录取人数',
      number: 87,
    },
    {
      stage: '入职人数',
      number: 59,
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    isTransposed: true,
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
  var data = [
    {
      stage: '简历筛选',
      number: 253,
    },
    {
      stage: '初试人数',
      number: 151,
    },
    {
      stage: '复试人数',
      number: 113,
    },
    {
      stage: '录取人数',
      number: 87,
    },
    {
      stage: '入职人数',
      number: 59,
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    legend: false,
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
  var data = [
    {
      stage: '简历筛选',
      number: 253,
      company: 'A公司',
    },
    {
      stage: '初试人数',
      number: 151,
      company: 'A公司',
    },
    {
      stage: '复试人数',
      number: 113,
      company: 'A公司',
    },
    {
      stage: '录取人数',
      number: 87,
      company: 'A公司',
    },
    {
      stage: '入职人数',
      number: 59,
      company: 'A公司',
    },
    {
      stage: '简历筛选',
      number: 303,
      company: 'B公司',
    },
    {
      stage: '初试人数',
      number: 251,
      company: 'B公司',
    },
    {
      stage: '复试人数',
      number: 153,
      company: 'B公司',
    },
    {
      stage: '录取人数',
      number: 117,
      company: 'B公司',
    },
    {
      stage: '入职人数',
      number: 79,
      company: 'B公司',
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    compareField: 'company',
    isTransposed: true,
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
  var data = [
    {
      stage: '简历筛选',
      number: 253,
      company: 'A公司',
    },
    {
      stage: '初试人数',
      number: 151,
      company: 'A公司',
    },
    {
      stage: '复试人数',
      number: 113,
      company: 'A公司',
    },
    {
      stage: '录取人数',
      number: 87,
      company: 'A公司',
    },
    {
      stage: '入职人数',
      number: 59,
      company: 'A公司',
    },
    {
      stage: '简历筛选',
      number: 303,
      company: 'B公司',
    },
    {
      stage: '初试人数',
      number: 251,
      company: 'B公司',
    },
    {
      stage: '复试人数',
      number: 153,
      company: 'B公司',
    },
    {
      stage: '录取人数',
      number: 117,
      company: 'B公司',
    },
    {
      stage: '入职人数',
      number: 79,
      company: 'B公司',
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    compareField: 'company',
    meta: {
      stage: { alias: '行为' },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return ''.concat(v, '次');
        },
      },
    },
    conversionTag: {
      offsetX: 10,
      offsetY: 0,
      style: {
        fill: '#666',
        fontSize: 12,
      },
      formatter: function formatter(data) {
        return '转化率'.concat((data.$$percentage$$ * 100).toFixed(2), '%');
      },
    },
    legend: false,
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
  var data = [
    {
      stage: '简历筛选',
      number: 253,
    },
    {
      stage: '初试人数',
      number: 151,
    },
    {
      stage: '复试人数',
      number: 113,
    },
    {
      stage: '录取人数',
      number: 87,
    },
    {
      stage: '入职人数',
      number: 59,
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    dynamicHeight: true,
    isTransposed: true,
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
  var data = [
    {
      stage: '简历筛选',
      number: 253,
    },
    {
      stage: '初试人数',
      number: 151,
    },
    {
      stage: '复试人数',
      number: 113,
    },
    {
      stage: '录取人数',
      number: 87,
    },
    {
      stage: '入职人数',
      number: 59,
    },
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    dynamicHeight: true,
    legend: false,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```
