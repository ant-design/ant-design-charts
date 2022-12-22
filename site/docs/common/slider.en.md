> Only line plot, area plot and dual-axes plot are supported.

| Properties      | Type           | Description                             |
| --------------- | -------------- | --------------------------------------- |
| start           | *number*       | Default starting position               |
| end             | *number*       | Default ending position                 |
| height          | *number*       | Slider height                           |
| trendCfg        | *TrendCfg*     | Configuration of background trends      |
| backgroundStyle | *object*       | Background style, reference[Graphic Style](/en/docs/api/graphic-style)                        |
| foregroundStyle | *object*       | Foreground style, reference[Graphic Style](/en/docs/api/graphic-style)                        |
| handlerStyle    | *HandlerStyle* | Handler configuration                   |
| textStyle       | *object*       | Text style, reference[Graphic Style](/en/docs/api/graphic-style)                              |
| minLimit        | *number*       | Lower limit of sliding position allowed |
| maxLimit        | *number*       | Upper limit of sliding position allowed |
| formatter       | *Function*     | Slider text formatting function         |

Types of ***TrendCfg***  are as follow:

| Properties      | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| data            | *number\[]* | Trend data                     |
| smooth          | *boolean*  | Whether smooth                 |
| isArea          | *boolean*  | Whether area                   |
| backgroundStyle | *object*   | Background style configuration, reference[Graphic Style](/en/docs/api/graphic-style) |
| lineStyle       | *object*   | Line style configuration, reference[Graphic Style](/en/docs/api/graphic-style)       |
| areaStyle       | *object*   | Area style configuration, reference[Graphic Style](/en/docs/api/graphic-style)       |

Types of ***HandlerStyle*** are as follow:

| Properties | Type     | Description              |
| ---------- | -------- | ------------------------ |
| width      | *number* | Width of slider handler  |
| height     | *number* | Height of slider handler |
| fill          | *string* | Fill color of handler                           |
| highLightFill | *string* | Highlight fill color of handler (when hovering) |
| stroke        | *string* | Stroke color of handler                         |
| opacity       | *number* | Fill opacity of handler                         |
| radius        | *number* | Radius of handler rect                          |
| cursor        | *string* | Style of cursor (when hovering handler)         |
