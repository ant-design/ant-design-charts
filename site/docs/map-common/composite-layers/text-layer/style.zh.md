`TextLayerStyleOptions` optional

字体样式，TextLayerStyleOptions 配置如下：

| 属性             | 描述                                                                      | 类型        | 默认值     | 是否必填 |
| ---------------- | ------------------------------------------------------------------------- | ----------- | ---------- | -------- |
| fill             | 字体颜色                                                                  | `ColorAttr` | `'#fff'`   | optional |
| fontSize         | 字体大小                                                                  | `SizeAttr`  | `12`       | optional |
| opacity          | 文字透明度                                                                | `number`    | `1`        | optional |
| stroke           | 文字描边颜色                                                              | `string`    | `'#fff'`   | optional |
| strokeWidth      | 文字描边宽度                                                              | `number`    | `0`        | optional |
| strokeOpacity    | 文字描边透明度                                                            | `number`    | `1`        | optional |
| fontFamily       | 文字字体                                                                  | `string`    |            | optional |
| fontWeight       | 字体粗细程度                                                              | `string`    |            | optional |
| textAllowOverlap | 是否允许文本覆盖                                                          | `boolean`   | `false`    | optional |
| textAnchor       | 文本相对锚点的位置                                                        | `string`    | `'center'` | optional |
| textOffset       | 文本相对锚点的偏移量                                                      | `number[]`  | `[0, 0]`   | optional |
| spacing          | 字符间距                                                                  | `number`    | `0`        | optional |
| padding          | 文本包围盒 padding （水平，垂直），影响碰撞检测结果，避免相邻文本靠的太近 | `number[]`  | `[0, 0]`   | optional |

textAnchor 文本相对锚点的位置，支持以下相对锚点的位置：

*   'right'
*   'top-right'
*   'left'
*   'bottom-right'
*   'left'
*   'top-left'
*   'bottom-left'
*   'bottom'
*   'bottom-right'
*   'bottom-left'
*   'top'
*   'top-right'
*   'top-left'
*   'center'
