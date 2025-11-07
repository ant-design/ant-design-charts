# antd-style

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Rlease CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/antd-style

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/antd-style.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/antd-style
[npm-size]: https://img.shields.io/bundlephobia/minzip/antd-style?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=antd-style

<!-- coverage -->

[coverage]: https://codecov.io/gh/ant-design/antd-style/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ant-design/antd-style/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/ant-design/antd-style/actions/workflows/test.yml/badge.svg
[release-ci]: https://github.com/ant-design/antd-style/actions/workflows/release.yml/badge.svg
[test-ci-url]: https://github.com/ant-design/antd-style/actions/workflows/test.yml
[release-ci-url]: https://github.com/ant-design/antd-style/actions/workflows/release.yml
[download-image]: https://img.shields.io/npm/dm/antd-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-style

## 简介

基于 Ant Design V5 Token System 构建的业务级 `css-in-js` 解决方案。 底层基于 [emotion](https://emotion.sh/) 封装。

- **🧩 Token System**: 默认集成 Ant Design V5 的 Token System，风格定制轻而易举，token 消费灵活易用；
- **🌓 暗色模式一键切换**: 基于 antd v5 cssinjs 动态主题配置与暗色主题算法封装了，为应用级场景提供易用的亮暗色主题切换能力，使用方式更加简单；
- **🎨 灵活扩展自定义主题**: Ant Design Style 提供自定义 token 与 自定义 stylish 的功能，当 antd 默认的 token 不能满足样式诉求时，可以灵活扩展出自己的主题体系，并在 CSS in JS 中自由消费；
- **🏂 less 平滑迁移**: 旧项目需要迁移？使用 antd-style 可以将项目中的 less 较低成本地迁移到 CSS in JS，并获得更好的用户体验与开发体验；
- **☯️ 微应用良好兼容**: Ant Design Style 默认兼容 qiankun 微应用（但会牺牲一点性能）。同时并为不需要微应用的使用场景提供性能优化选项；
- **📱 响应式轻松适配**: Ant Design Style 将为响应式应用提供便捷的工具函数，帮助开发者快速完成响应式主题开发；
- **🪴 Stylish**: Ant Design Style 提供了复合样式的能力，我们称它为 Stylish。Stylish 可以通过组合多个原子 token 来组织形成复杂的交互样式，实现极高的复用度；
- **🌰 文档与应用案例**: 展示使用 Ant Design Style 的组件、应用的各种案例，帮助开发者快速上手。(本文档同样使用 Ant Design Style 构建样式)

## 快速上手

### 安装

推荐使用 `pnpm` 安装

```bash
pnpm i antd-style -S
```

### 典型使用场景

#### 创建样式

```tsx
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  // 支持 css object 的写法
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // 也支持通过 css 字符串模板获得和 普通 css 一致的书写体验
  card: css`
    box-shadow: ${token.boxShadow};
    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    color: ${token.colorTextTertiary};
    background: ${token.colorBgContainer};
    transition: all 100ms ${token.motionEaseInBack};

    margin-bottom: 8px;
    cursor: pointer;

    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }
  `,
}));

export default () => {
  // styles 对象在 useStyles 方法中默认会被缓存，所以不用担心 re-render 问题
  const { styles, cx, theme } = useStyles();

  return (
    // 使用 cx 可以组织 className
    <div className={cx('a-simple-create-style-demo-classname', styles.container)}>
      <div className={styles.card}>createStyles Demo</div>
      {/* theme 对象包含了所有的 token 与主题等信息 */}
      <div>当前主题模式：{theme.appearance}</div>
    </div>
  );
};
```

## CHANGELOG

详情：[CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)
