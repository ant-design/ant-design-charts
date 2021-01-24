---
title: Dual Axes
order: 9
---

# Dual Axes

## DualAxes

### 柱线混合图表

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      time: '2019-03',
      value: 350,
      count: 800,
    },
    {
      time: '2019-04',
      value: 900,
      count: 600,
    },
    {
      time: '2019-05',
      value: 300,
      count: 400,
    },
    {
      time: '2019-06',
      value: 450,
      count: 380,
    },
    {
      time: '2019-07',
      value: 470,
      count: 220,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      { geometry: 'column' },
      {
        geometry: 'line',
        lineStyle: { lineWidth: 2 },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 柱线混合图表-显示多折线

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvData = [
    {
      time: '2019-03',
      value: 35,
    },
    {
      time: '2019-04',
      value: 90,
    },
    {
      time: '2019-05',
      value: 30,
    },
    {
      time: '2019-06',
      value: 45,
    },
    {
      time: '2019-07',
      value: 47,
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  var config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        seriesField: 'name',
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 柱线混合图表-自定义样式

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      time: '2019-03',
      value: 350,
      count: 800,
    },
    {
      time: '2019-04',
      value: 900,
      count: 600,
    },
    {
      time: '2019-05',
      value: 300,
      count: 400,
    },
    {
      time: '2019-06',
      value: 450,
      count: 380,
    },
    {
      time: '2019-07',
      value: 470,
      count: 220,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    yAxis: {
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return ''.concat(val, '个');
          },
        },
      },
      count: false,
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        columnWidthRatio: 0.4,
        label: { position: 'middle' },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
      },
    ],
    interactions: [{ type: 'element-highlight' }, { type: 'active-region' }],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 柱线混合图表-更多示例

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      time: '2020-08-20',
      consumeTime: 10868,
      completeTime: 649.483,
    },
    {
      time: '2020-08-21',
      consumeTime: 8786,
      completeTime: 1053.7,
    },
    {
      time: '2020-08-22',
      consumeTime: 10824,
      completeTime: 679.817,
    },
    {
      time: '2020-08-23',
      consumeTime: 7860,
      completeTime: 638.117,
    },
    {
      time: '2020-08-24',
      consumeTime: 13253,
      completeTime: 843.3,
    },
    {
      time: '2020-08-25',
      consumeTime: 17015,
      completeTime: 1092.983,
    },
    {
      time: '2020-08-26',
      consumeTime: 19298,
      completeTime: 1036.317,
    },
    {
      time: '2020-08-27',
      consumeTime: 13937,
      completeTime: 1031.9,
    },
    {
      time: '2020-08-28',
      consumeTime: 11541,
      completeTime: 803.467,
    },
    {
      time: '2020-08-29',
      consumeTime: 15244,
      completeTime: 830.733,
    },
    {
      time: '2020-08-30',
      consumeTime: 14247,
      completeTime: 709.867,
    },
    {
      time: '2020-08-31',
      consumeTime: 9402,
      completeTime: 665.233,
    },
    {
      time: '2020-09-01',
      consumeTime: 10440,
      completeTime: 696.367,
    },
    {
      time: '2020-09-02',
      consumeTime: 9345,
      completeTime: 692.867,
    },
    {
      time: '2020-09-03',
      consumeTime: 18459,
      completeTime: 936.017,
    },
    {
      time: '2020-09-04',
      consumeTime: 9763,
      completeTime: 782.867,
    },
    {
      time: '2020-09-05',
      consumeTime: 11074,
      completeTime: 653.8,
    },
    {
      time: '2020-09-06',
      consumeTime: 11770,
      completeTime: 856.683,
    },
    {
      time: '2020-09-07',
      consumeTime: 12206,
      completeTime: 777.15,
    },
    {
      time: '2020-09-08',
      consumeTime: 11434,
      completeTime: 773.283,
    },
    {
      time: '2020-09-09',
      consumeTime: 16218,
      completeTime: 833.3,
    },
    {
      time: '2020-09-10',
      consumeTime: 11914,
      completeTime: 793.517,
    },
    {
      time: '2020-09-11',
      consumeTime: 16781,
      completeTime: 894.45,
    },
    {
      time: '2020-09-12',
      consumeTime: 10555,
      completeTime: 725.55,
    },
    {
      time: '2020-09-13',
      consumeTime: 10899,
      completeTime: 709.967,
    },
    {
      time: '2020-09-14',
      consumeTime: 10713,
      completeTime: 787.6,
    },
    {
      time: '2020-09-15',
      consumeTime: 0,
      completeTime: 644.183,
    },
    {
      time: '2020-09-16',
      consumeTime: 0,
      completeTime: 1066.65,
    },
    {
      time: '2020-09-17',
      consumeTime: 20357,
      completeTime: 932.45,
    },
    {
      time: '2020-09-18',
      consumeTime: 10424,
      completeTime: 753.583,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'time',
    yField: ['consumeTime', 'completeTime'],
    meta: {
      consumeTime: {
        alias: '产出耗时',
        formatter: function formatter(v) {
          return Number((v / 60).toFixed(2));
        },
      },
      completeTime: {
        alias: '完成时间',
        formatter: function formatter(v) {
          return Number((v / 100).toFixed(1));
        },
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#586bce',
      },
      {
        geometry: 'line',
        color: '#29cae4',
      },
    ],
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
        autoEllipsis: false,
      },
      tickCount: data.length / 2,
    },
    yAxis: {
      consumeTime: {
        label: {
          formatter: function formatter(v) {
            return ''.concat(v, '分');
          },
        },
      },
      completeTime: {
        label: {
          formatter: function formatter(v) {
            return ''.concat(v);
          },
        },
      },
    },
    legend: {
      itemName: {
        formatter: function formatter(text, item) {
          return item.value === 'consumeTime' ? '产出耗时(分)' : '完成时间(分)';
        },
      },
    },
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 柱线混合图表-区间柱

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      time: '2019-03',
      value: [200, 350],
      count: 800,
    },
    {
      time: '2019-04',
      value: [400, 650],
      count: 600,
    },
    {
      time: '2019-05',
      value: [150, 350],
      count: 400,
    },
    {
      time: '2019-06',
      value: [100, 450],
      count: 380,
    },
    {
      time: '2019-07',
      value: [500, 550],
      count: 220,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        isRange: true,
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
        lineStyle: {
          lineWidth: 2,
          stroke: '#5AD8A6',
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 双折线图 - 自定义折线样式

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: false,
        color: '#5B8FF9',
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
        lineStyle: {
          lineWidth: 4,
          opacity: 0.5,
        },
        label: {},
        point: {
          shape: 'circle',
          size: 4,
          style: {
            opacity: 0.5,
            stroke: '#5AD8A6',
            fill: '#fff',
          },
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 双折线图

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 双折线图 - 多折线

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 双折线图 - 阶梯折线

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  var config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: false,
        color: '#29cae4',
        stepType: 'vh',
      },
      {
        geometry: 'line',
        color: '#586bce',
        smooth: true,
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 分组柱线图表-自定义样式

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
    },
    {
      time: '2019-04',
      count: 600,
    },
    {
      time: '2019-05',
      count: 400,
    },
    {
      time: '2019-06',
      count: 380,
    },
    {
      time: '2019-07',
      count: 220,
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
        label: {},
        color: ['#5B8FF9', '#5D7092'],
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'uv',
          name: 'uv',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'bill',
          name: '账单',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5D7092',
              r: 5,
            },
          },
        },
        {
          value: 'count',
          name: '数值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5AD8A6',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 分组柱线图表

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
    },
    {
      time: '2019-04',
      count: 600,
    },
    {
      time: '2019-05',
      count: 400,
    },
    {
      time: '2019-06',
      count: 380,
    },
    {
      time: '2019-07',
      count: 220,
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
        lineStyle: { lineWidth: 2 },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 分组柱线图表-显示多折线

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        lineStyle: function lineStyle(_ref) {
          var name = _ref.name;
          if (name === 'a') {
            return {
              lineDash: [1, 4],
              opacity: 1,
            };
          }
          return { opacity: 0.5 };
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 堆叠分组柱状图-折线图

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var columnData = [
    {
      name: 'London',
      month: 'Jan.',
      value: 12.9,
      type: '语文',
    },
    {
      name: 'London',
      month: 'Jan.',
      value: 10.9,
      type: '数学',
    },
    {
      name: 'London',
      month: 'Jan.',
      value: 120.9,
      type: '英语',
    },
    {
      name: 'Berlin',
      month: 'Jan.',
      value: 12.4,
      type: '美术',
    },
    {
      name: 'Berlin',
      month: 'Jan.',
      value: 12.4,
      type: '线性代数',
    },
    {
      name: 'beijing',
      month: 'Jan.',
      value: 12.4,
      type: '高数',
    },
    {
      name: 'London',
      month: 'Feb.',
      value: 2.9,
      type: '语文',
    },
    {
      name: 'London',
      month: 'Feb.',
      value: 5.9,
      type: '数学',
    },
    {
      name: 'London',
      month: 'Feb.',
      value: 10.9,
      type: '英语',
    },
    {
      name: 'Berlin',
      month: 'Feb.',
      value: 22.4,
      type: '美术',
    },
    {
      name: 'Berlin',
      month: 'Feb.',
      value: 32.4,
      type: '线性代数',
    },
    {
      name: 'beijing',
      month: 'Feb.',
      value: 42.4,
      type: '高数',
    },
    {
      name: 'London',
      month: 'Mar.',
      value: 2.9,
      type: '语文',
    },
    {
      name: 'London',
      month: 'Mar.',
      value: 5.9,
      type: '数学',
    },
    {
      name: 'Berlin',
      month: 'Mar.',
      value: 22.4,
      type: '美术',
    },
    {
      name: 'Berlin',
      month: 'Mar.',
      value: 32.4,
      type: '线性代数',
    },
    {
      name: 'beijing',
      month: 'Mar.',
      value: 42.4,
      type: '高数',
    },
  ];
  var lineData = [
    {
      name: '福老师',
      month: 'Jan.',
      value: 12.9,
      type: '美术',
    },
    {
      name: '逍老师',
      month: 'Jan.',
      value: 1.4,
      type: '线性代数',
    },
    {
      name: '新老师',
      month: 'Jan.',
      value: 2.4,
      type: '高数',
    },
    {
      name: '福老师',
      month: 'Feb.',
      value: 18.9,
      type: '美术',
    },
    {
      name: '逍老师',
      month: 'Feb.',
      value: 13.4,
      type: '线性代数',
    },
    {
      name: '新老师',
      month: 'Feb.',
      value: 15.4,
      type: '高数',
    },
    {
      name: '福老师',
      month: 'Mar.',
      value: 8.9,
      type: '美术',
    },
    {
      name: '逍老师',
      month: 'Mar.',
      value: 6.4,
      type: '线性代数',
    },
    {
      name: '新老师',
      month: 'Mar.',
      value: 5.4,
      type: '高数',
    },
  ];
  var config = {
    data: [columnData, lineData],
    xField: 'month',
    yField: ['value', 'value'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        isStack: true,
        seriesField: 'type',
        groupField: 'name',
      },
      {
        geometry: 'line',
        seriesField: 'name',
        isStack: true,
        smooth: true,
      },
    ],
    tooltip: false,
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 堆叠柱线图表-自定义样式

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes, G2 } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var registerTheme = G2.registerTheme;
  registerTheme('custom-theme', {
    colors10: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C'],
    colors20: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C', '#942D93'],
  });
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
    },
    {
      time: '2019-04',
      count: 600,
    },
    {
      time: '2019-05',
      count: 400,
    },
    {
      time: '2019-06',
      count: 380,
    },
    {
      time: '2019-07',
      count: 220,
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
        label: {},
      },
      { geometry: 'line' },
    ],
    legend: {
      marker: {
        symbol: 'circle',
        style: {
          lineWidth: 2,
          r: 6,
          stroke: '#5AD8A6',
          fill: '#fff',
        },
      },
      layout: 'vertical',
      position: 'right',
      itemName: {
        formatter: function formatter(val) {
          return '@'.concat(val);
        },
        style: { fill: '#333' },
      },
    },
    interactions: [{ type: 'element-highlight' }, { type: 'active-region' }],
    animation: false,
    theme: 'custom-theme',
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 堆叠柱线图表

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
    },
    {
      time: '2019-04',
      count: 600,
    },
    {
      time: '2019-05',
      count: 400,
    },
    {
      time: '2019-06',
      count: 380,
    },
    {
      time: '2019-07',
      count: 220,
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'type',
      },
      { geometry: 'line' },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 堆叠柱线图表-显示多折线

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        lineStyle: function lineStyle(_ref) {
          var name = _ref.name;
          if (name === 'a') {
            return {
              lineDash: [1, 4],
              opacity: 1,
            };
          }
          return { opacity: 0.5 };
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```

### 百分比堆叠柱线图表

```tsx
import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
    },
    {
      time: '2019-04',
      count: 600,
    },
    {
      time: '2019-05',
      count: 400,
    },
    {
      time: '2019-06',
      count: 380,
    },
    {
      time: '2019-07',
      count: 220,
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        isPercent: true,
        seriesField: 'type',
      },
      { geometry: 'line' },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
```
