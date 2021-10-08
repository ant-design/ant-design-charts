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
    showAPIDoc: true,
    isAntVSite: false,
    versions: {
      [version]: 'https://charts.antv.vision',
      '0.x': 'https://v0-charts.ant.design/',
    },
    navs: [
      {
        slug: 'docs/manual/introduction',
        title: {
          zh: '教程',
          en: 'Manual',
        },
      },
      {
        slug: 'docs/api/Graph',
        title: {
          zh: 'API',
          en: 'API',
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
        slug: 'manual/FAQ',
        title: {
          zh: 'FAQ',
          en: 'FAQ',
        },
        order: 2,
      },
      {
        slug: 'manual/tutorial',
        title: {
          zh: '入门教程',
          en: 'Tutorial',
        },
        order: 3,
      },
    ],
    examples: [
      {
        slug: 'gallery',
        icon: 'gallery',
        title: {
          zh: '所有图表',
          en: 'All Demos',
        },
      },
    ],
    docsearchOptions: {
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
  },
};
