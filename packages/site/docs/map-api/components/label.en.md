---
title: Label
order: 3
---

---
title: 数据标签 - Label
order: 3
---

## `label.`field

`string` required

映射的标签数据字段。

<!-- ## `label.`content

`string` optional default: `''`

标签文本内容。 -->

## `label.`style

`PointTextLayerStyleOptions` optional

字体样式，PointTextLayerStyleOptions 配置如下：

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


## `label.`state

`IStateAttribute` optional

标签交互反馈效果。

### `state.`active

`boolean｜IActiveOption` optional default: `false`

标签 mousehover 高亮效果，开启 mousehover 标签高亮效果：

```js
{
  state: { active: true, }
}
```

开启 mousehover 标签高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: { color: 'red', }
  }
}
```

### `state.`select

`boolean｜IActiveOption` optional default: `false`

标签 mouseclick 选中高亮效果，开启 mouseclick 标签高亮效果：

```js
{
  state: { select: true, }
}
```

开启 mousehover 标签高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: { color: 'red', }
  }
}
```
