### Plugins

插件(Plugin)用于处理画布的渲染逻辑、额外组件渲染，例如在画布中额外挂载图形组件、实现撤销重做等功能。

**类型定义**：`PluginOptions[] | ((existingPlugins: PluginOptions[]) => PluginOptions[])`

支持 G6 的所有内置插件。内置插件列表请参考 [G6 - API - 插件](https://g6.antv.antgroup.com/api/plugins/background)。
