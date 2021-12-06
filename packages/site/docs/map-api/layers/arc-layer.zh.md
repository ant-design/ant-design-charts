---
title: 弧线图层 - ArcLayer
order: 7
---

`ArcLayer` 继承 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
{
  source: {
    data: [{ startX: 58.00, startY: 32.84, endX: 85.7, endY: 25.161, c: 'red', t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'startX', y: 'startY', x: 'endX', y: 'endY', }
  }
}
```

### `options.`shape

`string` optional default: `'arc'`

支持 2D 与 3D 弧线及大圆航线：

*   arc
*   arc3d
*   greatcircle

```js
{ shape: 'arc', }
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

> dashArray: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    lineType: 'dash',
    dashArray: [2, 2],
  }
}
```


### `options.`animate

`boolean｜AnimateAttr` optional

水波动画，AnimateAttr 配置如下：

| 属性        | 描述                     | 类型      | 默认值  | 是否必填 |
| ----------- | ------------------------ | --------- | ------- | -------- |
| enable      | 是否开启动画             | `boolean` | `false` | optional |
| interval    | 轨迹间隔, 取值区间 0 - 1 | `number`  |         | optional |
| duration    | 动画时间，单位秒         | `number`  |         | optional |
| trailLength | 轨迹长度 取值区间 0 - 1  | `number`  |         | optional |

```js
{
  animate: {
    duration: 4,
    interval: 0.2,
    trailLength: 0.1,
  }
}
```


## 二、属性

继承 [PlotLayer 属性](/zh/docs/map-api/layers/plot-layer#二、属性)。

## 三、方法

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#三、方法)。

## 四、事件

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#四、事件)。
