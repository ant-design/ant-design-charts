---
title: 介绍
order: 1
nav:
  title: 使用文档
  order: 1
---

### 简介

[Ant Design Charts](https://github.com/ant-design/ant-design-charts) 是 [G2Plot](https://antv-g2plot.gitee.io/zh/examples/gallery) 的 React 版本，基于 react、typescript 封装了所有的 G2Plot 图表，继承了 G2Plot 的所有配置，对 React 技术栈的同学更加友好。

- 开箱即用：默认呈现高质量图表，将对开发体验及用户体验的研究沉淀入图表的默认配置项

- 易于配置：用户能够根据具体业务需要较为轻松的调整图表细节

- 体验良好：视觉和交互体验聚焦于如何能够**展示和发现信息**"这一图表本源的职能上

<br /> 像使用组件一样生成图表，开箱即用，你甚至不需要修改任何配置项就可以满足需求，真正的默认好用，有没有心动想试试的感觉。

<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/208487/1586836312040-340d7971-1ac7-4ee6-af81-e2cae2b05963.png#align=left&display=inline&height=951&name=image.png&originHeight=1901&originWidth=2000&size=968667&status=done&style=none&width=1000)

### 为什么？

也许你会问，为什么我不直接使用 G2Plot ？<br />当然，你可以选择 G2Plot ，因为我们就是基于 G2Plot 进行开发的，但如果你的技术栈是基于 React 的话，我们会有如下优点，不知道你是否会心动。

- G2Plot 的所有图表，都有，新增的图表，几乎可以做到同步更新。

- 你无需感知 G2Plot 里面的一堆函数，例如 `destroy()`、`changeData()`、`updateConfig()` 等，你只需要关心 data 和 config 即可，所有操作都在 Ant Design Charts 封装，降低了学习成本。

- Tooltip 支持 ReactNode 。

- 提供额外 API , `downloadImage()`、`toDataURL()` 。

- 自定义 memoData 功能，按需控制图表 rerender ，# 按需使用。

- 如果实在有不满足你需求的，我们可以给你返回 chart 实例，你可以直接操作。

#### 自定义 Tooltip

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
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
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
      visible: true,
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

#### 图表下载

##### 方法

toDataURL([type, encoderOptions])

##### 参数

- type(string): A DOMString indicating the image format. The default format type is image/png.
- encoderOptions(number): A Number between 0 and 1 indicating the image quality.

##### 方法

downloadImage(name, [type,encoderOptions])

##### 参数

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
    title: {
      visible: true,
      text: '配置折线数据点样式',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    point: {
      visible: true,
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

  // 下载图片
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
        下载图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图片信息
      </button>
      <Line {...config} chartRef={ref} />
    </div>
  );
};

export default DemoLine;
```

#### 自定义图表更新

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [title, setTitle] = useState({
    visible: true,
    text: '配置折线数据点样式',
  });
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
    title,
    description: {
      visible: true,
      text: '自定义配置趋势线上数据点的样式',
    },
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'year',
    yField: 'value',
    label: {
      visible: true,
      type: 'point',
    },
    point: {
      visible: true,
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

  const updateTitle = () => {
    console.log(
      '我不会被更新, 如果需要更新，请设置 memoData={[data.length, JSON.stringify(title)]}',
    );
    setTitle({
      visible: true,
      text: '新标题',
    });
  };

  return (
    <div>
      <button type="button" onClick={updateData} style={{ marginRight: 24 }}>
        更新数据
      </button>
      <button type="button" onClick={updateTitle}>
        更新标题
      </button>
      <Line {...config} memoData={data.length} />
    </div>
  );
};

export default DemoLine;
```

#### 获取 chart 实例

方案 1: 挂载到 chartRef 上

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
  };

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
