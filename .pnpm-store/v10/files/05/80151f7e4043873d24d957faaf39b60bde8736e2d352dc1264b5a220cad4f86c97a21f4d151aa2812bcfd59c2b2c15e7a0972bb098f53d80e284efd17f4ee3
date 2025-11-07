import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {},
  umd: {
    name: 'PetercatLUI',
    externals: {
      react: 'React',
      'react-dom/client': 'ReactDOM',
      antd: 'antd',
      'lottie-web': 'lottie',
    },
    // 该项目借助 Umi 应用的能力来应用 tailwindcss，但该方案无法用于组件库
    // 所以此处先用黑科技绕一下，后续需要改成 tailwindcss 生成与框架解耦的方案
    chainWebpack(memo) {
      memo.module
        .rule('tailwindcss')
        .pre()
        .test(/src\/index\.ts$/)
        .use('prepend-tailwind-loader')
        .loader(require.resolve('./scripts/prepend-tailwind-loader.js'));

      return memo;
    },
  },
});
