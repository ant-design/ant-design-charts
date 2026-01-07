<a name="5.0.0-rc.8"></a>

# [5.0.0-rc.8](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.7...v5.0.0-rc.8) (2023-03-08)

### Bug Fixes

- 修复了在微信开发者工具中使用时会产生 `TypeError: Function(...) is not a function` 错误的问题。

<a name="5.0.0-rc.7"></a>

# [5.0.0-rc.7](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.6...v5.0.0-rc.7) (2021-09-01)

### Bug Fixes

- 修复了某些情况下无法断线重连的问题。

<a name="5.0.0-rc.6"></a>

# [5.0.0-rc.6](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.5...v5.0.0-rc.6) (2021-05-21)

### **BREAKING CHANGES**

- 不再支持以 `pushOfflineMessages` 模式创建 Realtime ，需要开发者主动拉取未读消息。

### Bug Fixes

- 修复了使用相同的成员创建临时对话时没有得到唯一的对话的问题。
- 修复了 `IMClient#getConversation` 返回值类型定义的错误。
- 修复了修改、撤回消息成功后可能抛出异常的问题。

<a name="5.0.0-rc.5"></a>

# [5.0.0-rc.5](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.4...v5.0.0-rc.5) (2020-12-21)

### Bug Fixes

- 修复了装饰器 `messageType` 和 `messageField` 类型定义的错误。
- 修复了 `Realtime#createIMClient` 参数类型定义的错误。
- 对话签名中邀请、移除成员时的 action 从 `add` / `remove` 更改为 `invite` / `kick`，如果你使用了签名控制对话邀请、移除成员权限，需要更新对 action 的判断逻辑。

<a name="5.0.0-rc.4"></a>

# [5.0.0-rc.4](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.3...v5.0.0-rc.4) (2020-12-16)

### Features

- 支持使用点号语法获取 Conversation 的自定义属性：
  ```js
  conversation.get('attr.type');
  ```

### Bug Fixes

- 修复了装饰器 `messageType` 和 `messageField` 类型定义的错误。
- 修复了重连后可能意外关闭长连接的问题。

<a name="5.0.0-rc.3"></a>

# [5.0.0-rc.3](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.2...v5.0.0-rc.3) (2020-06-05)

### Features

- 增加了 `ConversationQuery.or` 与 `ConversationQuery.and` 支持对话组合查询。

### Bug Fixes

- 修复了小程序中引入 SDK 抛 `Cannot read property 'document' of undefined` 异常的问题。

### BREAKING CHANGES

- 不再允许使用相同的 appId 初始化多个 Realtime 实例。该用法一般是对 SDK 的误用，容易导致连接数异常增长。对于大多数用户，该变动不会对应用带来任何影响。

<a name="5.0.0-rc.2"></a>

# [5.0.0-rc.2](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.1...v5.0.0-rc.2) (2020-03-26)

为了保证兼容性，SDK 一直以来分发的都是 ECMAScript 5 版本的代码，并打包了所有需要的 Polyfills（比如 Promise）。

从这个版本起，SDK 将同时提供以最新版本 ECMAScript 为编译目标的版本。相比于以 ECMAScript 5 版本，最新 ECMAScript 版本的 SDK 拥有更小的体积与更好的运行时优化，适用于只需要兼容最新版本浏览器的使用场景。如果应用使用了 `@babel/preset-env` 或类似方案，也可以在转译时 include 最新 ECMAScript 版本的 SDK，由应用来决定要兼容的目标运行环境。

需要注意最新版本 ECMAScript 每年都会变，而该版本的目标即是提供与最新标准对齐的代码，因此由于引入了新版本 ECMASCript 特性导致不再支持某些非最新版本的运行环境将不被视为 Breaking change。当前 ECMAScript 的版本为 2020。

### Features

- （实验性功能）提供了最新 ECMAScript 版本的 SDK。
  - CommonJS 运行环境可以通过 `require('leancloud-realtime/es-latest')` 来引入该版本的 SDK；
  - 对于 CDN 或者其他直接引用文件的场景，可以在 `dist/es-latest` 目录下找到预编译的文件。

### Bug Fixes

