---
title: FAQ
order: 5
nav:
  title: 使用文档
  order: 1
---

## FAQ

以下整理了一些 Ant Design Charts 社区常见的问题和官方答复。

### 1.若 CDN 引入，需要依赖那些库？2.若 npm 引入，如何按需加载？

我们不推荐通过 CDN 的方式使用，目前没有生成 umd 文件， 如果觉得包太大或者打包慢，可以通过以下方式解决。以 [umijs](https://umijs.org/config#externals) 为例，通过配置 externals 、 scripts 或 headScripts 来实现。

```ts
// config/config.ts（非指定路径，看项目配置）
export default {
  /**
   * {{version}} 需要替换为 @antv/g2plot 对应的版本号
   * eg: https://unpkg.com/@antv/g2plot@2.0.1/dist/g2plot.min.js
   * 1.0 版本需要依赖 2.0 以上的版本，具体版本号可以到 https://www.npmjs.com/ 查询
   */
  headScripts: ['https://unpkg.com/@antv/g2plot@{{version}}/dist/g2plot.min.js'],
  externals: {
    '@antv/g2plot': 'window.G2Plot',
  },
  // others
};
```

以上配置实现了 @antv/g2plot 通过 CDN 的方式使用，Ant Design Charts 的使用方式不变，正常引用就行，项目在进行构建时不会把 @antv/g2plot 打包到代码里。 由于 Ant Design Charts 内置了一部分 G6 的功能， 如果用到的话可以通过类似的方式 externals 掉。

**启用 externals 之前**

<img alt="启用前" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*FQTmTrtnRuIAAAAAAAAAAAAAARQnAQ"/>

**启用 externals 之后**

<img alt="启用后" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*1l5lS5XPMEAAAAAAAAAAAAAAARQnAQ" />

### 更多问题

请到 [GitHub issues](https://github.com/ant-design/ant-design-charts/issues) 进行反馈，搜索是否有类似问题。我们会尽快响应和相应改进这篇文档。
