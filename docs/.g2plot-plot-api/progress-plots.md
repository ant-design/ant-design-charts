

## title: Liquid&#xA;order: 12

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


#### outline

<description>**optional** *Outline*</description>

The ouline configure for liquid plot, includes:

| Properties | Type   | Desc                                          |
| ---------- | ------ | --------------------------------------------- |
| border     | number | border width of ouline, default 2px           |
| distance   | number | distance between ouline and wave, default 0px |

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

Text component.

| Properties | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| title      | false | StatisticText | title       |
| content    | false | StatisticText | content     |

StatisticText

| Properties | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| style      | object   | Styles for statistical text       |
| formatter  | Function | The formatted content of the text |
| rotate     | number   | Rotation Angle                    |
| offsetX    | number   | X offset                          |
| offsetY    | number   | Y offset                          |
