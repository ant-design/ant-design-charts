### `options.`style

`AreaLayerStyle` optional

区域样式，AreaLayerStyle 配置如下：

| 属性        | 描述                       | 类型               | 默认值      | 是否必填 |
| ----------- | -------------------------- | ------------------ | ----------- | -------- |
| opacity     | 填充透明度                 | `number`           | `1`         | optional |
| stroke      | 边线描边颜色               | `string`           | `'#2f54eb'` | optional |
| strokeWidth | 描边的宽度                 | `number`           | `1.5`       | optional |
| lineOpacity | 描边透明度                 | `number`           | `0.8`       | optional |
| lineType    | 描边线类型，支持实线与虚线 | `‘solid’｜'dash'`  | `‘solid’`   | optional |
| dashArray   | 虚线间隔                   | `[number, number]` |             | optional |

> dashArray: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    strokeWidth: 2,
  }
}
```
