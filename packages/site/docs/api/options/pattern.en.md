

## title: Pattern&#xA;order: 8

### Introduction

We can set patterns for geometries.

*   We provide the default, high contrast patterns: dot, line, and square. For charts with poor color differentiation, pattern can be used as an "intuitive, visual classification attribute" to distinguish each item, making it color-blind friendly.
*   add grouping for color: Pattern can help to expand the classification of colors when there are not enough harmonious colors, or when the color has a small proportion, the distinction is not obvious.
*   Subdivision and grouping with color: We can use pattern as a "group", and the color as sub classification in this group.
*   Grouping as degree: The size of a circle or square, the thickness of a line can indicate "degree".
*   Highlight key points and enrich expression: Pattern not only has a "good-looking" skin, but also can highlight a certain items for storytelling.

### Use pattern in G2Plot

G2Plot with built-in `'dot' | 'line' | 'square'` several patterns, the pattern inherits the current element's fill color by default.

<playground path="plugin/pattern/demo/pie-pattern.ts" rid="pie-pattern"></playground>

Usage for scenes:

*   [Demo1](/zh/examples/plugin/pattern#legend-marker-with-pattern): Set pattern for legend marker
*   [Demo2](/zh/examples/plugin/pattern#bar-pattern): Set pattern with callback for each geometry

<!-- 补充 案例说明 和 案例 -->

### API

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


### Attention

Please note the use of pattern, which currently has some limitations.

1.  Pattern is not supported in the `svg` rendering mode.
2.  Pattern inherits the fill color of element by default, but does not support gradient color for pattern fill color, i.e. when we needs gradient color for element, pattern background color cannot be inherited and needs to be specified manually. See: [Demo](/zh/examples/tiny/tiny-area#pattern)
3.  Tooltip, the legend marker is still in plain color. For the legend marker, consider using a callback to set it, see:[Demo](/zh/examples/plugin/pattern#pie-pattern-callback)
