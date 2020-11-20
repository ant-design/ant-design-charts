---
title: 热力图
order: 16
---

# 热力图

## Heatmap

### 热力图

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    width: 650,
    height: 500,
    autoFit: false,
    data: data,
    xField: 'Month of Year',
    yField: 'District',
    colorField: 'AQHI',
    color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
    meta: { 'Month of Year': { type: 'cat' } },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```

### 日历热力图

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap, G2 } from '@ant-design/charts';

const DemoHeatmap: React.FC = () => {
  G2.registerShape('polygon', 'boundary-polygon', {
    draw: function draw(cfg, container) {
      var group = container.addGroup();
      var attrs = {
        stroke: '#fff',
        lineWidth: 1,
        fill: cfg.color,
        paht: [],
      };
      var points = cfg.points;
      var path = [
        ['M', points[0].x, points[0].y],
        ['L', points[1].x, points[1].y],
        ['L', points[2].x, points[2].y],
        ['L', points[3].x, points[3].y],
        ['Z'],
      ];
      attrs.path = this.parsePath(path);
      group.addShape('path', { attrs: attrs });
      if (cfg.data.lastWeek) {
        var linePath = [
          ['M', points[2].x, points[2].y],
          ['L', points[3].x, points[3].y],
        ];
        group.addShape('path', {
          attrs: {
            path: this.parsePath(linePath),
            lineWidth: 4,
            stroke: '#404040',
          },
        });
        if (cfg.data.lastDay) {
          group.addShape('path', {
            attrs: {
              path: this.parsePath([
                ['M', points[1].x, points[1].y],
                ['L', points[2].x, points[2].y],
              ]),
              lineWidth: 4,
              stroke: '#404040',
            },
          });
        }
      }
      return group;
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/github-commit.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: [150, 30, 150, 70],
    xField: 'week',
    yField: 'day',
    colorField: 'commits',
    color: '#BAE7FF-#1890FF-#0050B3',
    reflect: 'y',
    shape: 'boundary-polygon',
    meta: {
      day: {
        type: 'cat',
        values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      },
      week: { type: 'cat' },
      commits: { sync: true },
      date: { type: 'cat' },
    },
    yAxis: { grid: null },
    tooltip: {
      title: 'date',
      showMarkers: false,
    },
    interactions: [{ type: 'element-active' }],
    xAxis: {
      position: 'top',
      tickLine: null,
      line: null,
      label: {
        offset: 12,
        style: {
          fontSize: 12,
          fill: '#666',
          textBaseline: 'top',
        },
        formatter: function formatter(val) {
          if (val === '2') {
            return 'MAY';
          } else if (val === '6') {
            return 'JUN';
          } else if (val === '10') {
            return 'JUL';
          } else if (val === '15') {
            return 'AUG';
          } else if (val === '19') {
            return 'SEP';
          } else if (val === '24') {
            return 'OCT';
          }
          return '';
        },
      },
    },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```

### 热力形状图

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'name',
    yField: 'country',
    colorField: 'value',
    shape: 'circle',
    sizeRatio: 0.5,
    color: ['#0d5fbb', '#7eadfc', '#fd8b6f', '#aa3523'],
    label: {
      offset: -2,
      style: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
      },
    },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```

### 热力形状大小映射

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'name',
    yField: 'country',
    colorField: 'value',
    sizeField: 'value',
    shape: 'square',
    color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
    label: {
      offset: -2,
      style: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
      },
    },
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```

### 密度热力图

```tsx
import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/charts';

const DemoHeatmap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/heatmap.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    type: 'density',
    xField: 'g',
    yField: 'l',
    colorField: 'tmp',
    color: '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2',
    annotations: [
      {
        type: 'image',
        start: ['min', 'max'],
        end: ['max', 'min'],
        src: 'https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png',
      },
    ],
  };
  return <Heatmap {...config} />;
};

export default DemoHeatmap;
```
