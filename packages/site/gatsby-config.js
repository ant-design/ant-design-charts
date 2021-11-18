const { version, homepage, repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: 'UA-148148901-4',
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Ant Design Charts',
    description: 'A collection of charts made with the Grammar of Graphics',
    siteUrl: homepage,
    githubUrl: repository.url,
    showAPIDoc: true, // 是否在demo页展示API文档
    isAntVSite: false,
    versions: {
      [version]: 'https://charts.ant.design',
      '0.x': 'https://v0-charts.ant.design/',
    },
    navs: [
      {
        slug: 'docs/manual',
        title: {
          zh: '教程',
          en: 'Manual',
        },
        order: 2,
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API',
          en: 'API',
        },
        order: 1,
      },
      {
        slug: 'examples',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
        order: 0,
      },
    ],
    docs: [
      {
        slug: 'api/common',
        title: {
          zh: '通用配置',
          en: 'Common Configuration',
        },
        order: 7,
      },
    ],
    examples: [
      {
        slug: 'gallery',
        icon: 'gallery',
        title: {
          zh: '',
          en: '',
        },
      },
      {
        slug: 'flowchart',
        icon: 'sankey',
        title: {
          zh: '流程图',
          en: 'Flowchart',
        },
      },
      {
        slug: 'line',
        icon: 'line', // 图表名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '折线图',
          en: 'Line',
        },
      },
      {
        slug: 'map-area',
        icon: 'polygon',
        title: {
          zh: '区域地图',
          en: 'Area Map',
        },
      },
      {
        slug: 'map-choropleth',
        icon: 'polygon',
        title: {
          zh: '行政区域地图',
          en: 'Choropleth Map',
        },
      },
      {
        slug: 'map-dot',
        icon: 'point',
        title: {
          zh: '散点地图',
          en: 'Dot Map',
        },
      },
      {
        slug: 'map-heat',
        icon: 'heatmap',
        title: {
          zh: '热力地图',
          en: 'Heat Map',
        },
      },
      {
        slug: 'relation-graph',
        icon: 'sankey',
        title: {
          zh: '关系图',
          en: 'Realtion Graph',
        },
      },
      {
        slug: 'facet',
        icon: 'gallery',
        title: {
          zh: 'Facet',
          en: '分面图',
        },
      },
      {
        slug: 'case',
        icon: 'gallery',
        title: {
          zh: '场景案例',
          en: 'Show Case',
        },
      },
      {
        slug: 'area',
        icon: 'area',
        title: {
          zh: '面积图',
          en: 'Area',
        },
      },
      {
        slug: 'column',
        icon: 'column',
        title: {
          zh: '柱形图',
          en: 'Column',
        },
      },
      {
        slug: 'bar',
        icon: 'bar',
        title: {
          zh: '条形图',
          en: 'Bar',
        },
      },
      {
        slug: 'pie',
        icon: 'pie',
        title: {
          zh: '饼图',
          en: 'Pie',
        },
      },
      {
        slug: 'dual-axes',
        icon: 'line',
        title: {
          zh: '双轴图',
          en: 'Dual Axes',
        },
      },
      {
        slug: 'progress-plots',
        icon: 'gauge',
        title: {
          zh: '进度图',
          en: 'Progress Plots',
        },
      },
      {
        slug: 'scatter',
        icon: 'point',
        title: {
          zh: '散点气泡图',
          en: 'Scatter and Bubble',
        },
      },
      {
        slug: 'rose',
        icon: 'rose',
        title: {
          zh: '玫瑰图',
          en: 'Rose',
        },
      },
      {
        slug: 'relation-plots',
        icon: 'sankey',
        title: {
          zh: '关系图',
          en: 'Relation Plots',
        },
      },
      {
        slug: 'heatmap',
        icon: 'heatmap',
        title: {
          zh: '热力图',
          en: 'Heatmap',
        },
      },
      {
        slug: 'tiny',
        icon: 'other',
        title: {
          zh: '迷你图',
          en: 'Tiny Plots',
        },
      },
      {
        slug: 'more-plots',
        icon: 'other',
        title: {
          zh: '更多图表',
          en: 'More Plots',
        },
      },
      {
        slug: 'treemap',
        icon: 'other',
        title: {
          zh: '矩形树图',
          en: 'Treemap',
        },
      },
      // OTHERS
      {
        slug: 'plugin',
        icon: 'other',
        title: {
          zh: '高级图表',
          en: 'Advanced Plots',
        },
      },
      {
        slug: 'dynamic-plots',
        icon: 'other',
        title: {
          zh: '动态交互',
          en: 'Dynamic Plots',
        },
      },
      {
        slug: 'component',
        icon: 'other',
        title: {
          zh: '图表组件',
          en: 'Components',
        },
      },
      {
        slug: 'general',
        icon: 'other',
        title: {
          zh: '通用配置',
          en: 'General Configuration',
        },
      },
    ],
    docsearchOptions: {
      apiKey: '0d19588d7661a81faa8b75f6ade80321',
      indexName: 'antv_g2plot',
    },
  },
};
