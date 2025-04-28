---
title: brushFilter
order: 6.1
---

框选筛选元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*indVQalzZEQAAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  "interaction": {
    "brushFilter": true
  }
}
```

## 选项

| 属性                | 描述           | 类型                           | 默认值 |
| ------------------- | -------------- | ------------------------------ | ------ |
| reverse             | brush 是否反转 | `boolean`                      | false  |
| `mask${StyleAttrs}` | brush 的样式   | `number             \| string` | -      |

## 案例

获得当前筛选数据，会在每次筛选和重置的时候触发以下事件：

```js
null;

```
