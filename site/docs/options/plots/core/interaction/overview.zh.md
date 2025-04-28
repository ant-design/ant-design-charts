---
title: 概览
order: 1
---

Ant Design Charts 中**交互（Interaction）** 提供了按需探索数据的能力。

交互可以设置在视图层级：

```js
({
  interaction: {
    tooltip: {},
    brushHighlight: {},
  },
});

```

```js
{
  "interaction": {
    "tooltip": {},
    "brushHighlight": {}
  }
}
```

交互也可以设置在标记层级：

```js
({
  interaction: {
    tooltip: {},
    brushHighlight: {},
  },
});

```

```js
{
  "interaction": {
    "tooltip": {},
    "brushHighlight": {}
  }
}
```

## 视图层级的交互

Ant Design Charts 的交互都是对每一个视图生效，如果希望关掉交互，可以如下：

```js
({
  interaction: {
    tooltip: false,
    brushHighlight: false,
  },
});

```

## 标记层级的交互

交互拥有冒泡性，视图交互会被它的标记所设置交互覆盖，并且最后一个标记所对应的坐标系优先级最高。

```js
{
  "interaction": {
    "elementHighlight": {
      "link": false,
      "background": false
    }
  }
}
```

和下面的情况等价：

```js
chart.interaction('elementHighlight', { link: false, background: false });
chart.line();
chart.area():
```

## 交互状态

在 Ant Design Charts 中可以通过 `mark.state` 去设置标记的交互状态，比如如下设置 select 和 unselect 的状态，当使用 elementSelect 的时候会消费这两个状态。

```js
{
  "interaction": {
    "elementSelect": true
  },
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```

除了 selected 和 unselected 之外，还有如下的内置状态类型：

- active
- inactive

## 自定义交互

如果内置的交互不能满足你的需求，也可以通过自定义交互的方式去实现一些交互。下面自定义一个高亮交互。

```js
{
  "interaction": {
    "customElementHighlight": true
  },
  "transform": [
    {
      "type": "dodgeX"
    }
  ]
}
```

## 交互语法

> 交互语法还在设计中...
