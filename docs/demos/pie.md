---
title: 饼图
order: 5
---

# 饼图

## Pie

### 饼图

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 饼图-外部图形标签

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'outer' },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 饼图-设置条件状态

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.setState('active', (data) => data.type === '分类一');
      ref.current.setState('selected', (data) => data.type === '分类一' || data.type === '分类二');
    }
  }, []);

  return <Pie {...config} chartRef={ref} />;
};

export default DemoPie;
```

### 饼图-带纹理

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      sex: '男',
      sold: 0.45,
    },
    {
      sex: '女',
      sold: 0.55,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      style: {
        fill: '#fff',
        fontSize: 18,
      },
    },
    pieStyle: (solid, sex) => {
      if (sex === '男') {
        return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg' };
      }
      return { fill: 'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg' };
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 环图

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      content: '{percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
    statistic: {
      title: false,
      content: { formatter: () => 'AntV\nG2Plot' },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

### 环图 - 带统计指标卡

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: -35,
      autoRotate: false,
      content: '{value}',
      style: {
        fill: '#333',
        stroke: '#fff',
        strokeWidth: 1,
      },
    },
    statistic: { title: { formatter: () => '总计' } },
    interactions: [{ type: 'pie-statistic-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;
```
