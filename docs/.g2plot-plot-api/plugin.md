### Plot Container

#### width

<description>**optional** _number_ _default:_ `400`</description>

Set the width of the chart.

#### height

<description>**optional** _number_ _default:_ `400`</description>

Set the height of the chart.

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.

#### padding

<description>**optional** _number\[] 、 number 、 'auto'_</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** _number\[] 、 number_</description>

Extra `appendPadding` value.

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

Set the render way to `canvas` or `svg`.

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

Set the pixel ratio of the chart.

#### limitInPlot

<description>**optional** _boolean_</description>

Whether clip the Geometry beyond the coordinate system。

<!-- 先插入到这里 -->

#### locale

<description>**optional** _string_</description>

Specify the locale. There are two built-in locales: 'zh-CN' and 'en-US'. Or you can use `G2Plot.registerLocale` to register a new locale. Go [src/locales/en_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en_US.ts) to see the format.

### View

#### syncViewPadding ✨

<description>**optional** _boolean_</description>

是否同步子 view 的 padding 配置。传入 boolean 值，含义是：是否需要将子 View 的 padding 同步，如果设置同步，那么可以保证子 View 在 auto padding 的情况下，所有子 View 的图形能够完全重合，避免显示上的错位。

#### views

<description>**optional** _IView\[]_</description>

