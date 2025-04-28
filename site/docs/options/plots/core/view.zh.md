---
title: 视图（View）
order: 3
---

Ant Design Charts 中**视图（View）** 用来绘制多个标记。一个视图拥有一个坐标系，也是应用交互的最小单位。

```js
({
  children: [{ type: 'interval' }],
});

```

顶层 Chart 默认就是一个视图：


当顶层 Chart 添加了复合节点，可以通过 `chart.view` 声明视图：


## 核心概念

- [**data**](/options/plots/core/data/overview) - 可视化的数据
- [**encode**](/options/plots/core/encode) - 编码信息
- [**scale**](/options/plots/core/scale/overview) - 映射规则
- [**transform**](/options/plots/core/transform/overview) - 转化通道值
- [**coordinate**](/options/plots/core/coordinate/overview) - 坐标系变换
- [**style**](/options/plots/core/style) - 视觉样式
- [**labelTransform**](/options/plots/component/label) - 数据标签转换
- [**title**](/options/plots/component/title) - 图表标题
- [**axis**](/options/plots/component/axis) - 坐标轴
- [**legend**](/options/plots/component/legend) - 图例
- [**scrollbar**](/options/plots/component/scrollbar) - 滚动条
- [**slider**](/options/plots/component/slider) - 拖拽轴
- [**interaction**](/options/plots/core/interaction/overview) - 交互
- [**theme**](/options/plots/core/theme/overview) - 主题

```js
({
  data: [],
  encode: {},
  scale: {},
  transform: [],
  coordinate: {},
  style: {},
  labelTransform: {},
  title: {},
  axis: {},
  legend: {},
  tooltip: {},
  scrollbar: {},
  slider: {},
  interaction: {},
  theme: {},
});

```
