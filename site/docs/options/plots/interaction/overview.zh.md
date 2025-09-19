---
title: 概览
order: 1
---

Ant Design Charts 中**交互（Interaction）** 提供了按需探索数据的能力。

```js
{
  "interaction": {
    "tooltip": {},
    "brushHighlight": {}
  }
}
```

## 交互状态

在 Ant Design Charts 中可以通过 `mark.state` 去设置标记的交互状态，比如如下设置 select 和 unselect 的状态，当使用 elementSelect 的时候会消费这两个状态。

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
    "interaction": {
      "elementSelect": true
    },
    "state": {
      "selected": { "fill": "#f4bb51" }, // 设置选中状态
      "unselected": { "opacity": 0.6 }, // 设置非选中状态
    },
    "axis": {
      "y": {
        "labelFormatter": ".0%"
      }
    },
    "yField": "frequency",
    "xField": "letter",
    "transform": [
      {
        "type": "sortX",
        "by": "y",
        "reverse": true
      }
    ],
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

除了 selected 和 unselected 之外，还有如下的内置状态类型：

- active
- inactive

## 交互事件

### 监听交互事件

所以的交互事件都可以监听，语法如下:

```js
chart.on('interaction name（eg: brushFilter）', (e) => {});
```

以鼠标刷选 [brushFilter](/options/plots/core/interaction/brush-filter) 为例，当用户进行鼠标刷选时，将对应的刷选阈值压入 brushHistory，当点击 reset 按钮时，依次弹出并通过 `chart.emit()` 主动触发 brushFilter 进行刷选覆盖即可：

```js | ob { autoMount: true }
import { Scatter, G2 } from "@ant-design/plots";
import React from "react";
import { createRoot } from "react-dom";

const { ChartEvent } = G2;

const Demo = () => {
  const config = {
    interaction: {
      brushFilter: true,
    },
    shapeField: "point",
    colorField: "gender",
    yField: "height",
    xField: "weight",
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json",
    },
    onReady: ({ chart }) => {
      const brushHistory = [];
      chart.on("brush:filter", (e) => {
        if (e.target) brushHistory.push(e.data.selection);
      });
      chart.on(ChartEvent.AFTER_RENDER, () => {
        const scale = chart.getScale();
        const { x1, y1 } = scale;
        const domainX = x1.options.domain;
        const domainY = y1.options.domain;
        brushHistory.push([domainX, domainY]);
      });
      const container = chart.getContainer();
      const button = document.createElement("button");
      button.innerText = "reset";
      button.onclick = () => {
        if (brushHistory.length < 2) return;
        brushHistory.pop();
        // 主动触发刷选事件
        chart.emit("brush:filter", {
          data: {
            selection: brushHistory[brushHistory.length - 1],
          },
        });
      };
      container.appendChild(button);
    },
  };

  return <Scatter {...config} />;
};

createRoot(document.getElementById("container")).render(<Demo />);
```

### 触发交互事件

触发和监听一般是同时出现，用于主动触发某个事件，形参中的 data 会作用于对应的交互事件，起到重置、覆盖的效果。例如重置筛选区域，以 [brushFilter](/options/plots/core/interaction/brush-filter) 为例，语法如下。

```js
chart.emit('brush:filter', {
  data: {
    selection: brushHistory[brushHistory.length - 1],
  },
});
```

## 自定义交互

如果内置的交互不能满足你的需求，也可以通过自定义交互的方式去实现一些交互。下面自定义一个高亮交互。

```js | ob { autoMount: true }
import { Column, G2 } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const { PLOT_CLASS_NAME, ELEMENT_CLASS_NAME, register } = G2;

register('interaction.customElementHighlight', () => {
  return (context, _, emitter) => {
    const { container } = context;
    const plotArea = container.querySelector(`.${PLOT_CLASS_NAME}`);
    const elements = plotArea.querySelectorAll(`.${ELEMENT_CLASS_NAME}`);
    const elementSet = new Set(elements);

    const pointerover = (e) => {
      const { target: element } = e;
      if (!elementSet.has(element)) return;
      element.style.stroke = 'red';
      element.style.lineWidth = 2;
    };

    const pointerout = (e) => {
      const { target: element } = e;
      if (!elementSet.has(element)) return;
      element.style.stroke = null;
    };

    plotArea.addEventListener('pointerover', pointerover);
    plotArea.addEventListener('pointerout', pointerout);
    return () => {
      plotArea.removeEventListener('pointerover', pointerover);
      plotArea.removeEventListener('pointerout', pointerout);
    };
  };
});

const Demo = () => {
  const config = {
    interaction: {
      customElementHighlight: true,
    },
    colorField: 'name',
    yField: '月均降雨量',
    xField: '月份',
    transform: [
      {
        type: 'dodgeX',
      },
    ],
    data: [
      { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
      { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
      { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
      { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
      { name: 'London', 月份: 'May', 月均降雨量: 47 },
      { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
      { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
      { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
      { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
      { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
      { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
      { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
      { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
      { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
      { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
      { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    ],
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
