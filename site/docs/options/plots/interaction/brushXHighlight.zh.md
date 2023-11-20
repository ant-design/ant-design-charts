---
title: brushXHighlight
---

x 方向框选高亮元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*liG4Rq7bzmwAAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  state: {
    'inactive': { stroke: 'gray' }
  },
  interaction: {
    brushXHighlight: {
      maskFill: 'red',
      maskOpacity: 0.5,
    },
  }
}
```

## 选项

| 属性                | 描述           | 类型              | 默认值 |
| ------------------- | -------------- | ----------------- | ------ |
| reverse             | brush 是否反转 | `boolean`         | false  |
| series              | 是否是系列元素 | `boolean`         | false  |
| facet               | 是否跨分面     | `boolean`         | false  |
| `mask${StyleAttrs}` | brush 的样式   | `number\| string` | -      |
