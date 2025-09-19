---
title: inline
order: 2
---

## 概述

Ant Design Charts 的数据源来源有两种，一种是 `inline`，即直接传入具体的数据，这种是 Ant Design Charts 默认的数据源类型；另外一种数据源类型是 `fetch`，即从远程接口获取数据。

### 使用方式

显式的指定 `type` 为 `inline`，完整的写法如下：

```js
{
  "data": {
      "value": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ]
  }
}
```

因为 Ant Design Charts 默认的数据类型就是 `inline`，所以也可以简写为如下：

```js
{
  "data": [   { genre: 'Sports', sold: 275 },   { genre: 'Strategy', sold: 115 },   { genre: 'Action', sold: 120 },   { genre: 'Shooter', sold: 350 },   { genre: 'Other', sold: 150 }, ]
}
```

## 开始使用

举一个例子如下：

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ],
      xField: 'genre',
      yField: 'sold'
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 配置项

| 属性      | 描述                         | 类型                                                      | 默认值 |
| --------- | ---------------------------- | --------------------------------------------------------- | ------ |
| value     | 具体的 object 数组数据       | object[]                                                  | []     |
| transform | 针对数据 inline 数据进行变换 | [DataTransform](/options/plots/core/data/overview#datatransform) | []     |

这个数据源比较简单，相当于传入的数据，直接作为数据源进行 transform 处理加工，然后走渲染逻辑。

⚠️ Ant Design Charts 支持了一些关系图的数据结构，这些数据结构是一个 JavaScript 的 Object 类型，所以使用简写传入的时候，可能会导致 Ant Design Charts 识别出错，所以建议如果图表的数据是 Object 对象，使用完整的写法传入数据。

```js
const graphData = {
  nodes: [
    /** */
  ],
  edges: [
    /** */
  ],
};
{
  "data": {
      "value": graphData
  }
}
```
