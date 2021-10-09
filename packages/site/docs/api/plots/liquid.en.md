

## title: Liquid&#xA;order: 6

### Plot Container

#### width

<description>**optional** *number* *default:* `400`</description>

Set the width of the chart.

#### height

<description>**optional** *number* *default:* `400`</description>

Set the height of the chart.

#### autoFit

<description>**optional** *boolean* *default:* `true`</description>

Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.

#### padding

<description>**optional** *number\[] | number | 'auto'*</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** *number\[] | number*</description>

Extra `appendPadding` value.

#### renderer

<description>**optional** *string* *default:* `canvas`</description>

Set the render way to `canvas` or `svg`.

#### pixelRatio

<description>**optional** *number* *default:* `window.devicePixelRatio`</description>

Set the pixel ratio of the chart.

#### limitInPlot

<description>**optional** *boolean*</description>

Whether clip the Geometry beyond the coordinate system。

<!-- 先插入到这里 -->

#### locale

<description>**optional** *string*</description>

Specify the locale. There are two built-in locales: 'zh-CN' and 'en-US'. Or you can use `G2Plot.registerLocale` to register a new locale. Go [src/locales/en_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en_US.ts) to see the format.


### Data Mapping

#### percent

<description>**required** *number*</description>

Ratio data( Range:\[0-1] ).

#### radius

<description>**optional** *number* *default:* `0.9`</description>

Radius of outer ring( Range:\[0-1] ).

### Graphic Style

#### liquidStyle

<description>**optional** *StyleAttr | Function*</description>

Liguid graphic style.

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
| r          | *number*         | used in `point`, means the radius of geometry |
| fillOpacity   | *number*        | Fill opacity of the shape                                                                                                                                                                |
| stroke        | *string*        | Stroke color of the shape                                                                                                                                                                |
| lineWidth     | *number*        | The width of the stroke of the shape                                                                                                                                                     |
| lineDash      | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity   | *number*        | Opacity of the stroke                                                                                                                                                                    |
| opacity       | *number*        | Opacity of the shape                                                                                                                                                                     |
| shadowColor   | *string*        | Shadow color of the shape                                                                                                                                                                |
| strokeOpacity | *number*        | Stroke opacity of the shape                                                                                                                                                              |
| shadowBlur    | *number*        | Gaussian blur coefficient of the shadow                                                                                                                                                  |
| shadowOffsetX | *number*        | Configure horizontal distance between shadow and shape                                                                                                                                   |
| shadowOffsetY | *number*        | Configure vertical distance between shadow and shape                                                                                                                                     |
| cursor        | *string*        | Mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                                   |

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

More documents about `ShapeStyle`, see [Graphic Style](/en/docs/api/graphic-style).


#### shape

<description>**optional** *String | Function* default: `circle`</description>

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

<description>**optional** *string | string\[] | Function*</description>

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


#### pattern ✨

<description>**optional** *object | Function*</description>

Set the pattern style of the geometries.

*   PatternOption: consists of `type` and `cfg`, `type` includes: `dot`, `line`, `square`, `cfg` is optional.
*   Features: pattern will override the `style` of geometry (such as pieStyle, columnStyle, etc.).
*   Usage: You can set a uniform pattern style for all geometries of the chart by using configuration (`PatternOption`) or `CanvasPattern` object, and a `callback` is provided to set the pattern for each geometry.
    In addition, we provide `getCanvasPattern` function, pass in the PatternOption to create the pattern to modify the Legend styles[Demo](/zh/examples/plugin/pattern#legend-marker-with-pattern)

The type of pattern is defined as follows:

```plain
PatternAttr =
  | CanvasPattern
  | PatternOption
  | ((datum: Datum, color: string /** inherit color */) => PatternOption | CanvasPattern);
```

Usage:

```ts
// set a uniform pattern style for all geometries
{
   pattern: {
    type: 'dot',
    cfg: {
      size: 4,
      padding: 4,
      rotation: 0,
      fill: '#FFF',
      isStagger: true,
    },
  },
}
// set the pattern for each geometry
{
  pattern: ({type}, color) =>{
    if(type ==='分类一') {
      return { 
        type: 'dot',
        cfg: {
          backgroundColor: color, // inherit color
        }
      }
    } else if(type ==='分类二') {
      return {
         type: 'square',
         cfg: {
           backgroundColor: 'pink', // custom color
         }
       }
    } else if(type ==='分类三') {
      return { 
        type: 'line' 
      }
    }
  },
}
```

<!--Configuration items for each pattern-->

Common configuration(cfg) for all types of pattern:

| Attribute        | Type            | Description            |
| ------------- | --------------- | ---------------- |
| backgroundColor   | *string*         | Background color of the pattern |
| fill     | *string*         |  Fill color of the symbol in pattern  |
| fillOpacity   |   *number* | Transparency of the symbol in pattern  |
| stroke   | *string*         | Stroke color of the symbol in pattern |
| strokeOpacity       | *number*         | Stroke opacity of the symbol in pattern  |
| lineWidth   | *number*         | The thickness of the symbol's stroke       |
| opacity | *number*         | Overall transparency of the pattern              |
| rotation    | *number*         | Rotation angle of the pattern   |

Additional configuration for dotPattern

| Attribute        | Type             | Description            |
| ------------- | --------------- | ---------------- |
| size          | *number*         | The size of the dot, default: `6`  |
| padding          | *number*         | The distance between dots, default: `2` |
| isStagger        | *boolean*         | Staggered dots. default: `true`    |

Additional configuration for linePattern

| Attribute        | Type             | Description           |
| ------------- | --------------- | ---------------- |
| spacing          | *number*         | The distance between the two lines, default: `5`  |

Additional configuration for squarePattern

| Attribute        | Type             | Description           |
| ------------- | --------------- | ---------------- |
| size          | *number*         | The size of the square, default: `6`  |
| padding          | *number*         | The distance between squares, default:`1` |
| isStagger        | *boolean*         | Staggered squares. default:`true`    |


#### outline

<description>**optional** *Outline*</description>

The outline configure for liquid plot, includes:

| Properties | Type              | Desc                                          |
| ---------- | ----------------- | --------------------------------------------- |
| border     | *number*          | border width of outline, default 2px           |
| distance   | *number*          | distance between outline and wave, default 0px |
| style      | *OutlineStyleCfg* | the style configure of outline                 |

The style configure of outline for liquid plot, includes:

| Properties    | Type     | Desc                                                      |
| ------------- | -------- | --------------------------------------------------------- |
| stroke        | *string* | border color of outline，defaut is same as `liquid.color` |
| strokeOpacity | *number* | border color opacity of outline                           |

#### wave

<description>**optional** *Wave*</description>

The wave configure for liquid plot, includes:

| Properties | Type   | Desc                          |
| ---------- | ------ | ----------------------------- |
| count      | number | wave count, default 3         |
| length     | number | wave length, default is 192px |

### Plot Components

#### statistic

<description>**optional** *object*</description>

Metric central text component.

| Properties | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| title      | *false | StatisticText* | title       |
| content    | *false | StatisticText* | content     |

StatisticText

| Properties | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| style      | *CSSStyleDeclaration*   | Styles for statistical text (css styles)       |
| content | *string* | Content of the text。Priority: `customHtml` > `formatter` > `content` |
| customHtml | *CustomHtml* | custom content by using html，priority is higher than formatter |
| formatter  | *Function* | The formatted content of the text |
| rotate     | *number*   | Rotation Angle                    |
| offsetX    | *number*   | X offset                          |
| offsetY    | *number*   | Y offset                          |

Type of **CustomHtml** is as follow:

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```
