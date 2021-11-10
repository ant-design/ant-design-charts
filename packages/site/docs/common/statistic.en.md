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
