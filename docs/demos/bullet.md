---
title: 子弹图
order: 12
---

### 基础子弹图-水平方向

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  var data = [
    {
      title: '满意度',
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];
  var config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    xAxis: { line: null },
    yAxis: {
      tickMethod: function tickMethod(_ref) {
        var max = _ref.max;
        var interval = Math.ceil(max / 5);
        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      },
    },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '实际值',
          name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 基础子弹图-带多颜色范围区间

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  var data = [
    {
      title: '满意度',
      ranges: [40, 70, 100],
      measures: [80],
      target: 85,
    },
  ];
  var config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4',
    },
    xAxis: { line: null },
    yAxis: false,
    label: { target: true },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: '良',
          name: '良',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: '优',
          name: '优',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: '实际值',
          name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#39a3f4',
              r: 5,
            },
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

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  var data = [
    {
      title: '重庆',
      ranges: [30, 90, 120],
      measures: [65],
      target: 80,
    },
    {
      title: '杭州',
      ranges: [30, 90, 120],
      measures: [50],
      target: 100,
    },
    {
      title: '广州',
      ranges: [30, 90, 120],
      measures: [40],
      target: 85,
    },
    {
      title: '深圳',
      ranges: [30, 90, 120],
      measures: [50],
      target: 100,
    },
  ];
  var config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4',
    },
    label: {
      measure: {
        position: 'middle',
        style: { fill: '#fff' },
      },
    },
    xAxis: { line: null },
    yAxis: false,
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: '良',
          name: '良',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: '优',
          name: '优',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: '实际值',
          name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#39a3f4',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 基础子弹图-垂直方向

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  var data = [
    {
      title: '满意度',
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];
  var config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    xAxis: { line: null },
    yAxis: false,
    layout: 'vertical',
    label: {
      measure: {
        position: 'middle',
        style: { fill: '#fff' },
      },
    },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '实际值',
          name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```

### 堆叠子弹图

```tsx
import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';

const DemoBullet: React.FC = () => {
  var data = [
    {
      title: '满意度',
      ranges: [40, 70, 100],
      measures: [30, 50],
      target: 85,
    },
  ];
  var config = {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: ['#5B8FF9', '#61DDAA'],
      target: '#39a3f4',
    },
    label: {
      measure: {
        position: 'middle',
        style: { fill: '#fff' },
      },
    },
    xAxis: { line: null },
    yAxis: false,
    tooltip: {
      showMarkers: false,
      shared: true,
    },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: '良',
          name: '良',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: '优',
          name: '优',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: '第一季度',
          name: '第一季度',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '第二季度',
          name: '第二季度',
          marker: {
            symbol: 'square',
            style: {
              fill: ' #61DDAA',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#39a3f4',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default DemoBullet;
```
