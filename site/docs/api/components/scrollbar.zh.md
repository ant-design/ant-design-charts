---
title: 滚动条 - Scrollbar
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


#### 配置属性 - *ScrollbarCfg*

***ShapeAttrs*** 类型的请参考[绘图属性](/zh/docs/api/graphic-style)

| 配置项           | 类型                             | 功能描述           |
| --------------- | ----------------                | ------------------ |
| type            | *'horizontal' | 'vertical'*    | 滚动条类型      |
| width           | *number*                        | 宽度，在 vertical 下生效       |
| height          | *number*                        | 高度，在 horizontal 下生效         |
| padding         | *number | number\[]*            | padding       |
| categorySize    | *number*                        | 对应水平滚动条，为 x 轴每个分类字段的宽度；对于垂直滚动条，为 x 轴每个分类字段的高度 |
| style         | *ScrollbarStyle*                       | 滚动条默认样式的设置       |
| animate         | *boolean*                       | 滚动的时候是否开启动画，默认跟随 view 中 animate 配置        |

***ScrollbarStyle*** 类型如下：

| 配置项           | 类型              | 功能描述            |
| --------------- | ---------------- | ------------------ |
| trackColor        | *string*    | 滚动条滑道填充色      |
| thumbColor        | *string*    | 滚动条滑块填充色      |
| thumbHighlightColor  | *string*    | 滚动条滑块高亮样式，对应主题的 hover.style.thumbColor     |
| lineCap           | *string*    | 决定滚动条末端绘制形状，同 Canvas lineCap 属性。     |


#### 主题设置

还可以通过主题来设置滚动条的样式。

```ts
theme: {
  components: {
    scrollbar: {
      // 默认样式
      default: {
        style: {
          trackColor: 'rgba(0,0,0,0)',
          thumbColor: 'rgba(0,0,0,0.15)',
        },
      },
      // hover 时，可以设置滑块样式
      hover: {
        style: {
          thumbColor: 'rgba(0,0,0,0.2)',
        },
      },
    },
  },
}
```
