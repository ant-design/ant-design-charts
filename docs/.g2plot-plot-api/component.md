## title: API

![tooltip](https://gw.alipayobjects.com/zos/antfincdn/Mr1Y0JPq1f/77c016b3-f51e-443d-b51a-af17564769ad.png)

#### Usage

There are two ways to configure tooltip

Method 1, pass in 'Boolean' to set whether to display a tooltip.

```ts
tooltip: false; // close tooltip
```

Method 2, pass in _TooltipCfg_ to configure the tooltip as a whole.

```ts
tooltip: {
  showCrosshairs: false,
  showMarkers: false,
}
```

#### Properties

##### fields

<description>**optional** _string\[]_</description>

Specifies the fields to be displayed in the Tooltip. By default, different charts have different default field lists. Use with the 'formatter' configuration for more effect.

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** _Function_</description>

Formats the contents of the Tooltip Item (you can use `customContent` when content contains multiple tooltipItems).

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '%' };
  },
}
```

##### follow

<description>**optional** _boolean_ _default:_ `true`</description>

Sets whether the Tooltip content box follows the mouse.

##### enterable

<description>**optional** _boolean_ _default:_ `false`</description>

Whether the tooltip allows mouse to slide in.

##### showTitle

<description>**optional** _boolean_ _default:_ `false`</description>

Whether show tooltip title.

##### title

<description>**optional** _string_</description>

Set the title content of the Tooltip: If the value is the name of the data field, the value for the field in the data is displayed, and if the field does not exist in the data, the title value is displayed directly.

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

Sets the fixed display location of the Tooltip relative to the data point.

##### shared

<description>**optional** _boolean_</description>

True means that all data corresponding to the current point is merged and displayed, while false means that only the data content closest to the current point is displayed.

##### showCrosshairs

<description>**optional** _boolean_ _default:_ `false`</description>

Whether show crosshairs。

##### crosshairs

<description>**optional** _object_</description>

Configure tooltip crosshairs to work if and only if 'showCrosshairs' is true.

| Properties | Type | Description |
| --- | --- | --- |
| type | _'x' 、 'y' 、 'xy'_ | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis |
| line | _lineStyle_ | The configuration item for line, see more [_ShapeAttrs_](/guide/graphic-style#configure-line-styles) |
| text | _TooltipCrosshairsText 、 TooltipCrosshairsTextCallback_ | Text configuration of crosshairs pointer, support callback |
| textBackground | _textBackgroundStyle_ | Guideline text background configuration |
| follow | _boolean_ | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

<!-- 类型定义 -->

**_TooltipCrosshairsText_** 类型定义如下：

```ts
/** 辅助线文本配置 */
type TooltipCrosshairsText = {
  /**
   * 文本位置，只支持 start， end
   * @type {string}
   */
  position?: string;
  /**
   * 文本内容
   */
  content?: string;
  /**
   * 距离线的距离
   * @type {number}
   */
  offset?: number;
  /**
   * 是否自动旋转
   * @type {boolean}
   */
  autoRotate?: boolean;
  /**
   * 文本的配置项
   * @type {ShapeAttrs}
   */
  style?: TextStyle;
};
```

其中，**_TextStyle_** 类型定义详见: [通用文本样式](/zh-CN/guide/graphic-style#%E9%85%8D%E7%BD%AE%E6%96%87%E5%AD%97%E6%A0%B7%E5%BC%8F)

**_TooltipCrosshairsTextCallback_** 类型定义如下：

```ts
/**
 * 辅助线文本回调函数
 * @param type 对应当前 crosshairs 的类型，值为 'x' 或者 'y'
 * @param defaultContent 对应当前 crosshairs 默认的文本内容
 * @param items 对应当前 tooltip 内容框中的数据
 * @param currentPoint 对应当前坐标点
 * @returns 返回当前 crosshairs 对应的辅助线文本配置
 */
type TooltipCrosshairsTextCallback = (
  type: string,
  defaultContent: any,
  items: any[],
  currentPoint: Point,
) => TooltipCrosshairsText;
```

<!-- 容器无限变大 -->

<!-- <playground path="more-plots/stock/demo/custom-crosshairs.ts" rid="crosshairs" height="400"></playground> -->

**_TextBackgroundStyle_**

| Properties | Type | Description |
| --- | --- | --- |
| padding | _number 、 number\[]_ | White space around the background of a text |
| style | _shapeStyle_ | The configuration item for line, see more [_ShapeAttrs_](/guide/graphic-style) |

##### showMarkers

<description>**optional** _boolean_ _default:_ `true`</description>

Whether to render TooltipMarkers.

##### marker

<description>**optional** _ShapeAttrs_</description>

TooltipMarker style configuration.

Please refer to the style configuration [ShapeAttrs](/guide/graphic-style)

##### showContent

<description>**optional** _boolean_ _default:_ `false`</description>

Whether to display the Tooltip content box.

##### container

<description>**optional** _string|HTMLElement_</description>

Custom tooltip container.

##### containerTpl

<description>**optional** _string_</description>

Templates used to specify the legend container must include the classes of each DOM node when customizing the template

##### itemTpl

<description>**optional** _string_</description>

The default template for each record, which must include the classes of each DOM node when customizing the template.

##### domStyles

<description>**optional** _TooltipDomStyles_</description>

The styles for each DOM.

<img src="https://gw.alipayobjects.com/zos/antfincdn/pKDA06iIeQ/tooltip.png" class="img-400" alt="dom-styles" />

```ts
/** Tooltip content box css style */
{
  domStyles: {
    'g2-tooltip'?: CSSProperties;
    'g2-tooltip-title'?: CSSProperties;
    'g2-tooltip-list'?: CSSProperties;
    'g2-tooltip-list-item'?: CSSProperties;
    'g2-tooltip-marker'?: CSSProperties;
    'g2-tooltip-value'?: CSSProperties;
    'g2-tooltip-name'?: CSSProperties;
  }
}
```

##### offset

<description>**optional** _number_</description>

Tooltip offset.

##### reversed

<description>**optional** _boolean_</description>

是否将 tooltip items 逆序.

##### showNil

<description>**optional** _boolean_</description>

是否显示空值的 tooltip 项

##### customItems ✨

<description>**optional** _Function_</description>

在 tooltip 渲染之前，对最终的 items 进行自定义处理（比如排序、过滤、格式化等）。

```ts
{
  tooltip: {
    customItems: (originalItems: TooltipItem[]) => {
      // process originalItems,
      return originalItems;
    };
  }
}
```

##### customContent

<description>**optional** _Function_</description>

Support for custom templates.

```ts
{
  tooltip: {
    customContent: (title, data) => {
      return `<div>${title}</div>`;
    };
  }
}
```

Try it:

<playground path="case/customize/demo/customize-tooltip.ts" rid="customize-tooltip"></playground>
