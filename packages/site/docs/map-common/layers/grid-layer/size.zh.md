### `options.`size

`number|object|Function` optional

元素大小。

**shape 为 2D 时，size 无需设置；shape 为 3D 时，size 表示高度。**

```js
{
  size: {
    field: 'value',
    value: ({ value }) => value * 2
  }
}
```

#### `size.`field

`string` required

网格大小映射字段。

#### `size.`value

`number|number[]|Function` optional

网格大小值映射值。

#### `size.`scale

`ScaleConfig` optional default: `{type: ''}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举
