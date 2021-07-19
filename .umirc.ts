import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Ant Design Charts',
  base: '/',
  publicPath: '/',
  exportStatic: {},
  hash: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  theme: {
    '@s-site-menu-width': '262px',
  },
  styles: [
    '__dumi-default-previewer-demo {padding: 24px;}',
    '.__dumi-default-previewer-demo > div > div { min-height: 100px; }',
    '.__dumi-default-layout-content {overflow: hidden; overflow-x: auto;}',
    '.__dumi-default-layout-content h2 {margin: 32px 0 18px;}',
    '.__dumi-default-layout-content .gallery-item-box {display: grid;grid-gap: 12px; grid-template-columns: repeat(auto-fit, minmax(240px, 0.25fr));}',
    '.__dumi-default-layout-content .gallery-item-box a {display: block; padding: 12px; border: 1px solid #f0f0f0; border-radius: 4px;text-align: center;overflow: hidden;}',
    '.__dumi-default-layout-content .gallery-item-box a:hover {opacity: 1; border-color: #1890ff;}',
    '.markdown > h4 { color: #1890ff !important}',
    '.custom-api-docs img {max-height: 100px}',
    '.__dumi-default-layout-content .markdown > img {max-height: 450px; width: auto;}',
    '.__dumi-default-layout-hero button { background: #0170fe !important; border: 1px solid #0170fe !important}',
    '.__dumi-default-menu[data-mode="site"] .__dumi-default-menu-list > li > a {padding-left: 40px !important;}',
    '.__dumi-default-menu[data-mode="site"] .__dumi-default-menu-list > li > a ~ ul {padding-left: 24px !important;margin-left: 28px !important;}',
    'ul[role="slug-list"] li[data-depth="3"] > a > span {color: #717484 !important}',
    '.__dumi-default-layout[data-site-mode="true"] .__dumi-default-layout-toc {top: 120px !important; max-height: calc(95vh - 120px) !important;}',
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
        title: '图',
        path: '/zh-CN/demos/flow-analysis-graph',
        children: [
          '/demos/flow-analysis-graph.zh-CN.md',
          '/demos/organization-graph.zh-CN.md',
          '/demos/decomposition-tree-graph.zh-CN.md',
          '/demos/radial-tree-graph.zh-CN.md',
          // '/demos/indented-tree-graph.zh-CN.md',
          // '/demos/organizational-graph.zh-CN.md',
          // '/demos/radial-graph.zh-CN.md',
          // '/demos/indentedTree.zh-CN.md',
          // 暂未重构
          // '/demos/dagre-graph.zh-CN.md',
          // '/demos/dagre-fund-flow-graph.zh-CN.md',
        ],
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
        children: ['/demos/gauge.zh-CN.md', '/demos/liquid.zh-CN.md', '/demos/bullet.zh-CN.md'],
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
        children: ['/demos/sankey.zh-CN.md', '/demos/chord.zh-CN.md'],
      },
      {
        title: '热力图',
        path: '/zh-CN/demos/heatmap',
      },
      {
        title: '迷你图',
        path: '/zh-CN/demos/tiny-line',
        children: [
          '/demos/tiny-line.zh-CN.md',
          '/demos/tiny-area.zh-CN.md',
          '/demos/tiny-column.zh-CN.md',
          '/demos/progress.zh-CN.md',
          '/demos/ring-progress.zh-CN.md',
        ],
      },
      {
        title: '更多图表',
        path: '/zh-CN/demos/radar',
        children: [
          // 菜单子项（可选）
          '/demos/violin.zh-CN.md',
          '/demos/facet.zh-CN.md',
          '/demos/radar.zh-CN.md',
          '/demos/treemap.zh-CN.md',
          '/demos/funnel.zh-CN.md',
          '/demos/waterfall.zh-CN.md',
          '/demos/word-cloud.zh-CN.md',
          '/demos/histogram.zh-CN.md',
          '/demos/sunburst.zh-CN.md',
          '/demos/bidirectional-bar.zh-CN.md',
          '/demos/radial-bar.zh-CN.md',
          '/demos/box.zh-CN.md',
          '/demos/stock.zh-CN.md',
          '/demos/multi-view.zh-CN.md',
          '/demos/general.zh-CN.md',
        ],
      },
    ],
    '/demos': [
      {
        title: 'Gallery',
        path: '/demos/global',
      },
      {
        title: 'Graph',
        path: '/demos/source-graph',
        children: [
          {
            title: 'FlowAnalysisGraph',
            path: '/demos/flow-analysis-graph',
          },
          {
            title: 'OrganizationGraph',
            path: '/demos/organization-graph',
          },
          {
            title: 'DecompositionTreeGraph',
            path: '/demos/decomposition-tree-graph',
          },
          {
            title: 'RadialTreeGraph',
            path: '/demos/radial-tree-graph',
          },
          // {
          //   title: 'IndentedTreeGraph',
          //   path: '/demos/indented-tree-graph',
          // },

          // {
          //   title: 'RadialGraph',
          //   path: '/demos/radial-graph',
          // },

          // {
          //   title: 'OrganizationalGraph',
          //   path: '/demos/organizational-graph',
          // },
          // {
          //   title: 'indentedTree',
          //   path: '/demos/indentedTree-graph',
          // },
          // 暂未重构
          // {
          //   title: 'DagreGraph',
          //   path: '/demos/dagre-graph',
          // },
          // {
          //   title: 'DagreFundFlowGraph',
          //   path: '/demos/dagre-fund-flow-graph',
          // },
        ],
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
        children: [
          {
            title: 'Gauge',
            path: '/demos/gauge',
          },
          {
            title: 'Liquid',
            path: '/demos/liquid',
          },
          {
            title: 'Bullet',
            path: '/demos/bullet',
          },
        ],
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
          {
            title: 'Sankey',
            path: '/demos/sankey',
          },
          {
            title: 'Chord',
            path: '/demos/chord',
          },
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
          {
            title: 'TinyLine',
            path: '/demos/tiny-line',
          },
          {
            title: 'TinyArea',
            path: '/demos/tiny-area',
          },
          {
            title: 'TinyColumn',
            path: '/demos/tiny-column',
          },
          {
            title: 'Progress',
            path: '/demos/progress',
          },
          {
            title: 'RingProgress',
            path: '/demos/ring-progress',
          },
        ],
      },
      {
        title: 'More Charts',
        path: '/demos/radar',
        children: [
          {
            title: 'Violin',
            path: '/demos/violin',
          },
          {
            title: 'Facet',
            path: '/demos/facet',
          },
          {
            title: 'Radar',
            path: '/demos/radar',
          },
          {
            title: 'Treemap',
            path: '/demos/treemap',
          },
          {
            title: 'Funnel',
            path: '/demos/funnel',
          },
          {
            title: 'Waterfall',
            path: '/demos/waterfall',
          },
          {
            title: 'WordCloud',
            path: '/demos/word-cloud',
          },
          {
            title: 'Histogram',
            path: '/demos/histogram',
          },
          {
            title: 'Sunburst',
            path: '/demos/sunburst',
          },
          {
            title: 'Bidirectional Bar',
            path: '/demos/bidirectional-bar',
          },
          {
            title: 'Radial Bar',
            path: '/demos/radial-bar',
          },
          {
            title: 'Box',
            path: '/demos/box',
          },
          {
            title: 'Stock',
            path: '/demos/stock',
          },
          {
            title: 'Mix',
            path: '/demos/multi-view',
          },
          {
            title: 'General',
            path: '/demos/general',
          },
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
