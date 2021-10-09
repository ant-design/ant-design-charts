#### intervalPadding

<description>**optional**, *number*</description>

Specify the padding of interval, pixel value.  Used in GroupColumn plot.

<playground path='bar/grouped/interval-padding.ts' rid='rect1'></playground>

#### dodgePadding

<description>**optional**, *number*</description>

Specify the padding of interval on the same group, pixel value. Used in GroupColumn plot.

<playground path='bar/grouped/dodge-padding.ts' rid='rect2'></playground>

#### minBarWidth

<description>**optional**, *number*</description>

Specify the min width of bar, pixel value. Auto adapt by default.

#### maxBarWidth

<description>**optional**, *number*</description>

Specify the max width of bar, pixel value. Auto adapt by default.

#### barStyle

<description>**optional** *StyleAttr | Function*</description>

Bar graphic Style.

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


#### barBackground.style

<description>**optional** *StyleAttr*</description>

Background style of bar graphic. **Attention**: It doesn't work when `type="line"` in Radial-bar plot.

Example:

```ts
{
  barBackground: {
    style: {
      fill: '#000',
      fillOpacity: 0.25,
    }
  }
}
```
