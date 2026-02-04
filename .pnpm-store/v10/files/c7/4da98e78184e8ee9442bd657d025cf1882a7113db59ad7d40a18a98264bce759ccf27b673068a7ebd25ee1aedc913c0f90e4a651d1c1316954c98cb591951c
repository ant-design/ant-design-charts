# @petercat/chat-app

  [![npm](https://img.shields.io/npm/dm/petercatai/chat-sdk.svg)](https://www.npmjs.com/package/petercatai/chat-sdk)
  [![Version](https://img.shields.io/npm/v/petercatai/chat-sdk/latest.svg)](https://www.npmjs.com/package/petercatai/chat-sdk)

chat-app is a UI component library based on dumi, designed for building [PeterCat](https://petercat.ai) conversation interfaces.


## Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# check your project for potential problems
$ yarn run doctor
```


## How to integrate Perter Cat Assistant by UMD way?

Step 1, externalize the following dependencies for your project **if you already used them in your project**:

```ts
// example for umi project
// .umirc.ts
export default {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    dayjs: 'dayjs',
    'lottie-web': 'lottie',
  },
};
```

Step 2, add the following script tag to your entry HTML file:

```diff
...
<head>
+ <script src="https://example.cdn.com/react/umd/react.development.js"></script>
+ <script src="https://example.cdn.com/react-dom/umd/react-dom.development.js"></script>
+ <script src="https://example.cdn.com/dayjs/dayjs.min.js"></script>
+ <script src="https://example.cdn.com/antd/dist/antd.js"></script>
+ <script src="https://example.cdn.com/lottie-web/build/player/lottie.js"></script>
+ <script src="https://example.cdn.com/petercat-lui/dist/umd/petercat-lui.min.js"></script>
+ <link rel="stylesheet" href="https://example.cdn.com/petercat-lui/dist/umd/petercat-lui.min.css">
</head>
...
```

Step 3, render Assistant component in your project:

```diff
<body>
  ...
+  <script>
+    PetercatLUI.initAssistant({
+      apiDomain: 'https://api.petercat.ai',
+      token: 'your-token'
+    });
+ </script>
</body>
```

That's it! Now you can enjoy the Assistant component in your project.


## LICENSE

MIT
