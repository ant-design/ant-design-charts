---
title: Scrollbar
order: 3
contributors:
  [
    {
      author: '新茗',
      github: 'visiky',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',
    },
  ]
---

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


#### Properties - *ScrollbarCfg*

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


#### Theme setting

You can also config the style of scollbar by theme.

```ts
theme: {
  components: {
    scrollbar: {
      // default style
      default: {
        style: {
          trackColor: 'rgba(0,0,0,0)',
          thumbColor: 'rgba(0,0,0,0.15)',
        },
      },
      // config the style of thumb when hover
      hover: {
        style: {
          thumbColor: 'rgba(0,0,0,0.2)',
        },
      },
    },
  },
}
```
