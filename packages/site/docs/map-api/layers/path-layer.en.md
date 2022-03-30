---
title: PathLayer
order: 6
---

---
title: 路径图层 - PathLayer
order: 6
---

`PathLayer` 继承 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
{
  source: {
    data: [{
        path: [[58.00, 32.84],[85.7, 25.161],[101.95, 41.77],[114.96, 39.63],[117.421, 28.61]],
        c: 'red',
        t: 20,
        n: 'chengdu'
      }],
    parser: { type: 'json', coordinates: 'path', }
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
  color: { field: 'c', }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    field: 't',
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
    field: 't',
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
  size: { field: 't', }
}
```

#### `size.`value

`number|number[]|Function` optional

元素大小值映射值。

```js
{
  size: {
    field: 't',
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
    field: 't',
    value: [12, 15],
    scale: { type: 'quantile' },
  }
}
```


### `options.`style

`LinesLayerStyleOptions` optional

元素样，LinesLayerStyleOptions 配置如下：

| 属性      | 描述                   | 类型               | 默认值  | 是否必填 |
| --------- | ---------------------- | ------------------ | ------- | -------- |
| opacity   | 透明度                 | `number`           | `1`     | optional |
| lineType  | 线类型，支持实线与虚线 | `‘solid’｜'dash'`  | ‘solid’ | optional |
| dashArray | 虚线间隔               | `[number, number]` |         | optional |

> dashArray: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。dashArray 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    lineType: 'dash',
    dashArray: [2, 2],
  }
}
```


## 二、属性

继承 [PlotLayer 属性](/zh/docs/map-api/layers/plot-layer#二、属性)。

## 三、方法

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#三、方法)。

## 四、事件

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#四、事件)。
