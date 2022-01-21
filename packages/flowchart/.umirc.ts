import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Ant Design Charts',
  mode: 'site',
  // more config: https://d.umijs.org/config
  lessLoader: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
});
