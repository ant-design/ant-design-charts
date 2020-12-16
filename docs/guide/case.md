---
title: 典型案例
order: 3
nav:
  title: 使用文档
  order: 1
---

### 图表下载

#### 方法

toDataURL([type, encoderOptions])

#### 参数

- type(string): A DOMString indicating the image format. The default format type is image/png.
- encoderOptions(number): A Number between 0 and 1 indicating the image quality.

#### 方法

downloadImage(name, [type,encoderOptions])

#### 参数

- name(name): A name of image, eg: `a.png`
- type(string): A DOMString indicating the image format. The default format type is image/png.
- encoderOptions(number): A Number between 0 and 1 indicating the image quality.

```tsx
import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
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
  ];

  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const ref = useRef();

  // 导出图片
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  // 获取图表 base64 数据
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        导出图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图表信息
      </button>
      <Line {...config} chartRef={ref} />
    </div>
  );
};

export default DemoLine;
```

### 自定义 Tooltip

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
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

  const config = {
    data,
    yField: 'value',
    xField: 'year',
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                    >
                      <span style={{ margiRight: 16 }}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">{value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };

  return <Line {...config} />;
};

export default DemoLine;
```

### 事件绑定

请打开控制台点击图表区域。

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
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

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // 点击 point
      ref.current.on('element:click', (...args) => {
        console.log(...args);
      });
    }
  }, []);

  return <Line {...config} chartRef={ref} />;
};

export default DemoLine;
```

### 获取 chart 实例

方案 1: chartRef 回调

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  return <Line {...config} chartRef={(chart) => console.log(chart)} />;
};

export default Page;
```

方案 2: 挂载到 chartRef 上

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  // chart实例
  const ref = React.useRef();
  React.useEffect(() => {
    console.log(ref.current);
  }, []);

  return <Line {...config} chartRef={ref} />;
};

export default Page;
```

方案 3: 挂载到 ref 上

```typescript
import React from 'react';
import { Bar } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  const ref = React.useRef();
  React.useEffect(() => {
    console.log(ref.current.getChart());
  }, []);

  return <Bar {...config} ref={ref} />;
};

export default Page;
```

### 自定义 shape

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter, G2 } from '@ant-design/charts';

// 注册主体有 point | interval | polygon | line 等，详细参考 G2: https://g2.antv.vision/
G2.registerShape('point', 'custom-shape', {
  draw(cfg, group) {
    const cx = cfg.x;
    const cy = cfg.y;
    const polygon = group.addShape('circle', {
      attrs: {
        x: cx,
        y: cy,
        ...cfg.defaultStyle,
        ...cfg.style,
        r: 6,
      },
    });
    return polygon;
  },
});
const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    shape: 'custom-shape',
    pointStyle: { fillOpacity: 1, fill: 'red', stroke: '#ff0' },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    tooltip: {
      showMarkers: false,
      fields: ['xG conceded', 'Shot conceded'],
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```