- 修复了不兼容 IE 11 等不支持 Promise 的运行环境的问题。

<a name="5.0.0-rc.1"></a>

# [5.0.0-rc.1](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-rc.0...v5.0.0-rc.1) (2020-03-16)

这个版本中 SDK 新增了一个运行环境无关的版本，开发者可以在此基础上应用目标运行环境的 Adapters 来适配相应的运行平台。

### Features

- 增加 `/im` 入口，这是一个运行环境无关的版本，需要配置 Adapters 后才能运行。可以通过以下方式引入该版本：

  ```js
  const { Realtime, setAdapters } = require('leancloud-realtime/im');
  ```

### BREAKING CHANGES

- 更新了内置支持平台的预编译版本文件名以更好的反应不同版本之间的差异：

  | 原文件名                                        | 新文件名                            |
  | ----------------------------------------------- | ----------------------------------- |
  | -                                               | im.js（新）                         |
  | realtime.js                                     | im-node.js                          |
  | realtime-browser.js<br/>realtime-browser.min.js | im-browser.js<br/>im-browser.min.js |
  | realtime-weapp.js<br/>realtime-weapp.min.js     | im-weapp.js<br/>im-weapp.min.js     |

  如果你使用了 CDN 或其他直接引用预编译版本的方式加载的 SDK，需要按照上面的对应关系更新文件名。

<a name="5.0.0-rc.0"></a>

# [5.0.0-rc.0](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-beta.3...v5.0.0-rc.0) (2020-03-12)

这个版本继续了对「更多运行环境支持」的探索，将 SDK 内置的多平台支持使用新的 `Adapter` 模式进行了重构。SDK 支持的运行平台、使用方法都没有变化。

### Bug Fixes

- `setAdaptors` 接口被重命名为 `setAdapters`。

<a name="5.0.0-beta.3"></a>

# [5.0.0-beta.3](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-beta.2...v5.0.0-beta.3) (2020-03-06)

作为正在进行的对「更多运行环境支持」探索的第一步，这个版本的 SDK 所以对平台提供的 API 的依赖被抽象为可替换的 `Adapter`。开发者可以配置全部或一部分 `Adapter` 以支持包括小程序在内的各类平台。

### Features

- 增加了 `setAdaptors` 接口（已在 v5.0.0-rc.0 中重命名为 `setAdapters`），支持配置自定义运行时。

<a name="5.0.0-beta.2"></a>

# [5.0.0-beta.2](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2020-01-26)

### Features

- 增加了 `ConversationQuery#first` 方法。

### Bug Fixes

- 修复了在微信小程序上引入 SDK 后抛 `Function` 未定义的问题。
- 当 SDK 从 `offline` 状态恢复到 `online` 状态时会立即开始尝试重连（之前会等待一秒）。
- 更新了 TypeScript 定义。

<a name="5.0.0-beta.1"></a>

# [5.0.0-beta.1](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-beta.0...v5.0.0-beta.1) (2019-12-10)

### Features

- 导出 MessageParser 用于消息内容的解析。

### Bug Fixes

- 订正了 TypeScript 定义文件中错误定义的 MessageConstructor interface。

<a name="5.0.0-beta.0"></a>

# [5.0.0-beta.0](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-alpha.3...v5.0.0-beta.0) (2019-10-30)

### BREAKING CHANGES

- 对于中国节点应用，初始化 `Realtime` 时必须通过 `server` 参数指定服务器地址。中国节点的应用必须要绑定自有域名后才能使用，这个改动是为让没有指定服务器地址时的异常更加明确。国际版应用不受影响。
- SDK 使用的域名更新。国际版应用新增 `app-router.com`，中国节点应用不受影响。`app-router.leancloud.cn` 均不再使用。如果国际版应用在微信小程序等需要域名白名单的平台上运行，需要更新白名单配置，开发者可以访问应用的 LeanCloud 控制台获取最新的域名列表。

### Bug Fixes

- 修复了 CocosCreator 编译到微信小游戏后无法连接的问题。
- 修正了 TypeScript 定义文件中 `Conversation#queryMessages` 的一个错误的参数类型。

