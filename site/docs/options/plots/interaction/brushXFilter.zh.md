---
title: brushXFilter
---

x 方向框选筛选元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Wz7zQaiBiXwAAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  state: {
    'inactive': { stroke: 'gray' }
  },
  interaction: {
    brushXFilter: true,
  }
}
```

## 选项

| 属性                | 描述           | 类型                           | 默认值 |
| ------------------- | -------------- | ------------------------------ | ------ |
| reverse             | brush 是否反转 | `boolean`                      | false  |
| `mask${StyleAttrs}` | brush 的样式   | `number             \| string` | -      |
