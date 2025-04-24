---
title: spaceLayer
order: 2
---

对空间不做任何划分，多个视图使用同一个空间区域，常用于视图的层叠。

## 开始使用

绘制一个常见的柱饼结合的图表。

<img alt="spaceLayer" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qPbkQb8c6F4AAAAAAAAAAAAADmJ7AQ/original" width="600" />

```ts
{
  "attr": {
    "paddingBottom": 200,
    "paddingLeft": 400
  },
  "legend": false,
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "coordinate": {
    "type": "theta"
  }
}
```

更多的案例，可以查看[图表示例](/examples)页面。

## 选项

无额外配置项。
