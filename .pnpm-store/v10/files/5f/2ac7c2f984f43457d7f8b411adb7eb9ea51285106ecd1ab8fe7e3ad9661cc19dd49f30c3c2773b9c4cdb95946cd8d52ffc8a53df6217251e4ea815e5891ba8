"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readWebpackConfig = readWebpackConfig;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readWebpackConfig(projectPath, rootPath) {
    const projectPathOutOfRoot = projectPath === undefined
        ? process.cwd()
        : path_1.default.join(rootPath !== null && rootPath !== void 0 ? rootPath : "", projectPath);
    const { env, argv } = parseArgs();
    try {
        const configPath = path_1.default.resolve(projectPathOutOfRoot, "./webpack.config");
        const configFile = [".js", ".cjs"]
            .map((ext) => configPath + ext)
            .find(fs_1.default.existsSync);
        const config = require(configFile || configPath);
        if (typeof config === "function") {
            return config(env, argv);
        }
        return config;
    }
    catch (error) {
        if (error && error.code === "MODULE_NOT_FOUND") {
            throw new Error(`Webpack config not found in "${projectPathOutOfRoot}". Make sure a webpack configuration file (e.g., webpack.config.js) exists when using the --webpack flag.`);
        }
        throw error;
    }
}
function parseArgs() {
    const env = {};
    const argv = {};
    process.argv.forEach((arg) => {
        if (arg.startsWith("--env")) {
            if (arg.startsWith("--env.")) {
                const [key, val] = arg.substring(6).split("=");
                env[key] = val === undefined ? true : val;
            }
            else if (arg === "--env") {
                // noop
            }
            else {
                const [key, val] = arg.substring(5).split("=");
                env[key] = val === undefined ? true : val;
            }
        }
        if (arg.startsWith("--")) {
            const [key, val] = arg.substring(2).split("=");
            argv[key] = val === undefined ? true : val;
        }
    });
    return { env, argv };
}
