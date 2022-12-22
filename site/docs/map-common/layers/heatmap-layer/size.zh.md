### `options.`size

`SizeAttr` required

热力大小配置，SizeAttr 配置如下：

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
