"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const ts = require("typescript");
const typescript_1 = require("../sources/typescript");
function isFile(file) {
    return fs_1.existsSync(file) && fs_1.statSync(file).isFile();
}
class TSConfigReader {
    constructor() {
        this.priority = 200;
        this.name = 'tsconfig-json';
    }
    read(container, logger) {
        const tsconfigOpt = container.getValue('tsconfig');
        const projectOpt = container.getCompilerOptions().project;
        if (!container.isDefault('tsconfig')) {
            this._tryReadOptions(tsconfigOpt, container, logger);
            return;
        }
        if (projectOpt) {
            this._tryReadOptions(projectOpt, container, logger);
            return;
        }
        this._tryReadOptions(tsconfigOpt, container);
    }
    _tryReadOptions(file, container, logger) {
        let fileToRead = file;
        if (!isFile(fileToRead)) {
            fileToRead = ts.findConfigFile(file, isFile, file.toLowerCase().endsWith('.json') ? path_1.basename(file) : undefined);
        }
        if (!fileToRead || !isFile(fileToRead)) {
            logger === null || logger === void 0 ? void 0 : logger.error(`The tsconfig file ${file} does not exist`);
            return;
        }
        fileToRead = path_1.resolve(fileToRead);
        const { config } = ts.readConfigFile(fileToRead, ts.sys.readFile);
        const { fileNames, options, raw: { typedocOptions = {} } } = ts.parseJsonConfigFileContent(config, ts.sys, path_1.dirname(fileToRead), {}, fileToRead);
        container.setValue('inputFiles', fileNames);
        for (const key of typescript_1.IGNORED) {
            delete options[key];
        }
        if (typedocOptions.options) {
            logger === null || logger === void 0 ? void 0 : logger.error([
                'typedocOptions in tsconfig file specifies an option file to read but the option',
                'file has already been read. This is likely a misconfiguration.'
            ].join(' '));
            delete typedocOptions.options;
        }
        for (const [key, val] of Object.entries(options)) {
            try {
                container.setValue(key, val);
            }
            catch (error) {
                logger === null || logger === void 0 ? void 0 : logger.error(error.message);
            }
        }
        for (const [key, val] of Object.entries(typedocOptions || {})) {
            try {
                container.setValue(key, val);
            }
            catch (error) {
                logger === null || logger === void 0 ? void 0 : logger.error(error.message);
            }
        }
    }
}
exports.TSConfigReader = TSConfigReader;
//# sourceMappingURL=tsconfig.js.map