<a name="5.0.0-alpha.3"></a>

# [5.0.0-alpha.3](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-alpha.2...v5.0.0-alpha.3) (2019-07-04)

### Bug Fixes

- 修复可靠的通知机制依然有可能会跳过部分通知的问题。

<a name="5.0.0-alpha.2"></a>

# [5.0.0-alpha.2](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-alpha.1...v5.0.0-alpha.2) (2019-07-04)

### Bug Fixes

- 修正了华东节点与美国节点的默认 server。
- 修复了开启调试模式的情况下在某些不支持 `Object.values` 的运行环境会抛异常的问题。

### Features

- 初始化 `Realtime` 的 `server` 参数现在允许指定协议了。

<a name="5.0.0-alpha.1"></a>

# [5.0.0-alpha.1](https://github.com/leancloud/js-realtime-sdk/compare/v5.0.0-alpha.0...v5.0.0-alpha.1) (2019-05-13)

### Features

- 增加了手动启用、停用调试模式的开关：

  ```js
  const { debug } = require('leancloud-realtime');
  debug.enable();
  debug.disable();
  ```

  原有在浏览器中使用 localStorage，在 Node.js 中使用环境变量启用调试模式的方式仍然可用。

### Bug Fixes

- 修复了 CocosCreator 真机上 WebSocket 连接抛异常的问题。

<a name="5.0.0-alpha.0"></a>

# [5.0.0-alpha.0](https://github.com/leancloud/js-realtime-sdk/compare/v4.3.0...v5.0.0-alpha.0) (2019-05-10)

### BREAKING CHANGES

- 创建对话时 `unique` 参数的默认值修改为 true（之前是 false）。
- 编译产出的文件现在使用了符合社区习惯的命名规则：`realtime-platform[.min].js`。如果你通过 CDN 或者其他直接引用文件的方式加载的 SDK，请调整对应的文件名。
- 内部使用的 HTTP client 从 axios 换成了 superagent。这个改动解决了在包括 CocosCreator 真机在内的多个平台上抛异常的问题。部分包含 HTTP 请求逻辑的 API 与网络相关的异常信息可能发生变化。

### Performance Improvements

- 升级到了 babel@7，略微减小了产出文件体积。

<a name="4.3.0"></a>

# [4.3.0](https://github.com/leancloud/js-realtime-sdk/compare/v4.2.1...v4.3.0) (2019-03-04)

### Bug Fixes

- 修复了暂态消息发送成功后消息 id 没有更新的问题。
- TypeScript 定义现在满足 `strict` 模式。

### Features

- `MESSAGE_UPDATE` 与 `MESSAGE_RECALL` 事件现在会额外返回一个 `reason` 参数来指示修改、撤回的原因（如果有的话）。
  - 由于这个功能带来的定义描述的升级，SDK 要求的 TypeScript 最低版本现在为 3.0。

### Performance Improvements

- 支持在服务端运维操作时更快的切换到可用服务器上。

<a name="4.2.1"></a>

## [4.2.1](https://github.com/leancloud/js-realtime-sdk/compare/v4.2.0...v4.2.1) (2018-10-09)

### Bug Fixes

- 现在能正确处理对话属性中的数组类型了。
- 移除了关于 `region` 参数不再使用的警告。

<a name="4.2.0"></a>

# [4.2.0](https://github.com/leancloud/js-realtime-sdk/compare/v4.1.0...v4.2.0) (2018-07-06)

### Features

