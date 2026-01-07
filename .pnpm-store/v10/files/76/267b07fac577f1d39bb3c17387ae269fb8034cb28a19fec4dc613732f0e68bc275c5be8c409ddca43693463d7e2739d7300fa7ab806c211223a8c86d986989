import { compatOptionsFromWebpack, } from "@utoo/pack-shared";
import { readWebpackConfig } from "./readWebpackConfig";
export { compatOptionsFromWebpack, } from "@utoo/pack-shared";
export { readWebpackConfig } from "./readWebpackConfig";
export function resolveBundleOptions(options, projectPath, rootPath) {
    if (options.webpackMode) {
        let webpackConfig = options;
        const loadedConfig = readWebpackConfig(projectPath, rootPath);
        webpackConfig = { ...loadedConfig, ...webpackConfig };
        try {
            return compatOptionsFromWebpack(webpackConfig);
        }
        catch (e) {
            throw new Error("Error converting webpack config: " + e);
        }
    }
    else {
        return options;
    }
}
