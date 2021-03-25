---
title: Scatter
order: 25
---
### 散点图颜色映射

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 10,
    data: data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      min: -100,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### Scatter-自定义图形

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter, G2 } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  G2.registerShape('point', 'custom-shape', {
    draw(cfg, group) {
      const cx = cfg.x;
      const cy = cfg.y;
      const radius = cfg.size || 5;
      const polygon = group.addShape('path', {
        attrs: {
          path: [
            ['M', cx - radius, cy - radius],
            ['L', cx + radius, cy - radius],
            ['L', cx, cy + radius],
            ['Z'],
          ],
          ...cfg.defaultStyle,
          ...cfg.style,
        },
      });
      return polygon;
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    shape: 'custom-shape',
    pointStyle: { lineWidth: 2 },
    size: 6,
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    tooltip: { showMarkers: false },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    label: {},
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### 散点图图形标签

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    colorField: 'Result',
    color: ['#c71e1d', '#ffca76', '#09bb9f'],
    size: 5,
    shape: 'circle',
    pointStyle: { fillOpacity: 1 },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    label: {},
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### Scatter-回归线

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  var data = [
    {
      x: 1,
      y: 4.181,
    },
    {
      x: 2,
      y: 4.665,
    },
    {
      x: 3,
      y: 5.296,
    },
    {
      x: 4,
      y: 5.365,
    },
    {
      x: 5,
      y: 5.448,
    },
    {
      x: 6,
      y: 5.744,
    },
    {
      x: 7,
      y: 5.653,
    },
    {
      x: 8,
      y: 5.844,
    },
    {
      x: 9,
      y: 6.362,
    },
    {
      x: 10,
      y: 6.38,
    },
    {
      x: 11,
      y: 6.311,
    },
    {
      x: 12,
      y: 6.457,
    },
    {
      x: 13,
      y: 6.479,
    },
    {
      x: 14,
      y: 6.59,
    },
    {
      x: 15,
      y: 6.74,
    },
    {
      x: 16,
      y: 6.58,
    },
    {
      x: 17,
      y: 6.852,
    },
    {
      x: 18,
      y: 6.531,
    },
    {
      x: 19,
      y: 6.682,
    },
    {
      x: 20,
      y: 7.013,
    },
    {
      x: 21,
      y: 6.82,
    },
    {
      x: 22,
      y: 6.647,
    },
    {
      x: 23,
      y: 6.951,
    },
    {
      x: 24,
      y: 7.121,
    },
    {
      x: 25,
      y: 7.143,
    },
    {
      x: 26,
      y: 6.914,
    },
    {
      x: 27,
      y: 6.941,
    },
    {
      x: 28,
      y: 7.226,
    },
    {
      x: 29,
      y: 6.898,
    },
    {
      x: 30,
      y: 7.392,
    },
    {
      x: 31,
      y: 6.938,
    },
  ];
  var config = {
    data: data,
    xField: 'x',
    yField: 'y',
    size: 5,
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9',
    },
    regressionLine: { type: 'quad' },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### Scatter-自定义 tooltip

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  var data = [
    {
      city: '上海',
      搜索UV: 1.5,
      端DAU: 6,
      搜索DAU渗透率: 3,
    },
    {
      city: '台北',
      搜索UV: 2,
      端DAU: 5,
      搜索DAU渗透率: 13,
    },
    {
      city: '北京',
      搜索UV: 7,
      端DAU: 3.6,
      搜索DAU渗透率: 16,
    },
    {
      city: '济南',
      搜索UV: 5,
      端DAU: 5,
      搜索DAU渗透率: 16,
    },
    {
      city: '青岛',
      搜索UV: 2,
      端DAU: 1,
      搜索DAU渗透率: 19,
    },
    {
      city: '杭州',
      搜索UV: 7,
      端DAU: 2,
      搜索DAU渗透率: 90,
    },
    {
      city: '广东',
      搜索UV: 7.4,
      端DAU: 1.5,
      搜索DAU渗透率: 30,
    },
    {
      city: '无锡',
      搜索UV: 1,
      端DAU: 1,
      搜索DAU渗透率: 34,
    },
    {
      city: '重庆',
      搜索UV: 7,
      端DAU: 5,
      搜索DAU渗透率: 46,
    },
    {
      city: '成都',
      搜索UV: 3.4,
      端DAU: 2.3,
      搜索DAU渗透率: 49,
    },
    {
      city: '哈尔滨',
      搜索UV: 0.5,
      端DAU: 6.5,
      搜索DAU渗透率: 51,
    },
    {
      city: '内蒙古',
      搜索UV: 2.5,
      端DAU: 5,
      搜索DAU渗透率: 51,
    },
    {
      city: '云南',
      搜索UV: 1,
      端DAU: 5,
      搜索DAU渗透率: 53,
    },
    {
      city: '河北',
      搜索UV: 6,
      端DAU: 5,
      搜索DAU渗透率: 57,
    },
    {
      city: '陕西',
      搜索UV: 2,
      端DAU: 3,
      搜索DAU渗透率: 57,
    },
    {
      city: '苏州',
      搜索UV: 3,
      端DAU: 4.6,
      搜索DAU渗透率: 65,
    },
    {
      city: '四川',
      搜索UV: 6,
      端DAU: 7,
      搜索DAU渗透率: 68,
    },
    {
      city: '贵阳',
      搜索UV: 5,
      端DAU: 3.4,
      搜索DAU渗透率: 68,
    },
    {
      city: '台湾',
      搜索UV: 5,
      端DAU: 2,
      搜索DAU渗透率: 69,
    },
    {
      city: '哈尔滨',
      搜索UV: 2,
      端DAU: 7,
      搜索DAU渗透率: 78,
    },
    {
      city: '天津',
      搜索UV: 4.4,
      端DAU: 5,
      搜索DAU渗透率: 45,
    },
    {
      city: '长沙',
      搜索UV: 3.4,
      端DAU: 7,
      搜索DAU渗透率: 29,
    },
    {
      city: '沧州',
      搜索UV: 3,
      端DAU: 1,
      搜索DAU渗透率: 94,
    },
    {
      city: '宁波',
      搜索UV: 6,
      端DAU: 3,
      搜索DAU渗透率: 99,
    },
  ];
  var config = {
    width: 800,
    height: 400,
    autoFit: false,
    appendPadding: 16,
    data: data,
    xField: '搜索UV',
    yField: '端DAU',
    sizeField: '搜索DAU渗透率',
    size: [12, 30],
    shape: 'circle',
    pointStyle: {
      fill: '#D6E3FD',
      fillOpacity: 0.6,
      stroke: '#6d9bf9',
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
      fields: ['搜索UV', '端DAU', '搜索DAU渗透率'],
      customContent: function customContent(title, items) {
        var _field$data;
        var field = items === null || items === void 0 ? void 0 : items[0];
        var formatterInfo = {
          搜索UV: function UV(value) {
            return value + '万';
          },
          端DAU: function DAU(value) {
            return value + '万';
          },
          搜索DAU渗透率: function DAU() {
            return '%';
          },
        };
        var htmlStr = '<div style="margin:10px 0;font-weight:700;">'.concat(
          field === null || field === void 0
            ? void 0
            : (_field$data = field.data) === null || _field$data === void 0
            ? void 0
            : _field$data.city,
          '</div><div class="g2-tooltip-items">',
        );
        items.forEach(function (item) {
          htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">\n                <span class="g2-tooltip-item-label" style="margin-right: 12px;">'
            .concat(item.name, '</span>\n                <span class="g2-tooltip-item-value">')
            .concat(
              item.value + formatterInfo[item.name](item.value),
              '</span>\n              </div>',
            );
        });
        htmlStr += '</div>';
        return htmlStr;
      },
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      label: {
        formatter: function formatter(v) {
          return v !== '0' ? v + '%' : v;
        },
      },
      line: null,
    },
    label: {
      formatter: function formatter(item) {
        return item.city;
      },
      offsetY: 12,
      style: {
        fontSize: 12,
        fill: 'rgba(0,0,0,0.85)',
      },
    },
    yAxis: {
      min: 0,
      line: null,
      label: {
        formatter: function formatter(v) {
          return v !== '0' ? v + '%' : v;
        },
      },
    },
    annotations: [
      {
        type: 'text',
        position: [4, 8],
        content: '搜索DAU渗透率',
        offsetY: -8,
        style: {
          fontSize: 12,
          textAlign: 'center',
        },
      },
      {
        type: 'text',
        position: [8, 4],
        content: '搜索DAU渗透率',
        rotate: Math.PI / 2,
        offsetY: -40,
        offsetX: 8,
        style: { fontSize: 12 },
      },
      {
        type: 'region',
        start: [7, 7],
        end: [7.8, 7.8],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: 'region',
        start: [0.2, 7],
        end: [1, 7.8],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: 'region',
        start: [7, 0.2],
        end: [7.8, 1],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
    ],
    quadrant: {
      xBaseline: 4,
      yBaseline: 4,
      lineStyle: {
        lineDash: [4, 2],
        lineWidth: 2,
      },
      regionStyle: [
        {
          fill: '#5bd8a6',
          fillOpacity: 0.1,
        },
        {
          fill: '#667796',
          fillOpacity: 0.1,
        },
        { fill: '#fff' },
        {
          fill: '#f7664e',
          fillOpacity: 0.1,
        },
      ],
      labels: [
        {
          content: '热门市场',
          position: [7.2, 7],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        {
          content: '潜力市场',
          position: [0.2, 7],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        { content: '' },
        {
          content: '提频市场',
          position: [7.2, 1],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
      ],
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### Scatter-气泡四象限

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    size: [4, 30],
    shape: 'circle',
    pointStyle: {
      fillOpacity: 0.8,
      stroke: '#bbb',
    },
    xAxis: {
      min: -25,
      max: 5,
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    yAxis: { line: { style: { stroke: '#aaa' } } },
    quadrant: {
      xBaseline: 0,
      yBaseline: 0,
      labels: [
        { content: 'Male decrease,\nfemale increase' },
        { content: 'Female decrease,\nmale increase' },
        { content: 'Female & male decrease' },
        { content: 'Female &\n male increase' },
      ],
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
### Scatter-右侧坐标轴

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/f950b2f1-038b-47c2-afcc-63001bc8d07c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var processData = data.map(function (item) {
    item['Average annual wage'] = item['Average annual wage'] * 1;
    item['probability'] = item['probability'] * 1;
    item['numbEmployed'] = item['numbEmployed'] * 1;
    return item;
  });
  var labels = ['Airline Pilots, Copilots and Flight Engineers', 'Benefits Managers'];
  var config = {
    appendPadding: 30,
    data: processData,
    xField: 'probability',
    yField: 'Average annual wage',
    colorField: 'education',
    size: [2, 16],
    sizeField: 'numbEmployed',
    shape: 'circle',
    yAxis: {
      nice: false,
      min: -20000,
      tickCount: 5,
      position: 'right',
      label: {
        formatter: function formatter(value) {
          return Math.floor(value / 1000) + 'K';
        },
      },
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    tooltip: {
      fields: ['probability', 'Average annual wage', 'numbEmployed'],
    },
    legend: { position: 'top' },
    xAxis: {
      min: -0.04,
      max: 1.04,
      nice: false,
      grid: { line: { style: { stroke: '#eee' } } },
      line: false,
      label: false,
    },
    label: {
      formatter: function formatter(item) {
        return labels.includes(item['short occupation']) ? item['short occupation'] : '';
      },
      offsetY: -10,
    },
    annotations: [
      {
        type: 'line',
        start: [-0.04, 100000],
        end: [1.04, 30000],
        style: { stroke: '#aaa' },
      },
      {
        type: 'text',
        position: ['1.03', 'max'],
        content: 'Average annual wage',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
      {
        type: 'text',
        position: ['1.03', 'min'],
        content: 'Most likely to \nbe automated ',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
      {
        type: 'text',
        position: ['-0.03', 'min'],
        content: 'Least likely to \nbe automated ',
        style: {
          textAlign: 'left',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)',
        },
      },
    ],
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
