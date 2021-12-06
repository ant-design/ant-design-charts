### `options.`size

`number|object|Function` optional default: `12`

元素大小。

```js
{ size: 12, }
```

#### `size.`field

`string` optional

元素大小值映射关联字段。

```js
{
  source: {
    data: [{ startX: 58.00, startY: 32.84, endX: 85.7, endY: 25.161, c: 'red', t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'startX', y: 'startY', x: 'endX', y: 'endY', }
  },
  size: { fied: 't', }
}
```

#### `size.`value

`number|number[]|Function` optional

元素大小值映射值。

```js
{
  size: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 15 : 12
    }
  }
}
```

#### `size.`scale

`ScaleConfig` optional default: `{type: ''}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


```js
{
  size: {
    fied: 't',
    value: [12, 15],
    scale: { type: 'quantile' }
  }
}
```
