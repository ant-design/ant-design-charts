---
title: 面积图
order: 8
---

# 面积图

## 基础面积图

<a href="https://g2plot.antv.vision/zh/examples/area/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const DemoArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/72ea027c-a7eb-404e-9c23-3761b016953c.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '基础面积图',
    },
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
  };
  return <Area {...config} />;
};

export default DemoArea;
```

## 基础面积图 - 缩略轴

<a href="https://g2plot.antv.vision/zh/examples/area/basic/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const DemoArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qRZUAgaEYC/sales.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '基础面积图 - 缩略轴',
    },
    description: {
      visible: true,
      text: '缩略轴 (slider) 交互适用于数据较多，用户希望关注数据集中某个特殊区间的场景。',
    },
    data,
    xField: '城市',
    xAxis: {
      visible: true,
      label: {
        visible: true,
        autoHide: true,
      },
    },
    yField: '销售额',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0.5,
          end: 0.55,
        },
      },
    ],
  };
  return <Area {...config} />;
};

export default DemoArea;
```

## 堆叠面积图

<a href="https://g2plot.antv.vision/zh/examples/area/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedArea } from '@ant-design/charts';

const DemoStackedArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '堆叠面积图',
    },
    data,
    xField: 'date',
    yField: 'value',
    stackField: 'country',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
    legend: {
      visible: true,
      position: 'right-top',
    },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default DemoStackedArea;
```

## 堆叠面积图-areaLabel

<a href="https://g2plot.antv.vision/zh/examples/area/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedArea } from '@ant-design/charts';

const DemoStackedArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '堆叠面积图-areaLabel',
    },
    description: {
      visible: true,
      text:
        '堆叠面积图中，将label type设置为area时，label显示在堆叠区域内，使用户能够更容易的通过视觉将label和对应图形产生联系。autoScale配置项设置为true时，label会自适应堆叠区域的大小。',
    },
    data,
    xField: 'date',
    yField: 'value',
    stackField: 'country',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
    label: {
      visible: true,
      type: 'area',
      autoScale: true,
    },
    legend: {
      visible: true,
      position: 'right-top',
    },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default DemoStackedArea;
```

## 堆叠面积图 - lineLabel

<a href="https://g2plot.antv.vision/zh/examples/area/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedArea } from '@ant-design/charts';

const DemoStackedArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: '堆叠面积图 - lineLabel',
    },
    description: {
      visible: true,
      text: '当label类型设置为line时，label与面积区域尾端顶部对齐。',
    },
    data,
    xField: 'date',
    yField: 'value',
    stackField: 'country',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
    label: {
      visible: true,
      type: 'line',
    },
    legend: {
      visible: false,
    },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default DemoStackedArea;
```

## The causes of CO2 emissions

<a href="https://g2plot.antv.vision/zh/examples/area/stacked/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { StackedArea } from '@ant-design/charts';

const DemoStackedArea: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/ih9JAwUn5y/emissions.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    title: {
      visible: true,
      text: 'The causes of CO2 emissions',
    },
    padding: 'auto',
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
    xAxis: {
      type: 'time',
      mask: 'YYYY',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default DemoStackedArea;
```

## 百分比堆叠面积图

<a href="https://g2plot.antv.vision/zh/examples/area/percent-stacked/API" target="_blank">配置</a>

```tsx
import React from 'react';
import { PercentStackedArea } from '@ant-design/charts';

const App: React.FC = () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];

  const config = {
    title: {
      visible: true,
      text: '百分比堆叠面积图',
    },
    data,
    meta: {
      year: {
        range: [0, 1],
      },
    },
    xField: 'year',
    yField: 'value',
    stackField: 'country',
  };
  return <PercentStackedArea {...config} />;
};
export default App;
```
