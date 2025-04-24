---
title: groupX
order: 2
---

对离散的 x 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。等效于 `channels = ['x']` 的 [group](/options/plots/core/transform/group)。

## 开始使用

<img alt="groupX" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*RtalTb-DPdkAAAAAAAAAAAAADmJ7AQ" width="400" />

在对应的 mark 中有 transform 方法可以使用数据的变换。

```ts
{
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  },
  "style": {
    "stroke": "#000"
  },
  "scale": {
    "y": {
      "formatter": ".0%"
    },
    "color": {
      "palette": "spectral"
    }
  }
}
```

## 选项

| 属性      | 描述                                      | 类型      | 默认值 |
| --------- | ----------------------------------------- | --------- | ------ |
| [channel] | 输出到具体 mark 的 channel 数据的聚合方式 | `Reducer` |        |

```ts
type Primitive = number | string | boolean | Date;

type Reducer =
  | 'mean'
  | 'max'
  | 'count'
  | 'min'
  | 'median'
  | 'sum'
  | 'first'
  | 'last'
  | ((I: number[], V: Primitive[]) => Primitive);

```
