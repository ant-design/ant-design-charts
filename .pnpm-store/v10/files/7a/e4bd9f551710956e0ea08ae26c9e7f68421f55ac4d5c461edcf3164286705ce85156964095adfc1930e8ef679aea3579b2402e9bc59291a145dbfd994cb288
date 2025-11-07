## 2020-06-15 v2.11.0-1
- 该版本继续合并了一部分完全相同的 interface / callback，是一个 **破坏性改动**，原本字面上引用了这些 interface / callback 的代码可能会报错。
- 为 `Component` 构造器增加第四个泛型，以允许在自定义组件上挂载自定义的字段 ([#133](https://github.com/wechat-miniprogram/api-typings/issues/133))
- 修复一些接口错误 ([#134](https://github.com/wechat-miniprogram/api-typings/issues/134))
- 补齐 `App` 的 `onThemeChange` ([#135](https://github.com/wechat-miniprogram/api-typings/issues/135))
- 补齐 `Page` 的 `onAddToFavorites` ([#136](https://github.com/wechat-miniprogram/api-typings/issues/136))

## 2020-05-20 v2.11.0
- 同步 API 定义到基础库 2.11.0
- 该版本继续合并了一部分完全相同的 interface / callback，是一个 **破坏性改动**，原本字面上引用了这些 interface / callback 的代码可能会报错。
- 修复接口错误 ([#126](https://github.com/wechat-miniprogram/api-typings/issues/126))

## 2020-04-20 v2.10.4
- 同步 API 定义到基础库 2.10.4
- 在之前的版本中，分属于不同接口的两个 interface / callback 即使完全相同，也会拥有不同的名字。在这次更新中，他们将合并为同一个（如 `FileSystemManagerGetFileInfoCompleteCallback` 和 `WxGetFileInfoCompleteCallback` 都变成了 `GetFileInfoCompleteCallback`）。这是一个 **破坏性改动**，原本字面上引用了这些 interface / callback 的代码可能会报错。
- 修复了一些取消监听接口（off callback）的参数错误 ([#120](https://github.com/wechat-miniprogram/api-typings/issues/120))

## 2020-04-03 v2.10.3-1
- 补齐 `Component` 的 `getOpenerEventChannel` ([#112](https://github.com/wechat-miniprogram/api-typings/issues/113) by [@baranwang](https://github.com/baranwang))
- 加入了部分事件的定义 ([#115](https://github.com/wechat-miniprogram/api-typings/issues/115) by [@zenml](https://github.com/zenml))
- 更新了小程序·云开发的 API 定义 ([#92](https://github.com/wechat-miniprogram/api-typings/issues/92))

## 2020-03-26 v2.10.3
- 同步 API 定义到基础库 2.10.3

## 2020-03-18 v2.10.2-1
- 支持 API Promise 化调用 ([#105](https://github.com/wechat-miniprogram/api-typings/issues/105)) 

## 2020-03-06 v2.10.2
- 同步 API 定义到基础库 2.10.2

## 2020-02-10 v2.10.1-1
- 允许重写部分全局变量 (由 `const` 改为 `let`)  ([#102](https://github.com/wechat-miniprogram/api-typings/issues/102)) 
- 补齐 `Page` 上的 `options` 字段 ([#101](https://github.com/wechat-miniprogram/api-typings/issues/101) by [@baranwang](https://github.com/baranwang)) 

## 2020-01-19 v2.10.1
- 同步 API 定义到基础库 2.10.1
- 补齐 `Component` `selectOwnerComponent`, `animate`, `clearAnimation` ([#96](https://github.com/wechat-miniprogram/api-typings/issues/96)) 
- 补齐 `App` `onUnhandledRejection` ([#99](https://github.com/wechat-miniprogram/api-typings/issues/99)) 

## 2020-01-07 v2.10.0-1
- 修复接口错误 ([#95](https://github.com/wechat-miniprogram/api-typings/issues/95)) 

## 2020-01-07 v2.10.0
- 同步 API 定义到基础库 2.10.0

## 2019-12-20 v2.9.4
- 同步 API 定义到基础库 2.9.4
- 修正一些接口错误 ([#88](https://github.com/wechat-miniprogram/api-typings/issues/88)，[#89](https://github.com/wechat-miniprogram/api-typings/issues/89)，[#91](https://github.com/wechat-miniprogram/api-typings/issues/91)) 

## 2019-12-06 v2.9.3
- 同步 API 定义到基础库 2.9.3
- 补齐 `Component` 纯数据字段 (`pureDataPattern`) 
- 支持 `Component` 的属性监听器使用 `string` 类型

## 2019-11-14 v2.9.2
- 同步 API 定义到基础库 2.9.2
- 补齐 `Behaviors` 中缺少的一些选项

## 2019-11-06 v2.9.1
- 同步 API 定义到基础库 2.9.1

## 2019-10-23 v2.9.0
- 同步 API 定义到基础库 2.9.0

## 2019-10-10 v2.8.3-1
- 修复注释文档中不可用的链接
- 组件实例类型支持 `Partial` 的自定义方法 ([用例](https://github.com/wechat-miniprogram/api-typings/blob/master/test/issue.test.ts#L170-L185)) 

## 2019-09-19 v2.8.3
- 同步 API 定义到基础库 2.8.3
- `getApp` 支持范型 ([#77](https://github.com/wechat-miniprogram/api-typings/issues/77)) 
- 修正一些接口错误 ([#73](https://github.com/wechat-miniprogram/api-typings/issues/73), [#75](https://github.com/wechat-miniprogram/api-typings/issues/75), [#79](https://github.com/wechat-miniprogram/api-typings/issues/79)) 
- 补齐 `require`, `exports`, `module.exports` 定义，以支持在没有 `@types/node` 下编译

## 2019-09-10 v2.8.2
- 同步 API 定义到基础库 2.8.2
- 加强了参数为可选值的方法参数类型定义和注释 (如 `FileSystemManager.appendFileSync` 的 `encoding`) 

## 2019-08-30 v2.8.1
- 同步 API 定义到基础库 2.8.1
- 修复了部分最低基础库显示为 `[object Object]` 的问题

## 2019-08-20 v2.8.0-2

- 将 `object` 改为 `Record<string, any>`，以允许任意属性和方法
- 自定义组件属性构造器为 `ObjectConstructor` 时，类型推导为 `Record<string, any>` 而不是 `object`
- 修正 `component` 参数的类型为页面或自定义组件实例
- 补齐 `console: WechatMiniprogram.Console` 全局变量
- 修正一些其他的接口类型错误

## 2019-08-14 v2.8.0-1

- 补齐 `styleIsolation` 到 `ComponentOption`

## 2019-08-14 v2.8.0

- 同步 API 定义到基础库 2.8.0
- 不再向全局暴露 `IAnyObject`，收回到命名空间 `WechatMiniprogram` 内
- 对齐代码规范，使用 4 空格缩进，不再使用分号等
- 小幅改动 behavior, component 和 page 的定义，使其对 data 和 properties 等的类型推断更准确
- 修复了一些其他问题 ([#60](https://github.com/wechat-miniprogram/api-typings/issues/60), [#59](https://github.com/wechat-miniprogram/api-typings/issues/59), [#48](https://github.com/wechat-miniprogram/api-typings/issues/48), [#47](https://github.com/wechat-miniprogram/api-typings/issues/47), [#45](https://github.com/wechat-miniprogram/api-typings/issues/45), [#33](https://github.com/wechat-miniprogram/api-typings/issues/33), [#13](https://github.com/wechat-miniprogram/api-typings/issues/13)) 

## 2019-08-08 v2.7.7-2

- 补齐了部分接口 fail 回调的错误码 ([#51](https://github.com/wechat-miniprogram/api-typings/issues/51)) 

## 2019-08-06 v2.7.7-1

- 重写了 page, component 和 behavior 的定义，替换原来不完整的定义，使其更全面，更准确 ([#46](https://github.com/wechat-miniprogram/api-typings/issues/46), [#40](https://github.com/wechat-miniprogram/api-typings/issues/40), [#30](https://github.com/wechat-miniprogram/api-typings/issues/30), [#28](https://github.com/wechat-miniprogram/api-typings/issues/28), [#27](https://github.com/wechat-miniprogram/api-typings/issues/27)) 

## 2019-07-31 v2.7.7

- 同步 API 定义到基础库 2.7.7
- 将命名空间从 `Wx` 更改为更正式的 `WechatMiniprogram`，这是一个 **破坏性改动**，原本字面上引用了 `Wx` 命名空间的代码可能失效
- 修复了云开发的定义无法使用的问题 ([#25](https://github.com/wechat-miniprogram/api-typings/issues/25), [#32](https://github.com/wechat-miniprogram/api-typings/issues/32), [#42](https://github.com/wechat-miniprogram/api-typings/issues/42)) 
- 修复了一些其它问题 ([#11](https://github.com/wechat-miniprogram/api-typings/issues/11), [#35](https://github.com/wechat-miniprogram/api-typings/issues/35), [#43](https://github.com/wechat-miniprogram/api-typings/issues/43))