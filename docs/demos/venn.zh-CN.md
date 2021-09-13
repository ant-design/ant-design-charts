---
title: 韦恩图
order: 38
---

### 基础韦恩图

```tsx
import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/charts';

const DemoVenn: React.FC = () => {
  var config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: { fillOpacity: 0.85 },
  };
  return <Venn {...config} />;
};

export default DemoVenn;
```

### 设置颜色叠加模式

```tsx
import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/charts';

const DemoVenn: React.FC = () => {
  var config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    blendMode: 'overlay',
    pointStyle: { fillOpacity: 0.85 },
  };
  return <Venn {...config} />;
};

export default DemoVenn;
```

### 自定义韦恩图

```tsx
import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/charts';

const DemoVenn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/yzC3ZiBbhM/venn-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var sum = data.reduce(function (a, b) {
    return a + b.size;
  }, 0);
  var toPercent = function toPercent(p) {
    return ''.concat((p * 100).toFixed(2), '%');
  };
  var config = {
    setsField: 'sets',
    sizeField: 'size',
    data: data,
    pointStyle: { fillOpacity: 0.85 },
    color: ['#9DF5CA', '#61DDAA', '#42C090'],
    label: {
      style: { lineHeight: 18 },
      formatter: function formatter(datum) {
        return datum.sets.length > 1
          ? ''.concat(datum.size, ' (').concat(toPercent(datum.size / sum), ')')
          : ''
              .concat(datum.id, '\n')
              .concat(datum.size, ' (')
              .concat(toPercent(datum.size / sum), ')');
      },
    },
    tooltip: {
      fields: ['sets', 'size'],
      customContent: (title, items) => {
        const datum = items[0]?.data || {};
        const color = items[0]?.color;

        let listStr = '';
        if (datum['伙伴名称']?.length > 0) {
          datum['伙伴名称'].forEach((item, idx) => {
            listStr += `<div class="g2-tooltip-list-item">
                  <span class="g2-tooltip-name">${idx}. ${item}</span>
              </div>`;
          });
        }

        return `<div class="g2-tooltip-list">
            <div class="g2-tooltip-list-item">
              <span class="g2-tooltip-marker" style="background:${color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span>
              <span class="g2-tooltip-name">${datum.sets?.join('&')}</span>
              <span class="g2-tooltip-value">${datum.size}</span>
            </div>
            ${
              listStr
                ? `<div class="g2-tooltip-list-item">
              <span class="g2-tooltip-name"><b>伙伴名称</b></span>
            </div>${listStr}`
                : ''
            }
          </div>`;
      },
    },
  };
  if (!data.length) {
    return null;
  }
  return <Venn {...config} />;
};

export default DemoVenn;
```

### 设置 label

```tsx
import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/charts';

const DemoVenn: React.FC = () => {
  var config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
        label: 'A&B&C',
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: { fillOpacity: 0.85 },
    label: {
      offsetY: 7,
      style: { fontSize: 14 },
      formatter: function formatter(datum) {
        return ''.concat(datum.sets.join('&'), ': ').concat(datum.size);
      },
    },
  };
  return <Venn {...config} />;
};

export default DemoVenn;
```

### 格式化 tooltip

```tsx
import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/charts';

const DemoVenn: React.FC = () => {
  var config = {
    data: [
      {
        sets: ['A'],
        size: 12,
        label: 'A',
      },
      {
        sets: ['B'],
        size: 12,
        label: 'B',
      },
      {
        sets: ['C'],
        size: 12,
        label: 'C',
      },
      {
        sets: ['A', 'B'],
        size: 2,
        label: 'A&B',
      },
      {
        sets: ['A', 'C'],
        size: 2,
        label: 'A&C',
      },
      {
        sets: ['B', 'C'],
        size: 2,
        label: 'B&C',
      },
      {
        sets: ['A', 'B', 'C'],
        size: 1,
        label: 'A&B&C',
      },
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: { fillOpacity: 0.85 },
    tooltip: {
      fields: ['label', 'size'],
      formatter: function formatter(datum) {
        return {
          name: datum.label,
          value: datum.size,
        };
      },
    },
  };
  return <Venn {...config} />;
};

export default DemoVenn;
```
