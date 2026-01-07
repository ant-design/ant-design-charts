<!-- @format -->

# umi-fabric

一个包含 prettier，eslint，stylelint 的配置文件合集

A collection of configuration files containing prettier, eslint, stylelint

# Use

安装

```bash
npm i @umijs/fabric --save-dev
yarn add @umijs/fabric -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
};
```
