## 4.15.2 (2023-10-11)

### Internal Changes

升级依赖

| package                            | from       | to         |
| ---------------------------------- | ---------- | ---------- |
| @leancloud/platform-adapters-weapp | 1.6.2      | 1.6.3      |
| leancloud-realtime                 | 5.0.0-rc.7 | 5.0.0-rc.8 |

## 4.15.1 (2023-09-25)

### Bug Fixes

- 修复在新版微信开发者工具中获取 AV.Object 时产生 warning 提示的问题。

## 4.15.0 (2023-04-21)

### Features

- 国际节点支持通过 stream 构建文件（需要手动设置文件大小）
  ```js
  const stats = fs.statSync('my_file');
  const stream = fs.createReadStream('my_file');
  const file = new AV.File('my_file', stream);
  file.metaData('size', stats.size);
  file.save();
  ```

## 4.14.0 (2022-12-15)

### Features

- 支持在 `AV.User.loginWithAuthData`, `AV.User.loginWithMiniApp`, `AV.User.loginWithAuthDataAndUnionId` 等函数的 `options` 中使用 `useMasterKey`, `sessionToken`, `user` 参数

## 4.13.4（2022-10-31）

### Bug Fixes

- 修复 AV.Status 类型定义的错误。

## 4.13.3（2022-10-31）

### Bug Fixes

- 修复 AV.Query#scan 当仅有一个 Object 满足条件约束时重复返回该 Object 的问题。
- 补充 AV.Status 相关的类型定义。

## 4.13.2（2022-08-23）

### Bug Fixes

- 修复异步 storage 平台上无法使用 AV.Friendship 的问题。

## 4.13.1（2022-07-15）

### Internal Changes

升级依赖

| package                              | from       | to         |
| ------------------------------------ | ---------- | ---------- |
| @leancloud/platform-adapters-browser | 1.5.2      | 1.5.3      |
| @leancloud/platform-adapters-node    | 1.5.2      | 1.5.3      |
| @leancloud/platform-adapters-weapp   | 1.6.1      | 1.6.2      |
| leancloud-realtime                   | 5.0.0-rc.4 | 5.0.0-rc.7 |

# 4.13.0（2022-07-12）

### Features

- 添加 `AV.File.censor` 和 `AV.File#censor` 方法用于发起文件审核请求（需要使用 masterKey）。

### Internal Changes

- 使用 babel@7 进行代码转义。
- 使用 core-js@3 提供的 polyfills。

## 4.12.3（2022-06-24）

### Bug Fixes

- 修复抛出的服务端异常不是 AV.Error 实例的问题。
- 补充缺失的、修复错误的类型定义。

## 4.12.2（2022-02-10）

### Bug Fixes

- 修复遍历 Class 时缺少最后一条数据的问题。
- 修复 AV.Error 类型定义的错误。

## 4.12.1（2022-02-09）

### Bug Fixes

- 修复某些情况下保存属性中包含 AV.File 的 AV.Object 时报错的问题。

# 4.12.0（2021-09-16）

### Features

- `AV.Object.saveAll` 支持 `fetchWhenSave` 参数。
- 添加 `AV.Query#findAndCount` 方法，用于同时获取查询结果和符合查询条件的总数。

## 4.11.1（2021-06-09）

### Bug Fixes

- 修复了成功保存 `AV.File` 后没有设置文件的 `objectId` 和 `url` 属性的问题。
- 修复了 `AV.File#save` 返回值可能不正确的问题。

# 4.11.0（2021-06-09）

### Features

- 支持向国内节点保存大于 1GB 的文件。

### Bug Fixes

- 使用 `AV.init` 初始化 SDK 时，若未提供 `production` 参数，不再将目标环境重置为生产环境。

## 4.10.1（2021-03-18）

### Bug Fixes

- 修复了文件保存失败时仍能获取到 URL 属性的问题。

# 4.10.0（2021-01-19）

### Features

- 使用 masterKey 上传文件时，可自定义文件的 key :
  ```js
  const file = new AV.File(name, data);
  file.save({
    useMasterKey: true,
    key: 'custom-file-key',
  });
  ```

### Internal Changes

- 升级了 browser 、node 和 weapp 平台的 Adapters：
  package|from|to
  -|-|-
  @leancloud/adapter-types|`4.0.0`|`5.0.0`
  @leancloud/platform-adapters-browser|`1.4.0`|`1.5.2`
  @leancloud/platform-adapters-node|`1.4.0`|`1.5.2`
  @leancloud/platform-adapters-weapp|`1.5.0`|`1.6.1`
  使用其他依赖 `@leancloud/adapter-types@5` 的 Adapters 也需要升级 `leancloud-storage` 到 4.10.0 。

# 4.9.0（2020-12-18）

### Bug Fixes

- 修复了使用 `AV.Object.saveAll` 批量保存数据时，部分操作失败会影响后续操作执行的问题。

### Internal Changes

- 升级了内部依赖：
  package|from|to
  -|-|-
  @leancloud/adapter-types|`3.0.0`|`4.0.0`
  @leancloud/platform-adapters-browser|`1.1.0`|`1.4.0`
  @leancloud/platform-adapters-node|`1.1.0`|`1.4.0`
  @leancloud/platform-adapters-weapp|`1.2.0`|`1.5.0`
  leancloud-realtime|`5.0.0-rc.2`|`5.0.0-rc.4`

## 4.8.3（2020-12-15）

### Internal Changes

- 修改了上传文件时 file key 的生成方式。

## 4.8.2（2020-12-09）

### Bug Fixes

- 修复 `AV.SearchQuery#find` 未正确处理 `AuthOptions` 的问题。

## 4.8.1（2020-12-03）

### Bug Fixes

- 修复构造 `AV.SearchQuery` 时省略 `className` 会抛出异常的问题。

### Bug Fixes

- 修复 `AV.SearchQuery#highlights` 不能正确处理数组参数的问题。

# 4.8.0（2020-11-19）

### Features

- 添加 `AV.Friendship` 以支持好友所需的各项功能。
- 添加 `AV.User#getFollowersAndFollowees` 方法用于查询指定用户的 followers 和 followees 。

### Internal Changes

- 现在保存通过 `AV.File.withURL` 方法创建的文件等同于直接在 \_File 中添加一行数据，不再自动生成 `mime_type`。

# 4.7.0（2020-07-14）

### Features

- 增加下列方法以支持在修改手机号之前进行验证：
  - `AV.User.requestChangePhoneNumber`
  - `AV.User.changePhoneNumber`

## 4.6.1 (2020-06-05)

### Bug Fixes

- 修复了在 Node.js 中运行时错误的提示不应使用 masterKey 并无法找到 `AV.Cloud.useMasterKey` 方法的问题。

# 4.6.0 (2020-05-28)

### Features

- 增加了以下平台无关的小程序登录方法，通过各平台 Adapters 生成的 `authInfo` 进行登录：
  - `AV.User.loginWithMiniApp`
  - `AV.User#loginWithMiniApp`
- 增加了 `AV.User.mergeUnionId` 方法用于合并 `authInfo` 与 `unionId`。

### Bug Fixes

