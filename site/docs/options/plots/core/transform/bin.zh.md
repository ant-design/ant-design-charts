---
title: bin
order: 2
---

## 概述

`bin` 是一个用于数据处理的重要函数，它的主要作用是将连续的数值数据划分为离散的区间（即分箱），从而将数据进行分组。这种操作通常用于数据分析和可视化，以方便统计或展示数据分布。

`bin` 的核心目的是将原始数据按照指定的规则进行分箱操作，将连续型数据转换为多个离散区间的类别数据。这在数据处理和构建直方图等视图时尤为重要。例如，当需要根据数据的数值范围生成多个区间并统计其频率时，就可以使用 `bin`。

## 使用场景

- 数据分箱，用于按区间统计数据频率。
- 构建直方图视图。
- 将连续型数据转化为离散型数据以便于分析。

下面这个例子展示了如果创建一个分箱图，展示了两个评分系统评分在不同分数区间中的分布情况，可以直观地观察哪个区间的评分较多，哪个区间评分较少。

```js
{
  "transform": [
    {
      "color": "count"
    }
  ]
}
```

## 配置项

| 属性        | 描述                                      | 类型                | 默认值              |
| ----------- | ----------------------------------------- | ------------------- | ------------------- |
| thresholdsX | 对 x 分箱的数量                           | number              | `d3.thresholdScott` |
| thresholdsY | 对 y 分箱的数量                           | number              | `d3.thresholdScott` |
| [channel]   | 输出到具体 mark 的 channel 数据的聚合方式 | [channel](#channel) |                     |

### thresholdsX 和 thresholdsY

`thresholdsX` 和 `thresholdsY` 是用于定义数据分箱的两个非常重要的配置项，主要在二维数据分箱（如网格图或热力图）中使用。它们分别控制在 X 和 Y 方向上的分箱（区间划分）规则或数量，用于将二维连续数据划分为离散的网格。

```js
{
  "transform": [
    {
      "color": "count"
    }
  ]
}
```

### channel

理论上，`channel` 可以设置为所有的通道值，具体可以参考 [encode](/options/plots/core/encode) 文档。所有的枚举值如下：

```ts
type Channel =
  | 'x'
  | 'y'
  | 'z'
  | 'x1'
  | 'y1'
  | 'series'
  | 'color'
  | 'opacity'
  | 'shape'
  | 'size'
  | 'key'
  | 'groupKey'
  | 'position'
  | 'series'
  | 'enterType'
  | 'enterEasing'
  | 'enterDuration'
  | 'enterDelay'
  | 'updateType'
  | 'updateEasing'
  | 'updateDuration'
  | 'updateDelay'
  | 'exitType'
  | 'exitEasing'
  | 'exitDuration'
  | 'exitDelay'
  | `position${number}`;


```


## 示例

### 使用 `bin` + `opacity` 渲染出透明度分箱

```js
{
  "transform": [
    {
      "opacity": "count",
      "thresholdsX": 10,
      "thresholdsY": 10
    }
  ]
}
```

### 使用 `bin` + `size` 渲染出大小分箱

```js
{
  "transform": [
    {
      "size": "count",
      "thresholdsX": 10,
      "thresholdsY": 10
    }
  ]
}
```