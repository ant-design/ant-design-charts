---
title: overview
order: 1
---

In Ant Design Charts, the **scale** is a crucial abstraction for visualization: it maps abstract data to visual data, serving as the bridge between abstract data and visual data. If the encode determines which channels of the mark need to be visualized, then the scale determines how these channels should be visualized.

Ant Design Charts internally infers the type, domain, and range of the scale based on the data type and the type of the mark, but you can also specify the corresponding configuration. The scale can be configured at the mark level:

```js
({
  type: 'interval',
  scale: {
    x: { padding: 0.5 },
    y: {
      type: 'log', // specify type
      domain: [10, 100], // specify domain
      range: [0, 1], // specify range
    },
  },
});
```

```js
{
  "type": "interval",
  "scale": {
    "x": {
      "padding": 0.5
    },
    "y": {
      "type": "log",
      "domain": "-FN-[10, 100]-FN-",
      "range": "-FN-[0, 1]-FN-"
    }
  }
}
```

The scale can also be configured at the view level:

```js
({
  type: 'view',
  scale: {
    x: { padding: 0.5 },
    y: {
      type: 'log', // specify type
      domain: [10, 100], // specify domain
      range: [0, 1], // specify range
    },
  },
});
```

```js
{
  "scale": {
    "x": {
      "padding": 0.5
    },
    "y": {
      "type": "log",
      "domain": "-FN-[10, 100]-FN-",
      "range": "-FN-[0, 1]-FN-"
    }
  }
}
```

## Mark Scale

Every channel of the mark is bound to a scale. This scale transforms the column data bound to the channel from the data range: **domain** to the visual range: **range**. Different types of scales are suitable for different types of data and use cases.

### Scale Synchronization

The scale of the same channel of the mark in the same view is synchronized by default: it synchronizes the type, domain, and range of the scale, as well as other configurations. This means that all marks in a view will be drawn with the same scale. For example, the LineX mark in the figure below, although it does not have complete data, is still drawn at the accurate position, because the scale is synchronized.

```js | ob { autoMount: true }
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "yField": "value",
    "xField": "year",
    "data": [     { year: '1991', value: 3 },     { year: '1992', value: 4 },     { year: '1993', value: 3.5 },     { year: '1994', value: 5 },     { year: '1995', value: 4.9 },     { year: '1996', value: 6 },     { year: '1997', value: 7 },     { year: '1998', value: 9 },     { year: '1999', value: 13 },   ]
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Scales Out of Sync

If you want to unsynchronized (for example, when drawing a dual-axis chart), you need to set `scale.independent` to `true`. The scale that has set this property will not synchronize with any other scale. In the example below, the y-axis of the interval and line will use two different scales, thus generating two different coordinate axes.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
      data: [
        { time: '10:10', call: 4, waiting: 2, people: 2 },
        { time: '10:15', call: 2, waiting: 6, people: 3 },
        { time: '10:20', call: 13, waiting: 2, people: 5 },
        { time: '10:25', call: 9, waiting: 9, people: 1 },
        { time: '10:30', call: 5, waiting: 2, people: 3 },
        { time: '10:35', call: 8, waiting: 2, people: 1 },
        { time: '10:40', call: 13, waiting: 1, people: 2 },
      ],
      children: [
        {
          type: 'interval',
          encode: { x: 'time', y: 'waiting' },
          axis: { y: { title: 'Waiting', titleFill: '#5B8FF9' } },
        },
        {
          type: 'line',
          encode: { x: 'time', y: 'people', shape: 'smooth' },
          scale: { y: { independent: true } }, // Set y-axis scale to unsynchronized
          style: { stroke: '#fdae6b', lineWidth: 2 },
          axis: {
            y: {
              position: 'right',
              grid: null,
              title: 'People',
              titleFill: '#fdae6b',
            },
          },
        },
      ]
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

If you want to synchronize scales in groups, you can declare `scale.key`. Scales with the same key will synchronize. For example, the y-axis of Line and Point Mark in the example below will synchronize because the key of both is 'line'.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
      data: [
        { time: '10:10', call: 4, waiting: 2, people: 2 },
        { time: '10:15', call: 2, waiting: 6, people: 3 },
        { time: '10:20', call: 13, waiting: 2, people: 5 },
        { time: '10:25', call: 9, waiting: 9, people: 1 },
        { time: '10:30', call: 5, waiting: 2, people: 3 },
        { time: '10:35', call: 8, waiting: 2, people: 1 },
        { time: '10:40', call: 13, waiting: 1, people: 2 },
      ],
      children: [
        {
          type: 'interval',
          encode: { x: 'time', y: 'waiting' },
          axis: { y: { title: 'Waiting', titleFill: '#5B8FF9' } },
        },
        {
          type: 'line',
          encode: { x: 'time', y: 'people', shape: 'smooth' },
          scale: { y: { key: 'line' } }, // Set key to 'line'
          style: { stroke: '#fdae6b', lineWidth: 2 },
          axis: {
            y: {
              position: 'right',
              grid: null,
              title: 'People',
              titleFill: '#fdae6b',
            },
          },
        },
        {
          type: 'point',
          encode: { x: 'time', y: 'people' },
          scale: { y: { key: 'line' } }, // Set key to 'line'
          style: { stroke: '#fdae6b', lineWidth: 2 },
        },
      ]
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## View Scale

The scale can be configured in the view hierarchy and passed to the `children` specified by the mark. If the channel corresponding to the mark does not set the scale, it is set; otherwise, it has no effect. When not drawing multi-axis charts, the scale can be set at the view hierarchy.

```js | ob { autoMount: true }
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  chart.line();
  chart.point();

  const config ={
    "scale": {
      "y": {
        "nice": true
      }
    },
    "yField": "value",
    "xField": "year",
    "data": [     { year: '1991', value: 3 },     { year: '1992', value: 4 },     { year: '1993', value: 3.5 },     { year: '1994', value: 5 },     { year: '1995', value: 4.9 },     { year: '1996', value: 6 },     { year: '1997', value: 7 },     { year: '1998', value: 9 },     { year: '1999', value: 13 },   ]
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Common Scales

Common scales are divided into three major categories:

- Continuous scale
- Discrete scale
- Discretizing scale

### Continuous Scale

The first type of scale is the continuous scale, mainly used for continuous data. Common continuous scales include Linear, Time, Log, etc. For example, the x and y channels in the scatter plot below use the linear scale.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "colorField": "gender",
    "yField": "height",
    "xField": "weight",
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Ordinal Scale

The second type of scale is the ordinal scale, mainly used for discrete data. Common ordinal scales include ordinal, point, etc. For example, the color channel in the bar chart below uses the ordinal scale.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "scale": {
      "color": {
        "range": ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#c564be']
      }
    },
    "colorField": "genre",
    "yField": "sold",
    "xField": "genre",
    "data": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ]
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Discretizing Scale

The third type of scale is the discretizing scale, mainly used for continuous data, which will be discretized and then mapped, such as threshold, quantize, etc. The color channel below uses the quantile scale.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "style": {
      "inset": 2,
      "stroke": "#000"
    },
    "colorField": "salary",
    "xField": (_, i) => ((i / 5) | 0) + 1,
    "yField": (_, i) => (i % 5) + 1,
    "scale": {
      "color": {
        "type": "quantile",
        "range": ['#eee', 'pink', 'red']
      }
    },
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/bmw-prod/89c20fe8-0c6f-46c8-b36b-4cb653dba8ed.json",
      "transform": [{ type: 'map', callback: (d) => ({ salary: d }) }]
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
