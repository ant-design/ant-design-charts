---
title: 折线图
order: 1
---

### 条件样式折线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 配置折线数据点样式

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 带缩略轴的折线

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 带标注点的折线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line, G2 } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      var data = cfg.data;
      var point = {
        x: cfg.x,
        y: cfg.y,
      };
      var group = container.addGroup();
      if (data.time === '14.20' && data.date === 'today') {
        var decorator1 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        var decorator2 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        var decorator3 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        decorator1.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
          },
        );
        decorator2.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
            delay: 600,
          },
        );
        decorator3.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: 'easeLinear',
            repeat: true,
            delay: 1200,
          },
        );
        group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 6,
            fill: cfg.color,
            opacity: 0.7,
          },
        });
        group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 1.5,
            fill: cfg.color,
          },
        });
      }
      return group;
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    autoFit: true,
    height: 500,
    data: data,
    meta: {
      cpu: {
        time: { type: 'cat' },
        max: 100,
        min: 0,
      },
    },
    xField: 'time',
    yField: 'cpu',
    seriesField: 'date',
    tooltip: { showMarkers: false },
    point: { shape: 'breath-point' },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 基础折线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 基础曲线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    smooth: true,
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 指定折线颜色

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 网格填充

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data.slice(data.length - 90, data.length).filter(function (item) {
      return item.category === 'Gas fuel' || item.category === 'Cement production';
    }),
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      nice: true,
      label: {
        rotate: Math.PI / 6,
        offset: 10,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        formatter: function formatter(name) {
          return name;
        },
      },
      title: {
        text: '年份',
        style: { fontSize: 16 },
      },
      line: { style: { stroke: '#aaa' } },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    yAxis: {
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
      title: {
        text: '排放量(顿)',
        style: { fontSize: 16 },
      },
      line: { style: { stroke: '#aaa' } },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    label: {
      layout: [{ type: 'hide-overlap' }],
      style: { textAlign: 'right' },
      formatter: function formatter(item) {
        return item.value;
      },
    },
    point: {
      size: 5,
      style: {
        lineWidth: 1,
        fillOpacity: 1,
      },
      shape: function shape(item) {
        if (item.category === 'Cement production') {
          return 'circle';
        }
        return 'diamond';
      },
    },
    annotations: [
      {
        type: 'line',
        start: ['0%', '10%'],
        end: ['100%', '10%'],
        top: true,
        style: {
          stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          lineWidth: 2,
        },
      },
      {
        type: 'region',
        start: ['0%', '0%'],
        end: ['20%', '10%'],
        top: true,
        style: {
          fill: '#1890ff',
          fillOpacity: 1,
          opacity: 1,
        },
      },
      {
        type: 'text',
        position: ['10%', '5%'],
        content: '二氧化碳排放量来源',
        style: {
          fill: '#fff',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
          shadowColor: '#fff',
          shadowOffsetX: 12,
          shadowOffsetY: 12,
          shadowBlur: 2,
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'Turquoise',
          lineDash: [4, 2],
        },
      },
    ],
    legend: {
      position: 'top-right',
      itemName: {
        style: { fill: '#000' },
        formatter: function formatter(name) {
          return name;
        },
      },
    },
    meta: {
      year: {
        range: [0, 1],
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多折线动画

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat((v / 1000000000).toFixed(1), ' B');
        },
      },
    },
    legend: { position: 'top' },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 二氧化碳排放量来源

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: { type: 'time' },
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 通过回调函数指定数据点样式

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var COLOR_PLATE_10 = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ];
  var container = document.getElementById('container');
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    color: COLOR_PLATE_10,
    point: {
      shape: function shape(_ref) {
        var category = _ref.category;
        return category === 'Gas fuel' ? 'square' : 'circle';
      },
      style: function style(_ref2) {
        var year = _ref2.year;
        return { r: Number(year) % 4 ? 0 : 3 };
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 通过回调函数指定折线样式

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'date',
    yField: 'value',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    seriesField: 'type',
    color: function color(_ref) {
      var type = _ref.type;
      return type === 'register' ? '#F4664A' : type === 'download' ? '#30BF78' : '#FAAD14';
    },
    lineStyle: function lineStyle(_ref2) {
      var type = _ref2.type;
      if (type === 'register') {
        return {
          lineDash: [4, 4],
          opacity: 1,
        };
      }
      return { opacity: 0.5 };
    },
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 多阶梯折线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  var data = [
    {
      month: 'Jan',
      key: 'series1',
      value: 125,
    },
    {
      month: 'Jan',
      key: 'series2',
      value: 51,
    },
    {
      month: 'Feb',
      key: 'series1',
      value: 132,
    },
    {
      month: 'Feb',
      key: 'series2',
      value: 91,
    },
    {
      month: 'Mar',
      key: 'series1',
      value: 141,
    },
    {
      month: 'Mar',
      key: 'series2',
      value: 34,
    },
    {
      month: 'Apr',
      key: 'series1',
      value: 158,
    },
    {
      month: 'Apr',
      key: 'series2',
      value: 47,
    },
    {
      month: 'May',
      key: 'series1',
      value: 133,
    },
    {
      month: 'May',
      key: 'series2',
      value: 63,
    },
    {
      month: 'June',
      key: 'series1',
      value: 143,
    },
    {
      month: 'June',
      key: 'series2',
      value: 58,
    },
    {
      month: 'July',
      key: 'series1',
      value: 176,
    },
    {
      month: 'July',
      key: 'series2',
      value: 56,
    },
    {
      month: 'Aug',
      key: 'series1',
      value: 194,
    },
    {
      month: 'Aug',
      key: 'series2',
      value: 77,
    },
    {
      month: 'Sep',
      key: 'series1',
      value: 115,
    },
    {
      month: 'Sep',
      key: 'series2',
      value: 99,
    },
    {
      month: 'Oct',
      key: 'series1',
      value: 134,
    },
    {
      month: 'Oct',
      key: 'series2',
      value: 106,
    },
    {
      month: 'Nov',
      key: 'series1',
      value: 110,
    },
    {
      month: 'Nov',
      key: 'series2',
      value: 88,
    },
    {
      month: 'Dec',
      key: 'series1',
      value: 91,
    },
    {
      month: 'Dec',
      key: 'series2',
      value: 56,
    },
  ];
  var config = {
    data: data,
    xField: 'month',
    yField: 'value',
    legend: false,
    seriesField: 'key',
    stepType: 'hvh',
  };
  return <Line {...config} />;
};

export default DemoLine;
```

### 阶梯折线图

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
    {
      year: '1999',
      value: 8,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh',
  };
  return <Line {...config} />;
};

export default DemoLine;
```
