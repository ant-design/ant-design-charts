"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginController = void 0;
const extension_1 = require("../registry/extension");
const print_1 = require("../utils/print");
class PluginController extends extension_1.ExtensionController {
    constructor(context) {
        super(context);
        this.category = 'plugin';
        this.setPlugins(this.context.options.plugins || []);
    }
    setPlugins(plugins) {
        this.setExtensions(plugins);
    }
    getPluginInstance(key) {
        const exactly = this.extensionMap[key];
        if (exactly)
            return exactly;
        print_1.print.warn(`Cannot find the plugin ${key}, will try to find it by type.`);
        const fussily = this.extensions.find((extension) => extension.type === key);
        if (fussily)
            return this.extensionMap[fussily.key];
    }
}
exports.PluginController = PluginController;
//# sourceMappingURL=plugin.js.map