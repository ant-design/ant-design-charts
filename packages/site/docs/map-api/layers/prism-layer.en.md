---
title: PrismLayer
order: 9
---

---
title: 水晶体图层 - PrismLayer
order: 9
---

`PrismLayer` 继承 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '上海市', code: 310000, c: 'red', t: 20 },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [115.1806640625, 30.637912028341123],
            [114.9609375, 29.152161283318915],
            [117.79541015625001, 27.430289738862594],
            [118.740234375, 29.420460341013133],
            [117.46582031249999, 31.50362930577303],
            [115.1806640625, 30.637912028341123],
            // ......
          ],
        ],
      },
    },
  ],
};
```

```js
{
  source: {
    data,
    parser: { type: 'geojson' }
  }
}
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

水晶体高度。

```js
{ size: 120, }
```

#### `size.`field

`string` optional

水晶体高度值映射关联字段。

```js
{
  size: { fied: 't' },
}
```

#### `size.`value

`number|number[]|Function` optional

水晶体高度值映射值。

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
    value: [120, 250],
    scale: { type: 'quantile' },
  }
}
```

### `options.`style

`PolygonLayerStyleOptions` optional

区域样式，PolygonLayerStyleOptions 配置如下：

| 属性    | 描述   | 类型     | 默认值 | 是否必填 |
| ------- | ------ | -------- | ------ | -------- |
| opacity | 透明度 | `number` | `1`    | optional |

```js
{
  style: {
    opacity: 0.8,
  }
}
```

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
