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
  // menus: {
  //   // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  //   '/guide': [
  //     {
  //       title: '菜单项',
  //       path: '菜单路由（可选）',
  //       children: [
  //         // 菜单子项（可选）
  //         'guide/start.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
  //         'guide/faq.md',
  //       ],
  //     },
  //   ],
  //   // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
  //   '/zh-CN/guide': [
  //     // 省略，配置同上
  //   ],
  //   '/demos': [
  //     {
  //       title: '折线图',
  //       path: '/demos/line',
  //       children: [
  //         // 菜单子项（可选）
  //         'demos/line.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
  //       ],
  //     },
  //     {
  //       title: '面积图',
  //       path: '/demos/area',
  //       children: [
  //         // 菜单子项（可选）
  //         'demos/area.md',
  //       ],
  //     },
  //   ],
  // },
  // more config: https://d.umijs.org/config
});