- 修复了 React Native 上导入 SDK 抛异常的问题。详细的安装步骤参见 [《JavaScript SDK 安装指南 · React Native》](https://url.leanapp.cn/react-native-setup)。
- 修复了通过 `AV.User.updatePassword` 更新密码后，未能同步更新当前用户的 `sessionToken` 的问题。
- 修复了调用 `AV.User.become` 时，传递空 `sessionToken` 未抛异常的问题。

## 4.5.3 (2020-04-03)

### Bug Fixes

- 修复了中国节点部分情况下文件上传失败但仍然返回了成功的问题。
- 补充了平台无关版本的预编译文件：`av[-live-query]-core[-min].js`。

## 4.5.2 (2020-03-27)

### Bug Fixes

- 修复了微信小程序中引入 SDK 抛异常 `Cannot read property 'core-js_shared' of undefined` 的问题。

## 4.5.1 (2020-03-24)

### Bug Fixes

- 修复了不兼容 IE 11 等不支持 Promise 的运行环境的问题。
- 修复了 TypeScript 找不到 `@leancloud/adapter-types` 模块的问题。

### Internal Changes

- `AV.Promise` 现在使用 `core-js` 的实现代替了 `es6-promise`。

# 4.5.0 (2020-03-18)

SDK [计划](https://github.com/leancloud/javascript-sdk/wiki/Roadmap) 在 5.0 中支持同时访问多个应用。在此之前，尽管当前版本中重复初始化 SDK 存在导致预期之外且难以追查的问题的风险，改变当前访问的应用的能力在很多场景下依然是有价值的。因此在这个版本中 SDK 允许通过多次调用 `init` 方法进行重新初始化。

### Features

- 多次调用 `init` 方法不再抛出「SDK 已初始化」的异常，而是会打印一条警告日志。

# 4.4.0 (2020-03-17)

这个版本中 SDK 新增了运行环境无关的版本，开发者可以在此基础上应用目标运行环境的 Adapters 来适配相应的运行平台。

同时从这个版本开始 SDK 对各类平台的适配策略从之前的内置支持转为通过独立的第三方 Adapters 库支持。各个平台的 Adapters 将由 LeanCloud 与社区共同维护、独立演进、拥有独立的版本号。对于目前已经内置支持的平台，新版的 SDK 依然保留内置了对应的预编译版本，因此这些平台可以沿用之前的使用方式（React Native 除外，因为目前内置的适配实现使用的 API 已经被标记为「不赞成使用」）。

### Features

- 增加 `/core` 与 `/live-query-core` 入口，通过这种方式引入的 SDK 不包含运行环境相关的逻辑，需要配置 Adapters 后才能运行。
- React Native 的适配现在通过独立的 Adapters 库（`@leancloud/platform-adapters-react-native`）支持，因此这个版本的 SDK 中去掉了内置的预编译的 React Native 版本。

  <details>
      <summary>
  适配 React Native 示例
    </summary>

  ```js
  const AV = require('leancloud-storage/core');
  const reactNativeAdapters = require('@leancloud/platform-adapters-react-native');
  AV.setAdapters(reactNativeAdapters);
  ```

### Bug Fixes

- 修复了在浏览器中通过引入预编译的 `av-live-query.js` 引入的 SDK 抛异常的问题。这个问题是 v4.3.1 中引入的。

### Internal Changes

- hookKey 现在需要在初始化时传入，SDK 不再自动从环境变量获取其可能的值。

## 4.3.1 (2020-03-12)

这个版本继续了对「更多运行环境支持」的探索，将 SDK 内置的多平台支持使用新的 `Adapter` 模式进行了重构。SDK 支持的运行平台、使用方法都没有变化。

### Bug Fixes

- 修复了进行 Relation 查询时抛 `_extraOptions is undefined` 异常的问题。这个问题是 v4.0.0 中引入的。
- `setAdaptors` 接口被重命名为 `setAdapters`。

# 4.3.0 (2020-03-09)

### Features

- 增加了 `AV.setAdaptors`（已在 v4.3.1 中重命名为 `setAdapters`） 方法用于配置运行环境适配器。

  作为正在进行的对「更多运行环境支持」探索的第一步，这个版本的 SDK 所以对平台提供的 API 的依赖被抽象为可替换的 `Adapter`。开发者可以配置全部或一部分 `Adapter` 以支持包括小程序在内的各类平台。

- 为 `AV.init` 的 `serverURLs` 参数增加了一个同义参数 `serverURL`。

# 4.2.0 (2020-01-07)

### Features

支持 QQ 小程序。

- 微信小程序 SDK 现已兼容 QQ 小程序，并新增了以下登录相关的方法：
  - `AV.User.loginWithQQApp`
  - `AV.User.loginWithQQAppWithUnionId`
  - `AV.User#loginWithQQApp`
  - `AV.User#loginWithQQAppWithUnionId`
  - `AV.User#associateWithQQApp`
  - `AV.User#associateWithQQAppWithUnionId`

### Bug fixes

- 修复了多处 TypeScript 定义文件的错误，SDK 要求的 TypeScript 最低版本现在为 3.0。

# 4.1.0 (2019-12-10)

### Features

- 新增了 `AV.Object#dirtyKeys` 方法获取本地修改过的属性名。`Object#hasChanged` 与 `Object#changedAttributes` 方法已被移除，请使用 `AV.Object#dirty` 与 `AV.Object#dirtyKeys` 代替。

### Bug fixes

- 修复了云引擎中初始化依然要求指定服务器地址的问题。

## 4.0.1 (2019-12-02)

### Bug fixes

- 修复了指定 key fetch 时，服务端已删除的 key 没有被正确清理的问题。
- 补充了 `AV.Cloud.useMasterKey` 的 TypeScript 定义。

# 4.0.0 (2019-10-31)

### BREAKING CHANGES

- 对于中国节点应用，初始化 SDK 时必须通过 `serverURLs` 参数指定服务器地址。中国节点的应用必须要绑定自有域名后才能使用，这个改动是为让没有指定服务器地址时的异常更加明确。国际版应用不受影响。
- SDK 使用的域名更新。国际版应用新增 `app-router.com`，中国节点应用不受影响。`app-router.leancloud.cn` 均不再使用。如果国际版应用在微信小程序等需要域名白名单的平台上运行，需要更新白名单配置，开发者可以访问应用的 LeanCloud 控制台获取最新的域名列表。
- `AV.Query#toJSON` 方法现在返回完整的信息，可以通过新增的 `AV.Query.fromJSON` 方法反序列化为 `AV.Query`。原 `AV.Query#toJSON` 方法已被重命名为一个内部方法 `AV.Query#_getParams`。
- 移除了 Bower 支持。

### Features

- 新增了 `AV.Query.fromJSON` 方法可以通过一个 JSON 构造一个 `AV.Query`。与 `AV.Query#toJSON` 结合可以实现在服务端与客户端之间传输 `AV.Query`。

### Bug fixes

- 修复了在 `AV.init` 时指定 `production` 不生效的问题。
- 修复了多处 TypeScript 定义问题。

# 3.15.0 (2019-08-05)

### Features

- 排行榜在获取排名结果时可以通过 `includeUserKeys` 选项同时返回 Pointer 类型的用户属性。

### Bug fixes

- 修复了一处导致在 Taro 中引入 SDK 抛异常的问题
- 修复了多处 TypeScript 定义问题。

## 3.14.1 (2019-07-04)

### Bug fixes

- 修复了 LiveQuery server 配置异常导致不可用的问题。

# 3.14.0 (2019-06-30)

### Features

- 增加了一组序列化与反序列化方法 `AV.parse` 与 `AV.stringify`。
- 排行榜增加了 `AV.Leaderboard#count` 方法用于获取参与排行的用户总数。
- 增加了手动启用、停用调试模式的开关：

  ```js
  AV.debug.enable();
  AV.debug.disable();
  ```

  原有在浏览器中使用 localStorage，在 Node.js 中使用环境变量启用调试模式的方式仍然可用。

- 扩展了初始化时的 serverURLs 参数，现在允许指定 LiveQuery 服务的 server。

### Bug fixes

- 修正了 LiveQuery 的默认 server。
- `AV.Query#get` 方法传入 falsy objectId 时现在有了更准确与一致的异常信息。
- 修复了多处 TypeScript 定义问题。

## 3.13.2 (2019-05-14)

### Bug fixes

- 修复了 `AV.Object.createWithoutData` 方法返回对象类型始终是 `AV.Object` 的问题。
- 修复了多处 TypeScript 定义问题。

## 3.13.1 (2019-05-08)

### Bug fixes

- 优化了 `AV.Object` 静态方法的 TypeScript 定义。

# 3.13.0 (2019-04-17)

### Features

- 小程序用户系统增加了 UnionId 支持。
  - 一键登录 API `AV.User[.#]loginWithWeapp` 增加了新的参数 `preferUnionId`。设置了该参数为 `true` 且该小程序绑定了微信开放平台帐号，那么在满足以下条件时会自动使用用户的 UnionId 登录。
    - 微信开放平台帐号下存在同主体的公众号，并且该用户已经关注了该公众号。
    - 微信开放平台帐号下存在同主体的公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用。
  - `AV.User#linkWithWeapp` 重命名为 `AV.User#associateWithWeapp` 与其他关联第三方 API 保持统一的命名风格。同时支持新参数 `preferUnionId`。
  - 增加了 `AV.User[.#]loginWithWeappWithUnionId` 与 `AV.User#associateWithWeappWithUnionId` 方法。用于支持开发者在通过其他方式自行拿到用户的 UnionId 后在客户端登录或关联用户。
- 增加了 `AV.User.loginWithEmail` 方法用于明确指定使用 Email 与密码登录。

### Bug fixes

- `AV.File#set` 与 `AV.File#setACL` 现在会正确地返回当前实例（`this`）了。

# 3.12.0 (2019-03-01)

### Features

- `AV.File#save` 方法增加了 `keepFileName` 方法允许保留下载文件的文件名。

  <details>
    <summary>
  示例
    </summary>

  ```js
  new AV.File('file-name.ext', source).save({ keepFileName: true });
  // https://your-file-domain/5112b94e0536e995741c/file-name.ext

  new AV.File('file-name.ext', source).save();
  // https://your-file-domain/5112b94e0536e995741c.ext
  ```

  </details>

- 增加了 `AV.Object#revert` 方法撤销部分或全部修改了但未保存（save）的改动。

### Bug fixes

- 修复了 `AV.Object#set` 的 TypeScript 定义问题。

## 3.11.1 (2018-12-26)

### Bug fixes

- 修复了在初始化时设置了 serverURLs，但仍然会使用缓存的默认配置的问题。
- 修复了 `AV.Object#clone` 与 `AV.Error` 的 TypeScript 定义问题。

# 3.11.0 (2018-11-08)

### Features

- 增加了 `AV.LiveQuery.pause` 与 `AV.LiveQuery.resume` 方法。这两个方法可以用于在网络变化或者应用切换后台时主动通知 SDK 断开/恢复 LiveQuery 的连接。
- 排行榜增加了删除用户分数与排名的方法 `AV.Leaderboard.deleteStatistics`。

### Bug fixes

- 修复了 `AV.File#save` 方法参数不尊重 AuthOptions 类型参数的问题。
- 修复了 LiveQuery 的 `Query#subscribe` 方法在 React Native 中返回 undefined 的问题。
- 修复了包括 `Relation` 在内的一些 TypeScript 定义文件错误。

<details>
  <summary>
Prereleases
  </summary>

## 3.11.0-beta.0 (2018-08-13)

### Features

- 增加了 `AV.LiveQuery.pause` 与 `AV.LiveQuery.resume` 方法。这两个方法可以用于在网络变化或者应用切换后台时主动通知 SDK 断开/恢复 LiveQuery 的连接。

### Bug fixes

- 修复了 `AV.File#save` 方法参数不尊重 AuthOptions 类型参数的问题。

</details>

# 3.10.0 (2018-08-03)

### Features

- `AV.Leaderboard#getResultsAroundUser` 方法增加了 `user` 参数支持获取指定用户附近的排名结果。

### Bug fixes

- 修复了文件上传进度回调会错误地在上传结束后报告 `direction` 为 `'download'` 的事件的问题。
- 修复了 TypeScript 定义中与第三方登录相关的多处错误。

# 3.9.0 (2018-07-19)

### Features

- 增加了匿名用户登录的支持：
  - `AV.User.loginAnonymously` 方法用于创建一个匿名用户并登录。
  - `AV.User#isAnonymous` 方法用于判断用户是否为匿名用户。
- 排行榜增加了新的功能：
  - 支持更新数据时，无视排行榜的更新策略，强制更新分数：`AV.Leaderboard#updateStatistics` 方法增加了 `overwrite` 参数。
  - 支持获取历史版本的排名结果：`AV.Leaderboard#getResults` 与 `AV.Leaderboard#getResultsAroundUser` 方法增加了 `version` 参数。
  - 增加了获取历史版本存档的方法 `AV.Leaderboard#getArchives`。

## 3.8.1 (2018-07-13)

### Bug fixes

- 修复 TypeScript 定义中的多处问题。

# 3.8.0 (2018-07-09)

### Features

- 初始化时不再需要 `region` 参数了。
- 改进了 TypeScript 定义，现在 `AV.Query` 的查询结果会得到正确的类型推导。
- 排行榜 API 根据产品功能的更新进行了一些调整：
  - 增加了一个新的数据更新策略 `AV.LeaderboardUpdateStrategy.SUM`。
  - 移除了不再可用的 `AV.LeaderboardVersionChangeInterval.HOUR`。
- `AV.Conversation` 的发送消息 API 现在可以接受 leancloud-realtime v4 中的新 `Message` 类了。
- 美国节点的应用现在也启用了每个应用独立的域名。

## 3.7.3 (2018-06-14)

### Bug fixes

- 修复了 CocosCreator 中 `AV.Query#find` 等方法在模拟器及真机上不触发回调并打印 `[ERROR] args[0] isn't a typed array or an array buffer` 的问题。
- 修复了通过 `require('leancloud-storage/live-query')` 引入 SDK 无法得到 TypeScript 定义的问题。

## 3.7.2 (2018-06-06)

### Bug fixes

- 修复了 `AV.Query#find` 方法错误的 TypeScript 定义。
- 排行榜 API 进行了修订。

## 3.7.1 (2018-05-31)

### Bug fixes

- 增加了遗漏的 `AV.Leaderboard#destroy` 方法。
- 修复了将一个通过 `AV.File.withURL` 方法创建的文件保存为一个对象的属性时，文件被错误地保存为 `null` 的问题。
- 更新了排行榜使用的 Rest API 路径。

# 3.7.0 (2018-05-25)

### Features

- 第三方账号登录功能增加了两项新的能力：

  - 所有第三方账号登录 API 增加了 `failOnNotExist` 参数，指定该参数为 `true` 时如果当前不存在该 `authData` 对应的用户，将会抛出「未找到用户」异常。该选项使开发者在使用第三方账号登录创建新用户之前有机会要求用户填写手机号码等信息。

    我们还重新命名了这些 API，以更好的反映其功能：

    - `AV.User.loginWithAuthData` 代替了 `AV.User.signUpOrlogInWithAuthData`
    - `AV.User.loginWithAuthDataAndUnionId` 代替了 `AV.User.signUpOrlogInWithAuthDataAndUnionId`
    - `AV.User.loginWithWeapp` 没有变化

    旧的 API 已不赞成使用，并将会在 v4.0.0 中移除。

  - 所有第三方账号登录静态 API 增加了对应的实例方法。开发者可以在调用这些方法前，先设置好用户的 `username`，`password` 等信息，再与 `authData` 一起进行登录。增加的方法有：

    - `AV.User#loginWithAuthData`
    - `AV.User#loginWithAuthDataAndUnionId`
    - `AV.User#loginWithWeapp`

- 新功能预览：排行榜（`AV.Leaderboard`）

  排行榜功能目前在预览阶段，在正式发布前 API 可能会有不向前兼容的变更，请不要在生产环境使用。

  - [使用文档](https://url.leanapp.cn/leaderboard-js)
  - [API 文档](https://leancloud.github.io/javascript-sdk/docs/AV.Leaderboard.html)
  - [Demo](https://leancloud.github.io/javascript-sdk/demo/leaderboard/)

### Bug fixes

- 修复了 `AV.Query#sizeEqualTo` 方法没有返回 `this` 的问题。

## 3.6.8 (2018-04-25)

### Bug fixes

- 修复了 `AV.User#associateWithAuthDataAndUnionId` 方法在当前用户已经连接了其他第三方平台时，unionId 没有生效的问题。
- 修复了一些 TypeScript 定义文件的问题。

## 3.6.7 (2018-04-20)

### Bug fixes

- 修复了如果对象有 File 类型的属性，保存时会堆栈溢出的问题。这个问题是 v3.6.5 中引入的。

## 3.6.6 (2018-04-18)

### Bug fixes

- 修复了使用 LiveQuery 时在某些情况下会异常断开连接的问题。
- 修复了使用 `AV.Status` 的 `countUnreadStatuses` 与 `resetUnreadCount` 方法时指定 `owner` 参数不生效（始终作用于当前用户）的问题。
- 修复了使用 `fetchWhenSave` 选项更新对象时，如果更新的属性使用了嵌套的 key（如 `book.name`），更新成功后对象会有一些异常的未保存的值的问题。这个问题是 v3.6.5 中引入的。

## 3.6.5 (2018-04-09)

### Bug fixes

- 修复了对 Object 或 Array 类型的字段的值进行的直接修改在 save 时没有被正确保存的问题。这个问题是 v3.3.0 中引入的。

## 3.6.4 (2018-03-30)

### Bug fixes

- 修复了通过 `AV.User.current()` 获得的 User 有时无法正确得到关联对象属性的问题。

## 3.6.3 (2018-03-23)

### Bug fixes

- 修复了 LiveQuery 在断线重连后收不到新的通知的问题。

## 3.6.1 (2018-03-19)

### Bug fixes

- 修复了在 wepy 中使用时，在编译时抛出 `找不到模块: vertx` 异常的问题。
- 修复了 `AV.Object` 中已经被 unset 的字段，fetch 后没有被清理的问题。

# 3.6.0 (2018-02-05)

### Features

- 第三方登录支持使用微信 unionId + openId 登录。
- 支持全局设置请求超时时间： `AV.setRequestTimeout(ms);`，超时后 SDK 会抛出 `ECONNABORTED` 异常。

### Bug Fixes

- 修复了一个微信小游戏环境中的异常。

# 3.5.0 (2018-01-10)

### Features

- 支持微信小游戏。

### Bug Fixes

- 修复了初始化时传入 `serverURLs` 参数为 string 类型不生效的问题。

## 3.4.2 (2017-11-28)

### Features

- 细化了请求日志级别。

### Bug fixes

- 修复了 `AV.User#dissociateAuthData` 方法抛异常的问题。
- 修复了使用 `object#set('a.b', value)` 修改嵌套的属性后，本地再次获取属性值没有更新的问题。

## 3.4.1 (2017-11-17)

### Bug fixes

- 修复了华北节点在 Node.js 中上传大文件可能会抛出 `invalid multipart format: multipart: message too large` 异常的问题。
- 修复了小程序中请求返回值被错误地解析为 null 导致的问题。

# 3.4.0 (2017-11-13)

### Features

- 小程序中支持通过 `onprogress` 回调参数拿到文件上传进度。
- 在 v3.1.1 中，我们在异常的信息 `error.message` 中附加了一些请求相关的信息。这可能会导致一些依赖对错误信息进行字符串匹配的逻辑出错。我们为这个问题提供了两种解决方案：
  1.  使用新增的 `error.rawMessage` 代替 `error.message`。此外我们推荐依赖 `error.code` 进行判断，而非对错误信息进行字符串匹配。
  2.  全局设置 `AV.keepErrorRawMessage(true)` 恢复 v3.1.1 之前的行为。

### Bug Fixes

- 修复了在 Node.js 中通过 Stream 构造 `AV.File` 可能会抛 `Cannot read property 'match' of undefined` 异常的问题。

## 3.3.1 (2017-10-25)

### Bug fixes

- 在 3.3.0 中，为了得到批量删除时每个对象的结果，我们修改了 `AV.Object.destroyAll` 的内部实现。这个改动会导致计费时按照删除的个数计算请求数而不是之前的只计算一次。在这个补丁中我们恢复了之前的逻辑。

# 3.3.0 (2017-10-24)

### Features

- `AV.Object.saveAll` 与 `AV.Object.fetchAll` 失败时，抛出的异常 error 对象增加 `results` 属性，类型为 `Array<AV.Object|Error>`。通过这个属性，开发者可以知道哪些对象的操作成功了，哪些失败了。
- `AV.User` 增加了 `#associateWithAuthData` 与 `#dissociateAuthData` 用于关联、解绑第三方平台。原有的静态方法 `AV.User.associateWithAuthData` 已废弃。

### Bug Fixes

- 优化了关联对象保存时的逻辑，减少了一些不必要的保存请求，避免了在关联对象有循环依赖时可能会出现死循环的问题。
- 修复了使用应用内社交模块 `inboxQuery` 查询时可能出现 `URI too long` 异常的问题。

## 3.2.1 (2017-09-19)

### Bug fixes

- 更换了被屏蔽的文件上传域名。小程序用户请前往 [《小程序域名白名单配置》](https://leancloud.cn/docs/weapp-domains.html) 更新域名白名单。

# 3.2.0 (2017-09-11)

### Features

- `AV.Object` 增加了 `#bitAnd`、`#bitOr` 与 `#bitXor` 方法，支持对 `Number` 类型的字段进行位操作。
- `AV.File` 增加了 `#setUploadHeader` 方法，支持为上传请求自定义 headers。

## 3.1.1 (2017-08-23)

### Bug fixes

- 修复了 SDK 在 iOS9 中抛 `Attempting to change value of a readonly property` 异常的问题。
- 修复了在某些 ACL 设置下，`AV.User.become` 方法会被拒绝的问题。
- 修复了使用 `new AV.User(data, { parse: true })` 方式构造的 User 没有数据的问题。

# 3.1.0 (2017-08-09)

### Bug Fixes

- 修复了在某些运行环境中使用 LiveQuery 或 Captcha 功能时可能会出现 `Object.assign` 不存在的问题。

### Features

- `AV.Object` 增加了静态属性 `query`，该属性是一个 getter，每次访问该属性会返回一个当前类的 Query。

  <details>

  ```javascript
  class Post extends AV.Object {}
  // 等价于 const query = new AV.Query(Post);
  const query = Post.query;
  ```

## 3.0.4 (2017-08-01)

### Bug fixes

- 修复了 leanengine 中没有正确禁用 currentUser 的问题。

## 3.0.3 (2017-07-28)

### Bug fixes

- 修复了 `AV.File` 在浏览器中不支持通过 Blob 创建的问题。
- 修复了一些 TypeScript 定义文件的问题。

## 3.0.2 (2017-07-10)

### Bug fixes

- 修复了 IE 下抛出 Promise 未定义异常的问题。
- 修复了微信小程序一键登录时没有正确初始失败情况的问题。

## 3.0.1 (2017-06-21)

### Bug fixes

- 修复了美国节点文件上传失败的问题。
- 修复了 React Native 中用户登录成功会导致 crash 的问题。

# 3.0.0 (2017-06-16)

### Highlights

- **LiveQuery**：通过订阅一个 `Query`，在其结果发生变动时实时得到通知。详见 [《LiveQuery 开发指南》](https://url.leanapp.cn/livequery)。
- **新的序列化反序列化方法**：针对 `AV.Object` 重新设计了 `#toJSON` 方法，并提供了一对可靠的序列化反序列化方法。
- **`AV.request` 方法**：公开了低抽象级别的 `AV.request` 方法，方便开发者直接调用 LeanCloud Rest API。

### Breaking Changes

- 重新设计了 `AV.Object` 序列化相关的方法：

  - 如果需要将 `AV.Object` 中的有效信息转换成 JSON Object，请使用 `AV.Object#toJSON` 方法。请注意通过此方法得到的 JSON 不包含对象的元信息，因此是不可逆的（无法转换回 `AV.Object`）。
  - 如果需要「存储」或「传输」`AV.Object`，请使用新增的 `AV.Object#toFullJSON`（序列化）与 `AV.parseJSON`（反序列化）方法。

  新版中的 `AV.Object#toJSON` 相比于 v2 有以下区别：

  - 如果对象某个字段类型是 Pointer，并且有内容（included），新版中会递归地输出这个字段的有效信息（旧版中会输出一个 Pointer 结构）

    <details>

    ```javascript
    new AV.Query('Child').include('father').first()
      .then(child => child.toJSON().father)
      .then(console.log);
    /*
    v3: {
      objectId: "58a461118d6d8100580a0c54",
      name: "John Doe",
      createdAt: "2017-02-15T14:08:39.892Z",
      updatedAt: "2017-02-16T10:49:00.176Z"
    }
    v2: {
      objectId: "58a461118d6d8100580a0c54",
      __type: "Pointer",
      className: "Parent",
    }
    ```

  - 如果字段的类型是 `Date`，新版中会输出该时间的 UTC 格式字符串（旧版中会输出一个 Date 结构）

    <details>

    ```javascript
    const child = new Child().set('birthday', new Date());
    console.log(child.toJSON().birthday);
    /*
    v3: "2011-11-11T03:11:11.000Z"
    v2: {
      __type: "Date",
      iso: "2011-11-11T03:11:11.000Z"
    }
    ```

  更多背景与技术细节请参考 [#453](https://github.com/leancloud/javascript-sdk/pull/453#issue-208346693).

- 为了更好的隔离服务，我们为每个应用提供了独立的域名。对于小程序用户，请前往 [《小程序域名白名单配置》](https://leancloud.cn/docs/weapp-domains.html) 更新域名白名单。
- 创建 `Role` 时 `acl` 参数不再是可选的。在 v2 中，如果不指定，SDK 会自动为其设置一个 public read-only 的默认 acl，在新版中必须显式的指定。

  <details>

  ```javascript
  // 之前的用法
  new AV.Role('admin');

  // 新版中等价于
  var acl = new AV.ACL();
  acl.setPublicReadAccess(true);
  new AC.Role('admin', acl);
  ```

### Features

- LiveQuery 功能允许开发者订阅一个 `Query`，在 `Query` 的结果发生变动时实时得到通知。
  - 增加了 `Query#subscribe` 方法，返回该 `Query` 对应的 `LiveQuery` 实例；
  - 增加了 `LiveQuery` 类，在 `Query` 结果变化时 SDK 会在 `LiveQuery` 实例上派发 `create`、`update`、`enter`、`leave`、`delete` 等事件。
- 开放了低抽象级别的 `AV.request` 方法，方便开发者直接调用 LeanCloud Rest API。
- 增加了 `AV.setServerURLs` 方法，允许单独配置云函数等服务的域名以进行本地调试。

  <details>

  ```javascript
  AV.setServerURLs({
    engine: 'http://localhost:3000',
  });
  ```

- 支持在 Node.js 中通过 Stream 构建 `AV.File`（仅支持中国节点）。

  <details>

  ```javascript
  const fs = require('fs');
  const readStream = fs.createReadStream('sample.txt');
  const file = new AV.File('filename', readStream);
  ```

### Bug Fixes

- 修复了在中国节点 Node.js 中上传文件会阻塞当前线程的问题。

测试版本的更新日志：

<details>

## 3.0.0 (2017-06-16)

### Bug Fixes

- 修复了上传文件 size 信息缺失的问题。
- 修复了在中国节点 Node.js 中上传文件会阻塞当前线程的问题。

### Features

- 支持 LiveQuery。
- 支持在 Node.js 中通过 Stream 构建 `AV.File`（仅支持中国节点）。

  <details>

  ```javascript
  const fs = require('fs');
  const readStream = fs.createReadStream('sample.txt');
  const file = new AV.File('filename', readStream);
  ```

### Miscellanies

- 包含了 v2.5.0 的新特性。

## 3.0.0-beta.3 (2017-06-01)

### Features

- LiveQuery

### Miscellanies

- 包含了 v2.3.0-v2.4.0 的新特性与修复。

# 3.0.0-beta.2 (2017-04-27)

### Breaking Changes

- 为了更好的隔离服务，我们为每个应用提供了独立的域名。对于小程序用户，请前往 [《小程序域名白名单配置》](https://leancloud.cn/docs/weapp-domains.html) 更新域名白名单。
- 创建 `Role` 时 `acl` 参数不再是可选的。在 v2 中，如果不指定，SDK 会自动为其设置一个 public read-only 的默认 acl，在新版中必须显式的指定。

  <details>

  ```javascript
  // 之前的用法
  new AV.Role('admin');

  // 新版中等价于
  var acl = new AV.ACL();
  acl.setPublicReadAccess(true);
  new AC.Role('admin', acl);
  ```

### Features

- 开放了低抽象级别的 `AV.request` 方法，方便开发者直接调用 SDK 还不支持的 Rest API。
- 增加了 `AV.setServerURLs` 方法，允许单独配置云函数等服务的域名。

  <details>

  ```javascript
  AV.setServerURLs({
    engine: 'http://localhost:3000',
  });
  ```

### Miscellanies

- 包含了 v2.1.3-v2.2.1 的新特性与修复。

## 3.0.0-beta.1 (2017-02-28)

### Bug Fixes

- 修复了 Query 时使用 Date 类型的条件会导致查询结果异常的问题

# 3.0.0-beta.0 (2017-02-22)

### Breaking Changes

重新设计了 `AV.Object` 序列化相关的方法：

- 如果需要将 `AV.Object` 中的有效信息转换成 JSON Object，请使用 `AV.Object#toJSON` 方法。请注意通过此方法得到的 JSON 不包含对象的元信息，因此是不可逆的（无法转换回 `AV.Object`）。
- 如果需要「存储」或「传输」`AV.Object`，请使用新增的 `AV.Object#toFullJSON`（序列化）与 `AV.parseJSON`（反序列化）方法。

新版中的 `AV.Object#toJSON` 相比于 v2 有以下区别：

- 如果对象某个字段类型是 Pointer，并且有内容（included），新版中会递归地输出这个字段的有效信息（旧版中会输出一个 Pointer 结构）

  <details>

  ```javascript
  new AV.Query('Child').include('father').first()
    .then(child => child.toJSON().father)
    .then(console.log);
  /*
  v3: {
    objectId: "58a461118d6d8100580a0c54",
    name: "John Doe",
    createdAt: "2017-02-15T14:08:39.892Z",
    updatedAt: "2017-02-16T10:49:00.176Z"
  }
  v2: {
    objectId: "58a461118d6d8100580a0c54",
    __type: "Pointer",
    className: "Parent",
  }
  ```

- 如果字段的类型是 `Date`，新版中会输出该时间的 UTC 格式字符串（旧版中会输出一个 Date 结构）

  <details>

  ```javascript
  const child = new Child().set('birthday', new Date());
  console.log(child.toJSON().birthday);
  /*
  v3: "2011-11-11T03:11:11.000Z"
  v2: {
    __type: "Date",
    iso: "2011-11-11T03:11:11.000Z"
  }
  ```

更多背景与技术细节请参考 [#453](https://github.com/leancloud/javascript-sdk/pull/453#issue-208346693).

</details>

# 2.5.0 (2017-06-01)

### Bug Fixes

- 修复了查询 `Role` 时错误的打印了 deprecation 警告的问题

### Features

- `User#follow` 增加了一种重载，现在可以通过 `options.attributes` 参数为创建的 `Follower` 与 `Followee` 增加自定义属性，方便之后通过 `User#followerQuery` 与 `User#followerQuery` 进行查询。

# 2.4.0 (2017-05-19)

### Bug Fixes

- **可能导致不兼容** 修复了 `Query#get` 方法在目标对象不存在的情况下会返回一个没有数据的 `AV.Object` 实例的问题，现在该方法会正确地抛出 `Object not found` 异常。这个问题是在 2.0.0 版本中引入的。

### Features

- 增加了 `Conversation#broadcast` 方法用于广播系统消息

## 2.3.2 (2017-05-12)

### Bug Fixes

- 修复了获取图形验证码会导致栈溢出的问题。

# 2.3.0 (2017-05-11)

### Features

- 增加了 `AV.Conversation` 类。现在可以直接使用 SDK 来创建、管理会话，发送消息。
- 改进了验证码 API。增加了 `AV.Captcha`，可以通过 `AV.Captcha.request` 方法获取一个 Captcha 实例。特别的，在浏览器中，可以直接使用 `Captcha#bind` 方法将 Captcha 与 DOM 元素进行绑定。

## 2.2.1 (2017-04-26)

### Bug Fixes

- 修复了 `User.requestLoginSmsCode`，`User.requestMobilePhoneVerify` 与 `User.requestPasswordResetBySmsCode` 方法 `authOptions.validateToken` 参数的拼写错误。

# 2.2.0 (2017-04-25)

### Bug Fixes

- 修复了 Safari 隐身模式下用户无法登录的问题

### Features

- 短信支持图形验证码（需要在控制台应用选项「启用短信图形验证码」）
  - 新增 `Cloud.requestCaptcha` 与 `Cloud.verifyCaptcha` 方法请求、校验图形验证码。
  - `Cloud.requestSmsCode`，`User.requestLoginSmsCode`，`User.requestMobilePhoneVerify` 与 `User.requestPasswordResetBySmsCode` 方法增加了 `authOptions.validateToken` 参数。没有提供有效的 validateToken 的请求会被拒绝。
- 支持客户端查询 ACL（需要在控制台应用选项启用「查询时返回值包括 ACL」）
  - 增加 `Query#includeACL` 方法。
  - `Object#fetch` 与 `File#fetch` 方法增加了 `fetchOptions.includeACL` 参数。

## 2.1.4 (2017-03-27)

### Bug Fixes

- 如果在创建 `Role` 时不指定 `acl` 参数，SDK 会自动为其设置一个「默认 acl」，这导致了通过 Query 得到或使用 `Object.createWithoutData` 方法得到 `Role` 也会被意外的设置 acl。这个版本修复了这个问题。
- 修复了在 React Native for Android 中使用 blob 方式上传文件失败的问题

## 2.1.3 (2017-03-13)

### Bug Fixes

- 修复了调用 `User#refreshSessionToken` 刷新用户的 sessionToken 后本地存储中的用户没有更新的问题
- 修复了初始化可能会造成 disableCurrentUser 配置失效的问题
- 修复了 `Query#destroyAll` 方法 `options` 参数无效的问题

## 2.1.2 (2017-02-17)

### Bug Fixes

- 修复了文件上传时，如果 `fileName` 没有指定扩展名会导致上传文件 `mime-type` 不符合预期的问题
- 修复了清空 ACL 部分对象的权限后没有正常删除对象的问题（by [AntSworD](https://github.com/AntSworD)）

## 2.1.1 (2017-02-07)

### Bug Fixes

- 修复了使用 masterKey 获取一个 object 后再次 save 可能会报 ACL 格式不正确的问题。

# 2.1.0 (2017-01-20)

### Bug Fixes

- 修复了 `File#toJSON` 序列化结果中缺失 objectId 等字段的问题
- 修复了使用 `Query#containsAll`、`Query#containedIn` 或 `Query#notContainedIn` 方法传入大数组时查询结果可能为空的问题
- 修复了文件上传失败后 \_File 表中仍有可能残留无效文件记录的问题

### Features

- 增加了 `User#refreshSessionToken` 方法用于刷新用户的 sessionToken
- 增加了 `Query#scan` 方法用于遍历 Class
- 应用内社交模块增加了 `Status.resetUnreadCount` 方法用于重置未读消息数

## 2.0.1 (2017-01-12)

### Bug Fixes

- 修复了在 Node.js 中向国内节点上传文件抛异常的问题
- 修复了小程序中不启用「ES6 转 ES5」选项时加载 SDK 抛异常的问题

# 2.0.0 (2017-01-09)

### Highlights

- **全面支持微信小程序**：包括文件存储在内的所有功能均已支持微信小程序，用户系统还增加了小程序内一键登录的 API。详见 [在微信小程序中使用 LeanCloud](https://leancloud.cn/docs/weapp.html)。
- **Promise first**：Promise 风格的异步 API 已被社区广泛接受，此前回调参数优先于其他参数的设计已过时，因此我们去掉了对 Backbone 回调风格参数的支持。
- **支持对单次操作指定是否使用 masterKey**：此前使用 masterKey 是全局生效的，会导致无法充分利用 ACL 等内建的权限控制机制。此项改进将其生效范围细化到了单次操作。
- **移除 Node.js 0.12 支持**：Node.js 0.12 LTS 已停止维护，请考虑 [升级 Node.js 版本](https://www.joyent.com/blog/upgrading-nodejs)。

### Breaking Changes

- 移除了 Node.js 0.12 的支持，请考虑 [升级 Node.js 版本](https://www.joyent.com/blog/upgrading-nodejs)。
- 移除了所有 Backbone 回调风格的参数，请使用 Promise 处理异步操作的结果与异常：

  <details>

  ```javascript
  // Backbone callback 回调风格的参数的用法
  object.save(null, {
    success: function(object) {},
    error: function(error, object) {},
  });

  // 需要替换为
  object.save().then(function(object) {}, function(error) {});
  ```

- `AV.Promise` 现在是一个满足 Promises/A+ 标准的实现，所有非标准的方法已被移除，所有非标准的行为已被修正。关于标准 Promise 的更多信息推荐阅读 [《JavaScript Promise 迷你书》](http://liubin.org/promises-book/)
- `AV.Query` 中的大部分 API 启用了更加严格的参数检查。特别的，对于以下 API，当指定 value 的值为 `undefined` 时会抛出异常（之前会直接忽略这个条件或限制）

  - 参数形如 `(key, value)` 类型的条件限制 API，如 `AV.Query#equalTo(key, value)`
  - `AV.Query#limit(value)`
  - `AV.Query#select(value)`

- `AV.Query#get` 方法现在尊重 Class 的 get 权限设置（之前检查的是 find 权限）

- `objectId`、`createdAt`、`updatedAt` 现在是只读字段，尝试 set 这些字段时 SDK 会抛出异常
- `object.get('id')` 与 `object.set('id', '')` 现在将会正确的读、写数据表中的 `id` 字段（之前映射的是 `objectId`）。你现在依然可以使用 `object.id` 来访问数据的 `objectId`。

- 如果你 extend 的 `AV.Object` 子类重写了 `validate` 方法，当属性无效时现在需要 throw 一个 Error（之前是 return 一个 Error）。相应的，`AV.Object#set` 方法如果 set 的值无效，需要通过 try catch 捕获异常（之前通过检查返回值是 false）

  <details>

  ```javascript
  // 之前的用法
  var Student = AV.Object.extend('Student', {
    validate: function(attibutes) {
      if (attributes.age < 0) return new Error('negative age set');
    },
  });
  var tom = new Student();
  if (tom.set('age', -1) === false) {
    console.error('something wrong');
  } else {
    tom.save();
  }

  // 现在的用法
  var Student = AV.Object.extend('Student', {
    validate: function(attibutes) {
      if (attributes.age < 0) throw new Error('negative age set');
    },
  });
  var tom = new Student();
  try {
    tom.set('age', -1);
  } catch (error) {
    console.error(error.message);
  }
  tom.save();
  ```

- 上传文件时不再额外地向文件的 metaData 中写入 mime_type，之前通过 metaData 获取 mime_type 的用法需要更新：

  <details>

  ```javascript
  // 之前的用法
  file.metaData('mime_type');

  // 现在的用法
  file.get('mime_type');
  ```

- 移除了 deprecated 的 API，包括：
  - `AV.Object#existed`
  - `AV.User.requestEmailVerfiy` (typo)
  - `AV.useAVCloudCN`
  - `AV.useAVCloudUS`
  - `AV._ajax`
  - `AV._request`

### Features

- 支持微信小程序
- 增加了 `AV.User.loginWithWeapp()` 与 `AV.User#linkWithWeapp()` ，支持在微信小程序中登录
- 增加了 `AV.User#isAuthenticated()`，该方法会校验 sessionToken 的有效性, 废弃 `AV.User#authenticated()`
- 绝大部分会发起网络请求的 API（如保存一个对象）支持通过 `option.useMasterKey` 参数指定该次操作是否要使用 masterKey，设置了该选项的操作会忽略全局的 useMasterKey 设置
- 去掉了 `Object.destroyAll` 方法要求所有删除的对象属于同一个 Class 的限制
- `Object.register()` 方法增加了第二个参数允许指定所注册的 Class 的名字，详情参见 [Object.register - API 文档](https://leancloud.github.io/javascript-sdk/docs/AV.Object.html#.register)。
- 上传文件的 mime_type 现在由服务端进行判断从而支持更多的文件类型
- 增加了 sourcemaps

### Bug Fixes

- 修复了在进行以下操作时可能出现 `URI too long` 异常的问题
  - 使用 `Query#containsAll`、`Query#containedIn` 或 `Query#notContainedIn` 方法时传入了一个大数组
  - 使用 `Object.destroyAll` 方法批量删除大量对象
- 修复了 `Object.set(key, value)` 方法可能会改变（mutate）`value` 的问题
- 修复了查询结果中 File 没有被正确解析的问题
- 修复了在 React Native 中使用 `AV.setProduction` 方法会导致后续操作引起 crash 的问题
- 修复了在 React Native 上传大文件可能出现 `invalid multipart format: multipart: message too large` 异常的问题
- 修复了 `AV.Insight.startJob` 方法中 saveAs 参数未生效的问题
- 修复了抛出 code == -1 的异常时 error.message 可能缺失的问题
- 修复了应用内社交模块的方法在未登录状态下传入了 sessionToken 仍然抛未登录异常的问题

测试版本的更新日志：

<details>

## 2.0.0 (2017-01-09)

### Bug Fixes

- 修复了在 React Native 及小程序中上传大文件可能出现 `invalid multipart format: multipart: message too large` 异常的问题
- 修复了某些情况下上传的文件 mime_type 不正确的问题

# 2.0.0-rc.0 (2016-12-30)

### Breaking Changes

- 移除了 Node.js 0.12 的支持，请考虑 [升级 Node.js 版本](https://www.joyent.com/blog/upgrading-nodejs)。
- 上传文件时不再额外地向文件的 metaData 中写入 mime_type，之前通过 metaData 获取 mime_type 的用法需要更新：

  <details>

  ```javascript
  // 之前的用法
  file.metaData('mime_type');

  // 现在的用法
  file.get('mime_type');
  ```

- (internal) `AV._decode(key, value)` 现在变更为 `AV._decode(value[, key])`

### Features

- 上传文件的 mime_type 现在由服务端进行判断从而支持更多的文件类型
- 去掉了 `Object.destroyAll` 方法要求所有删除的对象属于同一个 Class 的限制
- `Object.register()` 方法增加了第二个参数允许指定所注册的 Class 的名字，详情参见 [Object.register - API 文档](https://leancloud.github.io/javascript-sdk/docs/AV.Object.html#.register)。

### Bug Fixes

- 修复了在进行以下操作时可能出现 `URI too long` 异常的问题
  - 使用 `Query#containsAll`、`Query#containedIn` 或 `Query#notContainedIn` 方法时传入了一个大数组
  - 使用 `Object.destroyAll` 方法批量删除大量对象
- 修复了在 React Native 及小程序中使用 `AV.setProduction` 方法会导致后续操作引起 crash 的问题
- 修复了 `Object.set(key, value)` 方法可能会改变（mutate）`value` 的问题
- 修复了查询结果中 File 没有被正确解析的问题
- 修复了 `AV.Insight.startJob` 方法中 saveAs 参数未生效的问题
- 修复了抛出 code == -1 的异常时 error.message 可能缺失的问题

## 2.0.0-beta.6 (2016-11-30)

### Bug Fixes

- 修复了 Android 微信小程序上初始化失败的问题
- 修复了小程序中使用应用内社交抛 `AV is not defined` 异常的问题

### Features

- 增加了 sourcemaps

## 2.0.0-beta.5 (2016-11-16)

### Bug Fixes

- 修复了在 Android 微信小程序上运行时抛 `undefined is not a function` 异常的问题

# 2.0.0-beta.4 (2016-11-11)

### Breaking Changes

- `objectId`、`createdAt`、`updatedAt` 现在是只读字段，尝试 set 这些字段时 SDK 会抛出异常
- `object.get('id')` 与 `object.set('id', '')` 现在将会正确的读、写数据表中的 `id` 字段（之前映射的是 `objectId`）。你现在依然可以使用 `object.id` 来访问数据的 `objectId`。

### Features

- 增加了 `AV.User.loginWithWeapp()` 与 `AV.User#linkWithWeapp()` ，支持在微信小程序中登录
- 增加了 `AV.User#isAuthenticated()`，该方法会校验 sessionToken 的有效性, 废弃 `AV.User#authenticated()`

## 2.0.0-beta.3 (2016-11-8)

### Bug Fixes

- 修复了在微信小程序真机上运行时抛 `ReferenceError: Can't find variable: FormData` 异常的问题
- 修复了 2.0.0-beta.0 中引入的 `AV.Query#select`、`AV.Query#include` 不支持多个参数的问题

## 2.0.0-beta.2 (2016-10-20)

### Features

- `AV.File` 支持微信小程序

## 2.0.0-beta.1 (2016-10-13)

### Features

- 支持微信小程序 0.10.101100

# 2.0.0-beta.0 (2016-9-29)

### Breaking Changes

- 移除了所有 Backbone 回调风格的参数，请使用 Promise 处理异步操作的结果与异常：

  <details>

  ```javascript
  // Backbone callback 回调风格的参数的用法
  object.save(null, {
    success: function(object) {},
    error: function(error, object) {},
  });

  // 需要替换为
  object.save().then(function(object) {}, function(error) {});
  ```

- `AV.Promise` 现在是一个满足 Promises/A+ 标准的实现，所有非标准的方法已被移除，所有非标准的行为已被修正。关于标准 Promise 的更多信息推荐阅读 [《JavaScript Promise 迷你书》](http://liubin.org/promises-book/)

- 如果你 extend 的 `AV.Object` 子类重写了 `validate` 方法，当属性无效时现在需要 throw 一个 Error（之前是 return 一个 Error）。相应的，`AV.Object#set` 方法如果 set 的值无效，需要通过 try catch 捕获异常（之前通过检查返回值是 false）

  <details>

  ```javascript
  // 之前的用法
  var Student = AV.Object.extend('Student', {
    validate: function(attibutes) {
      if (attributes.age < 0) return new Error('negative age set');
    },
  });
  var tom = new Student();
  if (tom.set('age', -1) === false) {
    console.error('something wrong');
  } else {
    tom.save();
  }

  // 现在的用法
  var Student = AV.Object.extend('Student', {
    validate: function(attibutes) {
      if (attributes.age < 0) throw new Error('negative age set');
    },
  });
  var tom = new Student();
  try {
    tom.set('age', -1);
  } catch (error) {
    console.error(error.message);
  }
  tom.save();
  ```

- `AV.Query` 中的大部分 API 启用了更加严格的参数检查。特别的，对于以下 API，当指定 value 的值为 `undefined` 时会抛出异常（之前会直接忽略这个条件或限制）

  - 参数形如 `(key, value)` 类型的条件限制 API，如 `AV.Query#equalTo(key, value)`
  - `AV.Query#limit(value)`
  - `AV.Query#select(value)`

- `AV.Query#get` 方法现在尊重 Class 的 get 权限设置（之前检查的是 find 权限）

- (intarnal) `AV.User#_linkWith` 的第二个参数中的 `options.authData` 字段提升为第二个参数

  <details>

  ```javascript
  // 之前的用法
  user._linkWith('weixin', {
    authData: {
      access_token: 'access_token',
    },
  });

  // 现在的用法
  user._linkWith('weixin', {
    access_token: 'access_token',
  });
  ```

- 移除了 deprecated 的 API，包括：
  - `AV.Object#existed`
  - `AV.User.requestEmailVerfiy` (typo)
  - `AV.useAVCloudCN`
  - `AV.useAVCloudUS`
  - `AV._ajax`
  - `AV._request`

### Bug Fixes

- 修复了应用内社交模块的方法在未登录状态下传入了 sessionToken 仍然抛未登录异常的问题

### Features

- 对象存储功能支持微信小程序
- 绝大部分会发起网络请求的 API（如保存一个对象）支持通过 `option.useMasterKey` 参数指定该次操作是否要使用 masterKey，设置了该选项的操作会忽略全局的 useMasterKey 设置

</details>

## 1.4.0 (2016-9-1)

相比于 v1.4.0-beta.0:

- 修复了 `AV.File#save` 方法的 `onprogress` 参数失效的问题

# 1.4.0-beta.0 (2016-8-23)

- 支持 ES2015 的 extends 语法来声明 `AV.Object` 的子类，增加了 `AV.Object.register` 方法用于注册声明的子类。

  ```javascript
  class Article extends AV.Object {}
  AV.Object.register(Article);
  ```

- `AV.Query` 支持查询 `AV.File`
- 修复多次调用 `AV.Object.extend('ClassName')` 后可能导致堆栈溢出的问题
- 修复 `AV.Query#addDescending` 没有返回 query 的问题，现在支持链式调用了
- 修复 React Native 0.32 中找不到 `react-native` 模块的问题

## 1.3.3 (2016-8-2)

- 修复在 `AV.Object` 子类某属性的 getter 中调用 `AV.Object#get` 方法时调用栈溢出的问题

## 1.3.2 (2016-7-26)

- 修复 1.3.1 中未彻底解决的 `A promise was resolved even though it had already been resolved` 异常问题

## 1.3.1 (2016-7-21)

- 修复多次调用 `AV.init` 抛出 `A promise was resolved even though it had already been resolved` 异常的问题

# 1.3.0 (2016-7-20)

- 增加 `AV.Object.fetchAll()` 方法
- 修复抛出的异常没有堆栈信息的问题
- 修复在某些异常情况下，发出的请求不带域名的问题

## 1.2.1 (2016-6-30)

- 修复美国节点文件上传成功后 File 实例没有 id 的问题

# 1.2.0 (2016-6-29)

- 增加 `AV.User.associateWithAuthData()` 方法
- 修复美国节点文件上传失败的问题
- 修复 `AV.User.signUpOrlogInWithAuthData()` 省略 callback 参数会报异常的问题
- 修复 React Native 中 import leancloud-storage 抛 `cannot read property "APIServerURL" for undefined` 异常的问题

# 1.1.0 (2016-6-27)

- 防止 SDK 覆盖全局变量 AV
- Object.add、Object.addUnique、Object.remove 等方法支持从传入非数组类型的 value 参数
- 修复路由缓存异常时，不再出现多次 410 错误请求
- 美国节点上传到 S3 改为直接上传，不再通过服务器中转

# 1.0.0 (2016-5-30)

- 弃用 AV.Error 对象，改为内部模块
- 移除 AV.applicationProduction 改为 AV.\_config.applicationProduction 内部接口
- 调整 npm 包名为 leancloud-storage

# 1.0.0-rc9.2 (2016-5-23)

- 修复了上传文件成功却进入失败回调的问题。
- 修复 `AV.Object#fetch` 在某些情况下抛出 `fetchOptions.include.join is not a function` 异常的问题。

# 1.0.0-rc9.1 (2016-5-17)

- 修复了上传文件到 COS 时报错的问题。

# 1.0.0-rc9 (2016-5-16)

- 修复了错误的 `package.browser` 字段引起的部分打包工具异常。
- 修复浏览器中 ajax 方法中错误的转码方式。
- 修复 `AV.Object#get` 方法返回部分字段类型异常。
- 修复 `AV.Object#fetch` 方法 `read sessionToken from undefined` 的错误。
- 支持节点动态路由。
- 文件上传使用 https 协议。
- 文件上传支持 React Native for Android。

# 1.0.0-rc8 (2016-4-6)

- **(BREAKING)** 添加了 AV.init 方法，该方法接收一个名为 options 的参数字典，废弃 AV.initialize 方法。
- **(BREAKING)** 为 AV.Object#save 方法的 options 参数添加了 fetchWhenSave 选项，废弃 AV.Object#fetchWhenSave 方法。
- **(BREAKING)** 添加了 disableCurrentUser 选项（可在 AV.init 方法中设置），当开启时：
  - AV.User.current 和 AV.User.currentAsync 打印警告并返回 null。
  - signUp, logIn, fetch, become 等方法不再写入全局状态。
  - 发起请求时不再向服务器发送 installationId。
  - AV.File 不再会自动设置 owner, 请在 data 参数中传入 owner 选项（AV.User 对象）。
- 为所有会发起网络请求的操作（save 等）的 options 参数添加了 sessionToken 选项，可通过传入该选项指定请求所使用的 sessionToken。
- 添加了 AV.User.getSessionToken 方法。
- 添加了 AV.User#logOut 这个实例方法（之前只有类方法）。
- 为 AV.Object#save 方法的 options 参数添加了 query 选项，该次更新操作在对象最新状态满足 query 时才会执行。
- 修正了在某些错误情况下返回值格式不正确的错误。
- 使用了更加安全的鉴权机制，以降低 App Key 在传输过程中泄露的风险。
- 移除了特殊跨域兼容实现，现在遵循 CORS。

# 1.0.0-rc7 (2016-2-16)

- 添加 AV.Cloud.rpc 方法
- 修复了 `AV.User#fetch` 不会运行回调函数的 bug。

# 1.0.0-rc6 (2016-2-1)

- 修复了云引擎中文件上传到 AWS 的问题。
- 修复了 `AV.User#fetch` 不支持 fetch options 的问题。
- 修复了使用 Pointer 时可能出现类型错误的问题。

# 1.0.0-rc5 (2015-11-24)

- AV.File 新增 fetch 方法。
- 废弃 AV.Object 的 existed 方法。
- 移除 AV.BigQuery 模块。该模块在 0.5.7 中废弃。
- 提升了在 node 中运行的性能。
- 修复了一些 IE 兼容性问题。

# 1.0.0-rc4 (2015-11-12)

- **(BREAKING)** 移除了 av-core[-mini].js，请直接使用 av[-mini].js。移除了 `Collection`、`Router` 等 Backbone 兼容模块，请直接使用 Backbone。
- 新增第三方平台帐号登录 API：`AV.User.signUpOrlogInWithAuthData()`。 感谢 @jacktator 。
- 修复海外节点文件上传方式错误的问题。

# 1.0.0-rc3 (2015-10-27)

- 修复 `AV._request` 某些情况下无法正常工作的 Bug。
- 修复某些登录 API 没有更新 currentUser 的问题
- 修复 localStorage 没有生效的 Bug，感谢热心用户反馈。
- AV.SearchQuery 增加 hasMore 和 reset 方法。

## 0.6.4 (2015-10-27)

- 修复 localStorage 没有生效的 Bug，感谢热心用户反馈。
- AV.SearchQuery 增加 hasMore 和 reset 方法。

# 1.0.0-rc2 (215-10-22)

- 兼容 React Native 运行环境。
- 修复 AV.Role 的兼容性问题。
- 修复 `AV._request` 某些情况下无法正常工作的 Bug。

## 0.6.3 (2015-10-22)

- 修复 AV.Role 的兼容性问题。

# 1.0.0-rc1 (215-10-22)

- 兼容 React Native 运行环境。

## 0.6.2 (2015-10-22)

- 修复 Follower/Followee 查询遇到 undefined 用户抛出异常的 bug。
- 修复在无痕模式浏览器下无法正常运行的 Bug。
- 修复 AV.File 保存可能导致堆栈溢出的 Bug。
- AV.Role 增加默认 ACL 设置。

## 0.6.1 (2015-09-01)

- 修复 AV.File 在 LeanEngine 中上传 Base64 图片数据损坏的 bug。

# 0.6.0 (2015-08-25)

- AV.File 在浏览器环境下直接上传文件到七牛，再无大小和频率限制。
- 新增 API AV.Cloud.getServerDate 用于获取当前服务器时间。
- 修改美国节点 API 域名为 us-api.leancloud.cn
- 使用 browserify 构建 SDK。
- 相同应用重复初始化 SDK 避免告警日志。

## 0.5.8 (2015-08-5)

- 修复 `AV.Object.destroyAll` 新版本无法工作的 Bug。

## 0.5.7 (2015-07-29)

- AV.Promise 仅在非 node 环境（如浏览器）默认启用 PromiseA+ 兼容模式
- 增加 AV.Promise.setDebugError 方法，用于在启用 PromiseA+ 模式的时候打印错误信息，方便调试
- 重命名 AV.BigQuery 模块为 AV.Insight，保留兼容 AV.BigQuery，推荐修改。
- 修复 fetchWhenSave 无法在创建对象的时候生效。
- 当重复初始化 SDK 的时候，打印警告日志。
- 修改默认 API 域名为 api.leancloud.cn。

## 0.5.5 (2015-06-29)

- AV.Promise 启用兼容 Promise+ 模式。
- 增加 AV.BigQuery 相关 API 用于发起离线分析和查询结果等。
- 修正 AV.Query 的 get 方法在遇到 undefined objectId 运行结果不符合预期的 Bug
- 修复 AV.File 无法作为数组保存的 Bug。

## 0.5.4 (2015-05-14)

- 紧急修复 localStorage 模块大小写名称错误。

## 0.5.2 (2015-05-12)

- 上传 sdk 到专门的 CDN 加速域名 [https://cdn1.lncld.net/static/](https://cdn1.lncld.net/static/)
- 兼容 ReactNative 运行环境
- 修复 AV.Query 的 addDescending 方法运行不符合预期的 Bug
- AV.Promise 在兼容 Primise+ 模式下优先使用 setImmediate
- AV.Object 的 fetch 方法新增重载方法，接收第一个参数是 fetchOptions ，设置 keys 或者 include 选项。
- AV.Query 支持 sizeEqualTo 方法，查询数组列大小等于特定长度的对象。

## 0.5.1 (2015-03-27)

- 实现应用内搜索 API，具体请参考[应用内搜索开发指南](https://leancloud.cn/docs/app_search_guide.html)。
- 增加 API : `AV.User.become(sessionToken, options)`。

# 0.5.0 (2015-03-02)

- 增强 `AV.Promise`，增加`done,catch,finally,AV.Promise.race` 等方法，兼容 Promise/A+
- 修复更新对象可能更新没有变更的属性的 Bug，减少请求流量。

## 0.4.9 (2015-02-26)

- 拆分 sdk，按照模块划分成多个文件。
- 使用 gulp 构建 sdk，清理代码。
- 修复事件流无法发送带有 `AV.File`、`AV.Object` 等类型的 Status。
- 修复 node.js 环境下上传文件没有扩展名的 Bug。

## 0.4.7 (2015-01-23)

- 修复页面跳转更新 user 导致 current user 属性丢失的 Bug。
- 增加 `AV.User.updatePassword` 方法，根据老密码修改成新密码。
- 为 `AV.Object` 增加 `getObjectId, getUpdatedAt, getCreatedAt` 三个方法。
- 增加 `AV.User#signUpOrlogInWithMobilePhone` 手机一键登录。
- 一些内部改进和重构。

## 0.4.6 (2014-12-11)

- 添加新方法 `AV.File.createWithoutData(objectId)`，根据 objectId 构造 AV.File
- 添加 `AV.Query.and` 方法用于复合查询
- `AV.File` 支持 get/set ACL
- 增加新方法 `AV.setProduction(boolean)` 用于设置生产环境或者测试环境。

## 0.4.5 (2014-10-29)

- CQL 查询支持占位符,AV.Query.doCloudQuery 方法增加三个参数版本
- AV.Push 增加 cql 属性说明，可以通过 CQL 指定推送查询条件。
- 部分内部代码重构。

## 0.4.4 (2014-10-14)

- 修复 node.js 下上传文件无法指定文件 mime type 的 Bug
- 添加 `AV.Object.new` 函数用来创建对象，避免代码压缩带来的问题。

# 0.4.3

- 添加 CQL 查询支持，增加 `AV.Query.doCloudQuery` 方法。

# 老版本的 changelog

https://download.avoscloud.com/sdk/javascript/changelog.txt
