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
    siteUrl: 'https://ant-design-charts.antgroup.com',
    showChinaMirror: false,
    footerTheme: 'light', // 白色 底部主题
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
      [version]: 'https://ant-design-charts-next.antgroup.com',
      '1.x': 'https://ant-design-charts.antgroup.com',
      '0.x': 'https://v0-charts.ant.design/',
    },
    docsearchOptions: {
      appId: 'I1DYJKMAUK',
      apiKey: '5d0fcf465bcfa6fe6ef14d1bb1b7fb0f',
      indexName: 'ant-design-charts-antgroup',
      // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      debug: false,
    },
    navs: [
      {
        slug: 'docs/manual',
        title: {
          zh: '教程',
          en: 'Manual',
        },
      },
      {
        slug: 'docs/options/plots/overview',
        title: {
          zh: '选项',
          en: 'Option',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
      },
    ],
    docs: [
      {
        slug: 'options/plots',
        title: {
          zh: '统计图表',
          en: 'Common Configuration Statistical Charts',
        },
        order: 1,
      },
      {
        slug: 'options/plots/component',
        title: {
          zh: '图表组件 - Component',
          en: 'Component',
        },
        order: 2,
      },
      {
        slug: 'options/plots/label',
        title: {
          zh: '数据标签 - Label',
          en: 'Label',
        },
        order: 3,
      },

      {
        slug: 'options/plots/animation',
        title: {
          zh: '动画 - Animation',
          en: 'Animation',
        },
        order: 4,
      },
      {
        slug: 'options/plots/interaction',
        title: {
          zh: '交互 - Interaction',
          en: 'Interaction',
        },
        order: 5,
      },
      {
        slug: 'options/plots/theme',
        title: {
          zh: '主题 - Theme',
          en: 'Theme',
        },
        order: 6,
      },
      {
        slug: 'options/plots/special',
        title: {
          zh: '专有配置 - Specal Plot',
          en: 'Specal Plot',
        },
        order: 10,
      },
    ],
    examples: [
      {
        slug: 'statistics',
        icon: 'line',
        title: {
          zh: '统计图表',
          en: 'Statistics',
        },
      },
    ],
    detail: {
      engine: {
        zh: 'AntV react',
        en: 'AntV react',
      },
      title: {
        zh: 'AntV react·可视化组件库',
        en: 'AntV react·component library',
      },
      description: {
        zh: '简单好用的 React 图表库。',
        en: 'Simple and easy to use React chart library.',
      },
      image:
        'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*wi05Q7Za5ZIAAAAAAAAAAAAADmJ7AQ/original',
      imageStyle: {
        marginLeft: '80px',
        marginTop: '30px',
        transform: 'scale(1.4)',
      },
      buttons: [
        {
          text: {
            zh: '开始使用',
            en: 'Getting Started',
          },
          link: `/manual/introduction`,
        },
        {
          text: {
            zh: '图表示例',
            en: 'Examples',
          },
          link: `/examples/`,
          type: 'primary',
        },
      ],
    },
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
          zh: '涵盖统计图表、关系图、流程图以及地理可视化，种类齐全',
          en: 'Covering statistical charts, relational diagrams, flowcharts, and geographic visualization, with a wide range of types.',
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
      // {
      //   logo: 'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Uh1MSpdcj-kAAAAAAAAAAABkARQnAQ',
      //   title: {
      //     zh: '图编辑',
      //     en: 'Advanced Features',
      //   },
      //   description: {
      //     zh: '来这里尝试一下我们正在开发中的流程图功能',
      //     en: `Try out the flowchart feature we're developing here`,
      //   },
      //   link: `/examples/flowchart/basic#basic`,
      //   image: 'https://gw.alipayobjects.com/zos/antfincdn/5b5C1FvWLE/08c299c3-b3f8-4071-afc1-9aa5e1a9cb3a.png',
      //   isAppLogo: true,
      // },
    ],
    /** 首页合作公司 */
    companies: [
      {
        name: '阿里云',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '支付宝',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ',
      },
      { name: '天猫', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ' },
      {
        name: '淘宝网',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ',
      },
      {
        name: '网上银行',
        img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ',
      },
      { name: '京东', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ' },
      { name: 'yunos', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ' },
      { name: '菜鸟', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ' },
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
