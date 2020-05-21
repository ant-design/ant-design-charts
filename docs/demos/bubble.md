---
title: 气泡图
order: 43
---

# 气泡图

## Bubble

###

<a href="https://antv-g2plot.gitee.io/zh/examples/bubble/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/XMCQ4qsuPa/smoking-rate.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    xAxis: {
      visible: true,
      max: 5,
      min: -25,
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```

###

<a href="https://antv-g2plot.gitee.io/zh/examples/bubble/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/XMCQ4qsuPa/smoking-rate.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'change in female rate',
    yField: 'change in male rate',
    sizeField: 'pop',
    pointSize: [4, 30],
    colorField: 'continent',
    color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.8,
    },
    xAxis: {
      visble: true,
      max: 5,
      min: -25,
    },
    quadrant: {
      visible: true,
      xBaseline: 0,
      yBaseline: 0,
      regionStyle: [
        {
          fill: '#d8d0c0',
          opacity: 0.2,
        },
        {
          fill: '#a3dda1',
          opacity: 0.1,
        },
        {
          fill: 'white',
          opacity: 0,
        },
        {
          fill: '#d8d0c0',
          opacity: 0.2,
        },
      ],
      label: {
        text: [
          'Female decrease,\nmale increase',
          'Female & male decrease',
          'Female &\n male increase',
          'Male decrease,\nfemale increase',
        ],
      },
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```

### 人均寿命

<a href="https://antv-g2plot.gitee.io/zh/examples/bubble/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/t3t9L%26nZ5p/life-expectancy.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'income',
    yField: 'lifeExpectancy',
    colorField: 'country',
    sizeField: 'population',
    pointSize: [4, 80],
    color: [
      '#5B8FF9',
      '#5AD8A6',
      '#f03838',
      '#35d1d1',
      '#E8684A',
      '#6DC8EC',
      '#9270CA',
      '#FF9D4D',
      '#F6BD16',
      '#FF99C3',
    ],
    forceFit: true,
    xAxis: {
      visible: true,
      label: {
        formatter: (value) => {
          return `$ ${value}`;
        },
      },
      title: {
        visible: true,
        text: '人均收入',
      },
      max: 100000,
      min: 300,
      nice: false,
      type: 'log',
    },
    yAxis: {
      visible: true,
      label: {
        formatter: (value) => {
          return `${value} 岁`;
        },
      },
      title: {
        visible: true,
        text: '人均寿命',
      },
      min: 0,
      max: 100,
    },
    tooltip: {
      visible: true,
      showTitle: true,
      titleField: 'country',
      fields: ['income', 'lifeExpectancy', 'population'],
    },
    legend: { visible: false },
    label: {
      visible: true,
      field: 'country',
    },
    interactions: [
      {
        type: 'timeline',
        cfg: {
          field: 'year',
          key: 'country',
          loop: true,
        },
      },
    ],
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```

###

<a href="https://antv-g2plot.gitee.io/zh/examples/bubble/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Bubble } from '@ant-design/charts';

const DemoBubble: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/71YajFg3XZ/revenue.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Revenue per club[\u20AC m]',
    yField: 'UEFA points*',
    sizeField: 'UEFA points*',
    pointSize: [4, 25],
    colorField: 'revenueGroup',
    color: ['#72302f', '#beb298', '#d18768', '#e3cda1'],
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      opacity: 0.9,
    },
    xAxis: {
      visible: true,
      min: -5,
      max: 230,
      nice: false,
    },
    trendline: {
      visible: true,
      type: 'log',
    },
  };
  return <Bubble {...config} />;
};

export default DemoBubble;
```
