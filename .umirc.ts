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
    {
      title: '0.x',
      path: 'https://charts-v0.ant.design',
    },
    { title: 'GitHub', path: 'https://github.com/ant-design/ant-design-charts' },
  ],
  analytics: {
    ga: 'UA-72788897-12',
  },
  // more config: https://d.umijs.org/config
});
