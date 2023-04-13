import { defineConfig } from 'dumi';
import { repository, version } from './package.json';

export default defineConfig({
  locales: [
    { id: 'zh', name: '中文' },
    { id: 'en', name: 'English' },
  ],
  themeConfig: {
    title: 'Ant Design Charts',
    description: 'AntV react component library',
    defaultLanguage: 'zh',
    siteUrl: 'https://charts.ant.design',
    showChinaMirror: false,
    githubUrl: repository.url,
    showSearch: true, // 是否显示搜索框
    showGithubCorner: true, // 是否显示头部的 GitHub icon
    showGithubStars: true, // 是否显示 GitHub star 数量
    showAntVProductsCard: true, // 是否显示 AntV 产品汇总的卡片
    showLanguageSwitcher: true, // 是否显示官网语言切换
    showWxQrcode: true, // 是否显示头部菜单的微信公众号
    showChartResize: true, // 是否在 demo 页展示图表视图切换
    showAPIDoc: true,
    versions: {
      [version]: 'https://charts.ant.design',
      '0.x': 'https://v0-charts.ant.design/',
    },
    docsearchOptions: {
      apiKey: 'cd83d8f913aeb993cd93f45fdbe9b5ac',
      // indexName: 'charts-ant-design',
    },
    navs: [
      {
        slug: 'docs/manual',
        title: {
          zh: '教程',
          en: 'Manual',
        },
        order: 3,
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API',
          en: 'API',
        },
        order: 2,
      },
      {
        slug: 'examples',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
        order: 1,
      },
    ],
    docs: [
      // 统计图表
      {
        slug: 'api/plots',
        title: {
          zh: '统计图表',
          en: 'Plots',
        },
        order: 2,
      },
      {
        slug: 'api/plots/common',
        title: {
          zh: '通用配置',
          en: 'Common Configuration',
        },
        order: 0,
      },
      // 关系图
      {
        slug: 'api/graphs',
        title: {
          zh: '关系图',
          en: 'Graphs',
        },
        order: 3,
      },
      {
        slug: 'api/graphs/common',
        title: {
          zh: '通用配置',
          en: 'Common Configuration',
        },
        order: 0,
      },
      // 关系图
      {
        slug: 'api/flowchart',
        title: {
          zh: '流程图',
          en: 'Flowchart',
        },
        order: 4,
      },
      // 地图
      {
        slug: 'api/maps',
        title: {
          zh: '地图',
          en: 'Maps',
        },
        order: 5,
      },
      {
        slug: 'api/maps/plots',
        title: {
          zh: '基础图表',
          en: 'Plots',
        },
        order: 1,
      },
      {
        slug: 'api/maps/components',
        title: {
          zh: '组件',
          en: 'Components',
        },
        order: 2,
      },
      {
        slug: 'api/maps/layers',
        title: {
          zh: '图层',
          en: 'Layers',
        },
        order: 3,
      },
    ],
    examples: [
      {
        slug: 'flowchart',
        icon: 'sankey',
        title: {
          zh: '流程图',
          en: 'Flowchart',
        },
      },
      {
        slug: 'relation-graph',
        icon: 'sankey',
        title: {
          zh: '关系图',
          en: 'Relation Graph',
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
        slug: 'map-area',
        icon: 'polygon',
        title: {
          zh: '区域地图',
          en: 'Area Map',
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
        slug: 'map-advanced-plot',
        icon: 'other',
        title: {
          zh: '多图层',
          en: 'Advanced Map',
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
    detail: {
      title: {
        zh: 'AntV React 可视化组件库',
        en: 'AntV React component library',
      },
      description: {
        zh: '简单好用的 React 图表库。',
        en: 'Simple and easy to use React chart library.',
      },
      image: 'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*f_gcSbpq-6kAAAAAAAAAAABkARQnAQ',
      buttons: [
        {
          text: {
            zh: '图表示例',
            en: 'Examples',
          },
          link: `/examples/`,
          type: 'primary',
        },
        {
          text: {
            zh: '开始使用',
            en: 'Getting Started',
          },
          link: `/manual/introduction`,
        },
      ],
    },
    news: [
      {
        type: {
          zh: '论坛',
          en: 'Forum',
        },
        title: {
          zh: 'AntV 芒种日 图新物：GraphInsight 发布',
          en: 'AntV Seeds Day Graph New: GraphInsight Released',
        },
        date: '2022.06.06',
        link: 'https://github.com/antvis/GraphInsight',
      },
      {
        type: {
          zh: '论坛',
          en: 'Forum',
        },
        title: {
          zh: 'SEE Conf 2022 支付宝体验科技大会',
          en: 'SEE Conf 2022 Alipay Experience Technology Conference',
        },
        date: '2022.01.08',
        link: 'https://seeconf.antfin.com/',
      },
    ],
    features: [
      {
        icon: 'https://gw.alipayobjects.com/zos/basement_prod/eae0ee4e-acbf-4486-88eb-ea17f441a0d5.svg',
        title: {
          zh: '开箱即用',
          en: 'Easy to use',
        },
        description: {
          zh: '配置项优化精简，仅需几行代码轻松生成图表',
          en: 'Generating high quality statistical charts through a few lines of code.',
        },
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/aKCFl7vDAB/tubiao.png',
        title: {
          zh: '图表完善',
          en: 'Variety of charts',
        },
        description: {
          zh: '支持全量的 G2Plot 图表，以及关系图、流程图、地理可视化，几乎做到同步更新',
          en: 'Support full G2Plot charts, as well as relation graphs, flow charts, geographical visualization, almost synchronous update.',
        },
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/oyqsrPh0Kg/houyuan.png',
        title: {
          zh: '专业可靠',
          en: 'Professional and reliable',
        },
        description: {
          zh: 'AntV 团队支持，简单易容、专业可靠、无限可能"',
          en: 'AntV team support, easy to accommodate, professional and reliable, unlimited possibilities.',
        },
      },
    ],
    cases: [
      {
        logo: 'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Uh1MSpdcj-kAAAAAAAAAAABkARQnAQ',
        title: {
          zh: '图编辑',
          en: 'Advanced Features',
        },
        description: {
          zh: '来这里尝试一下我们正在开发中的流程图功能',
          en: `Try out the flowchart feature we're developing here`,
        },
        link: `/examples/flowchart/basic#basic`,
        image: 'https://gw.alipayobjects.com/zos/antfincdn/5b5C1FvWLE/08c299c3-b3f8-4071-afc1-9aa5e1a9cb3a.png',
        isAppLogo: true,
      },
    ],
    playground: {
      extraLib: '',
      devDependencies: {
        typescript: 'latest',
      },
    },
  },
  mfsu: false,
  alias: {
    // 根据自己项目结构书写绝对路径
    '@': __dirname,
  },
  links: [],
  scripts: [],
});
