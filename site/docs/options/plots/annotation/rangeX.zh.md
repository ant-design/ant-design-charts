---
title: rangeX
order: 1
---

使用一组 `x`(x1, x2) 来定位一个绘制于 x 轴的矩形区域，常用于对特定区域进行高亮显示。

## 开始使用

<img alt="rangeX" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*dmYgTY3kxDoAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```ts
/**
 * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_falkensee.html
 */
{
  annotations: [
    {
      type: "rangeX",
      data: [
        {
          year: ["1933-01-01T00:00:00.000Z", "1945-01-01T00:00:00.000Z"],
          event: "Nazi Rule",
        },
        {
          year: ["1948-01-01T00:00:00.000Z", "1989-01-01T00:00:00.000Z"],
          event: "GDR (East Germany)",
        },
      ],
      xField: 'year',
      yField: 'event',
      scale: { color: { independent: true, range: ["#FAAD14", "#30BF78"] } },
      style: { fillOpacity: 0.75 },
    }
  ]
}
```

更多的案例，可以查看[图表示例](/examples)页面。

## 选项

目前 rangeX 只有 range 一种 shape 图形。

### range

| 属性          | 描述                                                                                                          | 类型                                              | 默认值    |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --------- |
| fill          | 图形的填充色                                                                                                  | `string` \| `Function<string>`                    | -         |
| fillOpacity   | 图形的填充透明度                                                                                              | `number` \| `Function<number>`                    | -         |
| stroke        | 图形的描边                                                                                                    | `string` \| `Function<string>`                    | -         |
| strokeOpacity | 描边透明度                                                                                                    | `number` \| `Function<number>`                    | -         |
| lineWidth     | 图形描边的宽度                                                                                                | `number` \| `Function<number>`                    | -         |
| lineDash      | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` \| `Function<[number, number]>` | -         |
| opacity       | 图形的整体透明度                                                                                              | `number` \| `Function<number>`                    | -         |
| shadowColor   | 图形阴影颜色                                                                                                  | `string` \| `Function<string>`                    | -         |
| shadowBlur    | 图形阴影的高斯模糊系数                                                                                        | `number` \| `Function<number>`                    | -         |
| shadowOffsetX | 设置阴影距图形的水平距离                                                                                      | `number` \| `Function<number>`                    | -         |
| shadowOffsetY | 设置阴影距图形的垂直距离                                                                                      | `number` \| `Function<number>`                    | -         |
| cursor        | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                 | `string` \| `Function<string>`                    | 'default' |
