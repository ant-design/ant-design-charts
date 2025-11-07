# LeanCloud JavaScript Realtime SDK

[![npm](https://img.shields.io/npm/v/leancloud-realtime.svg?style=flat-square)](https://www.npmjs.com/package/leancloud-realtime)
[![npm](https://img.shields.io/npm/v/leancloud-realtime/next.svg?style=flat-square)](https://www.npmjs.com/package/leancloud-realtime)
![gzip size](https://img.badgesize.io/leancloud/js-realtime-sdk/next-dist/dist/im-browser.min.js.svg?compression=gzip&style=flat-square)
[![Build Status](https://img.shields.io/travis/leancloud/js-realtime-sdk.svg?style=flat-square)](https://travis-ci.org/leancloud/js-realtime-sdk)
[![Codecov](https://img.shields.io/codecov/c/github/leancloud/js-realtime-sdk.svg?style=flat-square)](https://codecov.io/github/leancloud/js-realtime-sdk)
[![Known Vulnerabilities](https://snyk.io/test/github/leancloud/js-realtime-sdk/badge.svg?style=flat-square)](https://snyk.io/test/github/leancloud/js-realtime-sdk)

为您的 JavaScript App 接入 LeanCloud 实时通讯服务。

## 版本说明

遵循 [语义化版本](http://semver.org/lang/zh-CN/)。

安装稳定版本：

```
npm install leancloud-realtime --save
```

安装测试版本：

```
npm install leancloud-realtime@next --save
```

安装指定版本：

```
// 安装 v3 版本
npm install leancloud-realtime@3 --save
```

## 支持的运行环境

- 浏览器 / WebView
  - IE 10+
  - Edge latest
  - Chrome 45+
  - Firefox latest
  - iOS 9.3+
  - Android 4.4+
- Node.js 4.0+
- 微信小程序/小游戏 latest
- React Native 0.26+
- Electron latest

## 文档

- [安装文档](https://leancloud.cn/docs/sdk_setup-js.html)
- [使用文档](https://leancloud.cn/docs/realtime_v2.html)
- [API 文档](https://leancloud.github.io/js-realtime-sdk/docs/)

## Demo

- [Simple Chatroom](https://leancloud.github.io/js-realtime-sdk/demo/simple-chatroom/) ([src](https://github.com/leancloud/js-realtime-sdk/tree/master/demo/simple-chatroom))
- [LeanMessage](https://leancloud.github.io/leanmessage-demo) ([src](https://github.com/leancloud/leanmessage-demo))
- [WebRTC 视频通话](https://leancloud.github.io/js-realtime-sdk/demo/webrtc/) ([src](https://github.com/leancloud/js-realtime-sdk/tree/master/demo/webrtc))

## 插件

| package name                                 | 描述          |                                                                                         版本                                                                                          |                                           文档                                           |
| :------------------------------------------- | :------------ | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| leancloud-realtime-plugin-typed-messages     | 富媒体消息    |     [![npm](https://img.shields.io/npm/v/leancloud-realtime-plugin-typed-messages.svg?style=flat-square)](https://www.npmjs.com/package/leancloud-realtime-plugin-typed-messages)     |   [API docs](https://leancloud.github.io/js-realtime-sdk/plugins/typed-messages/docs/)   |
| leancloud-realtime-plugin-groupchat-receipts | 群聊已读回执  | [![npm](https://img.shields.io/npm/v/leancloud-realtime-plugin-groupchat-receipts.svg?style=flat-square)](https://www.npmjs.com/package/leancloud-realtime-plugin-groupchat-receipts) | [API docs](https://leancloud.github.io/js-realtime-sdk/plugins/groupchat-receipts/docs/) |
| leancloud-realtime-plugin-webrtc             | WebRTC 客户端 |             [![npm](https://img.shields.io/npm/v/leancloud-realtime-plugin-webrtc.svg?style=flat-square)](https://www.npmjs.com/package/leancloud-realtime-plugin-webrtc)             |       [API docs](https://leancloud.github.io/js-realtime-sdk/plugins/webrtc/docs/)       |

## 支持

- 在使用过程中遇到了问题时
  - 如果你是商用版用户，请新建一个工单。
  - 也可以在 [论坛](https://forum.leancloud.cn/) 提问、讨论。

## 贡献

如果你希望为这个项目贡献代码，请按以下步骤进行：

1.  Fork 这个项目，clone 到本地
1.  在目录中执行 `npm install` 安装所需 Node.js 依赖包
1.  编码，更新测试用例
1.  运行 `npm test` 确保测试全部 pass
1.  提交改动，请遵循 [conversational commit message 风格](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
1.  发起 Pull Request 至 master 分支

### 项目的目录结构

```
.
├── demo
├── deploy.sh                 // 部署 gh-pages 分支
├── release.sh                // 部署 dist 分支
├── dist                      // 打包产出 (dist 分支)
│   ├── core.js               // 核心逻辑（不包含运行时）
│   ├── im.js                 // IM（不包含运行时）
│   ├── im-browser.js         // 浏览器用
│   ├── im-weapp.js           // 微信小程序用
│   └── im-node.js            // node 用
├── proto
│   ├── message-compiled.js     // 使用 pbjs 生成的 message 类
│   ├── message.js              // ES6 wrapper
│   └── message.proto           // proto 原始文件
├── src                       // 源码
│   └── index.js                // 打包入口
├── test                      // 测试用例
│   ├── browser                 // 浏览器测试入口
│   └── index.js                // 测试入口
└── plugins
    ├── typed-messages          // leancloud-realtime-plugin-typed-messages package
    └── webrtc                  // leancloud-realtime-plugin-webrtc package
```

### Architecture

SDK 分为连接层与应用层两部分，只存在应用层对连接层公开 API 的调用，连接层对开发者不可见。

#### 连接层

- `WebSocketPlus`：封装了 WebSocket。相比 w3 WebSocket，增加了以下特性：
  - 是一个有限状态机
  - 实现了 [Node.js EventEmitter 接口](https://nodejs.org/api/events.html)
  - 超时与自动重连机制
  - url 参数支持 Promise 及备用地址
- `Connection`：继承自 `WebSocketPlus`，增加了与业务相关的功能：
  - 根据 subprotocol 自动处理发送与接收的消息，应用层发送接收的均是 ProtoBuf Message 类
  - `send` 接口返回 Promise，在 server 回复后才算 send 成功
  - 实现了应用层 ping/pong

#### 应用层

- `Realtime`：开发者使用 SDK 的入口，负责访问 router、创建 connection、创建与管理 clients、创建 messageParser（管理消息类型）、监听 connection 的消息并 dispatch 给对应的 client
- `Client`：所有的 clients 共享一个 connection
  - `IMClient`：对应即时通讯中的「用户」，持有 connection 与 conversations，负责创建管理将收到的消息处理后在对应 conversation 上派发，所有的 IMClients 共享一个 messageParser
- `MessageParser` 消息解析器，负责将一个 JSON 格式的消息 parse 为对应的 Message 类
- `Conversation`：实现对话相关的操作
  - `ConversationQuery`：对话查询器
- `Messages`
  - `AVMessage`：接口描述，生成文档用
  - `Message`：消息基类
  - `TypedMessage`：类型消息基类，继承自 `Message`
  - `TextMessage`：文本消息，继承自 `TypedMessage`
  - 其他富媒体消息类（`FileMessage` 及其子类、`LocationMessage`）由于依赖 leancloud-storage，作为另一个独立 package 发布

### 开启调试模式

#### Node.js

```bash
export DEBUG=LC*
```

#### 浏览器

```javascript
localStorage.setItem('debug', 'LC*');
```

## Develop Workflow

### 本地开发

更新 .proto 后请运行

```
npm run convert-pb
```

测试

```
npm run test:node -- --grep KEYWORDS
```

浏览器测试

```
npm run test:browser-local
```

编译

```
npm run build
```

### 持续集成

合并 PR 到 master 分支后持续集成会自动运行 `npm build` 与 `npm run docs`，然后将 dist 目录推送到 dist 分支，将文档与 demo 推送到 gh-pages。

## Release Process Workflow

0.  遵循 semver 提升 `package.json` 中的版本号
1.  `npm run changelog` 生成新的 `changelog.md`，润色之
1.  Commit `package.json`，`changelog.md`
1.  Push to remote `master` branch
1.  等待持续集成 pass
1.  使用 GitHub 基于 dist 分支生成 pre-release 包（for bower）
1.  Fetch and checkout remote `dist` branch 并确认该提交的内容是即将发布的版本
1.  npm publish（`npm publish`，需 npm 协作者身份），如果是 pre-release 版本需要带 next tag
1.  如有更新，在 npm 上发布各个 plugin
