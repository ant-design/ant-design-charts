---
title: repeatMatrix
order: 2
---

根据字段的数量对空间进行划分，然后利用数据在这些子空间可视化。

## 开始使用

<img alt="repeatMatrix" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*MhTMTrLKT5UAAAAAAAAAAAAADmJ7AQ" width="260" />

```ts
{
  "paddingLeft": 50,
  "paddingBottom": 60,
  "scale": {
    "y": {
      "zero": true
    }
  },
  "call": {}
}
```

更多的案例，可以查看[图表示例](/examples)页面。

## 选项

repeatMatrix 的底层实现和 mark 一致，所以在配置上有很多是一样的。

| 属性          | 描述                                         | 类型     | 默认值 |
| ------------- | -------------------------------------------- | -------- | ------ |
| data          | 参考 [data](/options/plots/core/data/overview) 相关介绍             | `Data`   |        |
| encode        | 通道设置，见下表                             |          |        |
| padding       | padding 大小                                 | `number` | 0      |
| paddingLeft   |                                              | `number` | 0      |
| paddingRight  |                                              | `number` | 0      |
| paddingTop    |                                              | `number` | 0      |
| paddingBottom |                                              | `number` | 0      |
| margin        | margin                                       | `number` | 0      |
| marginLeft    |                                              | `number` | 0      |
| marginRight   |                                              | `number` | 0      |
| marginTop     |                                              | `number` | 0      |
| marginBottom  |                                              | `number` | 0      |
| title         | 参考 [title](/options/plots/component/title) 相关介绍 |          |        |
| scale         | 参考 [scale](/options/plots/core/scale/overview) 相关介绍    |          |        |

`repeatMatrix` 对应的配置都可以使用 API 进行设置，例如：


### encode

对于 repeatMatrix 有自己独特的 encode 通道。

| 通道 | 描述                                       | 类型       | 默认值 |
| ---- | ------------------------------------------ | ---------- | ------ |
| x    | 指定 x 方向上字段列表，用于 x 方向空间分片 | `string[]` |        |
| y    | 指定 y 方向上字段列表，用于 y 方向空间分片 | `string[]` |        |
