<description>**optional** *object* | *false*</description>

| Properties | Type                | Default | Description                                              |
| ---------- | ------------------- | ------- | -------------------------------------------------------- | ----------------------------------------------- |
| size       | *number*            | -       | Conversion rate Component dimensions                     |
| spacing    | *number*            | -       | Component and column spacing                             |
| offset     | *number*            | -       | Component and axis spacing                               |
| arrow      | *ArrowCfg | false* | -       | Arrow shape configuration, false does not display arrows |
| text       | *TextCfg | false*  | No      | -                                                        | Text configuration, false does not display text |

ArrowCfg configuration is as follows:

| Properties | Type     | Default | Description       |
| ---------- | -------- | ------- | ----------------- |
| headSize   | *number* | -       | Size of the arrow |
| style      | *object* | -       | Arrow style       |

TextCfg configuration is as follows:

| Properties | Type                                   | Default | Description                        |
| ---------- | -------------------------------------- | ------- | ---------------------------------- |
| headSize   | *number*                               | -       | Size of the arrow                  |
| style      | *object*                               | -       | Arrow style                        |
| formatter  | *(prev:number, next:number) => string* | -       | Custom conversion rate calculation |

Please refer to the style configuration [ShapeAttrs](/en/docs/api/graphic-style)
