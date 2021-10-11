#### IView.meta

<description>**optional** *object*</description>

全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型       | 功能描述                                    |
| -------------- | ---------- | ------------------------------------------- |
| alias          | *string*   | 字段的别名                                  |
| formatter      | *function* | callback 方法，对该字段所有值进行格式化处理 |
| values         | *string\[]* | 枚举该字段下所有值                          |
| range          | *number\[]* | 字段的数据映射区间，默认为\[0,1]             |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh/docs/api/options/meta)


#### IView.coordinate

坐标系的配置，每一个 view 具有自己的坐标系。同一个 view 下的 geometries 共用一个坐标系。

| 参数名  | 类型            | 可选值 ｜                                                                                           |
| ------- | --------------- | --------------------------------------------------------------------------------------------------- |
| type    | *string*        | `'polar' \| 'theta' \| 'rect' \| 'cartesian' \| 'helix'`                                            |
| cfg     | *CoordinateCfg* | CoordinateCfg 坐标系配置项，目前常用于极坐标                                                        |
| actions | *array object*  | 坐标系的变换配置，具体可以见 G2 坐标系[文档](https://g2.antv.vision/zh/docs/api/general/coordinate) |

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

<description>**可选** *object | false*</description>

view 上的图形坐标轴配置，key 值对应 `xField` 和 `yField`， value 具体配置见：[Axis API](/zh/docs/api/components/axis)

<div class="sign">

```ts
{
  [field]: AxisOptions | false,
}
```

</div>

#### IView.annotations

<description>**可选** *object\[]* </description>

view 上的几何图形的图形标注配置。具体见：[Annotations API](/zh/docs/api/components/annotations)

#### IView.interactions

<description>**可选** *object\[]* </description>

view 上的交互配置。具体见：[Interactions API](/zh/docs/api/options/interactions)

#### IView.tooltip

<description>**可选** *object* </description>

每一个子 view 的 tooltip 配置。具体见：[Tooltip API](/zh/docs/api/options/tooltip)

#### IView.animation

<description>**可选** *object* </description>

每一个子 view 的动画配置。具体见：[Animation API](/zh/docs/api/options/animation)
