Go to [ShapeAttrs](/en/docs/api/graphic-style) to learn more about ***ShapeAttrs***.

| Properties | Type       | Description                                              |
| --------------- | ----------------                | ------------------ |
| type            | *'horizontal' | 'vertical'*    | Type of scrollbar      |
| width           | *number*                        | Width，works when `type = 'vertical'`    |
| height          | *number*                        | height，works when `type = 'horizontal'`    |
| padding         | *number | number\[]*            | Padding       |
| categorySize    | *number*                        | For the horizontal scrollbar, it is the width of each category field on the x-axis; for the vertical scroll bar, it is the height of each category field on the x-axis |
| animate         | *boolean*                       | Whether to animate when scrolling, default follows the animation configuration in view  |

Types of ***ScrollbarStyle*** are as follow:

| Properties | Type       | Description                 |
| --------------- | ---------------- | ------------------ |
| trackColor        | *string*    | Color of scrollbar track       |
| thumbColor        | *string*    | Color of scrollbar thumb       |
| thumbHighlightColor  | *string*    | Highlight color of scrollbar thumb, 对应主题的 hover.style.thumbColor     |
| lineCap | *string*    | Determines the shape used to draw the end points of scrollbar，is same as property of Canvas lineCap。     |
