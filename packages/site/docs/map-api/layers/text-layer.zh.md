---
title: 文本图层 - TextLayer
order: 1
---

`TextLayer` 继承基类 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, c: 'red', t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
}
```

### `options.`field

`string` required

映射的标签数据字段。

### `options.`style

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


### `options.`state

`StateAttribute` optional

元素交互反馈效果。

#### `state.`active

`boolean｜ActiveOption` optional default: `false`

标签 mousehover 高亮效果，开启 mousehover 元素高亮效果：

```js
{
  state: { active: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: { color: 'red', }
  }
}
```

#### `state.`select

`boolean｜ActiveOption` optional default: `false`

元素 mouseclick 选中高亮效果，开启 mouseclick 元素高亮效果：

```js
{
  state: { select: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: { color: 'red', }
  }
}
```


## 二、属性

继承 [PlotLayer 属性](/zh/docs/map-api/layers/plot-layer#二、属性)。

## 三、方法

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#三、方法)。

## 四、事件

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#四、事件)。
