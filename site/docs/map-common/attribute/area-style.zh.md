### `options.`style

`object` optional

区域样式。

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    strokeWidth: 2
  }
}
```

#### `style.`opacity

`number` optional

填充透明度。

#### `style.`stroke

`string` optional

边线描边颜色。

#### `style.`strokeWidth

`number` optional

描边的宽度。

#### `style.`lineType

`‘solid’｜'dash'` optional ‘solid’

描边线类型，支持实线与虚线。

#### `style.`dashArray

`[number, number]` optional

虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有描边。

#### `style.`lineOpacity

`number` optional

描边透明度。
