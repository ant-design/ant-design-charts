import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Ant Design Charts',
  base: '/',
  publicPath: '/',
  exportStatic: {},
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  theme: {
    '@s-site-menu-width': '262px',
  },
  styles: [
    '.__dumi-default-previewer-demo: {padding: 24px}',
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
        title: '地图',
        path: '/zh-CN/demos/fill',
        children: ['demos/district-map-fill.zh-CN.md', 'demos/district-map-bubble.zh-CN.md'],
      },
    ],
    '/demos': [
      {
        title: 'Maps',
        path: '/demos/fill',
        children: ['demos/district-map-fill.md', 'demos/district-map-bubble.md'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
