### `options.`style

`HeatmapLayerStyleOptions` optional

热力样式，HeatmapLayerStyleOptions 配置如下：

| 属性       | 描述               | 类型        | 默认值 | 是否必填 |
| ---------- | ------------------ | ----------- | ------ | -------- |
| intensity  | 全局热力权重       | `number`    | `3`    | optional |
| radius     | 热力半径，单位像素 | `number`    | `20`   | optional |
| opacity    | 透明度             | `number`    | `1`    | optional |
| colorsRamp | 热力色带           | `ColorRamp` |        | optional |

热力色带，ColorRamp 配置如下：

| 属性     | 描述       | 类型     | 默认值 | 是否必填 |
| -------- | ---------- | -------- | ------ | -------- |
| color    | 颜色       | `string` |        | required |
| position | 热力映射值 | `number` |        | required |

```js
{
  style: {
    intensity: 3,
    radius: 20,
    opacity: 1,
    colorsRamp: [
      { color: 'rgba(33,102,172,0.0)', position: 0 },
      { color: 'rgb(103,169,207)', position: 0.2 },
      { color: 'rgb(209,229,240)', position: 0.4 },
      { color: 'rgb(253,219,199)', position: 0.6 },
      { color: 'rgb(239,138,98)', position: 0.8 },
      { color: 'rgb(178,24,43,1.0)', position: 1 },
    ],
  }
}
```
