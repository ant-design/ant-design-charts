"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseExtension = exports.ExtensionController = void 0;
const diff_1 = require("../../utils/diff");
const extension_1 = require("../../utils/extension");
const print_1 = require("../../utils/print");
const get_1 = require("../get");
class ExtensionController {
    constructor(context) {
        this.extensions = [];
        this.extensionMap = {};
        this.context = context;
    }
    setExtensions(extensions) {
        const stdExtensions = (0, extension_1.parseExtensions)(this.context.graph, this.category, extensions);
        const { enter, update, exit, keep } = (0, diff_1.arrayDiff)(this.extensions, stdExtensions, (extension) => extension.key);
        this.createExtensions(enter);
        this.updateExtensions([...update, ...keep]);
        this.destroyExtensions(exit);
        this.extensions = stdExtensions;
    }
    createExtension(extension) {
        const { category } = this;
        const { key, type } = extension;
        const Ctor = (0, get_1.getExtension)(category, type);
        if (!Ctor)
            return print_1.print.warn(`The extension ${type} of ${category} is not registered.`);
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
exports.ExtensionController = ExtensionController;
/**
 * <zh/> 模块实例基类
 *
 * <en/> Base class for extension instance
 */
class BaseExtension {
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
exports.BaseExtension = BaseExtension;
//# sourceMappingURL=index.js.map