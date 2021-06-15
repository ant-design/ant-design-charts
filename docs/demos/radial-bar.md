---
title: 玉珏图
order: 21
---

### 健身: 活动记录

```tsx
import React, { useState, useEffect } from 'react';
import { RadialBar } from '@ant-design/charts';

const DemoRadialBar: React.FC = () => {
  var data = [
    {
      name: 'activity1',
      percent: 2370,
      color: '#1ad5de',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
    },
    {
      name: 'activity2',
      percent: 800,
      color: '#a0ff03',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
    },
    {
      name: 'activity3',
      percent: 650,
      color: '#e90b3a',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
    },
  ];
  var config = {
    width: 400,
    height: 244,
    autoFit: false,
    appendPadding: [50, 0, 50, 0],
    data: data,
    xField: 'name',
    yField: 'percent',
    radius: 0.8,
    innerRadius: 0.2,
    xAxis: false,
    theme: 'dark',
    barBackground: { style: { fill: 'rgba(255,255,255,0.45)' } },
    barStyle: { lineCap: 'round' },
    minBarWidth: 16,
    maxBarWidth: 16,
    colorField: 'name',
    color: function color(_ref) {
      var name = _ref.name;
      return data.find(function (d) {
        return d.name === name;
      }).color;
    },
    annotations: data.map(function (d) {
      return {
        type: 'html',
        position: [d.name, 0],
        html: '<div style="width:11px;height:11px;transform:translate(-50%, -50%)">\n      <img\n        style="width:11px;height:11px;display: block;"\n        src="'.concat(
          d.icon,
          '"\n        alt=""\n      />\n    </div>',
        ),
      };
    }),
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```

### 带柱子背景的玉珏图

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
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 350,
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
        return '#6349ec';
      } else if (star > 1000) {
        return '#ff9300';
      }
      return '#ff93a7';
    },
    barBackground: {},
    barStyle: { lineCap: 'round' },
    annotations: [
      {
        type: 'html',
        position: ['50%', '50%'],
        html: function html(container, view) {
          var coord = view.getCoordinate();
          var w = coord.polarRadius * coord.innerRadius * 1.15;
          return '<div style="transform:translate(-50%,-46%)">\n          <img width="'
            .concat((w / 203) * 231, '" height="')
            .concat(
              w,
              '" alt="" src="https://gw.alipayobjects.com/zos/antfincdn/zrh%24J08soH/AntV%252520LOGO%2525202.png">\n        </div>',
            );
        },
      },
    ],
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```

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

### 带自定义颜色的玉珏图

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
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
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
        return '#36c361';
      } else if (star > 1000) {
        return '#2194ff';
      }
      return '#ff4d4f';
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
    data: data,
    xField: 'term',
    yField: 'count',
    radius: 1,
    innerRadius: 0.4,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 2.5,
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

### 带圆角的玉珏图

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
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
    radius: 0.8,
    innerRadius: 0.2,
    barStyle: { lineCap: 'round' },
  };
  return <RadialBar {...config} />;
};

export default DemoRadialBar;
```
