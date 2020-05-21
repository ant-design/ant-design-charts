---
title: 子弹图
order: 35
---

# 子弹图

## Bullet

### 基础子弹图

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [83],
        targets: [90],
      },
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: '基础子弹图',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)\uFF0C即可展示子弹图进度情况\uFF1B若没有设置最大值(max)\uFF0C则最大值等于目标值',
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 基础子弹图-带多颜色范围区间

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '基础子弹图-带多颜色范围区间',
    },
    description: {
      visible: true,
      text: '自定义图例\uFF0C表示各颜色范围区间代表的含义\uFF08如差\u3001良\u3001优\uFF09',
    },
    data: [
      {
        title: '满意度',
        measures: [83],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          name: '实际进度',
          marker: {
            symbol: 'square',
            style: { fill: '#5B8FF9' },
          },
        },
        {
          name: '目标值',
          marker: {
            symbol: 'line',
            style: { stroke: '#5B8FF9' },
          },
        },
        {
          name: '差',
          marker: {
            symbol: 'square',
            style: { fill: '#FFB1AC' },
          },
        },
        {
          name: '良',
          marker: {
            symbol: 'square',
            style: { fill: '#FFDBA2' },
          },
        },
        {
          name: '优',
          marker: {
            symbol: 'square',
            style: { fill: '#B4EBBF' },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 分组子弹图-带颜色范围区间

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '分组子弹图-带颜色范围区间',
    },
    data: [
      {
        title: '广州',
        measures: [83],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
      {
        title: '深圳',
        measures: [73],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
      {
        title: '珠海',
        measures: [65],
        targets: [80],
        ranges: [0, 0.6, 0.75, 1],
      },
      {
        title: '汕头',
        measures: [83],
        targets: [70],
        ranges: [0, 0.6, 0.75, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          name: '实际进度',
          marker: {
            symbol: 'square',
            style: { fill: '#5B8FF9' },
          },
        },
        {
          name: '目标值',
          marker: {
            symbol: 'line',
            style: { stroke: '#5B8FF9' },
          },
        },
        {
          name: '差',
          marker: {
            symbol: 'square',
            style: { fill: '#FFB1AC' },
          },
        },
        {
          name: '良',
          marker: {
            symbol: 'square',
            style: { fill: '#FFDBA2' },
          },
        },
        {
          name: '优',
          marker: {
            symbol: 'square',
            style: { fill: '#B4EBBF' },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 分组子弹图

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    data: [
      {
        title: '广州',
        measures: [83],
        targets: [90],
      },
      {
        title: '深圳',
        measures: [13],
        targets: [90],
      },
      {
        title: '珠海',
        measures: [45],
        targets: [80],
      },
      {
        title: '汕头',
        measures: [83],
        targets: [70],
      },
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: '分组子弹图',
    },
    description: {
      visible: true,
      text: '当data数组由多个值时\uFF0C可以展示多条子弹图进行进度对比',
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 基础子弹图-多目标值

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [87],
        targets: [80, 95],
      },
    ],
    rangeMax: 100,
    markerColors: ['#5B8FF9', '#5AD8A6'],
    title: {
      visible: true,
      text: '基础子弹图-多目标值',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)\uFF0C即可展示子弹图进度情况\uFF1B若没有设置最大值(max)\uFF0C则最大值等于目标值',
    },
    legend: {
      custom: true,
      items: [
        {
          name: '实际进度',
          marker: {
            symbol: 'square',
            style: { fill: '#5B8FF9' },
          },
        },
        {
          name: '目标值 1',
          marker: {
            symbol: 'line',
            style: { stroke: '#5B8FF9' },
          },
        },
        {
          name: '目标值 2',
          marker: {
            symbol: 'line',
            style: { stroke: '#5AD8A6' },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 基础子弹图-超出目标

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    title: {
      visible: true,
      text: '基础子弹图-超出目标',
    },
    description: {
      visible: true,
      text: '当进度超出子弹图最大值时\uFF0C会突出显示',
    },
    data: [
      {
        title: '满意度',
        measures: [140],
        targets: [90],
        ranges: [0, 0.6, 0.9, 1],
      },
    ],
    rangeMax: 100,
    rangeColors: ['#FFB1AC', '#FFDBA2', '#B4EBBF'],
    legend: {
      custom: true,
      items: [
        {
          name: '实际进度',
          marker: {
            symbol: 'square',
            style: { fill: '#5B8FF9' },
          },
        },
        {
          name: '目标值',
          marker: {
            symbol: 'line',
            style: { stroke: '#5B8FF9' },
          },
        },
        {
          name: '差',
          marker: {
            symbol: 'square',
            style: { fill: '#FFB1AC' },
          },
        },
        {
          name: '良',
          marker: {
            symbol: 'square',
            style: { fill: '#FFDBA2' },
          },
        },
        {
          name: '优',
          marker: {
            symbol: 'square',
            style: { fill: '#B4EBBF' },
          },
        },
      ],
    },
    axis: {
      visible: true,
      formatter: (text) => text,
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 堆叠子弹图

<a href="https://antv-g2plot.gitee.io/zh/examples/bullet/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  const config = {
    data: [
      {
        title: '满意度',
        measures: [30, 40, 10, 20],
        targets: [90],
      },
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: '堆叠子弹图',
    },
    description: {
      visible: true,
      text:
        '设定子弹图的目标值(goal)和当前进度(value)\uFF0C即可展示子弹图进度情况\uFF1B若没有设置最大值(max)\uFF0C则最大值等于目标值',
    },
    legend: {
      formatter: (text) => {
        if (text === '0') {
          return '第一季度';
        } else if (text === '1') {
          return '第二季度';
        } else if (text === '2') {
          return '第三季度';
        } else if (text === '3') {
          return '第四季度';
        }
      },
    },
    label: { offset: -6 },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```
