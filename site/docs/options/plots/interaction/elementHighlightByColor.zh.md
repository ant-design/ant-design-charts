---
title: elementHighlightByColor
---

高亮和鼠标悬浮的元素拥有相同 color 通道值的元素。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1670297651394/highlight-by-color.gif" width="640">

```ts
{
  state: {
    inactive: { opacity: 0.5 },
    active: { fill: 'red', linkFillOpacity: 0.5 }
  },
  interaction: {
    elementHighlightByColor: {
      link: true
    }
  }
}
```

## 选项

| 属性                      | 描述           | 类型         | 默认值 |
| ------------------------- | -------------- | ------------ | ------ |
| link                      | 是否展示连接线 | `boolean`    | false  |
| background                | 是否高亮背景   | `boolean`    | false  |
| offset                    | 主方向的偏移量 | `number`     | 0      |
| `link${StyleAttrs}`       | 连接线样式     | `StyleAttrs` | -      |
| `background${StyleAttrs}` | 背景的样式     | `StyleAttrs` | -      |
