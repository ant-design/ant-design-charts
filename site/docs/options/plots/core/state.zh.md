---
title: 状态（State）
order: 11
---

Ant Design Charts 中**状态（State）** 主要用来控制标记的状态样式。这些状态会被交互触发，属性是 @antv/g 支持的样式属性。

```js
({
  state: {
    /** fill 填充色；stroke 描边色；strokeWidth 描边宽度 */
    active: { fill: 'red', stroke: 'blue', strokeWidth: 2 },
    inactive: { fill: '#aaa' },
  },
});

```


## 内置状态

目前一共有 4 个内置状态：

- active - 高亮时候的样式
- inactive - 没有高亮时候的样式
- selected - 选择时候的样式
- unselected - 没有选择时候的样式

## 高亮状态

```js
{
  "interaction": "elementHighlight",
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```

## 选择状态

```js
{
  "interaction": "elementSelect",
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```
