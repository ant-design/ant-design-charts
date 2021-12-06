---
title: 网格聚合图层 - GridLayer
order: 4
---

`GridLayer` 继承 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

### `options.`source

`SourceOptions` required

数据配置。

#### `source.`aggregation

`GridAggregation` required

数据网格聚合配置，GridAggregation 配置如下：

| 属性   | 描述     | 类型                                   | 默认值  | 是否必填 |
| ------ | -------- | -------------------------------------- | ------- | -------- |
| field  | 聚合字段 | `string`                               |         | required |
| radius | 网格半径 | `number`                               | `15000` | optional |
| method | 聚合类型 | `'count'｜'max'｜'min'｜'sum'｜'mean'` | `'sum'` | optional |

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    aggregation: { field: 't', radius: 15000, type: 'sum' }
  }
}
```

其它配置详见 [Source](/zh/docs/map-api/source)。


### `options.`shape

`string` optional default: `'square'`

元素形状，内置以下形状：

*   2D
    *   circle: 圆形
    *   square: 正方形
    *   hexagon: 六边形
    *   triangle: 三角形
*   3D
    *   cylinder: 圆柱
    *   triangleColumn: 三角形柱
    *   hexagonColumn: 六角形柱
    *   squareColumn: 方柱

```js
{ shape: 'square', }
```


### `options.`color

`string|object|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{ color: 'red', }
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  color: { fied: 'c', }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'red': 'blue'
    }
  }
}
```

#### `color.`scale

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
  color: {
    fied: 't',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`size

`number|object|Function` optional

元素大小。

**shape 为 2D 时，size 无需设置；shape 为 3D 时，size 表示高度。**

```js
{
  size: {
    field: 'value',
    value: ({ value }) => value * 2
  }
}
```

#### `size.`field

`string` required

网格大小映射字段。

#### `size.`value

`number|number[]|Function` optional

网格大小值映射值。

#### `size.`scale

`ScaleConfig` optional default: `{type: ''}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


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


## 二、属性

继承 [PlotLayer 属性](/zh/docs/map-api/layers/plot-layer#二、属性)。

## 三、方法

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#三、方法)。

## 四、事件

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#四、事件)。
