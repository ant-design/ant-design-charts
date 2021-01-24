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
    minSize: 0.3,
    maxSize: 0.8,
    label: {
      formatter: function formatter(datum) {
        return ''.concat(datum.stage, ':').concat(datum.number);
      },
    },
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: datum.stage,
          value: ''.concat(datum.number, '个'),
        };
      },
    },
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
    conversionTag: {
      offsetX: 10,
      style: {
        fill: '#666',
        fontSize: 12,
      },
    },
    legend: false,
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
    tooltip: {
      fields: ['stage', 'number', 'company'],
      formatter: function formatter(v) {
        return {
          name: ''.concat(v.company, '的').concat(v.stage),
          value: v.number,
        };
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
    legend: false,
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

### 分面漏斗图-转置

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
    seriesField: 'company',
    isTransposed: true,
    meta: {
      stage: { alias: '行为' },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return ''.concat(v, '次');
        },
      },
    },
    legend: false,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```

### 分面漏斗图

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
    seriesField: 'company',
    meta: {
      stage: { alias: '行为' },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return ''.concat(v, '次');
        },
      },
    },
    legend: false,
  };
  return <Funnel {...config} />;
};

export default DemoFunnel;
```
