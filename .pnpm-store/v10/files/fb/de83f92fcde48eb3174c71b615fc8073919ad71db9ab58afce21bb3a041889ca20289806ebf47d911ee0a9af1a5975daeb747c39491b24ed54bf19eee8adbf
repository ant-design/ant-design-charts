import { ExtensionController } from '../registry/extension';
import { print } from '../utils/print';
export class PluginController extends ExtensionController {
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
        print.warn(`Cannot find the plugin ${key}, will try to find it by type.`);
        const fussily = this.extensions.find((extension) => extension.type === key);
        if (fussily)
            return this.extensionMap[fussily.key];
    }
}
//# sourceMappingURL=plugin.js.map