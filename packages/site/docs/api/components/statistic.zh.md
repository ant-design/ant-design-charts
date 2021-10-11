

## title: 统计文本 - Statistic&#xA;order: 7&#xA;contributors:&#xA;\[&#xA;{&#xA;author: '新茗',&#xA;github: 'visiky',&#xA;avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',&#xA;},&#xA;]

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


#### 构成元素

<img src="https://gw.alipayobjects.com/zos/antfincdn/YrJCRYNcAM/0dfb515f-5efd-4341-a5ec-bd1f988b5975.png" class="component-img" alt="slider" />

#### 配置属性 - *Statistic*

| 配置项  | 类型                   | 描述     |
| ------- | ---------------------- | -------- |
| title   | *false | StatisticText* | 标题     |
| content | *false | StatisticText* | 主体内容 |

StatisticText

| 配置项    | 类型     | 描述                 |
| --------- | -------- | -------------------- |
| style     | *CSSStyleDeclaration* | 统计文本的样式 (css 样式)      |
| content | *string* | 主体文本内容。优先级: `customHtml` > `formatter` > `content` |
| customHtml | *CustomHtml* | 自定义主体文本的 html，优先级高于 formatter |
| formatter | *Function* | 主体文本的格式化内容 |
| rotate    | *number*   | 旋转角度             |
| offsetX   | *number*   | X 偏移值             |
| offsetY   | *number*   | Y 偏移值             |

**CustomHtml** 类型定义如下：

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```


示例:

<playground path="pie/donut/demo/basic.ts" rid="docs-statistic" height="400"></playground>
