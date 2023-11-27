---
title: range
order: 1
---

使用一组 `x`(x1, x2) 和一组 `y`(y1, y2) 来定位一个矩形区域，常用于绘制辅助背景区域。

## 开始使用

<img alt="range" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*6JLeTLg7YQoAAAAAAAAAAAAADmJ7AQ" width="600" />

```ts
{
  annotations: [
    {
      type: "range",
      yField: 'y',
      xField: 'x',
      colorField: 'region',
      data: [
        { x: [-25, 0], y: [-30, 0], region: "1" },
        { x: [-25, 0], y: [0, 20], region: "2" },
        { x: [0, 5], y: [-30, 0], region: "2" },
        { x: [0, 5], y: [0, 20], region: "1" },
      ],
      scale: {
        color: {
          range: ["#d8d0c0", "#a3dda1"],
          independent: true,
          guide: null,
        },
      },
      style: { fillOpacity: 0.2 },
    }
  ]
}
```

更多的案例，可以查看[图表示例](/examples)页面。

## 选项

目前 range 只有一种同名的 shape 图形。

### range

| 属性            | 描述                                           | 类型                 | 默认值      |
|----------------|------------------------------------------------|---------------------|------------|
| fill          | 图形的填充色                                      | `string` \| `Function<string>`              |   -   |
| fillOpacity   | 图形的填充透明度                                   | `number` \| `Function<number>`              |   -   |
| stroke        | 图形的描边                                        | `string` \| `Function<string>`              |   -   |
| strokeOpacity   | 描边透明度                                        | `number` \| `Function<number>`              |   -   |
| lineWidth     | 图形描边的宽度                                    | `number` \| `Function<number>`               |   -   |
| lineDash      | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` \| `Function<[number, number]>` |   -   |
| opacity       | 图形的整体透明度                                   | `number` \| `Function<number>`              |   -   |
| shadowColor   | 图形阴影颜色                                      | `string` \| `Function<string>`              |   -   |
| shadowBlur    | 图形阴影的高斯模糊系数                              | `number` \| `Function<number>`              |   -   |
| shadowOffsetX | 设置阴影距图形的水平距离                            | `number` \| `Function<number>`              |   -   |
| shadowOffsetY | 设置阴影距图形的垂直距离                            | `number` \| `Function<number>`              |   -   |
| cursor        | 鼠标样式。同 css 的鼠标样式，默认 'default'。        | `string` \| `Function<string>`               |   'default'  |
