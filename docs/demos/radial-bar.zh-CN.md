---
title: 玉珏图
order: 23
---

### 玉珏图

```tsx
import React, { useState, useEffect } from 'react';
import { RadialBar } from '@ant-design/charts';

const DemoRadialBar: React.FC = () => {
  var data = [
    {
      name: 'X6',
      star: 297,
    },
    {
      name: 'G',
      star: 506,
    },
    {
      name: 'AVA',
      star: 805,
    },
    {
      name: 'G2Plot',
      star: 1478,
    },
    {
      name: 'L7',
      star: 2029,
    },
    {
      name: 'G6',
      star: 7100,
    },
    {
      name: 'F2',
      star: 7346,
    },
    {
      name: 'G2',
      star: 10178,
    },
  ];
  var config = {
    width: 400,
    height: 300,
    data: data,
    xField: 'name',
    yField: 'star',
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: 'star数',
          value: datum.star,
        };
      },
    },
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```

### 玉珏图 - 自定义颜色

```tsx
import React, { useState, useEffect } from 'react';
import { RadialBar } from '@ant-design/charts';

const DemoRadialBar: React.FC = () => {
  var data = [
    {
      name: 'X6',
      star: 297,
    },
    {
      name: 'G',
      star: 506,
    },
    {
      name: 'AVA',
      star: 805,
    },
    {
      name: 'G2Plot',
      star: 1478,
    },
    {
      name: 'L7',
      star: 2029,
    },
    {
      name: 'G6',
      star: 7100,
    },
    {
      name: 'F2',
      star: 7346,
    },
    {
      name: 'G2',
      star: 10178,
    },
  ];
  var config = {
    width: 400,
    height: 300,
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 360,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: 'star数',
          value: datum.star,
        };
      },
    },
    colorField: 'star',
    color: function color(_ref) {
      var star = _ref.star;
      if (star > 10000) {
        return 'red';
      } else if (star > 1000) {
        return 'orange';
      }
      return 'green';
    },
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```

### 线形玉珏图

```tsx
import React, { useState, useEffect } from 'react';
import { RadialBar } from '@ant-design/charts';

const DemoRadialBar: React.FC = () => {
  var data = [
    {
      term: 'Zombieland',
      count: 9,
    },
    {
      term: 'Wieners',
      count: 8,
    },
    {
      term: 'Toy Story',
      count: 8,
    },
    {
      term: 'trashkannon',
      count: 7,
    },
    {
      term: 'the GROWLERS',
      count: 6,
    },
    {
      term: 'mudweiser',
      count: 6,
    },
    {
      term: 'ThunderCats',
      count: 4,
    },
    {
      term: 'The Taqwacores - Motion Picture',
      count: 4,
    },
    {
      term: 'The Shawshank Redemption',
      count: 2,
    },
    {
      term: 'The Olivia Experiment',
      count: 1,
    },
  ];
  var config = {
    width: 400,
    height: 300,
    data: data,
    xField: 'term',
    yField: 'count',
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: { showMarkers: true },
    type: 'line',
    annotations: [
      {
        type: 'text',
        position: ['50%', '50%'],
        content: 'Music',
        style: {
          textAlign: 'center',
          fontSize: 24,
        },
      },
    ],
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```
