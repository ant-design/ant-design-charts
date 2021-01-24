<<<<<<< HEAD
### Plot Container
=======
## title: 多图层图表&#xA;order: 8

### 图表容器
>>>>>>> master

#### width

<description>**optional** _number_ _default:_ `400`</description>

<<<<<<< HEAD
Set the width of the chart.
=======
设置图表宽度。
>>>>>>> master

#### height

<description>**optional** _number_ _default:_ `400`</description>

<<<<<<< HEAD
Set the height of the chart.
=======
设置图表高度。
>>>>>>> master

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

<<<<<<< HEAD
Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.
=======
图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。
>>>>>>> master

#### padding

<description>**optional** _number\[] | number | 'auto'_</description>

<<<<<<< HEAD
Set `padding` value of the canvas. You can also use `auto`.
=======
画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。
>>>>>>> master

#### appendPadding

<description>**optional** _number\[] | number_</description>

<<<<<<< HEAD
Extra `appendPadding` value.
=======
额外增加的 `appendPadding` 值，在 `padding` 的基础上，设置额外的 padding 数值，可以是单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向。
>>>>>>> master

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

<<<<<<< HEAD
Set the render way to `canvas` or `svg`.
=======
设置图表渲染方式为 `canvas` 或 `svg`。
>>>>>>> master

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

<<<<<<< HEAD
Set the pixel ratio of the chart.
=======
设置图表渲染的像素比，和底层的 devicePixelRatio 含义一致，一般不用设置，除非在页面有整体 scale 的情况下，可以自定义。
>>>>>>> master

#### limitInPlot

<description>**optional** _boolean_</description>

<<<<<<< HEAD
Whether clip the Geometry beyond the coordinate system。

### View
=======
是否对超出坐标系范围的 Geometry 进行剪切。

### 图层
>>>>>>> master

#### views

<description>**required** _IView\[]_</description>

