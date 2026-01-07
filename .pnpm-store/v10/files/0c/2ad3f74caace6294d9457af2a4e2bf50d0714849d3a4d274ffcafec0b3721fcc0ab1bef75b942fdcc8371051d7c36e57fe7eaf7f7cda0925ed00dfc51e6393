"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
const print_1 = require("../utils/print");
const store_1 = require("./store");
/**
 * <zh/> 注册一个新的扩展。
 *
 * <en/> Registers a new extension.
 * @param category
 * <zh/> 扩展要注册的分类，目前支持注册的扩展分类有：{@link ExtensionCategory}
 *
 * <en/> The category under which the extension is to be registered, see {@link ExtensionCategory}
 * @param type
 * <zh/> 要注册的扩展的类型，将作为使用扩展时的标识
 *
 * <en/> Extension type that used as an identifier when mounting the extension on a graph
 * @param Ctor
 * <zh/> 要注册的扩展类，在使用时创建实例
 *
 * <en/> Whether to override the registered extension
 * @remarks
 * <zh/> 内置扩展在项目导入时会自动注册。对于非内置扩展，可以通过 `register` 方法手动注册。扩展只需要注册一次，即可在项目的任何位置使用。
 *
 * <en/> Built-in extensions are automatically registered when the project is imported. For non-built-in extensions, you can manually register them using the `register` method. Extensions only need to be registered once and can be used anywhere in the project.
 * @example
 * ```ts
 * import { register, BaseNode } from '@antv/g6';
 *
 * class CircleNode extends BaseNode {}
 *
 * register('node', 'circle-node', CircleNode);
 * ```
 * @public
 */
function register(category, type, Ctor) {
    const ext = store_1.EXTENSION_REGISTRY[category][type];
    if (ext) {
        print_1.print.warn(`The extension ${type} of ${category} has been registered before, and will be overridden.`);
    }
    Object.assign(store_1.EXTENSION_REGISTRY[category], { [type]: Ctor });
}
//# sourceMappingURL=register.js.map