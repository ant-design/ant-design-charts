### `options.`style

`HeatmapLayerStyleOptions|GridHeatmapLayerStyleOptions` optional

普通热力样式，HeatmapLayerStyleOptions 配置如下：

| 属性       | 描述               | 类型         | 默认值 | 是否必填 |
| ---------- | ------------------ | ------------ | ------ | -------- |
| intensity  | 全局热力权重       | `number`     | `3`    | optional |
| radius     | 热力半径，单位像素 | `number`     | `20`   | optional |
| opacity    | 透明度             | `number`     | `1`    | optional |
| rampColors | 热力色带           | `RampColors` |        | optional |

热力色带，RampColors 配置如下：

| 属性      | 描述       | 类型       | 默认值 | 是否必填 |
| --------- | ---------- | ---------- | ------ | -------- |
| colors    | 颜色       | `string[]` |        | required |
| positions | 热力映射值 | `number[]` |        | required |

```js
{
  style: {
    intensity: 3,
    radius: 20,
    opacity: 1,
    rampColors: {
      colors: ['#FF4818', '#F7B74A', '#FFF598', '#F27DEB', '#8C1EB2', '#421EB2'],
      positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    },
  }
}
```

网格/蜂窝热力样式，GridHeatmapLayerStyleOptions 配置如下：

| 属性     | 描述                    | 类型     | 默认值 | 是否必填 |
| -------- | ----------------------- | -------- | ------ | -------- |
| opacity  | 透明度                  | `number` | `1`    | optional |
| coverage | 覆盖度，范围 0 到 1     | `string` | `0.9`  | optional |
| angle    | 旋转角度，范围 0 到 360 | `number` | `0`    | optional |

```js
{
  style: {
    coverage: 0.9,
    angle: 0,
    opacity: 1.0,
  }
}
```
