---
title: elementHighlightByX
order: 12
---

## 概述

`elementHighlightByX` 交互的对象是图表元素 element，当鼠标悬浮在元素上时，高亮和鼠标悬浮的元素拥有相同 x 通道值的元素。

- 触发：鼠标悬浮在元素上。

- 结束：鼠标移出元素。

- 影响状态：

悬浮的元素变为 `active` 状态。

其他元素变为 `inactive` 状态。

交互内置状态：

```js
({
  // active 状态下的元素为1px黑色边框
  state: { active: { lineWidth: '1', stroke: '#000' } },
});
```

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1670298045860/element-highlight-by-x.gif" width="640">

```js
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      paddingLeft: 50,
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
        format: 'csv',
      },
      xField: 'state',
      yField: 'population',
      colorField: 'age',
      transform: [
        { type: 'sortX', by: 'y', reverse: true, slice: 6 },
        { type: 'dodgeX' },
      ],
      state: { active: { fill: 'red' }, inactive: { opacity: 0.5 } },
      axis: { y: { labelFormatter: '~s' } },
      interaction: { elementHighlightByX: true }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 使用方式

配置 `elementHighlightByX` 交互有两种方式：

第一种，传入 `boolean` 设置是否开启交互。

```js
({
  interaction: { elementHighlightByX: true }, // 采用默认配置
});
```

第二种，传入 [配置项](#配置项) 对交互进行配置。

```js
({
  interaction: {
    elementHighlightByX: {
      background: true,
    },
  },
});
```

## 配置层级

交互可以配置在 Mark 层级：

```js
({
  interaction: { elementHighlightByX: true },
});
```


## 配置项

交互配置
| 属性 | 描述 | 类型 | 默认值 |
| ---------- | ---------------- | --------- | ------ |
| background | 是否高亮背景 | `boolean` | false |
| region | 鼠标移动到元素空白区域时是否触发高亮(效果见下图) | `boolean` | false |

元素高亮样式配置

| 属性       | 描述               | 类型                                                                                                   | 默认值                                                                                                     |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| offset     | 主方向上的便偏移量 | `number`                                                                                               | 0                                                                                                          |
| background | 是否高亮背景       | [backgroundStyle](https://g2.antv.antgroup.com/options/plots/core/interaction/element-highlight#元素高亮样式) | 详见[backgroundStyle](https://g2.antv.antgroup.com/manual/core/interaction/element-highlight#元素高亮样式) |

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*n9wMQZoN2ssAAAAAAAAAAAAAemJ7AQ/original" width="800">

## 事件

### 监听事件

支持以下的事件：

- `element:highlight` - 元素高亮时触发
- `element:unhighlight` - 元素取消高亮时触发

```js
chart.on('element:highlight', (e) => {
  console.log(e.data.data);
  console.log(e.data.group);
  console.log(e.nativeEvent);
});
chart.on('element:unhighlight', (e) => {
  console.log(e.nativeEvent);
});
```

### 触发交互

支持以下的事件：

- `element:highlight` - 高亮数据
- `element:unhighlight` - 取消高亮

```js
chart.emit('element:highlight', {
  data: { data: { population: 5038433 } },
});
chart.emit('element:unhighlight', {});
```

## 示例

### 基础高亮

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      paddingLeft: 50,
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
        format: 'csv',
      },
      xField: 'state',
      yField: 'population',
      colorField: 'age',
      transform: [
        { type: 'sortX', by: 'y', reverse: true, slice: 6 },
        { type: 'dodgeX' },
      ],
      axis: { y: { labelFormatter: '~s' } },
      interaction: { elementHighlightByX: true }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### 自定义高亮

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
        format: 'csv',
      },
      xField: 'state',
      yField: 'population',
      colorField: 'age',
      transform: [
        { type: 'stackY' },
        { type: 'sortX', by: 'y', reverse: true, slice: 5 },
      ],
      state: {
        active: { fill: 'red', linkFillOpacity: 0.5 },
        inactive: { opacity: 0.5 },
      },
      axis: { y: { labelFormatter: '~s' } },
      interaction: { elementHighlightByX: true }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
