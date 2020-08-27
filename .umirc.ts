import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Ant Design Charts',
  base: '/',
  publicPath: '/',
  exportStatic: {},
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  styles: ['.__dumi-default-previewer-demo > div > div { min-height: 400px; }'],
  navs: [
    null,
    {
      title: '通用配置/高级',
      path: 'https://g2plot.antv.vision/zh/examples/general/title-description',
    },
    { title: 'GitHub', path: 'https://github.com/ant-design/ant-design-charts' },
  ],
  analytics: {
    ga: 'UA-72788897-12',
  },
  // more config: https://d.umijs.org/config
});
