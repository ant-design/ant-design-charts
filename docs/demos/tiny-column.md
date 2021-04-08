---
title: Tiny Column
order: 29
---

### 基础迷你柱形图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  var data = [274, 337, 81, 497, 666, 219, 269];
  var config = {
    height: 64,
    width: 240,
    autoFit: false,
    data: data,
    tooltip: {
      customContent: function customContent(x, data) {
        var _data$, _data$$data;
        return 'NO.'
          .concat(x, ': ')
          .concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
              ? void 0
              : _data$$data.y.toFixed(2),
          );
      },
    },
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```

### 带辅助线的迷你柱形图

```tsx
import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';

const DemoTinyColumn: React.FC = () => {
  var data = [274, 337, 81, 497, 666, 219, 269];
  var config = {
    height: 64,
    width: 240,
    autoFit: false,
    data: data,
    tooltip: false,
    annotations: [
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        text: {
          content: '平均值',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'rgba(44, 53, 66, 0.45)',
            textBaseline: 'bottom',
          },
        },
        style: { stroke: 'rgba(0, 0, 0, 0.25)' },
      },
    ],
  };
  return <TinyColumn {...config} />;
};

export default DemoTinyColumn;
```
