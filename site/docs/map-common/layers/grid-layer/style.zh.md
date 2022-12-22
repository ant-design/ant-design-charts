### `options.`style

`GridHeatmapLayerStyleOptions` optional

元素样式, GridHeatmapLayerStyleOptions 配置如下：

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
