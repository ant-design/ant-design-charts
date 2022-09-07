### `options.`size

`number|SizeStyleAttribute|Function` optional

当 shape 为普通热力（heatmap、heatmap3D）时，size 代表热力大小，配置如下：

| 属性  | 描述                 | 类型                 | 默认值   | 是否必填 |
| ----- | -------------------- | -------------------- | -------- | -------- |
| field | 热力大小映射字段     | `string`             |          | required |
| value | 热力大小数据映射区间 | `number[]｜Function` | `[0, 1]` | optional |

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: {
    field: 't',
    value: [0, 1],
  },
}
```

当 shape 为 3D 网格/蜂窝热力时，size 表示高度，shape 为 2D 时，size 无需设置

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

`ScaleConfig` optional default: `{}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举
