"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const Path = require("path");
const component_1 = require("./component");
const options_1 = require("./options");
const fs_1 = require("./fs");
let PluginHost = class PluginHost extends component_1.AbstractComponent {
    load() {
        const logger = this.application.logger;
        const plugins = this.plugins.length ? this.resolvePluginPaths(this.plugins) : this.discoverNpmPlugins();
        if (plugins.some(plugin => plugin.toLowerCase() === 'none')) {
            return true;
        }
        for (const plugin of plugins) {
            try {
                const instance = require(plugin);
                const initFunction = typeof instance.load === 'function'
                    ? instance.load
                    : instance;
                if (typeof initFunction === 'function') {
                    initFunction(this);
                    logger.write('Loaded plugin %s', plugin);
                }
                else {
                    logger.error('Invalid structure in plugin %s, no function found.', plugin);
                }
            }
            catch (error) {
                logger.error('The plugin %s could not be loaded.', plugin);
                logger.writeln(error.stack);
                return false;
            }
        }
        return true;
    }
    discoverNpmPlugins() {
        const result = [];
        const logger = this.application.logger;
        discover();
        return result;
        function discover() {
            let path = process.cwd(), previous;
            do {
                const modules = Path.join(path, 'node_modules');
                if (FS.existsSync(modules) && FS.statSync(modules).isDirectory()) {
                    discoverModules(modules);
                }
                previous = path;
                path = Path.resolve(Path.join(previous, '..'));
            } while (previous !== path);
        }
        function discoverModules(basePath) {
            const candidates = [];
            FS.readdirSync(basePath).forEach((name) => {
                const dir = Path.join(basePath, name);
                if (name.startsWith('@') && FS.statSync(dir).isDirectory()) {
                    FS.readdirSync(dir).forEach((n) => {
                        candidates.push(Path.join(name, n));
                    });
                }
                candidates.push(name);
            });
            candidates.forEach((name) => {
                const infoFile = Path.join(basePath, name, 'package.json');
                if (!FS.existsSync(infoFile)) {
                    return;
                }
                const info = loadPackageInfo(infoFile);
                if (isPlugin(info)) {
                    result.push(Path.join(basePath, name));
                }
            });
        }
        function loadPackageInfo(fileName) {
            try {
                return JSON.parse(fs_1.readFile(fileName));
            }
            catch (error) {
                logger.error('Could not parse %s', fileName);
                return {};
            }
        }
        function isPlugin(info) {
            const keywords = info.keywords;
            if (!keywords || !Array.isArray(keywords)) {
                return false;
            }
            for (let i = 0, c = keywords.length; i < c; i++) {
                const keyword = keywords[i];
                if (typeof keyword === 'string' && keyword.toLowerCase() === 'typedocplugin') {
                    return true;
                }
            }
            return false;
        }
    }
    resolvePluginPaths(plugins) {
        const cwd = process.cwd();
        return plugins.map(plugin => {
            if (plugin.startsWith('.')) {
                return Path.resolve(cwd, plugin);
            }
            return plugin;
        });
    }
};
__decorate([
    options_1.BindOption('plugin')
], PluginHost.prototype, "plugins", void 0);
PluginHost = __decorate([
    component_1.Component({ name: 'plugin-host', internal: true })
], PluginHost);
exports.PluginHost = PluginHost;
//# sourceMappingURL=plugins.js.map