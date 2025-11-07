# antd-style

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Rlease CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

<!-- umi url -->

<!-- npm url -->

<!-- coverage -->

<!-- Github CI -->

## Introduction

A business-level `css-in-js` solution built on the Ant Design V5 Token System. It is based on [emotion](https://emotion.sh/) at the bottom.

- **🧩 Token System**: Default integration of Ant Design V5 Token System, making style customization easy, and token consumption flexible and easy to use;
- **🌓 One-click Dark Mode Switching**: Based on antd v5 cssinjs dynamic theme configuration and dark theme algorithm encapsulation, it provides an easy-to-use light and dark theme switching capability for application-level scenarios, making it easier to use;
- **🎨 Flexible Custom Theme Extension**: Ant Design Style provides the functionality of custom tokens and custom styles. When the default tokens of antd cannot meet the style requirements, you can flexibly extend your own theme system and freely consume it in CSS in JS;
- **🏂 Smooth Migration from less**: Need to migrate an old project? Using antd-style can smoothly migrate less in the project to CSS in JS at a lower cost, and provide a better user experience and development experience;
- **☯️ Good Compatibility with Micro-Apps**: Ant Design Style is compatible with qiankun micro-apps by default (but may sacrifice some performance). At the same time, it provides performance optimization options for scenarios that do not require micro-apps;
- **📱 Easy Adaptation for Responsive Design**: Ant Design Style will provide convenient utility functions for responsive applications, helping developers quickly complete responsive theme development;
- **🪴 Stylish**: Ant Design Style provides the ability to compose complex interactive styles through the combination of multiple atomic tokens, achieving a high degree of reusability;
- **🌰 Documentation and Application Examples**: Show various examples of components and applications using Ant Design Style, helping developers get started quickly. (This document is also built using Ant Design Style for styling)

## Quick Start

### Installation

It is recommended to install using `pnpm`

```bash
pnpm i antd-style -S
```

### Typical Use Cases

#### Create Styles

```tsx
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  // Supports the writing style of css object
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
  // Also supports obtaining the same writing experience as normal css through css string templates
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
  // The styles object in the useStyles method is cached by default, so there is no need to worry about re-rendering issues
  const { styles, cx, theme } = useStyles();

  return (
    // Use cx to organize className
    <div className={cx('a-simple-create-style-demo-classname', styles.container)}>
      <div className={styles.card}>createStyles Demo</div>
      {/* The theme object contains all token and theme information */}
      <div>Current theme mode: {theme.appearance}</div>
    </div>
  );
};
```

## CHANGELOG

Details: [CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/antd-style
[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg
[npm-image]: http://img.shields.io/npm/v/antd-style.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/antd-style
[npm-size]: https://img.shields.io/bundlephobia/minzip/antd-style?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=antd-style
[coverage]: https://codecov.io/gh/ant-design/antd-style/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ant-design/antd-style/branch/master
[test-ci]: https://github.com/ant-design/antd-style/actions/workflows/test.yml/badge.svg
[release-ci]: https://github.com/ant-design/antd-style/actions/workflows/release.yml/badge.svg
[test-ci-url]: https://github.com/ant-design/antd-style/actions/workflows/test.yml
[release-ci-url]: https://github.com/ant-design/antd-style/actions/workflows/release.yml
[download-image]: https://img.shields.io/npm/dm/antd-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/antd-style
