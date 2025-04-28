---
title: sortX
order: 2
---

对离散的 x 比例尺的定义域根据指定通道排序。

## 开始使用

<img alt="sortX" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*TehBRbDnoIkAAAAAAAAAAAAADmJ7AQ/original" width="500" />

```ts
null;

```

## 选项

| 属性    | 描述                                                   | 类型                         | 默认值  |
| ------- | ------------------------------------------------------ | ---------------------------- | ------- |
| reverse | 是否逆序                                               | `boolean`                    | `false` |
| by      | 指定排序的通道                                         | `string`                     | `y`     |
| slice   | 选择一个分片范围                                       | `number \| [number, number]` | `y`     |
| reducer | 分组聚合，用于比较大小                                 | `Reducer`                    | `max`   |
| ordinal | reducer 处理逻辑，若被处理的数据是连续在设置为 `false` | `boolean`                    | `true`  |

```ts
type Primitive = number | string | boolean | Date;

type Reducer =
  | 'max'
  | 'min'
  | 'sum'
  | 'first'
  | 'last'
  | 'mean'
  | 'median'
  | ((I: number[], V: Primitive[]) => Primitive);

```
