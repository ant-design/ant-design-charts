---
title: 升级指南
order: 4
nav:
  title: 使用文档
  order: 1
---

## 概述

0.x 版本由于底层库架构不统一，BUG 修复成本较高，1.0 我们对底层架构进行了重构，功能和 [G2Plot 2.0](https://g2plot.antv.vision/zh) 保持同步。

## 图表变更

### 类型变更

#### 删除

- 去掉 Bubble，合并到 Scatter 中，通过配置实现，参考图表示例-[Scatter](../demos/scatter)。

- 去掉 StackedArea、PercentStackedArea，合并到 Area 中，通过配置实现，参考图表示例-[Area](../demos/area)。

- 去掉 StackedColumn、RangeColumn、GroupedColumn、PercentStackedColumn，合并到 Column 中，通过配置实现，参考图表示例-[Column](../demos/column)。

- 去掉 StackedBar、GroupedBar、PercentStackedBar、RangeBar，合并到 Bar 中，通过配置实现，参考图表示例-[Bar](../demos/bar)。

- 去掉 Donut，合并到 Pie 中，通过配置实现，参考图表示例-[Pie](../demos/pie)。

### 配置变更

Ant Design Charts 1.0 兼容大部分的 0.x 版本图表功能和配置项，详情如下：

#### 通用变更

**memoData**: 删除，内部判断。

---

**onlyChangeData**: 删除，内部判断。

---

**title**: 不再支持。

---

**description**: 不再支持。

---

**slider**:

```ts
// 变更前
interactions: [
  {
    type: 'slider',
    start: 0.1,
    end: 0.8
  },
],
// 变更后
slider: {
  start: 0.1,
  end: 0.8
},
```

---

**scrollbar**:

```ts
// 变更前
interactions: [
  {
    type: 'scrollbar',
  },
],
// 变更后
scrollbar: {},
```

---

**events**:

```ts
// 变更前
events: {
  'plot:click': callback
}
// 变更后
chart.on('element:click', callback)
```

---

**visible**:

```ts
// 变更前
label: {
  visible: false
}
label: {
  visible: true,
  fill: 'red'
}
// 变更后
label: false
label: {
  fill: 'red'
}
```

---

**animation**:

```ts
// 变更前
...
// 变更后
默认为 true，也可以自己设定。

animation: {
  appear: {
    duration: 300,
    easing: 'linear',
    delay: 100
  },
  enter: ..., // 同appear，下同
  update: ...,
  delay: ....
}
```

#### 私有变更

更多请参考各图表 API.

**Scatter**:

```ts
// 变更前
pointSize: {}
...
// 变更后
size: {}
```

## 遇到问题

我们尽可能收集了已知的所有不兼容变化和相关影响，但是有可能还是有一些场景我们没有考虑到。如果你在升级过程中遇到了问题，请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈。我们会尽快响应和相应改进这篇文档。
