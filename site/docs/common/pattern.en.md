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
