# lottie-react

[![npm version](https://img.shields.io/npm/v/lottie-react)](https://www.npmjs.com/package/lottie-react) [![npm downloads/month](https://img.shields.io/npm/dm/lottie-react)](https://www.npmjs.com/package/lottie-react) [![Known Vulnerabilities](https://snyk.io/test/github/Gamote/lottie-react/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Gamote/lottie-react?targetFile=package.json) [![Coverage Status](https://coveralls.io/repos/github/Gamote/lottie-react/badge.svg?branch=master)](https://coveralls.io/github/Gamote/lottie-react?branch=master) [![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Gamote/lottie-react/blob/master/LICENSE)

This project is meant to give developers full control over **[Lottie](https://airbnb.design/lottie/)** instance with minimal implementation by wrapping **[lottie-web](https://github.com/airbnb/lottie-web)** in a Component or Hook that can be easily used in **React** applications.

## Installation

1. Make sure you have the peer-dependencies installed: `react` and `react-dom`.

    > _**Note:** This library is using React Hooks so the **minimum** version required for both **react** and **react-dom** is **v16.8.0**._

2. Install `lottie-react` using **yarn**

    ```shell
    yarn add lottie-react
    ```
   
    or **npm**

    ```shell
    npm i lottie-react
    ```

## Usage

### Using the component ([try it](https://codesandbox.io/s/lottie-react-component-2k13t))

```tsx
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const App = () => <Lottie animationData={groovyWalkAnimation} loop={true} />;

export default App;
```

### Using the Hook ([try it](https://codesandbox.io/s/lottie-react-hook-13nio))

```tsx
import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const App = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;
```

### 📄 Documentation

Checkout the [**documentation**](https://lottiereact.com) at [**https://lottiereact.com**](https://lottiereact.com) for more information and examples.

## Tests

Run the tests using the `yarn test` command.

### Coverage report
```text
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |     100 |      100 |     100 |     100 |                   
 components                  |     100 |      100 |     100 |     100 |                   
  Lottie.ts                  |     100 |      100 |     100 |     100 |                   
 hooks                       |     100 |      100 |     100 |     100 |                   
  useLottie.tsx              |     100 |      100 |     100 |     100 |                   
  useLottieInteractivity.tsx |     100 |      100 |     100 |     100 |                   
-----------------------------|---------|----------|---------|---------|-------------------
```

## Contribution

Any **questions** or **suggestions**? Use the [**Discussions**](https://github.com/Gamote/lottie-react/discussions) tab. Any **issues**? Don't hesitate to document it in the [**Issues**](https://github.com/Gamote/lottie-react/issues) tab, and we will do our best to investigate it and fix it. Any **solutions**? You are very welcomed to open a [**pull request**](https://github.com/Gamote/lottie-react/pulls).

> 👩‍💻 `v3` is under development and is planning to bring a lot of features and improvements. But unfortunately, at the moment all the maintainers are super busy with work related projects. You can check out the progress under the `v3` branch. And of course, you are encouraged to contribute. :)

Thank you for investing your time in contributing to our project! ✨

## Projects to check out

- [lottie-web](https://github.com/airbnb/lottie-web) - Lottie implementation for Web. Our project is based on it, and you might want to check it out in order to have a better understanding on what's behind this package or what features could you expect to have in the future.
- [lottie-android](https://github.com/airbnb/lottie-android) - Lottie implementation for Android
- [lottie-ios](https://github.com/airbnb/lottie-ios) - Lottie implementation for iOS
- [lottie-react-native](https://github.com/react-native-community/lottie-react-native) - Lottie implementation for React Native
- [LottieFiles](https://lottiefiles.com/) - Are you looking for animations files? LottieFiles has a lot of them!

## License

**lottie-react** is available under the [MIT license](https://github.com/Gamote/lottie-react/blob/main/LICENSE).

Thanks to [David Probst Jr](https://lottiefiles.com/davidprobstjr) for the animations used in the examples.
