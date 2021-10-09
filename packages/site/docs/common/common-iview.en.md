#### IView.meta

<description>**optional** *object*</description>

Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type       | Description                                              |
| ---------- | ---------- | -------------------------------------------------------- |
| alias      | *string*   | alias of the data field                                  |
| formatter  | *function* | callback function to format all values of the data field |
| values     | *string\[]* | enumerate all the values of the data field               |
| range      | *number\[]* | mapping range of the data field, default: \[0,1]          |

See also the [Meta Options](/en/docs/api/options/meta) to learn more about configuration of `meta`.


#### IView.coordinate

Configuration of coordinate, every view has its own coordinate. The geometries of the same view share the same coordinate system.

| Properties  | Type     | Description      |
| ------- | --------------- | -------------------------------------------------------- |
| type    | *string*        | `'polar' | 'theta' | 'rect' | 'cartesian' | 'helix'` |
| cfg     | *CoordinateCfg* |   CoordinateCfg 坐标系配置项，目前常用于极坐标    |
| actions | *array object*  | 坐标系的变换配置，具体可以见 G2 坐标系[文档](https://g2.antv.vision/en/docs/api/general/coordinate)

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

<description>**optional** *object | false*</description>

view 上的图形坐标轴配置，key 值对应 `xField` 和 `yField`， value 具体配置见：[Axis API](/en/docs/api/components/axis)

<div class="sign">

```ts
{
  [field]: AxisOptions | false,
}
```

</div>

#### IView.annotations

<description>**optional** *object\[]* </description>

Annotations of geometry in view, see more: [Annotations API](/en/docs/api/components/annotations)

#### IView.interactions

<description>**optional** *object\[]* </description>

Interactions of view, see more: [Interactions API](/en/docs/api/options/interactions)

#### IView.tooltip

<description>**optional** *object* </description>

Tooltip of view, see more: [Tooltip API](/en/docs/api/options/tooltip)

#### IView.animation

<description>**optional** *object* </description>

Animation of view, see more: [Animation API](/en/docs/api/options/animation)
