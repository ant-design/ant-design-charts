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

### Data Mapping

#### percent

<description>**required** _number_</description>

Ratio data( Range:\[0-1] ).

#### radius

<description>**optional** _number_ _default:_ `0.9`</description>

Radius of outer ring( Range:\[0-1] ).

### Graphic Style

#### liquidStyle

<description>**optional** _StyleAttr 、 Function_</description>

Liguid graphic style.

<!--shape style-->

| Properties | Type | Description |
| --- | --- | --- |
| fill | _string_ | Fill color of the shape |
| r | _number_ | used in `point`, means the radius of geometry |
| fillOpacity | _number_ | Fill opacity of the shape |
| stroke | _string_ | Stroke color of the shape |
| lineWidth | _number_ | The width of the stroke of the shape |
| lineDash | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity | _number_ | Opacity of the stroke |
| opacity | _number_ | Opacity of the shape |
| shadowColor | _string_ | Shadow color of the shape |
| strokeOpacity | _number_ | Stroke opacity of the shape |
| shadowBlur | _number_ | Gaussian blur coefficient of the shadow |
| shadowOffsetX | _number_ | Configure horizontal distance between shadow and shape |
| shadowOffsetY | _number_ | Configure vertical distance between shadow and shape |
| cursor | _string_ | Mouse style, same as the mouse style of CSS, default value : 'default' |

Example：

```ts
{
  style: {
    fill: 'red',
    fillOpacity: 0.5,
    stroke: 'black',
    lineWidth: 1,
    lineDash: [4, 5],
    strokeOpacity: 0.7,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: 'pointer'
  }
}
```

More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).

#### shape

<description>**optional** _String 、 Function_ default: `circle`</description>

There are five built-in shapes for liquid plot: `circle | diamond | triangle | pin | rect`. It aslo supports custom shape if shape is a callback function to build path.

示例代码如下：

```ts
/**
 * @param x  x for the center point of bounding rectangle
 * @param y  y for the center point of bounding rectangle
 * @param width  width for bounding rectangle
 * @param height  height for bounding rectangle
 * @return  PathCommand[]
 */
function shape(x: number, y: number, width: number, height: number) {
  const h = height / 2;
  const w = width / 2;
  return [
    ['M', x - x / 3, y - h],
    ['L', x + w, y - y / 3],
    ['L', x + x / 3, y + h],
    ['L', x - w, y + y / 3],
    ['Z'],
  ];
}
```

#### color

<description>**optional** _string 、 string\[] 、 Function_</description>

Configure the color. If there is no colorField configured, set one single color. Otherwise you can set a series of colors, or you can use callback function.

Default: The color board of the theme.

```ts
// set one single color
{
  color: '#a8ddb5'
}
// set a series of colors
{
  colorField: 'type', // or seriesField in some cases
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
  colorField: 'type', // or seriesField in some cases
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
  }
}
```

#### outline

<description>**optional** _Outline_</description>

The ouline configure for liquid plot, includes:

| Properties | Type              | Desc                                          |
| ---------- | ----------------- | --------------------------------------------- |
| border     | _number_          | border width of ouline, default 2px           |
| distance   | _number_          | distance between ouline and wave, default 0px |
| style      | _OutlineStyleCfg_ | the style configure of ouline                 |

The style configure of outline for liquid plot, includes:

| Properties    | Type     | Desc                                                      |
| ------------- | -------- | --------------------------------------------------------- |
| stroke        | _string_ | border color of outline，defaut is same as `liquid.color` |
| strokeOpacity | _number_ | border color opacity of outline                           |

#### wave

<description>**optional** _Wave_</description>

The wave configure for liquid plot, includes:

| Properties | Type   | Desc                          |
| ---------- | ------ | ----------------------------- |
| count      | number | wave count, default 3         |
| length     | number | wave length, default is 192px |

### Plot Components

#### statistic

<description>**optional** _object_</description>

Metric central text component.

| Properties | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| title      | _false 、 StatisticText_ | title       |
| content    | _false 、 StatisticText_ | content     |

StatisticText

| Properties | Type | Description |
| --- | --- | --- |
| style | _CSSStyleDeclaration_ | Styles for statistical text (css styles) |
| content | _string_ | Content of the text。Priority: `customHtml` > `formatter` > `content` |
| customHtml | _CustomHtml_ | custom content by using html，priority is higher than formatter |
| formatter | _Function_ | The formatted content of the text |
| rotate | _number_ | Rotation Angle |
| offsetX | _number_ | X offset |
| offsetY | _number_ | Y offset |

Type of **CustomHtml** is as follow:

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```
