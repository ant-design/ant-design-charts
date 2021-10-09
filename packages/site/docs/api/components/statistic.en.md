

## title: Statistic Text&#xA;order: 7&#xA;contributors:&#xA;\[&#xA;{&#xA;author: '新茗',&#xA;github: 'visiky',&#xA;avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',&#xA;},&#xA;]

<style>
  span.ant-tag {
    margin: 0 4px;
    line-height: 18px;
  }
</style>


<style>
  .gatsby-highlight + p {
    margin-top: 18px;
  }
  
  table {
    margin-top: 12px !important;
  }

  h4 {
   margin-top: 30px !important;
    margin-bottom: 12px !important;
  }

  h5 {
    font-size: 18px !important;
    line-height: 22px;
    margin-top: 1.5em !important;
  }

  h4 + h5 {
    margin-top: 20px !important;
  }

  code.language-text {
    padding: .2em;
    margin: 0;
    font-size: .85em;
    background-color: #f7f7f7 !important;
  }

  ul li {
    line-height: 1.5;
  }
</style>


#### Statistic

<img src="https://gw.alipayobjects.com/zos/antfincdn/YrJCRYNcAM/0dfb515f-5efd-4341-a5ec-bd1f988b5975.png" class="component-img" alt="slider" />

#### Properties - *Statistic*

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


Example:

<playground path="pie/donut/demo/basic.ts" rid="docs-statistic" height="400"></playground>
