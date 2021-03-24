import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Ant Design Charts',
  base: '/',
  publicPath: '/',
  exportStatic: {},
  dynamicImport: {},
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  styles: [
    '.__dumi-default-previewer-demo > div > div { min-height: 100px; }',
    '.__dumi-default-layout-content {overflow: hidden; overflow-x: auto;}',
    '.markdown > h4 { color: #1890ff !important}',
    '.custom-api-docs img {max-height: 100px}',
    '.__dumi-default-layout-hero button { background: #0170fe !important; border: 1px solid #0170fe !important}',
  ],
  navs: [
    null,
    {
      title: '0.x',
      path: 'https://v0-charts.ant.design',
    },
    { title: 'GitHub', path: 'https://github.com/ant-design/ant-design-charts' },
  ],
  analytics: {
    ga: 'UA-72788897-12',
  },
  menus: {
    '/zh-CN/demos': [
      {
        title: '概览',
        path: '/zh-CN/demos/global',
      },
      {
        title: '折线图',
        path: '/zh-CN/demos/line',
      },
      {
        title: '面积图',
        path: '/zh-CN/demos/area',
      },
      {
        title: '柱形图',
        path: '/zh-CN/demos/column',
      },
      {
        title: '条形图',
        path: '/zh-CN/demos/bar',
      },
      {
        title: '饼图',
        path: '/zh-CN/demos/pie',
      },
      {
        title: '双轴图',
        path: '/zh-CN/demos/dual-axes',
      },
      {
        title: '进度图',
        path: '/zh-CN/demos/gauge',
        children: ['demos/gauge.zh-CN.md', 'demos/liquid.zh-CN.md', 'demos/bullet.zh-CN.md'],
      },
      {
        title: '散点气泡图',
        path: '/zh-CN/demos/scatter',
      },
      {
        title: '玫瑰图',
        path: '/zh-CN/demos/rose',
      },
      {
        title: '关系图',
        path: '/zh-CN/demos/sankey',
        children: [
          '/demos/organizationTreeGraph.zh-CN.md',
          '/demos/indentedTree.zh-CN.md',
          '/demos/dagreGraph.zh-CN.md',
          '/demos/dagreFundFlowGraph.zh-CN.md',
          'demos/sankey.zh-CN.md',
          'demos/chord.zh-CN.md',
        ],
      },
      {
        title: '热力图',
        path: '/zh-CN/demos/heatmap',
      },
      {
        title: '迷你图',
        path: '/zh-CN/demos/tiny-line',
        children: [
          'demos/tiny-line.zh-CN.md',
          'demos/tiny-area.zh-CN.md',
          'demos/tiny-column.zh-CN.md',
          'demos/progress.zh-CN.md',
          'demos/ring-progress.zh-CN.md',
        ],
      },
      {
        title: '更多图表',
        path: '/zh-CN/demos/radar',
        children: [
          // 菜单子项（可选）
          'demos/radar.zh-CN.md',
          'demos/treemap.zh-CN.md',
          'demos/waterfall.zh-CN.md',
          'demos/word-cloud.zh-CN.md',
          'demos/histogram.zh-CN.md',
          'demos/sunburst.zh-CN.md',
          'demos/bidirectional-bar.zh-CN.md',
          'demos/radial-bar.zh-CN.md',
          'demos/box.zh-CN.md',
          'demos/stock.zh-CN.md',
        ],
      },
    ],
    '/demos': [
      {
        title: 'Gallery',
        path: '/demos/global',
      },
      {
        title: 'Line',
        path: '/demos/line',
      },
      {
        title: 'Area',
        path: '/demos/area',
      },
      {
        title: 'Column',
        path: '/demos/column',
      },
      {
        title: 'Bar',
        path: '/demos/bar',
      },
      {
        title: 'Pie',
        path: '/demos/pie',
      },
      {
        title: 'DualAxes',
        path: '/demos/dual-axes',
      },
      {
        title: 'Progress',
        path: '/demos/gauge',
        children: ['demos/gauge.md', 'demos/liquid.md', 'demos/bullet.md'],
      },
      {
        title: 'Scatter',
        path: '/demos/scatter',
      },
      {
        title: 'Rose',
        path: '/demos/rose',
      },
      {
        title: 'Relation',
        path: '/demos/sankey',
        children: [
          '/demos/organizationTreeGraph.md',
          '/demos/indentedTree.md',
          '/demos/dagreGraph.md',
          '/demos/dagreFundFlowGraph.md',
          'demos/sankey.md',
          'demos/chord.md',
        ],
      },
      {
        title: 'Heatmap',
        path: '/demos/heatmap',
      },
      {
        title: 'Tiny',
        path: '/demos/tiny-line',
        children: [
          'demos/tiny-line.md',
          'demos/tiny-area.md',
          'demos/tiny-column.md',
          'demos/progress.md',
          'demos/ring-progress.md',
        ],
      },
      {
        title: 'More Charts',
        path: '/demos/radar',
        children: [
          // 菜单子项（可选）
          'demos/radar.md',
          'demos/treemap.md',
          'demos/waterfall.md',
          'demos/word-cloud.md',
          'demos/histogram.md',
          'demos/sunburst.md',
          'demos/bidirectional-bar.md',
          'demos/radial-bar.md',
          'demos/box.md',
          'demos/stock.md',
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
