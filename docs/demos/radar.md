---
title: Radar
order: 20
---

### 基础雷达图

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';

const DemoRadar: React.FC = () => {
  const data = [
    { name: 'G2', star: 10178 },
    { name: 'G6', star: 7077 },
    { name: 'F2', star: 7345 },
    { name: 'L7', star: 2029 },
    { name: 'X6', star: 298 },
    { name: 'AVA', star: 806 },
  ];
  const config = {
    data: data.map((d) => ({ ...d, star: Math.log(d.star).toFixed(2) })),
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        alias: '分数',
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
    area: {},
  };
  return <Radar {...config} />;
};

export default DemoRadar;
```

### 基础雷达图（带底色）

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/bda695a8-cd9f-4b78-a423-3d6d547c10c3.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const { DataView } = DataSet;
  const dv = new DataView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['a', 'b'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });

  const config = {
    data: dv.rows,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
  };

  return <Radar {...config} />;
};

export default DemoRadar;
```

### 基础雷达图(带网格)

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/bda695a8-cd9f-4b78-a423-3d6d547c10c3.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const { DataView } = DataSet;
  const dv = new DataView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['a', 'b'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });

  const config = {
    data: dv.rows,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    // 开启辅助点
    point: {},
  };

  return <Radar {...config} />;
};

export default DemoRadar;
```

### 雷达图（面-带底色）

```tsx
import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoRadar: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/bda695a8-cd9f-4b78-a423-3d6d547c10c3.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const { DataView } = DataSet;
  const dv = new DataView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['a', 'b'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });

  const config = {
    data: dv.rows,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
      },
    },
    // 开启面积
    area: {},
    // 开启辅助点
    point: {},
  };

  return <Radar {...config} />;
};

export default DemoRadar;
```
