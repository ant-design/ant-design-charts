---
title: Box
order: 4
---

#### boxType

<description>**optional** *boxplot | box* **default** *box*</description>


Box` 图形是用来绘制箱线图（boxplot）又叫盒须图、盒式图，通常用来展示一组数据分布情况的统计图，一般包括几种数据：`最小值`、`下四分位数`、`中位数`、`上四分位数`、`最大值`，另外可以结合 `point` mark 绘制异常点数据。

<img alt="box" width="100%" style="max-width: 400px" src="https://gw.alipayobjects.com/zos/antfincdn/f6WEf%24CrgE/20220913111713.jpg" />

Box 特殊的一点在于 `y` 通道对应的数据是一组统计数据的数组，最后会将数据映射为箱线图所需求的 14 个点集合。

```text
/**
 *
 * p0           p2          p1
 *    ──────────┬──────────
 *              │
 *              │
 *              │
 *              │ p3
 * p4 ┌─────────┴──────────┐ p5
 *    │                    │
 *    │                    │
 * p8 ├────────────────────┤ p9
 *    │                    │
 *    │        p10         │
 * p7 └─────────┬──────────┘ p6
 *              │
 *              │
 *              │
 *   ───────────┴───────────
 * p12         p11           p13
 */
```

更多的案例，可以查看[图表示例](/examples)页面。