<<<<<<< HEAD
Configuration of `views` is an array. Every view has its own data, geometries and geometry configuration. see more: [View Configuration](#viewconfiguration)
=======
每一个图层的配置，每个图层都包含自己的：数据、图形、图形配置。具体见 [图层配置](#图层配置)
>>>>>>> master

#### syncViewPadding ✨

<description>**optional** _boolean_</description>

是否同步子 view 的 padding 配置。传入 boolean 值，含义是：是否需要将子 View 的 padding 同步，如果设置同步，那么可以保证子 View 在 auto padding 的情况下，所有子 View 的图形能够完全重合，避免显示上的错位。

<<<<<<< HEAD
### View Configuration
=======
### 图层配置
>>>>>>> master

#### IView.region

<description>**optional** _object_</description>

<<<<<<< HEAD
The region of view, default is full of region.
=======
view 的布局范围，默认是占满全部。
>>>>>>> master

Example:

```ts
<<<<<<< HEAD
// Set the region of view in the upper part
=======
// 设置 view 的布局位置在上半部分
>>>>>>> master
region: {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0.5 },
}
```

#### IView.data

<description>**required** _array object_</description>

<<<<<<< HEAD
Configure the data source. The data source is a collection of objects. For example:
=======
设置图表数据源。数据源为对象集合，例如：
>>>>>>> master

```ts
const data = [
  { time: '1991'，value: 20 },
  { time: '1992'，value: 20 },
];
```

#### IView.meta

<description>**optional** _object_</description>

<<<<<<< HEAD
Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type        | Description                                              |
| ---------- | ----------- | -------------------------------------------------------- |
| alias      | _string_    | alias of the data field                                  |
| formatter  | _function_  | callback function to format all values of the data field |
| values     | _string\[]_ | enumerate all the values of the data field               |
| range      | _number\[]_ | mapping range of the data field, default: \[0,1]         |

See also the [Meta Options](/guide/common#meta-configuration) to learn more about configuration of `meta`.

#### IView.coordinate

Configuration of coordinate, every view has its own coordinate. The geometries of the same view share the same coordinate system.

| Properties | Type | Description |
| --- | --- | --- |
| type | _string_ | `'polar' \| 'theta' \| 'rect' \| 'cartesian' \| 'helix'` |
| cfg | _CoordinateCfg_ | CoordinateCfg 坐标系配置项，目前常用于极坐标 |
| actions | _array object_ | 坐标系的变换配置，具体可以见 G2 坐标系[文档](https://g2.antv.vision/en/docs/api/general/coordinate) |
=======
全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型        | 功能描述                                    |
| -------------- | ----------- | ------------------------------------------- |
| alias          | _string_    | 字段的别名                                  |
| formatter      | _function_  | callback 方法，对该字段所有值进行格式化处理 |
| values         | _string\[]_ | 枚举该字段下所有值                          |
| range          | _number\[]_ | 字段的数据映射区间，默认为\[0,1]            |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh/docs/api/options/meta)

#### IView.coordinate

坐标系的配置，每一个 view 具有自己的坐标系。同一个 view 下的 geometries 共用一个坐标系。

| 参数名 | 类型 | 可选值 ｜ |
| --- | --- | --- | --- | --- | --- | --- |
| type | _string_ | `'polar' | 'theta' | 'rect' | 'cartesian' | 'helix'` |
| cfg | _CoordinateCfg_ | CoordinateCfg 坐标系配置项，目前常用于极坐标 |
| actions | _array object_ | 坐标系的变换配置，具体可以见 G2 坐标系[文档](https://g2.antv.vision/zh/docs/api/general/coordinate) |
>>>>>>> master

<div class="sign">

```ts
type CoordinateCfg = {
  // 用于极坐标，配置起始弧度。
  startAngle?: number;
  // 用于极坐标，配置结束弧度。
  endAngle?: number;
  // 用于极坐标，配置极坐标半径，0 - 1 范围的数值。
  radius?: number;
  // 用于极坐标，极坐标内半径，0 -1 范围的数值。
  innerRadius?: number;
};
```

</div>

#### IView.geometries

<description>**optional** _array object_</description>

<<<<<<< HEAD
view 上的图形 geometry 及映射配置，具体见[Geometry Configuration](#geometryconfiguration)
=======
view 上的图形 geometry 及映射配置，具体见[图形配置](#图形配置)
>>>>>>> master

#### IView.axes

<description>**optional** _object | false_</description>

<<<<<<< HEAD
view 上的图形坐标轴配置，key 值对应 `xField` 和 `yField`， value 具体配置见：[Axis API](/en/docs/api/components/axis)
=======
view 上的图形坐标轴配置，key 值对应 `xField` 和 `yField`， value 具体配置见：[Axis API](/zh/docs/api/components/axis)
>>>>>>> master

<div class="sign">

```ts
{
  [field]: AxisOptions | false,
}
```

</div>

#### IView.annotations

<description>**optional** _object\[]_ </description>

<<<<<<< HEAD
Annotations of geometry in view, see more: [Annotations API](/en/docs/api/components/annotations)
=======
view 上的几何图形的图形标注配置。具体见：[Annotations API](/zh/docs/api/components/annotations)
>>>>>>> master

#### IView.interactions

<description>**optional** _object\[]_ </description>

<<<<<<< HEAD
Interactions of view, see more: [Interactions API](/en/docs/api/options/interactions)

### Geometry Configuration
=======
view 上的交互配置。具体见：[Interactions API](/zh/docs/api/options/interactions)

### 图形配置
>>>>>>> master

#### IGeometry.type

<description>**required** _string_</description>

<<<<<<< HEAD
Type of geometry, includes: `'line' | 'interval' | 'point' | 'area' | 'polygon'`。
=======
几何图形 geometry 类型。可选值: `'line' | 'interval' | 'point' | 'area' | 'polygon'`。
>>>>>>> master

#### IGeometry.mapping ✨

<description>**required** _object_</description>

<<<<<<< HEAD
Mapping rules of geometry.

在图形语法中，数据可以通过 `color`, `shape`, `size` 等视觉属性映射到图形上，另外 G2/G2Plot 还提供了 `style` 和 `tooltip`，让图形展示更多的信息。具体类型定义见下：（其中：ShapeStyle 具体见[绘图属性](/guide/graphic-style))
=======
图形配置规则。在图形语法中，数据可以通过 `color`, `shape`, `size` 等视觉属性映射到图形上，另外 G2/G2Plot 还提供了 `style` 和 `tooltip`，让图形展示更多的信息。具体类型定义见下：（其中：ShapeStyle 具体见[绘图属性](/zh/docs/api/graphic-style))
>>>>>>> master

<div class="sign">

```ts
type MappingOptions = {
  /** color 映射 */
  readonly color?: ColorAttr;
  /** shape 映射 */
  readonly shape?: ShapeAttr;
  /** 大小映射, 提供回调的方式 */
  readonly size?: SizeAttr;
  /** 样式映射 */
  readonly style?: StyleAttr;
  /** tooltip 映射 */
  readonly tooltip?: TooltipAttr;
};

/** 颜色映射 */
type ColorAttr = string | string[] | ((datum: Datum) => string);
/** 尺寸大小映射 */
type SizeAttr = number | [number, number] | ((datum: Datum) => number);
/** 图形 shape 映射 */
type ShapeAttr = string | string[] | ((datum: Datum) => string);
/** 图形样式 style 映射 */
type StyleAttr = ShapeStyle | ((datum: Datum) => ShapeStyle);
/** tooltip 的回调 */
type TooltipAttr = (datum: Datum) => { name: string; value: string | number };
```

</div>

#### IGeometry.xField

<description>**optional** _string_</description>

对应 x 轴字段。数据映射到几何图形 geometry 上时，最重要的通道是 `position` 通道。笛卡尔坐标系上的几何图形，通常是一维或二维的，对应位置视觉通道需要 `x`, `y` 两个（或一个）字段的值。

#### IGeometry.yField

<description>**optional** _string_</description>

对应 y 轴字段。数据映射到几何图形 geometry 上时，最重要的通道是 `position` 通道。笛卡尔坐标系上的几何图形，通常是一维或二维的，对应位置视觉通道需要 `x`, `y` 两个（或一个）字段的值。

#### IGeometry.colorField

<description>**optional** _string_</description>

<<<<<<< HEAD
The mapping field of `color`. 通过颜色视觉通道对数据进行分组。
=======
对应颜色(color)映射字段。通过颜色视觉通道对数据进行分组。
>>>>>>> master

#### IGeometry.shapeField

<description>**optional** _string_</description>

<<<<<<< HEAD
The mapping field of `shape`. 通过不同的形状对数据进行分组。
=======
对应形状(shape)映射字段。通过不同的形状对数据进行分组。
>>>>>>> master

#### IGeometry.sizeField

<description>**optional** _string_</description>

<<<<<<< HEAD
The mapping field of `size`. 通过 size 字段，可以将数据按照 `sizeField` 对应的数据进行不同的大小映射。
=======
对应大小(size)映射字段。通过 size 字段，可以将数据按照 `sizeField` 对应的数据进行不同的大小映射。
>>>>>>> master

#### IGeometry.styleField

<description>**optional** _string_</description>

<<<<<<< HEAD
The mapping field of `style`,
=======
style 映射字段。
>>>>>>> master

#### IGeometry.tooltipFields

<description>**optional** _string\[] | false_</description>

<<<<<<< HEAD
The mapping fields of `tooltip`,
=======
tooltip 映射字段。
>>>>>>> master

#### IGeometry.label

<description>**optional** _object_</description>

<<<<<<< HEAD
The mapping of `label`, see more: [Label API](/en/docs/api/components/label)

#### IGeometry.adjust

Adjust of data.

The purpose of adjusting data is to make the graphics not obscure each other and to have a clearer understanding of the data, but the correct understanding of the data must be ensured. See more: [Adjust | G2](https://g2.antv.vision/en/docs/manual/concepts/adjust)

| Properties | Type | Description |
| --- | --- | --- |
| type | 'stack' \| 'dodge' \| 'jitter' \| 'symmetric' | 数据调整类型 |
=======
label 映射通道，具体见 [Label API](/zh/docs/api/components/label)

#### IGeometry.adjust

数据调整配置项。调整数据的目的是为了使得图形不互相遮挡，对数据的认识更加清晰，但是必须保证对数据的正确理解，更多信息可以查看 [数据调整 | G2](https://g2.antv.vision/zh/docs/manual/concepts/adjust)

| 参数名 | 类型 | 描述 |
| --- | --- | --- | --- | --- | --- |
| type | 'stack' | 'dodge' | 'jitter' | 'symmetric' | 数据调整类型 |
>>>>>>> master
| marginRatio | number | 只对 'dodge' 生效，取 0 到 1 范围的值（相对于每个柱子宽度），用于控制一个分组中柱子之间的间距 |
| dodgeBy | string | 只对 'dodge' 生效，声明以哪个数据字段为分组依据 |
| reverseOrder | boolean | 只对 'stack' 生效，用于控制是否对数据进行反序操作 |

#### IGeometry.state

<description>**optional** _object_</description>

<<<<<<< HEAD
Style of different state.
=======
不同状态的样式
>>>>>>> master
