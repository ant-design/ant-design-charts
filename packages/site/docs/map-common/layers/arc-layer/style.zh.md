### `options.`style

`LinesLayerStyleOptions` optional

元素样式，LinesLayerStyleOptions 配置如下：

| 属性        | 描述                   | 类型               | 默认值  | 是否必填 |
| ----------- | ---------------------- | ------------------ | ------- | -------- |
| opacity     | 透明度                 | `number`           | `1`     | optional |
| lineType    | 线类型，支持实线与虚线 | `‘solid’｜'dash'`  | ‘solid’ | optional |
| dashArray   | 虚线间隔               | `[number, number]` |         | optional |
| sourceColor | 渐变起点颜色           | `string`           |         | optional |
| targetColor | 渐变终点颜色           | `string`           |         | optional |

> dashArray: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。dashArray 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    lineType: 'dash',
    dashArray: [2, 2],
  }
}
```