Configuration of `views` is an array. Every view has its own data, geometries and geometry configuration. see more: [IView](#iview)

#### plots

<description>**可选** _IPlot\[]_</description>

每一个图层的配置，每一个 plot 也是一个图层，都包含自己的：数据、图形、图形配置.

在 2.3.9 版本之后，我们提供了 `plots` 的配置项，你可以使用 plots 来代替 views 或者联合使用.

<playground path="plugin/multi-view/demo/series-columns.ts" rid="multi-views-plots"></playground>

### IView

#### IView.region

<description>**optional** _object_</description>

The region of view, default is full of region.

Example:

```ts
// Set the region of view in the upper part
region: {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0.5 },
}
```

#### IView.data

<description>**required** _array object_</description>

Configure the data source. The data source is a collection of objects. For example:

```ts
const data = [
  { time: '1991'，value: 20 },
  { time: '1992'，value: 20 },
];
```

#### IView.geometries

<description>**optional** _array object_</description>

view 上的图形 geometry 及映射配置，具体见[Geometry Configuration](#geometryconfiguration)

<!-- common iview configuration START -->

#### IView.meta

<description>**optional** _object_</description>

Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type        | Description                                              |
| ---------- | ----------- | -------------------------------------------------------- |
| alias      | _string_    | alias of the data field                                  |
| formatter  | _function_  | callback function to format all values of the data field |
| values     | _string\[]_ | enumerate all the values of the data field               |
| range      | _number\[]_ | mapping range of the data field, default: \[0,1]         |

See also the [Meta Options](/guide/common#meta) to learn more about configuration of `meta`.

#### IView.coordinate

Configuration of coordinate, every view has its own coordinate. The geometries of the same view share the same coordinate system.

| Properties | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| type | _string_ | `'polar' | 'theta' | 'rect' | 'cartesian' | 'helix'` |
| cfg | _CoordinateCfg_ | CoordinateCfg 坐标系配置项，目前常用于极坐标 |
| actions | _array object_ | 坐标系的变换配置，具体可以见 G2 坐标系[文档](https://g2.antv.vision/en/docs/api/general/coordinate) |

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
#### IView.axes

<description>**optional** _object 、 false_</description>

view 上的图形坐标轴配置，key 值对应 `xField` 和 `yField`， value 具体配置见：[Axis API](/en/docs/api/components/axis)

<div class="sign">

```ts
{
  [field]: AxisOptions | false,
}
```

</div>

#### IView.annotations

<description>**optional** _object\[]_ </description>

Annotations of geometry in view, see more: [Annotations API](/en/docs/api/components/annotations)

#### IView.interactions

<description>**optional** _object\[]_ </description>

Interactions of view, see more: [Interactions API](/en/docs/api/options/interactions)

#### IView.tooltip

<description>**optional** _object_ </description>

Tooltip of view, see more: [Tooltip API](/en/docs/api/options/tooltip)

#### IView.animation

<description>**optional** _object_ </description>

Animation of view, see more: [Animation API](/en/docs/api/options/animation)

<!-- common iview configuration END -->

### Geometry Configuration

<!-- common igeometry configuration START -->

#### IGeometry.type

<description>**required** _string_</description>

Type of geometry, includes: `'line' | 'interval' | 'point' | 'area' | 'polygon'`。

#### IGeometry.mapping ✨

<description>**required** _object_</description>

Mapping rules of geometry.

在图形语法中，数据可以通过 `color`, `shape`, `size` 等视觉属性映射到图形上，另外 G2/G2Plot 还提供了 `style` 和 `tooltip`，让图形展示更多的信息。具体类型定义见下：（其中：ShapeStyle 具体见[绘图属性](/guide/graphic-style))

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

The mapping field of `color`. 通过颜色视觉通道对数据进行分组。

#### IGeometry.shapeField

<description>**optional** _string_</description>

The mapping field of `shape`. 通过不同的形状对数据进行分组。

#### IGeometry.sizeField

<description>**optional** _string_</description>

The mapping field of `size`. 通过 size 字段，可以将数据按照 `sizeField` 对应的数据进行不同的大小映射。

#### IGeometry.styleField

<description>**optional** _string_</description>

The mapping field of `style`,

#### IGeometry.tooltipFields

<description>**optional** _string\[] 、 false_</description>

The mapping fields of `tooltip`,

#### IGeometry.label

<description>**optional** _object_</description>

The mapping of `label`, see more: [Label API](/en/docs/api/components/label)

#### IGeometry.adjust

Adjust of data.

The purpose of adjusting data is to make the graphics not obscure each other and to have a clearer understanding of the data, but the correct understanding of the data must be ensured. See more: [Adjust | G2](https://g2.antv.vision/en/docs/manual/concepts/adjust)

| Properties | Type | Description |
| --- | --- | --- |
| type | 'stack' 、 'dodge' 、 'jitter' 、 'symmetric' | 数据调整类型 |
| marginRatio | number | 只对 'dodge' 生效，取 0 到 1 范围的值（相对于每个柱子宽度），用于控制一个分组中柱子之间的间距 |
| dodgeBy | string | 只对 'dodge' 生效，声明以哪个数据字段为分组依据 |
| reverseOrder | boolean | 只对 'stack' 生效，用于控制是否对数据进行反序操作 |

#### IGeometry.state

<description>**optional** _object_</description>

Style of different state.

<!-- common igeometry configuration END -->

### IPlot

#### IPlot.region

<description>**optional** _object_</description>

plot 所在图层(view)的布局范围，默认是占满全部。

```ts
// 示例：设置 plot 所在图层(view)的布局位置在上半部分
region: {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0.5 },
}
```

#### IPlot.type

<description>**required** _string_</description>

plot 类型，通过传入指定 type 的 plot，可以在图层上渲染 G2Plot 内置的图表。

目前开放的图表类型有以下类型：

- **基础图表**：`'line' | 'pie' | 'column' | 'bar' | 'area' | 'gauge' | 'scatter' | 'histogram'`
- **迷你图表**：`'tiny-line' | 'tiny-column' | 'tiny-area' | 'progress' | 'ring-progress'`

#### IPlot.options

<description>**required** _object\[]_</description>

plot 的具体配置项。每个 plot 都有自己的图层容器设置（不包括：width, height）以及数据、字段、样式等配置。

具体配置项见指定 plot 的 API 文档. 如：type='column'时，options 对应 ColumnOptions，见文档: [Column API](/en/docs/api/plots/column)

<div class="sign">

```ts
type IPlot =
  | {
      type: 'line';
      options: Omit<LineOptions, 'width' | 'height'>;
    }
  | {
      type: 'pie';
      options: Omit<PieOptions, 'width' | 'height'>;
    }
  | {
      // ... 等等
    };
```

</div>

**示例**：添加一个图层，引入 column plot 和 bar plot

```ts
plots: [
  {
    type: 'column',
    region: { start: { x: 0, y: 0 }, end: { x: 0.48, y: 1 } },
    options: {
      data: [
        { city: '广州', sales: 1024 },
        { city: '杭州', sales: 724 },
        { city: '深圳', sales: 1256 },
      ],
      xField: 'city',
      yField: 'sales',
      seriesField: 'city',
    },
  },
  {
    type: 'bar',
    region: { start: { x: 0.52, y: 0 }, end: { x: 1, y: 1 } },
    options: {
      data: [
        { city: '广州', sales: 1024 },
        { city: '杭州', sales: 724 },
        { city: '深圳', sales: 1256 },
      ],
      yField: 'city',
      xField: 'sales',
      seriesField: 'city',
    },
  },
];
```

### 其他

#### tooltip

顶层 tooltip 配置(在 chart 层配置)。可以让所有图层共享一个 tooltip。

当你设置子图层的 tooltip 时，建议关闭顶层 tooltip。

#### legend

顶层 legend 配置(统一在 chart 层配置)。