- 改进了 TypeScript 定义，现在事件回调的参数也会得到类型推导与提示：
  ![Type inference](https://user-images.githubusercontent.com/175227/42360160-933389f8-8119-11e8-9b76-a114a184e4ff.png)
- `Realtime` 初始化时不再需要 `region` 参数了。

<a name="4.1.0"></a>

# [4.1.0](https://github.com/leancloud/js-realtime-sdk/compare/v4.0.1...v4.1.0) (2018-06-24)

在这个版本中，我们主要对话成员管理功能进行了一些调整。

### Features

- 增加了新角色 `ConversationMemberRole.OWNER`。现在对群主、管理员与成员的判断有了更一致的判断方法。
- `Conversation#getAllMemberInfo` 方法默认会利用缓存，因此开发者可以频繁的调用这个方法来获取最新的成员信息。

### Bug Fixes

- 修复了 `Conversation#getAllMemberInfo` 获取的成员信息中的角色全都是 `MEMBER` 的问题。
- 修复了没有「成员」概念的 `ChatRoom` 与 `ServiceConversation` 拥有成员管理相关的 API 的问题。
- 修复了使用 TypeScript 时 `EventEmitter` 类无法接受 Event 枚举的问题。

<a name="4.0.1"></a>

## [4.0.1](https://github.com/leancloud/js-realtime-sdk/compare/v4.0.0...v4.0.1) (2018-05-31)

### Bug Fixes

- 修复了在 React Native 中 `Realtime#createIMClient` 返回 `undefined` 的问题。
- 修复了私有部署应用会错误地请求公有集群的问题。

<a name="4.0.0"></a>

# 4.0.0 (2018-05-28)

在这个版本的更新中我们主要做了以下几方面的事情：

- **增加新功能：** 增加了提及（@）对话成员、对话成员角色（管理员）、对话黑名单与禁言、二进制消息、临时对话以及更灵活的消息查询条件等功能。
- **更清晰的异常：** 我们重新审视了 SDK 的异常机制，确保了异步的 API 只会异步地抛出异常（通过返回一个 rejected Promise），我们为用户可能会需要在运行时处理的服务端异常增加了 `name` 属性用来进行异常的匹配，并为部分异常更新了更详细的 `error.message`。
- **改进开发体验：** 我们增加了 `Event` 枚举来代替越来越长的事件名称字符串。我们还按照类型拆分了对话类，聊天室与服务号现在会显示为对应的类，并且有各自特有的 API。
- **为微信小程序优化：** 我们重新设计了对话与消息的序列化方法，现在可以在小程序中直接将其 `setData` 了。我们还持续跟进了小程序 API 的更新，优化了 SDK 连接层的性能与稳定性。此外，SDK 现已支持微信小游戏。

v4.0.0 是一个主版本更新，包含了一些不向前兼容的改动，具体的改动细节请参考 [BREAKING CHANGES](#v4-breaking-changes) 部分的说明，你也可以参考 [《v4.0 升级检查清单》](https://github.com/leancloud/js-realtime-sdk/wiki/v4.0-upgrade-checklist)进行升级。

v4.0.0 相比 v4.0.0-rc.0 没有改动。测试版本的更新日志参见[《v4.0 pre releases changelog》](https://github.com/leancloud/js-realtime-sdk/wiki/v4.0-pre-releases-changelog)。

<a name="v4-breaking-changes"></a>

### BREAKING CHANGES

- 重新设计了对话与消息的序列化方法。现在在小程序中能够直接将 Conversation 与 Message 实例作为 data 设置给视图层使用了。
  - `AVMessage` 接口原有的用来获取消息内容的 `toJSON` 方法现在改名为 `getPayload`。内置的 `Message` 类及其子类均已更新，如果使用富文本消息插件（leancloud-realtime-plugin-typed-messages），需要更新插件至 v3.0.0 或以上版本。
  - `Message` 类及其子类重新实现了 `toJSON` 方法用于获取该消息的有效信息。
  - `Conversation` 类增加了 `toJSON` 方法用于获取该对话的有效信息。
- 初始化 `Realtime` 现在需要 `appKey` 参数。

    <details>
  <summary>示例</summary>

  ```diff
   const realtime = new Realtime({
     appId: 'YOUR_APP_ID',
  +  appKey: 'YOUR_APP_KEY',
   });
  ```

    </details>

- 现在所有异步 API 的异常都是以异步的方式抛出。我们还更新了 API 文档，标出了 API 的异步属性。

    <details>
  <summary>示例</summary>

  ```javascript
  // before
  try {
    conversation.send(message);
  } catch (error) {
    // handle `Connection unavailable` error
  }

  // after
  conversation.add(members).catch(error => {
    // handle `Connection unavailable` error
  });
  ```

    </details>

- 部分异常的 `error.message` 被更新为更详细的解释。

  这是一个不兼容的改动，考虑到开发者可能会对 `error.message` 进行字符串匹配。我们建议使用 `error.code` 或 `error.name` 进行异常匹配与处理。

  **请注意：** 今后对 `error.message` 的改动将不被认为是不兼容的改动。

- 为了更好的隔离服务，我们为每个应用提供了独立的域名。对于小程序用户，请前往 [《小程序域名白名单配置》](https://leancloud.cn/docs/weapp-domains.html) 更新域名白名单。
- 移除了 v3 中被标记为废弃的 API，包括：
  - `IMClient`
    - `#markAllAsRead` 方法
    - `createConversation` 的 `options.attributes` 参数
    - `'unreadmessages'` 事件
  - `Conversation`
    - `attributes` 属性
    - `#setAttributes`、`#setAttribute`、`#setName` 与 `#markAsRead` 方法
    - `'receipt'` 事件
  - `ConversationQuery`
    - `#withLastMessages` 方法
  - `Message`
    - `needReceipt` 与 `transient` 属性
    - `#setNeedReceipt` 与 `#setTransient` 方法
- 作为批量操作对话成员支持部分成功的副作用，`Conversation` 与 `ChatRoom` 的 `#add` 与 `#remove` 方法现在不再返回当前的 Conversation 实例，而是返回一个包含部分成功与失败信息的 `PartiallySuccess` 对象。
- 不再支持下列运行环境（SDK 应该仍能在这些环境下工作，但我们不再对其进行测试了）：
  - Chrome < 45
  - iOS < 9.3
- 移除了对包管理工具 Bower 的支持，请使用 npm 或 Yarn 代替。

### Features

- 支持与 LeanCloud 用户系统集成。`Realtime#createIMClient` 方法现在支持使用一个已登录的 `AV.User` 登录 IM，详见 [相关文档](https://url.leanapp.cn/im-login-with-avuser)。
- 新增枚举 `Event`。SDK 派发的事件的名称是全小写风格的字符串。当事件的名称由多个单词组成时，全小写风格的命名会很难辩识（例如 `unreadmessagescountupdate`）。SDK 现在提供了事件常量枚举 `Event`，你可以使用 `Event.UNREAD_MESSAGES_COUNT_UPDATE` 来代替 `unreadmessagescountupdate` 了。
- 消息支持提及（@）对话中的成员。
  - 增加了 `Message#setMentionList` 与 `Message#mentionAll` 方法用于指定消息提及的对话成员。
  - 在收到消息时可以通过 `Message#mentioned` 属性判断当前用户是否被提及，通过 `Message#mentionList` 与 `Message#mentionedAll` 属性获取详细的信息。
  - 增加了 `Conversation#unreadMessagesMentioned` 属性指示当前用户是否在对话中被提及。该属性会在 `UNREAD_MESSAGES_COUNT_UPDATE` 事件发生时被更新，调用 `Conversation#read` 方法会重置该属性。
- 新增对话成员角色功能，对话成员支持区分「管理员」与「成员」等不同角色。为了支持该功能，我们增加了 `ConversationMemberInfo` 类用来存储对话成员的属性。相关的 API 有：
  - `Conversation` 与 `ChatRoom` 增加了 `#getAllMemberInfo` 与 `#getMemberInfo` 方法用于查询用户的角色信息。
  - `Conversation` 与 `ChatRoom` 增加了 `#updateMemberRole` 方法用于设置用户的角色。
  - 增加了 `ConversationMemberRole` 枚举，包含了内置的 `MANAGER` 与 `MEMBER` 两种角色。
- 新增对话黑名单与禁言功能：
  - `Conversation`、`ChatRoom` 与 `ServiceConversation` 增加了 `#blockMembers`、`#unblockMembers` 与 `#queryBlockedMembers` 方法。
  - `Conversation`、`ChatRoom` 与 `ServiceConversation` 增加了 `#muteMembers`、`#unmuteMembers` 与 `#queryMutedMembers` 方法。
  - `Realtime#createIMClient` 方法增加了指定黑名单的签名方法的参数 `clientOptions.blacklistSignatureFactory` 。
- 所有支持批量操作对话成员的方法（包括已经存在 add/remove，新增的 block/unblockMembers、mute/unmuteMembers），均支持部分成功。可以在成功的结果中得到对哪些成员的操作成功了，对哪些成员的操作失败了以及对应的失败原因。
- 支持发送接收二进制消息。
  - 增加了 `BinaryMessage`，可以通过 `ArrayBuffer` 构造。
- 查询历史消息接口（`Conversation#queryMessage`）现在支持按照从旧到新的方向查询，可以实现弹幕等需求。
  - 增加了 `direction` 选项，其值为 `MessageQueryDirection.NEW_TO_OLD` 或 `MessageQueryDirection.OLD_TO_NEW`。
  - 增加了方向的概念后，原先指定查询区间的参数会产生歧义，这些参数因此被重新命名了：
    - `beforeTime` -> `startTime`
    - `beforeMessageId` -> `startMessageId`
    - `afterTime` -> `endTime`
    - `afterMessageId` -> `endMessageId`
  - 增加了 `startClosed` 与 `endMessageId` 选项用于指定查询区间的开闭。
- 支持按照富媒体消息类型查询历史消息。`Conversation#queryMessages` 方法增加了 `type` 参数用于指定查询的消息的类型

    <details>
  <summary>示例</summary>

  ```js
  // 限定查询图片消息
  conversation
    .queryMessage({
      type: ImageMessage.TYPE,
    })
    .then(console.log)
    .catch(console.error);
  ```

    </details>

- 支持临时对话（TemporaryConversation)。临时对话是一种有有效期的对话，更多关于临时对话的的说明请参考[《实时通信服务总览 - 临时对话》](https://url.leanapp.cn/temporary-conversation)。
- 拆分了对话的概念。
  - SDK 现在暴露了四种不同的对话类：
    - 普通对话（`Conversation`）
    - 聊天室（`ChatRoom`）
    - 服务号（`ServiceConversation`）
    - 临时对话（`TemporaryConversation`）
  - 增加了相应的 API：
    - `IMClient` 提供了三种创建对话的方法（服务号不支持在客户端创建）：
      - `IMClient#createConversation`
      - `IMClient#createChatRoom`
      - `IMClient#createTemporaryConversation`
    - `IMClient` 提供了三种查询对话的方法（临时对话没有查询的概念）：
      - `IMClient#getQuery`
      - `IMClient#getChatRoomQuery`
      - `IMClient#getServiceConversationQuery`
    - 服务号特有的订阅相关方法：
      - `ServiceConversation#subscribe`
      - `ServiceConversation#unsubscribe`
- 支持对话属性更新通知：
  - `Conversation`、`ChatRoom` 与 `ServiceConversation` 的属性现在会自动更新，并增加了 `INFO_UPDATED` 事件。
  - 相应的，`IMClient` 增加了 `CONVERSATION_INFO_UPDATED` 事件。
- 引入了更加可靠的通知机制。在断线期间发生的 `INVITED` 与 `KICKED` 事件，现在会在断线重连成功后收到。
- `Realtime#createIMClient` 方法的第二个参数 `options` 增加了用于单点登录的 `tag` 与 `isReconnect` 选项。原第三个参数 `tag` 已被废弃。
- 支持微信小游戏。
- 支持私有部署。

### Bug Fixes

- 解决了与序列化 Conversation 抛循环引用异常相关的问题，包括小程序中无法 `console.log` Conversation 的问题。
- 修复了被服务端踢下线后链接没有正确断开的问题。
- 修复了创建 unique 对话时，尽管内存中已经存在了该对话，仍然会得到一个新实例的问题。
- 修复了查询得到的对话中自定义的 Date 类型的属性没有被正确解析为 Date 的问题。
- 修复了当连接不可用时，调用 `IMClient#close` 方法会抛异常的问题。
- 修复了多个导致切换用户时连接状态异常的问题。

### Performance Improvements

- 断线重连时优先尝试未连接过的服务器从而改善某些情况下的重连速度。
- 改善了小程序中的性能
  - 使用二进制帧通讯，减少流量消耗。
  - 自动感知网络状态变化从而获得更及时的重连。
