---
title: 典型API
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
      custom: {
        customContent: (title, items) => {
          return (
            <div style={{ padding: '16px 8px' }}>
              <h5>提示</h5>
              <p>年份：{title}</p>
              <p style={{ margin: 0 }}>值：{items[0] && items[0].data.value}</p>
            </div>
          );
        },
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

### 自定义 Statistic

```tsx
import React, { Fragment } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  const config = {
    title: {
      visible: false,
      text: '水波图',
    },
    min: 0,
    max: 10000,
    value: 5639,
    statistic: {
      htmlContent: (value: string) => {
        return (
          <Fragment>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1 }}>水波图</p>
            <b>{value}</b>
          </Fragment>
        );
      },
    },
  };

  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 仅更新 Data

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([
    {
      year: '1995',
      value: 2,
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
  ]);

  const config = {
    data,
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

  const updateData = () => {
    setData([
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
    ]);
  };

  return (
    <div>
      <button type="button" onClick={updateData}>
        更新数据，图表不会重新 render
      </button>
      <Line {...config} onlyChangeData={true} />
    </div>
  );
};

export default DemoLine;
```

### 自定义图表更新

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([
    {
      year: '1995',
      value: 2,
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
  ]);

  const config = {
    data,
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

  const updateData = () => {
    setData([
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
    ]);
  };

  return (
    <div>
      <button type="button" onClick={updateData} style={{ marginRight: 24 }}>
        更新数据
      </button>
      <Line {...config} />
    </div>
  );
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

方案 1: 挂载到 chartRef 上

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

方案 2: 挂载到 ref 上

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
