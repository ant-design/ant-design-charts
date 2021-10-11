<!--文本样式-->

| Properties    | Type            | Description                                                                                                                                                                                                 |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fontSize      | *number*        | Font size                                                                                                                                                                                                   |
| fontFamily    | *string*        | Font family                                                                                                                                                                                                 |
| fontWeight    | *number*        | Font weight                                                                                                                                                                                                 |
| lineHeight    | *number*        | Line height                                                                                                                                                                                                 |
| textAlign     | *string*        | Text align, supported `center` | `end` | `left` | `right` | `start`, default `start`                                                                                                                    |
| fill          | *string*        | Fill color for text                                                                                                                                                                                         |
| fillOpacity   | *number*        | Fill transparency for text                                                                                                                                                                                  |
| stroke        | *string*        | Stroke text                                                                                                                                                                                                 |
| lineWidth     | *number*        | The width of the text stroke                                                                                                                                                                                |
| lineDash      | \[number,number] | For the dashed line configuration of the stroke, the first value is the length of each segment of the dashed line, and the second value is the distance between segments. LineDash sets \[0,0] to no stroke. |
| lineOpacity   | *number*        | Stroke transparency                                                                                                                                                                                         |
| opacity       | *number*        | Overall transparency of the text                                                                                                                                                                            |
| shadowColor   | *string*        | Shadow color                                                                                                                                                                                                |
| shadowBlur    | *number*        | Shadow blur                                                                                                                                                                                                 |
| shadowOffsetX | *number*        | Sets the horizontal distance between the shadow and the text                                                                                                                                                |
| shadowOffsetY | *number*        | Sets the vertical distance between the shadow and the text                                                                                                                                                  |
| cursor        | *string*        | Mouse style. With CSS mouse styles, default 'default'.                                                                                                                                                      |

Example code, using label.style configuration:

```ts
{
  label: {
    style:{
      fontSize: 80,
      fontWeight: 300,
      textAlign: 'center',
      textBaseline: 'middle',
      shadowColor: 'white',
      shadowBlur: 10,
    }
  }
}
```
