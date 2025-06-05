---
title: helix
order: 10
---

The `helix` coordinate system is a coordinate system that unfolds two-dimensional data along a spiral line. It is commonly used to visualize time series data or gene expression data, showing data periodicity or trends through spiral extension.

## Getting Started

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const data = [];
  let i = 0
  const time = new Date(Date.now() + i * 1000 * 3600 * 24)
      .toISOString()
      .split('T')[0];
  data.push({ time, value: Math.random() * 100 });

  const config ={
    "scale": {
      "color": {
        "range": ['#ffffff', '#1890FF']
      }
    },
    "colorField": "value",
    "yField": "value",
    "xField": "time"
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

| Parameter   | Description                         | Type     | Default       |
| ----------- | ----------------------------------- | -------- | ------------- |
| startAngle  | Start angle of the spiral (radians) | `number` | `0`           |
| endAngle    | End angle of the spiral (radians)   | `number` | `Math.PI * 6` |
| innerRadius | Inner radius of the spiral (0 to 1) | `number` | `0`           |
| outerRadius | Outer radius of the spiral (0 to 1) | `number` | `1`           |
