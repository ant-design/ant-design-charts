---
title: groupColor
order: 2
---

对离散的 color 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。

## 开始使用

<img alt="groupColor" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*6CbxQ6P9bFcAAAAAAAAAAAAADmJ7AQ" width="500" />

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
  "labels": [
    {
      "text": "sex",
      "position": "inside"
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "transform": [
    {
      "type": "normalizeY"
    },
    {
      "type": "stackY"
    }
  ]
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
