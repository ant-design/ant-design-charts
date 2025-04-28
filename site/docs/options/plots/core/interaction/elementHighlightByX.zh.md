---
title: elementHighlightByX
order: 12
---

高亮和鼠标悬浮的元素拥有相同 x 通道值的元素。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1670298045860/element-highlight-by-x.gif" width="640">

```ts
{
  "paddingLeft": 50,
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "transform": [
    {
      "type": "dodgeX"
    }
  ],
  "interaction": {
    "elementHighlightByX": true
  }
}
```

## 选项

| 属性                      | 描述           | 类型         | 默认值 |
| ------------------------- | -------------- | ------------ | ------ |
| background                | 是否高亮背景   | `boolean`    | false  |
| offset                    | 主方向的偏移量 | `number`     | 0      |
| `background${StyleAttrs}` | 背景的样式     | `StyleAttrs` | -      |
