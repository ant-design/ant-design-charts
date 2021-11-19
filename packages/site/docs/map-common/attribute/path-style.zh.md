### `options.`style

`object` optional

全局样式。

```js
{
  style: {
    opacity: 0.8,
    lineType: 'dash',
    dashArray: [2, 2],
  }
}
```

#### `style.`opacity

`number` optional

线透明度。

#### `style.`lineType

`‘solid’｜'dash'` optional ‘solid’

线类型，支持实线与虚线。

#### `style.`dashArray

`[number, number]` optional

虚线间隔，虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有虚线。
