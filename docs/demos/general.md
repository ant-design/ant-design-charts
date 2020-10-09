---
title: 辅助标记
order: 20
---

# 辅助标记

## General

### 图片标注

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-0.68',
      content: '{percentage}',
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
    statistic: null,
    annotations: [
      {
        type: 'image',
        src:
          'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',
        position: ['50%', '50%'],
        style: {
          width: 100,
          height: 100,
        },
        offsetX: -50,
        offsetY: 70,
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoGeneral;
```

### 辅助线标注

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
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
  const maxValue = Math.max(...data.map((d) => d.scales));
  const averageValue = data.map((d) => d.scales).reduce((a, b) => a + b, 0) / data.length;
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    smooth: true,
    annotations: [
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        text: {
          content: '中位线',
          position: 'right',
          offsetY: 18,
          style: { textAlign: 'right' },
        },
        style: {
          lineDash: [4, 4],
        },
      },
      {
        type: 'line',
        start: ['min', maxValue],
        end: ['max', maxValue],
        text: {
          content: '最大值',
          position: 'right',
          offsetY: 18,
          style: { textAlign: 'right' },
        },
        style: {
          lineDash: [4, 4],
        },
      },
      {
        type: 'line',
        start: ['min', averageValue],
        end: ['max', averageValue],
        text: {
          content: '平均值线',
          position: 'right',
          offsetY: -6,
          style: {
            textAlign: 'right',
            fill: 'lightblue',
          },
        },
        style: {
          lineDash: [4, 4],
          stroke: 'lightblue',
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoGeneral;
```

### 辅助线标注（精确定位）

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const [data, setData] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const ref = useRef();
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

  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    meta: {
      date: {
        formatter: (v) => (v && v.split(' ') ? v?.split(' ')[1] : ''),
      },
      value: {
        min: 0,
        max: Math.pow(10, 7),
        tickCount: 10,
        formatter: (v) => `${v / Math.pow(10, 6)}M`,
      },
    },
    lineStyle: {
      lineCap: 'round',
    },
    annotations,
  };

  useEffect(() => {
    if (ref.current && data.length) {
      const line = ref.current;
      const yScale = line.chart.getScaleByField('value');
      const coordinate = line.chart.getCoordinate();
      const getDimYPosition = (value) => coordinate.convertDim(yScale.scale(value), 'y');
      line.update({
        ...line.options,
        annotations: [
          {
            type: 'line',
            start: { date: 'January 1991', value: 2549000 },
            end: ['August 1990', 3850000],
            text: {
              // 旅游萧条 标注
              content: 'The UK recession of 1991',
              rotate: 0,
              autoRotate: false,
              offsetY: getDimYPosition(3850000) - getDimYPosition(2549000) - 10,
              style: {
                textAlign: 'center',
                textBaseline: 'bottom',
              },
            },
            style: {
              stroke: '#000',
              lineDash: [2, 4],
            },
          },
        ],
      });
    }
  }, [data]);

  return <Line {...config} chartRef={ref} />;
};

export default DemoGeneral;
```

### 辅助框标注 和 数据点标记

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const data = [
    {
      month: '1',
      value: 1078,
    },
    {
      month: '2',
      value: 1216,
    },
    {
      month: '3',
      value: 758,
    },
    {
      month: '4',
      value: 623,
    },
    {
      month: '5',
      value: 319,
    },
    {
      month: '6',
      value: 422,
    },
    {
      month: '7',
      value: -4,
    },
    {
      month: '8',
      value: -217,
    },
    {
      month: '9',
      value: -358,
    },
    {
      month: '10',
      value: 1513,
    },
    {
      month: '11',
      value: 1388,
    },
    {
      month: '12',
      value: 597,
    },
  ];
  const config = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000,
      },
      month: { formatter: (val) => `${val} 月` },
    },
    annotations: [
      {
        type: 'region',
        start: ['7', 'min'],
        end: ['9', 'max'],
      },
      {
        type: 'dataMarker',
        position: ['2', 1216],
        text: {
          content: '2月份因逢春节水产销售需求旺盛\uFF0C\n需求大增',
          style: { textAlign: 'left' },
        },
        line: { length: 20 },
        point: {
          style: {
            fill: '#f5222d',
            stroke: '#f5222d',
          },
        },
        autoAdjust: false,
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoGeneral;
```

### 辅助框标注

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const data = [
    { month: '1', value: 1078 },
    { month: '2', value: 1216 },
    { month: '3', value: 758 },
    { month: '4', value: 623 },
    { month: '5', value: 319 },
    { month: '6', value: 422 },
    { month: '7', value: -4 },
    { month: '8', value: -217 },
    { month: '9', value: -358 },
    { month: '10', value: 1513 },
    { month: '11', value: 1388 },
    { month: '12', value: 597 },
  ];
  const config = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000,
      },
      month: {
        formatter: (val) => `${val} 月`,
      },
    },
    annotations: [
      {
        type: 'region',
        // @ts-ignore todo 修复 G2 类型定义
        start: (xScale: any) => {
          const ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          const x = xScale.scale('7') - ratio / 2;
          return [`${x * 100}%`, '0%'];
        },
        // @ts-ignore todo 修复 G2 类型定义
        end: (xScale: any) => {
          const ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          const x = xScale.scale('9') + ratio / 2;
          return [`${x * 100}%`, '100%'];
        },
      },
    ],
  };
  return <Column {...config} />;
};

export default DemoGeneral;
```

### 自定义设置状态样式

```tsx
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'outer' },
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    interactions: [{ type: 'element-single-selected' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoGeneral;
```

### 设置状态

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Pie } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const ref = useRef();
  const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
    },
    // 自定义状态样式
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    // 添加 element 选中和激活交互
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.setState('selected', (data) => data.type === '分类一' || data.type === '分类二');
    }
  }, []);
  return <Pie {...config} chartRef={ref} />;
};

export default DemoGeneral;
```

### 暗黑主题

```tsx
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
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
  const config = {
    data,
    padding: 'auto',
    appendPadding: [10, 10, 5, 10],
    theme: 'dark',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
  };
  return <Line {...config} />;
};

export default DemoGeneral;
```

### 自定义样式

```tsx
import React, { useState, useEffect } from 'react';
import { Pie, G2 } from '@ant-design/charts';

const DemoGeneral: React.FC = () => {
  const { registerTheme } = G2;
  registerTheme('custom-theme', {
    colors10: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C'],
    colors20: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C', '#942D93'],
  });
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {},
    interactions: [{ type: 'element-active' }],
    theme: 'custom-theme',
  };
  return <Pie {...config} />;
};

export default DemoGeneral;
```
