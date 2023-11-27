---
title: lineX
order: 1
---

指定 `x` 通道来绘制垂直于 x 轴的辅助线，常用于绘制平均值或其他聚合数据辅助线。

## 开始使用

<img alt="lineX" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*T2VvTr67-rgAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```ts
/**
 * A recreation of this demo: https://vega.github.io/vega-lite/examples/layer_histogram_global_mean.html
 */
{
  annotations: [
     {
      type: "lineX",
      xField: '2023',
      style: { stroke: "#F4664A", strokeOpacity: 1, lineWidth: 5 },
    },
  ]
}

```

更多的案例，可以查看[图表示例](/examples)页面。

## 选项

目前 lineX 只有一种 `line` 的 shape 图形。

### line

| 属性           | 描述                                                                                                          | 类型                                              | 默认值                         |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------ |
| fill           | 图形的填充色                                                                                                  | `string` \| `Function<string>`                    | -                              |
| fillOpacity    | 图形的填充透明度                                                                                              | `number` \| `Function<number>`                    | -                              |
| stroke         | 图形的描边                                                                                                    | `string` \| `Function<string>`                    | -                              |
| strokeOpacity    | 描边透明度                                                                                                    | `number` \| `Function<number>`                    | -                              |
| lineWidth      | 图形描边的宽度                                                                                                | `number` \| `Function<number>`                    | -                              |
| lineDash       | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0, 0]的效果为没有描边。 | `[number,number]` \| `Function<[number, number]>` | -                              |
| opacity        | 图形的整体透明度                                                                                              | `number` \| `Function<number>`                    | -                              |
| shadowColor    | 图形阴影颜色                                                                                                  | `string` \| `Function<string>`                    | -                              |
| shadowBlur     | 图形阴影的高斯模糊系数                                                                                        | `number` \| `Function<number>`                    | -                              |
| shadowOffsetX  | 设置阴影距图形的水平距离                                                                                      | `number` \| `Function<number>`                    | -                              |
| shadowOffsetY  | 设置阴影距图形的垂直距离                                                                                      | `number` \| `Function<number>`                    | -                              |
| cursor         | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                 | `string` \| `Function<string>`                    | 'default'                      |
