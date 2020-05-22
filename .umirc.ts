import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Ant Design Charts',
  base: '/',
  publicPath: '/',
  exportStatic: {},
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  navs: [
    null,
    {
      title: '通用配置/高级',
      path: 'https://g2plot.antv.vision/zh/examples/general/title-description',
    },
    { title: 'GitHub', path: 'https://github.com/ant-design/ant-design-charts' },
  ],
  // more config: https://d.umijs.org/config
});
