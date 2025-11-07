import { arrayDiff } from '../../utils/diff';
import { parseExtensions } from '../../utils/extension';
import { print } from '../../utils/print';
import { getExtension } from '../get';
export class ExtensionController {
    constructor(context) {
        this.extensions = [];
        this.extensionMap = {};
        this.context = context;
    }
    setExtensions(extensions) {
        const stdExtensions = parseExtensions(this.context.graph, this.category, extensions);
        const { enter, update, exit, keep } = arrayDiff(this.extensions, stdExtensions, (extension) => extension.key);
        this.createExtensions(enter);
        this.updateExtensions([...update, ...keep]);
        this.destroyExtensions(exit);
        this.extensions = stdExtensions;
    }
    createExtension(extension) {
        const { category } = this;
        const { key, type } = extension;
        const Ctor = getExtension(category, type);
        if (!Ctor)
            return print.warn(`The extension ${type} of ${category} is not registered.`);
        const instance = new Ctor(this.context, extension);
        instance.initialized = true;
        this.extensionMap[key] = instance;
    }
    createExtensions(extensions) {
        extensions.forEach((extension) => this.createExtension(extension));
    }
    updateExtension(extension) {
        const { key } = extension;
        const instance = this.extensionMap[key];
        if (instance) {
            instance.update(extension);
        }
    }
    updateExtensions(extensions) {
        extensions.forEach((extension) => this.updateExtension(extension));
    }
    destroyExtension(key) {
        const instance = this.extensionMap[key];
        if (!instance)
            return;
        if (instance.initialized && !instance.destroyed) {
            instance.destroy();
        }
        delete this.extensionMap[key];
    }
    destroyExtensions(extensions) {
        extensions.forEach(({ key }) => this.destroyExtension(key));
    }
    destroy() {
        this.destroyExtensions(this.extensions);
        // @ts-expect-error force delete
        this.context = {};
        this.extensions = [];
        this.extensionMap = {};
    }
}
/**
 * <zh/> 模块实例基类
 *
 * <en/> Base class for extension instance
 */
export class BaseExtension {
    constructor(context, options) {
        this.events = [];
        this.initialized = false;
        this.destroyed = false;
        this.context = context;
        this.options = options;
    }
    update(options) {
        this.options = Object.assign(this.options, options);
    }
    destroy() {
        // @ts-expect-error force delete
        this.context = {};
        // @ts-expect-error force delete
        this.options = {};
        this.destroyed = true;
    }
}
//# sourceMappingURL=index.js.map