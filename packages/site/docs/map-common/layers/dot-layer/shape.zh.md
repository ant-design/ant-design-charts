### `options.`shape

`string|Function|object` optional default: `'circle'`

元素形状，内置以下形状：

*   2D
    *   circle: 圆形
    *   square: 正方形
    *   hexagon: 六边形
    *   triangle: 三角形
    *   pentagon: 五角星
    *   octogon: 八边形
    *   hexagram: 六边形
    *   rhombus: 菱形
    *   vesica: 椭圆形
    *   dot: 圆点
*   3D
    *   cylinder: 圆柱
    *   triangleColumn: 三角形柱
    *   hexagonColumn: 六角形柱
    *   squareColumn: 方柱

```js
{ shape: 'circle', }
```

除内置图标外，还可**自定义图标**：

1.  注册图标

```js
const images = [
  { id: '01', image: 'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg' },
  { id: '02', image: 'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg' },
  { id: '03', image: 'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg' },
];
registerImages(images);
```

2.  使用注册图标

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: '01', n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  shape: 's',
}
```

#### `shape.`field

`string` optional

元素形状值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: 'circle', t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  shape: { fied: 's', }
}
```

#### `shape.`value

`string|string[]|Function` optional

元素形状值映射值。

```js
{
  shape: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'triangle': 'circle'
    }
  }
}
```

#### `shape.`scale

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
  shape: {
    fied: 't',
    value: ['circle', 'triangle'],
    scale: { type: 'quantile' }
  }
}
```
