---
title: 介绍
order: 1
nav:
  title: 使用文档
  order: 1
---

### 简介

[Ant Design Charts](https://github.com/ant-design/ant-design-charts) 是 [G2plot](https://antv-g2plot.gitee.io/zh/examples/gallery)的 React 版本，基于 react、typescript 封装了所有的 G2Plot 图表，继承了的 G2Plot 的所有配置，对 React 技术栈的同学更加友好。

- 开箱即用：默认呈现高质量图表，将对开发体验及用户体验的研究沉淀入图表的默认配置项

- 易于配置：用户能够根据具体业务需要较为轻松的调整图表细节

- 体验良好：视觉和交互体验聚焦于如何能够**展示和发现信息**"这一图表本源的职能上

<br /> 像使用组件一样生成图表，开箱即用，你甚至不需要修改任何配置项就可以满足需求，真正的默认好用，有没有心动想试试的感觉。

<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/208487/1586836312040-340d7971-1ac7-4ee6-af81-e2cae2b05963.png#align=left&display=inline&height=951&name=image.png&originHeight=1901&originWidth=2000&size=968667&status=done&style=none&width=1000)

### 为什么？

也许你会问，为什么我不直接使用 g2plot？<br />当然，你可以选择 g2plot，因为我们就是基于 G2Plot 进行开发的，但如果你的技术栈是基于 React 的话，我们会有如下优点，不知道你是否会心动。

- G2Plot 的所有图表，都有，新增的图表，几乎可以做到同步更新。

- 你无需感知 G2Plot 里面的一堆函数，例如 destroy()、changeData()、updateConfig()等，你只需要关心 data 和 config 即可，所有操作我们都在 Ant Design Charts 层给你做掉，降低了学习成本。

- 如果实在有不满足你需求的，我们可以给你返回 chart 实例，你可以直接操作。

#### 获取 chart 实例

方案 1: 挂载到 chartRef 上

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    title: {
      visible: true,
      text: '我是标题',
    },
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
  const data = [
    { 地区: '华东', 销售额: 4684506.442 },
    { 地区: '中南', 销售额: 4137415.0929999948 },
    { 地区: '东北', 销售额: 2681567.469000001 },
    { 地区: '华北', 销售额: 2447301.017000004 },
    { 地区: '西南', 销售额: 1303124.508000002 },
    { 地区: '西北', 销售额: 815039.5959999998 },
  ];
  const config = {
    data,
    title: {
      visible: true,
      text: '基础条形图',
    },
    forceFit: true,
    xField: '销售额',
    yField: '地区',
    xAxis: {
      formatter: (v) => Math.round(v / 10000) + '万',
    },
  };

  const ref = React.useRef();
  React.useEffect(() => {
    console.log(ref.current.getChart());
  }, []);

  return <Bar {...config} ref={ref} />;
};

export default Page;
```
