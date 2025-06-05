---
title: 概览
order: 1
---

Ant Design Charts 中**视图复合（View Composition）** 提供了在一个可视化中绘制多个图表的能力。Ant Design Charts 定义了一个**视图树（View Graph）** 去描述**多视图图表（Multi-View Plot）**。

```js
({
  type: 'spaceLayer',
  children: [{ type: 'view' }, { type: 'view' }],
});
```

```js
const layer = chart.spaceLayer();
layer.view();
layer.view();
```

## 空间

最基础的视图复合方式就是**空间复合（Space Composition）**，只是对空间进行划分。

一个比较常见的复合方式是 `composition.spaceLayer`：将多个图表重叠在一起。使用场景是这些视图拥有的不同的坐标系，比如下面的条形图和饼图。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const layer = chart.spaceLayer();

  const config ={
    "colorField": "genre",
    "yField": "sold",
    "data": [     { genre: 'Shooter', sold: 350 },     { genre: 'Sports', sold: 275 },     { genre: 'Other', sold: 150 },     { genre: 'Action', sold: 120 },     { genre: 'Strategy', sold: 115 },   ],
    "legend": {
      "color": false
    },
    "transform": [
      {
        "type": "stackY"
      }
    ],
    "coordinate": {
      "type": "theta"
    },
    "attr": {
      "paddingBottom": 250,
      "paddingLeft": 300
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

同时也可以使用 `composition.spaceFlex` 去让视图水平或者竖直排列。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const flex = chart.spaceFlex();

  const config ={
    "colorField": "genre",
    "yField": "sold",
    "data": [     { genre: 'Shooter', sold: 350 },     { genre: 'Sports', sold: 275 },     { genre: 'Other', sold: 150 },     { genre: 'Action', sold: 120 },     { genre: 'Strategy', sold: 115 },   ],
    "legend": {
      "color": false
    },
    "transform": [
      {
        "type": "stackY"
      }
    ],
    "coordinate": {
      "type": "theta"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

同时这些复合方式是可以嵌套的，所以很容易通过一个单独的声明去实现一个报表。

## 分面

**分面复合（Facet Composition）** 和空间复合的不同在于：它还会对数据划分，每个视图展现原始数据的一个子集。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "style": {
      "stroke": "#000"
    },
    "yField": "y",
    "xField": "x",
    "attr": {
      "inset": 10,
      "padding": "auto"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 重复

**重复复合（Repeat Composition）** 和分面的区别在于：它的每个视图展现的是全量数据，只不过会对编码进行重复，从而绘制出多个视图。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "colorField": "species",
    "attr": {
      "padding": "auto"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 时间

**时间复合**在空间上管理视图，用于做动画。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config =```js | ob { autoMount: true }
  import { Chart } from '@antv/g2';

  (async () => {
    const data = await fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
    ).then((res) => res.json());



  const chart = new Chart({
    container: 'container',
  });

    // 参考 css animation 的描述
    const keyframe = chart
      .timingKeyframe() // 创建容器
      .attr('iterationCount', 2) // 迭代次数
      .attr('direction', 'alternate') // 方向
      .attr('duration', 1000); // 持续时间

    keyframe
      .interval()
      .data(data)
      .encode('x', 'gender')
      .encode('y', 'weight')
      .encode('color', 'gender')
      .encode('key', 'gender'); // 指定 key

    keyframe
      .point()
      .data(data)
      .encode('x', 'height')
      .encode('y', 'weight')
      .encode('color', 'gender')
      .encode('shape', 'point')
      .encode('groupKey', 'gender'); // 指定 groupKey

    chart.render();
  ```;

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
