---
title: 数据标签 - Lable
order: 3
---

## `label.`field

`string` optional default: `''`

映射的标签数据字段。

## `label.`content

`string` optional default: `''`

标签文本内容。

## `label.`style

`PointTextLayerStyleOptions` optional

标签字体样式。

### `style.`fill

`string` optional default: `'#fff'`

字体颜色。

### `style.`fontSize

`number` optional default: `12`

字体大小。

### `style.`opacity

`number` optional default: `1`

文字透明度。

### `style.`stroke

`string` optional default: `'#fff'`

文字描边颜色。

### `style.`strokeWidth

`number` optional default: `0`

文字描边宽度。

### `style.`strokeOpacity

`number` optional default: `1`

文字描边透明度。

### `style.`fontFamily

`string` optional

文字字体。

### `style.`fontWeight

`string` optional

文字字体粗细程度。

### `style.`textAllowOverlap

`boolean` optional default: `false`

是否允许文本覆盖。

### `style.`textAnchor

`string` optional default: `'center'`

文本相对锚点的位置，支持以下相对锚点的位置：

*   'right'
*   'top-right'
*   'left'
*   'bottom-right'
*   'left'
*   'top-left'
*   'bottom-left'
*   'bottom'
*   'bottom-right'
*   'bottom-left'
*   'top'
*   'top-right'
*   'top-left'
*   'center'

### `style.`textOffset

`number[]` optional default: `[0, 0]`

文本相对锚点的偏移量。

### `style.`spacing

`number` optional default: `0`

字符间距。

### `style.`spacing

`number[]` optional default: `[0, 0]`

文本包围盒 padding （水平，垂直），影响碰撞检测结果，避免相邻文本靠的太近。

## `label.`state

`IStateAttribute` optional

标签交互反馈效果。

### `state.`active

`boolean｜IActiveOption` optional default: `false`

标签 mousehover 高亮效果，开启 mousehover 标签高亮效果：

```js
{
  state: {
    active: true;
  }
}
```

开启 mousehover 标签高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: {
      color: 'red';
    }
  }
}
```

### `state.`select

`boolean｜IActiveOption` optional default: `false`

标签 mouseclick 选中高亮效果，开启 mouseclick 标签高亮效果：

```js
{
  state: {
    select: true;
  }
}
```

开启 mousehover 标签高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: {
      color: 'red';
    }
  }
}
```
