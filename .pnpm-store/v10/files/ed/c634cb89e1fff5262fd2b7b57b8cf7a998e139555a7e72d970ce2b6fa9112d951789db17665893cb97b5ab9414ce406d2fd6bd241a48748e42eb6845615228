"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readWebpackConfig = exports.compatOptionsFromWebpack = void 0;
exports.resolveBundleOptions = resolveBundleOptions;
const pack_shared_1 = require("@utoo/pack-shared");
const readWebpackConfig_1 = require("./readWebpackConfig");
var pack_shared_2 = require("@utoo/pack-shared");
Object.defineProperty(exports, "compatOptionsFromWebpack", { enumerable: true, get: function () { return pack_shared_2.compatOptionsFromWebpack; } });
var readWebpackConfig_2 = require("./readWebpackConfig");
Object.defineProperty(exports, "readWebpackConfig", { enumerable: true, get: function () { return readWebpackConfig_2.readWebpackConfig; } });
function resolveBundleOptions(options, projectPath, rootPath) {
    if (options.webpackMode) {
        let webpackConfig = options;
        const loadedConfig = (0, readWebpackConfig_1.readWebpackConfig)(projectPath, rootPath);
        webpackConfig = { ...loadedConfig, ...webpackConfig };
        try {
            return (0, pack_shared_1.compatOptionsFromWebpack)(webpackConfig);
        }
        catch (e) {
            throw new Error("Error converting webpack config: " + e);
        }
    }
    else {
        return options;
    }
}
