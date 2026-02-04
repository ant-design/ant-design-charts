"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prettier = (0, tslib_1.__importStar)(require("prettier"));
exports.default = (resolveConfig) => (file) => {
    const config = prettier.resolveConfig.sync(file, {
        editorconfig: true,
    });
    const fileInfo = prettier.getFileInfo.sync(file, Object.assign({ resolveConfig }, config));
    return !!fileInfo.inferredParser;
};
//# sourceMappingURL=isSupportedExtension.js.map